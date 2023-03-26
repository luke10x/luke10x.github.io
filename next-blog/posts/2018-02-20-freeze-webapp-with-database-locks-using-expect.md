---
slug: /blog/freeze-with-database-locks-using-expect
date: "2018-02-20T22:20:00+00:00"
draft: false
title: "Freeze WebApp with database locks (and automate it with Expect)"
---
Each PHP-FPM workers serve web requests relentlessly. 
Sometimes it would be useful to pause a thread executing a 
specific script, so that the whole worker process could be
stopped for some time and examined, (and later released to run again if needed).

If that is a PHP app, setting a breakpoint in XDebug naturally
feels like a way to achieve that. Yet, XDebug is not always available,-
in fact it is not recommended to run it on production
environment at all.

However, webapps typically talk to databases. If any PHP script,
is trying to write to a database record which is locked by another transaction,
then it waits for the locking transaction to release the lock
(which happens when transaction is committed or rolled back).

Starting a transaction like this, but without ending it:

	mysql> START TRANSACTION;
	Query OK, 0 rows affected (0.00 sec)

	mysql> UPDATE wp_posts SET post_content="Pending content..." WHERE id=1;
	Query OK, 1 row affected (0.00 sec)
	Rows matched: 1  Changed: 1  Warnings: 0 

will result in write lock on the record. Therefore a PHP script 
will be frozen when trying to write to that database record.

Any web request that tries to write to the locked record,
now will be blocked by the database lock.

[[[ Here comes the picture ]]]


## But this is too much of typing...

The problem is that to lock a record in this way requires so much effort:
first the transaction has to be started,
then the locking update query has to be executed,
and this database connection has to be left as is,
meanwhile the stopped process can be scrutinized.

Also it is important to make sure the transaction is ended before disconnecting,
otherwise it will remain open until its timeout.

To spare some typing and window switching,
the interaction with the mysql client could be automated using Expect:

From its man-page:

    Expect is a program that "talks" to other interactive programs
    according  to  a  script.   Following the script, Expect knows
    what can be expected from  a  program  and  what  the  correct
    response  should be.  An interpreted language provides branch‐
    ing and high-level control structures to direct the  dialogue.
    In  addition,  the user can take control and interact directly
    when desired, afterward returning control to the script.

We will create an Expect script:

    #!/usr/bin/expect

    set timeout 105
    trap {
            send "ROLLBACK;\rEXIT\r"; expect -exact "Bye"; exit 0
    } SIGINT

    spawn docker exec -it enchantedlamp_mysql_1 sh -c "exec mysql -uroot -p\"\$MYSQL_ROOT_PASSWORD\" wordpress"
    expect -exact "mysql>"
    send "START TRANSACTION;\r"
    expect -exact "mysql>"
    send "UPDATE wp_posts SET post_content='Pending content...' WHERE id=1;\r"
    expect -exact "mysql>"

    send_user "RECORD BLOCKED FOR 100s (C^ FOR EARLY EXIT)"
    send "\r"

    sleep 100
    expect -exact "mysql>"
    send "ROLLBACK;\rEXIT\r"; expect -exact "Bye"; exit 0

This script can be run like `./block-record.exp`,
it will give 100s for debugging the frozen state.
It can be exited earlier with Ctrl+C at any time though.

https://www.thegeekstuff.com/2010/10/expect-examples/

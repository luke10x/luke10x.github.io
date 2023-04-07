---
slug: "/blog/java-cannot-select-between-stdin-and-stdout"
date: "2023-04-07"
title: "Java Selector cannot be used for stdin/stdout"
socialImage: "social-img/java-selector.png"
draft: false
---

Well, I must say, I'm quite irate about this whole situation with Java 
and its inability to listen for stdin and stdout of a running process 
and turn them into SelectableChannels that can be registered to a Selector. 
It's just downright frustrating, especially given how useful SelectableChannel
can be in other contexts.

I was attempting to write a program that could interact with a long-running process 
by reading and writing to its stdin and stdout streams. 
And I was hoping to use selectable channels to do this in a single thread, 
rather than having to spin up multiple threads or use callbacks.

    // Start the long-running process
    Process p = Runtime.getRuntime().exec("myLongRunningProcess");

    // Get the process's stdin and stdout streams
    OutputStream stdin = p.getOutputStream();
    InputStream stdout = p.getInputStream();

    // Wrap the streams in channels (which doesn't work!)
    SelectableChannel stdinChannel = Channels.newChannel(stdin);
    SelectableChannel stdoutChannel = Channels.newChannel(stdout);

    // Create a selector and register the channels
    Selector selector = Selector.open();
    stdinChannel.register(selector, SelectionKey.OP_READ);
    stdoutChannel.register(selector, SelectionKey.OP_READ);

    // Wait for messages on either channel
    while (true) {
        selector.select();
        Set<SelectionKey> selectedKeys = selector.selectedKeys();
        for (SelectionKey key : selectedKeys) {
            if (key.isReadable()) {
                // Handle input from the selected channel
                if (key.channel() == stdinChannel) {
                    // Long running process has typed something on stdin
                } else if (key.channel() == stdoutChannel) {
                    // Long-running process has written to stdout
                }
            }
        }
    }

As you can see, the code is fairly straightforward, but unfortunately, 
the part where we try to wrap the process's stdin and stdout streams 
in selectable channels simply doesn't work.

We're left with no choice but to resort to using threads or callbacks
to handle input and output from the process (I learned the hard way).

Yes, it's great that my search was finally over once I read an answer to
[this question on Stack Overflow](https://stackoverflow.com/questions/39931485/java-process-read-stdout-and-stderr-of-a-subprocess-in-a-single-thread/39932773), 
even if the outcome was unsatisfying in the sense that the approach I had initially hoped to use didn't work out.

I've found an easy option using CompletableFutures to solve the problem:

    Process p = Runtime.getRuntime().exec(commandArgs);
    CompletableFuture<String> errFut = readStderr(p.getErrorStream());
    CompletableFuture<String> outFut = readStderr(p.getInputStream());

And that `readStderr` method is using CompletableFutures
to asynchronously read from an input stream, like this:

    static CompletableFuture<String> readStderr(InputStream is) {
        Executor sameThreadExecutor = Runnable::run;

        return CompletableFuture.supplyAsync(() -> {
            try (
                InputStreamReader isr = new InputStreamReader(is);
                BufferedReader br = new BufferedReader(isr);
            ) {
                StringBuilder res = new StringBuilder();
                String inputLine;
                while ((inputLine = br.readLine()) != null) {
                    res.append(inputLine).append(System.lineSeparator());
                    log.info("ERRRRRR {}:{}", tag, inputLine);
                }
                return res.toString();
            } catch (Throwable e) {
                throw new RuntimeException("problem with executing program", e);
            }
        }, sameThreadExecutor);
    }

Since we're using the same executor for both stdout and stderr streams,
the stdout reading will be blocked until the stderr reading is finished. 
This is because the same thread is executing both tasks.

If the second argument is not provided for the call to CompletableFuture.supplyAsync, 
the default executor for async tasks will be used. 
This default executor is based on the `ForkJoinPool.commonPool()` executor, 
which is shared across multiple CompletableFuture instances.

This way the stdin and stdout will be read in parallelel, but doing this will block 2 threads.
In general, blocking threads can be a serious limitation for high-performance applications, 
since it can limit the overall throughput of the system. 

there is still no way to create SelectableChannels from stdin and stdout streams. 
The SelectableChannel abstraction is a powerful feature of the java.nio package, 
since it allows you to efficiently manage I/O operations 
across multiple channels using a single thread.
It's not clear why this functionality hasn't been added to the standard library yet.

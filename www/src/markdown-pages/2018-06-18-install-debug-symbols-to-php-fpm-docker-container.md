---
slug: /blog/install-debug-symbols-to-php-fpm-docker-container
date: "2018-06-18T23:24:52+00:00"
draft: false
title: "Install debug symbols to fpm Docker container"
---

Container images don't include debug symbols,
perhaps it is more important to reduce size of the images.

Unlike Debian that has all the <package>-dbg' packages
(alternatively, it is possible to get <package>-dbgsym),
Docker image vendors virtually never provide separate versions
with debug symbols enabled. Wordpress official images are
not exceptions.

I can think of the following reasons why the vendors
of the Docker container images don't consider
interactive debugging as a must-have feature anymore:

- Debug symbols increase the image size;
- The code runs in the cloud, that means does not matter where it
  is actually running, so it is not clear how we can attach the 
  debugger;
- Advanced paradigms, like async and coroutines make imperative
  stepping through instructions a technique that gives good
  insight of the runtime state.
- Similarly, the machine code may be optimized in a sophisticated 
  way, so that throttling it to human speed would make it impossible
  to reproduce bugs anyway.

However PHP is quite old and primitive, therefore it can still
be the best to debug it with the good old GDB.

Here, I will try to log, step-by-step what was required to do,
in order to rebuild the image to include the debugging symbols at
the same time reusing as much as possible from the original image,
and not rebuilding everything from scratch.

## Assess the situation

First we will double check that the debug symbols are not there originally:

    root@63a355210d9b:/src# file /usr/local/sbin/php-fpm
    /usr/local/sbin/php-fpm: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=3a1b578d90a949925775c0827920ff4205ee16e3, stripped

That "stripped" means that the binary does not include the debugging data.
(also this can be checked using the 'objdump --syms')

So debug symbols are not installed!

As the image is Debian based, we can check if the php is installed as a package,
as that would allow us just to install additional php-fpm-dbg package:

    root@63a355210d9b:/src# dpkg -S $(which php-fpm) 
    dpkg-query: no path found matching pattern /usr/local/sbin/php-fpm

looks like no, also:

    apt-file find $(which php-fpm)

does not print anything.

So it is clear that PHP is not installed from the APT package.

Nevertheless, checking the history, shows that indeed the message includes
PHP compiled from sources:

    docker history --no-trunc --format '{{.CreatedBy }}' wordpress:fpm
    ...
        /bin/sh -c set -xe  && buildDeps="   $PHP_EXTRA_BUILD_DEPS   libargon2-0-dev   libcurl4-openssl-dev   libedit-dev   libsqlite3-dev   libssl-dev   libxml2-dev   zlib1g-dev  "  && apt-get update && apt-get install -y $buildDeps --no-install-recommends && rm -rf /var/lib/apt/lists/*   && export CFLAGS="$PHP_CFLAGS"   CPPFLAGS="$PHP_CPPFLAGS"   LDFLAGS="$PHP_LDFLAGS"  && docker-php-source extract  && cd /usr/src/php  && gnuArch="$(dpkg-architecture --query DEB_BUILD_GNU_TYPE)"  && debMultiarch="$(dpkg-architecture --query DEB_BUILD_MULTIARCH)"  && if [ ! -d /usr/include/curl ]; then   ln -sT "/usr/include/$debMultiarch/curl" /usr/local/include/curl;  fi  && ./configure   --build="$gnuArch"   --with-config-file-path="$PHP_INI_DIR"   --with-config-file-scan-dir="$PHP_INI_DIR/conf.d"     --disable-cgi     --enable-ftp   --enable-mbstring   --enable-mysqlnd   --with-password-argon2     --with-curl   --with-libedit   --with-openssl   --with-zlib     $(test "$gnuArch" = 's390x-linux-gnu' && echo '--without-pcre-jit')   --with-libdir="lib/$debMultiarch"     $PHP_EXTRA_CONFIGURE_ARGS  && make -j "$(nproc)"  && make install  && { find /usr/local/bin /usr/local/sbin -type f -executable -exec strip --strip-all '{}' + || true; }  && make clean  && cd /  && docker-php-source delete   && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false $buildDeps   && pecl update-channels  && rm -rf /tmp/pear ~/.pearrc
    ...

So we will need to find the [original Dockerfile](https://github.com/docker-library/php/blob/6677546d599d3980781b520f84d03ecaad291dd1/7.2/stretch/fpm/Dockerfile#L104-L166),
to see what command needs to be re-run for our custom image to include the symbols.

We will have to put [our Dockerfile](https://github.com/normantas/enchanted-lamp/blob/master/docker/wordpress/Dockerfile#L45-L46),
that recompiles the PHP with `--enable-debug` flag set.

After the installation we need to rebuild plugins required for the Wordpress with [docker-php-ext-install](https://github.com/normantas/enchanted-lamp/blob/master/docker/wordpress/Dockerfile#L61-L69).

And that is it! After rebuilding this image one should see:

    file /usr/local/sbin/php-fpm
    /usr/local/sbin/php-fpm: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=4f0f0802b93f011a3d1faa92be7e2c0d8646f78a, not stripped

Meaning that our image now can be debugged with GDB!













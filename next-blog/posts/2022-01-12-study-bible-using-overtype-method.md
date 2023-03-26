---
slug: "/blog/study-bible-using-overtype-method"
date: "2022-01-12"
title: "Study Bible using Overtype method"
socialImage: "social-img/bible-overtype-1.png"
draft: false
---

Christian Bible consists of 66 books that include 1,189 chapters. To read it in one go, [it is estimated][1] to take more than 70 hours time.
To study the Bible, you need to read it slowly and stay focused. The problem: how to stay focused in this world of distractions?

[Torah Robot][2] by Matthias Gommel was dispalyed in Jewish Museum in Berlin which I visited in 2015.  The robot walks across the paper scroll and pens the Hebrew letters with black ink. For this machine it takes about 3 months to write The Five Books of Moses. The Torah scrolls used in Synagogue must be acturally hand written by special trained scribe called a [sofer][3]. But it is a duty of every Jew to make a personal copy of the Torah.

I immedialtely liked the idea of writting the Bible. Students who take notes learn faster than the students who don't. So if it helps learning, what if I start  rewriting the Bible in order to study it? Which is a great idea, however unlike a Jewish scribe usin a goose feather, I prefer just to type it on a laptop. I call this method "Overtype". 

I could just read and type it into a text document. But jumping with my eyes from a Bible to the text editor window, I felt even more distracted.
Being a software developer, I decided to write a program that could facilitate the whole process. Something like a simple comand line application, that prints the Bible stopping after each line, and letting me to type it over before going to the next one.

The software is a little bit like one of thouse touch-typing trainers, but with some enhancements specific for studying the Bible. I chose to go with command line as it would be relatively easy to code, as it does not need any UI toolkit, also running the black window of a console in full-screen gives us something like the "distraction free mode" - a trendy feature of modern text editors.

*curses* library helps printing color text and it is used widely for programs that with [terminal UI][4]. So I coded the [Bible Overtype][5] software using this library. I was having much fun to program it in C. And finally I can confirm that typing chapters from Bible using thissoftware is a really pleasant experience. As I liked the result, I decided to share it with others. Perhaps somebody want to use this software too?

However, packaging and distribution of linux packages written in C is quite complicated. I would have to provide a separate package for every platform too. And I did not want to spend time on rewriting it with using any other more portable toolkit. I still think that using *curses* was right way to go because of the following reasons:

- I love terminal apps because they look so smooth, and works well in TMUX;
- It is minimal and lightweight, the executable binary is small;
- Writing programs in C is so satisfying;

On top of that *curses* library is quite portable, and in theory it can run on all major platforms (just it needs to be compile for each of them separately). I found that C programs can be compiled to WASM using [Emscripten][6]. Compiling it for WASM means that you could run the program in the browser on any platform.

The problem is that WASM does not really have terminal interface. I could find some really old attempts of people trying to run *curses* programs on WASM:

- [ncurses port by James Biviano](https://github.com/jamesbiv/ncurses-emscripten)
- [Mad4j's curses.js](https://github.com/mad4j/curses.js)
- [Rhaberkorn's emcurses](https://github.com/rhaberkorn/emcurses)

Rhaberkon's version is the only one that I managed to get working for me. It uses forked [PDCurses](https://github.com/wmcbrine/PDCurses) and [termlib]() to emulate terminal in browser. 

Also porting C programs to WASM have [some limitations](https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm). Because WASM is executed via Javascript engine, which likes non-blocking code, therefore all the C functions have to be non-blocking. And It also has its execution main loop. Changes in the C code had to be done to fit the WASM architecture. In the end of the day Bible Overtype can be built as the original terminal application, and also it can now work in a [browser using WASM runtime][7].

[1]: https://www.patheos.com/blogs/geneveith/2018/08/how-long-does-it-take-to-read-the-bible/
[2]: https://www.haaretz.com/jewish/robot-pens-torah-in-berlin-1.5255114
[3]: https://en.wikipedia.org/wiki/Sofer
[4]: https://github.com/rothgar/awesome-tuis
[5]: https://github.com/luke10x/bible-overtype
[6]: https://emscripten.org/
[7]: https://www.luke10x.dev/bible/

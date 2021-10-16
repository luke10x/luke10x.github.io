---
icon: "✝️"
title: "Bible Overtype"
tags:
  - C
  - libcurses
  - WASM
  - Emscripten
  - Terminal
  - Console
  - Javascript
  - termlib,js

links:

  - title: Run it in your browser
    url:  /bible/
  - title: Source code 
    url: https://github.com/luke10x/overtype
---
My most succesful experinment with real potential to grow into full featured project. It started when I coded a command line tool to myself in studying the Word of God using a method which I also crated myself. The essence of the method is that in order to memorize better and keep good focuse on reading we type every word with a keyboard. So this wa supposed to be just a small command line tool to facilitate the process. And I decided to use C and libcurses to keep it lightweight and portable. The original idea was to have it only as a terminal app for linux. Until lately other people showed some interested, but not everyone is on Linux or Mac. In order to distribute the software in a more convenient way,
I chose to go with a WASM port of the same C code, however i needed to make some major changes in the design to make it portable for to be compiled in WASM, this introduced some bugs, I am still working on it.

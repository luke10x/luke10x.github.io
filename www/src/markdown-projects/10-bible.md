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
  - termlib.js

links:

  - title: Run it in your browser
    url:  /bible/
  - title: Source code 
    url: https://github.com/luke10x/overtype
---
I wrote this tool for myself for studying the Word of God using my "Read and Type" method. It is easier to memorize and keep focus on reading, when you have to type every word with a keyboard. I decided to use C and libcurses to keep it lightweight and portable. The original idea was to have it only as a terminal app for linux. Lately other people showed some interest, but not everyone is on Linux or Mac. In order to distribute the software in a more convenient way, I decided to provide a WASM port of the same C code, however I needed to make some major changes in the design to make it portable for to be compiled in WASM, this introduced some bugs, I am still working on it.

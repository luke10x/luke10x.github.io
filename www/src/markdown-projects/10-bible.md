---
icon: "🌿"
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
I wrote this tool for myself to study Bible using my "Read and Type" method. It is easier to memorize and keep focus on reading, when you have to type every word with a keyboard. I decided to use C and libcurses to keep it lightweight and portable. The original idea was to have it only as a terminal app for linux. Later some other people showed interest in using this appp, but not everyone is on Linux or Mac. In order to distribute the software in a more convenient way, I ported the same C code to WASM, however that required to go through major changes in the design, as a result it introduced some bugs.

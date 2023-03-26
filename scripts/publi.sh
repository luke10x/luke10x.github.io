#!/bin/bash

cd $(pwd)/next-blog/dist/server/pages
pwd
git init
git checkout -b gh-pages
git add .
git commit -m "🚀 release $(date '+%6FT%T%z')"
git remote add origin git@github.com:luke10x/luke10x.github.io.git
# git log
pwd
git push origin gh-pages -f
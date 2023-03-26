---
slug: "/blog/vercel-tries-to-vendor-lock-nextjs-users"
date: "2023-03-26"
title: "Vercel tries to vendor lock Next.js users"
socialImage: "social-img/jekyll.png"
draft: false
---

As someone who recently migrated their blog (this very website) from Gatsby to Next.js, 
I can attest to the challenges involved in the process. 
While Gatsby may have been a trendy solution in the past, 
I found that it lacked the features and flexibility.
Next.js seems to be much better static site generator than Gatsby,
even though Gatsby actually is a Static Site Generator, while Next.js is not.

However, while Next.js offers many advantages over Gatsby, 
I was frustrated by some of the drawbacks of using the framework, 
particularly the way in which Vercel seems to lock users into their hosting platform. 

To begin with, Vercel is the company that maintains the Next.js framework,
which is currently the most popular React-based framework. 
While this may seem like a good thing at first glance, 
it means that Vercel has a significant amount of control
over the development and direction of Next.js.

One way in which Vercel tries to keep Next.js users locked into their hosting platform
is by making it difficult to deploy Next.js applications anywhere else. 
They achieve that by constantly changing build options
making difficult to search online of working step-by-step guides
to deploy Next.Js application as static frontend application,
decoupled of their Node based runtime.

What if my backends for better or wores are in Java?
Or what if I want to take advantage of
CDN or AWS S3 deployment.
Or like in this case I just want to push it to GitHub Pages?

All of that is getting increasingly hard until users might just give up
and they may feel pressured to use Vercel's platform to avoid these challenges, 
even if they would prefer to deploy their applications elsewhere.

As I worked on deploying your Next.js application on GitHub Pages,
I discovered that GitHub was trying to build your pages as Jekyll sites, 
which was causing some significant issues. 
Specifically, it was "eating" the assets like CSS of my website,
leaving your it broken and non-functional.

After some investigation, I discovered that if there was a directory starting with an '_' on GitHub Pages, 
the platform would automatically try to build the files with Jekyll, 
regardless of whether or not they were Jekyll-based. 
Jekyll is probabply the first Static Site Generator that achived signifficant popularity,
although I am not entirelly sure wheather it is still as popular as it use to be.
Nobody is using it anymore basically...

Fortunately, I eventually discovered that
**dropping a .nojekyll file into the root of your public directory**
would prevent GitHub Pages from building your files with Jekyll,
and allow the assets to be properly displayed on your website. 

Interestingly, I also began to suspect that Vercel might intentionally ship their assets in the _next directory
(starting with an underscore), making it more challenging to deploy Next.js on GitHub Pages. 
While I have no proves of such deliberate action, obviously it is a reasonable accusation!
This could be part of their strategy to make Next.js users more likely to choose Vercel for hosting,
as it's easier than dealing with the complications involved in deploying Next.js on GitHub Pages.

What can I say? Sometimes life just simply is not easy. 
Thankfully, I was able to successfully deploy my Next.js application on GitHub Pages, 
albeit after a great deal of persistence and effort. 

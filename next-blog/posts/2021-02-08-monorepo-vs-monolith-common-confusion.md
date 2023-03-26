---
slug: "/blog/monorepo-vs-monolith"
date: "2021-02-08"
title: "Monorepo vs Monolith"
socialImage: "social-img/monorepo-monolith.png"
draft: false
---
Two words that start with Mono, which is means One.

What it means is that all your code goes to same repository.

Opposed to polyrepo, where your source code is distributed into several separate repositories.

<iframe width="560" height="315" src="https://www.youtube.com/embed/9JrQP90c45E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Now the Monolith, is a word having same prefix as Monorepo, perhaps this is why is often confused,
but it means something different.

Monolith describes a software product, that is shipped and deployed together.

This term comes from Microservices Architecture, but word monolith is defines something what is actually Opposite to a microservice.

Clearly Monolith and Monorepo, these are two different concepts, they may intersect, but essentially they describe two different qualities.

When software consists of different components,
the way how it is organized in Version Control System may wary from Monorepo (all code is in one repository) to Polyrepo (each component has for it's repository).

And then Monolith describes the way how the software is packaged, and shipped,-  which is one big deployment of software, no matter how many different responsibilities this package has, all is released in one go. It is opposed to microservices, where each of the microservice is deployed and released together.

A software product may be described by both version-control and deployment strategies independently. Effectively, each software product may be organized in 4 different ways:

## 1. Monolith Monorepo

This is the simplest one, all code from single repository is deployed together. Mostly used by small projects. The software may serve different responsibilities (like backend and frontend), yet it is all deployed together.

Pros:
- Easy to navigate through the code
- Simple deployment pipeline

Cons:
- May be difficult to maintain when project goes big, and starts to serve multiple responsibilities.
- Cannot scale deployment of different components independently

## 2. Monolith Polyrepo

This is same as one above, but it uses libraries and modules stored in external repositories. Compared to Monolith Monorepo this may have cleaner smaller code bases in each repo, which makes it easier to maintain. But it is still deployed all together at once.

## 3. Microservice Polyrepo

Here the application is distributed, we have components deployed separately, but the all are stored in one repository.

Pros:
- Small size of the components
- Each component can be scaled independently
- Relatively simple build pipelines

Cons:
- It is not as easy to navigate through the code, or onboard new people

## 4. Microservice Monorepo

There is only one repository, yet all the components clearly separated, so that they can be released together.

Pros:
- Small size of the components
- Each component can be scaled independently
- Code is easy to navigate through
- Onboarding of new team members is easier

Cons:
- Build pipelines are more complicated, because not all of the CI/CD tools have out-of-box monorepo support

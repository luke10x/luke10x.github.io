---
slug: "/blog/3-must-haves-for-slicing-monolith-frontend"
date: "2023-03-28"
title: "3 Must-Have Prerequisites for Slicing Monolith"
socialImage: "social-img/3-microfrontend-principles.png"
draft: false
---

## (Frontend journey through Digital Transformation)

Once a startup has validated the profitability of its idea, 
it typically evolves into a mid-sized company, 
having moved rapidly from inception to this point. 
The product and brand are now well-established in the market, 
but the next challenge is to compete effectively by adding new features. 
However, the technology underpinning the product 
can become a significant obstacle - a big ball of mud, also known as a monolith.

Despite the company's stable position in the market,
the need to deliver new features rapidly has only intensified. 
However, there are several challenges hindering progress: 
firstly, the company has accrued significant technical debt 
due to its focus on fast prototyping and organic growth; 
secondly, poor architectural decisions have led to siloed 
and problematic systems; 
and thirdly, customer needs have evolved since the company's inception, 
necessitating a more responsive approach. 

These challenges can only be met by embarking on a gradual digital transformation, 
migrating the risky and hard-to-change technical stack 
to better align with business needs 
while simultaneously streamlining it for future adaptability
at the same time ensuring smooth execution of existing business.

Monoliths can pose significant risks, 
as they often become difficult and slow to change over time. 
Making changes to a monolithic architecture 
typically requires extensive testing and development cycles, 
leading to delays in time-to-market and the risk of 
introducing new bugs or technical debt. 

*Vertical slicing* is a technique that addresses these issues 
by breaking down a monolith into smaller, more manageable pieces, 
which can be developed and tested independently. 
By focusing on one vertical slice at a time, 
development teams can streamline development cycles
and introduce new features and capabilities more rapidly. 
It's no surprise, then, that vertical slicing is often 
at the core of digital transformation efforts.

We have become adept at implementing bounded contexts 
and slicing monoliths into microservices in the backend. 
Over the past two decades, 
we have learned how to create scalable and maintainable architectures, 
leveraging buzzwords such as 
Cloud, scalability, CI/CD Pipelines, High availability, 
CQRS, Messaging, Domains, Context Mapping, Caching, and more. 
However, while we have established a stable set of best practices in the backend, 
the frontend and user experience part has often been neglected.

Luckily, over the past several years, 
there have been significant developments in the user-facing area as well.
New best practices have emerged and become more stable, 
allowing for better user experiences and front-end development.
From my experience, I can see three main aspects 
that have had the biggest impact 
on improving the front-end development process and user experience: 
microfrontends, single sign-on, and design systems. 
These aspects have become crucial prerequisites in achieving a successful digital transformation.

### 1. Microfrontends

Microservices are all about the backend, 
but historically we didn't have a clear trend 
for how to do vertical slicing in the frontend. 
It wasn't clear if we should go with *server-side includes*, 
or *client-side includes*, (and hopefully not with iframes).

There were some attempts by companies to organize frontend development 
that have emerged in recent years:

  - *Zalando Tailor*: This is a microfrontend framework developed by Zalando, 
    the European online fashion retailer. 
    Tailor allows for the creation of independent microfrontends 
    that can be integrated into a single page using server-side composition. 
    It also includes features such as shared dependencies, 
    state management, and cross-microfrontend communication.

  - *Spotify Backstage*: Backstage is an open-source platform developed by Spotify 
    to manage their internal tooling and services. 
    It includes a plugin system for adding custom features 
    and a frontend development kit called Backstage-UI, 
    which follows a microfrontend architecture.

  - *Bit*: Bit is an open-source tool 
    for sharing and reusing React components across projects. 
    It allows you to build, test, and deploy individual components, 
    making it easier to manage your codebase and collaborate with other developers.

  - *Open Components*: Open Components is a platform-agnostic library 
    of reusable UI components built with modern web technologies. 
    It provides a set of building blocks for building web applications, 
    making it easier to maintain consistency across your codebase.

JavaScript-based single-page apps have become the norm in web development, 
and regardless of which framework is in use (Angular/React/Vue or any other), 
they all rely on Webpack. 

As of version 5, Webpack now supports **Federated Modules**, 
which is becoming the next big thing 
given its strategically-centered position within the JavaScript ecosystem. 

I think that Federated Modules will become the dominant way
of organizing frontend applications 
into separately released microfrontends for several reasons. 

1. It is *framework agnostic* and can integrate at the DOM level using browser APIs,
  making it adaptable to different projects and technologies (Angular/React/Vue/others);
2. It supports *state management* and communication channels between microfrontends, 
   making it easier to maintain consistency and coherence across different components;
3. Webpack has a unique position in the ecosystem,
   and Federated Modules have *strong community support*, 
   which means that it will continue to improve and evolve over time;
4. Federated Modules are *very well designed*, making it easy to use and understand,
   even for developers who are new to the concept of microfrontends.

### Single Sign-On (SSO)

One of the most obvious challenges that arise when we slice 
our monolithic user experience into microfrontends 
is the need to direct users from one domain to another 
while interacting with the system. 
In most cases, these domains are hosted on different microfrontends, 
which means that users would need to log in separately 
to each of the systems they interact with. 

This is where Single Sign-on (SSO) comes into play. 
SSO enables users to jump from one frontend app to another 
without the need to log in to each system separately. 
With SSO, users can authenticate once and access multiple applications 
without the need to repeat the login process. 

This is not a new problem, 
since we had distributed systems and third party integrations since forever.
In the past, SSO was often seen as a complex and challenging task, 
requiring a lot of custom development work. However, in recent years, 
there has been a growing trend towards standardization and simplification in this area.
Many popular identity providers, such as Google, Facebook, and Microsoft, 
now offer easy-to-use APIs and SDKs for implementing SSO. 
In addition, there are now many open-source and commercial solutions available 
for implementing SSO, such as Auth0, Okta, and Keycloak, 
which can greatly simplify the task 
of integrating SSO into a microfrontends architecture. 
As a result, SSO has become more accessible 
and easier to implement than ever before.

Using off-the-shelf solutions that adhere to industry standards 
is highly recommended in the context of Microfrontends development. 
In contrast, rolling out your own Sign-On solution 
may not align with the Microfrontends approach to software development 
and could be perceived as a not-invented-here fallacy.

Dealing with extensive security and regulatory requirements is a challenging task, 
and rolling out your own Sign-On solution would require a tremendous amount of work. 
Implementing multi-factor authentication (MFA), user registration, management, 
and reset password scenarios could be time-consuming, 
and it's crucial to adhere to regulations such as Open Banking and GDPR, 
where security is paramount. 
It's important to store user PPI (Personally Identifiable Information) 
in a single place, and using an off-the-shelf solution 
that complies with these regulations can save a lot of time and resources.

Using a standard compliant SSO server also provides the advantage 
of easy substitution with an alternative solution 
that adheres to the same standards. In addition, 
having a standard compliant SSO server makes it easier 
to test and compare different solutions. 
For instance, I created an [OAuth Testbed](https://oauth-testbed.luke10x.com/)
web application that can be used to test swapping one 
OpenID Connect compliant solution for another.

### 3. Design Systems

Design Systems have become an essential part of modern software development.
They provide a consistent set of visual and functional elements 
that can be reused across multiple products, or in our case across several Microfrontends.

Design systems offer several advantages, including:

- *Rapid application development*: Developers can quickly create new features 
  and components without needing to involve designers 
  in every aspect of the development process. 
- *Consistent look and feel* for the entire user journey, 
  which is especially important when users interact with multiple applications 
  or platforms from the same brand or organization. 
- Adhere to *accessibility* guidelines and best practices 
  that can help developers create interfaces 
  that are easy to use for people with disabilities.

A component library lies at the core of a Design System. 
It offers a set of pre-designed UI components 
that can be utilized in multiple applications.
There are many popular component libraries available in the market, 
some of which include:

- *Material-UI*: one of the most popular React component libraries 
  based on Google's Material Design system. 
  It provides a rich set of pre-built components, 
  including buttons, forms, typography, and icons.
- *Bootstrap*: one of the oldest and most popular component libraries. 
  It provides a set of CSS and JavaScript components for building responsive, 
  mobile-first web applications.
- *Ant Design*: a popular Chinese React UI library 
  that provides a set of high-quality components and a clean design system. 
  It includes components like buttons, forms, navigation, and data visualization.
- *Semantic UI*: a comprehensive component library 
  that provides a semantic and responsive design system.
  It includes a wide range of components, including buttons, forms, and layouts.
- *Chakra UI*: a popular React component library 
  that provides a set of accessible and customizable components. 
  It includes components like buttons, forms, and typography.

As the demand for scalable and consistent design systems grows,
I predict that we will see an increase in the number 
of component libraries available. 
Despite the popularity of existing component libraries, 
each has its own limitations and drawbacks.

Design system discussions often include mentioning 
[Storybook](https://storybook.js.org). 
Storybook is an open-source tool for building UI components and pages in isolation. 
It provides a sandboxed environment where developers can experiment with components 
and see how they interact with different data sets and states.

It's not uncommon to see companies over-invest in their design system, 
which can lead to wasted resources and slow down development. 
Therefore, it's crucial for companies 
to make a realistic assessment of their capabilities 
and needs before embarking on a design system project. 
It's important to consider factors such as the size of the company, 
the complexity of the application, the available resources, 
and the overall business goals.

For some lean enterprises, having a CSS toolkit like 
[TailwindCSS](https://tailwindcss.com/) 
could be sufficient for their needs. 
TailwindCSS provides a set of pre-designed CSS classes 
that can be used to style UI components quickly 
and consistently across applications. 

- *Utility-first approach*: TailwindCSS follows a utility-first approach, 
  which means that it provides a set of pre-defined classes 
  for common styles and layout, 
  allowing developers to quickly style their components 
  by applying classes rather than writing custom CSS.
- *Customization*: TailwindCSS allows developers to easily customize 
  their styles by modifying the default theme or creating a new one. 
  This provides greater flexibility 
  and control over the design of the application.
- *Size*: TailwindCSS is significantly smaller in size compared to Bootstrap,
  which means that it can be loaded faster 
  and has a smaller footprint on the application. 
  This can be especially important for applications 
  that prioritize performance and speed.

One of the aspects I particularly admire about TailwindCSS 
is its utility-first approach. 
This approach challenges the traditional "separation of concerns" principle 
by promoting a more pragmatic "principle of collocation". 
With TailwindCSS, the styles are defined directly in the markup,
and it also encourages extracting reusable components.

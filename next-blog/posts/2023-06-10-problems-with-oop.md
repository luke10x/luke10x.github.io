---
slug: "/blog/java-cannot-select-between-stdin-and-stdout"
date: "2023-06-10"
title: "Flaws of object-oriented programming"
socialImage: "social-img/oop-flaws.png"
draft: false
---

Sometimes, it can be rather intriguing to question the existing norms of Object-Oriented Programming (OOP) and dare to challenge them ever so slightly. By doing so, we open the doors to exploration and innovation, seeking ways to improve upon the established practices. While the core principles of OOP have proven their worth over time, a touch of skepticism can lead to fresh perspectives, alternative approaches, and the potential for groundbreaking advancements in the world of software development.

## Core pillars of OOP

The core pillars of Object-Oriented Programming (OOP) have long been considered fundamental to the field of computer science over the past decades. Encapsulation, inheritance, polymorphism, and abstraction have provided a powerful framework for organizing and structuring code, promoting modularity, and enhancing code reuse. However, it is important to acknowledge that these pillars are not without their flaws. They can sometimes lead to challenges such as code complexity, tight coupling, and performance overhead. As with any approach, it is crucial to weigh the benefits against the potential drawbacks and carefully consider their application to harness the true potential of OOP in software development.

### 1. Encapsulation

This refers to the practice of enclosing data and functions into a single unit called a class. Encapsulation allows objects to hide their internal state and behavior from the outside world, and only expose a public interface for other objects to interact with.

- It restricts access to data:
  Encapsulation may make it difficult for other classes to access data that they need to perform their functions. This can lead to inefficiencies in the code, as developers may need to write additional code to access data that is hidden by encapsulation. But Architecture! I hear you cry... But to be brutally honest, I think architecture should be maintained but understanding it and discipline, and not by imposing synthetic rules.
- Code bloat:
  Encapsulation increase in the number of classes and methods in a program, which can make the codebase more complex and difficult to maintain. Remember the getter/setter generation? Later we turned to Lombok and Records, but isn't this just solving the problem which we create ourselves with encapsulation?
- Debugging and prototyping become more difficult:
  When encapsulated data is hidden from other classes, it can be difficult to diagnose and fix errors that occur in the code. This can make debugging more difficult and time-consuming. And there may be a good reason to try to break the encapsulation to test a proof-of-concept of a new idea, and the encapsulation quite often gets in your way in this case...
- Performance issues:
  Occurs when objects need to be copied or passed around frequently. This can result in additional overhead and slow down the execution of the program.

### 2. Inheritance

It allows one class to inherit properties and methods from another class. Inheritance is used to create hierarchies of classes, where each subclass inherits the properties and behaviors of its parent class.

- It can lead to tight coupling:
  Inheritance creates a tight coupling between classes, making it difficult to change the implementation of one class without affecting the others. This can make the codebase more brittle and harder to maintain. Thankfully, nowadays this is universally agreed upon across the industry, and people are taught to be careful with inheritance, but if you ask me I would suggest you just simply forget about the Inheritance completely and never even look towards this side...
- [Refused bequest](https://refactoring.guru/smells/refused-bequest)
  This occurs when a subclass inherits from a parent class but refuses or fails to make use of inherited methods or attributes.
- Code duplication: Subclasses may inherit unnecessary functionality from their parent classes. 
  This can lead to larger codebases, longer build times, and more bugs.
- Makes testing more difficult:
  Inheritance makes it more difficult to write automated tests, as changes to one class may affect the behavior of other classes in the hierarchy. This can make it harder to isolate bugs and to write testable code.

### 3. Polymorphism

Refers to the ability of objects to take on multiple forms. Polymorphism is achieved through method overriding and method overloading. Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class. Method overloading allows multiple methods with the same name to exist in a class, as long as their parameter types or numbers are different.

- Makes code harder to understand:
  Objects behave differently depending on their type. This can make it harder to follow the flow of control in the code and to understand the interactions between objects. Although this is quite contested, and I must agree in some cases it is useful to move away from switch statements outside of the object, it is a slippery slope, especially when it comes to dogmatic following of SOLID which is nothing but a lie-to-children and less experienced programmers to keep them distracted from smashing the place up. 
- Leads to code bloat:
  Polymorphism can lead to an increase in the number of classes and methods in a program, which can make the codebase more complex and difficult to maintain.
- Leads to performance issues:
  This is a big one and an obvious, waste of CPU cycles.
  I know some of you may argue that Human Cycles are more expensive than Machine Cycles, but Human Cycles do not exist! All reasoning with someone who is appealing to the novelty of the term they invented is just a waste of time obviously (or a waste of your Human Cycles if you want), so we better stop here.
- Makes debugging more difficult:
  Polymorphism can make debugging more difficult, as the behavior of an object may depend on its type and the context in which it is used. This can make it harder to isolate and diagnose bugs in the code.

### 4. Abstraction

This refers to the practice of focusing on the essential features of an object while ignoring its non-essential details. Abstraction allows programmers to create models of complex systems, where the complexity is hidden behind a simple and intuitive interface. Abstraction is often used in conjunction with encapsulation to provide a clear and concise interface to objects.

- Makes code harder to understand:
  It may hide the details of how a system works. This can make it harder to diagnose and fix bugs in the code, as well as make it more difficult for developers to understand how the code works.
- Over-engineering:
  Developers may spend too much time designing abstract interfaces and classes that are not needed. This can result in code that is unnecessarily complex and difficult to maintain.
- It leads to performance issues:
  Too many layers of abstraction slow down the execution of the program...

## Summary

Object-Oriented Programming, is indeed a beneficial paradigm, particularly for less experienced programmers who require guidance and structure. It provides a clear and intuitive way to organize code by encapsulating data and functions into reusable objects. Although for more experienced, it is nothing just an unnecessary ceremony.
At the end of the day, I must agree that organizing programs in classes and objects is not inherently evil, as long as we don't get to the 4 pillars of madness, or even worse down with SOLID and Clean Code demagogies.

And I am finally, happy to see how new modern languages like Golang, Typescript, and Rust are shifting away from encapsulation and inheritance at least, while promoting some sort of lite-OOP, or even functional paradigm.
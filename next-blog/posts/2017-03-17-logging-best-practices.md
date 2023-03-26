---
slug: /blog/logging-best-practices
date: "2017-03-17T23:44:32+01:00"
draft: false
title: "Logging best practices"
socialImage: "social-img/logging-practices.png"

---

Logs can be of different types and purposes, like error, audit and debug logs.
To work with them efficiently, we need to have certain tools and strategies.
Here are several ideas how to use application logs more efficiently.  

## 1. Consider about audit logging early

Even if there is no specific business need for it,
like regulatory requirements, it can be useful for troubleshooting,
and debugging. To implement an audit log in a clean way, it is necessary 
to consider about it at the early stages of the architectural design.
[Domain Events](https://www.martinfowler.com/eaaDev/DomainEvent.html)
should be clearly separated and logged, at some cases even
[Event Sourcing](https://www.martinfowler.com/eaaDev/EventSourcing.html)
could be used.

## 2. Log Request ID and Correlation ID

HTTP provides request headers X-Request-ID and X-Correlation-ID,
also comparable means can be used together with other protocols.
Either generate it or make clients pass the request ID.
Use same correlation ID in all downstream API calls.
Using them in the logs, would enable filtering and could help
to search for related events.

## 3. Include incident ID to the log messages 

When things go wrong, users should be given with enough information
required to indicate what is the problem when they ask for support.
Exceptions should be logged, error message displayed to the user should
indicate where the logs could be found.
Of course there is no need to tell the user where the log file is stored,
but it is useful to generate the same hash - incident ID, and include it
both to the logged message and the one displayed for the user.

## 4. Implement 0 Bugs policy

All messages from the error log are considered bugs and must be resolved immediately.
Log monitoring here is essential, tools should support easy real time monitoring,
with ability to group and filter error messages. 
Noise should be removed from the error logs. When somebody is already looking at
production issue, any messages related to that issue should not flood others.

## 5. Define tolerance thresholds

Some specific errors might only indicate problem when they occur continuously,
for example some remote service timeouts could be tolerated, if the don't
reach a threshold per time interval.
Monitoring tools should support a way to filter repeated messages that are
within tolerance limits for that type of errors.

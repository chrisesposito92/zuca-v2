---
title: "AQuA API Introduction"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-api-introduction"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:47.967Z"
---

# AQuA API Introduction

The Aggregate Query API (AQuA) is a REST API that executes multiple ZOQL queries in a sequential order within a single read-only database transaction, supporting features like incremental data export, segment-based file export, and monitoring through AQuA Job Finder.

Aggregate Query API (AQuA) is a REST-based API that enables bulk and incremental extraction of Zuora transactional and subscription data using multiple ZOQL or Export ZOQL queries executed sequentially in a single read-only snapshot transaction. It supports both stateless and stateful modes and is optimized for large-scale data extraction, especially for warehousing, analytics, or external system integration use cases.

## Why Use AQuA API?

Using the AQuA API, you can do the following:

-   Continuously query data

    You can export data incrementally, instead of exporting all of the data, all the time.


-   Export deleted data

-   Export files in segments

    When you have large amounts of data, you can export your data in segments, instead of using bulky exports which can timeout.


In addition, AQuA API supports the following:

-   Stateless and Stateful Modes

-   AQuA Job Finder for monitoring purposes

-   Notification upon completion

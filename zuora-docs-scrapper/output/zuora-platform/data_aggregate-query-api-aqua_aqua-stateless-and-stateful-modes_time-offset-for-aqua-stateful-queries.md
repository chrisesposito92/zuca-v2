---
title: "Time offset for AQuA stateful queries"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-stateless-and-stateful-modes/time-offset-for-aqua-stateful-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:05.272Z"
---

# Time offset for AQuA stateful queries

Learn how to configure a time offset for AQuA stateful queries to control the data retrieval interval.

In stateful mode, by default Zuora returns data that were created or updated between the completion time of the previous stateful query and the current time. However, you can configure a time offset to control the end time of this interval using either of the following approaches:

-   Configure AQuA API Stateful Mode Time Offset

-   Post Query with Time Offset


For example, suppose that you set the AQuA API Stateful Mode Time Offset to 600 seconds. If you execute a query in stateful mode at 2:00 AM, Zuora returns data created or updated between the completion time of the previous stateful query and 1:50 AM.

If you use the `offset` parameter in the request body when submitting a query, the `offset` value in the request body will take effect rather than the value in the AQuA API Stateful Mode Time Offset setting.

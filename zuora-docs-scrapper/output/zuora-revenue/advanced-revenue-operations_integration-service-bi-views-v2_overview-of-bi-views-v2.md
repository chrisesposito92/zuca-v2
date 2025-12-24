---
title: "Overview of BI Views V2"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/integration-service-bi-views-v2/overview-of-bi-views-v2"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:19.558Z"
---

# Overview of BI Views V2

The BI Views API (integration services) enables downloading Zuora Revenue data into external data warehouse systems.

In version 36.008.00, a new version of BI Views API specifications, which is also referred to as integration services, is released. The BI Views APIs are used to download Zuora Revenue data into your data warehouse systems.

## Integration service endpoints

Going forward, the Zuora Revenue integration services are available from the provided vanity URL. For example, the Zuora Revenue instance is accessed from the following URL:

https://my-tenant.revprooncloud.com

Then, the integration service is available from the following URL:

https://my-tenant.revprooncloud.com/api/integration

The new version of BI views operations is available under the following path:

https://my-tenant.revprooncloud.com/api/integration/v2/biviews

For detailed API specifications, see [Zuora Revenue API Reference](https://developer.zuora.com/other-api/revenue/overview/).

## New features of BI Views V2

Compared with the previous version, this new version enables accelerated downloads, and downloading of large datasets, and assures data consistency.

## Accelerated downloads

An enhancement of BI Views V2 is the accelerated data downloads. This enhancement provides the following features to accelerate data download especially in the large volume scenario:

-   Increased row count for download

-   Compressed download support

-   Use of continuation token

-   Selectable fields for download


## Activity monitoring

With the introduction of the continuation token in BI Views V2, after a data query request is made, the status of the query can be retrieved at any time. If a query is pending for a long time, corrective actions can be taken accordingly.

## Download data without row counts

It is a common practice to get to know the number of rows that will be returned for a query and then to programmatically scroll for the number of pages to download. In BI Views V2, two approaches are provided to download data.

For large-volume scenarios, the above-mentioned common practice might result in a timeout response when the request to get the row count is made. In this case, it is feasible to start downloading and keep scrolling to a point where there is no more data without knowing the row count.

## Rate limits

For optimal use of the system, rate limits are placed on the number of parallel executions that one client can perform against all BI Views and per BI View.

Typically, 5 parallel queries are allowed against all the BI Views. For a given BI view, only one parallel query is allowed.

If these limits are to be breached, a rate limit alert message will be returned when a request to get data is made. To cancel an active task, use the Cancel task operation.

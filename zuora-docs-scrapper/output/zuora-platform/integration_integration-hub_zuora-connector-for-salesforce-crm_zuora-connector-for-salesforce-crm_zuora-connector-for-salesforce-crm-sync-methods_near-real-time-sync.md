---
title: "Near real-time sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/near-real-time-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:34.908Z"
---

# Near real-time sync

This topic provides an overview of Near Real-Time Sync, which sends record changes from Zuora to Salesforce via SOAP APIs in near real time.

Near Real-Time Sync automatically synchronizes record changes from Zuora to Salesforce in near real time. In this sync mode, Zuora uses Salesforce SOAP API calls to write data to your Salesforce org.

## Enable Near Real-Time Sync

Note:

Access to this feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions) for details. Get in touch with our sales team through [zuora.com](https://www.zuora.com/) for specific terms and pricing.

## Configure and Monitor Near Real-Time Sync in Zuora

After a Near Real-Time Sync session is triggered, you can monitor the sync status on the Sync History page.

## Salesforce API Limits

Near Real-Time Sync is a Salesforce APIs-based sync and consumes Salesforce API limits.

Salesforce limits the total inbound API requests (calls) for an organization. When your Salesforce account reaches 90% of the API call limitation, the Salesforce warns against the API consumption. Multiple connectors or different applications using the same Salesforce account exhaust the API call limitation. To resolve this error, increase the API requests limitation. For more information about Salesforce API limitations, see [API Request Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).

## Sync Latency

Latency is the total time taken for the data to reach its destination. This time is usually the round-trip time measured in P50 and P90, where P denotes the percentile of total requests. Let’s take an example to illustrate:

Say, we have the following latencies in seconds: 50, 78, 25, 90, 102, 68.

Now arrange them in ascending order, and you get. 25, 50, 68, 78, 90, 102.

The P50 latency for this will be the next latency after skipping the first 50% of data i.e. 78 seconds. Similarly, P90 = 102 seconds.

## Expected sync latency

For this connector, you can expect your data to synchronize with the following latencies measured over a seven-day rolling period:

Latency is the total time taken for the data to reach its destination. This time is usually the round-trip time measured in P50 and P90, where P denotes the percentile of total requests. Let’s take an example to illustrate:

The P50 latency for this will be the next latency after skipping the first 50% of data i.e. 78 seconds. Similarly, P90 = 102 seconds.

-   P50 (the maximum latency for the fastest 50% of all requests) under 2 minutes.

-   P90 (the maximum latency for the fastest 90% of requests) under 10 minutes.


-   P50 (the maximum latency for the fastest 50% of all requests) under 2 minutes.

-   P90 (the maximum latency for the fastest 90% of requests) under 10 minutes.


## Delays in Data Sync

Salesforce API limits allow up to 200 records (batch size) in one API call. Near real-time sync batches any record changes coming from Zuora billing in a queue, so depending upon the load, the batch size can be 1 (minimum) and up to 200 (maximum). A bigger batch size may mean higher latency.

In addition, there may be network latencies due to several factors that may delay the time it takes for data to synchronize fully. In some cases, data can also take some time to show up in Salesforce's user interface.

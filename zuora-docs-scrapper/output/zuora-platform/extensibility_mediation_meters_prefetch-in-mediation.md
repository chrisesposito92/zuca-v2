---
title: "Prefetch in Mediation"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/prefetch-in-mediation"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:48.867Z"
---

# Prefetch in Mediation

Prefetch in Mediation copies relevant Zuora Billing and product data into Mediation's internal store so that meters can enrich and process usage events quickly and accurately.

When you meter raw usage events, Mediation often needs additional context from Zuora Billing to guide and rate those events. For example, a meter might need charge names, products, or subscription details to determine the correct price or to drive routing logic.

Prefetch is the process of copying this reference data from Zuora Billing into Mediation's internal key-value store (TStore). By keeping the relevant business objects close to the pipeline, Mediation can enrich incoming events with low latency and with the correct charge, subscription, and product information.

## Why is prefetch required?

Prefetch is required for two main reasons:

-   Lower latency - When reference data (such as accounts, subscriptions, and charge definitions) is already cached in Mediation, enrichment does not have to call Zuora Billing for every event. This reduces round trips and lets your meters process high volumes of events quickly.

-   Accurate enrichment - Prefetch provides the context needed to attach the correct charge, charge name, product details, and other Billing attributes to raw usage events before they are rated or stored. Without up‑to‑date reference data, events may be enriched with missing or incorrect values.


## What data is prefetched?

By default, Prefetch focuses on the Billing and product objects that most meters use for enrichment and guiding.

Account group objects commonly included:

-   Account

-   Subscription

-   RatePlan

-   RatePlanCharge

-   RatePlanChargeTier


Product group objects commonly included:

-   Product

-   ProductRatePlan

-   ProductRatePlanCharge

-   ProductRatePlanChargeTier


Anything that is not part of the configured Prefetch models is not cached by default. If you need enrichment based on additional Billing objects or complex conditions, you can use Data Query–based enrichment.

## How prefetch works

Prefetch performs automatic syncs on a rolling 5-minute interval. Each sync can take a variable amount of time, because it depends on upstream services. After each sync completes, the system waits 5 minutes and then starts the next sync.

In addition to automatic syncs, you can manually refresh prefetched data from the Enrichment processor. Manual sync is especially useful when you have just updated product catalogs or other Billing data and want those changes reflected in Mediation immediately, rather than waiting for the next automatic run.

## Limits

For enrichment options that use standard Prefetch of Account and Product groups:

-   Maximum number of input records per Billing model after filters: 10 million.

-   Maximum number of output records: 10 million.


For enrichment options that use Data Query SQL:

-   Maximum number of input records per Billing model after filters: 10 million.

-   Maximum number of output records: 500,000.

-   By default, Mediation does not automatically sync data from Billing for Data Query–based enrichments, because they can require a full sync. You can refresh the synced data manually. If you need automatic sync for Data Query-based enrichment, Zuora must review your SQL and enable auto full sync as a prerequisite.

-   The output schema of guided fields is wrapped as text by default.

-   Updated or newly created Billing objects may not be reflected in Data Query-based enrichment until the next incremental or full sync completes.


## Risks of skipping or delaying prefetch

If Prefetch is not performed, through scheduled incremental syncs and occasional manual/full syncs, or if the cache becomes stale, Mediation's internal key-value store can contain outdated reference data.

-   Events may be enriched with incorrect account, subscription, or charge information.

-   Guiding and rating may produce inaccurate results, because the mapping between raw usage events and their Billing context is wrong or incomplete.

-   Downstream Billing outcomes, such as charges created from usage, may be inaccurate if they rely on stale product or pricing data.


## Best practices

-   Make sure Prefetch and Lookup is enabled for your tenant before you rely on Billing-based enrichment in production.

-   Provide Zuora with an estimation of the volume of Billing objects to be prefetched, so that sync schedules and limits can be tuned appropriately.

-   For Data Query–based Prefetch, verify your SQL in Data Query first, including adding a "limit 1" clause during tests to avoid large intermediate result sets.

-   Use the Prefetch Status and Last Updated timestamp in the Enrichment UI to confirm that reference data is fresh before running high-value or production meters.

---
title: "Check and refresh prefetch data"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/prefetch-in-mediation/check-and-refresh-prefetch-data"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:50.159Z"
---

# Check and refresh prefetch data

Learn how to check the status of prefetched data used by the Enrichment processor and how to trigger a manual prefetch when you need an immediate update.

-   Ensure that the Prefetch and Lookup feature is enabled for your tenant. Contact [Zuora Global Support](https://www.zuora.com/support-center/) to request Prefetch enablement.

-   Add an Enrichment processor to your meter and configure it to use Product or Account data or Data Query, depending on your use case.


1.  On the meter definition that contains your Enrichment processor, access the Enrichment processor settings.
2.  Click the Prefetch button in the upper-right area.

    The Data Prefetch window displays the status of the prefetch and available actions. The process can be in one of the following states:

    -   NEVER FETCHED - Prefetch has not been run yet for this processor.

    -   FETCHING - A prefetch operation is currently in progress.

    -   FETCHED - A prefetch operation completed successfully, and cached data is available for enrichment.


3.  To start a manual prefetch choose one of the available actions in the Action field.

    Note:

    You can monitor the status of data prefetch while a meter is running, by clicking the Prefetch button. However, the options for manual fetch actions will remain inactive and not available during the meter run.

    -   Fetch - Start the first prefetch for this processor if no data has been fetched yet.

    -   Fetch Again - Run a new prefetch to refresh data that was previously fetched.

    -   Cancel - Cancel a prefetch that is currently in progress.


4.  After prefetch has completed, run or test the meter to verify that the enriched events include the updated data.

    If the enrichment results still appear outdated, repeat the manual fetch and confirm that the Last Updated timestamp has changed.

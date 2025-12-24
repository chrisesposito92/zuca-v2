---
title: "Advanced sync settings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/advanced-sync-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:09.293Z"
---

# Advanced sync settings

Configure Advanced Sync Settings in Zuora to manage sync performance and reduce errors during parallel batch processing.

By default, Zuora configures Turbo Sync for optimal performance. For heavy users of custom triggers on 360 objects, Advanced Sync Settings provides options for managing and reducing the possibility of errors during parallel batch processing.

Zuora strongly recommends that you do not change the defaults. Changing the Batch Mode and Batch Size default values will affect sync performance.

Navigate to the Advanced Sync Settingssection and click edit to configure.

The following fields are available to configure:

-   Batch Mode Available options:
    -   Default. Sync batches are submitted in a mix of Parallel and Serial mode for optimal performance.
    -   Serial Only. Choose this option if you deploy custom triggers in your Salesforce org that could have a high possibility of errors during parallel batch processing. Turbo Sync will submit all sync batches in serial mode and run slower.
    -   Parallel Only. Sync batches are submitted in Parallel mode for all objects.
-   Batch SizeChoose a smaller batch size if you deploy custom triggers in your Salesforce org that could have high possibility of errors during parallel batch processing. Turbo Sync with a smaller batch size will consume more daily batch limits in your Salesforce org and run slower. Values are:
    -   9000 (default)
    -   8000
    -   7000
    -   6000
    -   5000
    -   4000
    -   3000
    -   2000
    -   1000

---
title: "Manual sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/manual-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:01.344Z"
---

# Manual sync

Learn how to manually sync objects like Accounts & Related Objects and Product Catalog to Salesforce.

1.  In the Manual Sync section, click the Sync arrow and select the objects to sync from the list. Accounts & Related Objects and Product Catalog are available for sync. If you select Accounts & Related Objects , note that only the subscriptions in the Active, Pending, and Cancelled state are synced to Salesforce. Draft and Deleted subscriptions are not synced to Salesforce.
2.  Click Sync . The Sync Started pop-up window appears to confirm that the sync request was queued. When the sync is completed, your data can be viewed from Salesforce for the object you selected to sync.
3.  See [Sync Cleanup](/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/synchronize-data-from-zuora-to-salesforce/about-360-sync-cleanup) if you want to run sync cleanup that is available via the clean up button .

Be aware that quotes created using the existing product catalog in Salesforce may not work properly after you run Product Catalog Cleanup.

---
title: "Retry sync failures manually via sync failure list page"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/sync-failures-and-retries/retry-sync-failures-manually-via-sync-failure-list-page"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:57.776Z"
---

# Retry sync failures manually via sync failure list page

Learn how to manually retry sync failures using the Sync Failure List page or the System Health Dashboard.

You can manually retry sync failures through two different methods: via the Sync Failure List page or through the System Health Dashboard .

1.  On the Sync Failure List page, select the checkboxes before the failure records to retry the sync. You can quickly select all the records by selecting the checkbox in the header row. Also, you can select the records by object type using the object type filter, as shown in the following step:

    -   Select the object type from the Record Type field at the top right of the Sync Failure List page. When you select a parent object type to re-sync, its child object type will also be re-synced. For example, if you select the Invoice objects to re-sync, the Invoice Item and Taxation Item objects will also be re-synced.


2.  Click Retry to retry the sync.

    -   If a failure record is successfully re-synced, it will be removed from the Sync Failure List page automatically.

    -   If a failure record is failed to be re-synced, the record will remain on the Sync Failure List page with the same ZUORA ID field, but with the SYNC DATE field being updated to the latest time.


3.  Optional - Click Retry All to retry sync for all the unsuccessful synced records.

    ![](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/integration_hub/Zuora_Connector_for_Salesforce_CRM/_media/Manual_List.png)

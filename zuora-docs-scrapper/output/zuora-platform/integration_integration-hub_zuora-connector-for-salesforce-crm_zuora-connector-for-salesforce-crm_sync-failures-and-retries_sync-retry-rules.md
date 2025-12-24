---
title: "Sync retry rules"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/sync-failures-and-retries/sync-retry-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T08:33:11.955Z"
---

# Sync retry rules

This article outlines the retry rules for synchronizing failed records in Zuora Connector for Salesforce CRM.

f there are records that failed to be synchronized, Zuora Connector for Salesforce CRM will retry syncing those failed records, in subsequent sync sessions. The retry rules consist of the following:

-   If the previous operation was a Sync Cleanup, all object records will be synchronized.

-   If the object type has not been synchronized since the last finished Sync Cleanup, all object records of this type will be synchronized.

-   If there was a sync and the sync was cancelled, all objects records will be re-synched.

-   If the last sync ended with errors before this object type was synchronized, the object records with errors will be re-synchronized.

-   If the previous sync ended with errors due to a field migration job for an upgrade of the Salesforce package, the sync session will start from where the last sync stopped.

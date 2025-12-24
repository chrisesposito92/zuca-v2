---
title: "Account audit and sync retry in Zuora 360 for Salesforce"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/view-sync-history/account-audit-and-sync-retry-in-zuora-360-for-salesforce"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:14.233Z"
---

# Account audit and sync retry in Zuora 360 for Salesforce

This document provides guidance on auditing accounts and retrying syncs in Zuora 360 for Salesforce.

## Account Audit

The Audit Account page lists the first 40 accounts that have a CRM ID but were not synchronized to Salesforce. Review each account and resolve the discrepancy by syncing the account to Salesforce. In the Sync History section, click account audit to open the Audit Account page.

## Sync Notification

For Recurring Sync jobs, your tenant admin will receive email notifications for the event type specified in the sync setting. Notifications are sent to the user who is setting up the email notifications and include the following information:

-   Tenant Id

-   Tenant Name

-   Entity Id if Multi-entity is enabled

-   Entity Name if Multi-entity is enabled


## Sync Retry

If there are records which failed to be synchronized, Zuora 360 will retry syncing those failed records, in subsequent sync sessions. The retry rules consist of the following:

-   If the previous operation was a Sync Cleanup, all object records will be synchronized.

-   If there has been a cancelled Sync Cleanup since the latest finished sync, all object records will be synchronized.

-   If this object type has not been synchronized since the last finished Sync Cleanup, all object records of this type will be synchronized.

-   If there was a sync and the sync was cancelled, all objects records will be re-synched.

-   If the last sync ended with errors before this object type was synchronized, the object records with errors will be re-synchronized.

-   If the previous sync ended with errors due to a field migration job for an upgrade of the Salesforce package, the sync session will start from where the last sync stopped.


Real-time Sync does not retry the sync failures happened in Turbo Sync or Manual Sync. The sync failures in Manual or Turbo Syncs would be retried in the next Manual or Turbo sync session.

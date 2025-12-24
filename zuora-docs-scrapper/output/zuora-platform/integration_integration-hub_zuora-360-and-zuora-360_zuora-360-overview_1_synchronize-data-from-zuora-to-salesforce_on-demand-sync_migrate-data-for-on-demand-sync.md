---
title: "Migrate data for on-demand sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/on-demand-sync/migrate-data-for-on-demand-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:31.976Z"
---

# Migrate data for on-demand sync

Steps to migrate data for on-demand sync when upgrading from Zuora 360 version earlier than 2.2.

1.  Log on to Salesforce as an admin user, and verify that the Salesforce user used for Zuora CPQ sync has the Customize Application user permission. If the user does not have the permission, you must grant the permission to the user. This user permission is necessary only for the package data migration. After the migration is completed, you can revoke this permission from the user.
2.  Log in to Zuora and start an Account & Related Object sync.
3.  Once the sync session is completed (with either a success or failure result), the package data migration is complete. You can now use the On-demand Sync feature.

See the following topics for more information about configuring and using On-demand Sync:

-   Configure Account and Billing Account Layouts for On-Demand Sync

-   On-Demand Sync Global Apex Classes

-   On-Demand Sync Example Codes

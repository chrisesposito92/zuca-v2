---
title: "Migrate to on-demand sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/on-demand-sync/migrate-to-on-demand-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:42.969Z"
---

# Migrate to on-demand sync

Learn how to migrate to On-Demand Sync by verifying user permissions in Salesforce, initiating a sync in Zuora, and completing the package data migration.

1.  Log on to Salesforce as an admin user, and verify that the Salesforce user used for Zuora CPQ sync has the Customize Application user permission. If the user does not have the permission, you must grant the permission to the user. This user permission is necessary only for the package data migration. After the migration is completed, you can revoke this permission from the user.
2.  Log in to Zuora and start an Account & Related Object sync.
3.  Once the sync session is completed (with either a success or failure result), the package data migration is complete. You can now use the On-demand Sync feature.

See the following topics for more information about configuring and using On-demand Sync:

-   [Configure Account and Billing Account Layouts for On-Demand Sync](/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/on-demand-sync/configure-account-and-billing-account-layouts-for-on-demand-sync)

-   On-Demand Sync Global Apex Classes

-   On-Demand Sync Example Codes

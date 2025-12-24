---
title: "Migrate new fields via migration custom settings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/upgrade-zuora-360/migration-keys-for-migration-field-sets/migrate-new-fields-via-migration-custom-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:08.355Z"
---

# Migrate new fields via migration custom settings

Learn how to control data sync for updated objects using Migration Custom Settings after a Zuora 360 upgrade.

1.  In your Salesforce org, navigate to Setup > Develop > Custom Settings.
2.  Click Manage for MigrationSettings
3.  For each setting you want to migrate, repeat the steps:
    1.  Click the setting key.
    2.  Click Edit.
    3.  Clear the Migrated field.
    4.  Click Save.
4.  Check the status of the migration jobs:
    1.  Navigate to Setup > Jobs > Apex Jobs.
    2.  Check the status of the post-installation job, ChainedJob, in the Apex Jobs table.
    3.  If ChainedJob failed, navigate to Setup > Administration Setup > Monitoring > Debug Logs to see detailed information of the failure or error.
    4.  If you cannot find any useful information under Debug Logs, contact [Zuora Global Support](https://support.zuora.com/) for assistance.

---
title: "Migrate settings for Zuora 360"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/migrate-settings-for-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:56.412Z"
---

# Migrate settings for Zuora 360

Learn how to migrate individual settings for Zuora 360 using migration custom settings.

If you have a big volume of data, syncing all the data for updated objects can potentially take a long time after a package upgrade. You can use the Migration Custom Setting to control the sync of the updated objects.

By default, theMigratedfield in the Migration Keys is set totrue, and the data for the updated objects are not migrated in the first sync session after the Zuora 360 upgrade.

Submit a request at [Zuora Global Support](https://www.zuora.com/support-center/) if you require additional information about the Migration Custom Settings.

The following are the migration keys and the Zuora 360 package versions the keys were added. To migrate the data for the updated objects, edit the migration keys between the before and after the upgrade versions. For example, if you upgraded Zuora 360 from version 2.104 to 3.0, edit all the Migration Keys for the version 2.104, 2.110, 2.111, and 3.0 when you are ready to sync the updated object data.

| Zuora 360 Package Version | Migration Keys |
| --- | --- |
| 4.2 | PE-501-ChargePE-520-PaymentMethod |
| 3.44 | PE_303_SubscriptionProductCharge |
| 3.4 | PE-81_Subscription |
| 3.3 | COM11312_BillingAccount |
| 3.2 | MultiEntity_BillingAccountMultiEntity_Product |
| 3.0 | CPQ_BillingAccountCPQ_InvoiceMigrationCPQ_SubscriptionCPQ_SubscriptionChargeCOM-9137_Quote_SubscriptionCOM-9137_SoldToContact |
| 2.111 | COM_10097_SubscriptionCharge |
| 2.110 | COM-8422_InvoiceMigrationCOM-8422_PaymentMethodCOM-8422_SubscriptionMigrationCOM-8422_RefundMigrationCOM-8422_PaymentMigration |
| 2.104 | COM8903_OnlySubUpdate_SubscriptionCOM8903_OnlySubUpdate_Charges |

1.  In your Salesforce org, navigate to Setup > Develop > Custom Settings , and click MigrationSettings .
2.  For each setting you want to migrate, repeat the steps:
    1.  Click the setting key.
    2.  Click Edit .
    3.  Clear the Migrated field.
    4.  Click Save .

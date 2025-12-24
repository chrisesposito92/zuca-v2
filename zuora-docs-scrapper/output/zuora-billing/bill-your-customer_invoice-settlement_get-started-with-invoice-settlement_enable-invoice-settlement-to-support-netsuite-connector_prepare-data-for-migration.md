---
title: "Prepare data for migration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector/prepare-data-for-migration"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:00.784Z"
---

# Prepare data for migration

Prepare the data for migration

Follow the pointers below to prepare data sync for Netsuite.

1.  Sync all Invoice Item Adjustments (IIA): Prior to enabling Invoice Settlement in Billing, ensure that all the required IIA are synced, otherwise you'll have to manually deal with unsynced IIA. Once IS is enabled, syncing between IIA and NS Connector will no longer be possible. For additional information, refer to [Invoice Settlement migration checklist and guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide).
2.  Sync all negative invoices: Before enabling Invoice Settlement in Billing, ensure that you synchronize all the required negative invoices, as the new connector will not synchronize the negative invoices post Invoice Settlement enablement. During the migration process, the negative invoices are converted to credit memos. One credit memo is created from one negative invoice. The negative invoice is written off with Invoice Item Adjustments first. Then, a credit memo is created from a pre-configured one-time charge. The new NetSuite connector won't synchronize IIA generated during the migration stage. So, no action is required for the generated IIA.
3.  Stop the creation of negative invoices and Invoice Item Adjustments (IIA) before enabling Invoice Settlement.
4.  Ensure that your tenant has been successfully migrated to Invoice Settlement (IS).
5.  Once the migration to IS is complete, generate a new OAuth.
6.  Navigate to Connect > NetSuite connector instance > Edit and update the Zuora credentials with the newly generated OAuth.
7.  After updating the credentials, your connector settings should display the IS-specific objects and configurations.

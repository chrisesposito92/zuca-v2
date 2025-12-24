---
title: "Migrate Invoice Settlement data"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector/migrate-invoice-settlement-data"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:03.663Z"
---

# Migrate Invoice Settlement data

Migrate the Invoice Settlement data

Upon completion of the specified prerequisites, proceed with the IS data migration in accordance with the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/enable-invoice-settlement) enablement process and troubleshooting guidelines.

Following the activation of IS, perform the following actions.

1.  Set Transfer to accounting to Yes for migrated credit memos, which are generated during IS data migration for negative invoices. To prevent the synchronization of these transactions into Netsuite again and avoid duplicate transactions, update the credit memos using the specified filter criteria:

    sqlCopy code select id, MemoNumber from creditmemo where ReasonCode = 'AR Mig - negative invoice';

    This update can be executed using the Developer Tool or by updating credit memos in bulk.

2.  Once IS is enabled, proceed to re-provision and set up a new Netsuite Connector by performing the subsequent steps.
3.  Generate an OAuth user for your Connect App.
4.  Create a new connector app instance by selecting Zuora Connector For NetSuite from the dropdown list after clicking the \+ button. Access the Zuora Connector for NetSuite through the Zuora homepage, Marketplace, or in Zuora Connect under My Connect > Tenants.
5.  Provide the required credentials in the pop-up window.
6.  Open a ticket at [Zuora Global Support](https://support.zuora.com/) with the old and new instance IDs, and the Zuora provisioning team will provide a new account ID and environment ID.
7.  Configure the sync preferences by following the instructions in Configure Sync Preferences for the new Connect App instance.
8.  When the new NS Connector is prepared, discontinue the use of the old NS connector app.

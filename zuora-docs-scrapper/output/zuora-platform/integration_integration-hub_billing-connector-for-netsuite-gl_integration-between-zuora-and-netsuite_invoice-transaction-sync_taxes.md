---
title: "Taxes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync/taxes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:22.563Z"
---

# Taxes

Information on taxes

Tax Items and Tax Details are also transferred to NetSuite. These Tax Details are treated as invoice line items. There can be multiple Tax Lines for a single Charge.

1.  During the NetSuite Connector setup process, you must create a NetSuite item manually for each Zuora Tax Code. You must configure this item to reference a NetSuite income account.
2.  Zuora will sync tax amounts as normal invoice lines in NetSuite. The line will reference the item created for the given Tax Code. The invoice and the invoice lines will be marked as non-taxable to prevent NetSuite from calculating tax again.

If you want to have NetSuite perform the taxation:

1.  Disable Taxation in Zuora.
2.  In the [NetSuite Connector Advanced Settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings), set Use Standard Invoice Sync to No.
3.  Load the Zuora invoice into NetSuite, and NetSuite will apply taxes based on the taxation rules for the given customer and items.
4.  NetSuite Connector will not sync subsequent Zuora transactions related to the invoice, such as payments and adjustments, because of the difference in balance between the Zuora and NetSuite invoice records due to taxation.

## Invoice transaction sync flow

![overview_invoice_txn.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d60a38ce-6a77-417d-ab30-9e9e60652270?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ2MGEzOGNlLTZhNzctNDE3ZC1hYjMwLTllOWU2MDY1MjI3MCIsImV4cCI6MTc2NjY0MTc2MCwianRpIjoiODg4ZTIyYzliZGIxNGE5ZWE0NWZhYzIzYmY3OWM2ZWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.erCen5EBiBhNcTn2ujkrgjYfvkTlp8VV4p-R2XQxhdw)

Note: To learn more about configuring and syncing tax codes and amounts between Zuora and NetSuite, including default tax code synchronization, region-based tax code configuration, integration with external tax engines like Avalara, and handling multiple tax engines, refer to Netsuite configuration for Inline Taxation.

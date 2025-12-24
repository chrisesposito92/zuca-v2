---
title: "Taxes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled/taxes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:06.554Z"
---

# Taxes

Information on taxes

Tax Items and Tax Details are also transferred to NetSuite. These Tax Details are treated as invoice line items. A single Charge can contain multiple Tax Lines.

1.  During the NetSuite Connector setup process, you must create a NetSuite item manually for each Zuora Tax Code. You must configure this item to reference a NetSuite income account.

2.  Tax amounts in the Zuora-NetSuite integration will sync as standard invoice lines in NetSuite. Each item created for the designated Tax Code will be associated with these lines. Tax codes cannot be included in Debit memo synchronization with Zuora. In order to avoid tax recalculation in NetSuite, both the invoice and its individual lines will be marked as non-taxable.


If you want NetSuite to perform the taxation:

1.  Disable Taxation in Zuora.

2.  In the [NetSuite Connector Advanced Settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings), set Use Standard Invoice Sync to `No`.

3.  Load the Zuora debit memo into NetSuite. NetSuite will apply taxes based on the taxation rules for the given customer and items.

4.  NetSuite Connector will not sync subsequent Zuora transactions related to the debit memo, such as payments and refunds, because of the difference in balance between the Zuora and NetSuite debit memo records due to taxation.

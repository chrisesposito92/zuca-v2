---
title: "Unified invoicing in Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/unified-invoicing-in-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:23.058Z"
---

# Unified invoicing in Zuora Revenue

The Unified Invoicing feature in Zuora Billing enables the creation of invoices with or without subscriptions, which are then synced and transformed in Zuora Revenue. This document explains the process, requirements, and limitations of syncing standalone invoice lines.

## Prerequisites

With the introduction of the [Unified Invoicing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/overview-of-unified-invoicing) feature in Zuora Billing, you can create invoices with or without subscriptions. As the downstream system, Zuora Revenue is also enhanced to be able to sync and transform the Zuora Billing unified invoicing lines. Currently, the following types of invoice items are newly supported by Zuora Revenue to support the Unified Invoicing feature in Zuora Billing:

-   Standalone invoice items from a product rate plan charge (PRPC)

-   Standalone invoice items without PRPC


This article explains how the above standalone invoice lines are synced and transformed in Zuora Revenue.

For the standalone invoice lines from Zuora Billing to be consumed in Zuora Revenue, the following requirements must be met:

-   Billing - Revenue Integration is enabled.

-   The [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/enable-invoice-settlement) feature and the Unified Invoicing feature are enabled in Zuora Billing.


In Billing - Revenue Integration environments, Zuora Billing data will first be synced to Zuora Revenue pre-staging tables without any processing. The Zuora Billing fields must be mapped to appropriate Zuora Revenue fields for further processing. After that, data in the pre-staging tables will be transformed into different transaction lines in Zuora Revenue staging tables to be consumed by Zuora Revenue.

The Unified Invoicing feature in Zuora Billing results in a new type of the Invoice Item object that needs to be synced and transformed in Zuora Revenue. The Invoice Item object data is first synced to the Zuora Revenue pre-staging table called RPRO\_DS\_INVOICE\_ITEM\_G. For successful data sync, mapping for the following Zuora Billing accounting code fields is defined in Zuora Revenue.

In the table below, mapping for some accounting code fields was already defined in previous versions of Zuora Revenue as indicated in the last column. Mapping for the remaining accounting code fields has been added from 37.007.00.00. The mapping is based on the Product Rate Plan Charge object, which will be used by the transaction template for invoices. To understand more about field mapping and transaction templates, see [Manage field mapping between Zuora Billing and Zuora Revenue](/zuora-revenue/advanced-revenue-operations/manage-field-mapping-between-zuora-billing-and-zuora-revenue) and [Create transaction templates](/zuora-revenue/advanced-revenue-operations/create-transaction-templates).

| Billing object name | Source object column name | Revenue object column name | Existing or new |
| --- | --- | --- | --- |
| InvoiceItem | UnbilledReceivablesAccountingCode | UNBILL_REC_AC_ID | New |
| InvoiceItem | RecognizedRevenueAccountingCode | REC_REV_AC_ID | Existing |
| InvoiceItem | DeferredRevenueAccountingCode | DEF_REV_AC_ID | Existing |
| InvoiceItem | ContractRecognizedRevenueAccountingCode | CONTRACT_REC_REV_AC_ID | New |
| InvoiceItem | ContractLiabilityAccountingCode | CONTRACT_LIABILITY_AC_ID | New |
| InvoiceItem | ContractAssetAccountingCode | CONTRACT_ASSET_AC_ID | New |
| InvoiceItem | AdjustmentRevenueAccountingCode | ADJ_REV_AC_ID | New |
| InvoiceItem | AdjustmentLiabilityAccountingCode | ADJ_LIABILITY_AC_ID | New |
| InvoiceItem | AccountReceivableAccountingCode | ACCOUNTS_RECEIVABLE_AC_ID | Existing |

## Known Limitations

After the Invoice Item object data is synced to the RPRO\_DS\_INVOICE\_ITEM\_G pre-staging table. It will be transformed into invoice lines that can be consumed by Zuora Revenue in staging tables. The transformation process is based on the transaction template that is configured for the invoice line with the following key data points:

-   If the Invoice Item object has all these accounting code fields present with an empty RatePlanChargeId field, it will be identified as a standalone invoice line in Zuora Revenue.

-   For standalone invoice lines, the Transaction Type field is set to INV.

-   The Term Number defaults to 1 because the standalone invoice does not have a subscription.

-   All the accounting code fields listed in the table above must be present. If any of these fields are blank, the invoice line will be stopped in staging during data collection when accounting segment validation is enabled.


After the Invoice Item object data is transformed into invoice lines in the staging tables, it is ready to be consumed by Zuora Revenue during the data collection process. For standalone invoice lines coming in Zuora Revenue, the system will also create a sales order (SO) line to associate with the standalone invoice line.

Be aware of the following limitations of the Unified Invoicing feature:

-   Standalone invoice items created for Invoice Item Adjustment, credit memos and debit memos are not supported by Zuora Revenue.

-   Standalone invoice items created for [Order Line Item](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items) (OLI) are supported. However, only the OLI in the state of Booked, SentToBilling, or Complete can be supported as well as its respective billings. Any cancellation on the OLI will not be synced to Zuora Revenue.

-   For standalone invoices created without PRPC, the accounting codes are referenced from the Invoice Item level, which is only supported through the Zuora Billing API.

-   If standalone selling price (SSP) is calculated based on List Price in Zuora Revenue, then SSP allocation cannot be supported for standalone invoices. It is because List Price is not present on standalone invoices.

---
title: "Journal Entry Detail Objects data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/journal-entry-detail-objects-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:26.415Z"
---

# Journal Entry Detail Objects data source

Data source to export journal entry detail objects data

Use this data source to export journal entry detail objects data. You cannot export data for canceled journal entries.

## Data source

This data source is not available through the Zuora UI. You can view and export the objects through the [Describe an object](https://www.zuora.com/developer/api-references/api/tag/Describe/) operation and the Aggregate Query API (AQuA) operation.

## Objects and available fields

The following Journal Entry Detail Objects are available for data source if you are using Zuora Finance. All the objects have the same fields as described below.

| Object name | Fields |
| --- | --- |
| Journal Entry Detail Invoice Item | All the objects include the same set of fields:ID (Journal Entry detail ID, not the corresponding transaction ID.)Transaction ID (The corresponding transaction or transaction item ID. For example, Invoice Item ID.)Container Transaction ID (For example, Invoice ID.)Transaction Date (For example, Invoice Date.)Transaction Type (The transaction type. For example, Invoice Item.)AmountCurrencyAccount IDHome CurrencyExchange RateExchange Rate DateAmount (Home Currency)Rounding Amount (Home Currency)Created by IDCreated DateUpdated by IDUpdated Date |
| Journal Entry Detail Taxation Item |  |
| Journal Entry Detail Invoice Item Adjustment |  |
| Journal Entry Detail Invoice Adjustment |  |
| Journal Entry Detail Invoice Payment |  |
| Journal Entry Detail Refund Invoice Payment |  |
| Journal Entry Detail Credit Balance Adjustment |  |
| Journal Entry Detail Revenue Event Item |  |
| Journal Entry Detail Payment Application |  |
| Journal Entry Detail Refund Application |  |
| Journal Entry Detail Debit Memo Item |  |
| Journal Entry Detail Debit Taxation Item |  |
| Journal Entry Detail Credit Memo Item |  |
| Journal Entry Detail Credit Taxation Item |  |
| Journal Entry Detail Credit Memo Application Item |  |
| Journal Entry Detail Payment Application Item |  |
| Journal Entry Detail Refund Application Item |  |

## Fields of specific objects

The following Journal Entry Detail Objects are available for data source if you are using Zuora Finance. The below-mentioned objects have their specific fields as described below.

| Object name | Fields |
| --- | --- |
| Journal Entry Detail Invoice Item | ChargeDiscountPrepayment |
| Journal Entry Detail Invoice Item Adjustment | CreditCharge |
| Journal Entry Detail Invoice Adjustment | CreditCharge |
| Journal Entry Detail Debit Memo Item | ChargeDiscountPrepayment |
| Journal Entry Detail Credit Memo Item | ChargeDiscountPrepayment |
| Journal Entry Detail Credit Memo Application Item | On-Account to Invoice ItemOn-Account to Invoice Taxation ItemOn-Account to Debit Memo ItemOn-Account to Debit Memo Taxation ItemInvoice Item ReversalInvoice Taxation Item ReversalDebit Memo Item ReversalDebit Memo Taxation Item Reversal |
| Journal Entry Detail Payment Application | UnappliedTransferred FromTransferred ToUnapplied to InvoiceUnapplied to Debit MemoInvoiceDebit MemoInvoice ReversalDebit Memo Reversal |
| Journal Entry Detail Payment Application Item | UnappliedTransferred FromTransferred ToUnapplied to Invoice ItemUnapplied to Invoice Taxation ItemUnapplied to Debit Memo ItemUnapplied to Debit Memo Taxation ItemInvoice ItemInvoice Taxation ItemDebit Memo ItemDebit Memo Taxation ItemInvoice Item ReversalInvoice Taxation Item ReversalDebit Memo Item ReversalDebit Memo Taxation Item Reversal |
| Journal Entry Detail Refund Application | Unapplied PaymentOn-Account Credit Memo |
| Journal Entry Detail Refund Application Item | Unapplied PaymentOn-Account Credit Memo ItemOn-Account Credit Memo Taxation Item |
| Journal Entry Detail Realized FX Gain Loss | Realized FX Gain/Loss |
| Journal Entry Detail Unrealized FX Gain Loss | CreationReversal |

## Notes

-   The following objects will not have data to retrieve unless you have enabled [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview):

    -   Journal Entry Detail Payment Application

    -   Journal Entry Detail Refund Application

    -   Journal Entry Detail Debit Memo Item

    -   Journal Entry Detail Debit Taxation Item

    -   Journal Entry Detail Credit Memo Item

    -   Journal Entry Detail Credit Taxation Item

-   The following objects will not have data to retrieve unless you have enabled the [Invoice Item Settlement](/zuora-billing/bill-your-customer/invoice-settlement/invoice-item-settlement/overview-of-invoice-item-settlement) feature under [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview):

    -   Journal Entry Detail Credit Memo Application Item

    -   Journal Entry Detail Payment Application Item

    -   Journal Entry Detail Refund Application Item

-   The following fields are available only if you have enabled the [Currency Conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion) feature:

    -   Home Currency

    -   Exchange Rate

    -   Exchange Rate Date

    -   Amount (Home Currency)

    -   Rounding Amount (Home Currency)


## Related objects

The Journal Entry Detail objects do not join upstream transactions, instead, they only show the related transaction IDs.

The Journal Entry Detail objects join to the following objects.

-   Credit Accounting Code

-   Debit Accounting Code

-   Journal Entry

-   Journal Run

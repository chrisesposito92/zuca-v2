---
title: "AR Transaction data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/ar-transaction-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:51.889Z"
---

# AR Transaction data source

Data source to export all the transactions that impact your Accounts Receivable that happened during a period

You can use this data source to export all the transactions that impact your Accounts Receivable that happened during a period.

-   The ability to query and view all transactions will give you greater visibility and transparency into your financial interactions with subscribers.

-   The AR Transaction object will also enable you to track all your financial transactions in one data source export/report with the required filters and cross-object joins. This will simplify the reconciliation process, making it easier to query invoices, debit and credit memos, payments and identify discrepancies.

-   The new data source object will also simplify the compliance and reporting process for you, making it easier to generate reports of all transactions, saving time and effort during financial audits.

-   AR transactions objects/records are soft deleted, enabling you to retain deleted records within the Zuora system for reporting.


Note:

-   This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early users before releasing it to all customers. To join this early availability program, submit a request to [Zuora Global Support](https://support.zuora.com/).

-   This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

-   AR transaction creation is an asynchronous job. When AR impacting transactions are created in Zuora, the ARTransaction data source will be populated asynchronously. When such transactions are included in a Journal run, the Journal entry information is stamped against the existing AR transactions asynchronously. To export journal information from AR Transaction, Zuora recommends timing the execution of the AR transaction export job after all desired transactions have been included in the ARTransaction data source to achieve the desired result.


## Access the AR Transaction data source

Navigate to Reporting > Data Sources and select AR Transaction from the Data Source list in the Basic Information section.

## Data source detail

AR Transaction data source is classified as base objects and related objects as mentioned in the following sections.

## Base object

The following table lists the fields available in the AR Transaction base object.

| Zuora Object | Description |
| --- | --- |
| AR Transaction | Line items on AR Transaction. It includes the following fields:Created By IDCreated DateHome Currency*Home Currency Amount*Home Currency Amount Rounding*Home Currency Rate*Home Currency Rate Date*Id (consolidated AR transaction ID)Reporting Currency*Reporting Currency Amount*Reporting Currency Amount Rounding*Reporting Currency Rate*Reporting Currency Rate Date*Transaction AmountTransaction Date - Can be invoice date, credit memo date, payment effective date and so on. Use transaction date to filter out the AR transactions for a specific period.Transaction Detail TypeTransaction IdTransaction Number - Transaction number for a particular transaction. For example, In an invoice item record, the invoice number is the transaction number.Transaction TypeUpdated by IdUpdated Date |

\* indicates the fields are available only if the Fx Data feature is enabled.

## Transaction type values

-   Invoice

-   InvoiceItem

-   TaxationItem

-   CreditMemo

-   CreditMemoItem

-   CreditTaxationItem

-   DebitMemo

-   DebitMemoItem

-   DebitTaxationItem

-   CreditMemoApplication

-   CreditMemoApplicationItem

-   RefundApplication

-   RefundApplicationItem

-   PaymentApplication

-   PaymentApplicationItem


## Transaction details type values

-   Charge (Invoice Item)

-   Discount (Invoice Item)

-   Charge (Invoice Taxation Item)

-   Charge (Credit Memo Item)

-   Discount (Credit Memo Item)

-   Charge (Debit Memo Item)

-   Discount (Debit Memo Item)

-   Charge (Credit Memo Taxation Item)

-   Charge (Debit Memo Taxation Item)

-   Unapplied (Payment Application)

-   Transferred From (Payment Application)

-   Transferred To (Payment Application)

-   Unapplied To Invoice (Payment Application)

-   Invoice (Payment Application)

-   Invoice Reversal (Payment Application)

-   Unapplied To Debit Memo (Payment Application)

-   Debit Memo Reversal (Payment Application)

-   Debit Memo (Payment Application)

-   Unapplied (Payment Application Item)

-   Transferred From (Payment Application Item)

-   Transferred To (Payment Application Item)

-   Unapplied To Invoice Item (Payment Application Item)

-   Unapplied to Invoice Taxation Item (Payment Application Item)

-   Unapplied to Debit Memo Item (Payment Application Item)

-   Unapplied to Debit Memo Taxation Item (Payment Application Item)

-   Invoice Item (Payment Application Item)

-   Invoice Item Reversal (Payment Application Item)

-   Invoice Taxation Item (Payment Application Item)

-   Invoice Taxation Item Reversal (Payment Application Item)

-   Debit Memo Item (Payment Application Item)

-   Debit Memo Item Reversal (Payment Application Item)

-   Debit Memo Taxation Item (Payment Application Item)

-   Debit Memo Taxation Item Reversal (Payment Application Item)

-   On-Account to Invoice Item (Credit Memo Application Item Charge)

-   On-Account to Invoice Taxation Item (Credit Memo Application Item Charge)

-   On-Account to Debit Memo Item (Credit Memo Application Item Charge)

-   On-Account to Debit Memo Taxation Item (Credit Memo Application Item Charge)

-   Invoice Item Reversal (Credit Memo Application Item Charge)

-   Invoice Taxation Item Reversal (Credit Memo Application Item Charge)

-   Debit Memo Item Reversal (Credit Memo Application Item Charge)

-   Debit Memo Taxation Item Reversal (Credit Memo Application Item Charge)

-   On-Account to Invoice Item (Credit Memo Application Item Tax)

-   On-Account to Invoice Taxation Item (Credit Memo Application Item Tax)

-   On-Account to Debit Memo Item (Credit Memo Application Item Tax)

-   On-Account to Debit Memo Taxation Item (Credit Memo Application Item Tax)

-   Invoice Item Reversal (Credit Memo Application Item Tax)

-   Invoice Taxation Item Reversal (Credit Memo Application Item Tax)

-   Debit Memo Item Reversal (Credit Memo Application Item Tax)

-   Debit Memo Taxation Item Reversal (Credit Memo Application Item Tax)

-   Unapplied Payment (Refund Application)

-   On-Account Credit Memo (Refund Application)

-   Unapplied Payment (Refund Application Item)

-   On-Account Credit Memo Item (Refund Application Item)

-   On-Account Credit Memo Taxation Item (Refund Application Item)


## Related objects

The following table lists the related objects of the AR Transaction object in alphabetical order.

| Zuora object | Description |
| --- | --- |
| Account | The account that made the payment.For more information, see Account Data Source . |
| Credit Accounting Code | This is the base Zuora object for the Accounting Code data source export.For more information, see Accounting Code Data Source . |
| Credit Memo | Credit memos that you issued to your customers to reduce invoice and account balances.For more information, see Credit Memo Data Source . |
| Credit Memo Item | Line items on credit memos.For more information, see Credit Memo Item Data Source . |
| Credit Taxation Item | Taxation records on credit memos.For more information, see Credit Taxation Item Data Source . |
| Debit Accounting Code | This is the base Zuora object for the Accounting Code data source export.For more information, see Accounting Code Data Source . |
| Debit Memo | Debit memos that you issued to your customers to increase the amount your customers owned you.For more information, see Debit Memo Data Source . |
| Debit Memo Item | Line items on debit memos.For more information, see Debit Memo Item Data Source . |
| Debit Taxation Item | Taxation records on debit memos.For more information, see Debit Taxation Item Data Source . |
| Default Payment Method | An object that stores information about the payment method, such as a credit card, ACH or PayPal.For more information, see Payment Method Data Source . |
| Invoice | Invoices that reflect the subscription rate plan charges that have not been billed.For more information, see Invoice Data Source . |
| Invoice Item | This is the base object for the Invoice Item Data Source Export.For more information, see Invoice Item Data Source . |
| Payment | The money sent by a customer to pay for charges related to their subscriptions.For more information, see Payment Data Source . |
| Payment Method | An object that stores information about the payment method, such as a credit card, ACH or PayPal.For more information, see Payment Method Data Source . |
| Product | The product is the base object for this export.For more information, see Product Data Source . |
| Product Rate Plan Charge | Fields on a product rate plan charge.For more information, see Product Rate Plan Charge data source . |
| Rate Plan | This is the base object for the Rate Plan Data Source Export.For more information, see Rate Plan Data Source . |
| Rate Plan Charge | Fields on a rate plan charge.For more information, see Rate Plan Charge Data Source . |
| Refund | Represents money that is returned to a customer or a reversed transaction.For more information, see Refund Data Source . |
| Taxation Item | This is the base object for the Taxation Item Data Source Export.For more information, see Taxation Item Data Source . |

## Notes

The AR Transaction object is accessible through ZOQL, AQUA, DSE, DataQuery, and Z-reporting. If you use AR Transaction to export basic information, you can use any of these services.

However, if you require additional information from related objects, such as the account, payment, product rate plan charge, invoice item, and so on, it is recommended that you use DataQuery for better performance.

## Sample ZOQL query

SELECT transactionid as "Transaction Id", transactionnumber as "Transaction Number", transactiontype as "Transaction Type", transactiondetailtype as "Transaction Detail Type", transactiondate as "Transaction Date", transactionamount as "Transaction Amount", transactioncurrency as "Transaction Currency", homecurrency as "Home Currency", homecurrencyamount as "Home Currency Amount", homecurrencyamountrounding as "Home Currency Amount Rounding" FROM ARTransaction WHERE createddate >= '2024-06-01T00:00:00Z' AND createddate < '2024-07-01T00:00:00Z'

## Sample data query

Select ConsolidatedARTransaction.\*, Account.Currency, Invoice.Amount, Invoice.DueDate, Invoice.InvoiceDate, Invoice.InvoiceNumber, Payment.Amount, Payment.AppliedAmount, Payment.EffectiveDate, Payment.PaymentNumber, TaxationItem.TaxAmount, TaxationItem.TaxCode, TaxationItem.TaxDate, TaxationItem.TaxRate From ConsolidatedARTransaction Left Join Account On ConsolidatedARTransaction.AccountId = Account.Id Left Join Invoice On ConsolidatedARTransaction.InvoiceId = Invoice.Id Left Join Payment On ConsolidatedARTransaction.PaymentId = Payment.Id Left Join TaxationItem On ConsolidatedARTransaction.TransactionId = TaxationItem.IdWhere ConsolidatedARTransaction.TransactionDate >= '2023-08-01' and ConsolidatedARTransaction.TransactionDate <= '2023-08-31'

---
title: "The transaction table configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/the-transaction-table-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:21.202Z"
---

# The transaction table configuration

The Transaction table configuration in Zuora supports various transaction types, including Invoice, Payment, and Refund, with options for custom mapping and merge fields.

Note: The Invoice Adjustment transaction is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment transaction instead.

The Transaction table includes different types of transactions associated to this invoice.

## Supported Transactions

You can use the Transactions table to display the following types of transactions:

-   Invoice
-   Invoice Adjustment
-   Invoice Item Adjustment
-   Credit Balance Adjustment
-   Payment
-   Refund

If you have the Invoice Settlement enabled, the following types of transactions are supported:

-   Credit Memo
-   Debit Memo
-   Credit Memo Applied
-   Credit Memo Refund

## Supported Merge Fields

You can use the following merge fields in the Transaction table:

| Merge Field | Description |
| --- | --- |
| <<Transaction.TransactionDate>> | Date of the corresponding transaction. For example, Invoice.InvoiceDate. |
| <<Transaction.TransactionNumber>> | Number of the corresponding transaction. For example, Invoice.InvoiceNumber. |
| <<Transaction.TransactionType>> | Type of transaction. For example, Adjustment or Credit Card Payment. |
| <<Transaction.AppliedAmount>> | Impact of the transaction on the invoice balance. For example, ($200.00) for a 200 dollar payment. |

## Defining Custom Mapping

Use the `Transaction.Mapping` directive to define custom mapping onto each object. Zuora supports custom mapping onto custom fields of each transaction object.

For example, the following will map the merge field onto the `ReasonCode__c` custom field defined for each object:

`<<Transaction.Mapping: InvoiceAdjustment.ReasonCode__c,InvoiceItemAdjustment.ReasonCode__c,Invoice.ReasonCode__c,Payment.ReasonCode__c,Refund.ReasonCode__c,CreditMemo.ReasonCode__c,DebitMemo.ReasonCode__c>>`

Credit Balance Adjustment does not support custom fields, and you cannot use this object in the `Transaction.Mapping` directive.

## Transaction Table Example

In this example, the following transactions have 'text' type custom fields:

| Transactions | Custom Field API Name | Values in Object |
| --- | --- | --- |
| Invoice | AdditionalField__c | Additional field in Invoice |
| Invoice Adjustment | AdjustmentReasonCode__c | Invoice Adjustment Code Red |
| Invoice Item Adjustment | ItemReasonCode__c | Item Adjustment Code Blue |
| Payment | PaymentComments__c | Payment from John Doe |
| Refund | RefundSpecialField__c | Refund Tag X |

You can define the a single transaction mapping Merge Field:

`<<Transaction.Mapping:MyMappedCustomFields>>`

You can toggle field codes (ALT+F9) to see the definition:

`{MERGEFIELD Transaction.Mapping:InvoiceAdjustment.AdjustmentReasonCode__c,InvoiceItemAdjustment.ItemReasonCode__c,Invoice.InvoiceAdditionalField__c,Payment.PaymentComments__c,Refund.RefundSpecialField__c}`

Add this merge field to the transaction table in an invoice template:

| TRANSACTIONS ASSOCIATED TO THIS INVOICE |  |  |  |  |
| --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Notes | Applied Amount |
| <<TableStart:Transaction>><<Transaction.TransactionDate>> | <<Transaction.TransactionNumber>> | <<Transaction.TransactionType>> | <<Transaction.Mapping:MyMappedCustomFields>> | <<Transaction.AppliedAmount>><<TableEnd:Transaction>> |

The following shows the table as displayed when the invoice is created:

| TRANSACTIONS ASSOCIATED TO THIS INVOICE |  |  |  |  |
| --- | --- | --- | --- | --- |
| Transaction Date | Transaction Number | Transaction Type | Notes | Applied Amount |
| 02/10/2012 | IA00000001 | Adjustment | Invoice Adjustment Code Red | $70.00 |
| 02/12/2012 | P00000001 | Credit Card Payment | Payment from John Doe | ($200.00) |
| 02/17/2012 | R00000001 | Refund Payment | Refund Tag X | $15.00 |
| 02/18/2012 | IA00000001 | Item Adjustment | Item Adjustment Code Blue | $15.00 |
| 02/19/2012 | CBA00000001 | Applied to Invoice |  | ($20.00) |

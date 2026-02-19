---
title: "Credit memo transactions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/credit-memo-transactions"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:37:46.443Z"
---

# Credit memo transactions

Zuora Revenue supports various types of credit memos, which can be uploaded as transactions for data processing. These include invoice-based, SO-based, standalone, CM-C, and CM-R types, each with specific rules and impacts on sales orders and invoices.

Credit memos can be uploaded to Zuora Revenue as transactions ( File Upload > Transactions/Cost ) for data processing. There are multiple types of credit memos that are supported by Zuora Revenue. When you upload credit memo lines to Zuora Revenue, use the Line Type field to distinguish different types of credit memos.

## Credit Memo types

The following types of credit memos are supported.

| Line Type | Description |
| --- | --- |
| CM | The normal credit that provides a discount to the customer against a sales order or invoice. The transaction price will be adjusted and accounted for allocations for the CM transactions.Depending on the reference document to which the credit memo is linked, the CM transactions can have the following categories:SO based CM: The discount amount is based on the sales order line but the value remains in deferred status until the invoice is collected.Invoice based CM: The discount amount is based on the billing document.Standalone CM: The credit memo is created without any reference document. |
| CM-C | The invoice cancelation in case of the rebill scenario. The transaction price will not be adjusted for the CM-C transactions if there is no invoice overage. |
| CM-R | The return of quantity against a sales order or invoice. The transaction price will be adjusted for the CM-R transactions.Depending on the reference document to which the credit memo is linked, the CM-R transactions can have the following categories:SO based CM-R: The cancelation is based on the sales order line.Invoice based CM-R: The cancelation is based on the billing document. |

## Credit rules

When you upload credit memo transactions to Zuora Revenue, the Credit Rule (CREDIT\_RULE) field specifies how the credit memo amount is to be knocked off from the transaction price. The following credit rules are supported in Zuora Revenue:

-   Prorate
-   LIFO (Last In First Out)
-   Fixed duration

## Prorate (P)

When you upload credit memo transactions to Zuora Revenue, the Credit Rule (CREDIT\_RULE) field specifies how the credit memo amount is to be knocked off from the transaction price. The following credit rules are supported in Zuora Revenue:

| INV # | INV Line # | Invoice Amount | Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 1 | $1200 | $200 | $200 | $200 | $200 | $200 | $200 |

A credit memo of $150 is input to Zuora Revenue to adjust line #1 of the #100 invoice. The amount of $150 is prorated equally during the six months and Zuora Revenue will do the following catch-up for this credit memo.
| CM # | CM Line # | Invoice Amount | Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 1 | $150 | ($25) | ($25) | ($25) | ($25) | ($25) | ($25) |

## LIFO (L)

Set the CREDIT\_RULE field to L to apply this credit rule. Based on this rule, the reversal adjustment starts from the last period backward until the credit memo amount is completely consumed.

For example, the current open period is Jan-19. The following invoice is scheduled for six months.

| INV# | INV Line# | Invoice Amount | Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 1 | $1200 | $200 | $200 | $200 | $200 | $200 | $200 |

The following credit memo of $200 is input to Zuora Revenue to adjust the invoice based on the LIFO credit rule. This credit memo consumes the value from the last period, Jun-19, and it does not impact any other periods.

| CM # | CM Line # | CM Amount | Jun-19 |
| --- | --- | --- | --- |
| 110 | 1 | $200 | ($200) |

## Fixed duration (F)

Set the CREDIT\_RULE field to F to apply this credit rule. Based on this rule, the credit memo amount is consumed based on the specified start date and end date. If no start and end dates are provided for the credit memo, the credit memo amount is amortized based on the percentage of the billed amount for the period.

For example, the current open period is Jan-19. An invoice is scheduled for six months.

| INV# | INV Line # | Invoice Amount | Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 1 | $1200 | $200 | $200 | $200 | $200 | $200 | $200 |

The following credit memo of $200 with start date and end date is input to Zuora Revenue. The credit memo amount will be consumed during the specified duration as follows:

| CM# | CM Line # | CM Amount | Start Date | End Date | May-19 | Jun-19 |
| --- | --- | --- | --- | --- | --- | --- |
| 110 | 1 | $200 | 01-May-2019 | 30-Jun-2019 | ($200) | ($200) |

## Credit memo impact on SO values

The following table explains whether each type of credit memos has an impact on different values of the SO line and whether reallocation occurs.

| CM Type | Ext. List Price | Ext. Sell Price | Allocatable Price | Quantity | Billed Amount | Reallocation |
| --- | --- | --- | --- | --- | --- | --- |
| CM (Invoiced based) | No | No | Yes | No | Yes | Yes |
| CM (SO based) | No | No | Yes | No | Yes* | Yes |
| CM (Standalone) | N/A | N/A | N/A | N/A | N/A | Yes |
| CM-C | No | No | No | No | Yes | No |
| CM-R (Invoiced based) | Yes | No | Yes | Yes | Yes | Yes |
| CM-R (SO based) | Yes | No | Yes | Yes | Yes* | Yes |
| Note: The SO-based credit memos can impact the billed amount only if the invoice has been collected. |  |  |  |  |  |  |

Examples are provided below for each type to help you understand the impact of different credit memos.

## Invoice based CM

Invoice based CM lines are uploaded to Zuora Revenue with the ORIG\_INV\_LINE\_ID field specified. In this example, the following sales order line is input to Zuora Revenue.

| Type | SO # | SO Line # | Unit List Price | Unit Sell Price | Ext. List Price | Ext. Sell Price | Quantity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $70 | $50 | $1050 | $750 | 15 |

After this SO is collected, it has been billed by the following invoice line.

| Type | INV # | INV Line # | Invoice Amount | Quantity |
| --- | --- | --- | --- | --- |
| INV | INV-123 | 1 | $750 | 15 |

Zuora Revenue will update the BILLED\_DEF\_AMT and BILLED\_REC\_AMT values on the SO line to display how much has been billed and released for this line.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price | Billed Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $1050 | $750 | 15 | $750 | $750 |

Then, the following credit memo is collected with the transaction type being CM and linked to line #1 of the original INV-123 invoice.

| Type | CM # | CM Line # | Quantity | CM Amount | Orig. Invoice Line Id |
| --- | --- | --- | --- | --- | --- |
| CM | CM-123 | 1 | 15 | $-200 | INV-123.1 |

In this case, Zuora Revenue will reduce the allocatable price and trigger reallocation.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price | Billed Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $1050 | $750 | 15 | $550 | $550 |

## SO-based CM

SO based CM lines are uploaded to Zuora Revenue with the ORIG\_SO\_LINE\_ID field specified. In this example, the following sales order line is input to Zuora Revenue.

| Type | SO # | SO Line # | Unit List Price | Unit Sell Price | Ext. List Price | Ext. Sell Price | Quantity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $70 | $50 | $1050 | $750 | 15 |

Then, the following credit memo line is collected with the transaction type being CM and linked to line #1 of the original SO-123 sales order line.

| Type | CM # | CM Line # | Quantity | CM Amount | Orig. SO Line Id |
| --- | --- | --- | --- | --- | --- |
| CM | CM-123 | 1 | 15 | $-200 | SO-123.1 |

In this case, Zuora Revenue will reduce the allocatable price and trigger reallocation.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price |
| --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $1050 | $750 | 15 | $550 |

## Standalone CM

The standalone CM line is input to Zuora Revenue without the original SO Line Id or Invoice Line Id specified such as the following. The standalone CM will not change anything because it is not linked to any sales order or invoice line.

| Type | CM # | CM Line # | Quantity | CM Amount | Orig. SO Line Id | Orig. Invoice Line Id |
| --- | --- | --- | --- | --- | --- | --- |
| CM | CM-123 | 1 | 2 | $-200 |  |  |

## CM-C

The CM-C transaction line is used to cancel an invoice. If the cancelation is not on an overage invoice, this type of transaction line is treated as a future rebill and does not impact any allocation. CM-C lines are uploaded to Zuora Revenue with the ORIG\_INV\_LINE\_ID field specified.

In this example, the following sales order line is input to Zuora Revenue.

| Type | SO # | SO Line # | Unit List Price | Unit Sell Price | Ext. List Price | Ext. Sell Price | Quantity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $90 | $70 | $900 | $700 | 10 |

After the SO line is collected, it has been billed with the following invoice.

| Type | INV # | INV Line # | Invoice Amount | Quantity |
| --- | --- | --- | --- | --- |
| INV | INV-123 | 1 | $700 | 10 |

Zuora Revenue will update the BILLED\_DEF\_AMT and BILLED\_REC\_AMT values on the SO line to display how much has been billed and released.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price | Billed Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $900 | $700 | 10 | $700 | $700 |

Then, the following CM-C line is collected to cancel line #1 of the original INV-123 invoice.

| Type | CM # | CM Line # | Quantity | CMC Amount | Orig. Invoice Line Id |
| --- | --- | --- | --- | --- | --- |
| CM-C | CM-123 | 1 | 10 | $-700 | INV-123.1 |

In this case, Zuora Revenue will not update the Sell Price or the Allocatable Price. Only the billed amount will be updated. No reallocation is triggered because the CM-C transaction is to indicate that the SO line can be re-billed again.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price | Billed Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $900 | $700 | 10 | $700 | $0 |

## Invoice based CM-R

Invoice based CM-R lines are uploaded to Zuora Revenue with the ORIG\_INV\_LINE\_ID field specified. In this example, the following sales order is input to Zuora Revenue.

| Type | SO # | SO Line # | Unit List Price | Unit Sell Price | Ext. List Price | Ext. Sell Price | Quantity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $90 | $70 | $900 | $700 | 10 |

This SO line has been billed with the following invoice.

| Type | INV # | INV Line # | Invoice Amount | Quantity |
| --- | --- | --- | --- | --- |
| INV | INV-123 | 1 | $700 | 10 |

Zuora Revenue will update the BILLED\_DEF\_AMT and BILLED\_REC\_AMT values for this SO line to display how much has been billed and released.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price | Billed Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $900 | $700 | 10 | $700 | $700 |

Then, the following credit memo is collected for line #1 of the INV-123 invoice as the CM-R transaction type.

| Type | CM # | CM Line # | Quantity | Ext. List Price CM | Ext. Sell Price CM | Orig. Invoice Line Id |
| --- | --- | --- | --- | --- | --- | --- |
| CM-R | CM-123 | 1 | 5 | $-350 | $-350 | INV-123.1 |

Zuora Revenue will update the list price, quantity, and the allocatable price at SO level. Reallocation will be triggered.

| Type | SO # | SO Line # | Ext. List Price | Ext. Sell Price | Quantity | Allocatable Price | Billed Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $550 | $700 | 5 | $350 | $350 |

## SO based CM-R

SO based CM-R lines are uploaded to Zuora Revenue with the ORIG\_SO\_LINE\_ID field specified. In this example, the following sales order is input to Zuora Revenue.

| Type | SO # | SO Line # | Unit List Price | Unit Sell Price | Ext. List Price | Ext. Sell Price | Quantity |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $90 | $70 | $900 | $700 | 10 |

Then, the following credit memo for this SO line is collected in Zuora Revenue.

| Type | CM # | CM Line # | Quantity | Ext. List Price CM | Ext. Sell Price CM | Orig. SO Line Id |
| --- | --- | --- | --- | --- | --- | --- |
| CM-R | CM-123 | 1 | 5 | $-350 | $-350 | SO-123.1 |

Zuora Revenue will update the list price, quantity, and the allocatable price at SO level. Reallocation will be triggered.

| Type | SO# | SO Line# | Ext List Price | Ext.Sell Price | Quantity | Allocatable Price |
| --- | --- | --- | --- | --- | --- | --- |
| SO | SO-123 | 1 | $550 | $700 | 5 | $350 |

## New option to void transactions (37.012.01.00 or later)

A new system management option, Billing-Void, has been introduced at RC Level that allows you to perform one-off voiding of current period invoices and/or credit memo in the following transaction types:

INV, CMC, CMR, and CM

Once you void the transaction, the original transaction is no longer an official record in Zuora Revenue. A prefix is added to the invoice id, invoice number, and invoice line number and is viewable in Billing Tab/View to differentiate.

You cannot void the following transactions:

| Transaction with subsequent documents | Alternative Solution |
| --- | --- |
| Invoice with offsetting Credit Memo | Credit Memo has to be voided, then the invoice can be voided. |
| INV/CM on transaction with RORD | Not eligible for voiding any more |
| INV/CM on Transaction with CMRO | Not eligible for voiding any more |
| Zuora Billing Source INV/CM | Reverse the transaction in Zuora Billing |

For audit purposes, void operations, invoice numbers, and reasons are tracked in the Workbench Timeline view. Only user roles with security access can enable/disable the void option access by default, and is enabled for pre-configured user roles like support, and Revpro Super.

You can perform the following operations using this new option:

-   Go to RC Workbench drop-down menu, select System / Billing-Void option, and a pop-up window is displayed.
-   Select one of the eligible Invoices, add a reason for voiding and comment, and submit.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c487c27e-c135-43bc-8444-f1d527e57375?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM0ODdjMjdlLWMxMzUtNDNiYy04NDQ0LWYxZDUyN2U1NzM3NSIsImV4cCI6MTc3MTU1ODY2NCwianRpIjoiNGYxYTQwNjI5ZTU5NDBhMGExMmM1MjY4ZTFiZGFhYTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.d7wS3G1_HcmK1VQm2BWi9XkRexTkvmxBbPEQos6H0ik)

---
title: "Known limitations in Invoice Settlement"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/known-limitations-in-invoice-settlement"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:08.724Z"
---

# Known limitations in Invoice Settlement

Explore the known limitations and compatibility considerations of the Invoice Settlement feature before enabling it.

If you want to enable the Invoice Settlement feature, it is best practice to check its compatibility with other features and its known limitations first.

-   [Compatibility with other features](#concept-tei18kau__title-22)

-   [Invoice Settlement API Impacts](#concept-tei18kau__title-87)

-   [Limitations in Credit and Debit Memos](#concept-tei18kau__title-192)

-   [Limitations in Unapplied Payments](#concept-tei18kau__title-264)

-   [Limitations in invoice write-off and reversal](#concept-tei18kau__title-285)

-   [Limitations in Invoice Item Settlement](#concept-tei18kau__title-2555)


wiki.tree(page.path)

## Compatibility with other features

The following table lists the Invoice Settlement compatibility with other features.
| Feature | Compatibility |
| --- | --- |
| Credit Balance | If you have the Invoice Settlement feature enabled, the Credit Balance feature is deprecated. |
| Invoice Splitting | If you have both Invoice Settlement feature and Invoice Splitting enabled, you cannot reverse split invoices. |
| No Rounding features | If you want to enable the Invoice Settlement feature, you have to disable the No Rounding features that are in Limited Availability. Otherwise, it might cause payment or credit memos to fail to apply to invoices or debit memos due to the default decimal precision of currencies. |
| Prepaid Drawdown app | If you want to enable the Invoice Settlement feature, you have to disable the Prepaid Drawdown app. |
| Enhanced Invoice Numbering app | If you have the Enhanced Invoice Numbering app enabled, the Invoice Settlement feature is supported with limitations. |
| Zuora Netsuite Connector | If you have Zuora Netsuite Connector enabled, the Invoice Settlement feature is supported with limitations. |
| Rollover model of the overage smoothing charge model | Credit memos are not generated and the billing run fails in scenarios where all the following conditions are met:The Rollover of the Overage Smoothing charge model is used in a usage charge, and this charge is to be included in a credit memo.The generation rule "Create credit memos for net negative invoice totals without grouping charges" is configured as the billing rule.The total amount of all the charges that are included in the bill run is negative. |
| Billing - Revenue Integration | If you have the Billing - Revenue Integration feature enabled, you must complete the relevant configuration on the Zuora Revenue side so that Credit Memo and Debit Memo object data can be synced properly. See Enable Invoice Settlement for Billing - Revenue Integration for more information. |
| Zuora 360 | Invoice Settlement objects and fields are not supported in Zuora 360 but are supported in Zuora 360+. Therefore, you must ensure that Zuora 360+ is enabled if you want to use Invoice Settlement with Zuora CPQ. See New Object Types Supported Only When Zuora 360+ Enabled for more information. |

## Invoice Settlement API impacts

After the Invoice Settlement feature is enabled, certain Actions and API operations are deprecated. Instead, you can use the alternative REST API operations specific to the Invoice Settlement feature to perform the corresponding transactions.
| Deprecated APIs | Alternative Invoice Settlement APIs |
| --- | --- |
| Actions / SOAP API calls The Actions deprecation is only specific to the objects related to credit memos and debit memos. You can still perform operations on the objects unrelated Invoice Settlement. The Generate action does not support generating credit memos.CreateDeleteExecuteGenerateQueryQueryMoreSubscribeUpdateSOAP and CRUD operations specific to InvoiceItemAdjustment, CreditBalanceAdjustment, InvoiceAdjustment, InvoicePayment, and RefundInvoicePayment | Credit Memos operationsDebit Memos operationsCreate credit memo from invoiceCreate debit memo from invoiceGenerate billing documents by accountWrite off invoicePayments operationsRefunds operationsGet revenue recognition rule by product rate plan charge (not recommended)Revenue Schedules operations specific to credit or debit memos (not recommended) |

## REST API limitations

If you have the Invoice Settlement feature enabled, REST API operations have the following known limitations.
| Operation/Field | Limitations |
| --- | --- |
| SecondPaymentReferenceId field | You can use the Create payment operation to create external payments, but the SecondPaymentReferenceId field cannot be passed during the process. This field indicates the transaction ID returned by the payment gateway if an additional transaction for the payment exists. |
| SourceType | You can use the following operations to retrieve refund information, but the SourceType field is not returned in the response body, which indicates whether the refund is to refund a payment or a credit memo.Get all refundsGet refund |
| Source and SourceName fields | You can use the Get payments and Get payment operations to retrieve payment information, but the Source and SourceName fields are not returned in the response body.Source indicates how the payment was created, whether through the API, manually, import, or payment run.SourceName indicates the payment run number or file name. |

## Limitations in Debit and Credit Memos

If you have the Invoice Settlement feature enabled, Credit and Debit Memos has the following specific known limitations.
| Scenario | Limitations |
| --- | --- |
| Creating credit or debit memos | When you create a credit or debit memo from an invoice, the total number of memo items that can be created in one request must be less than or equal to 1,000.When you create a credit or debit memo from product rate plan charges, at most 1,000 product rate plan charges can be included in one request. |
| Applying credit memos | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.Note : When you apply credit memo through payment run, there is no limit on the item count.When you apply a credit memo to invoices or debit memos, the total number of credit memo items and the items that credit memo items to be applied to must be less than or equal to 15,000 (including taxation items but excluding zero-amount items). For example, if you apply a credit memo to an invoice without specifying items, the sum of total credit memo Items and total Invoice Items must be less than or equal to 15,000.If the limit is hit, you can follow the following instructions:If you want to apply one credit memo to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.If you want to apply one credit memo to a single invoice or debit memo with a large volume of items, specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.If a credit memo has a large volume of items, specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000. |
| Unapplying credit memos | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.Note : When you unapply credit memo through payment run, there is no limit on the item count.When you unapply a credit memo, the total number of credit memo items and the items that credit memo items to be unapplied from must be less than or equal to 15,000 (including taxation items but excluding zero-amount items). For example, if you unapply a credit memo from an invoice without specifying items, the sum of total credit memo Items and total Invoice Items must be less than or equal to 15,000. If the limit is hit, you can follow the following instructions:If you want to unapply one credit memo without specifying invoices or debit memos, specify the invoices or debit memos in the request.If you want to unapply one credit memo from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.If you want to unapply one credit memo from a single invoice or debit memo with a large volume of items, specify invoice items or debit memo items in the request. The maximum number of invoice items or debit memo items that you can specify in the request is 1,000.If a credit memo has a large volume of items, specify credit memo items in the request. The maximum number of credit memo items that you can specify in the request is 1,000.When unapplying a credit memo, the total number of the credit memo's item parts must be less than or equal to 1,000. Otherwise, the operation would fail and an error message would pop up. When you see this error, you can try using the Unapply a credit memo API as an alternative. Similarly, make sure that all the requirements listed in the API reference are met. |
| Refunding credit memos | When you refund a credit memo, the total number of credit memo items to be refunded must be less than or equal to 15,000 (including taxation items but excluding zero-amount items).When you refund a credit memo by specifying items, the total number of credit memo items you can specify must be less than or equal to 1,000 (including taxation items but excluding zero-amount items). |
| Rules for generating invoices and credit memos | If the rule for generating invoices and credit memos is set to Create credit memos for net negative invoice totals without grouping charges , negative invoices or negative credit memos might be generated. |
| Multiple memo items created from the same invoice item | If multiple credit memo items are created from the same invoice item, the total tax amount for the same charge might have a difference of one cent or two cents from the tax amount of the invoice item. |

## Limitations in Unapplied Payments

If you have the Invoice Settlement feature enabled, Unapplied Payments has the following specific known limitations.
| Scenario | Limitations |
| --- | --- |
| Creating payments | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.When you create a payment, the total number of invoice items and debit memo items that the payment to apply to must be less than or equal to 15,000 (including taxation items but excluding zero-amount items). |
| Applying payments | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.When you apply a payment, the total number of invoice items and debit memo items that the payment will apply to must be less than or equal to 15,000 (including taxation items but excluding zero-amount items).If the limit is hit, you can follow the instructions:If you want to apply one payment to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.If you want to apply one payment to a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000. |
| Unapplying payments | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.If the limit is hit, you can follow the instructions:If you want to unapply one payment without specifying invoices or debit memos, you have to specify the invoices or debit memos in the request.If you want to unapply one payment from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.If you want to unapply one payment from a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000.Limitations in Invoice Write-Off and Reversal.When you unapply a payment, the total number of invoice items and debit memo items that the payment will unapply from must be less than or equal to 15,000 (including taxation items but excluding zero-amount items). |

## Limitations in invoice write-off and reversal

If you have the Invoice Settlement feature enabled, invoice write-off and invoice reversal have the following specific known limitations.
| Scenario | Limitations |
| --- | --- |
| Number of items in invoices | You can only write off or reverse an invoice if it contains at most 2,000 items in total, including invoice items, discount items, and taxation items. If an invoice contains more than 2,000 items, see Invoice write-off and Invoice reversal for the workaround. |

## Limitations in Invoice Item Settlement

You cannot use Data Query to query the `InvoiceItemId` and `DebitMemoItemId` fields of the Payment Application Item or the Payment Part Item object to retrieve the invoice items and debit memo items that the payments are applied. Instead, use alternative queries like the following to retrieve the invoice items and debit memos respectively:

1.  Use the following to retrieve payments applied to debit memo only:

    `select dmi.id, dmi.amount, ppi.amount,ppi.paymentpartid from debitmemoitem dmi join paymentpartitem ppi on dmi.id = ppi.debitmemoitemid join paymentpart pp on pp.id = ppi.paymentpartid`

2.  Use the following to retrieve payments applied to invoice only:

    `select ii.id, ii.chargeamount, ppi.amount,ppi.paymentpartid from invoiceitem ii join paymentpartitem ppi on ii.id = ppi.invoiceitemid join paymentpart pp on pp.id = ppi.paymentpartid`

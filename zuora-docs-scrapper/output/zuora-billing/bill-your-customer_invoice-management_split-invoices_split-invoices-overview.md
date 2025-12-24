---
title: "Split invoices overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/split-invoices/split-invoices-overview"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:19.279Z"
---

# Split invoices overview

Splitting invoices allows customers to distribute payments across multiple invoices, offering flexible payment terms for large invoices.

Splitting an invoice lets a customer spread out payments for a single invoice across multiple invoices. You can split an original draft invoice into multiple invoices, allocating all original charges across the new invoices on a percentage basis of your choosing. This capability is useful if you have a large original invoice that you agree to let a customer pay in several installments.

You can split invoices from the Zuora UI or through SOAP API. This article explains how to split an invoice into multiple installments from the Zuora UI. For SOAP API, see Splitting an invoice to use flexible payment terms for information.

## How splitting an invoice works

Suppose a customer has an invoice that totals $100,000. The customer wants to make four payments spread across multiple billing periods on the invoice. You can split that invoice into four separate invoices, each for a specific percentage of the original amount. These percentages can be any amount that you want to set as long as the collection of split invoices total 100% of the original invoice. In our example, you can set the first split invoice to 40% ($40,000), then each successive split invoice to 30% ($30,000), 20% ($20,000), and 10% ($10,000).

If you turn on the [Flexible Billing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/overview-of-flexible-billing) feature, you can split a draft invoice that originates from a subscription with [Flexible Billing Attributes](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes). The split invoices retain the billing attributes from the subscription. You can also choose not to retain the payment term, in this case, you need to update the payment term while splitting the draft invoice. See Use case of working with Flexible Billing.

If you add a new invoice to the billing period, Zuora will automatically distribute it across the split invoices.

You can do the following things:

-   Split an existing draft invoice into two or more invoices. The splits are based on a percentage of the original invoice.
-   Re-split an existing draft invoice, changing the percentage of the invoice split . You can reset and reconfigure the split percentages, and number of splits. You can only do this with invoices that have not been posted.

## Invoice numbers

When you split (or re-split) an invoice, Zuora creates new, separate invoices. Each split invoice has its own invoice numbers and includes the same items as the original invoice. The original invoice is replaced by the new set of split invoices and will no longer be displayed.

For example, if you split Invoice INV0001 into three parts, this will create three new split invoices: INV0002, INV0003, and INV0004.

Splitting an invoice can cause a gap in the invoice numbering sequence.

Note:

Invoice numbering without gaps in the sequence is in Limited Availability . If you wish to access this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

## Invoice percentages

You split an invoice into two or more parts by specifying the percentage of the whole that each split invoice represents. You can enter whole numbers or decimal numbers with up to nine decimal places. The total must add up to 100 percent.

All charges applied to invoice items, including discounts and taxes, are also split when you split the invoice.

If the split percentage results in uneven currency values, Zuora rounds the values for charges and discounts using the currency rounding rules you have specified in your billing settings, and applies any leftover amount to the final invoice.

## Draft invoices

You can split an invoice into multiple draft invoices, each with a different invoice date.

However, if you attempt to run another bill run to generate a new invoice using the same billing attributes—such as `Bill To Contact`, `Payment Term`, `Currency`, and others—the bill run will fail. This occurs because the previously split invoices remain in draft status and have not yet been posted.

To proceed, you must either post or cancel the existing draft split invoices before executing a new bill run.

Note: The new bill run does not support appending new invoice items to existing draft split invoices.

## Invoice notifications

If the communication profile that you're using emails the invoices when they're posted, Zuora will email all of the invoices to the customer at the same time. Because all split invoices must be posted at the same time, the invoice posted notification is triggered and acts on all of the split invoices at once.

If you want to mail the invoices separately, you must email them manually (instead of using the notification).

## Custom fields

When you split a draft invoice, all custom fields of the resulting invoices will be given the same values as the original invoice. If you re-split a split invoice, the custom field values of the resulting invoices will also be given the same values as the original invoice.

When you have split invoices and you add a new invoice to the billing period, Zuora automatically distributes this new invoice across the split invoices. However, this causes the values of the split invoices' custom fields to be set to their default values, not the values of the original invoice.

Note:

Splitting draft split invoices that existed before August 13th 2014 (Release 179), causes the custom field values of the resulting re-split invoices' to be set to their default values, not the values of the original invoice.

## Post split invoices and apply payments

When you post one part of a split invoice, or post the bill run for a split invoice, all of the split invoices will be posted. Similarly, if you unpost a split invoice, all of the split invoices will be unposted at the same time.

Once you apply a payment or an adjustment to any of the posted invoices, you cannot unpost any of the split invoices.

## Cancel and delete split invoices

When canceling split invoices, they are treated as a group. If you cancel any of the split invoices, then all of the invoices will be canceled.

However, you can delete a single split invoice without deleting all related split invoices. You can only delete an invoice that has been canceled.

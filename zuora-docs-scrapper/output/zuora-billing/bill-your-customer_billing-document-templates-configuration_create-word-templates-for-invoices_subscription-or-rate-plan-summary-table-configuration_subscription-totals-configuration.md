---
title: "Subscription totals configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/subscription-or-rate-plan-summary-table-configuration/subscription-totals-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:27.357Z"
---

# Subscription totals configuration

You can configure subscription totals using the ViewBy table filter to display totals for each subscription.

Suppose one of your customers has two subscriptions, and two rate plans in each subscription. You can use the `ViewBy` table filter to show a total for each subscription. The field code is as follows:

`{ MERGEFIELD "TableFilter:ViewBy Subscription" \* MERGEFORMAT }`

Note that the table filter parameter is enclosed in quotation marks. When a parameter contains a space, you must enclose the parameter in quotation marks, otherwise it will not be processed correctly.

The table filter is shown in bold in the following template:

| SUBSCRIPTION SUMMARY |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| «TableStart:Subscription» «TableFilter: ViewBy Subscription» «Subscription.SubscriptionNumber» | Subscription Notes: «Subscription.Notes» | «Subscription.TermStartDate»-«Subscription.TermEndDate» | «Subscription.AmountWithoutTax» | «Subscription.TaxAmount» | «Subscription.ExtendedPrice» «TableEnd:Subscription» |

The table will list one row per subscription on the invoice:

| SUBSCRIPTION SUMMARY |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| A-S00000010 | Annual subscription for gold members. | 01/01/2012-12/31/2012 | $59.99 | $0.00 | $59.99 |
| A-S00000011 | Annual subscription for silver members. | 01/01/2012-12/31/2012 | $29.99 | $0.00 | $29.99 |

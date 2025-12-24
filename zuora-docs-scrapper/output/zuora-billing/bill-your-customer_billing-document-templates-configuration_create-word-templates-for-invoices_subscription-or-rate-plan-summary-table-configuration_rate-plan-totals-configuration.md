---
title: "Rate plan totals configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/subscription-or-rate-plan-summary-table-configuration/rate-plan-totals-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:29.929Z"
---

# Rate plan totals configuration

Configure rate plan totals using the ViewBy table filter to display a summary for each rate plan.

Suppose one of your customers has two subscriptions, and two rate plans in each subscription. You can use the `ViewBy` table filter to show a total for each rate plan. The field code is as follows:

`{ MERGEFIELD "TableFilter:ViewBy RatePlan" \* MERGEFORMAT }`

The table filter is shown in bold in the following template:

| RATE PLAN SUMMARY |  |  |  |  |
| --- | --- | --- | --- | --- |
| «TableStart:Subscription»«TableFilter: ViewBy RatePlan»«Subscription.SubscriptionNumber» | «Subscription.RatePlan.Name» | «Subscription.AmountWithoutTax» | «Subscription.TaxAmount» | «Subscription.ExtendedPrice»«TableEnd:Subscription» |

The table will list one row per rate plan on the invoice:

| RATE PLAN SUMMARY |  |  |  |  |
| --- | --- | --- | --- | --- |
| A- S00000010 | Data Plan | $39.99 | $0.00 | $39.99 |
| A- S00000010 | Cable Plan | $20.00 | $0.00 | $20.00 |
| A- S00000011 | Data Plan | $19.99 | $0.00 | $19.99 |
| A- S00000011 | Cable Plan | $10.00 | $0.00 | $10.00 |

---
title: "Zero value rows hiding"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/subscription-or-rate-plan-summary-table-configuration/zero-value-rows-hiding"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:33.128Z"
---

# Zero value rows hiding

Explore how to hide zero dollar line items in Subscription and Rate Plan Summary tables using the HideZeroValueRows table filter.

In both the Subscription and Rate Plan Summary tables, you have the option to hide zero dollar line items.

The `HideZeroValueRows` table filter will hide all the rows where the subscription or rate plan totals equal zero, by filtering out all rows where the `Subscription.ExtendedPrice` is 0. The field code is as follows:

`{ MERGEFIELD TableFilter:HideZeroValueRows \* MERGEFORMAT }`

To enable this option you must modify your current invoice template by including the tag `<<TableFilter:HideZeroValueRows>>`. By default all rows including those where `Subscription.ExtendedPrice` is 0 are displayed, as the sample invoice template does not include the `<<TableFilter:HideZeroValueRows>>` tag.

In the following example the table will show one row per rate plan and hide all the rows where the Rate Plan Total is 0.

| RATE PLAN SUMMARY |  |  |  |  |
| --- | --- | --- | --- | --- |
| «TableStart:Subscription» «TableFilter: ViewBy RatePlan» « TableFilter:HideZeroValueRows » «Subscription.SubscriptionNumber» | «Subscription.RatePlan.Name» | «Subscription.AmountWithoutTax» | «Subscription.TaxAmount» | «Subscription.ExtendedPrice»«TableEnd:Subscription» |

Instructions and a sample template are also available from within the Zuora application. Click your username at the top right and navigate to​​​​​ .

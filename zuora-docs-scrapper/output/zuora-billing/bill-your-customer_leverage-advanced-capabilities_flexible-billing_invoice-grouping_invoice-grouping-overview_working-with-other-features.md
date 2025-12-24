---
title: "Working with other features"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-grouping-overview/working-with-other-features"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:37.922Z"
---

# Working with other features

This topic outlines the compatibility of the Invoice Grouping feature with various other features, detailing dependencies and support levels.

The following table lists how the Invoice Grouping feature works with other features.

| Feature | Compatibility |
| --- | --- |
| Flexible Billing Attributes | The Invoice Grouping feature depends on the Flexible Billing Attributes feature. After enabling the Flexible Billing Attributes feature, you can have the Invoice Grouping feature enabled automatically. |
| Orders or Orders Harmonization | The following order actions support the Invoice Grouping feature.Create Subscription order actionYou can specify different invoice group numbers for subscriptions under an account during the create subscription order action.For the same customer account, subscriptions with the same invoice group number are billed into one separate invoice.Owner Transfer order action You can transfer the subscription ownership or invoice ownership of a subscription from one account to another account for subscriptions with specified invoice group numbers.Renewal order action You can renew subscriptions with specified invoice group numbersTerms And Conditions order action You can change the terms and conditions for subscriptions with specified invoice group numbers. |
| Invoice Settlement | Invoice Settlement supports the Invoice Grouping feature.You can retrieve the invoice group number associated with a credit or debit memo through the REST API.Meanwhile, Invoice Adjustment and Invoice Item Adjustment also support the Invoice Grouping feature. |
| Billing Schedule | Billing Schedule supports the Invoice Grouping feature.You can create and manage invoice schedules for subscriptions with specified invoice group numbers. For the same account, all subscriptions with the same invoice group number and billed into one single invoice. |
| Zuora Payments | Zuora Payments supports the Invoice Grouping feature. |
| Zuora Finance | Zuora Finance supports the Invoice Grouping feature. |
| Data Query | Data Query temporarily does not support the Invoice Grouping feature. |
| Zuora 360+ | Zuora 360+ does not support synchronizing invoice group number fields on the following objects to Salesforce in real time.SubscriptionOrderOrder Line ItemInvoiceCredit MemoDebit Memo |
| Order to Revenue | The Order to Revenue feature supports the Invoice Grouping feature. |
| Billing - Revenue Integration | The Billing - Revenue Integration feature does not support the Invoice Grouping feature. |

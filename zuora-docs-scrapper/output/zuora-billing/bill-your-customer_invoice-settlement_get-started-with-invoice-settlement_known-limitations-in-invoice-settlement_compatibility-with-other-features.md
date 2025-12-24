---
title: "Compatibility with other features"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/known-limitations-in-invoice-settlement/compatibility-with-other-features"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:11.088Z"
---

# Compatibility with other features

The following table lists the Invoice Settlement compatibility with other features.

| Feature | Compatibility |
| --- | --- |
| Credit Balance | If you have the Invoice Settlement feature enabled, the Credit Balance feature is deprecated. |
| Invoice Splitting | If you have both Invoice Settlement feature and Invoice Splitting enabled, you cannot reverse split invoices. |
| No Rounding features | If you want to enable the Invoice Settlement feature, you have to disable the No Rounding features that are in Limited Availability . Otherwise, it might cause payment or credit memos to fail to apply to invoices or debit memos due to the default decimal precision of currencies. |
| Prepaid Drawdown app | If you want to enable the Invoice Settlement feature, you have to disable the Prepaid Drawdown app. |
| Enhanced Invoice Numbering app | If you have the Enhanced Invoice Numbering app enabled, the Invoice Settlement feature is supported with limitations. |
| Zuora Netsuite Connector | If you have Zuora Netsuite Connector enabled, the Invoice Settlement feature is supported with limitations. |
| Rollover model of the overage smoothing charge model | Credit memos are not generated and the billing run fails in scenarios where all the following conditions are met:The Rollover of the Overage Smoothing charge model is used in a usage charge, and this charge is to be included in a credit memo.The generation rule "Create credit memos for net negative invoice totals without grouping charges" is configured as the billing rule.The total amount of all the charges that are included in the bill run is negative. |
| Billing - Revenue Integration | If you have the Billing - Revenue Integration feature enabled, you must complete the relevant configuration on the Zuora Revenue side so that Credit Memo and Debit Memo object data can be synced properly. |
| Zuora 360 | Invoice Settlement objects and fields are not supported in Zuora 360 but are supported in Zuora 360+. Therefore, you must ensure that Zuora 360+ is enabled if you want to use Invoice Settlement with Zuora CPQ. |

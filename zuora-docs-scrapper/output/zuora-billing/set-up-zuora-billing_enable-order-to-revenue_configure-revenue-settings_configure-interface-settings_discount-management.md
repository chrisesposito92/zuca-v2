---
title: "Discount Management"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/configure-interface-settings/discount-management"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:38.040Z"
---

# Discount Management

Using Interface Settings you can configure discount management settings, including duration, use of actual discount dates, and accounting codes, to align with revenue transactions.

In this interface setting section, you can configure the following settings:

| Settings | Options | Is this option the default value? | Generation behavior and logic |
| --- | --- | --- | --- |
| Duration | Align with apply to charge date | Yes | When generating transactions, map the apply to charge's start and end dates to the revenue start and end dates for the discount charges. |
| Use actual discount date | No | Booking transactions are generated with actual discount start and end dates.When generating transactions, map the discount charge's start and end dates to the revenue start and end dates. |  |
| Accounting Codes | Align with discount charge | No | When generating transactions, map the discount charge's six accounting codes to the revenue's six accounting codes. |
| Align with apply to charge | Default value | When generating transactions, map the apply to charge's six accounting codes to the revenue's six accounting codes. |  |

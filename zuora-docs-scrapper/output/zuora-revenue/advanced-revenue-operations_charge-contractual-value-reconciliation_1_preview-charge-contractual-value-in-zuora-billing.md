---
title: "Preview charge contractual value in Zuora Billing"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation_1/preview-charge-contractual-value-in-zuora-billing"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:36.514Z"
---

# Preview charge contractual value in Zuora Billing

Learn how to preview charge contractual value and extended list price in Zuora Billing to facilitate data reconciliation and identify issues early.

With the Billing - Revenue Integration feature enabled, you can preview the charge contractual value (CCV) and extended list price (ELP) after the subscription is created in Zuora Billing. It helps you identify issues in the early stage, and facilitates data reconciliation between Zuora Billing and Zuora Revenue.

Note that if multiple currencies are supported in the subscription owner's account, Zuora Billing does the rounding for CCV and ELP with the precision determined based on the currency settings of Zuora Billing. For more information about Zuora Billing currency settings, see [Customize currencies](/zuora-billing/set-up-zuora-billing/billing-settings-configuration).

Take the following steps to view the CCV for a rate plan charge in Zuora Billing:

1.  In your Zuora tenant, navigate to Customers > Subscriptions .
2.  Find the subscription in which you want to view the CCV, and click the subscription number.
3.  In the Included Products section, click the clock icon next to the charge for which you want to view the CCV metric. A charge history window then opens. CCV and ELP for each charge segment are displayed in the according column.

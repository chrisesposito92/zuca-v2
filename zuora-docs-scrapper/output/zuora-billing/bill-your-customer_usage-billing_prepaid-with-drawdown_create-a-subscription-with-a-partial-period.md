---
title: "Create a subscription with a partial period"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/create-a-subscription-with-a-partial-period"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:33.264Z"
---

# Create a subscription with a partial period

Create a subscription with a partial period using the Prepaid with Drawdown feature, allowing for a prepayment subscription with a partial billing period followed by whole billing periods.

You must Activate the Term End Day option in the Customize Billing Day setting.

The Prepaid with Drawdown feature supports creating subscriptions that contain a partial period, which refers to a prepayment subscription whose term consists of a partial billing period followed by one or more whole billing periods.

Example: Suppose you want to create a 14-month subscription from 2022-11-01 to 2023-12-31. The first two months, from 2022-11-01 to 2022-12-31, will be the first validity period. The remaining 12 months from 2023-01-01 to 2023-12-31 will be the second validity period.

1.  Create a prepayment charge with the following configuration:

    -   Validity period: Annual

    -   Billing period: Annual

    -   Billing day: Term End Day

    -   Billing period alignment: Align to Term End


    If you use the REST API or SOAP API to create the charge:

    -   Set `Billing day` to `Term End Day` and `Billing period alignment` to `Align to Term End`

    -   Set`BillingCycleType` to `TermEndDay` and set `BillingPeriodAlignment` to `AlignToTermEnd`


2.  Create a prepayment subscription with the following configuration:

    -   Type: Termed

    -   Term start date: 11/1/2022

    -   Initial term: 14

    -   Period type: Month


3.  Add the prepayment charge you created into the prepayment subscription.

Once created, on the Prepayment Balance tab of this subscription, two validity periods will be available: 11/01/2022 -12/31/2022 and 01/01/2023 -12/31-2023.

-   Partial period subscriptions only work with the Prepaid with Drawdown feature and are subject to the limitations already imposed on the use cases of Prepaid with Drawdown.

-   When creating prepayment charges for partial period subscriptions: You can also add prepayment charges to existing partial period subscriptions at any time. For more information, see Add prepayment product to subscription.

    -   Only prepayment charges of recurring type can set their Billing day to Term End Day and Billing period alignment to Align to Term End .

    -   When Billing day is set to Term End Day , Billing period alignment must be set to Align to Term End . The two settings must be used in pairs.

-   When creating partial period subscriptions, only the Monthly based term type is supported.

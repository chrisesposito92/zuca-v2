---
title: "Required Zuora Billing settings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/required-zuora-billing-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:21.785Z"
---

# Required Zuora Billing settings

Ensure proper revenue accounting by configuring essential settings in Zuora Billing, including billing rules and subscription settings.

We recommend the following required configurations practices to achieve proper revenue accounting results in Zuora Revenue.

Make sure that you configure the following settings in Zuora Billing as given below.

-   The following table lists the billing rule settings with the required values for the Order to Revenue feature to work:


| Billing rule setting | Required value |
| --- | --- |
| Bill recurring charges for partial month (with monthly based billing periods)? | Yes |
| Bill recurring charges for partial week (with weekly based billing periods)? | Yes |
| Bill usage charges for partial month (with monthly based billing periods)? | Yes |
| Bill usage charges for partial week (with weekly based billing periods)? | Yes |
| Create credit memos mirroring invoice items? | Yes or Yes but do not create for zero balance invoice items |
| When prorating a month, assume 30 days in a month or use actual days? | Use actual number of days |
| When prorating periods greater than a month, prorate by month first, or by day? | Prorate by day |
| When bill credit for recurring charges, based on billed period or credit period | Based on the total billing period amount and charged amount |
| Invoice Past End-of-Term when Auto-Renew is OFF? | No |
| Invoice Past End-of-Term when Auto-Renew is ON? | No |

-   Contact Zuora Global Support to enable the Subscription Term for Revenue feature. For more information, see Subscription term for revenue generation .

-   Contact Zuora Global Support to enable the Finance feature. Also, complete the following Finance settings:

    -   Home Currency

    -   Reporting Currency

-   Contact Zuora Global Support to enable the Subscription Term for Revenue feature. For more information, see Subscription term for revenue generation .

-   Contact Zuora Global Support to enable the Finance feature. Also, complete the following Finance settings:

    -   Home Currency

    -   Reporting Currency

-   The following table lists the default subscription settings with the required values:

    | Default subscription setting | Required value |
    | --- | --- |
    | Allow update Subscription trigger dates | No |
    | Update Rate Plan Charge trigger condition | No |

---
title: "Credit for prorated discounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/proration-credit/credit-for-prorated-discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:44.309Z"
---

# Credit for prorated discounts

This topic explains how to handle credits for prorated discounts when customers shorten or cancel subscriptions with fixed-amount discount charges.

## Scenario 1

When your customers shorten or cancel regular charges in their subscriptions and the regular charges have applied to them, you need to issue credits back for both charge types. You can choose how to handle the discount charge through the Credit for Prorated Discounts (Fixed-amount Discount Charge Only) billing rule.

-   Select Yes if you want to prorate the discount your customer can enjoy.
-   Select No if you want your customer to enjoy the original discount as much as possible. This is the default option.

Let's use the following scenarios to explain the impacts of the different options. Assume all actions happen on the same day.

-   Your customer commits to a one-year subscription with $1,200 regular charge and a $720 fixed amount discount.
-   Invoice showing the customer should pay: $480 = $1,200 - $720

If your customer shortens the subscription to 3 months, on the new invoice:

| Billing rule set to No | Billing rule set to Yes |
| --- | --- |
| Proration credit for regular charge is -$900 = $1,200/12 * 3 - $1,200 | Proration credit for regular charge is -$900 = $1,200/12 * 3 - $1,200 |
| Proration credit for discount charge is $420: The greater value of ($720 - $1,200/12 *3) and 0 | Proration credit for discount charge is $540 = $720 - $720/12*3 |
| You need to credit back $480 to your customer. | You need to credit back $360 to your customer. |

If your customer shortens the subscription to 8 months, on the new invoice:

| Billing rule set to No | Billing rule set to Yes |
| --- | --- |
| Proration credit for regular charge is -$400 = $1,200/12 * 8 - $1,200 | Proration credit for regular charge is -$400 = $1,200/12 * 8 - $1,200 |
| Proration credit for discount charge is 0: The greater value of ($720 - $1,200/12 *8) and 0 | Proration credit for discount charge is $240 = $720 - $720/12*8 |
| You need to credit back $400 to your customer. | You need to credit back $160 to your customer. |

If your customer cancels the subscription, on the new invoice:

| Same result no matter the billing rule is set to Yes or No |
| --- |
| Proration credit for regular charge is -$1,200Proration credit for discount charge is $720You need to credit back $480 to your customer. |

## Scenario 2

-   Your customer commits to a one-year subscription with $1,200 regular charge and a $1,200 fixed amount discount.
-   Invoice showing the customer should pay: 0 = $1,200 - $1,200

If your customer shortens the subscription to 8 months, on the new invoice:

| Billing rule set to No | Billing rule set to Yes |
| --- | --- |
| Proration credit for regular charge is -$400 = $1,200/12 * 8 - $1,200 | Proration credit for regular charge is -$400 = $1,200/12 * 8 - $1,200 |
| Proration credit for discount charge is $400: The greater value of ($1,200 - $1,200/12 *8) and 0 | Proration credit for discount charge is $400 = $1,200 - $1,200/12*8 |

In this case, no matter your customer shortens the subscription by how many months, the result is always the same. The credit the customer can get is $0.

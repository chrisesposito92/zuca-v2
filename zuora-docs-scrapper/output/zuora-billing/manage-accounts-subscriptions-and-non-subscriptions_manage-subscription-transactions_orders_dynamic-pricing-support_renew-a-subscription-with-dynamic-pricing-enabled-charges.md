---
title: "Renew a subscription with dynamic pricing enabled charges"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/renew-a-subscription-with-dynamic-pricing-enabled-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:51.417Z"
---

# Renew a subscription with dynamic pricing enabled charges

This topic explains how to renew a subscription with dynamic pricing, ensuring charges are updated using the latest product catalog pricing.

When renewing a subscription with dynamic pricing enabled charges set to “Use Latest Product Catalog Pricing”, Zuora will automatically:

To update a charge's pricing attributes by creating an order:

1.  Retrieve the latest values of the pricing attributes.
2.  Use the new term’s start date to pull the updated list price from the product catalog.
3.  Set the sales price in the renewal term to that new list price. For example a per unit recurring charge, License Fee has the following decision table in dynamic pricing configuration.

    | Attribute 1: Account_Type | Attribute 2: Site_Size | Effective Date | Price |
    | --- | --- | --- | --- |
    | VIP | >=10 | 2025/01/01 ~ 2025/12/31 | $10 |
    | VIP | <=10 | 2025/01/01 ~ 2025/12/31 | $15 |
    | Normal | >=10 | 2025/01/01 ~ 2025/12/31 | $15 |
    | Normal | <=10 | 2025/01/01 ~ 2025/12/31 | $20 |
    | VIP | >=10 | >= 2026/01/01 | $11 |
    | VIP | <=10 | >= 2026/01/01 | $15 |
    | Normal | >=10 | >= 2026/01/01 | $17 |
    | Normal | <=10 | >= 2026/01/01 | $22 |

    On 2025/01/01, create a new 12 months term subscription to subscribe to a rate plan with the License Fee charge with the following pricing attributes: Account\_Type = “VIP”, Site\_Size = “88”,  so the original list price is $10/seat. Set the License Fee price change option to “Use Latest Product Catalog Pricing” so that it can adopt the new price upon renewal automatically.

    On 2025/12/01, create an order to renew the subscription, Zuora will use the following pricing attribute value to lookup the latest list price from catalog:

    -   Effective Date = 2026/01/01 (New term start date)

    -   Account\_Type = "VIP"

    -   Site\_Size = "88"


    After renewal, the price of License Fee will become $11/seat from 2026/01/01 onwards.

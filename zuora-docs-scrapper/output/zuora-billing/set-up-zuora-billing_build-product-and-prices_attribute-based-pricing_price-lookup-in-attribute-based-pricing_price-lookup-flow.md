---
title: "Price lookup flow"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/price-lookup-in-attribute-based-pricing/price-lookup-flow"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:01.714Z"
---

# Price lookup flow

Outlines the sequence of steps involved in determining the price for a subscription product rate plan in Zuora Billing, including charge overrides and price lookup formula evaluations.

The following diagram explains how price is determined when you subscribe to a product rate plan for your end customer after the Attribute-based Pricing feature is enabled.

![ABP_flow.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/da6d4461-cb7a-48d7-b654-53436128d720?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRhNmQ0NDYxLWNiN2EtNDhkNy1iNjU0LTUzNDM2MTI4ZDcyMCIsImV4cCI6MTc2NjYzODg1OSwianRpIjoiNzExNDk5ODJmMjQ2NDlhNWJjMTdlNTFhODMyODIyYTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zxG3qgz-6M6gkbuNx_9S_5NCDDx-pobfRNl7V_-SkuE)

The following things happen in sequence in Zuora Billing when you create a subscription for a customer account.

The charge override behavior in Step 5 below is applicable only when an order or order preview is submitted for subscribing to a rate plan.

1.  A subscription product rate plan is created by cloning the original product rate plan charge.
2.  The system checks whether there is any charge override.

    -   If yes, the charge override is applied to the subscription product rate plan.

    -   If no, skip to the next step.


3.  The system checks whether a price lookup formula is defined for the product rate plan charge for evaluation.

    -   If yes, proceed to the next step.

    -   If no, skip to Step 6 to finalize the subscription rate plan charge.


4.  The system collects all required information to evaluate the price lookup formula and identify the target product charge definition.

    -   If the target product charge definition is identified, proceed to the next step.

    -   If no target product charge definition can be identified or any error occurs, the whole process terminates with errors.


5.  Based on the following conditions, the system evaluates whether values provided in charge override in an order or order preview should be applied to the subscription rate plan charge.

    | Condition 1Whether the attribute value is overridden by the target charge definition | Condition 2Whether the attribute is present in the order charge override | Evaluation result |
    | --- | --- | --- |
    | No | Doesn’t matter | Does not apply changes |
    | Yes | Yes | Does not apply changes （It’s because order charge override has higher priority.) |
    | Yes | No | Apply changes |

6.  The subscription product rate plan charge is finalized.

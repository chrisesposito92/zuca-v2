---
title: "Managing ramp contracts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/managing-ramp-contracts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:31.854Z"
---

# Managing ramp contracts

Learn about managing multi-year Ramp contracts, which involve variable pricing, quantities, or discounts over time, and explore examples and best practices using Zuora's Order to Revenue.

## Example 1

A Ramp contract is usually a multi-year contract for a product or service in which the product or service can vary in price, quantity, or discount over different time intervals throughout the contract term. A contract can result in a Ramp structure because of billing term/schedule flexibility provided to the last consumer.

Two scenarios are provided to help you understand the calculation and the best practices when using Zuora’s Order to Revenue to address Ramp contracts:

The contract resulted in a Ramp structure due to the billing term/schedule flexibility provided to the last consumer:

The unit price and the quantity of the Rate Plan Charge (RPC) remain the same upon booking.

| Duration | Units purchased | Unit Price (Extended selling price) | Contract value | Revenue recognized | Billing installment |
| --- | --- | --- | --- | --- | --- |
| Year 1 | 1 | 2,000 | 2,000 | 2,000 | 1,000 |
| Year 2 | 1 | 2,000 | 2,000 | 2,000 | 2,000 |
| Year 3 | 1 | 2,000 | 2,000 | 2,000 | 3,000 |
| Total |  |  | 6,000 | 6,000 | 6,000 |

## Example 2

In this example, the contract is expected to renew at 2,000 per annum at the end of 3rd year. This example is interpreted as a Billing Schedule in Ramp contracts.  Zuora recommends you use the Billing Schedule feature available in Zuora Billing. This transaction does not impact the data of Zuora Revenue, and no action is required in Zuora Revenue.

The contract resulted in a Ramp structure due to the change in per unit price throughout the total contract term.

The unit price ramps/unequal discount apply, but the quantity of the RPC remains the same during the total contract term of 36 months and upon booking.

| Duration | Units purchased | Unit Price (Extended selling price) | Contract value | Standalone selling price | Revenue recognized | Billing installment |
| --- | --- | --- | --- | --- | --- | --- |
| Year 1 | 1 | 1,000 | 1,000 | 2,000 | 2,000 | 1,000 |
| Year 2 | 1 | 2,000 | 2,000 | 2,000 | 2,000 | 2,000 |
| Year 3 | 1 | 3,000 | 3,000 | 2,000 | 2,000 | 3,000 |
| Total |  |  | 6,000 |  | 6,000 | 6,000 |

In this example, the contract is expected to renew at 3,000 per annum at the end of 3rd year.

This example is interpreted as a Discount/Pricing Ramp in Ramp contracts.  Zuora recommends you use the Allocation feature available in Zuora Revenue and the Product Rate Plan Charge and Charge Model features available in Zuora Billing.

![Ramp Contract Decision Tree](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a37e07c5-f382-497a-a5e5-015d46e690e4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEzN2UwN2M1LWYzODItNDk3YS1hNWU1LTAxNWQ0NmU2OTBlNCIsImV4cCI6MTc2NjYzOTU1MCwianRpIjoiODJhZmQ1ZTJkYzc2NDdlOGJmN2YwYmRjZGI5N2JhZjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pq509oWh12zwW6xt5BAdLt1mG7fQ_EcyP-ywHflOr4M)

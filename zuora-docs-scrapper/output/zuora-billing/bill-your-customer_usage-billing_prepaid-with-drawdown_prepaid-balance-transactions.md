---
title: "Prepaid balance transactions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepaid-balance-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:47.286Z"
---

# Prepaid balance transactions

Explore the various types of prepaid balance transactions, including prepayment, drawdown, and adjustments, which affect the total prepaid units available during a subscription.

The following concepts are related to prepaid balance transactions.

| Prepaid Balance | Total prepaid units available during a subscription. It is an aggregate of all funds under a subscription. |
| --- | --- |
| Prepaid Balance Fund | Prepaid units available for use during a validity period. Each validity period has a corresponding fund. |
| Prepaid Balance Transaction | An action that increases or decreases its associated Prepaid Balance. There are 7 types of transactions:PrepaymentDrawdownPrepayment AdjustmentDrawdown AdjustmentDrawdown ReversalPrepayment Credit BackPrepayment Credit Back Reversal |
| Prepayment | An action that creates a Prepaid Balance Fund, thus increasing the associated Prepaid Balance. The following actions trigger Prepayment transaction type:Create prepayment subscriptionRenew prepayment subscriptionAdd prepayment product to subscriptionExtend prepayment subscription |
| Prepayment Adjustment | An action that updates a Prepaid Balance Fund, thus updating or decreasing the associated Prepaid Balance. Update the quantity of prepayment product in a subscription triggers Prepayment Adjustment transaction type. |
| Drawdown | An action that decreases the Prepaid Balance associated with a drawdown charge. Uploading usage triggers Drawdown transaction type. |
| Drawdown Adjustment | An action that updates a usage record tied to a drawdown charge, thus updating the associated Prepaid Balance. Uploading usage with a unique key triggers Drawdown Adjustment transaction type. |
| Drawdown Reversal | An action that is generated during the automatic reversal of a usage record tied to a drawdown charge. This type of transaction is based on one Drawdown or Drawdown Adjustment transaction. The following order actions trigger the Drawdown Reversal transaction type:Remove prepayment product from subscriptionCancel prepayment subscriptionShrink terms and conditions of prepayment subscription |
| Prepayment Credit Back | An action that decreases the associated prepaid balance to 0 due to removal or cancellation. The following order actions trigger the Prepayment credit Back transaction type:Remove prepayment product from subscriptionCancel prepayment subscriptionShrink prepayment subscription |
| Prepayment Reverse Credit Back | An action that recovers the prepaid units erased in the associated prepaid balance due to removal , cancellation, or shrinking the term .Deleting an order (the previous removal or cancellation order) triggers the Prepayment Reverse Credit Back transaction type. |

## Example

Suppose you take the following actions for a customer who has subscribed to your prepaid product (10 units included per month) for one month:

| Action | Prepayment transaction type | Units |
| --- | --- | --- |
| Create the subscription | Prepayment | 10 |
| Renew the subscription for one month | Prepayment | 10 |
| Update prepaid quantity to 15 | Prepayment Adjustment | 5 |
| Upload one usage record with Quantity = 3 units | Drawdown | -3 |
| Update the previous usage record with Quantity = 4 units | Drawdown adjustment | 3 (First recover the above 3 units ) |
| Drawdown | -4 (Then draw down the 4 units) |  |

You can view the customer’s prepaid balance through the Zuora UI or Data Query.

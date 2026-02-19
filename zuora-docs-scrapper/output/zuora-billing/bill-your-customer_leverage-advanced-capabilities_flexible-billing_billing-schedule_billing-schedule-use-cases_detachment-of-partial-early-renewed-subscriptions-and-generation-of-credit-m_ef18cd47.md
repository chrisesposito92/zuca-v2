---
title: "Create an order for early subscription renewal using the standard billing process"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-and-generation-of-credit-memos-using-standard-billing-process/create-an-order-for-early-subscription-renewal-using-the-standard-billing-process"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:48.475Z"
---

# Create an order for early subscription renewal using the standard billing process

Create an order with specific actions to facilitate an early renewal for subscription S2, adjusting product terms and billing schedules accordingly.

Create an order with the following order actions to make an early renewal for S2. For more information about order actions, see Order actions tutorials .

-   Remove Product: Remove the product from which C2 is generated and set the trigger date as `6/1/2025`.

-   Terms And Conditions: Update the term start date and trigger date to `6/1/2025`.

-   Add Product: Add the same product from which C2 is generated and set the trigger date as `6/1/2025`.


When the renewal is done, S2 now contains two subscription rate plan charges:

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S2 | 01-01-2025 | 5 | C2 | 05-31-2025 | $12,000.00 | Per Year | Annual |
| 06-01-2025 | 12 | C3 | 06-01-2026 | $12,000.00 | Per Year | Annual |  |

The current billing schedule of IS1 is as follows:

-   Total Amount: $24,000.00

-   Actual Amount: $17,000.00

-   Billed Amount: $20,000.00

-   Unbilled Amount: -$3,000.00

-   Invoice schedule item 1:

    -   Amount: $20,000.00

    -   Actual Amount To Bill: $20,000.00

    -   Billed Amount: $20,000.00

-   Invoice schedule item 2:

    -   Amount: $4,000.00

    -   Actual Amount To Bill: -$3,000.00

    -   Billed Amount: -


The Actual Amount of IS1 is different from the Total Amount because the term of C2 was reduced from 12 months to 5 months.

Actual Amount = $12,000.00+($10,000.00-($12,000.00÷12)×5) = $17,000.00

In the equation above, `($12,000.00÷12)×5` represents the credit for C2’s removed service period from 1 June 2025 to 31 October 2025.

The Unbilled Amount is negative because the credit of C2 is greater than the unbilled amount of C1.

Unbilled Amount = ($12,000.00-$10,000.00)-($12,000.00÷12)×5=-$3,000.00

In the equation above, `$12,000.00-$10,000.00` represents the unbilled amount of C1 for the service period from 1 November 2025 to 31 December 2025.

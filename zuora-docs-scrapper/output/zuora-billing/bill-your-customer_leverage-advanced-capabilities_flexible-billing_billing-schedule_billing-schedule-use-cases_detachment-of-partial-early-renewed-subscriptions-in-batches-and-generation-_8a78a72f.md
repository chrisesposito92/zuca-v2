---
title: "Creation of an order for changes in S5 and S6"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/creation-of-an-order-for-changes-in-s5-and-s6"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:31.783Z"
---

# Creation of an order for changes in S5 and S6

Create an order to modify the product in S5 and initiate an early renewal for S6, including the creation of a new subscription S7.

Create an order with the following order actions to change the product of S5 and make an early renewal for S6. For more information about order actions, see Order actions tutorials .

-   Order action for removing the product in S5:

    -   Remove Product: Remove the product from which C5 is generated and set the trigger date as `6/1/2025`.

-   Create a new subscription S7:

    -   Create Subscription: Create a new subscription by selecting a new product which is different from the one C5 is generated from. Set the Term Start Date as `6/1/2025`.

-   Order action for early renew S6:

    -   Remove Product: Remove the product from which C6 is generated and set the trigger date as `6/1/2025`.

    -   Terms And Conditions: Update the term start date and trigger date to `6/1/2025`.

    -   Add Product: Add the same product from which C6 is generated and set the trigger date as `6/1/2025`.


Once the order is created, the subscription change plan rates in S5, S6, and S7 are as follows:

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S5 | 01-01-2025 | 5 | C5 | 05-31-2025 | $12,000.00 | Per Year | Annual |
| S6 | 01-01-2025 | 5 | C6 | 05-31-2025 | $12,000.00 | Per Year | Annual |
| 06-01-2025 | 12 | C6-2 | 06-01-2026 | $12,000.00 | Per Year | Annual |  |
| S7 | 06-01-2025 | 12 | C7 | 06-01-2026 | $12,000.00 | Per Year | Annual |

The billing schedule of IS1 is the same because C5 and C6 had already been detached from IS1.

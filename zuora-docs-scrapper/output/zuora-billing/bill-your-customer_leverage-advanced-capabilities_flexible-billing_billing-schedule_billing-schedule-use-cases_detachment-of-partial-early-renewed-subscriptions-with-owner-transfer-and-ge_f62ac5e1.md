---
title: "Creation of an order for early subscription renewal and owner transfer"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-with-owner-transfer-and-generation-of-credit-memos-in-a-new-invoice-schedule/creation-of-an-order-for-early-subscription-renewal-and-owner-transfer"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:54.796Z"
---

# Creation of an order for early subscription renewal and owner transfer

Create an order for early renewal and transfer of subscription ownership, including actions like product removal, term updates, and owner transfer.

Create an order with the following order actions to make an early renewal for S6 and transfer it to a different account. For more information about order actions, see Order actions tutorials .

-   Remove Product: Remove the product from which C3 is generated and set the trigger date as `6/1/2025`.

-   Terms And Conditions: Update the term start date and trigger date to `6/1/2025`.

-   Add Product: Add the same product from which C3 is generated and set the trigger date as `6/1/2025`.

-   Owner Transfer: Transfer the subscription to a different customer account and set the trigger date as `6/1/2025`.


With the above changes, S3 now contains two subscription rate plan charges:

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S3 | 01-01-2025 | 5 | C3 | 05-31-2025 | $12,000.00 | Per Year | Annual |
| 06-01-2025 | 12 | C4 | 06-01-2026 | $12,000.00 | Per Year | Annual |  |

The billing schedule of IS1 is the same because C3 had already been detached from IS1.

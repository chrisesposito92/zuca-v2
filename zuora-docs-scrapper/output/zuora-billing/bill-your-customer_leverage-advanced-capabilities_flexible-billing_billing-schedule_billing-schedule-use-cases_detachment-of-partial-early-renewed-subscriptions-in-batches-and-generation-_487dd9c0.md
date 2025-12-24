---
title: "Creation of an order for changes in S3 and S4"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/creation-of-an-order-for-changes-in-s3-and-s4"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:42.107Z"
---

# Creation of an order for changes in S3 and S4

Create an order to modify the product in S3 and initiate an early renewal for S4, including subscription changes and product updates.

Create an order with the following order actions to change the product of S3 and make an early renewal for S4. For more information about order actions, see Order actions tutorials .

-   Order action for removing the product in S3:

    -   Remove Product: Remove the product from which C3 is generated and set the trigger date as `8/1/2025`.

-   Create a new subscription S8:

    -   Create Subscription: Create a new subscription by selecting a new product which is different from the one C3 is generated from. Set the Term Start Date as `8/1/2025`.

-   Order action for early renew S4:

    -   Remove Product: Remove the product from which C4 is generated and set the trigger date as `8/1/2025`.

    -   Terms And Conditions: Update the term start date and trigger date to `8/1/2025`.

    -   Add Product: Add the same product from which C6 is generated and set the trigger date as `8/1/2025`.


Once the order is created, the subscription change plan rates in S3, S4, and S8 are as follows:

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S3 | 01-01-2025 | 7 | C3 | 07-31-2025 | $12,000.00 | Per Year | Annual |
| S4 | 01-01-2025 | 7 | C4 | 07-31-2025 | $12,000.00 | Per Year | Annual |
| 08-01-2025 | 12 | C4-2 | 08-01-2026 | $12,000.00 | Per Year | Annual |  |
| S8 | 08-01-2025 | 12 | C8 | 08-01-2026 | $12,000.00 | Per Year | Annual |

The billing schedule of IS1 is the same because C3 and C4 had already been detached from IS1.

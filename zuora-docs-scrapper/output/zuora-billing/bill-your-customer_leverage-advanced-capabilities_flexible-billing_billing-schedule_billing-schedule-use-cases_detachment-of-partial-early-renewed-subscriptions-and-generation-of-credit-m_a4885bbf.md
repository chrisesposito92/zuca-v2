---
title: "Creation of an order for early subscription renewal in a new invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-and-generation-of-credit-memos-in-a-new-invoice-schedule/creation-of-an-order-for-early-subscription-renewal-in-a-new-invoice-schedule"
product: "zuora-billing"
scraped_at: "2026-02-20T17:35:18.602Z"
---

# Creation of an order for early subscription renewal in a new invoice schedule

Create an order with specific actions to facilitate an early subscription renewal for S3, including product removal, terms update, and product addition, all set to trigger on 6/1/2025.

Create an order with the following order actions to make an early renewal for S3. For more information about order actions, see Order actions tutorials .

-   Remove Product: Remove the product from which C3 is generated and set the trigger date as `6/1/2025` .

-   Terms And Conditions: Update the term start date and trigger date to `6/1/2025` .

-   Add Product : Add the same product from which C3 is generated and set the trigger date as `6/1/2025` .


When the renewal is done, S3 now contains two subscription rate plan charges:

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S3 | 01-01-2025 | 5 | C3 | 05-31-2025 | $15,000.00 | Per Year | Annual |
| 06-01-2025 | 12 | C4 | 06-01-2026 | $15,000.00 | Per Year | Annual |  |

The current billing schedule of IS1 is as follows:

-   Total Amount: $45,000.00

-   Actual Amount: $36,250.00

-   Billed Amount: $30,000.00

-   Unbilled Amount: $6,250.00

-   Invoice schedule item 1:

    -   Amount: $30,000.00

    -   Actual Amount To Bill: $30,000.00

    -   Billed Amount: $30,000.00

-   Invoice schedule item 2:

    -   Amount: $15,000.00

    -   Actual Amount To Bill: $6,250.00

    -   Billed Amount: -


The Actual Amount of IS1 is different from the Total Amount because the term of C3 was reduced from 12 months to 5 months.

Actual Amount = $15,000.00+$15,000.00+($10,000.00-($15,000.00÷12)×3) = $36,250.00

In the equation above, `($15,000.00÷12)×3` represents the credit for C3’s removed service period from 1 June 2025 to 31 August 2025.

---
title: "Removal of charges from partially processed invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/removal-of-charges-from-partially-processed-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:01.410Z"
---

# Removal of charges from partially processed invoice schedules

Explains the process of removing charges from partially processed invoice schedules, ensuring proper generation of subsequent invoices.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule created on an order is partially processed, you can remove some rate plan charges from the subscriptions in the order, and then expect subsequent invoices to be generated properly.

This use case is based on the precondition documented in Create single-year invoice schedules on new subscriptions with the same term :

-   An order with four subscriptions is created, with the same charge start date and end date ranging from 1 January 2023 to 31 December 2023.

-   An invoice schedule with three schedule items is created on the order with the total amount of $70,200.00.

-   One invoice is automatically generated on 4 February 2023 with the amount of $50,000.00 on 4 February 2023.


The following table lists the detailed information of the invoice schedule in Partially Processed status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2023 | $50,000.00 | $50,000.00 | Processed | INV001 |
| 2 | 05/01/2023 | $14,000.00 | - | Pending | - |
| 3 | 09/16/2023 | $6,200.00 | - | Pending | - |

After the first invoice is generated and billed with the amount of $50,000.00 on 4 February 2023, the first order still has the amount of $20,200.00 to be billed. At this time, you create an order to remove all rate plan charges C1, C2, C3, and C4 from the abovementioned subscriptions as of 1 November 2023, and activate the order. Due to the subscription charge removal, the amount of $11,700.00 for November and December 2023 does not need to be billed. The amount $11,700.00 is the calculation result of 70200÷12×2 based on the following formula:

Total invoice amount ÷ Subscription term × Removal period

In consideration of all the conditions, the order still has the amount of $8,500.00 to be billed, the calculation result of $20,200.00 minus $11,700.00.

Therefore, on 1 May 2023, invoice INV002 is generated with the amount of $8,500.00 during the processing of the second invoice schedule item. On 16 September 2023, no invoice is generated during the processing of the third invoice schedule item because no further amount needs to be billed for the order.

The following table lists the detailed information of the invoice schedule in Fully Processed status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2023 | $50,000.00 | $50,000.00 | Processed | INV001 |
| 2 | 05/01/2023 | $14,000.00 | $8,500.00 | Processed | INV002 |
| 3 | 09/16/2023 | $6,200.00 | - | Processed | - |

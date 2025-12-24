---
title: "Remove charges from subscriptions associated with fully processed invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/remove-charges-from-subscriptions-associated-with-fully-processed-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:58.649Z"
---

# Remove charges from subscriptions associated with fully processed invoice schedules

Learn how to remove charges from subscriptions after fully processing invoice schedules and generate credit memos for charge removal.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule created on an order is fully processed, you can remove some rate plan charges from the subscriptions in the order, and then expect a credit memo to be generated for the charge removal.

This use case is based on the precondition documented in Create single-year invoice schedules on new subscriptions with the same term :

-   An order with four subscriptions is created, with the same charge start date and end date ranging from 1 January 2023 to 31 December 2023.

-   An invoice schedule with three schedule items is created on the order with the total amount of $70,200.00.

-   Three invoices are automatically generated on 4 February 2023, 1 May 2023, and 16 September 2023.


The following table lists the detailed information of the invoice schedule in Fully Processed status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2023 | $50,000.00 | $50,000.00 | Processed | INV001 |
| 2 | 05/01/2023 | $14,000.00 | $14,000.00 | Processed | INV002 |
| 3 | 09/16/2023 | $6,200.00 | $6,200.00 | Processed | INV003 |

After all invoices are automatically generated and posted, your customer cancels all the subscriptions S1, S2, S3, and S4 from the abovementioned subscriptions as of 1 November 2023. Therefore, you create an order to remove all rate plan charges C1, C2, C3, and C4 from the abovementioned subscriptions as of 1 November 2023, and activate the order.

To remove rate plan charges from the subscriptions in the existing order and generate a credit memo for the charge removal, perform the following steps:

1.  Create an order to remove all rate plan charges C1, C2, C3, and C4 from the abovementioned subscriptions as of 1 November 2023, and activate the order. Order O-0002 is created and activated.
2.  On the order details page of order O-0001, click the number of the invoice schedule associated with the order.
3.  On the invoice schedule details page, click Create Bill Run in the upper right.
4.  In the displayed Confirmation dialog, click Yes to confirm bill run creation.

Bill run with number BR-00000001 is automatically generated. During the bill run execution, a credit memo with number CM001 is generated with the amount of $11,700.00, containing eight credit memo items. The total credit amount is the credit sum of all charges.

The following table lists the amount that is proportionally distributed to each subscription, and the service period of each credit memo item.

| Credit memo item | Credit from item | Subscription | Charge | Service start date | Service end date | Amount | Total amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | INV003: InvoiceItem1 | S1 | C1 | 11/29/2023 | 12/31/2023 | $3,258.97 | $11,700.00 |
| Credit memo item 2 | INV002: InvoiceItem1 | S1 | C1 | 11/01/2023 | 11/29/2023 | $2,891.03 |  |
| Credit memo item 3 | INV003: InvoiceItem2 | S2 | C2 | 11/29/2023 | 12/31/2023 | $1898.86 |  |
| Credit memo item 4 | INV002: InvoiceItem2 | S2 | C2 | 11/01/2023 | 11/29/2023 | $1684.48 |  |
| Credit memo item 5 | INV003: InvoiceItem3 | S3 | C3 | 11/29/2023 | 12/31/2023 | $971.51 |  |
| Credit memo item 6 | INV002: InvoiceItem3 | S3 | C3 | 11/01/2023 | 11/29/2023 | $861.82 |  |
| Credit memo item 7 | INV003: InvoiceItem4 | S4 | C4 | 11/29/2023 | 12/31/2023 | $70.66 |  |
| Credit memo item 8 | INV002: InvoiceItem4 | S4 | C4 | 11/01/2023 | 11/29/2023 | $62.67 |  |

In general, multiple credit memo items might be generated for the same cancellation period. They are associated with separate invoice items. The items are split based on the following rule:

-   The credit amount of the credit memo item must not exceed the amount of the associated invoice item.

-   The service period of each credit memo item is calculated based on the actual credit amount.


The credit amount for each subscription charge is calculated based on the following formula:

Total invoice amount - (Total invoice amount ÷ Subscription term) × Service period

For example, the credit amount for subscription charge C1 is the calculation result of 36900-(36900÷12)×10, equal to $6,150. The total credit amount is greater than the total amount of invoice INV003, so invoice INV003 is completely credited back to your customer, and part of invoice INV002 is also credited back. Therefore, the credit amount for subscription charge C1 is separated into two credit memo items:

-   Credit memo item 1 has the amount of $3,258.97 credited from invoice INV003, and the service period is from 29 November 2023 to 31 December 2023, the same as the service period of the corresponding invoice item in invoice INV003.

-   Credit memo item 2 has the amount of $2,891.03 credited from invoice INV002, equal to the credit amount for subscription charge C1 minus that of credit memo item 1. The service period is from 1 November 2023 to 28 November 2023, equal to the removal period minus the service period of credit memo 1.


By analogy, you can calculate the credit amount and service period for subscription charges C2, C3, and C4.

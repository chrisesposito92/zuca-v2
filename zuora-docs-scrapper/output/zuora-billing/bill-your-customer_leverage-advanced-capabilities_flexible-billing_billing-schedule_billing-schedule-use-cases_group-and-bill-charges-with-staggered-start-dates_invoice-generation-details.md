---
title: "Invoice generation details"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/group-and-bill-charges-with-staggered-start-dates/invoice-generation-details"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:55.774Z"
---

# Invoice generation details

Explore the details of the generation of invoices INV001, INV002, and INV003, including the distribution of amounts to subscriptions and the calculation of service periods.

After the invoice schedule is created, the first invoice with invoice number INV001 is automatically generated on 1 January 2023 with the total amount of $27,000.00. The amount of invoice INV001 is less than $31,000, the total amount of subscriptions S1, S2, and S3. Therefore, all the billed amount of invoice INV001 comes from subscriptions S1, S2, and S3 in Group 1.

The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item in invoice INV001.

| Invoice item | Subscription | Charge | Service start date | Service end date | Amount | Total amount |
| --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | S1 | C1 | 01/01/2023 | 11/14/2023 | $10,451.61 | $27,000.00 |
| Invoice item 2 | S2 | C2 | 01/01/2023 | 11/14/2023 | $10,451.62 |  |
| Invoice item 3 | S3 | C3 | 06/01/2023 | 12/03/2023 | $6,096.77 |  |

The amount displayed in the Amount column for each invoice item is calculated based on the following formula:

(Billed invoice amount ÷ Total invoice amount) × Selling price

For example, the amount calculation is as follows for the first and third charge line items in the first generated invoice:

-   The amount for the first charge line item is $10,451.61, which is calculated based on the formula of (27000÷(12000+12000+7000))×12000 and rounded based on the default rounding rule specified for the corresponding account.
-   The amount for the third charge line item is $6,096.77, which is calculated based on the formula of (27000÷(12000+12000+7000))×7000 and rounded based on the default rounding rule specified for the corresponding account.

Meanwhile, the service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated based on the following formula:

(Invoice item amount ÷ Selling price) × Number of months in term

For example, the service period calculation is as follows for the first and third charge line items in the first generated invoice:

-   The proportion of months for the first charge line item is calculated based on the formula of (10,451.61÷12000)×12 months. The calculation result is 10.45161 months, indicating 10 months plus 13.54 days. A portion of the day 14 November 2023 is consumed by the first invoice. Therefore, the service end date is 14 November 2023 for the first and second charge line items in the same invoice.
-   The proportion of months for the third charge line item is calculated based on the formula of (6,096.77÷7000)×7 months. The calculation result is 6.09677 months, indicating six months plus 2.99 days. A portion of the day 3 December 2023 is consumed by the first invoice. Therefore, the service end date is 3 December 2023 for the third charge line item.

On 1 May 2023, the second invoice with invoice number INV002 is generated with the total amount of $4,000.00. The amount of invoice INV002 is equal to the remaining unbilled amount of subscriptions S1, S2, and S3. Therefore, all the billed amount of invoice INV002 comes from subscriptions S1, S2, and S3 in Group 1. After invoices INV001 and INV002 are generated, Group 1 is completely billed.

The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item in invoice INV002.

| Invoice item | Subscription | Charge | Service start date | Service end date | Amount | Total amount |
| --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | S1 | C1 | 11/14/2023 | 12/31/2023 | $1,548.39 | $4,000.00 |
| Invoice item 2 | S2 | C2 | 11/14/2023 | 12/31/2023 | $1,548.38 |  |
| Invoice item 3 | S3 | C3 | 12/03/2023 | 12/31/2023 | $903.23 |  |

On 1 January 2024, the third invoice with invoice number INV003 is generated with the total amount of $36,000.00. The amount of invoice INV001 is $36,000, equal to the total amount of subscriptions S4, S5, and S6. Therefore, all the billed amount of invoice INV002 comes from subscriptions S4, S5, and S6 in Group 2.

The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item in invoice INV00.

| Invoice item | Subscription | Charge | Service start date | Service end date | Amount | Total amount |
| --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | S4 | C1 | 01/01/2024 | $12,000.00 | $3,258.97 | $36,000.00 |
| Invoice item 2 | S5 | C2 | 01/01/2024 | $12,000.00 | $1,898.86 |  |
| Invoice item 3 | S6 | C3 | 01/01/2024 | $12,000.00 | $971.51 |  |

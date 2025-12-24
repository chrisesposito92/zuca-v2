---
title: "Invoice generation rules in Billing Schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule/invoice-generation-rules-in-billing-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:27.897Z"
---

# Invoice generation rules in Billing Schedule

This section outlines the rules for generating invoices in billing schedules, including invoice amount allocation and service period determination.

You have the flexibility to create invoice schedules involving one single year or spanning multiple years. The invoice generation rules might vary for invoice schedules with different terms.

## Invoice amount allocation to invoice items

During the invoice generation process, the amount allocated to invoice items follows the following rules:

-   The invoice amount is allocated to invoice items based on the annual price.
-   For multiple charges contained in different subscriptions, charges are consumed in sequential order by charge start date. The charges with the same start date are consumed together and are billed proportionally into the scheduled invoices. For a specific use case, see Create single-year invoice schedules for charges with different start dates and end dates within one term .
-   The total billed amount sums to the total amount of the selling price for each individual charge.

The amount allocated to each invoice item is calculated based on the following formula:

(Billed invoice amount ÷ Total invoice amount) × Selling price

For a specific use case, see Create single-year invoice schedules on new subscriptions with the same term .

## Service period determination on invoice items

During the invoice generation process, the service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated in the following formula:

(Invoice item amount ÷ Selling price) × Number of months in the subscription term

The calculation of the service period is determined by month first, and then by day. The calculated result rounds the date up because a portion of that day is consumed.

The calculation of days depends on the option selected for the When prorating a month, assume 30 days in a month or use actual days? billing rule.

-   To use the actual number of days in the month of a proration, select Use actual number of days.
-   To always use thirty days in a month for a proration, select Assume 30 days in a month.

Assume that the calculated service period is 6.7 months indicating 6 months plus 0.7 months, and the charge start date is 01/01/2022.

-   If the Use actual number of days option is selected, the number of calculated days is actually 21.7 days, the calculation result of 0.7 \* 31 days. A portion of 07/22/2022 is consumed, so the service period is set to be 01/01/2022 to 07/22/2022.
-   If the Assume 30 days in a month option is selected, the number of calculated days is actually 21 days, the calculation result of 0.7 \* 30 days. Then, the service period is set to be 01/01/2022 to 07/21/2022.

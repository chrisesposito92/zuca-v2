---
title: "Bill prepaid customers"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/bill-prepaid-customers"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:26.747Z"
---

# Bill prepaid customers

Outlines the process of billing a prepaid customer.

## Prerequisites

You are recommended to get familiar with:

-   [Bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation)

-   [Prepaid balance transactions](/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepaid-balance-transactions)


## Example

Suppose you have configured the following prepayment charges and drawdown charges in your product catalog:

| Prepayment charge 1 | Prepayment charge 2 | Drawdown charge |
| --- | --- | --- |
| Charge type: recurringCharge model: Per unitList price: $100UOM: MinutesDefault quantity: 1Billing period: AnnualPrepaid Units: 1000Prepaid UOM: MinutesValidity period: Subscription Term | Charge type: recurringCharge model: Per unitList price: $30UOM: MinutesDefault quantity: 1Billing period: AnnualPrepaid Units: 300Prepaid UOM: MinutesValidity period: Subscription Term | Charge type: UsageCharge model: Per unitList price: $1UOM: Minutes |

## Billing scenarios

Take the following actions and create bill runs to bill your prepaid customer and generate invoices:

| Date | Action | Result |
| --- | --- | --- |
| 2022-01-01 | Create a 12-month subscription including Prepayment Charge 1 and Drawdown Charge for a customer. | Under the customer account:Prepaid Balance: 1000 MinutesFund-1: 1000 MinutesPrepaid Balance Transaction: 1 prepayment action adding 1000 Minutes |
| 2022-01-01 | Run a bill run with the target date of 2022-01-01 for this customer. | One invoice item of $100 for Prepayment Charge 1. |
| 2022-10-01 | Upload 9 usage records, each is 100 Minutes for this customer. | All 9 usage records are "Processed".Under the customer account:Prepaid Balance: 100 MinutesFund-1: 100 MinutesPrepaid Balance Transaction: 9 drawdown actions each deducting 100 Minutes |
| 2022-10-01 | Run a bill run with the target date of 2022-10-01 for this customer. | No invoice item.The customer doesn't need to pay because those 900 Minutes are drawn from the 1000 Minutes prepaid. |
| 2022-11-01 | Upload 1 usage record of 300 Minutes for this customer. | The usage record is "Pending".Under the customer account:Prepaid Balance: 0 MinutesFund-1: 0 MinutesPrepaid Balance Transaction: 1 drawdown action deducting 100 MinutesThe prepaid balance is fully consumed. The remaining 200 Minutes (300 - (1000-900)) will be billed. |
| 2022-11-01 | Run a bill run with the target date of 2022-11-01 for this customer. | One invoice item of $200 for the remaining 200 Minutes.200 Minutes * $1/Minute = $200 |
| 2022-11-01 | The customer asks you to cancel the previous invoice and agrees to add Prepayment Charge 2 in the subscription.You make the amendments for your customer. | Under the customer account:Prepaid Balance: 300 MinutesFund-2: 300 Minutes (new fund created)Prepaid Balance Transaction: 1 prepayment action adding 300 Minutes |
| 2022-11–01 | Run a bill run with the target date of 2022-11-01 for this customer. | The usage record changes from "Pending" to "Processed".Under the customer account:Prepaid Balance: 100 MinutesFund-2: 100 MinutesPrepaid Balance Transaction: 1 drawdown action deducting the remaining 200 Minutes |

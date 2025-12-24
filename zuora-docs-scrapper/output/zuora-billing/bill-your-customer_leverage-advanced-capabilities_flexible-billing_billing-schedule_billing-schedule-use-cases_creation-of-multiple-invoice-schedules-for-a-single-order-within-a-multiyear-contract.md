---
title: "Creation of multiple invoice schedules for a single order within a multiyear contract"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-multiple-invoice-schedules-for-a-single-order-within-a-multiyear-contract"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:10.444Z"
---

# Creation of multiple invoice schedules for a single order within a multiyear contract

Create multiple invoice schedules for a single order in a multiyear contract by utilizing different billing attributes at the subscription level, allowing efficient customer invoicing.

With the Billing Schedule feature, if one order specific to a multiyear contract contains subscriptions specified with different billing attributes, you can create multiple invoice schedules for the single order based on the billing attributes specified at the subscription level.

## Context

For a multiyear order, you can create distinct invoice schedules for subscriptions with different billing attributes within the same order. This functionality allows you to invoice your customers efficiently according to specific needs.

Assume that your customer inks a two-year agreement that covers one order O-00000001, containing four subscriptions with the same term of 12 months. Two subscriptions in the first year have a Net 30 payment term, while subscriptions in the second year have a Net 45 payment term.

The following table lists information on the subscriptions contained in order O-00000001.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Payment term | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S-00000001 | 01/01/2023 | 12 | C-00000001 | 12/31/2023 | Net 30 | $1,200.00 | Per Year | Annual |
| S-00000002 | 01/01/2023 | 12 | C-00000002 | 12/31/2023 | Net 30 | $1,200.00 | Per Year | Annual |
| S-00000003 | 01/01/2024 | 12 | C-00000003 | 12/31/2024 | Net 45 | $900.00 | Per Year | Annual |
| S-00000004 | 01/01/2024 | 12 | C-00000004 | 12/31/2024 | Net 45 | $900.00 | Per Year | Annual |

To bill your customer based on the payment term, you can create two invoice schedules based on the payment term, one for the first year and the other for the second year. You expect to generate four invoices on different dates for the four subscriptions.

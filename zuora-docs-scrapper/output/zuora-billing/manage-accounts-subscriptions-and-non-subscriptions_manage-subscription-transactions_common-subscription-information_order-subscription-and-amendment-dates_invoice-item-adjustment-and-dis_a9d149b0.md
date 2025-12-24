---
title: "Invoice item adjustment and discount dates"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/invoice-item-adjustment-and-discount-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:49.302Z"
---

# Invoice item adjustment and discount dates

Zuora determines service periods for invoice items, adjustments, and discounts, which are crucial for revenue recognition schedules.

Zuora uses these dates to determine the subscription service period. Invoice item adjustments and discounts use the same service periods as the invoice item they are offsetting. Cancellation fees caused by subscription cancellations have the service period defined by the cancellation date and the original service period end date of the cancelled item. Activation and usage fees have a one day service period.

The following table shows the type of invoice items that can show up on an invoice and the service start and service end dates that are associated with each invoice item type that is used to derive the revenue recognition schedule for that specific charge.

| Type of invoice item that can appear in an invoice | Service start date used to derive the recognition schedule | Service end date used to derive the recognition schedule |
| --- | --- | --- |
| Recurring fees | Recurring start period | Recurring end period |
| Activation fees | Date the fee charged | Date the fee charged |
| Usage fees | Prior usage start period | Prior usage end period |
| Discounts | Recurring start period | Recurring end period |
| Invoice item adjustment | Same as item adjusted | Same as item adjusted |
| Cancellation fees | Cancellation date | Same as item cancelled |

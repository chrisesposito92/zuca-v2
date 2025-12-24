---
title: "Multiple invoice schedules for one single order"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule/multiple-invoice-schedules-for-one-single-order"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:38.727Z"
---

# Multiple invoice schedules for one single order

The Billing Schedule feature allows for the creation of multiple invoice schedules for separate subscriptions or individual charges within a single order, offering flexibility in billing intervals and alignment with contract structures.

With the Billing Schedule feature, you have the flexibility to create multiple invoice schedules for separate subscriptions or individual charges for one single order.

-   You can choose one or multiple one-time or recurring charges from your subscriptions for billing. With this functionality, you can bill specific charges at custom intervals, while billing others in regular billing cycles.
-   You can also set up multiple invoice schedules for distinct subscriptions of the same order. This approach ensures a precise alignment with the corresponding contract structure.

For detailed information about a common use case, see Create multiple invoice schedules for a single order within a multiyear contract .

When you have multiple invoice schedules for one order, the following diagram shows how the invoice schedules are associated with the order, subscription, charge, and billing documents.

![Custom Billing Schedule - Object Model](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8687c0dc-37f6-4833-bb43-2af393214e40?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg2ODdjMGRjLTM3ZjYtNDgzMy1iYjQzLTJhZjM5MzIxNGU0MCIsImV4cCI6MTc2NjY4NzYxNywianRpIjoiMTZjZjkxOWNhYmMyNGJiYThhNzU1ODI5YWNhOGFjODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.E15xgqGqfc_KsNC-d1HFdAH05t_kPhqQm3PvUl9JRvo)

-   The fields or objects in Green are newly introduced by the Billing Schedule feature.
-   If multiple invoice schedules are created for separate subscriptions within the same order, the order is linked with the last invoice schedule. The `invoiceScheduleId` field on the Order object refers to the last Invoice Schedule object.
-   If multiple invoice schedules are created for individual charges within the same subscription, the subscription is linked with the latest invoice schedule. The `invoiceScheduleId` field on the Subscription object refers to the last Invoice Schedule object.
-   If multiple invoice schedules are created for different terms of a subscription, the `invoiceScheduleId` field on the Subscription object stores the latest invoice schedule.
-   The charge is linked with the invoice schedule which the charge is included into. The `invoiceScheduleId` field on the Rate Plan Charge object refers to the Invoice Schedule object that the charge belongs to.
-   After an invoice schedule item is executed and generates an invoice, the invoice schedule item is associated with the generated invoice. If a credit memo is generated during execution because charges are removed or subscriptions are canceled, the invoice schedule item is also associated with the credit memo. The `invoiceId` and `creditMemoId` fields on the Invoice Schedule Item object maintain the relationships.
-   Each invoice item on the invoice is associated with the corresponding invoice schedule item used for its generation. If a single invoice consolidates items from various invoice schedules, each invoice item is associated with its respective invoice schedule and invoice schedule item. The association also applies to credit memo items. The `invoiceScheduleId` and `invoiceScheduleItemId` fields on the Invoice Item and Credit Memo Item objects maintain the relationships.

## Invoice schedules for ramp deals

With the Billing Schedule feature, you have the flexibility to create invoice schedules for a ramp deal.

-   You can define an invoice schedule with the schedule items for generating invoices for your defined invoice amounts and dates, not necessarily aligning with each ramp deal interval.
-   You can also change the subscription and define an invoice schedule specific to the change, for example, adding or replacing a product.

For detailed information about a common use case, see Create invoice schedules for ramp deals .

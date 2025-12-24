---
title: "Invoice schedules creation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/invoice-schedules-creation"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:51.666Z"
---

# Invoice schedules creation

The Billing Schedule feature allows the creation of invoice schedules for orders and subscriptions via the Zuora UI and REST API, with important prerequisites and notes to consider.

The Billing Schedule feature provides you the capability to create invoice schedules on orders and subscriptions through both the Zuora UI and REST API.

For more information about the Billing Schedule feature, see Billing Schedule overview .

To create a custom invoice schedule through the REST API, use the [Create an invoice schedule operation](https://www.zuora.com/developer/api-references/api/operation/POST_CreateInvoiceSchedule).

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

## Prerequisite

You must have the Do Bill Runs For Multiple Accounts permission when creating invoice schedules. Otherwise, the auto-generation of bill runs for the invoice schedules will fail. See Billing Roles for more information.

## Important notes

When creating invoice schedules, keep the following important notes in mind:

-   The orders and subscriptions where invoice schedules are created must be activated.

-   You can only add unbilled charges to invoice schedules.

-   The date of an invoice schedule item must be later than that of the previous invoice schedule item, and earlier than that of the next invoice schedule item.

-   All amounts of invoice schedule items must sum up to the total amount of the corresponding invoice schedule.

-   The decimals of all amount fields must match the currency decimal setting.

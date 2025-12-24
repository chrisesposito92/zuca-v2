---
title: "Invoice generation approaches in Billing Schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule/invoice-generation-approaches-in-billing-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:33.835Z"
---

# Invoice generation approaches in Billing Schedule

This reference details various approaches to generating invoices and their compatibility with the Billing Schedule feature in Zuora.

The following table lists the approaches to generating invoices and their compatibility with the Billing Schedule feature.

| Invoice generation approach | Compatibility with the Billing Schedule feature |
| --- | --- |
| Billing Schedule | With the Billing Schedule feature, Zuora Scheduler automatically generates invoices with specific amounts on predefined dates, and scans any related change every hour. If the dates or amounts of pending invoice schedule items are updated, Zuora Scheduler can pick up the change in the next scan.Since Zuora Scheduler scans existing invoice schedules hourly and generates ad hoc bill runs for all accounts that apply, the users who create or update invoice schedules must have the Do Bill Runs For Multiple Accounts permission. Otherwise, the auto-generation of the ad hoc bill runs will fail.If the date of an invoice schedule item is updated to the current date in the tenant timezone, the schedule item will be picked up and processed in the next scan.After an invoice schedule is fully processed, if you remove charges or cancel subscriptions associated with the invoice schedule, Zuora Scheduler will automatically generate credit memos in the next scan. |
| Execute an invoice schedule API operation | You can use the “Execute an invoice schedule” API operation to generate an invoice for a specific invoice schedule item.If you do not specify any invoice schedule item in the request, the next invoice schedule item in Pending status is executed. |
| UI for invoice schedules | You can use the Zuora UI for invoice schedules to generate an invoice for a specific invoice schedule item.If an invoice schedule is fully processed, and has credit to be generated, you can trigger an ad hoc bill run from the Zuora UI. The ad hoc bill run can generate a credit memo. For more information, see Execute invoice schedules . |
| UI for creating bill runsBill Runs API operations | You can use the Zuora UI and REST API to generate invoices for subscriptions associated with invoice schedules by specifying an account or a batch of accounts. Meanwhile, regular subscriptions are also billed |
| Generate billing documents by account ID API operation | This API operation can work with invoice schedules.If you only specify the account ID, the API operation generates invoices for all the unbilled subscriptions that belong to the account, regardless of whether the subscriptions are associated with invoice schedules. The invoice schedule items with dates earlier than the specified target date are picked up.If you specify a list of subscription IDs in the request, the API operation generates invoices for all the specified subscriptions, regardless of whether the subscriptions are associated with invoice schedules. The invoice schedule items with dates earlier than the specified target date are picked up. |
| Invoice and collect API operation | You can use the “Invoice and collect” API operation to generate invoices for all the unbilled subscriptions that belong to the account, regardless of whether the subscriptions are associated with invoice schedules.The invoice schedule items with dates earlier than the target date are picked up. |
| Orders API operations | You can use the following API operations to generate billing documents for the charges that are associated with the corresponding invoice schedule:Create an orderCreate an order asynchronouslyPreview an orderPreview an order asynchronously |
| Generate action (not recommended) | You can use the "Generate" action to generate invoices for all the unbilled subscriptions that belong to the account, regardless of whether the subscriptions are associated with invoice schedules.The invoice schedule items with dates earlier than the target date are picked up. |

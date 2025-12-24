---
title: "Parent and event category code for Events and Notifications"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/standard-events/parent-and-event-category-code-for-events-and-notifications"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:31.026Z"
---

# Parent and event category code for Events and Notifications

Describes Zuora's event organization using parent category codes and event category codes.

Zuora categorizes standard events based on their associated objects. Each standard event has a unique event category code and falls under a parent category, represented by a unique parent category code.

-   Parent category code: This code represents a product area or object in Zuora. You can specify a parent category as the related event in an email or a callout template, and link the template to notification definitions for any standard, custom, or custom scheduled events within that category. For example, if you set 1100 - Invoice as the related event in a callout template, you can link the template to notifications for events such as 1110 - Invoice Posted , 1140 - Invoice Due , or any custom or custom scheduled events associated with the Invoice object.

-   Event category code: This code represents a standard event. You can specify a standard event as the related event in a notification definition, email template, or callout template. For email or callout templates linked to a specific standard event, you can only link them to notifications for the same event.


| Parent category (product area) | Parent category (object) | Parent category code | Event name | Event category code |
| --- | --- | --- | --- | --- |
| Billing |  | 1000 |  |  |
|  | Account | 1500 |  |  |
|  |  |  | Invoices Past Due Account Summary | 1120 |
|  | Amendment | 1300 |  |  |
|  |  |  | Amendment Processed | 1310 |
|  | Bill Run | 1400 |  |  |
|  |  |  | Bill Run Completion | 1410 |
|  | Forecast Run | 1700 |  |  |
|  |  |  | Forecast Run Completion | 1710 |
|  | Invoice | 1100 |  |  |
|  |  |  | Invoice Posted | 1110 |
|  |  |  | Invoice Due | 1140 |
|  |  |  | Manual Email For Invoice | 1130 |
|  | Rate Plan Charge | 1800 |  |  |
|  |  |  | Rate Plan Charge Key Dates | 1810 |
|  | Subscription | 1200 |  |  |
|  |  |  | Key Dates | 1230 |
|  |  |  | Subscription Created | 1210 |
|  |  |  | Upcoming Renewal | 1220 |
| Finance |  | 3000 |  |  |
|  | Accounting Period | 3200 |  |  |
|  |  |  | Trial Balance Completion | 3210 |
|  | Journal Run | 3100 |  |  |
|  |  |  | Journal Run Completion | 3110 |
| Payments |  | 2000 |  |  |
|  | Credit Memo | 2700 |  |  |
|  |  |  | Credit Memo Created | 2710 |
|  |  |  | Credit Memo Posted | 2720 |
|  |  |  | Email Credit Memo | 2730 |
|  | Debit Memo | 2800 |  |  |
|  |  |  | Debit Memo Created | 2810 |
|  |  |  | Debit Memo Posted | 2820 |
|  |  |  | Email Debit Memo | 2830 |
|  | Payment | 2100 |  |  |
|  |  |  | Gateway Reconciliation | 2150 |
|  |  |  | Manual Email For Payment | 2130 |
|  |  |  | Payment Declined | 2110 |
|  |  |  | Payment Processed | 2120 |
|  |  |  | Payment Run Completion | 2140 |
|  | Payment Method | 2200 |  |  |
|  |  |  | Payment Method Closed | 2230 |
|  |  |  | Payment Method Expiration | 2210 |
|  |  |  | Payment Method Updated | 2220 |
|  | Payment Method Updater | 2500 |  |  |
|  |  |  | Payment Method Updater Batch Completed | 2520 |
|  |  |  | Payment Method Updater Batch Started | 2510 |
|  | Refund | 2400 |  |  |
|  |  |  | Credit Balance Refund Processed | 2420 |
|  |  |  | Credit Memo Refund Processed | 2430 |
|  |  |  | Payment Refund Processed | 2410 |
| System |  | (N/A) |  |  |
|  | AQUA | 2600 |  |  |
|  |  |  | AQUA Data Export Completion | 2610 |
|  | Data Source | 1600 |  |  |
|  |  |  | Data Source Output Completion | 1610 |
|  | Import | 2300 |  |  |
|  |  |  | Import Processed | 2310 |

The Credit and Debit Memo event categories are available only if the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature is activated.

---
title: "Notification History - Email Event"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/notification-history---email-event"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:39.274Z"
---

# Notification History - Email Event

Data source to report on information about the email events of each email notification history.

Use the Notification History - Email Event data source to report on information about the email events of each email notification history, including the delivery and engagement metrics such as event type, event details, event count, and created and updated dates.

Note:

This data source applies only to email notifications delivered by the advanced SMTP server.

The following objects are available in the data source.

| Object | Description |
| --- | --- |
| Email Event | Information about the email event of email notification histories.This is the base object for the Notification History - Email Event data source export. Contains the following fields:Created By IDCreated DateEvent CountEvent DetailsEvent SubtypeEvent TimestampEvent TypeIDNotificationUpdated By IDUpdated Date |
| Account | The customer account that owns the email event. |
| Bill To | The contact associated with the account to whom your product or service is billed. |
| Default Payment Method | The default payment method used to make payments. |
| Notification History - Email | The email notification history that the email event is associated with. |
| Parent Account | The parent account associated with the customer account, if applicable. |
| Ship To | The contact associated with the account to whom your product or service is shipped. |
| Sold To | The contact associated with the account to whom your product or service is sold. |

---
title: "Notification History - Email"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/notification-history---email"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:36.549Z"
---

# Notification History - Email

Data source to report on information for all email notification histories.

Use the Notification History - Email data source to report on information for all email notification histories.

The following objects are available in the data source.

| Object | Description |
| --- | --- |
| EmailHistory | Information about email notification histories.This is the base object for the Notification History - Email Data Source Export. Contains the following fields:IDBCCCCContact IDContent File IDCreated ByCreated OnError MessageEvent CategoryNotificationObject IDReply ToSenderStatus. Note that the status of an email notification can be OK, Failed, or Warning.SubjectTo |
| Account | Information about the customer account that owns the email notification histories. |
| Bill To | The contact associated with the account to whom your product or service is billed. |
| Default Payment Method | The default payment method used to make payments. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Ship To | The contact associated with the account to whom your product or service is shipped. |
| Sold To | The contact associated with the account to whom your product or service is sold. |

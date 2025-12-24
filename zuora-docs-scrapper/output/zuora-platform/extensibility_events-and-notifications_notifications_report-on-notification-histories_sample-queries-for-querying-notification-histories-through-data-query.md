---
title: "Sample queries for querying notification histories through Data Query"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/report-on-notification-histories/sample-queries-for-querying-notification-histories-through-data-query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:18.783Z"
---

# Sample queries for querying notification histories through Data Query

Provides common use cases and sample queries for querying notification histories through Data Query.

## Query for email failures

SELECT notificationId, CreatedOn, AccountId, ContactId, ObjectId, Subject, ErrorMessage FROM notificationhistoryemail WHERE status = 'Failed' ORDER BY CreatedOn DESC LIMIT 100

## Query for email failures with advanced configuration

SELECT Account.AccountNumber, Account.Name, Contact.FirstName, Contact.LastName, notificationhistoryemail.Id, notificationhistoryemail.CreatedOn, notificationhistoryemail.Subject FROM notificationhistoryemail JOIN account on account.id = notificationhistoryemail.AccountId JOIN contact on contact.id = notificationhistoryemail.ContactId WHERE notificationhistoryemail.status = 'Failed' AND CreatedOn >= DATE('2023-10-08') LIMIT 100

## Query for callout failures

SELECT Account.AccountNumber, Account.Name, notificationhistorycallout.Id, notificationhistorycallout.CreateTime, notificationhistorycallout.ResponseCode, notificationhistorycallout.ResponseContent FROM notificationhistorycallout JOIN account on account.id = notificationhistorycallout.AccountId WHERE notificationhistorycallout.ResponseCode <> 200 LIMIT 100

## Query for callout successes

SELECT Account.AccountNumber, Account.Name, notificationhistorycallout.Id, notificationhistorycallout.CreateTime, notificationhistorycallout.ResponseCode, notificationhistorycallout.ResponseContent FROM notificationhistorycallout JOIN account on account.id = notificationhistorycallout.AccountId WHERE notificationhistorycallout.ResponseCode = 200 LIMIT 100

## Query for email notification history events

SELECT NotificationId, EmailHistoryId, AccountId, EventType, EventDetails, EventCount, CreatedDate, UpdatedDate FROM notificationhistoryemailevent ORDER BY CreatedDate DESC

## Query for bounced emails

Note that this query applies only to email notifications delivered by the advanced SMTP server.

SELECT NotificationId, EmailHistoryId, AccountId, EventType, EventDetails, CreatedDate, UpdatedDate FROM notificationhistoryemailevent WHERE EventType = 'Bounced' LIMIT 100

## Query for emails triggered by a specific event that have been clicked by customers

You can use the following sample query to retrieve emails that were triggered by the New Account Created custom event and have been clicked by customers. For example, emails containing a reset password link.

Note that this query applies only to email notifications delivered by the advanced SMTP server.

SELECT history.To, history.Subject, event.AccountID, event.NotificationId, event.EventType FROM notificationhistoryemail history JOIN notificationhistoryemailevent event on event.EmailHistoryId = history.Id WHERE history.EventName = 'New Account' AND event.EventType = 'Clicked' LIMIT 100

## Query for emails triggered by a particular event that were never opened

You can use the following sample query to retrieve emails triggered by the Invoice Posted standard event (category code 1110) that have not been opened by customers.

Note that this query applies only to email notifications delivered by the advanced SMTP server.

SELECT history.ObjectID as InvoiceID, history.To, history.Subject, event.AccountID, event.NotificationId, event.EmailHistoryId, event.EventType FROM notificationhistoryemail history JOIN notificationhistoryemailevent event on event.EmailHistoryId = history.Id WHERE history.EventName = '1110' AND NOT EXISTS ( SELECT 1 FROM notificationhistoryemailevent event WHERE event.EmailHistoryId = history.Id AND event.EventType = 'Opened' ) LIMIT 100

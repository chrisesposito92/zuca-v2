---
title: "Report on notification histories"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/notifications/report-on-notification-histories"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:12.152Z"
---

# Report on notification histories

Zuora generates a notification history object when an email or callout notification is triggered, capturing the status and relevant details. You can view or resend notification histories, and query these histories through various methods, such as Data Source Export, Data Query, and AQuA API.

## View notification histories

Zuora provides various methods for viewing notification histories:

-   You can view all notification histories on the Setup Profiles, Notifications and Email Templates page. For more information, see [View notification histories](/zuora-platform/extensibility/events-and-notifications/notifications/report-on-notification-histories/view-notification-histories).

-   You can view notification histories sent to a specific account on the account detail page. For more information, see [View notification histories on the account detail page](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/notifications-of-customer-accounts-view-and-resend/view-notification-histories).

-   You can view notification histories with advanced settings by leveraging Data Source Export, Data Query, AQuA API, or Reporting. See the following sections for details.


## Query notification histories through Data Source Export

You can create data source exports for the following data sources to query email or callout notification histories:

-   [Notification History - Callout](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/notification-history---callout)

-   [Notification History - Email](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/notification-history---email)

-   [Notification History - Email Event](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/notification-history---email-event)


## Query notification histories through Data Query

Notification histories are stored in the following tables that can be retrieved through Data Query:

-   `notificationhistorycallout`

-   `notificationhistoryemail`

-   `notificationhistoryemailevent`


For more information about each table, see [Available tables for Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query/available-tables).

## Query notification histories through AQuA API

Notification histories are stored in the following objects that can be retrieved through the AQuA API:

-   CalloutHistory

-   EmailHistory


For more information, see [AQuA Post query](/zuora-platform/data/aggregate-query-api-aqua/post-query) and [Data sources and objects for Export ZOQL](/zuora-platform/data/legacy-query-methods/export-zoql/data-sources-and-objects).

## Create a report using the information from notification histories

You can create a summary or detail report against the following data sources for notification histories:

-   Notification History - Callout

-   Notification History - Email


For more information, see [Create a summary report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report) and [Create a detail report](/zuora-platform/data/reporting/use-reporting/create-a-detail-report).

## Resend notification histories

Zuora provides various methods for resending notification histories:

-   You can resend any notification history on the Setup Profiles, Notifications and Email Templates page. For more information, see [Resend a notification history](/zuora-platform/extensibility/events-and-notifications/notifications/report-on-notification-histories/resend-a-notification-history).

-   You can resend notification histories sent to a specific account on the account detail page. For more information, see [Resend notification histories on the account detail page](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/notifications-of-customer-accounts-view-and-resend/resend-notification-histories).

-   You can use the following operations to resend notification histories through the REST API:

    -   [Resend callout notifications](https://developer.zuora.com/v1-api-reference/api/operation/POST_ResendCalloutNotifications/)

    -   [Resend email notifications](https://developer.zuora.com/v1-api-reference/api/operation/POST_ResendEmailNotifications/)



When resending callout or email notifications, some information in the notification to be resent comes from the template associated with the notification definition, while other information comes from the notification history.

The following table describes where the information comes from when resending callout or email notifications:

| Notification type | Information from the related template | Information from the notification history |
| --- | --- | --- |
| Callout | Authentication TypeUsernamePasswordDomainEnable Preemptive AuthenticationProvider Name | All other information such as endpoint and custom callout header configurations. |
| Email | From NameFrom EmailTo EmailReply-to EmailCC EmailBCC EmailCustom Email Header | All other information such as email subject and body. |

## Notification histories in Multi-Org enabled tenants

If you have the Multi-Org feature enabled, you can view or resend callout and email notification histories only if they belong to the Org Units you have access to.

This restriction applies when viewing or resending notification histories via the following features and services:

-   Email History & Callout History tabs in the Zuora UI

-   Data Query

-   Data Source Exports

-   Reporting

-   AQuA

-   [Resend callout notifications](https://developer.zuora.com/v1-api-reference/api/operation/POST_ResendCalloutNotifications/) & [Resend email notifications](https://developer.zuora.com/v1-api-reference/api/operation/POST_ResendEmailNotifications/) API operations


If you have access to more than one Org Unit, you can use the Org Context Switcher to toggle access for notification histories across different Org Units. For more information, see [Multi-Org overview](/zuora-platform/user-management/multi-org/overview-of-multi-org).

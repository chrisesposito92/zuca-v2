---
title: "Table auditsettingchangeevent"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/data-model-of-audit-trail/table-auditsettingchangeevent"
product: "zuora-platform"
scraped_at: "2025-12-24T05:04:26.652Z"
---

# Table auditsettingchangeevent

The auditsettingchangeevent table in Zuora records all setting changes that impact accounting and financials, allowing for comprehensive monitoring through the Zuora Audit Trail.

Zuora system records every setting changes in the `auditsettingchangeevent` table and allows you to monitor the setting changes that impact accounting and financials.

Changes on the following settings can be monitored by Zuora Audit Trail:

-   Billing

    -   Default Subscription and Order Settings

    -   Define Billing Rules

    -   Manage Tax codes

    -   Define Discount Settings

    -   Manage Revenue Recognition Codes

    -   Configure Tax Dates

    -   Payment Terms

-   Payment

    -   Configure Application Rules

-   Payment Method Type

-   Commerce

    -   Synchronize Salesforce.com Data

-   Finance

    -   Configure Accounting Codes

    -   Configure Accounting Rules

    -   Manage Currency Conversion

    -   Set Revenue Automation Start Date

    -   Configure Revenue Event Types

    -   Manage Revenue Recognition Models

    -   Configure Segments

    -   Configure GL Segmentation Rules

    -   Manage Revenue Recognition Rules

    -   Manage Chart of Accounts

-   User

-   Role & Permission

-   Audit Trail

-   API Versioning


See the `auditsettingchangeevent` table structure below.

| Attribute | Type | Description |
| --- | --- | --- |
| action | varchar | The setting change action. Possible values are:UPDATEDCREATEDDELETEDADDED_TO_COLLECTIONREMOVED_FROM_COLLECTION |
| attributeid | varchar | Id of the changed setting item |
| attributename | varchar | The name of the changed setting item |
| createdbyid | varchar | The Id of the user who changes the setting item |
| createddate | timestamp with time zone | The record's creation date |
| day | integer | The day when the record is created. |
| eventid | varchar | Id of the event |
| id | varchar | Id of the record |
| month | integer | The month when the record is created. |
| namespace | varchar | The namespace of the setting change. Possible values are:Finance & RevenueBillingInvoicingCommerceTenant PropertyPaymentsUserManagement |
| newvalue | varchar | The new value of the setting |
| oldvalue | varchar | The previous value of the setting |
| sequencenumber | bigint | The sequence number of the record |
| settingobjectname | varchar | The setting object name. |
| settingtype | varchar | The setting type. For example, BillingRules, TaxCode, RevenueRecognition, and so on. |
| timestamp | timestamp with time zone | The timestamp of the setting change |
| tokenid | varchar | The Id of the login token |
| transactionid | varchar | The Id of the setting change transaction |
| userid** | varchar | The Id of the user who changes the setting item |
| username | varchar | user name |
| year | integer | The year when the record is created. |

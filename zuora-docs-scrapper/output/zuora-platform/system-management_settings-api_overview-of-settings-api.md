---
title: "Overview of Settings API"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/overview-of-settings-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:18.079Z"
---

# Overview of Settings API

Settings API allows you to automate your tenant settings management process.

With Settings API, you can programmatically:

-   Retrieve a list of all the available settings in your tenant

-   Read a setting value

-   Update a setting value

-   Process batch settings request


You can also leverage this API to clone settings from one tenant to another.

If you use Postman, you can import the Settings API endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:

You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.

## List all settings

You can make a [List all settings](https://developer.zuora.com/v1-api-reference/api/operation/GET_ListAllSettings/) call to obtain all the available settings in your tenant. All the information you need to read or update a setting item is returned in the successful response of this API operation, including:

-   Descriptions of all the settings

-   The available endpoint of every setting item

-   Supported HTTP methods of every endpoint

-   Parameters of every operation, for example, path parameter, header parameter, and so on

-   Request and/or Response schemas of every operation


See [ListAllSettingsResponseSample.json](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json) for a 200 response sample of the "List all Settings" operation.

For common use cases of Settings API, see [Settings API tutorials](/zuora-platform/system-management/settings-api/settings-api-tutorials).

## Batch request

Zuora Settings API supports batch requests. With the batch request operation, you can batch several Settings API calls into a single HTTP request to minimize the number of HTTP connections in case you need to accomplish a large volume of Settings updates in a limited time.

See [Submit settings requests](https://developer.zuora.com/v1-api-reference/api/operation/POST_ProcessSettingsBatchRequest/) in Zuora API Reference for more information.

## Supported settings

See the following table for the supported settings in Settings API.

| Section | Settings | Supported? |
| --- | --- | --- |
| Administration | Security Policies | Yes |
| Manage User Roles | View Only |  |
| Manage Users | No |  |
| Manage Tenant Profile | Yes |  |
| Manage Data Access Control | Yes |  |
| AQuA Stateful Time Offset | No |  |
| External SMTP | Yes |  |
| Billing | Define Default Subscription Settings | Yes |
| Customize Units Of Measure | Yes |  |
| Customize Currencies | Yes |  |
| Manage Custom Fields | Yes |  |
| Define Billing Periods | Yes |  |
| Define Billing Rules | Yes |  |
| Define Numbering and SKU Formats | Yes |  |
| Enable Charge Types / Models | Yes |  |
| Manage Billing Document Configuration | Yes(Document Configuration for Credit Memo and Debit Memo is supported only when Invoice Settlement is enabled) |  |
| Manage Revenue Recognition Codes | Yes |  |
| Payment Terms | Yes |  |
| Download the Zuora WSDL | No |  |
| Setup Taxation Codes | Yes |  |
| Setup External Tax Engine | No |  |
| Customize Batch Names | Yes |  |
| Define Discount Settings | Yes |  |
| Callout Options | No |  |
| Payments | Payment Method | Yes |
| Setup Payment Gateway | Yes |  |
| Configure Payment Retry Rules | Yes |  |
| Setup Payment Method Updater | No |  |
| Setup Payment Page and Payment Link | Yes (New token and page id will be generated) |  |
| Manage Custom Fields | Yes |  |
| Define Payment Rules | Yes |  |
| Configure Reason Codes | Yes |  |
| CIT/MIT Configuration | No |  |
| Configure Application Rule | Yes (Only when Invoice Settlement is enabled) |  |
| Commerce | Synchronize Salesforce.com Data | No |
| Configure Salesforce.com Quote Templates | Yes |  |
| Manage Checkout Pages | No |  |
| Finance | Manage Custom Fields | Yes |
| Configure Aging Balance Settings | Yes |  |
| Configure Accounting Codes | No |  |
| Configure Accounting Rules | Yes |  |
| Manage Currency Conversion | Yes |  |
| Set Revenue Automation Start Date | Yes |  |
| Configure Revenue Event Types | Yes |  |
| Manage Revenue Recognition Models | Yes |  |
| Configure Segments | Yes |  |
| Configure GL Segmentation Rules | Yes |  |
| Manage Revenue Recognition Rules | Yes |  |
| Manage Chart of Accounts | Yes |  |
| Reporting | Manage Datasources | No |
| AQuA job finder | No |  |
| Multi-Entity Settings | Inbound Entity Connections | Yes |
| Outbound Entity Connections | Yes |  |
| Product Attribute Control Level Setup (Sharing Attribute) | Yes |  |

## Limitations

The Settings API currently does not support the following categories of settings:

-   User role creation and updates

-   User management API

-   Email templates

---
title: "GET ListAllSettings"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_ListAllSettings/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:41.309Z"
---

## List all settings

Get a list of all available settings in your tenant.

The response message is by default in JSON format. If you want to receive all the available settings in csv format, include `Accept` in the header parameters and set it to `application/csv`.

See a [200 response sample in CSV format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.csv) that lists all available settings.

See a [200 response sample in JSON format](https://developer.zuora.com/settings-api/ListAllSettingsResponseSample.json) that lists all available parameters of each setting.

You can find a specific operation of an available setting item in your tenant from the 200 response body of this call. See the following common use cases of Settings API for how to operate on a specifc setting item.

-   Billing Rules:
    -   [Get a specific setting - Billing Rules](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/billing-rule-settings/get-a-specific-setting---billing-rules)
    -   [Update a specific setting - Billing Rules](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/billing-rule-settings/update-a-specific-setting---billing-rules)
    -   [Get accounting rules - Billing Rules](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/billing-rule-settings/get-accounting-rules---billing-rules)
-   Age Buckets:
    -   [Get Age Buckets](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/age-bucket-settings/get-age-buckets)
    -   [Update Age Buckets](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/age-bucket-settings/update-age-buckets)
-   Invoice Templates:
    -   [Get a specific Invoice Template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/get-a-specific-invoice-template)
    -   [Get all Invoice Templates](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/get-all-invoice-templates)
    -   [Create a new Invoice Template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/create-a-new-invoice-template)
    -   [Update a specific Invoice Template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/update-a-specific-invoice-template)
    -   [Delete a specific Invoice Template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/delete-a-specific-invoice-templates)
-   Communications Profiles:
    -   [Create a new Communication Profile](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/create-a-new-communication-profile)
    -   [Get a Communication Profile](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-a-communication-profile)
    -   [Get all Communication Profiles](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-all-communication-profiles)
    -   [Modify a Communication Profile](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/modify-a-communication-profile)
-   Notification Definitions:
    -   [Get all notification definitions under a particular Communication Profile](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/get-all-notifications-under-a-particular-communication-profile)
    -   [Create a notification definition under a particular Communication Profile](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/create-a-notification-definition-under-a-particular-communication-profile)
    -   [Get a notification definition](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/get-a-notification-definition)
    -   [Update a notification definition](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/update-a-notification-definition)
    -   [Delete a notification definition](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/delete-a-notification-definition)
-   Reusable Blocks:
    -   [Create or update reusable blocks](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/create-or-update-reusable-blocks)
    -   [Get all reusable blocks](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/get-all-reusable-blocks)
    -   [Get a reusable block](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/get-a-reusable-block)
    -   [Update a reusable block](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/update-a-reusable-block)
    -   [Delete a reusable block](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/delete-a-reusable-block)
-   Chart of Accounts:
    -   [Get Chart of Accounts](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/chart-of-account-settings/get-chart-of-accounts)
    -   [Add a new Chart of Account](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/chart-of-account-settings/add-a-new-chart-of-account)
-   Quote Templates:
    -   [Get all Quote Templates](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/quote-template-settings/get-all-quote-templates)
    -   [Get a specific Quote Template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/quote-template-settings/get-a-specific-quote-template)
    -   [Create a new Quote Template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/quote-template-settings/create-a-new-quote-template)
-   Direct Integration Tax Engine:
    -   [Create a Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/avalara-tax-engine-settings#create-an-avalara-tax-engine-0)
    -   [Retrieve a Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/avalara-tax-engine-settings#get-an-avalara-tax-engine-0)
    -   [Update a Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/avalara-tax-engine-settings#update-an-avalara-tax-engine-0)
-   Connect Tax Engines:
    -   [Create a Connect Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/connect-tax-engines-settings)
    -   [Get a Connect Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/connect-tax-engines-settings#get-a-connect-tax-engine-0)
    -   [Update a Connect Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/connect-tax-engines-settings#update-a-connect-tax-engine-0)
    -   [Delete a Connect Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/connect-tax-engines-settings#delete-a-connect-tax-engine-0)
-   Zuora Tax Engine:
    -   [Get Tax Engines](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-engine-settings#get-tax-engines-0)
    -   [Create Tax Code using Zuora Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-engine-settings#create-tax-code-using-zuora-tax-engine-0)
    -   [Get Tax Code using Zuora Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-engine-settings#get-tax-code-using-zuora-tax-engine-0)
    -   [Update Tax Code using Zuora Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-engine-settings#update-tax-code-using-zuora-tax-engine-0)
    -   [Delete Tax Code using Zuora Tax Engine](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-engine-settings#delete-tax-code-using-zuora-tax-engine-0)
-   Zuora Tax Rate Period:
    -   [Create Tax Rate Periods](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rate-period-settings#create-tax-rate-periods-0)
    -   [Get Tax Rate Periods](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rate-period-settings#get-tax-rate-periods-0)
    -   [Update Tax Rate Periods](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rate-period-settings#update-tax-rate-periods-0)
    -   [Delete Tax Rate Periods](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rate-period-settings#delete-tax-rate-periods-0)
-   Zuora Tax Code:
    -   [Get Specific Tax Code ID](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-code-api-settings#get-specific-tax-code-id-0)
    -   [Create Tax Codes](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-code-api-settings#create-tax-codes-0)
    -   [Update Tax Codes](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-code-api-settings#update-tax-codes-0)
    -   [Delete Tax Codes](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-code-api-settings#delete-tax-codes-0)
-   Zuora Tax Rates:
    -   [Get List of Tax Rates](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rates-api-settings#retrieve-a-list-of-tax-rates-0)
    -   [Create Tax Rates](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rates-api-settings#create-tax-rates-0)
    -   [Update Tax Rates](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rates-api-settings#update-tax-rates-0)
    -   [Delete Tax Rates](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rates-api-settings#delete-tax-rates-0)
-   Units of Measure:
    -   [Create a Unit of Measure](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/create-a-unit-of-measure)
    -   [Get a Unit of Measure](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/get-a-unit-of-measure)
    -   [Get all Units of Measure](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/get-all-units-of-measure)
    -   [Update a Unit of Measure](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/update-a-unit-of-measure)
    -   [Delete a Unit of Measure](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/delete-a-unit-of-measure)
-   Summary Statement:
    -   [Get a specific summary statement template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/summary-statement-settings#get-a-specific-summary-statement-template-0)
    -   [Get all templates for summary statement](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/summary-statement-settings#get-all-templates-for-summary-statement-0)
    -   [Create a new summary statement template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/summary-statement-settings#create-a-new-summary-statement-template-0)
    -   [Update a specific summary statement template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/summary-statement-settings#update-a-specific-summary-statement-template-0)
    -   [Delete a specific summary statement template](https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/summary-statement-settings#deletea-specific-summary-statement-template-0)

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Accept | string <= 64 charactersSpecifies response media type. If you omit the Accept header parameter, the response body is by default in JSON format. If you include Accept header parameter and set it to application/csv, the response body is in csv format. |

Responses

200

OK

get/settings/listing

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://rest.test.zuora.com/settings/listing \\
  \-H 'Accept: string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200

application/csvapplication/jsonapplication/csv

No sample

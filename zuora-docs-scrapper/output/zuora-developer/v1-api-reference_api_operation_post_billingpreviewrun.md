---
title: "POST BillingPreviewRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_BillingPreviewRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:39.809Z"
---

## Create a billing preview run

Creates a billing preview run for single and multiple customer accounts.

The maximum supported preview duration is 20 years, calculated from the current date to the target date.

You can run up to 20 billing preview runs in batches concurrently. A single batch of customer accounts can only have one billing preview run at a time. So you can have up to 20 batches running at the same time. If you create a billing preview run for all customer batches, you cannot create another billing preview run until this preview run is completed.

**Note:** The preview results for each billing preview run will be stored in the system for 180 days; after that they will be purged.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| assumeRenewal | stringIndicates whether to generate a preview of future invoice items and credit memo items with the assumption that the subscriptions are renewed.Set one of the following values in this field to decide how the assumption is applied in the billing preview.All: The assumption is applied to all the subscriptions. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.None: (Default) The assumption is not applied to the subscriptions. Zuora generates preview invoice item data and credit memo item data based on the current term end date and the target date.If the target date is later than the current term end date, Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the current term end date.If the target date is earlier than the current term end date, Zuora generates preview invoice item data and credit memeo item data from the first day of the customer's next billing period to the target date.Autorenew: The assumption is applied to the subscriptions that have auto-renew enabled. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.Note:This field can only be used if the subscription renewal term is not set to 0.The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| --- | --- |
| batches | string <= 1000 charactersThe customer batches to include in the billing preview run. You can specify multiple batches separated by comma. If not specified, all customer batches are included.Note:By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package.This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 314.0 or a later available version. |
| chargeTypeToExclude | stringThe charge types to exclude from the forecast run.Possible values: OneTime, Recurring, Usage, and any comma-separated combination of these values. |
| includingDraftItems | booleanWhether draft document items are included in the billing preview run. By default, draft document items are not included.This field loads draft invoice items and credit memo items. The chargeTypeToExclude, targetDate, includingEvergreenSubscription, and assumeRenewal fields do not affect the behavior of the includingDraftItems field. |
| includingEvergreenSubscription | booleanWhether evergreen subscriptions are included in the billing preview run. By default, evergreen subscriptions are not included. |
| organizationLabels | Array of objectsThe organization(s) that this billing preview run is created for.For each item in the array, either the organizationId or the organizationName field is required.This field is only required when you have already turned on Multi-Org feature. |
| storageOption | stringThe saving options. The default value is Csv.To compare the current billing preview run result with a specified billing preview run result and store the difference in the database, you must set the storageOption field to Database. For more information, see Billing Preview Run Result data source.Enum: "Csv" "Database" |
| storeDifference | booleanSpecify this field to yes to compare the current billing preview run result with a specified billing preview run result and store the difference in the database. You can view the difference in the Billing Preview Run Result Difference data source. Note: This feature is in the Early Adopter phase. If you want to use the feature, submit a request at Zuora Global Support.The default value is false. |
| comparedBillingPreviewRunId | stringSpecify an existing billing preview run result to compare the current billing preview result with. You can view the difference in the Billing Preview Run Result Difference data source. Note: This feature is in the Early Adopter phase. If you want to use the feature, submit a request at Zuora Global Support. |
| targetDaterequired | string <date>The target date for the billing preview run. The billing preview run generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.The value for the targetDate field must be in YYYY-MM-DD format.If the target date is later than the subscription current term end date, the preview invoice item data and credit memo item data is generated from the first day of the customer's next billing period to the current term end date. If you want to generate preview invoice item data and credit memo item data past the end of the subscription current term, specify the AssumeRenewal field in the request.Note: The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| filters | Array of objects (BillingPreviewRunFilter) <= 1 itemsA list of filters to apply to the billing preview run. You can specify only one filter. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/billing-preview-runs

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "batches": "Batch1",

-   "targetDate": "2024-11-05"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "billingPreviewRunId": "402890b757d1ec1b0157d5aa3d6802aa",

-   "success": true


}`

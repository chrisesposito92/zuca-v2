---
title: "POST PreviewSubscription"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:21.188Z"
---

## Preview a subscription

The REST API reference describes how to create a new subscription in preview mode. This call does not require a valid customer account. It can be used to show potential new customers a preview of a subscription with complete details and charges before creating an account, or to let existing customers preview a subscription with all charges before committing.

**Notes**:

-   The response of the Preview Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers.

-   If you have the Invoice Settlement feature enabled, we recommend that you set the `Zuora-Version` parameter to `207.0` or later [available versions](https://developer.zuora.com/api-references/api/overview/#section/API-Versions/Minor-Version). Otherwise, an error is returned.

-   Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.


|  | serviceActivationDate(SA) specified | serviceActivationDate (SA) NOT specified |
| --- | --- | --- |
| customerAcceptanceDate (CA) specified | SA uses value in the request call; CA uses value in the request call | CA uses value in the request call;SA uses CE as default |
| customerAcceptanceDate (CA) NOT specified | SA uses value in the request call; CA uses SA as default | SA and CA use CE as default |

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

| accountKey | stringCustomer account number or ID.You must specify the account information either in this field or in the previewAccountInfo field with the following conditions:If you already have a customer account, specify the account number or ID in this field.If you do not have a customer account, provide account information in the previewAccountInfo field. |
| --- | --- |
| contractEffectiveDaterequired | string <date>Effective contract date for this subscription, as yyyy-mm-dd. |
| customerAcceptanceDate | string <date>The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd.Default value is dependent on the value of other fields. See Notes section for more details. |
| documentDate | string <date>The date of the billing document, in yyyy-mm-dd format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.If this field is specified, the specified date is used as the billing document date.If this field is not specified, the date specified in the targetDate is used as the billing document date. |
| includeExistingDraftDocItems | booleanSpecifies whether to include draft invoice items in subscription previews. Values are:true (default). Includes draft invoice items in the preview result.false. Excludes draft invoice items in the preview result. Note: This field is available only if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 207.0 or a later available version. |
| initialTerm | integer <int64>Duration of the first term of the subscription, in whole months. If termType is TERMED, then this field is required, and the value must be greater than 0. If termType is EVERGREEN, this field is ignored. |
| initialTermPeriodType | stringThe period type of the initial term.Supported values are:MonthYearDayWeekThe default period type is Month. |
| invoiceOwnerAccountKey | stringInvoice owner account number or ID.Note: This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. |
| notes | string <= 1000 charactersThe notes for the subscription. |
| previewAccountInfo | object (previewAccountInfo)A container for providing a customer account information if you do not have an existing customer account. This customer account information is only used for subscription preview.You must specify the account information either in this field or in the accountKey field with the following conditions:If you already have a customer account, specify the account number or ID in the accountKey field.If you do not have a customer account, provide account information in this field. |
| previewType | stringDefault: "LegalDoc"The type of preview you will receive.Note: If your API minor version is earlier than 206.0 or you specify the Zuora-Version header for this request to 206.0 or earlier, the following values are supported for the previewType field:- `InvoiceItem` (default) - `ChargeMetrics` - `InvoiceItemChargeMetrics` Enum: "LegalDoc" "ChargeMetrics" "LegalDocChargeMetrics" |
| serviceActivationDate | string <date>The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd.Default value is dependent on the value of other fields. See Notes section for more details. |
| subscribeToRatePlansrequired | Array of objects (subscribeToRatePlans)Container for one or more rate plans for this subscription. |
| targetDate | string <date>Date through which to calculate charges if an invoice is generated, as yyyy-mm-dd. Default is current date.Note: This field is only available if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 207.0 or a later available version. |
| termStartDate | string <date>The date on which the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date. |
| termTyperequired | stringPossible values are: TERMED, EVERGREEN. |
| property name*additional property | anyCustom fields of the Subscription object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/subscriptions/preview

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountKey": "8ad09be48db5aba7018db604776d4854",

-   "contractEffectiveDate": "2024-07-01",

-   "termType": "TERMED",

-   "initialTerm": 12,

-   "subscribeToRatePlans": [

    -   {

        -   "productRatePlanId": "8ad081dd9096ef9501909b40bb4e74a4"


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "success": true,

-   "contractedMrr": 14.99,

-   "totalContractedValue": 179.88,

-   "amount": 14.99,

-   "amountWithoutTax": 14.99,

-   "taxAmount": 0,

-   "invoiceTargetDate": "2024-07-11",

-   "documentDate": "2024-07-11",

-   "invoiceItems": [

    -   {

        -   "serviceStartDate": "2024-07-01",

        -   "serviceEndDate": "2024-07-31",

        -   "chargeAmount": 14.99,

        -   "taxAmount": 0,

        -   "chargeDescription": "",

        -   "chargeName": "Monthly Fee",

        -   "productName": "Music Service",

        -   "productRatePlanChargeId": "8ad097b4909708e001909b41bb085d38",

        -   "quantity": 1,

        -   "unitOfMeasure": ""


        }


    ]


}`

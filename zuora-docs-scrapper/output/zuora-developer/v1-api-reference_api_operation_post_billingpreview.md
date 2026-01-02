---
title: "POST BillingPreview"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_BillingPreview/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:17.594Z"
---

## Generate a billing preview

Generates a preview of future invoice items for one customer account. Use the BillingPreview call to calculate how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.

Additionally, you can use the BillingPreview service to access real-time data on an individual customer's usage consumption.

The BillingPreview call only calculates taxes for charges in the subscription if you use [Zuora Tax](https://knowledgecenter.zuora.com/Billing/Taxes/A_Zuora_Tax) and the product rate plan charge associated with the invoice item uses the [tax inclusive mode](https://knowledgecenter.zuora.com/Billing/Taxes/A_Zuora_Tax/D_Associate_tax_codes_with_product_charges_and_set_the_tax_mode); otherwise, this call does not calculate taxes.

If you have the Invoice Settlement feature enabled, you can also generate a preview of future credit memo items for one customer account. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

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

| accountId | string <= 255 charactersThe ID of the customer account to which the billing preview applies.Note: When posting billing preview, you must specify either accountId or accountNumber in the request body. |
| --- | --- |
| accountNumber | stringThe number of the customer account to which the billing preview applies.Note: When posting billing preview, you must specify either accountId or accountNumber in the request body. |
| assumeRenewal | stringIndicates whether to generate a preview of future invoice items and credit memo items with the assumption that the subscriptions are renewed.Set one of the following values in this field to decide how the assumption is applied in the billing preview.All: The assumption is applied to all the subscriptions. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.None: (Default) The assumption is not applied to the subscriptions. Zuora generates preview invoice item data and credit memo item data based on the current term end date and the target date.If the target date is later than the current term end date, Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the current term end date.If the target date is earlier than the current term end date, Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.Autorenew: The assumption is applied to the subscriptions that have auto-renew enabled. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date.Note:This field can only be used if the subscription renewal term is not set to 0.The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| chargeTypeToExclude | stringThe charge types to exclude from the billing preview.Possible values: OneTime, Recurring, Usage, and any combination of these values. |
| includingDraftItems | booleanWhether draft document items are included in the billing preview run. By default, draft document items are not included.This field loads draft invoice items and credit memo items. The chargeTypeToExclude, targetDate, includingEvergreenSubscription, and assumeRenewal fields do not affect the behavior of the includingDraftItems field. |
| includingEvergreenSubscription | booleanIndicates if evergreen subscriptions are included in the billingPreview call. |
| targetDaterequired | string <date>The target date for the billingPreview call. The billingPreview call generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the TargetDate.If the TargetDate is later than the subscription current term end date, the preview invoice item data and credit memo item data is generated from the first day of the customer's next billing period to the current term end date. If you want to generate preview invoice item data and credit memo item data past the end of the subscription current term, specify the AssumeRenewal field in the request.Note: The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/operations/billing-preview

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "accountId": "8ad09bce83f1da020183f97e245c1c47",

-   "targetDate": "2024-09-30"


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

-   "accountId": "8ad09bce83f1da020183f97e245c1c47",

-   "invoiceItems": [

    -   {

        -   "id": "d573746814a14da0a0a0abda2a41d65a",

        -   "subscriptionName": "A-S00000346",

        -   "subscriptionId": "8ad08ad58e35d490018e36a0f1ca2a9c",

        -   "subscriptionNumber": "A-S00000346",

        -   "serviceStartDate": "2024-08-01",

        -   "serviceEndDate": "2024-08-31",

        -   "chargeAmount": 10,

        -   "chargeDescription": "",

        -   "chargeName": "Monthly Fee",

        -   "chargeNumber": "C-00000950",

        -   "chargeId": "8ad08ad58e35d490018e36a0f2252aa5",

        -   "productName": "Music service",

        -   "quantity": 1,

        -   "taxAmount": 0,

        -   "unitOfMeasure": "",

        -   "chargeDate": "2024-07-09 17:06:58",

        -   "chargeType": "Recurring",

        -   "processingType": "Charge",

        -   "appliedToItemId": null,

        -   "numberOfDeliveries": 0


        },

    -   {

        -   "id": "c86c42ee4f5b42bd86351f4a99bf230e",

        -   "subscriptionName": "A-S00000346",

        -   "subscriptionId": "8ad08ad58e35d490018e36a0f1ca2a9c",

        -   "subscriptionNumber": "A-S00000346",

        -   "serviceStartDate": "2024-09-01",

        -   "serviceEndDate": "2024-09-30",

        -   "chargeAmount": 10,

        -   "chargeDescription": "",

        -   "chargeName": "Monthly Fee",

        -   "chargeNumber": "C-00000950",

        -   "chargeId": "8ad08ad58e35d490018e36a0f2252aa5",

        -   "productName": "Music service",

        -   "quantity": 1,

        -   "taxAmount": 0,

        -   "unitOfMeasure": "",

        -   "chargeDate": "2024-07-09 17:06:58",

        -   "chargeType": "Recurring",

        -   "processingType": "Charge",

        -   "appliedToItemId": null,

        -   "numberOfDeliveries": 0


        }


    ],

-   "success": true


}`

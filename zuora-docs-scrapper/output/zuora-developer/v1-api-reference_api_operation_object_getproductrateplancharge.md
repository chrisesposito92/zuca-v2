---
title: "Object GETProductRatePlanCharge"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_GETProductRatePlanCharge/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:09.019Z"
---

## CRUD: Retrieve a product rate plan charge

Retrieves a specific product rate plan charge.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe unique ID of a product rate plan charge to be retrieved. For example, 2c93808457d787030157e031fcd34e19. |
| --- | --- |

##### query Parameters

| fields | stringObject fields to return |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| X-Zuora-WSDL-Version | stringDefault: 79Zuora WSDL version number. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

401

Unauthorized

404

get/v1/object/product-rate-plan-charge/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/object/product-rate-plan-charge/{id}?fields=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'X-Zuora-WSDL-Version: 79' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   401
-   404

application/json

responseresponse

Copy

`{

-   "AccountingCode": "name_1476935155610",

-   "BillCycleDay": 1,

-   "BillCycleType": "DefaultFromCustomer",

-   "BillingPeriod": "Month",

-   "BillingPeriodAlignment": "AlignToCharge",

-   "BillingTiming": "In Advance",

-   "ChargeModel": "Flat Fee Pricing",

-   "ChargeType": "Recurring",

-   "CreatedById": "2c93808457d787030157e031dd264c85",

-   "CreatedDate": "2016-10-20T05:45:55.000+02:00",

-   "DefaultQuantity": 1,

-   "DeferredRevenueAccount": "name_1476935155610",

-   "Description": "Recurring Flat Fee Pricing",

-   "EndDateCondition": "SubscriptionEnd",

-   "Id": "2c93808457d787030157e032002b4e21",

-   "IncludedUnits": 0,

-   "LegacyRevenueReporting": false,

-   "ListPriceBase": "Per Billing Period",

-   "Name": "Recurring_Flat Fee Pricing1476935155610",

-   "NumberOfPeriod": 1,

-   "OverageCalculationOption": "EndOfSmoothingPeriod",

-   "OverageUnusedUnitsCreditOption": "NoCredit",

-   "PriceChangeOption": "NoChange",

-   "PriceIncreasePercentage": 0,

-   "ProductRatePlanId": "2c93808457d787030157e031ff054e1e",

-   "RecognizedRevenueAccount": "name_1476935155610",

-   "RevenueRecognitionRuleName": "Recognize upon invoicing",

-   "Taxable": false,

-   "TriggerEvent": "ContractEffective",

-   "UpToPeriodsType": "Billing Periods",

-   "UpdatedById": "2c93808457d787030157e031dd264c85",

-   "UpdatedDate": "2016-10-20T05:45:55.000+02:00",

-   "UseTenantDefaultForPriceChange": true,

-   "Formula": ""


}`

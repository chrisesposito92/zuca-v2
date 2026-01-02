---
title: "POST CreateProductChargeDefinition"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateProductChargeDefinition/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:56.640Z"
---

## Create a product charge definition

Creates a product charge definition for a charge. You can create as many product charge definitions as needed for one charge.

In the request, you must specify the unique ID or number of the charge for which this charge definition is to be created. The ID or number of a product rate plan is optional.

**Note**: This operation requires the [Attribute-based Pricing](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute_based_pricing/AA_Overview_of_Attribute-based_Pricing) feature to be enabled, which is in the **Early Adopter** phase.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| billingPeriod | stringThe billing period for the product charge definition. |
| --- | --- |
| billingTiming | stringThe billing timing setting for the product charge definition.Enum: "IN_ADVANCE" "IN_ARREARS" |
| chargeModel | stringDetermines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.Enum: "DiscountFixedAmount" "DiscountPercentage" "FlatFee" "PerUnit" "Tiered" "Volume" "Delivery" |
| defaultQuantity | number or nullThe default quantity.This field is applicable only for one-time and recurring charges. |
| effectiveEndDate | string <date-time>The effective end date of the product charge definition. |
| effectiveStartDate | string <date-time>The effective start date of the product charge definition. |
| listPriceBase | stringThe list price base.This field is applicable only for recurring charges.Note: The Per_Year enum value is available only if you have the Annual List Price feature enabled.Enum: "Per_Billing_Period" "Per_Month" "Per_Week" "Per_Year" |
| prices | Array of objects (prices)Container for the prices of the product charge definition. |
| productRatePlanChargeId | stringThe unique ID of the charge of the charge definition. |
| productRatePlanChargeNumber | stringThe unique number (natural key) of the charge of the charge definition. |
| productRatePlanId | stringThe unique ID of the product rate plan that uses this charge definition. |
| productRatePlanNumber | stringThe unique number (natural key) of the product rate plan that uses this charge definition. |
| specificBillingPeriod | number or nullThe specific number of billing periods for the product charge definition. |
| specificListPriceBase | integer or null <int32> [ 1 .. 200 ]The number of months for the list price base of the charge definition. This field is null if the listPriceBase field is not set to Per_Specific_Months. |
| taxCode | string <= 64 charactersSpecifies the tax code for taxation rules. This field is required when the Taxable field is set to True.Note: This value affects the tax calculation of the charge. |
| taxMode | string or nullDetermines how to define taxation for the charge. This field is required when the Taxable field is set to True.Note: This value affects the tax calculation of the charge.Enum: "TaxExclusive" "TaxInclusive" null |
| taxable | booleanDetermines whether the charge definition is taxable. When this field is set to True, the TaxMode and TaxCode fields are required.Character limit: 5Values: True, FalseNote: This value affects the tax calculation of the charge. |
| term | number or nullThe number of periods of a termed subscription that is eligible for this charge definition. This field is applicable when the termType field is set to TERMED, and is to be used together with the termPeriodType field. |
| termPeriodType | string or nullSpecifies the period type for the subscription term that is eligible for this charge definition.Enum: "Month" "Year" "Day" "Week" null |
| termType | string or nullThe type of the subscription that is eligible for this charge definition.Enum: "TERMED" "EVERGREEN" null |
| uom | string or nullDescribes the unit of measure (UOM) configured in Settings > Billing for the charge. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/product-charge-definitions

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "productRatePlanChargeId": "edcab92612893256dce329d0b377000e",

-   "effectiveStartDate": "2024-01-01 00:00:00",

-   "effectiveEndDate": "2025-01-01 00:00:00",

-   "listPriceBase": "Per_Billing_Period",

-   "prices": [

    -   {

        -   "currency": "USD",

        -   "price": 12


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

`{

-   "chargeDefinitionId": "8a90988c8b177a24018b17857411002a",

-   "chargeDefinitionNumber": "CD-00002089",

-   "success": true


}`

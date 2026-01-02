---
title: "PUT UpdateProductChargeDefinition"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateProductChargeDefinition/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:58.425Z"
---

## Update a product charge definition

Update a product charge definition.

**Note**: This operation requires the [Attribute-based Pricing](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute_based_pricing/AA_Overview_of_Attribute-based_Pricing) feature to be enabled, which is in the **Early Adopter** phase.

Security**bearerAuth**

Request

##### path Parameters

| product-charge-definition-keyrequired | stringThe unique number or ID of the product charge definition to be updated. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| billingPeriod | stringThe override value of the billingPeriod for the product charge definition. |
| --- | --- |
| billingTiming | stringThe override value of the billingTiming for the product charge definition.Enum: "IN_ADVANCE" "IN_ARREARS" |
| chargeModel | stringDetermines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.Enum: "DiscountFixedAmount" "DiscountPercentage" "FlatFee" "PerUnit" "Tiered" "Volume" "Delivery" |
| defaultQuantity | number or nullThe default quantity.This field is applicable only for one-time and recurring charges. |
| effectiveEndDate | string <date-time>The effective end date of the product charge definition. |
| effectiveStartDate | string <date-time>The effective start date of the product charge definition. |
| listPriceBase | stringThe list price base.This field is applicable only for recurring charges.Note: The Per_Year enum value is available only if you have the Annual List Price feature enabled.Enum: "Per_Billing_Period" "Per_Month" "Per_Week" "Per_Year" |
| prices | Array of objects (prices)Container for the new prices to override the existing prices of the product charge definition. |
| specificBillingPeriod | number or nullThe override value of the specificBillingPeriod for the product charge definition. |
| specificListPriceBase | integer or null <int32> [ 1 .. 200 ]The number of months for the list price base of the charge definition. The field is null if the listPriceBase field is not set to Per_Specific_Months. |
| taxCode | string <= 64 charactersSpecifies the tax code for taxation rules. This field is equired when the Taxable field is set to True.Note: This value affects the tax calculation of the charge. |
| taxMode | string or nullDetermines how to define taxation for the charge. This field is equired when the Taxable field is set to True.Note: This value affects the tax calculation of the charge.Enum: "TaxExclusive" "TaxInclusive" null |
| taxable | booleanDetermines whether the charge definition is taxable. When this field is set to True, the TaxMode and TaxCode fields are required.Character limit: 5Values: True, FalseNote: This value affects the tax calculation of the charge. |
| term | number or nullThe number of periods of a termed subscription that is eligible for this charge definition. This field is applicable when the termType field is set to TERMED, and is to be used together with the termPeriodType field. |
| termPeriodType | string or nullSpecifies the period type for the subscription term that is eligible for this charge definition.Enum: "Month" "Year" "Day" "Week" null |
| termType | string or nullThe type of the subscription that is eligible for this charge definition.Enum: "TERMED" "EVERGREEN" null |
| uom | string or nullDescribes the unit of measure (UOM) configured in Settings > Billing.Values: Each, License, Seat, or null |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/product-charge-definitions/{product-charge-definition-key}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "prices": [

    -   {

        -   "currency": "USD",

        -   "price": 20


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

-   "applyDiscountTo": null,

-   "billingPeriod": "Month",

-   "billingPeriodAlignment": "AlignToCharge",

-   "billingTiming": "IN_ADVANCE",

-   "chargeModel": "FlatFee",

-   "defaultQuantity": 1,

-   "discountClass": null,

-   "discountLevel": null,

-   "effectiveEndDate": "2023-10-13 09:00:00",

-   "effectiveStartDate": "2022-10-07 09:00:00",

-   "isDefault": true,

-   "listPriceBase": "Per_Billing_Period",

-   "numberOfPeriods": null,

-   "prices": [

    -   {

        -   "currency": "USD",

        -   "price": 20


        }


    ],

-   "productChargeDefinitionId": "2c9890f78b0d09d2018b0d13c7fd0004",

-   "productChargeDefinitionNumber": "CD-00000201",

-   "productRatePlanChargeId": "2c9890f78b0d09d2018b0d13c7fd0004",

-   "productRatePlanChargeNumber": null,

-   "productRatePlanId": null,

-   "productRatePlanName": null,

-   "productRatePlanNumber": null,

-   "ratingGroup": null,

-   "smoothingModel": null,

-   "specificBillingPeriod": null,

-   "specificListPriceBase": null,

-   "success": true,

-   "taxCode": "",

-   "taxMode": null,

-   "taxable": false,

-   "term": null,

-   "termPeriodType": null,

-   "termType": null,

-   "uom": null


}`

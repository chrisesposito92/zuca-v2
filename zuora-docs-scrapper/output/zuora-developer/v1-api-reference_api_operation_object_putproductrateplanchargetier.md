---
title: "Object PUTProductRatePlanChargeTier"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_PUTProductRatePlanChargeTier/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:31:22.701Z"
---

## CRUD: Update a product rate plan charge tier

Updates the price of a product rate plan charge tier.

To make other updates to product rate plan charge tiers, use [CRUD: Update a product rate plan charge](https://developer.zuora.com/api-references/api/operation/Object_PUTProductRatePlanCharge) and specify `ProductRatePlanChargeTierData` in the request body.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe unique ID of the product rate plan charge tier to be updated. For example, 2c92c0f86c85891e016c88d55a6e543b. |
| --- | --- |

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| Price | number <double>The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing. |
| --- | --- |
| PriceFormat | string <= 8 charactersIndicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only.Note: The values Flat Fee and Per Unit (with spaces) is valid for create or update calls.Enum: "Flat Fee" "Per Unit" |
| DiscountPercentage | number <double> ( -100 .. 100 )The percentage of discount for a percentage discount. This field is required if the value for ProductRatePlanCharge.ChargeModel is Discount-Percentage.Values: A decimal value between -100 and 100, exclusive |
| DiscountAmount | number <double>The specific amount for a fixed discount. This field is required if the value for ProductRatePlanCharge.ChargeModel is Discount-Fixed Amount.Values: Any positive decimal value. |

Responses

200

OK

401

Unauthorized

put/v1/object/product-rate-plan-charge-tier/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "Price": 1.99


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

`{

-   "Id": "2c92c0f86c85891e016c88d55a6e543b",

-   "Success": true


}`

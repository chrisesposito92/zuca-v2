---
title: "GET CustomExchangeRates"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_CustomExchangeRates/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:28:00.479Z"
---

## List custom exchange rates by currency

This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

This reference describes how to query custom foreign exchange rates from Zuora. You can use this API method to query exchange rates only if you use a custom exchange rate provider and upload rates with the Import Foreign Exchange Rates mass action.

Security**bearerAuth**

Request

##### path Parameters

| currencyrequired | stringThe target base currency of the tenant. The exchange rates in the response are calculated in relation to the target currency.The value must be a three-letter currency code, for example, USD. |
| --- | --- |

##### query Parameters

| startDaterequired | stringStart date of the date range for which you want to get exchange rates.The date must be in yyyy-mm-dd format, for example, 2016-01-15. The start date cannot be later than the end date. |
| --- | --- |
| endDaterequired | stringEnd date of the date range for which you want to get exchange rates.The date must be in yyyy-mm-dd format, for example, 2016-01-16. The end date can be a maximum of 90 days after the start date. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/custom-exchange-rates/{currency}

Request samples

-   Curl

Copy

curl \-X GET \-H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3" \-H "Content-Type: application/json" "https://rest.sandbox.eu.zuora.com/v1/custom-exchange-rates/EUR?startDate=2019-04-28&endDate=2019-04-30"

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "inverse": false,

-   "rateSetName": "RateSet_EU",

-   "rates": {

    -   "2019-04-28": {

        -   "GBP": 1.135239621,

        -   "USD": 0.889028445,

        -   "providerExchangeRateDate": "2019-04-28"


        },

    -   "2019-04-29": {

        -   "GBP": 1.134623962,

        -   "USD": 0.892140244,

        -   "providerExchangeRateDate": "2019-04-29"


        },

    -   "2019-04-30": {

        -   "GBP": 1.134589832,

        -   "USD": 0.892243287,

        -   "providerExchangeRateDate": "2019-04-30"


        }


    },

-   "success": true


}`

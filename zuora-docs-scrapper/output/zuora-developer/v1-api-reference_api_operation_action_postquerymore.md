---
title: "Action POSTqueryMore"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTqueryMore/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:10.697Z"
---

## QueryMore

Use queryMore to request additional results from a previous query call. If your initial query call returns more than 2000 results, you can use queryMore to query for the additional results.

Any `queryLocator` results greater than 2,000, will only be stored by Zuora for 5 days before it is deleted.

This call sends a request for additional results from an initial query call. If the initial query call returns more than 2000 results, you can use the `queryLocator` returned from query to request the next set of results.

**Note:** Zuora expires queryMore cursors after 15 minutes of activity.

To use queryMore, you first construct a query call. By default, the query call will return up to 2000 results. If there are more than 2000 results, query will return a boolean `done`, which will be marked as `false`, and a `queryLocator`, which is a marker you will pass to queryMore to get the next set of results.

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| X-Zuora-WSDL-Version | stringDefault: 79Zuora WSDL version number. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| conf | objectConfiguration of the query result. |
| --- | --- |
| queryLocatorrequired | stringA marker passed to QueryMore to get the next set of results. |

Responses

200

OK

401

Unauthorized

post/v1/action/queryMore

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "queryLocator": "2c92c0f9602fb240016049ac7e0b47e7-2000"


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "size": 252070,

-   "records": [

    -   {

        -   "Id": "2c92c0855460118101546e8ccbfc76d4"


        },

    -   {

        -   "Id": "2c92c0855460118101546e8ccbfd76d7"


        }


    ],

-   "queryLocator": "2c92c0f9602fb240016049ac7e0b47e7-4000",

-   "done": false


}`

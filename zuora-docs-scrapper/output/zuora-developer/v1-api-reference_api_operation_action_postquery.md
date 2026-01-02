---
title: "Action POSTquery"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTquery/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:14.937Z"
---

## Query

The query call sends a query expression by specifying the object to query, the fields to retrieve from that object, and any filters to determine whether a given object should be queried.

You can use [Zuora Object Query Language](https://knowledgecenter.zuora.com/DC_Developers/K_Zuora_Object_Query_Language)(ZOQL) to construct those queries, passing them through the `queryString`.

Once the call is made, the API executes the query against the specified object and returns a query response object to your application. Your application can then iterate through rows in the query response to retrieve information.

### Limitations

This call has the following limitations:

-   All [ZOQL limitations](https://knowledgecenter.zuora.com/Central_Platform/Query/ZOQL#ZOQL_Limitations) apply.
-   All ZOQL keywords must be in lower case.
-   The number of records returned is limited to 2000 records.
-   The Invoice Settlement feature is not supported. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement.
-   The Orders feature is not supported, which means that the objects listed in [Orders Object Model](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/BA_Orders_Object_Model) are not supported.
-   The Active Rating feature is not supported.
-   The default WSDL version for Actions is 79. To query objects or fields according to a different WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).
-   Fields with NULL values are not returned in the response.

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
| queryStringrequired | stringZOQL expression that specifies the object to query, the fields to retrieve, and any filters.Note: When querying one time charges from ProductRatePlanCharge, you need to specify the ChargeType value as One-Time rather than OneTime. |

Responses

200

OK

401

Unauthorized

post/v1/action/query

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "queryString": "select AccountNumber, BillCycleDay from Account where Id = '8ad09378905a5af201907ca1edb524c2'"


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "size": 1,

-   "records": [

    -   {

        -   "BillCycleDay"": 1,

        -   "Id": "8ad09378905a5af201907ca1edb524c2",

        -   "AccountNumber": "A00000212"


        }


    ],

-   "done": true


}`

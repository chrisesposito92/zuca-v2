---
title: "Action POSTupdate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Action_POSTupdate/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:14.461Z"
---

## Update

Updates the information in one or more objects of the same type. You can specify different types of objects in different update calls, but each specific update call must apply to only one type of object.

### Limitations

This call has the following limitations:

-   A maximum of 50 objects are supported in a single call.
-   The Invoice Settlement feature is not supported. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement.
-   The default WSDL version for Actions is 79. To update objects or fields according to a different WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).

### How to use this call?

You can update an array of one or more zObjects. The fields you should specify can be found in the corresponding "CRUD: Update an *zObject*" operation. For example, to update one or multiple accounts, use the request fields in the [CRUD: Update an account](https://developer.zuora.com/api-references/older-api/operation/Object_PUTAccount/) operation.

It returns an array of SaveResults sorted in the same order, indicating the success or failure of updating each object. The following information applies to this call:

-   You cannot pass in null zObjects.
-   You can pass in a maximum of 50 zObjects at a time.
-   All objects must be of the same type.
-   For each field in each object, you must determine that object's ID. Then populate the fields that you want update with the new information.
-   Zuora ignores unrecognized fields in update calls. For example, if an optional field is spelled incorrectly or a field that does not exist is specified, Zuora ignores the field and continues to process the call. No error message is returned for unrecognized fields.

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

| objectsrequired | Array of objects (zObject) |
| --- | --- |
| typerequired | string |

Responses

200

OK

401

Unauthorized

post/v1/action/update

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "objects": [

    -   {

        -   "Id": "8ad09378905a5af201907ca1edb524c2",

        -   "BillCycleDay": 1


        }


    ],

-   "type": "Account"


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "Id": "8ad09378905a5af201907ca1edb524c2",

    -   "Success": true


    }


]`

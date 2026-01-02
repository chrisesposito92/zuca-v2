---
title: "POST CustomObjectRecords"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CustomObjectRecords/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:31.456Z"
---

## Create custom object records

Creates custom object records with the given type.

Upon creating records of a custom object type, the 200 response contains a list of records that have been successfully processed and stored.

### Limitations

This call has the following limitations:

-   The maximum number of records that you can create by one call is 1,000.
-   The storage of empty strings in records is not supported.
-   Null values must be formatted as the following example:
    ```
    {
      "records": [
        {
          "fieldName__c": null
        }
      ]
    }
    ```

-   When creating or updating custom object records with relationship-type fields, Zuora verifies the related objects against the transactional databases, which are updated in near real-time. The record creation or modification fails upon unsuccessful verifications.
    If the related objects are newly created in your tenant, it might need some time for the transactional database synchronization.

Security**bearerAuth**

Request

##### path Parameters

| objectrequired | stringSpecifies the custom object's API name as object. It is case-sensitive. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |

##### Request Body schema: application/json
required

| allowPartialSuccess | booleanDefault: falseIndicates whether the records that pass the schema validation should be created when not all records in the request pass the schema validation. |
| --- | --- |
| recordsrequired | Array of objects (customObjectRecord)A list of custom object records to be created |

Responses

200

OK

The 200 response indicates that the records have been partially or completely created.

-   If the `allowPartialSuccess` flag is set to `false`, the 200 response indicates that all object records have been successfully created.
-   If the `allowPartialSuccess` flag is set to `true`, the 200 response indicates that some records might not be succesffully created and the error information might be contained in the response body.

400

Failed schema validation

401

Unauthorized

500

Internal error. Retry the returned records.

post/objects/records/default/{object}

Request samples

-   Payload
-   cURL

application/json

Partial success turned offPartial success turned onPartial success turned off

Copy

Expand allCollapse all

`{

-   "records": [

    -   {

        -   "DeviceId__c": "10101010",

        -   "OrderId__c": "c086028c-5df8-427d-a3c8-7a7fb5d32d3d"


        }


    ]


}`

Response samples

-   200
-   400
-   401
-   500

application/json

Partial success turned offPartial success turned onPartial success turned off

Copy

Expand allCollapse all

`{

-   "records": [

    -   {

        -   "Id": "9ef0b1a0-e398-46aa-856f-76273b0d2988",

        -   "type": "Vehicle",

        -   "DeviceId__c": "10101010",

        -   "OrderId__c": "c086028c-5df8-427d-a3c8-7a7fb5d32d3d",

        -   "CreatedById": "8ad084a67f9c7138017fab8a8b511b5a",

        -   "UpdatedById": "8ad084a67f9c7138017fab8a8b511b5a",

        -   "CreatedDate": "2024-07-09T06:41:17.377Z",

        -   "UpdatedDate": "2024-07-09T06:41:17.377Z"


        }


    ],

-   "unprocessedRecords": [ ]


}`

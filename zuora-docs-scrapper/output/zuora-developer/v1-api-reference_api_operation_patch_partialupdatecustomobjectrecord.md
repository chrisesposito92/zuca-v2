---
title: "Patch PartialUpdateCustomObjectRecord"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Patch_PartialUpdateCustomObjectRecord/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:30.834Z"
---

## Partially update a custom object record

Updates one or many fields of a custom object record. Patch update uses JSON Merge Patch as specified in [RFC 7386](https://tools.ietf.org/html/rfc7386).

### Limitations

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
| idrequired | string <uuid> = 36 charactersId identifier in uuid form |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |

##### Request Body schema: application/merge-patch+json
required

| property name*additional property | anyThe field-value pairs for a custom object record |
| --- | --- |

Responses

200

OK

404

Object record does not exist

patch/objects/records/default/{object}/{id}

Request samples

-   Payload
-   cURL

application/merge-patch+json

Copy

`{

-   "DeviceId__c": "10101011"


}`

Response samples

-   200
-   404

application/json

Copy

`{

-   "Id": "e0668230-eb63-40df-be65-08f083ca47b1",

-   "type": "Vehicle",

-   "CreatedById": "8ad09fc28193c189018194da28be74ba",

-   "UpdatedById": "b243314d594646d3b2651aeedd4be47e",

-   "CreatedDate": "2024-07-17T03:23:47.698Z",

-   "UpdatedDate": "2024-07-17T03:26:28.772Z",

-   "DeviceId__c": "10101011",

-   "OrderId__c": "c086028c-5df8-427d-a3c8-7a7fb5d32d3d"


}`

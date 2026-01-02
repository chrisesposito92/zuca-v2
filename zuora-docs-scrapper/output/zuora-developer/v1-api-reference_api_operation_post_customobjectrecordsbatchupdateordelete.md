---
title: "POST CustomObjectRecordsBatchUpdateOrDelete"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CustomObjectRecordsBatchUpdateOrDelete/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:31.886Z"
---

## Update or delete custom object records

Makes a batch update or delete of custom object records.

### Limitations

This call has the following limitations:

-   The maximum number of records that you can update by one call is 1,000.
-   The maximum number of records that you can delete by one call is 1,000.
-   The storage of empty strings in records is not supported.
-   Null values must be formatted as the following example:
    ```
    {
      "action": {
        "type": "update",
        "records": {
          "64edb2a5-2796-4e95-9559-846f8636a01b": {
            "fieldName__c": null
          }
        }
      }
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

| actionrequired | object (updateDeleteBatchAction)The batch action on custom object records |
| --- | --- |

Responses

200

OK

For the bacth `delete` action, it indicates the batch records have been successfully deleted.

For the batch `update` action, it indicates that the batch records have been partially or completely updated.

-   If the `allowPartialSuccess` flag is set to `false`, the 200 response indicates that all object records have been successfully updated.
-   If the `allowPartialSuccess` flag is set to `true`, the 200 response indicates that some records might not be succesffully updated and the error information might be contained in the response body.

400

Failed schema validation

For the batch `update` action, the 400 response only returns when the `allowPartialSuccess` flag is set to `false` and the batch records have failed schema validation.

401

Unauthorized

500

Internal error. Retry the returned records.

post/objects/batch/default/{object}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "action": {

    -   "type": "update",

    -   "records": {

        -   "64edb2a5-2796-4e95-9559-846f8636a01b": {

            -   "DeviceId__c": "10101011"


            }


        }


    }


}`

Response samples

-   200
-   400
-   401
-   500

application/json

Copy

`{ }`

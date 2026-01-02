---
title: "POST MigrateTenantSettings"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_MigrateTenantSettings/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:18.839Z"
---

## Migrate settings from source tenant to target tenant

To migrate the selected configuration of a tenant in Deployment Manager migration while using template from the compare screen.

Security**bearerAuth**

Request

##### query Parameters

| tenantrequired | stringCustomers need to specify tenant ID in query parameter. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

Request Details.

| comments | string |
| --- | --- |
| descriptionrequired | stringDescription of the migration. |
| emailIds | stringList of Emails with comma separator. |
| entityUuidrequired | stringEntity UUID |
| metaData | object (JsonNode)Json node object contains metadata. |
| namerequired | stringName of the migration. |
| request | Array of objects (MigrationComponentContent)List of settings need to be migrated. |
| sendEmailrequired | booleanFlag determines whether or not to send an email. |

Responses

200

Successfully migrated from source to target.

201

created. The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URL(s) returned in the entity of the response, with the most specific URL for the resource given by a Location header field.

400

Bad request

401

Unauthorized

403

Forbidden

404

Not Found

post/deployment-manager/deployment\_artifacts/deploy

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "comments": "string",

-   "description": "Migration from/to Sandbox",

-   "emailIds": "abcd@zuora.com,xyz@zuora.com",

-   "entityUuid": 11111,

-   "metaData": { },

-   "name": "Job A",

-   "request": "ST 4",

-   "sendEmail": true


}`

Response samples

-   200
-   400
-   401
-   403
-   404

application/json

Copy

Expand allCollapse all

`{

-   "reasons": [

    -   {

        -   "code": "ObjectNotFound",

        -   "message": "Configuration Templates does not exist."


        }


    ]


}`

---
title: "CreateAUser"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createAUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:38.847Z"
---

## Create a user

Creates a user. Must include the userName attribute and an email address. User will be created as an SSO user by default and a federated ID must be provided for the user.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |

##### Request Body schema: application/json
required

Array

| schemasrequired | Array of stringsList of schema URNs defining the structure of the user resource. |
| --- | --- |
| namerequired | objectName details of the user. |
| activerequired | booleanIndicates whether the user is active. |
| emailsrequired | Array of objectsList of email addresses associated with the user. |
| rolesrequired | Array of objectsRoles assigned to the user. |
| externalIdrequired | stringExternal identifier for the user. |
| userNamerequired | stringUnique username for the user. |
| preferredLanguagerequired | stringUser's preferred language. |
| localerequired | stringUser's locale. |
| urn:zuora:scim:schemas:1.0:UserExtensionrequired | objectCustom extension schema with additional attributes for the user. |

Responses

200

OK

201

Created

401

Unauthorized

403

Forbidden

404

Not Found

post/scim/v2/Users

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:UserExtension",

        -   "urn:ietf:params:scim:schemas:core:2.0:User"


        ],

    -   "name": {

        -   "givenName": "Amy",

        -   "familyName": "Lawrence",

        -   "formatted": "Amy Lawrence"


        },

    -   "active": true,

    -   "emails": [

        -   {

            -   "value": "amy+Lawrence@zuora.com",

            -   "type": "work",

            -   "primary": true


            }


        ],

    -   "roles": [

        -   {

            -   "value": "ADMIN"


            }


        ],

    -   "externalId": "asdasdasdS",

    -   "userName": "amy+test102",

    -   "preferredLanguage": "en",

    -   "locale": "en-US",

    -   "urn:zuora:scim:schemas:1.0:UserExtension": {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension"


            ],

        -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e"


        }


    }


]`

Response samples

-   200
-   201
-   401
-   403
-   404

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:zuora:scim:schemas:1.0:UserExtension",

    -   "urn:ietf:params:scim:schemas:core:2.0:User"


    ],

-   "id": "e1b624ac-e00f-422b-b4da-20070901b22f",

-   "externalId": "amy+test102",

-   "meta": {

    -   "created": "2024-09-05T07:44:44.262Z",

    -   "resourceType": "User",

    -   "location": "[http://localhost:9900/scim/v2/Users/e1b624ac-e00f-422b-b4da-20070901b22f](http://localhost:9900/scim/v2/Users/e1b624ac-e00f-422b-b4da-20070901b22f)"


    },

-   "userName": "amy+test102",

-   "name": {

    -   "formatted": "Amy Lawrence",

    -   "familyName": "Lawrence",

    -   "givenName": "Amy"


    },

-   "displayName": "Amy Lawrence",

-   "preferredLanguage": "en",

-   "locale": "en-US",

-   "active": true,

-   "emails": [

    -   {

        -   "value": "amy+test102@zuora.com",

        -   "display": "amy+test102@zuora.com",

        -   "type": "work",

        -   "primary": true


        }


    ],

-   "roles": [

    -   {

        -   "value": "ADMIN",

        -   "display": "ADMIN"


        }


    ],

-   "urn:zuora:scim:schemas:1.0:UserExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:UserExtension"


        ],

    -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

    -   "status": "ACTIVE",

    -   "ssoEnabled": true,

    -   "region": "EU"


    }


}`

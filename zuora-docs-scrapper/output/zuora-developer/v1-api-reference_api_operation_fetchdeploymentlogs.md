---
title: "FetchDeploymentLogs"
url: "https://developer.zuora.com/v1-api-reference/api/operation/FetchDeploymentLogs/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:17.793Z"
---

## Retrieve a deployment log

Retrieve a deployment log.

Security**bearerAuth**

Request

##### path Parameters

| migrationIdrequired | stringThe unique ID of a migration. |
| --- | --- |

##### header Parameters

| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header. |
| --- | --- |

Responses

200

OK

get/deployment-manager/deployments/{migrationId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/deployment-manager/deployments/{migrationId}' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Zuora-Entity-Ids: string'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "id": "8039d54b-da6f-4d80-88d5-06220c42861f",

-   "name": "Deploy - Product catalog",

-   "description": "Deploy - Product catalog",

-   "status": "PARTIALLY-DONE",

-   "targetTenant": {

    -   "id": "9958",

    -   "name": "Test API sandbox",

    -   "environment": "US-API-Sandbox-Staging"


    },

-   "deploymentDate": "2023-08-28 11:34:18.682000+00:00",

-   "runBy": "Admin",

-   "succeeded": [

    -   {

        -   "component": "Settings",

        -   "subComponent": "Billing",

        -   "key": "Currency"


        }


    ],

-   "failed": [

    -   {

        -   "component": "Settings",

        -   "subComponent": "Finance",

        -   "key": "AllRevenueRecognitionModels",

        -   "errorInfo": "Error while updating the payload with path : /revenue-recognition-models --> You do not have permission to perform this operation."


        },

    -   {

        -   "component": "Settings",

        -   "subComponent": "Finance",

        -   "key": "AccountingRules",

        -   "errorInfo": "Error while updating the payload with path : /accounting-rules --> You do not have Currency Conversion permission. You can request permission from your administrator."


        },

    -   {

        -   "component": "Settings",

        -   "subComponent": "Billing",

        -   "key": "SubscriptionSettings",

        -   "errorInfo": "{\n \"errorCode\" : \"REMOTE_HTTP_CLIENT_ERROR\",\n \"remoteHttpStatus\" : 403,\n \"messages\" : [ \"{\\\"error\\\":\\\"403 Forbidden\\\",\\\"processId\\\":\\\"A5EF7EA92B3B95B0\\\",\\\"message\\\":\\\"security.error.noPermission\\\"}\" ]\n}"


        }


    ],

-   "skipped": [

    -   {

        -   "component": "Settings",

        -   "subComponent": "Billing",

        -   "key": "NumberAndSku",

        -   "reason": "RETRY-ABLE ERROR"


        },

    -   {

        -   "component": "Settings",

        -   "subComponent": "Administration",

        -   "key": "AuditTrailSettings",

        -   "reason": "RETRY-ABLE ERROR"


        }


    ]


}`

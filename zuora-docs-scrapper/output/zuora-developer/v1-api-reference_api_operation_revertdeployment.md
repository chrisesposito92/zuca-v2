---
title: "RevertDeployment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/RevertDeployment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:42.551Z"
---

## Revert a deployment

Revert a deployment.

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

post/deployment-manager/deployments/{migrationId}/revert

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  'https://rest.test.zuora.com/deployment-manager/deployments/{migrationId}/revert' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Zuora-Entity-Ids: string'

Response samples

-   200

application/json

Copy

`{

-   "id": "2122b60e-49ca-4b16-ae1c-f7f315ff0010",

-   "name": "Migrate - Custom objects",

-   "description": "Migrate - Custom objects",

-   "sourceTenantName": "Test Sandbox",

-   "sourceTenantDescription": "Sample Source Tenant",

-   "status": "REVERTING",

-   "startTime": "2023-08-30 04:35:19.080000+00:00",

-   "endTime": "2023-08-29 15:49:41.986000+00:00",

-   "migratedBy": "Admin",

-   "type": "Tenant",

-   "environment": "US-API-Sandbox",

-   "emailIds": "admin@zuora.com",

-   "productCatalog": false,

-   "errors": "-"


}`

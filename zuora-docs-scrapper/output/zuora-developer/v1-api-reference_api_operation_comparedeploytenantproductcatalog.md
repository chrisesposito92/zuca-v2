---
title: "CompareDeployTenantProductCatalog"
url: "https://developer.zuora.com/v1-api-reference/api/operation/CompareDeployTenantProductCatalog/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:22.489Z"
---

## Compare and deploy the product catalog of a tenant to a target tenant

Compare and deploy the product catalog of a tenant to a target tenant.

Security**bearerAuth**

Request

##### header Parameters

| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header. |
| --- | --- |

##### Request Body schema: multipart/form-data
required

| namerequired | stringDeployment's name. |
| --- | --- |
| descriptionrequired | stringDeployment's description. |
| sendEmailrequired | booleanSpecifies if an email should be sent. |
| emails | stringIf sendEmail parameter is set to true, comma separated values of emails can be specified. Example email1@test.com,email2@test.com. |
| comments | stringContent of the email to be sent. |
| inActiveProductsrequired | booleanSpecifies if inactive products needs to be migrated. |
| activeProductsrequired | booleanSpecifies if active products needs to be migrated. |
| activeRatePlansrequired | booleanSpecifies if active rate plans needs to be migrated. |
| inActiveRatePlansrequired | booleanSpecifies if inactive active rate plans needs to be migrated. |
| compareFieldrequired | stringSpecifies the compare field to be using during migration.Enum: "name" "sku" |
| sourceTenantIdrequired | stringSpecifies the source tenant id. |

Responses

200

OK

400

Validation of dependent module error

post/deployment-manager/deployments/tenant/product\_catalog

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  https://rest.test.zuora.com/deployment-manager/deployments/tenant/product\_catalog \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-F name\=Tenant01PC \\
  \-F 'description=Product Catalog tenant - 01' \\
  \-F sendEmail\=true \\
  \-F emails\=zuoraUser@zuora.com \\
  \-F 'comments=Product Catalog tenant - 47' \\
  \-F inActiveProducts\=false \\
  \-F activeProducts\=true \\
  \-F activeRatePlans\=true \\
  \-F inActiveRatePlans\=true \\
  \-F compareField\=name \\
  \-F sourceTenantId\=83e7e56d-0e02-4b4d-91f6-cc77f322c40b

Response samples

-   200
-   400

application/json

Copy

`{

-   "id": "8039d54b-da6f-4d80-88d5-06220c42861f",

-   "status": "DEPLOYING"


}`

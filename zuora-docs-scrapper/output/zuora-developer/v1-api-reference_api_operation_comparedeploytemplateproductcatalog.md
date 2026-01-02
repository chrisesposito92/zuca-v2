---
title: "CompareDeployTemplateProductCatalog"
url: "https://developer.zuora.com/v1-api-reference/api/operation/CompareDeployTemplateProductCatalog/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:23.961Z"
---

## Compare and deploy a template for product catalog to a tenant

Compare and deploy a template for product catalog to a tenant.

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
| emails | stringIf sendEmail parameter is set to true, comma separated values of emails can be specified. |
| comments | stringContent of the email to be sent. |
| templaterequired | string <binary>Template file. |
| inActiveProductsrequired | booleanSpecifies if inactive products needs to be migrated. |
| activeProductsrequired | booleanSpecifies if active products needs to be migrated. |
| activeRatePlansrequired | booleanSpecifies if active rate plans needs to be migrated. |
| inActiveRatePlansrequired | booleanSpecifies if inactive rate plans needs to be migrated. |
| compareFieldrequired | stringSpecifies the compare field to be using during migration.Enum: "name" "sku" |

Responses

200

OK

post/deployment-manager/deployments/template/product\_catalog

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  https://rest.test.zuora.com/deployment-manager/deployments/template/product\_catalog \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-F 'name=Deploy PC' \\
  \-F 'description=Import Product Catalog - template' \\
  \-F sendEmail\=true \\
  \-F 'emails=zuoraUser1@zuora.com,zuoraUser2@zuora.com' \\
  \-F 'comments=Import Product Catalog - template' \\
  \-F template\=@/Users/praghav/Downloads/products.json \\
  \-F inActiveProducts\=false \\
  \-F activeProducts\=true \\
  \-F activeRatePlans\=true \\
  \-F inActiveRatePlans\=true \\
  \-F compareField\=name

Response samples

-   200

application/json

Copy

`{

-   "id": "8039d54b-da6f-4d80-88d5-06220c42861f",

-   "status": "DEPLOYING"


}`

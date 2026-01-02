---
title: "CompareDeployTemplate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/CompareDeployTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:43.971Z"
---

## Compare and deploy a template to a tenant

Compare and deploy a template to a tenant.

Security**bearerAuth**

Request

##### header Parameters

| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header. |
| --- | --- |

##### Request Body schema: multipart/form-data
required

| namerequired | stringDeployment's name |
| --- | --- |
| descriptionrequired | stringDeployment's description. |
| sendEmailrequired | booleanSpecifies if an email should be sent. |
| emails | stringIf sendEmail parameter is set to true, comma separated values of emails can be specified. Example email1@test.com,email2@test.com. |
| comments | stringContent of the email to be sent. |
| templaterequired | string <binary>Template file. |

Responses

200

OK

post/deployment-manager/deployments/templates

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  https://rest.test.zuora.com/deployment-manager/deployments/templates \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-F name\=string \\
  \-F description\=string \\
  \-F sendEmail\=true \\
  \-F emails\=string \\
  \-F comments\=string \\
  \-F template\=string

Response samples

-   200

application/json

Copy

`{

-   "id": "8039d54b-da6f-4d80-88d5-06220c42861f",

-   "status": "DEPLOYING"


}`

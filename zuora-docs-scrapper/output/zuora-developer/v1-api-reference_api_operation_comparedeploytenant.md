---
title: "CompareDeployTenant"
url: "https://developer.zuora.com/v1-api-reference/api/operation/CompareDeployTenant/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:44.823Z"
---

## Compare and deploy a source tenant to a target tenant

Compare and deploy a source tenant to a target tenant.

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
| settingsrequired | booleanSpecified if settings module should be considered in the deployment process. |
| notificationsrequired | booleanSpecified if notifications module should be considered in the deployment process. |
| workflowsrequired | booleanSpecified if workflows module should be considered in the deployment process. |
| customFieldsrequired | booleanSpecified if customFields module should be considered in the deployment process. |
| customObjects | booleanSpecified if customObjects module should be considered in the deployment process. |
| productCatalogrequired | booleanSpecified if productCatalog module should be considered in the deployment process. |
| taxation | booleanSpecified if taxation module should be considered in the deployment process. |
| userRolesrequired | booleanSpecified if userRoles module should be considered in the deployment process. |
| reportingrequired | booleanSpecified if reporting module should be considered in the deployment process. |
| sourceTenantIdrequired | stringId of the source tenant. |

Responses

200

OK

400

Validation of dependent module error.

post/deployment-manager/deployments/tenants

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  https://rest.test.zuora.com/deployment-manager/deployments/tenants \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-F name\=string \\
  \-F description\=string \\
  \-F sendEmail\=true \\
  \-F emails\=string \\
  \-F comments\=string \\
  \-F settings\=true \\
  \-F notifications\=true \\
  \-F workflows\=true \\
  \-F customFields\=true \\
  \-F customObjects\=true \\
  \-F productCatalog\=true \\
  \-F taxation\=true \\
  \-F userRoles\=true \\
  \-F reporting\=true \\
  \-F sourceTenantId\=string

Response samples

-   200
-   400

application/json

Copy

`{

-   "id": "8039d54b-da6f-4d80-88d5-06220c42861f",

-   "status": "DEPLOYING"


}`

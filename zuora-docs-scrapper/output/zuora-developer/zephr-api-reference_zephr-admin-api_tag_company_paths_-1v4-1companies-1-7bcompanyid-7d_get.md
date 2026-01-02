---
title: "Get"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/tag/Company/paths/~1v4~1companies~1%7BcompanyId%7D/get/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:22.405Z"
---

## Retrieve a company

Retrieves company information for a company specified by the provided identifier (`companyId`)

Security**ZephrHmacHttp**

Request

##### path Parameters

| companyIdrequired | stringThe company's unique identifierExample: 1f6841a8-7f3b-4505-856e-4549be433545 |
| --- | --- |

Responses

200

OK - Company information was successfully retrieved

404

Not found - No companies were found with the supplied identifier

get/v4/companies/{companyId}

Response samples

-   200

application/json

Copy

`{

-   "company_id": "1f6841a8-7f3b-4505-856e-4549be433545",

-   "name": "My Company",

-   "description": "This is an example company",

-   "website": "[https://company.com](https://company.com)",

-   "contact": "email@company.com",

-   "account_manager": "Joe Blow",

-   "tenantId": "my-tenant",

-   "subTenantId": "my-tenant"


}`

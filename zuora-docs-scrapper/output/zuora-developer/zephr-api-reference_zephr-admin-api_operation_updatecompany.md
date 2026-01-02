---
title: "UpdateCompany"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateCompany/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:22.687Z"
---

## Update a company

Updates a company.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Company identifier |
| --- | --- |

##### Request Body schema: application/json

| name | string |
| --- | --- |
| description | string |
| website | string |
| contact | string |
| account_manager | string |

Responses

201

Created

400

Bad Request

put/v3/companies/{id}

Request samples

-   Payload

application/json

Copy

`{

-   "name": "Company name",

-   "description": "Company description",

-   "website": "company.com",

-   "contact": "Company contact",

-   "account_manager": "Company account manager"


}`

---
title: "CreateCompany"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createCompany/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:02.447Z"
---

## Create a company

Creates a company.

Security**ZephrHmacHttp**

Request

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

post/v3/companies

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

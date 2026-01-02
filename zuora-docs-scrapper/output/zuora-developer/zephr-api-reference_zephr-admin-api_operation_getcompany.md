---
title: "GetCompany"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getCompany/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:02.705Z"
---

## Retrieve a company

Retrieves a single company.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Company identifier |
| --- | --- |

Responses

200

OK

get/v3/companies/{id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "name": "Company name",

-   "description": "Company description",

-   "website": "company.com",

-   "contact": "Company contact",

-   "account_manager": "Company account manager"


}`

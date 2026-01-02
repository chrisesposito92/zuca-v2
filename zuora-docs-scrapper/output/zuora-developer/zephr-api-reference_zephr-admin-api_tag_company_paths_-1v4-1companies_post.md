---
title: "Post"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/tag/Company/paths/~1v4~1companies/post/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:22.395Z"
---

## Create a company

Creates a company with the details specified in the request body

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| namerequired | stringThe name of the company |
| --- | --- |
| description | stringThe description of the company |
| website | stringThe website of the company |
| contact | stringContact information of the company |
| account_manager | stringThe name of the company account manager |

Responses

201

OK - Company has been created successfully

400

Bad Request - Company name is missing from the request

post/v4/companies

Request samples

-   Payload

application/json

Copy

`{

-   "name": "Company name",

-   "description": "Company description",

-   "website": "[https://company.com](https://company.com)",

-   "contact": "company@email.com",

-   "account_manager": "Joe Blow"


}`

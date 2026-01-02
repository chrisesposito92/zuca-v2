---
title: "ListCompanies"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listCompanies/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:03.068Z"
---

## List companies

Retrieves a list of companies wrapped in the element "results".

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/companies

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "name": "Company name",

        -   "description": "Company description",

        -   "website": "company.com",

        -   "contact": "Company contact",

        -   "account_manager": "Company account manager"


        }


    ]


}`

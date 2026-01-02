---
title: "ListAccounts"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listAccounts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:15.331Z"
---

## List accounts

Retrieves a paginated list of accounts in `results` according to the passed in `rpp`, `page` and `search` parameters alongside the total number of items matching the search query (`total`).

Security**ZephrHmacHttp**

Request

##### query Parameters

| rpp | numberDefault: 10The number of results per page you want to retrieve.Example: rpp=15 |
| --- | --- |
| page | numberDefault: 10The page number for which you want to retrieve results.Example: page=15 |
| search | stringThe search query that searches accounts by their namesExample: search=My account |

Responses

200

OK - Accounts have been retrieved successfully

get/v3/accounts

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "account_id": "10549fef-cddb-4b1f-92e4-27ab7cb2e555",

        -   "name": "Account name",

        -   "tenant_id": "my-tenant",

        -   "number_of_seats": 7,

        -   "email_address": "company@email.com"


        }


    ],

-   "total": 20


}`

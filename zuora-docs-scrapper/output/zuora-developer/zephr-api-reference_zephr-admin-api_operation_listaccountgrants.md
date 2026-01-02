---
title: "ListAccountGrants"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listAccountGrants/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:56.741Z"
---

## List account grants

Retrieves a list of account grants.

Security**ZephrHmacHttp**

Request

##### path Parameters

| accountIdrequired | stringUnique Account identifier |
| --- | --- |

Responses

200

OK

get/v3/accounts/{accountId}/grants

Response samples

-   200

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "grantId": "e196ad75-a6d0-471b-90b3-de3843dd7860",

    -   "user_id": "e1812285-2f21-441e-8be4-b08835cd4b2c",

    -   "account_id": "14515649-565f-4b1c-8346-eb98301c1d6b",

    -   "expiry_state": "pending",

    -   "entitlement_type": "bundle",

    -   "entitlement_id": "b74df5c4-fded-492c-ad90-07646bded5db",

    -   "startTime": "2022-06-01 00:00:00",

    -   "endTime": "2022-12-31 23:59:59",

    -   "product_id": "86abb44a-e6f2-4f9b-ac26-46ae0a13ed31",

    -   "createdAt": "2022-05-31 23:59:59"


    }


]`

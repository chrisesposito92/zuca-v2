---
title: "GetAccountGrant"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getAccountGrant/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:39.950Z"
---

## Retrieve a grant

Retrieves a single grant.

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifier |
| --- | --- |
| grantIdrequired | stringUnique Grant identifier |

Responses

200

OK

get/v3/users/{userId}/grants/{grantId}

Response samples

-   200

application/json

Copy

`{

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


}`

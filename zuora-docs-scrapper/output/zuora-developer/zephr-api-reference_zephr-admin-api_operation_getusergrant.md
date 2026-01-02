---
title: "GetUserGrant"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getUserGrant/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:58.133Z"
---

## Retrieve an account grant

Retrieves a single account grant information, if the supplied `accountId` and `grantId` match

Security**ZephrHmacHttp**

Request

##### path Parameters

| accountIdrequired | stringUnique Account identifierExample: 5fag4a2d-86cd-4bb0-a5df-68dca75a3a21 |
| --- | --- |
| grantIdrequired | stringUnique Grant identifierExample: 0123456789ABCD |

Responses

200

OK - Retrieved an account grant

404

NOT FOUND - Cannot find an existing grant information for the supplied `accountId` and `grantId`

get/v3/accounts/{accountId}/grants/{grantId}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "grantId": "0123456789ABCD",

-   "entitlement_type": "bundle",

-   "entitlement_id": "8dfb3e7c-7a9e-4f23-b6c1-e2d8c41fb9a8",

-   "startTime": "2022-06-01 00:00:00",

-   "endTime": "2022-12-31 23:59:59",

-   "product_id": "PRD-2024-ABC123"


}`

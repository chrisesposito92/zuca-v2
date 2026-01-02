---
title: "PostAccountBulking"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/postAccountBulking/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:51.103Z"
---

## Post an account grant

Adding account users to company account by email domain.

Security**ZephrHmacHttp**

Request

##### path Parameters

| accountIdrequired | stringUnique Account Company identifierExample: 3f589a2d-86ad-4b70-a5df-68dca75a3a21 |
| --- | --- |

Responses

202

OK - Adding account users to company account `accountId` was successful

409

Conflict - Cannot add account users to company account `accountId`

500

Internal Error - Failed to bulk add account users for account `accountId`

post/v4/accounts/{accountId}/users

Response samples

-   202

application/json

responseresponse

Copy

`"Bulk adding account users for account `accountId`"`

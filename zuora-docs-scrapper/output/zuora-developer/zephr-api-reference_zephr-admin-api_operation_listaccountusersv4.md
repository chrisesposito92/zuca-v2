---
title: "ListAccountUsersV4"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listAccountUsersV4/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:03.111Z"
---

## List account users

Retrieves all the account users, if the `accountId` has users.

Security**ZephrHmacHttp**

Request

##### path Parameters

| accountIdrequired | stringUnique Account identifierExample: 5fag4a2d-86cd-4bb0-a5df-68dca75a3a21 |
| --- | --- |

Responses

200

OK - Users were found for `accountId`

404

Not Found - Cannot find users with the supplied `accountId`

get/v4/accounts/{accountId}/grants

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "userId": "3f589a2d-86ad-4b70-a5df-68dca75a3a21",

    -   "accountId": "5fag4a2d-86cd-4bb0-a5df-68dca75a3a21"


    }


]`

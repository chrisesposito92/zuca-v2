---
title: "DeleteUserGrant"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteUserGrant/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:34.132Z"
---

## Delete a grant

Deletes a grant specified by the `grantId`. This is for a user that is specified by the `userId`

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifierExample: 3f589a2d-86ad-4b70-a5df-68dca75a3a21 |
| --- | --- |
| grantIdrequired | stringUnique Grant identifierExample: 5fag4a2d-86cd-4bb0-a5df-68dca75a3a21 |

Responses

200

OK - The grant was found and successfully deleted

404

Not Found - Cannot find an existing grant for the supplied `userId` and `grantId`

delete/v3/users/{userId}/grants/{grantId}

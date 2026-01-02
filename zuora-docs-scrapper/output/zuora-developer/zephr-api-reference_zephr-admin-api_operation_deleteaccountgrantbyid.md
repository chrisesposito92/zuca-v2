---
title: "DeleteAccountGrantById"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteAccountGrantById/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:57.116Z"
---

## Delete an account grant

Deletes an account grant specified by the `grantId`. This is for a user that is specified by the `accountId`.

Security**ZephrHmacHttp**

Request

##### path Parameters

| accountIdrequired | stringUnique Account identifierExample: 3f589a2d-86ad-4b70-a5df-68dca75a3a21 |
| --- | --- |
| grantIdrequired | stringUnique Grant identifierExample: 5fag4a2d-86cd-4bb0-a5df-68dca75a3a21 |

Responses

200

OK - The grant was found and successfully deleted

404

Not Found - Cannot find an existing grant for the supplied `accountId` and `grantId`

delete/v3/accounts/{accountId}/grants/{grantId}

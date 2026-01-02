---
title: "SaveAccountUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveAccountUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:01.712Z"
---

## Save or Create an account user

Saves or Creates an account specified by `account_id` and `user_id`.

Security**ZephrHmacHttp**

Request

##### path Parameters

| account_idrequired | stringUnique Account identifierExample: 5fag4a2d-86cd-4bb0-a5df-68dca75a3a21 |
| --- | --- |
| user_idrequired | stringUnique User identifierExample: 3f589a2d-86ad-4b70-a5df-68dca75a3a21 |

Responses

200

OK - User was successfully inserted or updated.

201

Created - The request has been fulfilled and user was inserted or updated

400

Bad Request - Cannot find an existing user for the supplied `user_id` and `account_id`

put/v3/accounts/{account\_id}/users/{user\_id}

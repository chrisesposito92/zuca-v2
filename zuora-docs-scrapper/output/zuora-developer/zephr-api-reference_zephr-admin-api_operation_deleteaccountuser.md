---
title: "DeleteAccountUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteAccountUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:02.749Z"
---

## Delete an account user

Deletes an account user.

Security**ZephrHmacHttp**

Request

##### path Parameters

| account_idrequired | stringUnique Account identifier |
| --- | --- |
| user_idrequired | stringUnique User identifier |

Responses

200

OK

404

Not Found

delete/v3/accounts/{account\_id}/users/{user\_id}

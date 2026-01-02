---
title: "IssueKeyPair"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/issueKeyPair/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:03.790Z"
---

## Issue a key pair

Issues a new key pair for the admin user.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User Identifier |
| --- | --- |

Responses

201

Created

404

Not Found

post/v3/admin/users/{user\_id}/keypairs

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "access_key": "access key...",

-   "secret_key": "secret key...",

-   "message": "Keypair created: you will not be able to recover the secret, so take note of it"


}`

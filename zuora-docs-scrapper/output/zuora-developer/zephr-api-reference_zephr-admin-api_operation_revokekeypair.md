---
title: "RevokeKeypair"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/revokeKeypair/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:22.853Z"
---

## Revoke a keypair

Revokes a keypair.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |
| access_keyrequired | stringAccess Key identifier |

Responses

200

OK

404

Not Found

delete/v3/admin/users/{user\_id}/keypairs/{access\_key}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Keypair revoked"


}`

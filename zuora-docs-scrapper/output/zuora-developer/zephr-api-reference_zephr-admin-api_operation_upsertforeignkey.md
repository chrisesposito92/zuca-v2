---
title: "UpsertForeignKey"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/upsertForeignKey/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:16.401Z"
---

## Inserts or updates a foreign key

Inserts or updates the provided foreign key, if the supplied `userId` and `key` match.

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifierExample: 3f589a2d-86cd-4b70-a5df-68dca75a3a21 |
| --- | --- |
| keyrequired | stringForeign system keyExample: foreign_system_key |

##### Request Body schema: application/json

string

Responses

200

OK - Foreign key was successfully inserted or updated

404

Not Found - Cannot find a user with the supplied `userId`

put/v3/users/{userId}/foreign-key/update/{key}

Request samples

-   Payload

application/json

Copy

`"65xcb76a3a2f1"`

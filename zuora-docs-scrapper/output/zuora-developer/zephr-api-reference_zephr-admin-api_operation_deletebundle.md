---
title: "DeleteBundle"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteBundle/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:44.372Z"
---

## Delete Bundle

Deletes a Bundle.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Bundle Identifier. |
| --- | --- |

Responses

200

OK. Returned if the bundle was successfully deleted.

401

Unauthorized. Returned if no valid authentication was provided.

404

Not Found. Returned if the ID is invalid. No bundle found.

delete/v3/bundles/{id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Bundle deleted successfully"


}`

---
title: "DeleteMeter"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteMeter/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:17.883Z"
---

## Delete a meter

Deletes a meter if the meter with `id` exists.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Meter identifierExample: ad29c8fb-9a4b-428d-98d4-893116ef2afc |
| --- | --- |

Responses

200

OK - meter was deleted successfully

404

Not Found

delete/v3/meters/{id}

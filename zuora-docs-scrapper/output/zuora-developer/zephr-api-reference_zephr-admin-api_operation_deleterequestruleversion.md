---
title: "DeleteRequestRuleVersion"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteRequestRuleVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:36.790Z"
---

## Delete a request rule version

Deletes a request rule version.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Request Rule identifier |
| --- | --- |
| versionIdrequired | stringUnique Request Rule version identifier |

Responses

200

OK

404

Not Found

delete/v3/request-rules/{id}/versions/{versionId}

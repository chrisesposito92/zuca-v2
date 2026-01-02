---
title: "DeleteFeatureRuleVersion"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteFeatureRuleVersion/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:18.733Z"
---

## Delete a feature rule version

Deletes a single version of a feature rule.

Security**ZephrHmacHttp**

Request

##### path Parameters

| featureRuleIdrequired | stringUnique Feature Rule identifier |
| --- | --- |
| versionIdrequired | stringUnique Version identifier |

Responses

200

OK

404

Not Found

delete/v3/feature-rules/{featureRuleId}/versions/{versionId}

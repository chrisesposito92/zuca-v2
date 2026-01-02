---
title: "SaveFeatureRule"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveFeatureRule/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:20.429Z"
---

## Save feature rule version tags

Saves the feature rule version tags.

Security**ZephrHmacHttp**

Request

##### path Parameters

| featureRuleIdrequired | stringUnique Feature Rule identifier |
| --- | --- |
| versionIdrequired | stringUnique Version identifier |

##### Request Body schema: application/json

Array

any

Responses

200

OK

201

Created

400

Bad Request

put/v3/feature-rules/{featureRuleId}/versions/{versionId}/tags

Request samples

-   Payload

application/json

Copy

`[

-   null


]`

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "message": "featureRuleId tag/s saved successfully",

-   "uri": "[http://host/v3/feature-rules/featureRuleId/versions/versionId/tags](http://host/v3/feature-rules/featureRuleId/versions/versionId/tags)"


}`

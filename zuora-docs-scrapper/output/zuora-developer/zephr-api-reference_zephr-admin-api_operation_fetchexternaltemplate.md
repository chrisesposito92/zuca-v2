---
title: "FetchExternalTemplate"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/fetchExternalTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:49.325Z"
---

## Fetch external template

Fetch External Template

Security**ZephrHmacHttp**

Request

##### path Parameters

| templateConfigIdrequired | stringUnique External Template identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/zephr/public/template-components/v1/template-components/{templateConfigId}

Response samples

-   200

application/json

responseresponse

Copy

`[

-   "The template the-value::!"


]`

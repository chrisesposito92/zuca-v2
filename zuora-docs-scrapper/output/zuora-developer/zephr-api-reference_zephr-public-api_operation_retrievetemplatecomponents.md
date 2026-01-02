---
title: "RetrieveTemplateComponents"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveTemplateComponents/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:42.429Z"
---

## Retrieve the Template Components

Template components can be retrieved as rendered HTML. This endpoint is intended to be consumed by callers processing the output of an SDK TRANSFORMATION rule, where templateConfigId will identify a particular instance of a template component being used in an outcome with variables specified.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| templateConfigIdrequired | stringtemplateConfigId |
| --- | --- |

Responses

200

OK

400

Bad Request

get/zephr/public/template-components/v1/template-components/{templateConfigId}

Response samples

-   200

text/html

responseresponse

Copy

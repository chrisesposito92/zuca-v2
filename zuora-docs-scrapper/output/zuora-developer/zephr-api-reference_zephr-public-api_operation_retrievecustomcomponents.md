---
title: "RetrieveCustomComponents"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveCustomComponents/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:43.811Z"
---

## List custom components

Custom components can be retrieved as rendered HTML. This endpoint is intended to be consumed by callers processing the output of an SDK TRANSFORMATION rule, where internalTemplateUsageId will identify a particular instance of a custom component being used in an outcome with variables specified. The variables used by the custom component can be passed in as query parameters with the request which will override the values provided in the rule.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| internalTemplateUsageIdrequired | stringThe internal template usage ID. |
| --- | --- |

Responses

200

OK

400

Bad Request

403

Forbidden

404

Form not found

get/zephr/public/internal-templates/v1/internal-templates/{internalTemplateUsageId}

Response samples

-   200

text/html

responseresponse

Copy

<div\>Some HTML</div\>

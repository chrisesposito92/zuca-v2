---
title: "GetForm"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/getForm/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:43.019Z"
---

## Retrieve a form by ID

Retrieves a form by ID and returns an HTML page that renders it.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| formIdrequired | string |
| --- | --- |

##### query Parameters

| outcomeId | stringUsed to render the form |
| --- | --- |
| ruleId | stringUsed to render the form |

Responses

200

OK

400

Bad Request

get/zephr/public/forms/v1/forms/{formId}

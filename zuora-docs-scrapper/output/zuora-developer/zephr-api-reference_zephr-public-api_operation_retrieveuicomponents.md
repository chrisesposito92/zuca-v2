---
title: "RetrieveUIComponents"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveUIComponents/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:41.551Z"
---

## Retrieve the UI Components

UI components can be retrieved as rendered HTML. This endpoint is intended to be consumed by callers processing the output of an SDK TRANSFORMATION rule, where componentId will reference a form or custom component created within an outcome of a rule.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| componentIdrequired | stringcomponentId |
| --- | --- |

##### query Parameters

| ui component variable | stringparameters can optionally be included and will be rendered where the matching param name exists in the UI componentExample: ui component variable=?myVar=test&otherVar=something |
| --- | --- |

Responses

200

OK

400

Bad Request

404

Not Found

get/zephr/public/ui-components/v1/ui-components/{componentId}

Response samples

-   200

text/html

responseresponse

Copy

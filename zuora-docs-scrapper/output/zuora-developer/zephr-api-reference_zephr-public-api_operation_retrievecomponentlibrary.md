---
title: "RetrieveComponentLibrary"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveComponentLibrary/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:17.165Z"
---

## Retrieve the Component Library

Components configured in the component library can be retrieved as rendered HTML. The componentId passed in the path can be versioned to reference a specific version of a library component. For example, ‘payment-form:1’, ‘payment-form:4’ or ‘payment-form:active’ to reference the default version of the component.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| componentIdrequired | stringThe versioned slug of the component in the library to render, as configured in the console.Example: my-component:1 |
| --- | --- |

Responses

200

OK

400

Bad Request

get/zephr/public/component-library/v1/library-components/{componentId}

Response samples

-   200

text/html

responseresponse

Copy

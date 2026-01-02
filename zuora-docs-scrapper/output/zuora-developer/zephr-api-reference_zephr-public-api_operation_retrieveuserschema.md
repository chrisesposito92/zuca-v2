---
title: "RetrieveUserSchema"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveUserSchema/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:02.849Z"
---

## Retrieve the user schema

Retrieves the user attribute schema for the tenant. This includes all fields configured in the admin console for the user schema.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

OK. Returns a list of schema fields.

401

Unauthorized. Returned if no valid authentication was provided.

get/blaize/schema/users

Response samples

-   200

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "tenantId": "company",

    -   "subTenantId": "company|demo",

    -   "slug": "first-name",

    -   "visibility": "PUBLIC",

    -   "context": "ZUORA_BILLING",

    -   "label": "First Name",

    -   "required": true,

    -   "internal-description": "The first name of the user",

    -   "public-description": "The first name of the user",

    -   "validation-expression": "[a-z]+$",

    -   "input-type": "text",

    -   "select-options": "[ {key1: value1}, {key2: value2} ]",

    -   "range-start": 0,

    -   "range-end": 100,

    -   "range-step": 1,

    -   "decision-point": true,

    -   "publicly-writable": true,

    -   "form-use": false


    }


]`

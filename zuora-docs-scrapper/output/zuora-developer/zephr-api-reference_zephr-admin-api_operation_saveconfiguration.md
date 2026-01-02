---
title: "SaveConfiguration"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveConfiguration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:22.317Z"
---

## Save the tenant configuration

Creates or updates the tenant configuration.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| db.tables.extendedProfiles | string |
| --- | --- |
| db.tables.grants | string |
| db.tables.forms | string |
| db.tables.features | string |
| db.tables.requestRules | string |
| db.tables.entitlements | string |
| db.tables.formFields | string |
| db.tables.companies | string |
| db.tables.accounts | string |
| db.tables.userSchemaFields | string |
| db.tables.users | string |
| db.tables.userAttributes | string |
| db.tables.accountUsers | string |
| db.tables.staticItems | string |
| db.tables.webhooks | string |
| db.tables.adminUserTenantRoles | string |
| db.tables.adminUsers | string |
| db.tables.adminKeyPairs | string |
| oauth.google.apis.host | string |
| oauth.linkedin.clientSecret | string |
| oauth.linkedin.apis.host | string |
| oauth.google.clientSecret | string |
| oauth.google.callbackUri | string |
| oauth.linkedin.clientId | string |
| oauth.linkedin.callbackUri | string |
| oauth.google.clientId | string |
| oauth.facebook.callbackUri | string |
| oauth.facebook.clientSecret | string |
| oauth.facebook.apis.host | string |
| oauth.facebook.clientId | string |
| cdn.origin | string |
| redis.port | string |
| elasticsearch.url | string |
| aws.region | string |
| redis.host | string |
| email.from | string |
| authentication.password.requireEmailVerfication | string |

Responses

200

OK

400

Bad Request

post/v3/configuration

Request samples

-   Payload

application/json

Copy

`{

-   "db.tables.extendedProfiles": "value",

-   "db.tables.grants": "value",

-   "db.tables.forms": "value",

-   "db.tables.features": "value",

-   "db.tables.requestRules": "value",

-   "db.tables.entitlements": "value",

-   "db.tables.formFields": "value",

-   "db.tables.companies": "value",

-   "db.tables.accounts": "value",

-   "db.tables.userSchemaFields": "value",

-   "db.tables.users": "value",

-   "db.tables.userAttributes": "value",

-   "db.tables.accountUsers": "value",

-   "db.tables.staticItems": "value",

-   "db.tables.webhooks": "value",

-   "db.tables.adminUserTenantRoles": "value",

-   "db.tables.adminUsers": "value",

-   "db.tables.adminKeyPairs": "value",

-   "oauth.google.apis.host": "value",

-   "oauth.linkedin.clientSecret": "value",

-   "oauth.linkedin.apis.host": "value",

-   "oauth.google.clientSecret": "value",

-   "oauth.google.callbackUri": "value",

-   "oauth.linkedin.clientId": "value",

-   "oauth.linkedin.callbackUri": "value",

-   "oauth.google.clientId": "value",

-   "oauth.facebook.callbackUri": "value",

-   "oauth.facebook.clientSecret": "value",

-   "oauth.facebook.apis.host": "value",

-   "oauth.facebook.clientId": "value",

-   "cdn.origin": "value",

-   "redis.port": "value",

-   "elasticsearch.url": "value",

-   "aws.region": "value",

-   "redis.host": "value",

-   "email.from": "value",

-   "authentication.password.requireEmailVerfication": "value"


}`

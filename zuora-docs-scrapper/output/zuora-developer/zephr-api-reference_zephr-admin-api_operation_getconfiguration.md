---
title: "GetConfiguration"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getConfiguration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:22.295Z"
---

## Retrieve the tenant configuration

Retrieves the tenant configuration.

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/configuration

Response samples

-   200

application/json

responseresponse

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

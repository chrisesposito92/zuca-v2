---
title: "CreateWebhook"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createWebhook/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:14.720Z"
---

## Create a webhook

Creates a Webhook.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| label | string |
| --- | --- |
| triggers | Array of any |
| method | string |
| target | string |

Responses

201

Created

400

Bad Request

post/v3/webhooks

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "label": "Test webhook",

-   "triggers": [

    -   "user.create",

    -   "user.delete"


    ],

-   "method": "POST",

-   "target": "[http://localhost:9999](http://localhost:9999)"


}`

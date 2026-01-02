---
title: "UpdateWebhook"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateWebhook/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:14.733Z"
---

## Update a webhook

Updates a webhook.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Webhook identifier |
| --- | --- |

##### Request Body schema: application/json

| webhook_id | string |
| --- | --- |
| label | string |
| triggers | Array of any |
| method | string |
| target | string |

Responses

200

OK

400

Bad Request

put/v3/webhooks/{id}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "webhook_id": "01234567890ABCD",

-   "label": "Test webhook",

-   "triggers": [

    -   "user.create",

    -   "user.delete"


    ],

-   "method": "POST",

-   "target": "[http://localhost:9999](http://localhost:9999)"


}`

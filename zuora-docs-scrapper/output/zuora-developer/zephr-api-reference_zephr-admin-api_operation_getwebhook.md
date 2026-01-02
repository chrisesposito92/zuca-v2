---
title: "GetWebhook"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getWebhook/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:15.345Z"
---

## Retrieve a webhook

Retrieves a webhook.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Webhook identifier |
| --- | --- |

Responses

200

OK

get/v3/webhooks/{id}

Response samples

-   200

application/json

responseresponse

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

---
title: "CreateCert"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createCert/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:15.560Z"
---

## Create a cert

Creates a cert.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| label | string |
| --- | --- |
| private_key | string |
| cert | string |

Responses

201

Created

400

Bad Request

post/v3/certs

Request samples

-   Payload

application/json

Copy

`{

-   "label": "company.com",

-   "private_key": "private_key...",

-   "cert": "cert..."


}`

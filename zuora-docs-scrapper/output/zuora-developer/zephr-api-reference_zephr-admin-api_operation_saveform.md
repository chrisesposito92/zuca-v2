---
title: "SaveForm"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveForm/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:40.188Z"
---

## Save a form

Saves a form.

Security**ZephrHmacHttp**

Request

##### path Parameters

| slugrequired | stringUnique Form identifier |
| --- | --- |

##### Request Body schema: application/json

| title | string |
| --- | --- |
| internal-description | string |
| public-description | string |
| registration | boolean |
| fields | Array of objects (field) |

Responses

200

OK

201

Created

400

Bad Request

put/v3/forms/{slug}

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "title": "Test",

-   "internal-description": "This form is for testing",

-   "public-description": "Please provide some info",

-   "registration": true,

-   "fields": [

    -   {

        -   "slug": "first-name",

        -   "placeholder": "First name",

        -   "required": true,

        -   "order": 1


        }


    ]


}`

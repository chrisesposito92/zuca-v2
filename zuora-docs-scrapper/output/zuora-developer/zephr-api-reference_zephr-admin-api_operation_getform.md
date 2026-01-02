---
title: "GetForm"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getForm/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:14.238Z"
---

## Retrieve Form

Retrieves a single form.

Security**ZephrHmacHttp**

Request

##### path Parameters

| slugrequired | stringUnique Form identifier |
| --- | --- |

Responses

200

OK

get/v3/forms/{slug}

Response samples

-   200

application/json

responseresponse

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

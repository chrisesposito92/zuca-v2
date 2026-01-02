---
title: "ListEmailTemplates"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listEmailTemplates/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:34.943Z"
---

## List email templates

Retrieves a list of email templates.

Security**ZephrHmacHttp**

Responses

200

OK

get/v4/email-templates

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "templateType": "template type",

        -   "slug": "email template slug",

        -   "label": "Name of the email template",

        -   "subject": "Email subject",

        -   "content": "Email content",

        -   "default": false


        }


    ]


}`

---
title: "GetEmailTemplate"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getEmailTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:01.081Z"
---

## Retrieve an email template

Retrieves a single email template.

Security**ZephrHmacHttp**

Request

##### path Parameters

| slugrequired | stringSlug of the Email template |
| --- | --- |

Responses

200

OK

404

Not Found

get/v4/email-templates/{slug}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "templateType": "template type",

-   "slug": "email template slug",

-   "label": "Name of the email template",

-   "subject": "Email subject",

-   "content": "Email content",

-   "default": false


}`

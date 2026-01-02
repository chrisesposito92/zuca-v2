---
title: "SaveEmailTemplate"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveEmailTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:02.076Z"
---

## Save an email template

Saves an email template.

Security**ZephrHmacHttp**

Request

##### path Parameters

| slugrequired | stringSlug of the Email template |
| --- | --- |

##### Request Body schema: application/json

| templateType | string |
| --- | --- |
| label | string |
| subject | string |
| content | string |

Responses

200

OK

400

Bad Request

put/v4/email-templates/{slug}

Request samples

-   Payload

application/json

Copy

`{

-   "templateType": "User Password Reset",

-   "label": "my modified default password reset",

-   "subject": "my modified default Password Reset Subject",

-   "content": "<p>New content</p>"


}`

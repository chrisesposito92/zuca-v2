---
title: "CreateUserSegment"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createUserSegment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:36.488Z"
---

## Create a user segment

Creates a new User Segment.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| labelrequired | stringThe User Segment name. |
| --- | --- |
| description | stringThe User Segment description. |

Responses

201

Created

400

Bad Request

post/v4/users/segments

Request samples

-   Payload

application/json

Copy

`{

-   "label": "string",

-   "description": "string"


}`

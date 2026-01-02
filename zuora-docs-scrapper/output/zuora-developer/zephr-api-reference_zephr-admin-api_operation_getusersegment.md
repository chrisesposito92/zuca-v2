---
title: "GetUserSegment"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getUserSegment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:36.521Z"
---

## Retrieve a user segment

Retrieves a user segment.

Security**ZephrHmacHttp**

Request

##### path Parameters

| segmentIdrequired | stringUnique User Segment Identifier |
| --- | --- |

Responses

200

OK

get/v4/users/segments/{segmentId}

Response samples

-   200

application/json

Copy

`{

-   "id": "string",

-   "label": "string",

-   "description": "string",

-   "active": true,

-   "archived": true


}`

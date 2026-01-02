---
title: "ListUserSegmentsforUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserSegmentsforUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:36.557Z"
---

## List user segments for a user

Lists all user segments for a given `userId`.

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifierExample: 3f589a2d-86ad-4b70-a5df-68dca75a3a21 |
| --- | --- |

Responses

200

OK

404

Not Found

get/v4/users/{userId}/segments

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "items": [

    -   {

        -   "id": "string",

        -   "label": "string",

        -   "description": "string",

        -   "active": true,

        -   "archived": true


        }


    ]


}`

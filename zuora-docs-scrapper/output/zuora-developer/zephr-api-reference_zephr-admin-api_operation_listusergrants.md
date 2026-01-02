---
title: "ListUserGrants"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserGrants/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:39.981Z"
---

## List user grants

Retrieves a list of user grants.

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifier |
| --- | --- |

##### query Parameters

| active | booleanWhether or not to include only active grantsExample: active=true |
| --- | --- |

Responses

200

Returns a list of grants for the user

401

Unauthorized

get/v3/users/{userId}/grants

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "grant_id": "5700aae1-461d-47d7-9a4c-d84412da7053",

        -   "user_id": "16b26d63-4ee9-4955-9d8b-f6625300d040",

        -   "entitlement_type": "bundle",

        -   "entitlement_id": "cae85210-c942-490f-a24a-614033c51e49",

        -   "expiry_state": "active",

        -   "startTime": "2024-02-01 00:00:00",

        -   "endTime": "2025-02-01 23:59:59",

        -   "created_at": "2024-02-01 00:00:00",

        -   "product_id": "gold"


        }


    ]


}`

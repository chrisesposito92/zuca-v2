---
title: "Put"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/tag/System-Resources/paths/~1v4~1resources~1%7BresourceId%7D~1content/put/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:31.560Z"
---

## Update system resource

Update system resource by provided resourceId

Security**ZephrHmacHttp**

Request

##### path Parameters

| resourceIdrequired | stringUnique Resource identifier |
| --- | --- |

Responses

200

OK

404

Cannot find system resource with the provided ID

put/v4/resources/{resourceId}/content

Response samples

-   200

application/json

Copy

`"{ Resource updated successfully resourceID }"`

---
title: "Get"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/tag/Health-Check/paths/~1v3~1healthchecks~1origin/get/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:32.416Z"
---

## Check availability of the origin

Sends a request to the origin site to verify availability.

Security**ZephrHmacHttp**

Request

##### cookie Parameters

| tenantIdrequired | string |
| --- | --- |

Responses

200

OK - Returned when origin is returning available

500

Internal Server Error

503

Service Unavailable - The V3 console doesn't handle a 401 response from this endpoint properly

get/v3/healthchecks/origin

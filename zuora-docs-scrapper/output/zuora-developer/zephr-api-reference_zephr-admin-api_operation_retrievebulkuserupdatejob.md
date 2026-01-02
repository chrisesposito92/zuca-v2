---
title: "RetrieveBulkUserUpdateJob"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/retrieveBulkUserUpdateJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:35.920Z"
---

## Retrieves a bulk user update job

Retrieves the status of a bulk user update job.

Security**ZephrHmacHttp**

Request

##### path Parameters

| job_idrequired | stringId of the job. |
| --- | --- |

Responses

200

OK

404

Not Found

get/v4/user-updates/{job\_id}

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "jobId": "string",

-   "status": "string",

-   "jobDate": "string",

-   "succeeded": 0,

-   "errors": 0,

-   "total": 0,

-   "details": { }


}`

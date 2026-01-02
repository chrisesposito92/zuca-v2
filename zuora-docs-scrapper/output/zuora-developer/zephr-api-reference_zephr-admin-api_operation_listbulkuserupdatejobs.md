---
title: "ListBulkUserUpdateJobs"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listBulkUserUpdateJobs/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:36.345Z"
---

## List all bulk user update jobs

Lists all bulk user update jobs.

Security**ZephrHmacHttp**

Responses

200

OK

404

Not Found

get/v4/user-updates

Response samples

-   200

application/json

Copy

Expand allCollapse all

`[

-   {

    -   "jobId": "string",

    -   "status": "string",

    -   "jobDate": "string",

    -   "succeeded": 0,

    -   "errors": 0,

    -   "total": 0


    }


]`

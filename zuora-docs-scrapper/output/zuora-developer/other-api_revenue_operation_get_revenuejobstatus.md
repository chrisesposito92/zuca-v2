---
title: "GET RevenueJobStatus"
url: "https://developer.zuora.com/other-api/revenue/operation/GET_RevenueJobStatus/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:59.820Z"
---

## Get the job status

Retrieves the status of a submitted job in Zuora Revenue.

Request

##### path Parameters

| jobIdrequired | integerThe ID of the job. |
| --- | --- |
| orgIdrequired | integerThe ID of the organization that is specified when the job is submitted. |

Responses

200

The job status is returned.

400

The input parameter is invalid.

get/api/integration/v1/{orgId}/jobs/{jobId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://yourhost/api/integration/v1/{orgId}/jobs/{jobId}'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "data": {

    -   "actual_start_date": "string",

    -   "crtd_by": "string",

    -   "crtd_dt": "string",

    -   "error_message": "string",

    -   "id": 0,

    -   "sec_atr_val": 0,

    -   "status": "string",

    -   "updt_dt": "string"


    },

-   "success": true


}`

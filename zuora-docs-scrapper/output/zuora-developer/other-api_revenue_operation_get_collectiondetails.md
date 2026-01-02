---
title: "GET CollectionDetails"
url: "https://developer.zuora.com/other-api/revenue/operation/GET_CollectionDetails/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:12.395Z"
---

## Get data collection job details

Get the status of the data collection job.

Request

##### path Parameters

| job_idrequired | integerThe ID of the data collection job that you want to query. This is the ID that is returned when you submitted the data collection job. |
| --- | --- |

Responses

200

The request is submitted successfully.

401

The provided authentication token has expired. Send the Authentication request again to get a new token.

403

You are not authorized to access this endpoint. Please contact Zuora Revenue Support.

get/api/integration/v1/job/collection/template/{job\_id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://yourhost/api/integration/v1/job/collection/template/{job\_id}'

Response samples

-   200

application/json; charset=utf-8

Copy

Expand allCollapse all

`{

-   "data": {

    -   "actual_start_date": "string",

    -   "crtd_by": "string",

    -   "crtd_dt": "string",

    -   "id": 0,

    -   "status": "Running",

    -   "updt_dt": "string"


    },

-   "success": true


}`

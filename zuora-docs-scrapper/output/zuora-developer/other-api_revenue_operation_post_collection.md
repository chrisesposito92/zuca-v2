---
title: "POST Collection"
url: "https://developer.zuora.com/other-api/revenue/operation/POST_Collection/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:19.033Z"
---

## Submit data collection job

Submit a data collection job based on the specified RC template.

After the data collection job is submitted, the following validations are applied:

-   The specified RC template name must be valid.
-   For multi-organization tenants, the the organization ID is required and must be valid.
-   If there are more than 2 data collection jobs in Running/Pending/Incompatible status for the specified organization, the API request will be rejected with error message returned.

Request

##### Request Body schema: application/json; charset=utf-8
required

| rc_template_name | stringName of the RC template that is defined in Zuora Revenue (Policies > RC Grouping Template). |
| --- | --- |
| org_id | integerDefault: 0The organization ID that can be found in Zuora Revenue (Setups > Application > Organization). This field is required only for multi-organization tenants. |

Responses

200

The request is submitted successfully and the job ID is returned. You can use the returned ID to query the job status later.

401

The provided authentication token is invalid or the token has expired. Send the Authentication request again to get a new token.

403

You are not authorized to access this endpoint. Please contact Zuora Revenue Support.

post/api/integration/v1/job/collection/template

Request samples

-   Payload
-   cURL

application/json; charset=utf-8

Copy

`{

-   "rc_template_name": "string",

-   "org_id": 0


}`

Response samples

-   200

application/json; charset=utf-8

Copy

`{

-   "message": "string",

-   "success": true


}`

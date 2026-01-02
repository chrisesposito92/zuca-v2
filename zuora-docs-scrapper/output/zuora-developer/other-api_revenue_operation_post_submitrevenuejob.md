---
title: "POST SubmitRevenueJob"
url: "https://developer.zuora.com/other-api/revenue/operation/POST_SubmitRevenueJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:59.084Z"
---

## Submit a program with specified parameters

Submits a program in Zuora Revenue and returns the job ID.

Request

##### path Parameters

| programIdrequired | integerThe ID of the program that is to be submitted in Zuora Revenue. You can get the program ID by using the "Get list of available programs and program parameters" operation. |
| --- | --- |
| orgIdrequired | integerThe ID of the organization for which the program is to be submitted. You can get the organization ID by using the "Get list of available organizations" operation. |

##### Request Body schema: application/json; charset=utf-8
required

An array that contains the parameter values to be used for the program. For each parameter, you need to specify the parameter ID, sequence, and desired value. You can get the parameter name, ID, and sequence by using the "Get list of available programs and program parameters" operation.

| parameters | Array of objects (ParameterList) |
| --- | --- |

Responses

200

The job status is returned with the job ID.

400

The specified program is not supported.

403

The specified organization ID does not match the organization assigned to the current user role.

post/api/integration/v1/{orgId}/programs/{programId}/submit

Request samples

-   Payload
-   cURL

application/json; charset=utf-8

Copy

Expand allCollapse all

`{

-   "parameters": [

    -   {

        -   "parameter_id": 1002,

        -   "sequence": 1,

        -   "parameter_value": "string"


        }


    ]


}`

Response samples

-   200
-   400
-   403

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

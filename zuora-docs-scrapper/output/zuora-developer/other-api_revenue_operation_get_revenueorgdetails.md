---
title: "GET RevenueOrgDetails"
url: "https://developer.zuora.com/other-api/revenue/operation/GET_RevenueOrgDetails/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:58.594Z"
---

## Get list of available organizations

Retrieves the list of organizations that are set up in Zuora Revenue.

Responses

200

A list of available organizations is returned.

400

The input parameter is invalid.

get/api/integration/v1/revenue-orgs

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://yourhost/api/integration/v1/revenue-orgs

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "program_name": "string",

        -   "program_id": "string",

        -   "parameters": [

            -   {

                -   "id": 0,

                -   "mandatory": "string",

                -   "sequence": "string",

                -   "name": "string",

                -   "type": "string"


                }


            ]


        }


    ]


}`

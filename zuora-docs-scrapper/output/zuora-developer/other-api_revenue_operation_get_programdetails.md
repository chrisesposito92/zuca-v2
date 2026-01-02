---
title: "GET ProgramDetails"
url: "https://developer.zuora.com/other-api/revenue/operation/GET_ProgramDetails/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:58.992Z"
---

## Get list of available programs and program parameters

Retrieves a list of programs that can be started with Revenue APIs and the program parameters that you can specify.

Responses

200

A list of available programs is returned.

400

The input parameter is invalid.

get/api/integration/v1/programs

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://yourhost/api/integration/v1/programs

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

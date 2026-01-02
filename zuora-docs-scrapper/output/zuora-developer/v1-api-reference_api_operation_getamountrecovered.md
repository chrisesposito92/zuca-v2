---
title: "GetAmountRecovered"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getAmountRecovered/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.643Z"
---

## List the amount recovered metrics

Gets the Amount Recovered metrics, including the total amount recovered and the amount recovered over the last 30 days broken down by currency.

Security**basicAuth**

Responses

200

get/api/v1/metrics/amount\_recovered

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  https://payment-retry.apps.zuora.com/api/v1/metrics/amount\_recovered

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "currency": {

    -   "USD": {

        -   "total_amount": "77515.21",

        -   "last_30_days": "1100.01"


        },

    -   "EUR": {

        -   "total_amount": "337.19",

        -   "last_30_days": "17.17"


        },

    -   "CAD": {

        -   "total_amount": "123954.10",

        -   "last_30_days": "5132.87"


        }


    },

-   "success": true


}`

---
title: "GetDocumentSuccessRateByCustomerGroup"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getDocumentSuccessRateByCustomerGroup/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.792Z"
---

## List the document success rate metrics by customer group

Gets the Document Success Rate timeseries for each customer group over the past 6 months. The data of the current month will not be included. For example, if it is April 15th today, the data for April will not be included. Data for March and earlier will be shown.

Security**basicAuth**

Responses

200

get/api/v1/metrics/customer\_group\_over\_time

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  https://payment-retry.apps.zuora.com/api/v1/metrics/customer\_group\_over\_time

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "customer_groups": {

    -   "1": {

        -   "05_21": "17.53",

        -   "04_21": "13.21",

        -   "03_21": "14.92",

        -   "02_21": "8.99",

        -   "01_21": "34.25",

        -   "12_20": "12.30"


        },

    -   "2": {

        -   "05_21": "11.11",

        -   "04_21": "7.87",

        -   "03_21": "26.00",

        -   "02_21": "11.06",

        -   "01_21": "13.43",

        -   "12_20": "17.92"


        },

    -   "4": {

        -   "05_21": "11.13",

        -   "04_21": "9.17",

        -   "03_21": "17.20",

        -   "02_21": "19.06",

        -   "01_21": "12.43",

        -   "12_20": "15.92"


        }


    },

-   "success": true


}`

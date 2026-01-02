---
title: "GetCustomerGroupMetrics"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getCustomerGroupMetrics/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.731Z"
---

## List the customer group metrics

Gets the following metrics for each customer group that is in the active status:

-   Document Success Rate and trend
-   Retry Success Rate
-   Average Attempts

Security**basicAuth**

Responses

200

get/api/v1/metrics/customer\_group

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  https://payment-retry.apps.zuora.com/api/v1/metrics/customer\_group

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "customer_groups": [

    -   {

        -   "id": 1,

        -   "name": "batch22",

        -   "smart_retry": false,

        -   "document_success_rate": "17.17",

        -   "document_success_rate_trend": "up",

        -   "retry_success_rate": "21.76",

        -   "average_attempts": "4.11"


        },

    -   {

        -   "id": 2,

        -   "name": "Smart Retry",

        -   "smart_retry": true,

        -   "document_success_rate": "74.17",

        -   "document_success_rate_trend": "down",

        -   "retry_success_rate": "81.21",

        -   "average_attempts": "1.32"


        },

    -   {

        -   "id": 4,

        -   "name": "All Remaining Customers",

        -   "smart_retry": false,

        -   "document_success_rate": "16.35",

        -   "document_success_rate_trend": "up",

        -   "retry_success_rate": "15.21",

        -   "average_attempts": "3.32"


        }


    ],

-   "success": true


}`

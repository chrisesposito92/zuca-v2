---
title: "GetBaselineMetrics"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getBaselineMetrics/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:05:08.944Z"
---

## List the baseline metrics

Gets baseline metrics for Configurable Payment Retry, including Retry Success Rate and trend, Document Success Rate and trend, and Average Days Outstanding and trend. See Response Schema for detailed descriptions of the metrics.

Security**basicAuth**

Responses

200

get/api/v1/metrics/baseline

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  \-u <username\>:<password\> \\
  https://payment-retry.apps.zuora.com/api/v1/metrics/baseline

Response samples

-   200

application/json

Copy

`{

-   "retry_success_rate": "11.90",

-   "retry_success_rate_trend": "down",

-   "document_success_rate": "13.54",

-   "document_success_rate_trend": "neutral",

-   "average_days_outstanding": "4.76",

-   "average_days_outstanding_trend": "up",

-   "success": true


}`

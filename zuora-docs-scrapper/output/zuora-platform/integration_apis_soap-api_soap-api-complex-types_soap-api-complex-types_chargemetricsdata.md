---
title: "ChargeMetricsData"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/chargemetricsdata"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:08.616Z"
---

# ChargeMetricsData

The ChargeMetricsData object is used to pass complex data to amend() and subscribe() calls.

## Supported calls

You can use this object with the following calls:

-   [amend()](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend)

-   [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe)


## Field descriptions

All field names are case sensitive

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| ChargeNumber | No | String | The charge number of the rate plan charge being amended. |
| DMRR | No | Decimal | Delta in monthly recurring revenue between the original MRR and the latest MRR.Only returned by the amend calls. |
| DTCV | No | Decimal | Delta in total contract value between the original TCV and the latest TCV.Only returned by the amend calls. |
| MRR | No | Decimal | Monthly recurring revenue.Only returned by the subscribe calls. |
| OriginalId | No | zns:ID | The origin rate plan charge ID. Only available for update subscription calls.Only returned by the amend calls.​ |
| OriginalRatePlanId | No | zns:ID | The original rate plan ID. Only available for update subscription calls.Only returned by the amend calls.​ |
| ProductRatePlanChargeId | No | zns:ID | The product rate plan charge ID. |
| ProductRatePlanId | No | zns:ID | The product rate plan ID. |
| TCV | No | decimal | Total contract value.Only returned by the subscribe calls. |

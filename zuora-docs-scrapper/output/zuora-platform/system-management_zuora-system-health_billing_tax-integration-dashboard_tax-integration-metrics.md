---
title: "Tax Integration metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/billing/tax-integration-dashboard/tax-integration-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:23.736Z"
---

# Tax Integration metrics

Descriptions of the Tax Integration metrics

The following table provides descriptions of the Tax Integration metrics.

| Metric | Description |
| --- | --- |
| Tax Integration Usage | The number of tax calls sent to a tax vendor by the configurable tax app within a specified time range, including successful and failed tax calls.When hovering over each time interval bar, you can view the breakdown data of that time range.Success Calls : The number of successful tax calls. Success means the tax calculation is successful on the configurable tax app side. The API request is sent to the vendor, a response is returned, and the response returns tax calculation results successfully.Error Calls : The number of failed tax calls. Error means the tax calculation is failed on the configurable tax app side. |
| Tax Integration Errors | The number of failed tax calls within a specified time range. Error means the tax calculation is failed on the configurable tax app side.When hovering over each time interval bar, you can view the breakdown data of that time range. |
| Tax Integration Performance | Tax call handling time for a given vendor within a specified time range. Tax call handling time means the sum of the request time and the response time of a tax call.P95 : 95th percentile of the response time dataP90 : 90th percentile of the response time dataP50 : 50th percentile of the response time dataWhen hovering over each time interval point, you can view the breakdown data of that time range.Average Tax Transaction Duration : The total handling time divided by the total number of tax calls. For example, during the 24 hours from 3 p.m., 2022–01-15 to 3 p.m., 2022-01-15, a total of 1,000 tax calls (900 success calls and 100 error calls) were sent to Vertex, and the total handling time was 5 minutes. The Average Tax Transaction Duration for that selected time range was 5/1,000 minutes (300 milliseconds). |

Note that you can configure notifications based on the Tax Integration Errors metrics. For more information, see Standard events for Zuora Central Platform .

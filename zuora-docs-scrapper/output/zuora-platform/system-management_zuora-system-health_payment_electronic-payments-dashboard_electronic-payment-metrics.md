---
title: "Electronic payment metrics"
url: "https://docs.zuora.com/en/zuora-platform/system-management/zuora-system-health/payment/electronic-payments-dashboard/electronic-payment-metrics"
product: "zuora-platform"
scraped_at: "2025-12-24T05:09:46.645Z"
---

# Electronic payment metrics

Definitions of the Electronic Payment metrics

The following table provides definitions of the Electronic Payment metrics.

| Metric | Description |
| --- | --- |
| Electronic Payment Usage | All electronic payments that are processed within a specified time range.You can view the numbers of processed payments and failed payments by payment gateway. |
| Electronic Payment Failure | All the failed electronic payments within a specified time range.The following filtering options are available:Time RangePayment GatewayPayment MethodResponse CodeCurrencyThe following details of the errors are available:Payment NumberPayment Gateway TypePayment MethodGateway Response CodeAmountCurrencyGateway Response MessageSource TypePayment Run Source IDRecommended Action |
| Electronic Payment Performance | The time (maximum, minimum, and mean) between when a payment is created to when the payment status turns to Processed or Error . |

Use the Summary pane to get an overview of the data. The Summary pane displays a summary of the selected data. For example, on the Overview tab, the Summary pane displays the following metrics of the selected electronic payments:

-   Total number of the processed payments

-   Total number of the failed payments

-   Numbers of the processed and failed payments by payment gateway


Note that you can configure notifications based on the Electronic Payment Failure metrics. For more information, see [Standard events for Zuora Central Platform](/zuora-platform/extensibility/events-and-notifications/standard-events/standard-events-for-zuora-platform).

---
title: "Error: 504 Gateway Timeout"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-considerations-and-performance/orders-api-troubleshoot/error-504-gateway-timeout"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:44.340Z"
---

# Error: 504 Gateway Timeout

Error 504 Gateway Timeout occurs when the server doesn't receive a timely response. To mitigate, reduce order actions or use asynchronous API calls.

Error 504 Gateway Timeout indicates that the gateway or proxy server is unable to receive a timely response, which is key to completing the request. The request will successfully be processed once there is no other error.

The Orders API timeout limit is 120 seconds. If there are many charge segments or order actions in the subscription you need to create or change, it may take more than 120 seconds to process the order. See Orders Performance Guidance .

1.  Reducing the number of order actions can help reduce the size of a single order.
2.  In the case where a normal Create an order API call times out, use the Create an order asynchronously API instead.
3.  If your organization does not rely on the Order ELP and Order TCB metrics, you can disable the Calculate Tax for TCB and ELP Metrics setting so that the Tax field on the Order TCB and Order ELP objects will not be calculated, which will also reduce the Order UI response time.
4.  The Order Item and Order ELP metrics have been deprecated as of Zuora Billing Release 284. See Order Item Data Source and Order Elp Data Source . If your organization is not actively using the Order Item or Order ELP metrics, we recommend disabling these two metrics. We recommend disabling them in your Sandbox tenant first prior to disabling them in your Production environment. Note that disabling the order item and order ELP metrics will not impact the remaining order metrics. To deprecate the Order item and Order ELP metrics, contact Zuora Global Support .

Submit a request at Zuora Global Support if you have any questions.

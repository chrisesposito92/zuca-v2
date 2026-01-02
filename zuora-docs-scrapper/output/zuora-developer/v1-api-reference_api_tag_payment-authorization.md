---
title: "Payment Authorization"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Payment-Authorization/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:13.228Z"
---

# Payment Authorization

The Delayed Capture feature allows you to authorize the availability of funds for a transaction but delay the capture of funds until a later time.

You can use the [Create authorization](https://developer.zuora.com/api-references/api/operation/POST_CreateAuthorization/) operation to authorize a payment amount before capturing the payment. Subsequently, you can use [Create a payment](https://developer.zuora.com/api-references/api/operation/POST_CreatePayment) or [Create an order](https://developer.zuora.com/api-references/api/operation/POST_Order/) to capture the authorized funds, or use [Cancel authorization](https://developer.zuora.com/api-references/api/operation/POST_CancelAuthorization) to cancel the authorization.

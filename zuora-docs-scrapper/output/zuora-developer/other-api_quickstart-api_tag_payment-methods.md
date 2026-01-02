---
title: "Payment Methods"
url: "https://developer.zuora.com/other-api/quickstart-api/tag/Payment-Methods/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:44:48.748Z"
---

# Payment Methods

Payment methods represent your customer's payment instruments. They can be used to collect payments or saved to Account objects to store instrument details for future payments.

**Important**: The `type` field in the request body schema of the [Create a payment method](https://developer.zuora.com/other-api/quickstart-api/operation/createPaymentMethod/) operation enumerates the supported payment methods. Not all payment gateways support all these payment method types. Check [Supported payment methods](https://knowledgecenter.zuora.com/Zuora_Payments/Zuora_Payments_overview/D_Supported_payment_methods) to check the supported payment methods for each gateway.

If you need to create payment methods outside the scope of this operaton, you have to use the [Create a payment method](https://developer.zuora.com/v1-api-reference/api/operation/POST_PaymentMethods/) operation of the v1 API instead of the Quickstart API. We do not plan to add additional payment methods to the Quickstart API. Any new payment methods will only be available through the v1 API and Zuora client libraries.

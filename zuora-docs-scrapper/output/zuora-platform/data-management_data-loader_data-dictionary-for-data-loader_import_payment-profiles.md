---
title: "Payment profiles"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/payment-profiles"
product: "zuora-platform"
scraped_at: "2026-02-20T17:37:24.082Z"
---

# Payment profiles

This reference document lists the fields in the Import Payment Profiles data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| subscriptionId | The ID of the subscription associated with the payment profile fields. | string <uuid> |
| paymentMethodId | The ID of the payment method that processes the payment. | string <uuid> |
| paymentGatewayId | The ID of the gateway instance that processes the payment. | string <uuid> |

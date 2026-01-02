---
title: "Custom Payment Method Types"
url: "https://developer.zuora.com/v1-api-reference/api/tag/Custom-Payment-Method-Types/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:24.918Z"
---

# Custom Payment Method Types

Open Payment Method (OPM) service is a framework developed by Zuora, which allows you to integrate your custom payment method to Zuora subscription, billing, and revenue management in a dynamic and flexible manner. With the support of the OPM service, you are able to define your custom payment method types and create custom payment methods of the defined types. The custom payment method of the defined type can only be used with the custom payment gateway that you set up through the Universal Payment Connector (UPC) service. It cannot be used with the Zuora out-of-box gateway integrations such as GoCardless, Stripe, etc.

You can define up to 20 custom payment method types for one tenant. Do not define your fields with the [Zuora-reserved fields](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods/C_Configure_and_manage_your_custom_payment_method_types_through_Zuora_REST_APIs#Zuora-reserved_fields).

See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for more information about the OPM and UPC services.

Note: You can only use the bearer token to access the "Custom Payment Method Types" API operations. Access with `apiAccessKeyId` and `apiSecretAccessKey` is not supported.

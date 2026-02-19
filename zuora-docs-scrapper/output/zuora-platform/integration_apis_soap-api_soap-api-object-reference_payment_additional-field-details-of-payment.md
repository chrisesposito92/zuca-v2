---
title: "Additional field details of Payment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/additional-field-details-of-payment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:44.390Z"
---

# Additional field details of Payment

Addition field details of the Payment object.

## GatewayOrderId

A merchant-specified natural key value that can be passed to the payment gateway when an electronic payment is created.

A gateway is an online service provider that connects an online shopping cart to a payment processor. Gateways check duplicates on the gateway order ID to ensure that the merchant didn't accidentally enter the same transaction twice. This ID can also be used to do reconciliation and tie the payment to a natural key in external systems. For example, a shopping cart order ID.

The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems.

Gateways usually do a uniqueness check on this value to prevent multiple submissions of the same transaction, such as when a customer clicks the Pay button twice during a single checkout process, inadvertently sending two identical orders to Zuora and the gateway. A uniqueness check prevents `DuplicateOrderID` exceptions.

If not provided, Zuora will default this value to the `PaymentNumber` .

## GatewayState

The status of the payment in the gateway. This field is automatically generated and can have one of the following values:

-   `NotSubmitted`

-   `Submitted`

-   `Settled`

-   `FailedToSettle`


The value of this field remains `NotSubmitted` , if Gateway Reconciliation is not enabled for the gateway.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `Payment` object is `PaymentId` .

## SoftDescriptor

A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv, and Verifi. Use this field in create() calls. Zuora passes this field to Verifi directly with no verification. In general, this field will be defaulted by the gateway. For Orbital, this field contains two fields separated by an asterisk: `SDMerchantName` and `SDProductionInfo` . For more information, contact your payment gateway.

## SoftDescriptorPhone

A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv, and Verifi. Use this field in create() calls. This field itself contains the field, `SDPhone` . Verifi and Orbital determine how to format this string. For more information, contact your payment gateway.

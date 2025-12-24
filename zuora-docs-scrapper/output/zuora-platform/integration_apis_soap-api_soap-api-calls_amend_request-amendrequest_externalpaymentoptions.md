---
title: "ExternalPaymentOptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest/externalpaymentoptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:33.877Z"
---

# ExternalPaymentOptions

Use the ExternalPaymentOptions container to create or change a subscription and mark its invoice as already paid.

You're essentially linking a payment that you've already received to an invoice. This feature is equivalent to using the web-based UI to process a manual payment.

An external payment occurs outside Zuora but must be recorded in Zuora to ensure that account balances and invoice balances are appropriately updated. An external payment can be any type, such as a credit card, debit card, ACH, check, wire transfer, bank transfer, Paypal, CCRef, and cash, but it's usually cash or a check.

## ExternalPaymentOptions fields

| Name | Required? | Description |
| --- | --- | --- |
| Amount | required | The amount of the payment. The value must be equal to the invoice's total balance.Type : decimalCharacter limi t:Version notes : WSDL 42.0+System-generated: noValues :a positive decimal valuePartial external payments and external overpayments are not supported. The Amount field value must equal the invoice's total balance. Otherwise the entire call will fail. |
| EffectiveDate | required | The date when the external payment was made. If you leave this field value empty, then Zuora provides the current system date and time.Type :date supported as of WSDL version 69+dateTime supported through WSDL version 68Character limi t: 29Version notes : WSDL 42.0+System-generated : yes, if nullValues : a valid date and time value |
| GatewayOrderId | optional | The ID of the gateway order, which is the merchant-specified natural key value.Type : stringCharacter limit : 255Version note s: WSDL 42.0+System-generated : noValues : a string of 255 characters or fewer |
| PaymentMethodId | required | The ID of the payment method. A payment method is the form of payment that a customer used for the external payment. The ID is the unique identifier for that particular payment method.Type : zns:IDCharacter limit : 32Version notes : WSDL 42.0+System-generated : noValues :a valid payment method ID |
| ReferenceId | optional | The ID returned by the bank or gateway that created the payment.Type : stringCharacter limit : 60Version notes : WSDL 42.0+System-generated : noValues: a string of 60 characters or fewer |

## EffectiveDate

While similarly named fields in other areas of the Zuora API refer to when the item takes effect, the EffectiveDate field in the ExternalPaymentOptions container is the date that the payment was made. For example, the customer makes a payment on 01 October 2012. You create the record of the payment on 07 October 2012. The EffectiveDate value is 01 October, not 07 October because that's when the money moved from the customer's account to the merchant's account. The CreatedDate field value is the value that reflects the 01 October date.

## GatewayOrderId

The ID of the gateway order, which is the merchant-specified natural key value. A gateway is an online service provider that connects a virtual terminal to a payment processor.

The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems.

Gateways can do a uniqueness check on this value as a means to prevent multiple submissions of the same transaction, such as when a customer clicks the Pay button twice during a single checkout process, inadvertently sending two identical orders to Zuora and the gateway. A uniqueness check prevents DuplicateOrderID exceptions.

---
title: "SubscribeRequest"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/subscriberequest"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:41.159Z"
---

# SubscribeRequest

Use the SubscribeRequest object with the subscribe() call to create one or more subscriptions.

## Field descriptions

All field names are case sensitive. The following table provides the fields in the order in which they are defined in the [Zuora WSDL](/zuora-platform/integration/apis/soap-api/zuora-wsdl). You must specify the fields in this order.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| Account | Yes | Object of type Account | This is the Account object containing the information for this particular subscription. It has all the information needed to create an account for a subscription. If you are creating the account with the subscribe() call, you will need to complete all required fields. If the account already exists, you only need to pass the ID field.Values: A valid account. |
| PaymentMethod | No | Object of type PaymentMethod | This is the object defining the payment details for the Account. The Account will be updated with this payment as the default payment method.Use this field if you are associating an electronic payment method with the account. A payment gateway must be enabled.Values: A valid electronic PaymentMethod. |
| BillToContact | Conditional | Object of type Contact | This is the object that contains the contact associated with this account in the Account's BillToId field.This field is required only if the account does not exist.Values: A valid contact for the account. |
| PreviewOptions | No | Object of type PreviewOptions | Only used if you want to call subscribe() with preview mode. After a call in preview mode is completed, the system will roll back the subscription and return only the temporary invoice data.Values: A valid PreviewOptions object. |
| SoldToContact | No | Object of type Contact | This is normally the same as the BillToContact field, though it can be different. If you do not specify SoldToContact field, it defaults to the information in BillToContact field.Values: A valid contact. |
| SubscribeOptions | No | Object of type SubscribeOptions | This optional object specifies parameters related to invoicing - whether to immediately generate an invoice and collect payment, and whether the invoice should cover all subscriptions or just this new subscription. In addition, starting with WSDL 47.1, this object can also specify an invoice target date.The default behavior is to invoice immediately for all the account's subscriptions, with the current date as the target date, and immediately collect payment if the account's AutoPay flag is true .Values: A valid SubscribeOptions object. |
| SubscriptionData | Yes | Object of type SubscriptionData | This object contains the information on the contract's dates and terms.Values: A valid SubscriptionData object. |

---
title: "Refund"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:54.274Z"
---

# Refund

A Refund object is used to create and query refunds.

A refund returns money to a customer - as opposed to a credit, which creates a customer credit balance that may be applied to reduce the amount owed to you. For instance, refunds are used when a customer cancels service and is no longer your customer. Refunds can also represent processed payments that are reversed, such as a chargeback or a direct debit payment reversal.

There are two types of refunds:

-   Electronic refunds: processed by Zuora via a payment gateway.

-   External refunds: indicate that the refund was processed outside of Zuora, say by a check, and the transaction must be recorded.


A RefundInvoicePayment object is created when you create a Refund object. This object ties the Refund object to the associated InvoicePayment object.

## Non-referenced refunds

The following fields are required to create a non-referenced refund:

-   AccountId

-   PaymentMethodId

-   TotalAmount

-   SourceType: Set to `CreditBalance`

-   Type: Set to `Electronic` or `External`


By definition, a non-referenced refund does not require a `PaymentId` (for example, the ID of the original payment).

A non-referenced refund can be issued to any payment method, including a credit card for Electronic refunds, on the customer's account, and it can use any payment gateway for which Zuora supports this type of transaction. See Canceling and Refunding Credit Balances for a list of supported payment gateways.

Non-referenced refunds are available only if you have enabled the Credit Balance feature. You must create a credit balance before you can create this type of refund.

## Supported calls

You can use this object in the following calls:

-   create()

-   query()

-   update()

-   delete()


Note:

A Refund create() call will return `Success` in the response along with the Refund ID regardless of the gateway response. When processing a refund the create() call refers to the successful creation of the Refund object. It is not an indicator that the payment gateway processed the refund successfully.

## Additional field details

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `Refund` object is `RefundId` .

## Code examples: Electronic refund create() call

<ns2:create> <ns2:zObjects xsi:type\="ns1:Refund"\> <ns1:Amount>5</ns1:Amount> <ns1:Comment>Refund for not applying discount.</ns1:Comment> <ns1:PaymentId>4028e69926c4da560126e8b1785c3b2a</ns1:PaymentId> <ns1:Type>Electronic</ns1:Type> </ns2:zObjects> </ns2:create>

## Code examples: Electronic refund create() response

<ns1:createResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>4028e6992745e8af012759c3deaf5459</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:createResponse>

Upon successful creation of an electronic refund, money is refunded to the customer through the payment gateway that generated the original Payment. Zuora creates a RefundInvoicePayment object automatically for this transaction.

## Code examples: Create a refund against multiple invoices using RefundInvoicePaymentData

This method requires WSDL 64 or higher.

<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Refund"\> <ns2:AccountId>4028924549bdb5e00149bdbc19770011</ns2:AccountId> <ns2:Amount>4</ns2:Amount> <ns2:PaymentId>4028924549bdb5e00149bdbf164d004d</ns2:PaymentId> <ns2:Type>Electronic</ns2:Type> <ns2:RefundInvoicePaymentData> <ns1:RefundInvoicePayment xsi:type\="ns2:RefundInvoicePayment"\> <ns2:RefundAmount>2</ns2:RefundAmount> <ns2:InvoiceId>4028924549bdb5e00149bdbed3da0038</ns2:InvoiceId> </ns1:RefundInvoicePayment> <ns1:RefundInvoicePayment xsi:type\="ns2:RefundInvoicePayment"\> <ns2:RefundAmount>2</ns2:RefundAmount> <ns2:InvoiceId>402881e849b885fe0149b892f90c007f</ns2:InvoiceId> </ns1:RefundInvoicePayment> </ns2:RefundInvoicePaymentData> </ns1:zObjects> </ns1:create>

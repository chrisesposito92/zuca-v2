---
title: "Payment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:14.275Z"
---

# Payment

The Payment object holds all of the information about an individual payment, including the payment amount and to which invoices the payment was applied to.

A payment is the money that customers send to pay for invoices related to their subscriptions. You can create the Payment object in a create() call and apply the payment to the customer's invoices and account.

There are two ways to create a payment:

-   Create payment using InvoiceId and InvoiceNumber

-   Create payment using InvoicePaymentData


## Supported calls

You can use this object with the following calls:

-   create()

-   delete()

-   query()

-   update()


Note:

You can't use the delete() call for the Payment object if your WSDL is version 30.0 or older.

## Walkthroughs and use cases

Here are some common ways to use this object:

-   Apply a payment to an invoice

-   Apply a payment to multiple invoices

-   Delete a payment

-   Change an existing payment

-   Apply an external payment to an invoice

-   Apply multiple payments to different invoices


## Code examples

## Create Payment Using InvoiceId and InvoiceNumber

To create a payment against a single invoice.

<ns1:create> <ns1:zObjects xsi:type\="ns2:Payment"\> <ns2:AccountId>2c92a0f94b07c36d014b178abac902f0</ns2:AccountId> <ns2:Amount>500</ns2:Amount> <ns2:AppliedCreditBalanceAmount>0</ns2:AppliedCreditBalanceAmount> <ns2:AppliedInvoiceAmount>500</ns2:AppliedInvoiceAmount> <ns2:EffectiveDate>2015-01-27T13:19:39</ns2:EffectiveDate> <ns2:InvoiceId>2c92a0944b07c492014b178be9ef7327</ns2:InvoiceId> <ns2:PaymentMethodId>2c92a0f94b07c36d014b178abae902f2</ns2:PaymentMethodId> <ns2:Status>Processed</ns2:Status> <ns2:Type>Electronic</ns2:Type> </ns1:zObjects> </ns1:create>

## Create Payment Using InvoicePaymentData

To create a payment against multiple invoices.

<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xsi:type\="ns2:Payment"\> <ns2:AccountId>402896ba500425ab01500429176c000f</ns2:AccountId> <ns2:Amount>200</ns2:Amount> <ns2:EffectiveDate>2015-09-25</ns2:EffectiveDate> <ns2:AppliedCreditBalanceAmount>0</ns2:AppliedCreditBalanceAmount> <ns2:InvoicePaymentData> <ns1:InvoicePayment xsi:type\="ns2:InvoicePayment"\> <ns2:Amount>100.0</ns2:Amount> <ns2:InvoiceId>402896ba500425ab0150042ab9440035</ns2:InvoiceId> <ns2:RefundAmount>0</ns2:RefundAmount> </ns1:InvoicePayment> <ns1:InvoicePayment xsi:type\="ns2:InvoicePayment"\> <ns2:Amount>100.0</ns2:Amount> <ns2:InvoiceId>402896ba500425ab0150042c8d9b0053</ns2:InvoiceId> <ns2:RefundAmount>0</ns2:RefundAmount> </ns1:InvoicePayment> </ns2:InvoicePaymentData> <ns2:PaymentMethodId>402881e522cf4f9b0122cf5dc3ef003d</ns2:PaymentMethodId> <ns2:Status>Processed</ns2:Status> <ns2:Type>External</ns2:Type> </ns1:zObjects> </ns1:create>

## Create() call response

All Payment create() calls return a Success response and a Payment Id. The Success response refers to the creation of the payment object, not to the success or failure of the payment request.

The following create request and the response demonstrate this point.

Create request

<ns1:create> <ns1:zObjects xsi:type\="ns2:Payment"\> <ns2:AccountId>2c92c0f84088c66101409de647c25608</ns2:AccountId> <ns2:Amount>530.00</ns2:Amount> <ns2:AppliedCreditBalanceAmount>530</ns2:AppliedCreditBalanceAmount> <ns2:EffectiveDate>2013-08-20T11:07:55-07:00</ns2:EffectiveDate> <ns2:PaymentMethodId>2c92c0f84088c66101409de647c7560a</ns2:PaymentMethodId> <ns2:Status>Processed</ns2:Status> <ns2:Type>Electronic</ns2:Type> </ns1:zObjects> </ns1:create>

Response

The request response indicates that the Payment object is successfully created, even if the Payment Status is Error. Furthermore, the response does not provide the gateway response.

<ns1:result> <ns1:Id>2c92c0f94088cd3c01409df413294e94</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result>

To see the gateway response to the request, use the payment ID to query the payment object that was created and review the Status, GatewayResponse, and GatewayResponseCode attributes.

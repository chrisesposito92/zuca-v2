---
title: "Apply payments to an invoice: original method"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/apply-payments-to-an-invoice/apply-payments-to-an-invoice-original-method"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:29.853Z"
---

# Apply payments to an invoice: original method

Learn how to apply payments to an invoice using the original method.

This method is supported in API versions 21.0 and earlier, or when applying payment to multiple invoices.

This use case uses several objects to create and apply a payment to an invoice.

To create and apply an electronic payment to an invoice:

1.  Query for the invoice by AccountId.

    Execute the following query to determine the invoice to which you want to apply a payment:

    select Id,Balance from Invoice where AccountId = 'someAccountIdAccountId' and Balance > 0

    The following is an example of a SOAP call envelope payload for this query:

    <ns1:query> <ns1:queryString>select Id,Balance from Invoice where AccountId = '4028e485225d1d5f0122662fd6b249c8' and Balance &gt; 0</ns1:queryString> </ns1:query>

2.  Create a new payment.

    Set the following fields to create a new Payment :

    -   Specify the AccountId.

    -   Specify the payment Amount.

    -   Set the EffectiveDate to the desired dateTime when this payment was made.

    -   Specify the PaymentMethodId. This should equal to either the actual PaymentMethod ID for the account or the placeholder PaymentMethod ID for cash, check, or other payment method.

    -   Set the Type for this payment: External (cash, check, other) or Electronic (credit card, PayPal, or ACH).

    -   Set the Status to Draft.


    The following is an example of a SOAP call envelope payload that will create the payment:

    <ns1:create> <ns1:zObjects xsi:type\="ns2:Payment"\> <ns2:AccountId>4028e485225d1d5f0122662fd6b249c8</ns2:AccountId> <ns2:Amount>104.97</ns2:Amount> <ns2:EffectiveDate>2009-11-09</ns2:EffectiveDate> <ns2:PaymentMethodId>9f9fde6aa678102bb59000188b619ff8</ns2:PaymentMethodId> <ns2:Status>Draft</ns2:Status> <ns2:Type>Electronic</ns2:Type> </ns1:zObjects> </ns1:create>

3.  Create a new [InvoicePayment](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicepayment) object.

    Set the following fields:

    -   Set the Amount. This value must be greater than 0, but less than the remaining, unallocated amount of the Payment. The entire Payment amount must be allocated to an one or more invoice before the Payment can be processed.

    -   Set the InvoiceId to the Invoice Id that you retrieved when you queried for the invoice by AccountId.

    -   Set the PaymentId to the ID returned when you created the payment.


    You can create multiple InvoicePayment objects per payment. For example, if you have two invoices due, one for $100 and one for $75, you can create a $175 payment in and then create two InvoicePayment objects: One for $100 and applied to first invoice, and one for $75 and applied to second invoice.

    The SOAP call envelope payload should look like the following:

    <ns1:create> <ns1:zObjects xsi:type\="ns2:InvoicePayment"\> <ns2:Amount>104.97</ns2:Amount> <ns2:InvoiceId>8a8ae4b122f5e34d0122f6d269610760</ns2:InvoiceId> <ns2:PaymentId>4028e4861dc1ff0e011ddc1554bf1e9d</ns2:PaymentId> </ns1:zObjects> </ns1:create>

4.  Update the payment.

    Set the following fields to update the payment:

    -   Specify the ID of the payment.

    -   Set the Status of the payment to Processed.


    For electronic payments, the payment will be processed by the payment gateway during the update() call.

    The SOAP call envelope payload should look like the following:

    <ns1:update> <ns1:zObjects xsi:type\="ns2:Payment"\> <ns2:Id>4028e4861dc1ff0e011ddc1554bf1e9d</ns2:Id> <ns2:Status>Processed</ns2:Status> </ns1:zObjects> </ns1:update>

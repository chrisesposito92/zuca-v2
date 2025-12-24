---
title: "Apply payments to an invoice: streamlined method"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/apply-payments-to-an-invoice/apply-payments-to-an-invoice-streamlined-method"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:27.104Z"
---

# Apply payments to an invoice: streamlined method

Learn how to apply payments to an invoice using the streamlined method.

This method is supported in version 22.0+ of API, and can be used when applying a payment to single invoice.

To create and apply an electronic payment to an invoice:

1.  Determine the invoice that you want to apply payment to. Execute the following query to determine the invoice to which you want to apply a payment:

    select Id,Balance from Invoice where AccountId = 'someAccountId' and Balance > 0

    The following is an example of a SOAP call envelope payload for this query:

    <ns1:query> <ns1:queryString>select Id,Balance from Invoice where AccountId = '4028e485225d1d5f0122662fd6b249c8' and Balance &gt; 0</ns1:queryString> </ns1:query>

2.  Create a new payment.

    Set the following fields to create a new payment:

    -   Specify the `AccountId`.

    -   Specify `Amount`, which indicates the amount of the payment. If Invoice Settlement is enabled, this field is required.

    -   Specify the `InvoiceId`, which is the single Invoice to which apply the payment.

    -   Specify `AppliedInvoiceAmount`, the amount of the payment that should be applied to the invoice. This can be NULL if `AppliedCreditBalanceAmount` is not NULL.

    -   Specify `AppliedCreditBalanceAmount`, the amount of the payment that should be added to the account credit balance. Use this if you are creating a payment that pays an invoice and also applies credit, which is useful for when a customer overpays. This can be NULL if AppliedInvoiceAmount is not NULL.

    -   Set the `EffectiveDate` to the desired dateTime when this payment was made.

    -   Specify the `PaymentMethodId`. This should equal to either the actual PaymentMethod ID for the account or the placeholder PaymentMethod ID for cash, check, or other payment method.

    -   Set the `Type` for this payment: `External` (cash, check, other) or `Electronic` (credit card, PayPal, or ACH).

    -   Set the `Status` to `Processed`.


    The following is an example of a SOAP call envelope payload that will create the payment, create the InvoicePayment, and if the payment is electronic, process it through the gateway.

    <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Payment"\> <ns2:AccountId>4028e485225d1d5f0122662fd6b249c8</ns2:AccountId>\[Required\] <ns2:Amount>120</ns2:Amount>\[if invoice settlement is enabled, it's required\] <ns2:AppliedInvoiceAmount>100</ns2:AppliedInvoiceAmount>\[if invoiceId is not null,it's required\] <ns2:AppliedCreditBalanceAmount>20.00</ns2:AppliedCreditBalanceAmount>\[if invoice id is null,it's required\] <ns2:EffectiveDate>2009-11-09</ns2:EffectiveDate>\[Required\] <ns2:InvoiceId>4028e485225d1d5f012266s2fd6bf49f8</ns2:InvoiceId>\[if creditbalanceamount is null,it's required\] <ns2:PaymentMethodId>9f9fde6aa678102bb59000188b619ff8</ns2:PaymentMethodId>\[Required\] <ns2:Status>Processed</ns2:Status>\[the status must be Processed only\] <ns2:Type>Electronic</ns2:Type>\[Required\] </ns1:zObjects> </ns1:create>

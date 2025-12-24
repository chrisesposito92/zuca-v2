---
title: "Handle overpayment of an invoice"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/handle-overpayments/handle-overpayment-of-an-invoice"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:34.926Z"
---

# Handle overpayment of an invoice

Learn how to handle the overpayment of an invoice.

To accept an overpayment of an invoice, the following actions take place in Zuora:

-   Process a payment

-   Apply a payment against an invoice

-   Store the remaining funds on the account's credit balance


You can use a single API call to accept an overpayment of an invoice:

1.  Create a payment.
2.  Specify ID of the invoice to which payment will be applied.
3.  Specify the amount of the payment to apply to the invoice.
4.  Specify the amount of the payment that to apply to the customer's credit balance.
5.  Specify other required payment fields, such as the ID of the PaymentMethod, the payment type (electronic vs. external), and the process date.

SOAP Example:

<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Payment"\> <ns2:AccountId>4028e485225d1d5f0122662fd6b249c8</ns2:AccountId> <ns2:InvoiceId>4028e485225d1d5f012266s2fd6bf49f8</ns2:AccountId> <ns2:AppliedInvoiceAmount>100</ns2:AppliedInvoiceAmount> <ns2:AppliedCreditBalanceAmount>50</ns2:AppliedCreditBalanceAmount> <ns2:EffectiveDate>2009-11-09</ns2:EffectiveDate> <ns2:PaymentMethodId>9f9fde6aa678102bb59000188b619ff8</ns2:PaymentMethodId> <ns2:Status>Processed</ns2:Status> <ns2:Type>Electronic</ns2:Type> </ns1:zObjects> </ns1:create>

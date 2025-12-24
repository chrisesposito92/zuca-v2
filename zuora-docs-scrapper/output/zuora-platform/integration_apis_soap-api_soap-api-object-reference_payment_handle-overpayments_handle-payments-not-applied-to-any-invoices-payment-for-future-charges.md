---
title: "Handle payments not applied to any invoices (payment for future charges)"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/handle-overpayments/handle-payments-not-applied-to-any-invoices-payment-for-future-charges"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:37.381Z"
---

# Handle payments not applied to any invoices (payment for future charges)

Learn how to handle payments for future charges.

To accept an overpayment not applied to an invoice, the following actions take place in Zuora:

-   Process a payment

-   Store the entire amount on the account's credit balance


You can use a single API call to accept an overpayment:

1.  Create a payment.
2.  Specify the amount of the payment that is to be applied to the customer's credit balance.
3.  Specify other required payment fields, such as the ID of the PaymentMethod, the payment type (electronic vs. external), and the process date.

<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Payment"\> <ns2:AccountId>4028e485225d1d5f0122662fd6b249c8</ns2:AccountId> <ns2:AppliedCreditBalanceAmount>50</ns2:AppliedCreditBalanceAmount> <ns2:EffectiveDate>2009-11-09</ns2:EffectiveDate> <ns2:PaymentMethodId>9f9fde6aa678102bb59000188b619ff8</ns2:PaymentMethodId> <ns2:Status>Processed</ns2:Status> <ns2:Type>Electronic</ns2:Type> </ns1:zObjects> </ns1:create>

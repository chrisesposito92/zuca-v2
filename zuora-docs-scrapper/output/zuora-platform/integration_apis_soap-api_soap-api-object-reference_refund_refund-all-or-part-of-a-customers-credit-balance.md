---
title: "Refund all or part of a customer's credit balance"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund/refund-all-or-part-of-a-customers-credit-balance"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:59.264Z"
---

# Refund all or part of a customer's credit balance

Learn how to refund a customer's credit balance.

Refunding a credit balance gives money back to a customer from the customer's credit balance. This requires that the customer must have a credit balance.

When refunding money from a customer's credit balance:

-   A refund record is created

-   Funds are given to the customer

-   The customer's credit balance is lowered by the amount of the refund


1.  Create a [Refund](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refund) object.
2.  Specify the Account ID of the customer.
3.  Specify the amount you wish to refund.
4.  Set the SourceType to `CreditBalance` .
5.  Set the Type to either `External` or `Electronic`.
    | Option | Description |
    | --- | --- |
    | External | You can optionally specify a payment method, or just use the default. |
    | Electronic | You must specify the ID of a payment method. |


External refund example

<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Refund"\> <ns2:AccountId>402892c72b9e3319012b9e34b88e0001</ns2:AccountId> <ns2:Amount>10</ns2:Amount> <ns2:SourceType>CreditBalance</ns2:SourceType> <ns2:Type>External</ns2:Type> <ns2:MethodType>Check</ns2:MethodType> </ns1:zObjects> </ns1:create>

Electronic refund example

<ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xsi:type\="ns2:Refund" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:AccountId>2c92c0f83ddb61af013ddc5736b1025a</ns2:AccountId> <ns2:Amount>10</ns2:Amount> <ns2:SourceType>CreditBalance</ns2:SourceType> <ns2:Type>Electronic</ns2:Type> <ns2:PaymentMethodID>2c92c0f83dfa5201013dfa6656ff2b8b</ns2:PaymentMethodID> </ns1:zObjects> </ns1:create>

---
title: "Example: Create a customer account"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account/example-create-a-customer-account"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:48.098Z"
---

# Example: Create a customer account

Provides an example of how to create a customer account.

To create a new active account, you will be using a number of different objects. The following method uses the create() call to create an account, a contact, and a payment method.

## Step 1: Use the create call to create an instance of Account

Set the following fields:

1.  Specify the AccountNumber. This value is different than the ID and is typically an external business identifier for the account. This value cannot begin with the Account Number prefix configured in the Zuora tenant.
2.  Set `AutoPay` to `false`. If `AutoPay` is to be enabled, enter an electronic "PaymentMethod" first and its ID submitted as the `DefaultPaymentMethod` for this account.
3.  Set the `Batch` to one of the 20 pre-set values (from Batch1 to Batch20).
4.  Set the `BillCycleDay`. This value should be one of the bill cycle days configured in the Zuora tenant.
5.  Specify the Currency for the account. This must be one of the currencies that has been configured for the Zuora tenant.
6.  Set the Name for the account.
7.  Set the `PaymentTerm` to `Due Upon Receipt`. The value should reflect a valid payment term configured in the Zuora tenant.
8.  Set the `Status` to `Draft`.

See the "create()" call for more information about using this call.

SOAP example

The SOAP call envelope payload should look like this:

<ns1:create> <ns1:zObjects xsi:type\="ns2:Account"\> <ns2:AccountNumber>123</ns2:AccountNumber> <ns2:AutoPay>false</ns2:AutoPay> <ns2:Batch>Batch1</ns2:Batch> <ns2:BillCycleDay>1</ns2:BillCycleDay> <ns2:Currency>USD</ns2:Currency> <ns2:Name>ACME</ns2:Name> <ns2:PaymentTerm>Due Upon Receipt</ns2:PaymentTerm> <ns2:Status>Draft</ns2:Status> </ns1:zObjects> </ns1:create>

## Step 2: Create a contact for the account

Set the following fields to create a contact:

-   Specify the AccountId.

-   Set the Country. If the country is United States, also set the State. See [Country, State, and Currency Codes](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/zuora_basics/manage_country_state_and_province_codes/country_state_and_province_codes.dita) for more information.

-   Set the FirstName and LastName.

-   Set the WorkEmail.


SOAP example

The SOAP call envelope payload should look like this:

<ns1:create> <ns1:zObjects xsi:type\="ns2:Contact"\> <ns2:AccountId>4028e48520410c9a0120413522b857de</ns2:AccountId> <ns2:Country>United States</ns2:Country> <ns2:FirstName>Bill</ns2:FirstName> <ns2:LastName>To</ns2:LastName> <ns2:State>California</ns2:State> <ns2:WorkEmail>bill.to@zuora.com</ns2:WorkEmail> </ns1:zObjects> </ns1:create>

## Step 3: Create a PaymentMethod for the Account

Set the following fields to create a PaymentMethod :

-   Specify the AccountId.

-   Set the payment method information. For a credit card, this information includes the holder name, card type, card number, expiration month/year, address, city, and country.

-   Set the Type to the PaymentMethod type, such as CreditCard for a credit card.


SOAP Example

The SOAP call envelope payload should look like this:

<ns1:create> <ns1:zObjects xsi:type\="ns2:PaymentMethod"\> <ns2:AccountId>4028e48520410c9a0120413522b857de</ns2:AccountId> <ns2:CreditCardAddress1>123 Lane St.</ns2:CreditCardAddress1> <ns2:CreditCardCity>San Francisco</ns2:CreditCardCity> <ns2:CreditCardCountry>United States</ns2:CreditCardCountry> <ns2:CreditCardExpirationMonth>9</ns2:CreditCardExpirationMonth> <ns2:CreditCardExpirationYear>2018</ns2:CreditCardExpirationYear> <ns2:CreditCardHolderName>Bill To</ns2:CreditCardHolderName> <ns2:CreditCardNumber>4111 1111 1111 1111</ns2:CreditCardNumber> <ns2:CreditCardPostalCode>95611</ns2:CreditCardPostalCode> <ns2:CreditCardState>California</ns2:CreditCardState> <ns2:CreditCardType>Visa</ns2:CreditCardType> <ns2:Type>CreditCard</ns2:Type> </ns1:zObjects> </ns1:create>

## Step 4: Update the Account

Set the following fields:

-   Set the ID for the Account created in step 1.

-   Set BillToId to the `contact ID` returned in step 2.

-   Set SoldToId to the `contact ID` returned in step 2. The BillToId and SoldToId can be different if another Contact is created.

-   Set DefaultPaymentMethod to the `PaymentMethod ID` returned in step 3. If a PaymentMethod was not created, Zuora has a number of pre-configured, global PaymentMethod placeholders, including Cash, Check, and Other.

-   Set Status to `Active` .


SOAP Example

The SOAP call envelope payload should look like this:

<ns1:update> <ns1:zObjects xsi:type\="ns2:Account"\> <ns2:Id>4028e48520410c9a0120413522b857de</ns2:Id> <ns2:BillToId>4028e48520410c9a01204135825757df</ns2:BillToId> <ns2:SoldToId>4028e48520410c9a01204135825757df</ns2:SoldToId> <ns2:DefaultPaymentMethodId>4028e6992010ee42012019a485112d70</ns2:DefaultPaymentMethodId> <ns2:Status>Active</ns2:Status> </ns1:zObjects> </ns1:update>

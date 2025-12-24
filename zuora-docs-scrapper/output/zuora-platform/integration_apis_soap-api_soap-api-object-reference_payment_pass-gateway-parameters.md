---
title: "Pass gateway parameters"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/pass-gateway-parameters"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:22.057Z"
---

# Pass gateway parameters

Provides sample codes for passing gateway parameters using the Payment SOAP API.

Zuora allows you to pass in special gateway-specific parameters for payments that go through the following gateways:

-   Adyen

-   Adyen Integration v2.0

-   Authorize.net

-   BlueSnap

-   CyberSource

-   Merchant eSolutions

-   Moneris

-   Orbital (Chase Paymentech)

-   QValent

-   Vantiv

-   Vantiv (Now Worldpay)

-   Verifi


For each of these special parameters, you supply the name-value pair and Zuora passes it to the gateway. This allows you to add functionality that's supported by a specific gateway but currently not supported by Zuora.

The following sections provide code samples for this gateway option functionality.

## Sample client-side Java program

GatewayOption\[\] gatewayOptions = new GatewayOption\[3\]; // the length of GatewayOption array should not exceed 255 characters; GatewayOption gatewayOption0 = new GatewayOption(); gatewayOption0.name = "MerchantDefinedField1"; // the length of name should not exceed 255 characters; gatewayOption0.value = "merchant defined field value first"; // the length of value should not exceed 255 characters; gatewayOptions\[0\] = gatewayOption0; GatewayOption gatewayOption1 = new GatewayOption(); gatewayOption1.name = "MerchantDefinedField2"; gatewayOption1.value = "merchant defined field value second"; gatewayOptions\[1\] = gatewayOption1; GatewayOption gatewayOption2 = new GatewayOption(); gatewayOption2.name = "IPAddress"; gatewayOption2.value = "192.168.1.1"; gatewayOptions\[2\] = gatewayOption2; GatewayOptionsData gatewayOptionsData = new GatewayOptionsData(); gatewayOptionsData.setGatewayOptions(gatewayOptions); Payment payment = makeElectronicPayment(); payment.setGatewayOptionsData(gatewayOptionsData); ID paymentID = create(payment); soap message:

## Sample SOAP Message

<?xml version="1.0" encoding="http://schemas.xmlsoap.org/soap/envelope/" standalone="no"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>rmua7tSYGgQaDIYF2NCZlwAt1lcJgWxTFJt\_KWQK3BYPydy9Yc4H5v5XA1b8SeBwdT1Wb-f5eDsV5mFUVaTDkw-TlOughj3B8BUjR15hd\_S555UGQvP4jm32n0-7\_qib26c5jIqKQIsruu\_ayfoDYg==</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:Payment"\> <ns2:AccountId>402892b02eb705eb012eb713d2b20035</ns2:AccountId> <ns2:Amount>100</ns2:Amount> <ns2:EffectiveDate>2011-03-15</ns2:EffectiveDate> <ns2:GatewayOptionData> <ns1:GatewayOption xsi:type\="ns2:GatewayOption"\> <ns2:name>MerchantDefinedField1</ns2:name> <ns2:value>merchant defined field value first</ns2:value> </ns1:GatewayOption> <ns1:GatewayOption xsi:type\="ns2:GatewayOption"\> <ns2:name>MerchantDefinedField2</ns2:name> <ns2:value>merchant defined field value second</ns2:value> </ns1:GatewayOption> <ns1:GatewayOption xsi:type\="ns2:GatewayOption"\> <ns2:name>IPAddress</ns2:name> <ns2:value>192.168.1.1</ns2:value> </ns1:GatewayOption> </ns2:GatewayOptionData> <ns2:PaymentMethodId>402892b02eb705eb012eb713d4400038</ns2:PaymentMethodId> <ns2:Status>Processed</ns2:Status> <ns2:Type>Electronic</ns2:Type> </ns1:zObjects> </ns1:create> </soapenv:Body> </soapenv:Envelope>

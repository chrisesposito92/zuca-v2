---
title: "UnitOfMeasure"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/unitofmeasure"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:32.254Z"
---

# UnitOfMeasure

A unit of measure (UOM) is the definable unit that you measure when determining charges. For example, if a customer's subscription rate plan includes 20 licenses, then 20 is the quantity and license is the unit that the quantity measures.

A UOM can be measured in whole numbers or fractions. For example, a customer might have a usage of 22.5 GB of storage space: GB is the UOM and 22.5 is a fractional quantity.

Use the UnitOfMeasure object to create and manage your company's units of measure. You can create as many units of measure as you need.

You assign a unit of measure to a subscription by a specifying a `UOM` field value in a ProductRatePlan object. The UnitOfMeasure object is the object that you use to populate the potential values for `UOM` fields.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()

-   update()

-   delete()


## Limits

The recommended maximum number of units of measure that you can have in your tenant is 5000.

## Additional field details

Here's more information we think you might like to have about some of these fields.

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the UnitOfMeasure object is UnitOfMeasureId.

## Create request example

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader soapenv:mustUnderstand="0" xmlns:ns1="http://api.zuora.com/"\> <ns1:session>ZEMgrT5EYiZ\_w169\_DsFRR2b8gotAYTLjbdqc4QhTpEizPTedUeOTe-HjkLfmcgW-tx5DiERWz00znXc4BeP8FsLlpHaU6UFqHFkYkQnA2uh0DXJV6agOKyavxr4DoeLOyuxlLtbfL8xJowg8JrI6d-vS3uSvO1JRXkML6puqhwnmUWSAFfLvFDMfoV1T-S8</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:create xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xsi:type\="ns2:UnitOfMeasure" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:UomName>Gallon-AZ1</ns2:UomName> <ns2:DisplayedAs>Gallon</ns2:DisplayedAs> <ns2:Active>1</ns2:Active> <ns2:DecimalPlaces>3</ns2:DecimalPlaces> <ns2:RoundingMode>Up</ns2:RoundingMode> </ns1:zObjects> </ns1:create> </soapenv:Body> </soapenv:Envelope>

## Query request example

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader soapenv:mustUnderstand="0" xmlns:ns1="http://api.zuora.com/"\> <ns1:session>ZEMgrT5EYiZ\_w169\_DsFRR2b8gotAYTLjbdqc4QhTpEizPTedUeOTe-HjkLfmcgW-tx5DiERWz00znXc4BeP8FsLlpHaU6UFqHFkYkQnA2uh0DXJV6agOKyavxr4DoeLOyuxlLtbfL8xJowg8JrI6d-vS3uSvO1JRXkML6puqhwnmUWSAFfLvFDMfoV1T-S8</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:query xmlns:ns1="http://api.zuora.com/"\> <ns1:queryString>select id,UomName,DisplayedAs,Active,DecimalPlaces, RoundingMode from UnitOfMeasure where DisplayedAs='Gallon'</ns1:queryString> </ns1:query> </soapenv:Body> </soapenv:Envelope>

## Update request example

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://api.zuora.com/" xmlns:obj="http://object.api.zuora.com/"\> <soapenv:Header> <ns1:SessionHeader soapenv:mustUnderstand="0"\> <ns1:Session>ZEMgrT5EYiZ\_w169\_DsFRR2b8gotAYTLjbdqc4QhTpEizPTedUeOTe-HjkLfmcgW-tx5DiERWz00znXc4BeP8FsLlpHaU6UFqHFkYkQnA2uh0DXJV6agOKyavxr4DoeLOyuxlLtbfL8xJowg8JrI6d-vS3uSvO1JRXkML6puqhwnmUWSAFfLvFDMfoV1T-S8</ns1:Session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:update> <ns1:zObjects xsi:type\="ns2:UnitOfMeasure" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>402892a33b936b2d013b984ba1410077</ns2:Id> <ns2:UomName>bbbb</ns2:UomName> <ns2:DisplayedAs>Gallon</ns2:DisplayedAs> <ns2:Active>0</ns2:Active> <ns2:DecimalPlaces>0</ns2:DecimalPlaces> <ns2:RoundingMode>0</ns2:RoundingMode> </ns1:zObjects> </ns1:update> </soapenv:Body> </soapenv:Envelope>

## Delete request example

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>ZEMgrT5EYiZ\_w169\_DsFRR2b8gotAYTLjbdqc4QhTpEizPTedUeOTe-HjkLfmcgW-tx5DiERWz00znXc4BeP8FsLlpHaU6UFqHFkYkQnA2uh0DXJV6agOKyavxr4DoeLOyuxlLtbfL8xJowg8JrI6d-vS3uSvO1JRXkML6puqhwnmUWSAFfLvFDMfoV1T-S8</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:delete xmlns:ns1="http://api.zuora.com/"\> <ns1:type\>UnitOfMeasure</ns1:type\> <ns1:ids>402892a33b936b2d013b984ba1410077</ns1:ids> </ns1:delete> </soapenv:Body> </soapenv:Envelope>

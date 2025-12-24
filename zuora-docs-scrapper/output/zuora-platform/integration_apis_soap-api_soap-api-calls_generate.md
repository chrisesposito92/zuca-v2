---
title: "generate()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/generate"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:51.870Z"
---

# generate()

Use the generate() call to generate an on demand invoice for a specific customer.

The generate() call generates an on-demand invoice for a specific customer. This process is similar to the process in the Zuora user interface in which you create an ad-hoc bill run for a specific customer account.

## Usage notes

-   Version availability: WSDL 11.0+

-   Asynchronous process: yes


The id of the generated invoice is returned in the response. If multiple invoices are generated, only the id of the first invoice generated is returned. This occurs when an account has multiple subscriptions with the invoice subscription separately option enabled.

## Fields

The following fields are required for this call:

-   `Invoice.AccountId`

-   `Invoice.InvoiceDate`

-   `Invoice.TargetDate`


## Examples

This example call generates an invoice with the following characteristics:

-   Customer account ID: 8a8ae4b122561fc00122562fbc3d0002

-   Date: July 7, 2016

-   Include all charge types

-   Default status is Draft


Request:

<SOAP-ENV:Envelopexmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"xmlns:ns2="http://object.api.zuora.com/"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://api.zuora.com/"\> <SOAP-ENV:Body> <ns1:generate> <ns1:zObjects xsi:type\="ns2:Invoice"\> <ns2:AccountId>8a8ae4b122561fc00122562fbc3d0002</ns2:AccountId> <ns2:IncludesOneTime>True</ns2:IncludesOneTime> <ns2:IncludesRecurring>True</ns2:IncludesRecurring> <ns2:IncludesUsage>True</ns2:IncludesUsage> <ns2:InvoiceDate>2016-07-07</ns2:InvoiceDate> <ns2:TargetDate>2016-07-07</ns2:TargetDate> </ns1:zObjects> </ns1:generate> </SOAP-ENV:Body> </SOAP-ENV:Envelope>

Response:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:generateResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>8a8082c453cd2a620153e426c7eb78b3</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:generateResponse> </soapenv:Body> </soapenv:Envelope>

---
title: "Example: Generate an invoice"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoice/example-generate-an-invoice"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:23.253Z"
---

# Example: Generate an invoice

Provides examples to show you how to generate an invoice using the SOAP API.

This article explains how to generate an invoice, update the status of an invoice, and generate an invoice PDF through SOAP API calls. Includes sample code.

## Generate a new invoice

First, generate a new [Invoice](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoice). Set the following fields:

-   Specify the `AccountId` to indicate which customer this invoice is for.
-   Optionally, set filtering parameters `IncludesOneTime, IncludesRecurring`, and `IncludesUsage` to either `true` (default) or `false`.
-   Set the `InvoiceDate`. This date will be shown on the invoice as the `Invoice Date` and, with the `Payment Term`, will impact the `Invoice Due Date`.
-   Set the `TargetDate`. This date indicates what charges to include on the invoice. All charges will be included that mature on or before this date.

By default, the Status of the invoice is set to `Draft`.

SOAP example
<ns1:generate> <ns1:zObjects xsi:type\="ns2:Invoice"\> <ns2:AccountId>4028e485225d1d5f0122662fd6b249c8</ns2:AccountId> <ns2:IncludesOneTime>True</ns2:IncludesOneTime> <ns2:IncludesRecurring>True</ns2:IncludesRecurring> <ns2:IncludesUsage>True</ns2:IncludesUsage> <ns2:InvoiceDate>2009-11-11T08:07:55-08:00</ns2:InvoiceDate> <ns2:TargetDate>2009-11-11</ns2:TargetDate> </ns1:zObjects> </ns1:generate>

## Update the status of an invoice

After generating the invoice. update the status of the new invoice. Set the following fields:

-   Specify the invoice ID field.
-   Set Status to `Posted`. (The other allowable status value is `Canceled`.)

Use the update() call to update the new invoice.

SOAP example
<ns1:update> <ns1:zObjects xsi:type\="ns2:Invoice"\> <ns2:Id>8a8ae4b122f5e34d0122f6d269610760</ns2:Id> <ns2:Status>Posted</ns2:Status> </ns1:zObjects> </ns1:update>

## Generate an invoice PDF

Create a query object for an invoice, including the `Body` field.

For example:

`SELECT Id, AccountId, Amount, Balance, DueDate, InvoiceDate, InvoiceNumber, Status, TargetDate, Body FROM Invoice where Id='XXYYZZ'`

where XXYYZZ is the ID of the invoice you want generate as a PDF. The `Body` field returned is encoded in Base64 that you must decode.

The resulting data is the PDF file of the invoice.

## ​Regenerate an invoice PDF

You can regenerate the Invoice PDF after invoice generation. For example, you generate an invoice and a PDF of that invoice. Then you update a custom field value or change the invoice template. Use the update() call to regenerate the invoice's PDF file to reflect your changes.

The Invoice object has a field, `RegenerateInvoicePDF` , that you use with the update() call to do the regeneration. The values for the field are `true` and `false` . When the value is `true` , then the update() call triggers an asynchronous operation to regenerate the invoice PDF file.

For one specific invoice, you can use this field to regenerate PDF files for a maximum of 100 times.

You cannot use the RegenerateInvoicePDF field with other invoice fields in the update() call to update the invoice, or you receive an `INVALID` `_VALUE` error, "When field RegenerateInvoicePDF is set to true to regenerate the invoice PDF file, changes on other fields of the invoice are not allowed."

The RegenerateInvoicePDF field is introduced in API version 40. If you use the field in earlier versions, then the field is ignored.

SOAP Example
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Header> <ns1:SessionHeader soapenv:mustUnderstand="0" xmlns:ns1="http://api.zuora.com/"\> <ns1:session>K7NRlvIRO40aZt8Z4eAV1fADr9oh0ZBzt- DkT6Iy23IB53fC5tErax1mGSzqyNOjZpgM9jHrHT3gOQ2oIb7IWDTJ1VT3HEJzfr 2HE4Mbl1t5oaFyWk8fi2aZmxMfST34jpZEJw58I66RhJ- QqBWFfu5hoKcjagZsDFCn1WkKFsudggqUx5oy9b\_m5Pm8IRjn</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xsi:type\="ns2:Invoice" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>402880ee38296072013831c93a610841</ns2:Id> <ns2:RegenerateInvoicePDF>true</ns2:RegenerateInvoicePDF> </ns1:zObjects> </ns1:update> </soapenv:Body>

Example response:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:updateResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>402880ee38296072013831c93a610841</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:updateResponse> </soapenv:Body> </soapenv:Envelope>

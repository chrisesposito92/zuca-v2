---
title: "InvoiceFile"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicefile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:33.319Z"
---

# InvoiceFile

Describes the InvoiceFile object and its fields.

The InvoiceFile SOAP object allows you to retrieve invoice PDF files for historical versions of an invoice.

The InvoiceFile object is available in WSDL 65 and higher.

Note:

The InvoiceFile object is only available for invoice files generated after the Zuora February 2015 release, R185.

The InvoiceFile object is not available in Data Source for export.

## Supported calls

You can use this object with the following call:

-   query()


## Walkthroughs and use cases

Common ways to use this object include:

-   One of your customers has questions about an invoice PDF file that is no longer the most recent version. You can query InvoiceFile to retrieve exactly the same PDF file version as the customer is using.

-   One of your customers lost an invoice PDF file that is no longer the most recent version. You can query InvoiceFile to retrieve that version of the PDF file and resend it to the customer.


The InvoiceFile object is deleted if you delete the invoice with which it is associated.

## Example: Retrieve all historical PDF files of an invoice

Example request:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/"\> <soapenv:Header> <ns1:SessionHeader xmlns:ns1="http://api.zuora.com/" soapenv:mustUnderstand="0"\> <ns1:session>${login#Response#//ns1:loginResponse/ns1:result/ns1:Session}</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <api:query> <api:queryString>select VersionNumber, InvoiceId, PdfFileUrl from InvoiceFile where InvoiceId='402892014add19eb014add21d0060022' </api:queryString> </api:query> </soapenv:Body> </soapenv:Envelope>

Example response:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>true</ns1:done\> <ns1:queryLocator xsi:nil="1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/> <ns1:records xsi:type\="ns2:InvoiceFile" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>402892014add19eb014add21e93a0030</ns2:Id> <ns2:InvoiceId>402892014add19eb014add21d0060022</ns2:InvoiceId> <ns2:PdfFileUrl>https://apisandbox.zuora.com/apps/api/file/402892014add19eb014add21e937002e</ns2:PdfFileUrl> <ns2:VersionNumber>1421049188930</ns2:VersionNumber> </ns1:records> <ns1:records xsi:type\="ns2:InvoiceFile" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>402892014add2595014add2b76520013</ns2:Id> <ns2:InvoiceId>402892014add19eb014add21d0060022</ns2:InvoiceId> <ns2:PdfFileUrl>https://apisandbox.zuora.com/apps/api/file/402892014add2595014add2b764d0011</ns2:PdfFileUrl> <ns2:VersionNumber>1421049817776</ns2:VersionNumber> </ns1:records> <ns1:size>2</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body> </soapenv:Envelope>

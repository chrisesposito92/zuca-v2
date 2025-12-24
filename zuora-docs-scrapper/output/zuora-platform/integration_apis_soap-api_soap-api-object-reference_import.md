---
title: "Import"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/import"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:10.370Z"
---

# Import

The Import object contains all of the information you need to upload content, such as a large number of usage records.

An import function uploads content, especially when you have a large amount of content.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()


## Walkthroughs and use cases

A common use case for the Import object is:

-   Upload a large number of usage records Use the `Import` object with an asynchronous `create()` call to upload a CSV file that contains as much as 4 MB of usage records. You need to:

    -   Set the SOAP request property to enable MTOM to true

    -   Add the imported CSV file to Attachments


See "Import mass usage records" for detail information and examples.

## Additional field detail

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send a `query()` call to query the import, then you need to include the specific `Import` object's ID with the call.

The ID for the `Import` object is `ImportId` .

## Sample request

The following is a sample SOAP request for importing a usage file.

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/" xmlns:obj="http://object.api.zuora.com/"\> <soapenv:Header> <api:SessionHeader></api:SessionHeader> <api:CallOptions><!-Optional: -></api:CallOptions> </soapenv:Header> <soapenv:Body> <ns2:create xmlns:ns2="http://api.zuora.com/" xmlns:ns3="http://fault.api.zuora.com/" xmlns:ns4="http://object.api.zuora.com/"\> <ns2:zObjects xsi:type\="ns4:Import" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns4:FileContent>cid:CSV\_file\_example.csv</ns4:FileContent> <ns4:ImportType>Usage</ns4:ImportType> <ns4:Name>CSV\_file\_example.csv</ns4:Name> </ns2:zObjects> </ns2:create> </soapenv:Body> </soapenv:Envelope>

## Sample response

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:createResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>402881ee57185868015718ae58a40146</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:createResponse> </soapenv:Body> </soapenv:Envelope>

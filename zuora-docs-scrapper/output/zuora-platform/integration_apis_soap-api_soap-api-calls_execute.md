---
title: "execute()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/execute"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:49.505Z"
---

# execute()

Use the execute() call to execute a process to split an invoice into multiple invoices.

The execute() call splits an invoice into multiple invoices. The original invoice must be in draft status. The resulting invoices are called split invoices.

To split a draft invoice into multiple split invoices:

1.  Use the create() call to create a separate [InvoiceSplitItem](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplititem) object for each split invoice that you want to create from the original draft invoice.

2.  Use the create() call to create a single [InvoiceSplit](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplit) object to collect all of the InvoiceSplitItem objects.

3.  Use the execute() call to split the draft invoice into multiple split invoices.


You need to create InvoiceSplitItem objects and an InvoiceSplit object before using the execute() call.

-   Supported objects: [InvoiceSplit](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplit)

-   Version availability: WSDL 43.0+

-   Asynchronous process: yes


## Syntax and arguments

The execute() call uses the following items:

-   Request: execute

-   Response: ExecuteResult

-   Object: [InvoiceSplit](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplit)


## Request: execute

Use all of the following fields for every execute() request:

-   type

    -   Description : Specifies the type of executed item. As of WSDL 43.0, invoice splits are the only supported type.

    -   Type : string

    -   Version notes : WSDL 43.0+

    -   Values : `invoicesplit`

-   synchronous

    -   Description : Indicates if the call is synchronous or asynchronous. As of WSDL 43.0, this call must be asynchronous.

    -   Type : boolean

    -   Version notes : WSDL 43.0+

    -   Values : `false`

-   ids

    -   Description : The ID of the object. As of WSDL 43.0, InvoiceSplit objects are the only supported objects.

    -   Type : string

    -   Version notes : WSDL 43.0+

    -   Values : a valid [InvoiceSplit](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplit) object ID


## Example request

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://api.zuora.com/" xmlns:ns2="http://object.api.zuora.com/"\> <soapenv:Header> <ns1:SessionHeader> <ns1:session>XXX</ns1:session> </ns1:SessionHeader> </soapenv:Header> <soapenv:Body> <ns1:execute> <ns1:type\>invoicesplit</ns1:type\> <ns1:synchronous>false</ns1:synchronous> <ns1:ids>2c90803e386cc2bf01386d0865910025</ns1:ids> </ns1:execute> </soapenv:Body> </soapenv:Envelope>

## Response: ExecuteResult

The `ExecuteResult` response has the following fields:

-   `Errors`

    -   `InvalidTypeFault` An invalid type, unknown type, or a type not supported in the API version was specified.

    -   `UnexpectedErrorFault` There was an unexpected problem with the call. No further details are available.

-   `Id`

    -   The ID of the object in the call. The value is the same as the value you provide in the `ids` field for the request.

-   `Success`

    -   Boolean field that confirms that the call succeeded.

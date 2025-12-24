---
title: "queryMore()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/querymore"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:04.802Z"
---

# queryMore()

Use queryMore() to request additional results from a previous query() call.

## Overview

If your initial [query()](/zuora-platform/integration/apis/soap-api/soap-api-calls/query) call returns more than 2000 results, you can use queryMore() to query for the additional results.

## Usage

Note:

As of the September 2014, R180 release, Zuora will continue to store results greater than 2,000 with queryLocator. Any queryLocator results greater than 2,000, will only be stored by Zuora for 5 days before it is deleted.

This call sends a request for additional results from an initial query() call. If the initial query() call returns more than 2000 results, you can use the queryLocator returned from query() to request the next set of results. By default, 2000 results will be returned with the queryMore() call, but this can be changed by setting batchSize in QueryOptions.

You can set the number of results to return by setting BatchSize in SOAP header. It can be a number between 0 and 2000. Setting to 0 is the default setting, which will return 2000 results.

Note:

As of WSDL 20.0, Zuora will now expire queryMore() cursors after 15 minutes of activity, regardless of the API version that you are using.

## Syntax and arguments

To use queryMore(), you first construct a [query()](/zuora-platform/integration/apis/soap-api/soap-api-calls/query) call. By default, the query() call will return up to 2000 results. If there are more than 2000 results, query() will return a boolean "done," which will be marked as false, and a queryLocator, which is a marker you will pass to queryMore() to get the next set of results.

A typical request could be:

SELECT Id FROM InvoiceItem

Typically, Zuora would return 2000 results (100 results with WSDL version 5.0 and below). However, if your query exceeds this limit, you can use queryMore() to request the remaining results.

The following is an example that makes a query and requests that only 50 results be returned.

<?xml version="1.0" encoding="UTF-8"?> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://api.zuora.com/"\> <SOAP-ENV:Header> <ns2:SessionHeader> <ns2:session>x325DpHqCwv9ya830FxMUddE...</ns2:session> </ns2:SessionHeader> <ns2:QueryOptions> <ns2:batchSize>50</ns2:batchSize> </ns2:QueryOptions> </SOAP-ENV:Header> <SOAP-ENV:Body> <ns1:query> <ns1:queryString>select id from invoiceitem</ns1:queryString> </ns1:query> </SOAP-ENV:Body> </SOAP-ENV:Envelope>

The resulting response would be:

<?xml version="1.0" encoding="utf-8"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>false</ns1:done\> <ns1:queryLocator>4028e69923eaaa2a0124069b5c887849-50</ns1:queryLocator> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItem"\> <ns2:Id>4028e6991f1b0aa5011f1c82a53a0054</ns2:Id> </ns1:records> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItem"\> <ns2:Id>4028e6991f1b0aa5011f1c82a56e0055</ns2:Id> </ns1:records> <!-- ...48 more results... --> <ns1:size>1104</ns1:size> </ns1:result> </ns1:queryResponse> </soapenv:Body> </soapenv:Envelope>

## Sample code of taking queryLocator and issuing queryMore() call

With `queryLocator`, you can now construct a queryMore() request which will return another set of results. An example use of queryMore() in this case would be:

<?xml version="1.0" encoding="UTF-8"?> <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns1="http://api.zuora.com/"\> <SOAP-ENV:Header> <ns2:SessionHeader> <ns2:session>x325DpHqCwv9ya830FxMUddE...</ns2:session> </ns2:SessionHeader> <ns2:QueryOptions> <ns2:batchSize>50</ns2:batchSize> </ns2:QueryOptions> </SOAP-ENV:Header> <SOAP-ENV:Body> <ns1:queryMore> <ns1:queryLocator>4028e69923eaaa2a0124069b5c887849-50</ns1:queryLocator> </ns1:queryMore> </SOAP-ENV:Body> </SOAP-ENV:Envelope>

The queryMore() call returns a queryMoreResponse, almost identical to a queryResponse:

<?xml version="1.0" encoding="utf-8"?> <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <ns1:queryMoreResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:done\>false</ns1:done\> <ns1:queryLocator>4028e69923eaaa2a0124069b5c887849-1050</ns1:queryLocator> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItem"\> <ns2:Id>4028e69923eaaa2a0124022c44522584</ns2:Id> </ns1:records> <ns1:records xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type\="ns2:InvoiceItem"\> <ns2:Id>4028e69923eaaa2a0124022e1b8527cd</ns2:Id> </ns1:records> <!-- ...48 more results...> </ns1:result> </ns1:queryMoreResponse> </soapenv:Body> </soapenv:Envelope>

If there are more results, you can iteratively call queryMore() until `done=true`.

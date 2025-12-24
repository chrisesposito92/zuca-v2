---
title: "SOAP API calls overview"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/soap-api-calls-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:18.564Z"
---

# SOAP API calls overview

The calls in the Zuora SOAP API can be thought of as functioning much like verbs do in human languages: They are the actions that you perform.

In human languages, verbs act upon objects, so in this case, the API calls are the actions you perform upon the Zuora SOAP API objects.

Zuora's SOAP API offers Create, Read, Update, and Delete (CRUD) capabilities. We use the term query instead of read.

## Use the SOAP API calls

The Zuora SOAP API calls can be thought of as verbs, because they perform the CRUD actions on the API objects. Using the calls, you can perform various tasks:

-   Logging into the Zuora server: Use [login](/zuora-platform/integration/apis/soap-api/soap-api-calls/login) call to allow you receive information for subsequent calls

-   Creating, updating, and deleting various types of information. Use the [create](/zuora-platform/integration/apis/soap-api/soap-api-calls/create), [update](/zuora-platform/integration/apis/soap-api/soap-api-calls/update), or [delete](/zuora-platform/integration/apis/soap-api/soap-api-calls/delete) call

-   Querying account information. Use the [query](/zuora-platform/integration/apis/soap-api/soap-api-calls/query) call


As an alternative, you can use the [subscribe](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call, which is an all-in-one solution for creating a request to subscribe to a service.

If you have the Invoice Settlement feature enabled, Zuora does not support generating credit memos with the API calls.

The XML of your calls must follow this format:

1.  Header

2.  Body

3.  Operation (for example, create)

4.  Request

5.  Object name

6.  Fields for the object

7.  Additional operations


Except for the login call, use only one header per call.

## Properties of the SOAP API Calls

All Zuora API calls are:

-   Service requests and responses: Using the SOAP API, your client application prepares and submits a service request to the Zuora Web service. The Web service processes that request and returns a response, which your client application handles.

-   Synchronous only (asynchronous calls are not supported): Once your client application makes a request, it waits until it receives a response from the service before taking further action.

-   Committed automatically: Every operation that writes to an object is committed automatically. This can be compared to the `AUTOCOMMMIT` setting in SQL. For `create`, `update`, and `delete`, if you attempt to write to more than one record in an object, the write operation for each record is treated as a separate transaction. For example, if a client application attempts to create two new accounts, those accounts are created using mutually exclusive insert operations that succeed or fail individually, not as a group.


Your client applications may need to handle failures if a requested operation could not be completed.

## Concurrent Request Limits

See [Concurrent request limits](https://developer.zuora.com/docs/guides/rate-limits/) on the Developer Center for details.

You will encounter the following error codes, error messages, or HTTP status codes when reaching concurrent request limits:

| Request type | Error code | Error message | HTTP status code- Response header |
| --- | --- | --- | --- |
| User Interface | N/A | The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later. | N/A |
| REST API | 50000070 | The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later. | HTTP Status: 429Response Header: Retry- After:120 |
| SOAP API, version 51.0 and later | <fns:FaultCode> REQUEST_EXCEEDED_LIMIT</fns:FaultCode> | <fns:FaultMessage> The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later. </fns:FaultMessage> | HTTP Status: 429Response Header: Retry- After:120 |
| SOAP API, versions prior to 51.0 | <fns:FaultCode> UNKNOWN_ERROR </fns:FaultCode> | <fns:FaultMessage> The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later. </fns:FaultMessage> | HTTP Status: 429Response Header: Retry- After:120 |
| File Download API | N/A | The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later. | HTTP Status: 429Response Header: Retry- After:120 |

Zuora recommends that you retry sending the request after 120 seconds.

---
title: "Implementation Considerations"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/coding-overview/implementation-considerations"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:58.019Z"
---

# Implementation Considerations

Provides information on things to consider when implementing your client applications.

## Basic API call sequence

This is the very basic typical sequence that an individual call might follow.

1.  Each call generally prepares its request. For instance, the call can define request parameters or otherwise prepare information that is needed.

2.  Your application invokes the call. This sends the request, with its parameters, to the Zuora Web service.

3.  The Zuora Web service processes the request and sends a response.

4.  Your application handles the response. If the call was successful, it processes the returned data. If it was not successful, it handles the errors.


## The SOAP XML payload

When sending Zuora an XML SOAP message with values for an object's fields, you must pass in the fields in the order in which they are defined on the objects.

## The Zuora sandbox

The Zuora Sandbox is a non-production environment that provides full access to the Z-Commerce API. You can use it to develop and test your client applications without needing to worry about how it might affect a production environment or production data. For information on accessing the Sandbox, contact your Zuora representative.

When using the Sandbox, you must change the URL of the WSDL before consuming it in your toolkit. Contact your Zuora sales representative to obtain the correct URL.

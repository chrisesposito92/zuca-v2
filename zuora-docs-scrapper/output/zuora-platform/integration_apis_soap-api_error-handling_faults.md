---
title: "Faults"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/error-handling/faults"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:15.927Z"
---

# Faults

A fault is a fatal and call-level error.

## Overview

Faults differ from errors, which cause only part of a call to fail. When a fault occurs, the call fails completely and nothing is processed. Examples of faults include an incorrect ZOQL statement, an invalid authentication, and a server error.

## Fault elements

When a fault occurs, the call fails entirely, nothing is processed, and a fault is returned.

| Fault | Description |
| --- | --- |
| ApiFault | The base fault. This fault has a fault code ( FaultCode ) and a fault message ( FaultMessage ). The FaultCode points to the appropriate ErrorCode . If you make a call that results in a fault, then the call returns an exception with the ErrorCode , which tells you what happened. The FaultMessage is a string that provides details about the fault. |
| InvalidQueryLocatorFault | The query locator expired or was otherwise invalid. |
| InvalidTypeFault | An invalid type, unknown type, or a type not supported in the API version was specified. |
| InvalidValueFault | An invalid value was specified. |
| LoginFault | The specified login credentials were invalid. Log in again. |
| MalformedQueryFault | The query string used an invalid format or syntax, or the string exceeds the maximum length of a query statement. The maximum length of a query string in 10,000 characters. |
| UnexpectedErrorFault | There was an unexpected problem with the call. No further details are available. |

## Restricted access message

If your tenant has specified [allowable IP address ranges](/zuora-platform/system-management/administrator-settings/user-roles/platform-roles) for Zuora, the following fault response is returned when a call is sent from an IP address outside the specified range. Contact your tenant administrator for assistance.

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\> <soapenv:Body> <soapenv:Fault xmlns:fns="http://fault.api.zuora.com/"\> <faultcode>fns:INVALID\_VALUE</faultcode> <faultstring>Your IP address may be restricted. Please contact the administrator at your company for help.</faultstring> <detail> <fns:LoginFault> <fns:FaultCode>INVALID\_VALUE</fns:FaultCode> <fns:FaultMessage>Your IP address may be restricted. Please contact the administrator at your company for help.</fns:FaultMessage> </fns:LoginFault> </detail> </soapenv:Fault> </soapenv:Body> </soapenv:Envelope>

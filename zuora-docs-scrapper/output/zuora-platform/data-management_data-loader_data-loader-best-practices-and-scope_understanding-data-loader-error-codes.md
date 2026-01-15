---
title: "Understanding Data Loader error codes"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/understanding-data-loader-error-codes"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:42.173Z"
---

# Understanding Data Loader error codes

Learn how to interpret API error codes and categories, including common issues like invalid formats, missing fields, and authentication failures.

Failed Records capture the API level errors. The errors can be of the following code: 53100320. The last two digits of the error help in understanding the error as per the following category. In the above example, the error category falls under 20, which deals with Invalid format or value.

| Code | Error category | Description | Resolution |
| --- | --- | --- | --- |
| 10 | Permission or access denied | The request cannot be processed because a certain tenant or user permission is missing. | Check the missing tenant or user permission in the response message and contact Zuora Global Support for enablement. |
| 11 | Authentication failed | Authentication fails due to invalid API authentication credentials. | Ensure that a valid API credential is specified. |
| 20 | Invalid format or value | The request cannot be processed due to an invalid field format or value. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 21 | Unknown field in request | The request cannot be processed because an unknown field exists in the request body. | Check the unknown field name in the response message, and ensure that you do not include any unknown field in the request body. |
| 22 | Missing required field | The request cannot be processed because a required field in the request body is missing. | Check the missing field name in the response message, and ensure that you include all required fields in the request body. |
| 23 | Missing required parameter | The request cannot be processed because a required query parameter is missing. | Check the missing parameter name in the response message, and ensure that you include the parameter in the query. |
| 30 | Rule restriction | The request cannot be processed due to the violation of a Zuora business rule. | Check the response message and ensure that the API request meets the specified business rules. |
| 40 | Not found | The specified resource cannot be found. | Check the response message and ensure that the specified resource exists in your Zuora tenant. |
| 45 | Unsupported request | The requested endpoint does not support the specified HTTP method. | Check your request and ensure that the endpoint and method matches. |
| 50 | Locking contention | This request cannot be processed because the objects this request is trying to modify are being modified by another API request, UI operation, or batch job process. | Resubmit the request first to have another try.If this error still occurs, contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 60 | Internal error | The server encounters an internal error. | Contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 61 | Temporary error | A temporary error occurs during request processing, for example, a database communication error. | Resubmit the request first to have another try.If this error still occurs, contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 70 | Request exceeded limit | The total number of concurrent requests exceeds the limit allowed by the system. | Resubmit the request after the number of seconds specified by the Retry-After value in the response header.Check Concurrent request limits for details about Zuora’s concurrent request limit policy. |
| 90 | Malformed request | The request cannot be processed due to JSON syntax errors. | Check the syntax error in the JSON request body and ensure that the request is in the correct JSON format. |
| 99 | Integration error | The server encounters an error when communicating with an external system, for example, payment gateway, tax engine provider. | Check the response message and take action accordingly. |

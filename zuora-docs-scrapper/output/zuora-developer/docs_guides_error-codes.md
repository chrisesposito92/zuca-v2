---
title: "Error codes"
url: "https://developer.zuora.com/docs/guides/error-codes/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:48.609Z"
---

#

Error codes

If a request to Zuora API with an endpoint starting with `/v1` (except [Actions](https://developer.zuora.com/api-references/api/tag/Actions) and CRUD operations) fails, the response will contain an eight-digit error code with a corresponding error message to indicate the details of the error.

The following code snippet is a sample error response that contains an error code and message pair:

```json
{
  "success": false,
  "processId": "CBCFED6580B4E076",
  "reasons":  [
    {
    "code": 53100320,
    "message": "'termType' value should be one of: TERMED, EVERGREEN"
    }
  ]
}
```

The `success` field indicates whether the API request has succeeded. The `processId` field is a Zuora internal ID that you can provide to Zuora Global Support for troubleshooting purposes.The `reasons` field contains the actual error code and message pair. The error code begins with `5` or `6` means that you encountered a certain issue that is specific to a REST API resource in Zuora Billing, Payments, and Central Platform. For example, `53100320` indicates that an invalid value is specified for the `termType` field of the `subscription` object.The error code beginning with `9` usually indicates that an authentication-related issue occurred, and it can also indicate other unexpected errors depending on different cases. For example, `90000011` indicates that an invalid credential is provided in the request header.

When troubleshooting the error, you can divide the error code into two components: REST API resource code and error category code. See the following Zuora error code sample:

![Zuora Sample Error Code](https://developer.zuora.com/images/ZuoraErrorCode.jpeg)
**Note:** Zuora determines resource codes based on the request payload. Therefore, if GET and DELETE requests that do not contain payloads fail, you will get `500000` as the resource code, which indicates an unknown object and an unknown field.

The error category code of these requests is valid and follows the rules described in the [Error Category Codes](#Error-Category-Codes) section.

In such case, you can refer to the returned error message to troubleshoot.

##

REST API Resource Codes

The 6-digit resource code indicates the REST API resource, typically a field of a Zuora object, on which the issue occurs. In the preceding example, `531003` refers to the `termType` field of the `subscription` object. The value range for all REST API resource codes is from `500000` to `679999`. See [Resource Codes](https://knowledgecenter.zuora.com/Central_Platform/API/AA_REST_API/Resource_Codes) in the Knowledge Center for a full list of resource codes.

##

Error Category Codes

The 2-digit error category code identifies the type of error, for example, resource not found or missing required field.

The following table describes all error categories and the corresponding resolution:

| Code | Error category | Description | Resolution |
| --- | --- | --- | --- |
| 10 | Permission or access denied | The request cannot be processed because a certain tenant or user permission is missing. | Check the missing tenant or user permission in the response message and contact Zuora Global Support for enablement. |
| 11 | Authentication failed | Authentication fails due to invalid API authentication credentials. | Ensure that a valid API credential is specified. |
| 20 | Invalid format or value | The request cannot be processed due to an invalid field format or value. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 21 | Unknown field in request | The request cannot be processed because an unknown field exists in the request body. | Check the unknown field name in the response message, and ensure that you do not include any unknown field in the request body. |
| 22 | Missing required field | The request cannot be processed because a required field in the request body is missing. | Check the missing field name in the response message, and ensure that you include all required fields in the request body. |
| 23 | Missing required parameter | The request cannot be processed because a required query parameter is missing. | Check the missing parameter name in the response message, and ensure that you include the parameter in the query. |
| 27 | Invalid query parameter | The request cannot be processed because of an invalid query parameter. | Check the query parameter in the response message, and ensure that you have provided the correct parameter name and value. |
| 30 | Rule restriction | The request cannot be processed due to the violation of a Zuora business rule. | Check the response message and ensure that the API request meets the specified business rules. |
| 40 | Not found | The specified resource cannot be found. | Check the response message and ensure that the specified resource exists in your Zuora tenant. |
| 45 | Unsupported request | The requested endpoint does not support the specified HTTP method. | Check your request and ensure that the endpoint and method matches. |
| 50 | Locking contention | This request cannot be processed because the objects this request is trying to modify are being modified by another API request, UI operation, or batch job process. | Resubmit the request first to have another try.If this error still occurs, contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 60 | Internal error | The server encounters an internal error. | Contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 61 | Temporary error | A temporary error occurs during request processing, for example, a database communication error. | Resubmit the request first to have another try.If this error still occurs, contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 70 | Request exceeded limit | The total number of concurrent requests exceeds the limit allowed by the system. | Resubmit the request after the number of seconds specified by the Retry-After value in the response header.Check Concurrent request limits for details about Zuora’s concurrent request limit policy. |
| 90 | Malformed request | The request cannot be processed due to JSON syntax errors. | Check the syntax error in the JSON request body and ensure that the request is in the correct JSON format. |
| 99 | Integration error | The server encounters an error when communicating with an external system, for example, payment gateway, tax engine provider. | Check the response message and take action accordingly. |

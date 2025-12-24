---
title: "Errors"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/error-handling/errors"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:13.330Z"
---

# Errors

An error is a row-level failure that can occur when you attempt a batch call.

Errors differ from faults, which cause a call to fail completely. An error causes only part of the call to fail. Parts that succeed are processed. The parts that fail return error codes.

For example, a create() call attempts to create 20 accounts, but two of them fail. The call successfully creates 18 `Account` objects, and returns error codes for the two failures.

## Error object

Errors are an instance of an `Error` object, which has three fields.

| Field name | Description |
| --- | --- |
| Code | Specifies the type of error that occurred. This field uses the object, ErrorCode. |
| Field | If the error is a field error, then the Field value is a string that indicates which field failed. |
| Message | A string that describes the error. |

## ErrorCode object

The `ErrorCode` object contains the value for the `Error` object's field, `Code` . The WSDL defines errors for both faults and errors in the `ErrorCode` enumeration.

| Error | Description |
| --- | --- |
| API_DISABLED | The API was disabled. |
| CANNOT_DELETE | The specified item couldn't be deleted. |
| CREDIT_CARD_PROCESSING_FAILURE | There was a problem processing the credit card. |
| DUPLICATE_VALUE | A duplicate value was found for a value that must be unique. |
| INVALID_FIELD | An invalid field was specified in one of the following calls: create(), query(), update(). |
| INVALID_ID | An invalid ID value was specified. |
| INVALID_LOGIN | Invalid login credentials were specified. |
| INVALID_SESSION | The authentication session expired or was otherwise invalid. Log in again. |
| INVALID_TYPE | An invalid object type was specified in one of the following calls: create(), query(), update(). |
| INVALID_VALUE | An invalid field value was specified. |
| INVALID_VERSION | The version of the API doesn't match the function you tried to use. |
| LOCK_COMPETITION | The operation failed from a lock competition. For example, a lock can occur when multiple client operations try to update an object at the same time. Retry later.WSDL Version: 60.0+ |
| MALFORMED_QUERY | The query() call wasn't properly formed. |
| MAX_RECORDS_EXCEEDED | The maximum number of records was exceeded. |
| MISSING_REQUIRED_VALUE | A required value wasn't specified. |
| REQUEST_EXCEEDED_LIMIT | The total number of requests for the unit interval has exceeded the limit allowed by the system. HTTP status: 429 |
| REQUEST_EXCEEDED_RATE | The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later. HTTP Status: 200, means the limit is based on application design. |
| SERVER_UNAVAILABLE | The Zuora server wasn't available. |
| TEMPORARY_ERROR | The operation failed from a temporary error. For example, the encryption component encounters an error that can self-correct within a short time span. Retry later.WSDL Version: 60.0+ |
| TRANSACTION_FAILED | The transaction failed. |
| TRANSACTION_TERMINATED | The operation failed when a transaction was terminated. This failure may be related to a heavy resource-consuming operation. Do not retry.If you are fetching large amounts of date, change your operations to work with a smaller set of data.WSDL Version: 60.0+ |
| TRANSACTION_TIMEOUT | The operation failed from a transaction timeout between Zuora and the the third-party you were trying to contact. For example, a call to create payment failed from a gateway timeout.WSDL Version: 60.0+ |
| UNKNOWN_ERROR | There was an unknown error. No further details are available. |

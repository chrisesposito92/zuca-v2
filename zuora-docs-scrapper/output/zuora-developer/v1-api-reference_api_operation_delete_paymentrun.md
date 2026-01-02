---
title: "DELETE PaymentRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/DELETE_PaymentRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:47.569Z"
---

## Delete a payment run

Deletes a payment run. Only payment runs with the Canceled or Error status can be deleted.

Security**bearerAuth**

Request

##### path Parameters

| paymentRunKeyrequired | stringThe unique ID of a payment run or the payment run number. For example, 402890245f097f39015f0f074a2e0566. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

delete/v1/payment-runs/{paymentRunKey}

Request samples

-   cURL

Copy

curl \-i \-X DELETE \\
  'https://rest.test.zuora.com/v1/payment-runs/{paymentRunKey}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "success": true


}`

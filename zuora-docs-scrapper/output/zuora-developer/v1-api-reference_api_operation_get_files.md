---
title: "GET Files"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Files/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:40.057Z"
---

## Retrieve a file

Retrieve files such as export results, invoices, and accounting period reports.

The response content type depends on the type of file that you retrieve. For example, if you retrieve an invoice PDF, the value of the `Content-Type` header in the response is `application/pdf;charset=UTF-8`.

Other content types include:

-   `text/csv` for CSV files
-   `application/msword` for Microsoft Word files
-   `application/vnd.ms-excel` and `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` for Microsoft Excel files (*.xls* and *.xlsx* respectively)
-   `application/zip` and `application/x-gzip` for ZIP and Gzip files respectively
-   `text/html` for HTML files
-   `text/plain` for text files

The response always contains character encoding information in the `Content-Type` header. For example, `Content-Type: application/zip;charset=UTF-8`.

**Note:** The maximum file size is 2,047 MB. If you have a data request that exceeds this limit, Zuora returns the following 403 response: `<security:max-object-size>2047MB</security:max-object-size>`. Submit a request at [Zuora Global Support](http://support.zuora.com/) to determine if large file optimization is an option for you.

Security**bearerAuth**

Request

##### path Parameters

| file-idrequired | stringThe Zuora ID of the file to retrieve. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/files/{file-id}

Request samples

-   Curl

Copy

curl \-X GET \-H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3" \-H "Accept: application/pdf" "https://rest.zuora.com/v1/files/2c92c08c55534cf00155581fb474314d" \-o invoice.pdf

Response samples

-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "reasons": [

    -   {

        -   "code": "SystemError",

        -   "message": "internal server error"


        }


    ]


}`

---
title: "PUT Files"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Files/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:27:40.534Z"
---

## Restore a file

Restores a previously archived file to its RESTORED status. Once a file is archived, it cannot be used directly until the file is restored using this API.

### Notes

-   This API operation will fail if the count of restored files exceeds the quota limit (1000 by default) in the past 24 hours.
-   The actual restoration process may take between 12 to 48 hours to complete.
-   You can monitor the status of the file restoration process using the [Retrieve file status](https://developer.zuora.com/api-references/api/operation/GET_FileStatus) API operation until the status transitions to `RESTORED`.

Security**bearerAuth**

Request

##### path Parameters

| file-idrequired | stringThe Zuora ID of the file to restore. |
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

put/v1/files/{file-id}/restore

Request samples

-   Curl

Copy

curl \-i \-X PUT \\
  'https://rest.zuora.com/v1/files/402881888e89748b018e897a6a500025/restore' \\
  \-H 'Zuora-Tenant-Id: 17' \\
  \-H 'Zuora-Entity-Ids: 402881868d304631018d304a0f940226' \\
  \-H 'Authorization: Basic YmZkQHp1b3JhLmNvbtJjpdmFjOEw+YhmWy=='

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true,

-   "fileId": "402881888e89748b018e897a6a500025",

-   "status": "RESTORE_IN_PROGRESS"


}`

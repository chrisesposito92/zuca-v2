---
title: "GET Contact"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Contact/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:48:21.050Z"
---

## Retrieve a contact

Retrieves detailed information about a specific contact.

Security**bearerAuth**

Request

##### path Parameters

| contactIdrequired | stringThe ID of the contact that you want to retrieve. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/contacts/{contactId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/contacts/{contactId}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "accountId": "72756e2061726e642026206465736572742075",

-   "accountNumber": "A00000001",

-   "address1": "567, Rose Apartment",

-   "address2": "Gate no. 2",

-   "city": "Seattle",

-   "contactDescription": "This is a description",

-   "country": "United States",

-   "county": "King County",

-   "fax": "123456",

-   "firstName": "peter",

-   "homePhone": "86123456789",

-   "id": "402881a2889f2e4301889f30e64e0019",

-   "lastName": "parker",

-   "mobilePhone": "1234567890",

-   "nickname": "peet",

-   "otherPhone": "11111111111111111",

-   "otherPhoneType": "Work",

-   "personalEmail": "peet@example.com",

-   "state": "Washington",

-   "success": true,

-   "taxRegion": "CA",

-   "workEmail": "work.mail@example.com",

-   "workPhone": "3432",

-   "zipCode": "123134"


}`

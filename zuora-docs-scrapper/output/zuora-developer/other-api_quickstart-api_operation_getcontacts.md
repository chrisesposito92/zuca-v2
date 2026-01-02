---
title: "GetContacts"
url: "https://developer.zuora.com/other-api/quickstart-api/operation/getContacts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:40:46.695Z"
---

## List contacts

Returns a dictionary with a data property that contains an array of contacts, starting after the cursor, if used. Each entry in the array is a separate contact object. If no more contacts are available, the resulting array will be empty. This request should never return an error.

Security**bearerAuth**

Request

##### query Parameters

| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| --- | --- |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call. See the Expand responses section of the Quickstart API Tutorials for detailed instructions. |
| filter[] | Array of stringsA case-sensitive filter on the list. See the Filter lists section of the Quickstart API Tutorials for detailed instructions. |
| sort[] | Array of stringsA case-sensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. account_number.asc) or descending (e.g. account_number.desc). You cannot sort on properties that are arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. |
| page_size | integer [ 1 .. 99 ]Default: 30The maximum number of results to return in a single page. If the specified page_size is less than 1 or greater than 99, Zuora will return a 400 error. |
| fields[] | Array of stringsAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: fields[]=id,created_time |
| contact.fields[] | Array of stringsDeprecatedAllows you to specify which fields are returned in the response.Accepted values custom_fields, created_by_id, updated_by_id, created_time, id, updated_time, account_id, address, home_phone, first_name, last_name, email, work_email, nickname, other_phone, work_phone, mobile_phone, tax_region, other_phone_type, faxExample: contact.fields[]=id,created_time |

##### header Parameters

| zuora-track-id | stringA custom identifier for tracking API requests. If you set a value for this header, Zuora returns the same value in the response header. This header enables you to track your API calls to assist with troubleshooting in the event of an issue. The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), or quote ('). |
| --- | --- |
| async | booleanDefault: falseMaking asynchronous requests allows you to scale your applications more efficiently by leveraging Zuora's infrastructure to enqueue and execute requests for you without blocking. These requests also use built-in retry semantics, which makes them much less likely to fail for non-deterministic reasons, even in extreme high-throughput scenarios. Meanwhile, when you send a request to one of these endpoints, you can expect to receive a response in less than 150 milliseconds and these calls are unlikely to trigger rate limit errors. If set to true, Zuora returns a 202 Accepted response, and the response body contains only a request ID. |
| zuora-entity-ids | stringAn entity ID. If you have Multi-entity enabled and the authorization token is valid for more than one entity, you must use this header to specify which entity to perform the operation on. If the authorization token is only valid for a single entity or you do not have Multi-entity enabled, you do not need to set this header. |
| idempotency-key | stringSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types. This idempotency key should be a unique value, and the Zuora server identifies subsequent retries of the same request using this value. For more information, see Idempotent Requests. |
| accept-encoding | stringInclude a accept-encoding: gzip header to compress responses, which can reduce the bandwidth required for a response. If specified, Zuora automatically compresses responses that contain over 1000 bytes. For more information about this header, see Request and Response Compression. |
| content-encoding | stringInclude a content-encoding: gzip header to compress a request. Upload a gzipped file for the payload if you specify this header. For more information, see Request and Response Compression. |
| zuora-org-ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails.If the header is not set, the operation is performed in scope of the user's accessible orgs. |

Responses

200

Default Response

400

Bad Request

401

Unauthorized

404

Not Found

405

Method Not Allowed

429

Too Many Requests

500

Internal Server Error

502

Bad Gateway

503

Service Unavailable

504

Gateway Timeout

get/contacts

Request samples

-   cURL
-   Java
-   Node

Copy

curl \--request GET     \--url 'https://rest.apisandbox.zuora.com/v2/contacts'     \--header 'Authorization: Bearer 08dacd3fe8b648f6861d5eb506d02a86'     \--header 'Content-Type: application/json'


Response samples

-   200
-   400
-   401
-   404
-   405
-   429
-   500
-   502
-   503
-   504

5 more4295005025035045 more

application/json

Copy

Expand allCollapse all

`{

-   "next_page": "W3sib3JkZXJCeSI6eyJmaWVsZCI6IlVwZGF0ZWREYXRlIiwib3JkZXIiOiJERVNDIn0sInZhbHVlIjoiMjAyMi0xMi0yMFQxMjoyODo1NC0wODowMCJ9LHsib3JkZXJCeSI6eyJmaWVsZCI6IklkIiwib3JkZXIiOiJERVNDIn0sInZhbHVlIjoiMmM5MmMwZjk2YWJjMTdkZTAxNmFiZDYyYmQwYzU4NTQifV0=",

-   "data": [

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-08-03T13:23:21-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-08-03T13:23:21-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "8ad085518262bc17018265525eab3696",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "line2": "Suite 1150",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "United States",

            -   "postal_code": "94065"


            },

        -   "first_name": "Amy",

        -   "last_name": "Lawrence",

        -   "work_email": "amy.lawrence@gmail.com",

        -   "work_phone": "(888) 976-9056"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-08-03T13:23:21-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-08-03T13:23:21-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "8ad085518262bc17018265525eab3696",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "line2": "Suite 1150",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "United States",

            -   "postal_code": "94065"


            },

        -   "first_name": "Amy",

        -   "last_name": "Lawrence",

        -   "work_email": "amy.lawrence@gmail.com",

        -   "work_phone": "(888) 976-9056"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-08-03T13:23:21-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-08-03T13:23:21-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "8ad085518262bc17018265525eab3696",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "line2": "Suite 1150",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "United States",

            -   "postal_code": "94065"


            },

        -   "first_name": "Amy",

        -   "last_name": "Lawrence",

        -   "work_email": "amy.lawrence@gmail.com",

        -   "work_phone": "(888) 976-9056"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-08-03T13:23:21-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-08-03T13:23:21-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "8ad085518262bc17018265525eab3696",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "line2": "Suite 1150",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "United States",

            -   "postal_code": "94065"


            },

        -   "first_name": "Amy",

        -   "last_name": "Lawrence",

        -   "work_email": "amy.lawrence@gmail.com",

        -   "work_phone": "(888) 976-9056"


        },

    -   {

        -   "id": "8ad08ccf8437067601843a7af4e64rq3",

        -   "updated_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "updated_time": "2022-08-03T13:23:21-07:00",

        -   "created_by_id": "2c92c0946a6dffc0016a7faab604299b",

        -   "created_time": "2022-08-03T13:23:21-07:00",

        -   "custom_fields": {

            -   "field__c": "custom field value"


            },

        -   "account_id": "8ad085518262bc17018265525eab3696",

        -   "address": {

            -   "line1": "101 Redwood Shores Parkway",

            -   "line2": "Suite 1150",

            -   "city": "Redwood City",

            -   "state": "California",

            -   "country": "United States",

            -   "postal_code": "94065"


            },

        -   "first_name": "Amy",

        -   "last_name": "Lawrence",

        -   "work_email": "amy.lawrence@gmail.com",

        -   "work_phone": "(888) 976-9056"


        }


    ]


}`

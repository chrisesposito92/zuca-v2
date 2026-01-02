---
title: "GET AllRecordsForCustomObjectType"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AllRecordsForCustomObjectType/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:30.653Z"
---

## List records for a custom object

Lists all object records of the given type. You can also use the `q` query parameter to filter the output records.

### Custom Objects read consistency

Custom Objects support eventually consistency. When you read custom object records, the response might not reflect the result of a recently completed operation and might include some stale data. The operations include creating, updating, and deleting custom object records. If you repeat your read request after a short time, the response should return the latest data.

For example, if you create five records and perform a query that these five records satisfy the query conditions, there might be a delay before these records can be returned in the query result.

Security**bearerAuth**

Request

##### path Parameters

| objectrequired | stringSpecifies the custom object's API name as object. It is case-sensitive. |
| --- | --- |

##### query Parameters

| q | stringThe query string to filter the records of a custom object. See Query syntax of custom object records for more information.Note that the q parameter only applies to filterable fields. |
| --- | --- |
| ids | stringUUIDs of the records to be queried. Each UUID must be a string of 36 characters. For example:GET /objects/records/default/passenger?ids=258d65b2-7bc6-4142-88bc-5184931af493&ids=82ecc9f7-b192-4f88-a4a3-4b2af6c750a1 |
| pageSize | integer [ 1 .. 1000 ]The number of records returned per page in the response. |
| cursor | stringThe cursor points to the last record of the previous result set. The cursor record is not included in the query result. The call returns the first page if cursor is not provided and pageSize is valid. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |

Responses

200

OK

get/objects/records/default/{object}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/objects/records/default/{object}?q=string&ids=string&pageSize=1&cursor=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: 2019-08-24'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "count": 1,

-   "records": [

    -   {

        -   "CreatedById": "58bcc694-0b01-4c38-83d9-679891aee4dc",

        -   "CreatedDate": "2017-06-07T17:26:47.501Z",

        -   "Id": "f4f3d0a8-9d45-43d6-956c-4820f2de7559",

        -   "UpdatedById": "58bcc694-0b01-4c38-83d9-679891aee4dc",

        -   "UpdatedDate": "2017-06-07T17:26:47.501Z",

        -   "age__c": 32,

        -   "email__c": "smith123@example.com",

        -   "home_address__c": "59b38ad1-27d4-40e8-af66-8c138bc382ee",

        -   "last_name__c": "Smith",

        -   "marital_status__c": "Married",

        -   "type": "person",

        -   "version": 1,

        -   "work_address__c": "8a19f16a-2b5e-4a26-bb20-c79cd6984714"


        }


    ]


}`

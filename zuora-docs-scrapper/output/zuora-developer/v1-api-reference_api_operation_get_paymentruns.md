---
title: "GET PaymentRuns"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentRuns/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:47.635Z"
---

## List payment runs

Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.

### Filtering

You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.

If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.

Examples:

-   /v1/payment-runs?status=Processed

-   /v1/payment-runs?targetDate=2017-10-10&status=Pending

-   /v1/payment-runs?status=Completed&sort=+updatedDate


Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| createdById | stringThis parameter filters the response based on the createdById field. |
| createdDate | string <date-time>This parameter filters the response based on the createdDate field. |
| status | stringThis parameter filters the response based on the status field.Enum: "Pending" "Processing" "Completed" "Error" "Canceled" |
| targetDate | string <date>This parameter filters the response based on the targetDate field. |
| updatedById | stringThis parameter filters the response based on the updatedById field. |
| updatedDate | string <date-time>This parameter filters the response based on the updatedDate field. |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.By default, the response data is displayed in descending order by payment run number.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:targetDatestatuscreatedDatecreatedByIdupdatedDateupdatedByIdExamples:/v1/payment-runs?sort=+createdDate/v1/payment-runs?status=Processing&sort=-createdById,+targetDate |

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

get/v1/payment-runs

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payment-runs?page=1&pageSize=20&createdById=string&createdDate=2019-08-24T14%3A15%3A22Z&status=Pending&targetDate=2019-08-24&updatedById=string&updatedDate=2019-08-24T14%3A15%3A22Z&sort=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "nextPage": "/payment-runs?page=2",

-   "paymentRuns": [

    -   {

        -   "applyCreditBalance": false,

        -   "collectPayment": true,

        -   "completedOn": "2017-12-28 13:00:00",

        -   "consolidatedPayment": false,

        -   "createdById": "2c92c0f956bc8fcb0156f8eee04b4d54",

        -   "createdDate": "2017-12-27 13:00:00",

        -   "executedOn": "2017-12-28 13:00:00",

        -   "id": "2c92c0856078bbcb016096576ccb75ca",

        -   "number": "PR-00002121",

        -   "processPaymentWithClosedPM": false,

        -   "runDate": null,

        -   "status": "Completed",

        -   "targetDate": "2017-12-28",

        -   "updatedById": "2c92c0f956bc8fcb0156f8eee04b4d54",

        -   "updatedDate": "2017-12-28 13:00:00"


        }


    ],

-   "success": true


}`

---
title: "GET EmailHistory"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_EmailHistory/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:16.366Z"
---

## List email notification histories

Describes how to get a notification history for notification emails.

### Notes

Request parameters and their values may be appended with a "?" following the HTTPS GET request. Additional request parameter are separated by "&".

For example:

`GET https://rest.zuora.com/v1/notification-history/email?startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000&pageSize=1`

Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| accountId | stringID of an account. By specifying this query parameter, you can filter email notification histories by account. |
| endTime | string <date-time>The end date and time of records to be returned. Defaults to now. Use format yyyy-MM-ddTHH:mm:ss. The maximum date range (endTime - startTime) is three days. |
| startTime | string <date-time>The initial date and time of records to be returned. Defaults to (end time - 1 day). Use format yyyy-MM-ddTHH:mm:ss. The maximum date range (endTime - startTime) is three days. |
| objectId | stringThe Id of an object that triggered an email notification. |
| failedOnly | booleanIf true, only returns failed records. When false, returns all records in the given date range. Defaults to true when not specified. |
| eventCategory | numberCategory of records to be returned by event category.The following formats are supported:{Event Type Namespace}:{Event Type Name} if the Custom Events feature is enabled in your tenant. For example: user.notification:NewSubscriptionCreated.Numeric code of the event category if the Custom Events feature is not enabled in your tenant. For example, 1210. See Event Category Code for more information. |

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

get/v1/notification-history/email

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/notification-history/email?page=1&pageSize=20&accountId=string&endTime=2019-08-24T14%3A15%3A22Z&startTime=2019-08-24T14%3A15%3A22Z&objectId=string&failedOnly=true&eventCategory=0' \\
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

-   "emailHistories": [

    -   {

        -   "accountId": "2c9e8084769a87be0176f0cfa138001e",

        -   "bcc": "ceo@example.com,cto@example.com",

        -   "cc": "bob@example.com,chris@example.com",

        -   "errorMessage": null,

        -   "eventCategory": 1210,

        -   "fromEmail": "no-reply@example.com",

        -   "notification": "New Subscription Created",

        -   "replyTo": "supportexample.com",

        -   "result": "OK",

        -   "sendTime": "2015-01-13T03:31:43",

        -   "subject": "New subscription A-S00000003 was created and activated",

        -   "toEmail": "smith@example.com"


        }


    ],

-   "nextPage": "[https://localhost:8080/apps/v1/notification-history/email?page=2&pageSize=1&startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000](https://localhost:8080/apps/v1/notification-history/email?page=2&pageSize=1&startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000)",

-   "success": true


}`

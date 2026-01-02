---
title: "GET CalloutHistory"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_CalloutHistory/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:15.810Z"
---

## List callout notification histories

Describes how to get a notification history for callouts.

Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| endTime | string <date-time>The final date and time of records to be returned. Defaults to now. Use format yyyy-MM-ddTHH:mm:ss. |
| startTime | string <date-time>The initial date and time of records to be returned. Defaults to (end time - 1 day). Use format yyyy-MM-ddTHH:mm:ss. |
| objectId | stringThe ID of an object that triggered a callout notification. |
| failedOnly | booleanIf true, only return failed records. If false, return all records in the given date range. The default value is true. |
| eventCategory | stringCategory of records to be returned by event category.The following formats are supported:{Event Type Namespace}:{Event Type Name} if the Custom Events feature is enabled in your tenant. For example: user.notification:NewSubscriptionCreated.Numeric code of the event category if the Custom Events feature is not enabled in your tenant. For example, 1210. See Event Category Code for more information. |
| includeResponseContent | boolean |

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

get/v1/notification-history/callout

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/notification-history/callout?page=1&pageSize=20&endTime=2019-08-24T14%3A15%3A22Z&startTime=2019-08-24T14%3A15%3A22Z&objectId=string&failedOnly=true&eventCategory=string&includeResponseContent=true' \\
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

-   "calloutHistories": [

    -   {

        -   "attemptedNum": 3,

        -   "createTime": "2015-01-13T03:33:51",

        -   "eventCategory": 1210,

        -   "eventContext": {

            -   "<Account.Currency>": "USD",

            -   "<Account.CurrencySymbol>": "$",

            -   "<Account.ID>": "402881e54ade80c8014ade884c48000b",

            -   "<Account.Name>": "test",

            -   "<Account.Number>": "A00000001",

            -   "<BillToContact.FirstName>": "Mary",

            -   "<BillToContact.ID>": "402881e54ade80c8014ade884c51000c",

            -   "<BillToContact.LastName>": "Smith",

            -   "<BillToContact.WorkEmail>": "smith@example.com",

            -   "<BillingAccount.ID>": "402881e54ade80c8014ade884c48000b",

            -   "<Contact.ID>": "402881e54ade80c8014ade884c51000c",

            -   "<Event.Category>": "SubscriptionCreated",

            -   "<Event.ID>": "402892fa47866fe701478674a4ff0093",

            -   "<Event.Timestamp>": "2015-01-13T22:31:43.248+0800",

            -   "<Notification>": {

                -   "EmailTemplate": "New Subscription Created Default Email Template",

                -   "Event": "New Subscription Created",

                -   "Profile": "Default Profile",

                -   "calloutAction": true,

                -   "emailAction": true,

                -   "id": "402892fa47866fe701478674a5c100eb",

                -   "updatedBy": "402892fa47866fe7014786749d9b0002",

                -   "updatedOn": "01/12/2015 03:23:08"


                },

            -   "<Object.ID>": "402881e54ae37f31014ae3b514e100fd",

            -   "<Subscription.AutoRenew>": "No",

            -   "<Subscription.CMRR>": "$250.00",

            -   "<Subscription.ContractEffective>": "01/01/2016",

            -   "<Subscription.CreateDate>": "01/13/2015",

            -   "<Subscription.CreatedBy>": "smith@example.com",

            -   "<Subscription.CustomerAcceptance>": "01/01/2016",

            -   "<Subscription.ID>": "402881e54ae37f31014ae3b514e100fd",

            -   "<Subscription.InitialTerm>": "50",

            -   "<Subscription.RenewalTerm>": "0",

            -   "<Subscription.ServiceActivation>": "01/01/2016",

            -   "<Subscription.SubscriptionDetailTable>": {

                -   "Charge Name": "recurringcharge",

                -   "Charge Type": "Recurring",

                -   "Effective Start Date": "01 / 01 / 2016",

                -   "QTY": 5,

                -   "Total": 250,

                -   "Unit Price": 50


                },

            -   "<Subscription.SubscriptionName>": "A-S00000003",

            -   "<Subscription.TCV>": "$12,500.00",

            -   "<Subscription.TermEndDate>": "03/01/2020",

            -   "<Subscription.TermSetting>": "termed",

            -   "<Subscription.TermStartDate>": "01/01/2016"


            },

        -   "notification": "New Subscription Created",

        -   "requestMethod": "POST",

        -   "requestUrl": "[https://www.google.com](https://www.google.com)",

        -   "responseCode": 405


        }


    ],

-   "nextPage": "[https://localhost:8080/apps/v1/notification-history/callout?page=2&pageSize=1&startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000](https://localhost:8080/apps/v1/notification-history/callout?page=2&pageSize=1&startTime=2015-01-12T00:00:00&endTime=2015-01-15T00:00:00&failedOnly=false&eventCategory=1000)",

-   "success": true


}`

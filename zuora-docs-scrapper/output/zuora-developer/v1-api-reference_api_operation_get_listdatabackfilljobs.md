---
title: "GET ListDataBackfillJobs"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_ListDataBackfillJobs/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:32.950Z"
---

## List all data backfill jobs

Security**bearerAuth**

Request

##### header Parameters

| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/uno/data-backfill/listjobs

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://rest.test.zuora.com/v1/uno/data-backfill/listjobs \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

successfailsuccess

Copy

Expand allCollapse all

`{

-   "success": true,

-   "jobs": [

    -   {

        -   "id": "ff8080818bb300af018bb325fe0c58f3",

        -   "type": "RatePlanCharge",

        -   "uploadedFileId": "ff8080818bb300af018bb325fe0c58f2",

        -   "uploadedFileName": "file.csv",

        -   "uploadedFileUrl": "[http://localhost:8080/apps/v1/files/ff8080818bb300af018bb325fe0c58f2](http://localhost:8080/apps/v1/files/ff8080818bb300af018bb325fe0c58f2)",

        -   "uploadedFileSize": "798Byte",

        -   "uploadedBy": "test1699515471903@test.com",

        -   "uploadedOn": "1699517693000",

        -   "resultFileId": "ff8080818bb300af018bb32605c358f6",

        -   "resultFileName": "file.csv_result.zip",

        -   "resultFileUrl": "[http://localhost:8080/apps/v1/files/ff8080818bb300af018bb32605c358f6](http://localhost:8080/apps/v1/files/ff8080818bb300af018bb32605c358f6)",

        -   "totalCount": 2,

        -   "failedCount": 1,

        -   "completedOn": "1699517695000",

        -   "status": "Completed",

        -   "failureMessage": "",

        -   "startedProcessingOn": "1699517693000",

        -   "outputSize": "492Byte",

        -   "outputType": "(url:.csv.zip)",

        -   "inputFileSize": 798,

        -   "outputFileSize": 492,

        -   "processedCount": 2,

        -   "successCount": 1,

        -   "remainingTime": 1,

        -   "remainingTimeText": "",

        -   "completedPercentage": 100


        }


    ]


}`

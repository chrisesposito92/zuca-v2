---
title: "POST CreateDataBackfillJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateDataBackfillJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:25:33.658Z"
---

## Create a data backfill job

Use this operation to perform the following types of data backfill actions. Also, you need to upload a corresponding file to perform a data backfill action.

-   Update Product Rate Plan Charge
-   Update Rate Plan Charge
-   Update Invoice Item
-   Update Credit Memo Detail
-   Update Debit Memo Detail
-   Update Invoice Item Adjustment

For more information, see [Perform data backfill](https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Perform_data_backfill).

Security**bearerAuth**

Request

##### header Parameters

| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |
| --- | --- |

##### Request Body schema: multipart/form-data
required

| typerequired | object (DataBackfillJob) |
| --- | --- |
| filerequired | string <binary>A file containing the data about the fields that you want to backfill. This file must be a .csv file or a zipped .csv file. The maximum file size is 4 MB. The data in the file must be formatted according to the data backfill action type that you want to perform.You can download a file template to view all fields supported for your data backfill. For more information, see Perform data backfill. |
| checksum | string = 32 charactersAn MD5 checksum that is used to validate the integrity of the uploaded file. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/uno/data-backfill/jobs

Request samples

-   cURL

Copy

curl \-X POST \-H 'Authorization: Bearer f21f017e4724445d8647b1f0de7ed6f1' \-F 'file=@"ProductRatePlanChargeBackfillFile.csv"' \-F 'type="ProductRatePlanCharge"' 'https://rest.zuora.com/v1/uno/data-backfill/jobs'

Response samples

-   200
-   500
-   4XX

application/json

successfailsuccess

Copy

`{

-   "success": true,

-   "jobId": "ff8080818bb300af018bb325fe0c58f3"


}`

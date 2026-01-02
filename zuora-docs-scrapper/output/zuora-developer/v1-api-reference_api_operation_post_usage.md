---
title: "POST Usage"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Usage/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:08.059Z"
---

## Upload a usage file

This REST API reference describes how to post or import usage data for one or more accounts in the CSV format. There are no path or query parameters. The data is uploaded using the HTTP multipart/form-data POST method and applied to the user's tenant.

### How this REST API Call Works

The content of the uploaded usage file must follow the format used by the UI import tool. It must be a comma-separated (CSV) file with a corresponding .csv extension. The length of the file name must not exceed 50 characters. The file size must not exceed 4MB. See [Downloading the Usage Template](https://knowledgecenter.zuora.com/CB_Billing/J_Billing_Operations/Usage/C_Import_Usage_Data#Downloading_the_Usage_Template) to learn about how to download the usage file template.

At the completion of the upload, before the file contents are actually being processed, the API returns a response containing the byte count of the received file and a URL for checking the status of the import process. Of the five possible results displayed at that URL (Pending, Processing, Completed, Canceled, and Failed) only a Completed status indicates that the import was successful. The operation is atomic; if any record fails, the file is rejected. In that case, the entire import is rolled back and all stored data is returned to its original state.

To view the actual import status, enter the resulting status URL from the checkImportStatus response using a tool such as POSTMAN. This additional step provides more information about why the import has failed.

To manage the information after a successful upload, use the web-based UI.

### Usage File Format

The usage file uses the following headings:

| Heading | Description | Required |
| --- | --- | --- |
| ACCOUNT_ID | Enter the account number, e.g., the default account number, such as A00000001, or your custom account number. Although this field is labeled as Account_Id, it is not the actual Account ID nor Account Name. | Yes |
| UOM | Enter the unit of measure. This must match the UOM for the usage. | Yes |
| QTY | Enter the quantity. | Yes |
| STARTDATE | Enter the start date of the usage. This date determines the invoice item service period the associated usage is billed to. Date format is based on locale of the current user. Default date format: MM/DD/YYYY. | Yes |
| ENDDATE | Enter the end date of the usage. This is not used in calculations for usage billing and is optional. Date format is based on locale of the current user. Default date format: MM/DD/YYYY.Note: The value of this column is optional, but the column header is required. | No |
| PRODUCT_RATE_PLAN_CHARGE_ID | Enter a product rate plan charge number so that you can charge your customer with a dynamic usage charge for the corresponding uploaded usage record.Note: The value of this column is optional, but the column header is required. To use this field, you must set the X-Zuora-WSDL-Version request header to 146 or higher. Otherwise, an error occurs. | No |
| SUBSCRIPTION_ID | Enter the subscription number or subscription name. If you created the subscription in the Zuora application, Zuora created a number automatically in a format similar to A-S00000001. If you do not provide a value for this field, the associated usage will be added to all subscriptions for the specified Account that use this Unit Of Measure. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the Subscription or Charge ID in each usage record.Note: The value of this column is optional, but the column header is required. | No |
| CHARGE_ID | Enter the charge number (not the charge name). You can see the charge ID, e.g., C-00000001, when you add your rate plan to your subscription and view your individual charges. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the specific Subscription or Charge ID in each usage record. This field is related to the Charge Number on the subscription rate plan.Note: The value of this column is optional, but the column header is required. | No |
| DESCRIPTION | Enter a description for the charge. | No |
| UNIQUE_KEY | Enter a specific identifier for this usage record. Note: This Heading is supported by the following features: Prepaid with Drawdown, and Unbilled Usage. See Upload usage record with unique key for more information. | No |

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: multipart/form-data
required

| filerequired | string <binary>The usage data to import. The supported formats are excel, csv, and zip. |
| --- | --- |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/usage

Request samples

-   Curl

Copy

curl \-X POST \-H "Authorization: Bearer f21f017e4724445d8647b1f0de7ed6f1" \-F "file=@UsageData.csv" "https://rest.zuora.com/v1/usage"

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "checkImportStatus": "/v1/usage/2c92c8f83dcbd8b1013dcce1159900cc/status",

-   "size": 316,

-   "success": true


}`

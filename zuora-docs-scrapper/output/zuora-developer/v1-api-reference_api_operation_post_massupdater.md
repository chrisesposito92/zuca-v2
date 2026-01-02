---
title: "POST MassUpdater"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_MassUpdater/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:13:40.452Z"
---

## Perform a mass action

Describes how to perform a mass action through the REST API.

Using this API method, you send a multipart/form-data request containing a `.csv` file with data about the mass action you want to perform. Zuora returns a key and then asynchronously processes the mass action. You can use the key to get details about the result of the mass action.

If you want to use this operation to perform the Mass Payment Upload (MPU) mass action, see [Mass Payment Upload](https://knowledgecenter.zuora.com/Billing/Finance/Mass_Updater/Mass_Payment_Upload) for more information.

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

| filerequired | string <binary>File containing data about the mass action you want to perform. The file requirements are the same as when uploading a file through the Mass Updater in the Zuora UI. The file must be a .csv file or a zipped .csv file.The maximum file size is 4 MB.The data in the file must be formatted according to the mass action type you want to perform. |
| --- | --- |
| paramsrequired | stringContainer for the following fields. You must format this parameter as a JSON object.actionType (string, Required) - Type of mass action you want to perform. The following mass actions are supported: UpdateAccountingCode, CreateRevenueSchedule, UpdateRevenueSchedule, DeleteRevenueSchedule, ImportFXRate, and MPU.checksum (string) - An MD5 checksum that is used to validate the integrity of the uploaded file. The checksum is a 32-character string. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/bulk

Request samples

-   cURL

Copy

curl \-X POST \-H "Authorization: Bearer f21f017e4724445d8647b1f0de7ed6f1" \-F "file=@CreateRevenueSchedules.csv" \-F "params="{\\"actionType\\": \\"CreateRevenueSchedule\\"}" "https://rest.zuora.com/v1/bulk"

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "bulkKey": "402892f04c97b89a014c97bb30a50003",

-   "success": true


}`

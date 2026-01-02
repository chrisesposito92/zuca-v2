---
title: "GET AttachmentsList"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AttachmentsList/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:28:29.380Z"
---

## List attachments by object type and key

Use the View Attachment REST request to get a list of attachments on an account, an invoice, a subscription, a credit memo, or a debit memo.

You can only use this operation if you have a Billing role that includes the Manage Attachments permission. For more information, see [Billing roles](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/d_Billing_Roles). To change your Billing role, contact your Zuora platform administrator.

**Note**: The Credit and Debit Memos feature is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Security**bearerAuth**

Request

##### path Parameters

| object-typerequired | stringThe type of the object to list attachements for.Enum: "account" "invoice" "subscription" "creditmemo" "debitmemo" |
| --- | --- |
| object-keyrequired | stringID of the object to list attachements for.If object-type is account, specify an account ID or number.If object-type is invoice, specify an invoice ID.If object-type is subscription, specify a subscription number.If object-type is creditmemo, specify a credit memo ID or number.If object-type is debitmemo, specify a debit memo ID or number. |

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |

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

500

Internal Server Error

4XX

Request Errors

get/v1/attachments/{object-type}/{object-key}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/attachments/{object-type}/{object-key}?page=1&pageSize=20' \\
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

Expand allCollapse all

`{

-   "attachments": [

    -   {

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdOn": "2016-03-21 14:00:47",

        -   "description": null,

        -   "fileContentType": "application/pdf",

        -   "fileId": "402896b95397c169015397c2ebc50002",

        -   "fileName": "Search _ Splunk.pdf",

        -   "id": "402896b95397c169015397c2ebca0003",

        -   "success": true,

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedOn": "2016-03-21 14:00:47"


        },

    -   {

        -   "createdBy": "4028e487327fd45a0132829ebb673ff9",

        -   "createdOn": "2016-05-02 13:09:17",

        -   "description": "",

        -   "fileContentType": "text/plain",

        -   "fileId": "8a8083e1545b706a01547316d9094400",

        -   "fileName": "AttachTest.txt",

        -   "id": "8a8083e1545b706a01547316d93f4401",

        -   "updatedBy": "4028e487327fd45a0132829ebb673ff9",

        -   "updatedOn": "2016-05-02 13:09:17"


        }


    ],

-   "success": true


}`

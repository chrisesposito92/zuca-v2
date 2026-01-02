---
title: "CreateBulkJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createBulkJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:20:10.697Z"
---

## Create a bulk job

Creates a new bulk job. The job type can be one of Import, Delete, Update, or Cancel. The response includes the job ID and information needed to upload your data file to S3.

### Next Step: Upload the File to S3

After creating a bulk job, you must upload the data file to Amazon S3 using the information returned in the `uploadFileInfo` object. This includes:

-   `uploadUrl`: The S3 endpoint to which the file must be uploaded.
-   `formFields`: Key-value pairs to include in a multipart/form-data POST request.
-   `jobId`: The ID of the job, used for later submission.

You can use the following cURL command to upload the file:

```
curl --request POST \
  --url '<uploadUrl>' \
  --header 'Content-Type: multipart/form-data' \
  --form 'key=<formFields.key>' \
  --form 'bucket=<formFields.bucket>' \
  --form 'x-amz-algorithm=<formFields["x-amz-algorithm"]>' \
  --form 'x-amz-credential=<formFields["x-amz-credential"]>' \
  --form 'x-amz-date=<formFields["x-amz-date"]>' \
  --form 'Policy=<formFields.Policy>' \
  --form 'x-amz-signature=<formFields["x-amz-signature"]>' \
  --form 'x-amz-security-token=<formFields["x-amz-security-token"]>' \
  --form 'file=@/path/to/your/file.csv'
```

**Note**: Always use the exact form field keys returned in the `formFields` object of the API response. This is a presigned Amazon S3 POST operation and not a Zuora endpoint.

After uploading the file, you must call the "Submit a bulk job for processing" operation endpoint to start processing the job.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json

| namerequired | stringName of the job. Max length is 255 characters |
| --- | --- |
| objectTyperequired | stringType of the object. Supported object types:accountaccountingcodeaccountingperiodamendmentbill-runbill-run-batchesbill-run-filterscontactcredit-memocredit-memo-from-chargecredit-memo-from-invoicedebit-memodebit-memo-from-chargedebit-memo-from-invoiceinvoicejournal-entryjournal-runofferomni-channel-subscriptionorderorder-create-order-line-itemorder-create-subscription-existing-accountorder-create-subscription-existing-account-with-volume-chargeorder-create-subscription-with-new-accountorder-remove-productorder-update-subscription-add-productorder-update-subscription-change-planorder-update-subscription-price-quantity-changepaymentpayment-profilepayment-schedulepayment-schedule-itempayments-simplepayments-unapplyprice-book-itemproductproduct-charge-definitionproduct-rate-planproduct-rate-plan-chargeproduct-rate-plan-charge-tierproduct-rate-plan-definitionrefundrevenue-accounting-codesubscriptionsubscription-add-rate-plansubscription-change-rate-plansubscription-remove-rate-plansubscription-update-rate-plantaxation-itemunitofmeasureusage |
| description | stringShort description of the job. Max length is 255 characters |
| mappings | Array of objectsList of mappings. Each mapping maps a source field to a target field in the object. If the field is an array, the type and arrayType must be specified. |
| headers | Array of stringsList of headers in the source file. Required if the source file does not have a header row. |
| rowIdHeader | stringHeader in the source file that contains the row id. |
| delimiter | stringDelimiter used in the source file. Default is comma. Supported values: comma, tab, pipe, semicolon, colon, caret, tilde, dot/period |
| hasHeaders | booleanIndicates if the source file has a header row. Default is false |
| fileType | stringType of the source file. Supported values: csv, jsonl Default is csv, which means delimited file where the delimiter can be comma but can also be one of the other supported delimitersEnum: "csv" "jsonl" |
| jobType | stringType of the bulk job being created. Default is IMPORTEnum: "Import" "Delete" "Update" "Cancel" |
| isCustomObject | booleanIndicates if the object type is a custom object. Default is false |
| customObjectNamespace | stringNamespace of the custom object. Applicable only when isCustomObject is true. Default namespace is 'default'. |

Responses

200

Job creation successful

post/bulk-data/bulk-jobs

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "name": "string",

-   "objectType": "string",

-   "description": "string",

-   "mappings": [

    -   {

        -   "source": "string",

        -   "target": "string",

        -   "type": "array",

        -   "arrayType": "string"


        }


    ],

-   "headers": [

    -   "string"


    ],

-   "rowIdHeader": "string",

-   "delimiter": "string",

-   "hasHeaders": true,

-   "fileType": "csv",

-   "jobType": "Import",

-   "isCustomObject": true,

-   "customObjectNamespace": "string"


}`

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

-   "uploadUrl": "string",

-   "uploadRequest": {

    -   "uri": "[http://example.com](http://example.com)",

    -   "fields": {

        -   "property1": "string",

        -   "property2": "string"


        }


    },

-   "status": "Created",

-   "jobType": "Import"


}`

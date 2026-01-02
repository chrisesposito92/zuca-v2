---
title: "Create BulkPDFToZIPGeneration"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Create_BulkPDFToZIPGeneration/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:17.617Z"
---

## Export bulk PDF files

The background job that compresses large number of PDF(s) into ZIP files. For answers to frequently asked questions regarding exporting bulk PDF files, see [Export Bulk PDF Files FAQs](https://docs.zuora.com/en/zuora-billing/bill-your-customer/export-bulk-pdf-files/faqs). **Note**: Do not include multiple objectIds with the same PDF file names in a single bulk PDF upload request.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| documentsrequired | Array of objects (DocumentList)An array that contains a collection of objects where each object contains billing document type and their IDs. |
| --- | --- |
| fileNamerequired | string <= 32 charactersThe prefix part of output file name(s). The response will include multiple file URLs. The number of zip files generated corresponds to the number of invoice IDs. Each zip file contains up to 1000 document IDs. Eg: if fileName is "all-invoices-posted-jan-2024" then fileURL(s) will start with the file name followed by an underscore and a number. For instance, all-invoices-posted-jan-2024_1.zip, all-invoices-posted-jan-2024_2.zip, and so on. |
| name | string <= 32 charactersThe name of the job. |
| indexFileFormatrequired | stringThe format of the index file. It contains the metadata about the files and their contents.Enum: "JSON" "CSV" |
| generateMissingPDF | booleanThis flag controls the behavior of whether to generate PDF(s) for billing documents that do not already have one.setting it to true indicates service would go through the provided document ID list, find the billing documents that do not have a generated PDF, generate them all at once, and then proceed to the zipping process.setting it to false indicates service would go through the provided document ID list, find the billing documents that do not have a generated PDF, mark them as Invalid, and skip them from the zipping process. IDs marked as invalid will be included in the response.The default value is false. |
| ignoreArchivedFiles | booleanIgnores archived PDF files during export without causing the entire job request to fail when enabled. |
| persistIndexFile | booleanControls the generation of the index file, allowing you to efficiently handle high volumes of requests. By default, this field is set to true.When set to true, the index file is generated and included in the zip file.When set to false, the index file is not generated and consequently not included in the zip file. |

Responses

200

OK

400

Invalid input

500

Internal Server Error

4XX

Request Errors

post/v1/operations/bulk-pdf

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "documents": [

    -   {

        -   "docType": "Invoice",

        -   "objectIds": [

            -   "402880de8ce7edc3018ce7f18404315a",

            -   "402880de8ce7edc3018ce7f18e0b3804"


            ]


        }


    ],

-   "fileName": "all-invoices-posted-jan-2024",

-   "name": "BulkPDFGenerationJobV1",

-   "indexFileFormat": "JSON",

-   "generateMissingPDF": true,

-   "ignoreArchivedFiles": true


}`

Response samples

-   200
-   400
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "jobId": "402880de8ce7edc3018ce7f18404312a",

-   "jobName": "BulkPDFGenerationJobV1",

-   "status": "Completed",

-   "stepStatus": "PostProcessing",

-   "fileUrls": "<s3-url>",

-   "skippedDocuments": [

    -   {

        -   "docType": "Invoice",

        -   "objectIds": [

            -   "8a90a04d8e323748018e327b4a0825a0"


            ]


        },

    -   {

        -   "docType": "CreditMemo",

        -   "objectIds": [

            -   "402880de8ce7edc3018ce7f18404315a"


            ]


        }


    ],

-   "createdBy": "2c92c8fb7a2d26b6017a2eaa64c72dea",

-   "createdOn": "2024-04-19 05:19:32",

-   "success": true


}`

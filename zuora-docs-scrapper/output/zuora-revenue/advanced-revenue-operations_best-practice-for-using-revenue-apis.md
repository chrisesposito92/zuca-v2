---
title: "Best practice for using Revenue APIs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/best-practice-for-using-revenue-apis"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:52.708Z"
---

# Best practice for using Revenue APIs

This article outlines best practices for integrating large volumes of data with Zuora Revenue using REST APIs, including authentication and data handling techniques.

Zuora Revenue provides various REST APIs to authenticate and integrate data from the source ERP systems with Zuora Revenue. This article provides some best practices for handling large volume data integration. For detailed descriptions about functions, requests, and responses of each REST API, see Zuora Revenue API Reference .

Note:

All Zuora Revenue REST APIs are secured by using HTTPS. The authentication scheme is token-based authentication, which means an authenticated user must generate a token and then use it for all subsequent APIs until the token expires.

-   Upload oe million records to Zuora Revenue.
-   Download one million records for transfer accounting.
-   Use API o submit a predefined program.

## Upload one million records to Zuora Revenue

Use the [Upload file](https://developer.zuora.com/other-api/revenue/operation/POST_UploadFile/) operation to upload text or CSV files to Zuora Revenue. For optimal performance, it is recommended to upload the file with up to 60 thousand records per API request. At most two upload API requests are allowed to run in parallel for each tenant. If you want to upload one million records, split them into 20 files with 50 thousand records in each file and then upload the files one by one.

| Endpoint | /api/integration/v1/upload/file |
| --- | --- |
| Supported file format | text or CSV |
| Data encoding | UTF-8 |

## Download one million records for Transfer Accounting

Downloading the general ledger (GL) batch data from Zuora Revenue is critical during the period close process to take the data to upstream systems. The following options are recommended to download the GL information from Zuora Revenue:

-   Download GL in JSON format

To download the GL data in JSON format, use the [Get transfer batch](https://developer.zuora.com/other-api/revenue/operation/GET_TransferBatch/) operation. This operation can support the download of up to 200 thousand lines in the GL data. Each page can contain up to 10 thousand lines.

| Endpoint | /api/integration/v1/journal/batch/{batchid}/{pagenum} |
| --- | --- |

-   Download GL in CSV format

To download the GL data in CSV format, complete the following steps. This option uses a signed URL from Zuora Revenue to download the GL data, which has no limitation on the number of records for each download.

1.  Use the [Get transfer batch](https://developer.zuora.com/other-api/revenue/operation/GET_TransferBatch/) operation to get the ID of the transfer batch. The returned report ID in the response will be used in the next step
    | Endpoint | /api/integration/v1/journal/list |
    | --- | --- |
    | Response example | { "result": [ { "client_id": 1, "crtd_by": "string", "crtd_dt": "2021-09-20T18:39:50Z", "id": 10043, "name": "string", "status": "string", "updt_by": "string", "updt_dt": "2021-09-20T18:39:50Z", "report_id": 10003 } ], "status": "Success" } |

2.  Use the [Get report data](https://developer.zuora.com/other-api/revenue/operation/GET_ReportsURL/) operation to generate a signed URL for the report ID that is returned by the previous operation.
    | Endpoint | /api/integration/v2/reports/signedurl/{report_id} |
    | --- | --- |
    | Response example | { "signed_url": "<signed_url valid for 30 mins>", "success": true } |

3.  Make an HTTP GET request to download the report from the signed URL. For example, curl --location --request GET '<​signed\_url​>'. The signed URL will be valid for 30 minutes after creation. After the URL expires, you need to repeat Step 2 to generate another URL for download.

    -   Use BI Views APIs to download GL data

    This option is highly recommended for downloading one million records from Zuora Revenue. For more information, see [Integration service (BI Views V2)](/zuora-revenue/advanced-revenue-operations/integration-service-bi-views-v2/overview-of-bi-views-v2).


.

## Use API to submit a predefined program

To submit a predefined program by using [Revenue Jobs](https://developer.zuora.com/other-api/revenue/tag/Revenue-Jobs/) operations, the program ID and the organization ID are required for the API path parameters. The complete workflow includes first retrieving the appropriate IDs to use and then submitting the request to start the program with specified program parameters.

The following example shows how to start the Revpro 3.0 Accounting Transfer Master program by using Revenue APIs.

1.  Use the [Get list of available organizations program](https://developer.zuora.com/other-api/revenue/operation/GET_RevenueOrgDetails/) operation to retrieve a list of organizations that are set up in Zuora Revenue.

    | Endpoint | /api/integration/v1/revenue-orgs |
    | --- | --- |
    | Response example | { "data": [ { "org_id": 1, "org_name": "EMEA" } ] } |

    There is only one organization configured in Zuora Revenue and the organization ID is 1.

2.  Use the [Get list of available programs and program parameters](https://developer.zuora.com/other-api/revenue/operation/GET_ProgramDetails/) operation to retrieve a list of supported programs as well as the available parameters for each program.

    | Endpoint | /api/integration/v1/programs |
    | --- | --- |
    | Response example | { "data": [ { "program_id": 149, "program_name": "Revpro3.0 Accounting Transfer Master" "parameters": [ { "id": 228, "mandatory": "N", "name": "CRITERIA NAME", "sequence": 1, "type": "VARCHAR2" }, { "id": 229, "mandatory": "N", "name": "CRITERIA VALUE", "sequence": 2, "type": "VARCHAR2" }, { "id": 230, "mandatory": "N", "name": "EXCLUDE FLAG", "sequence": 3, "type": "VARCHAR2" } ] } ] } |

    The ID of the Revpro 3.0 Accounting Transfer Master program is 149. Three parameters are available for this program.

3.  Use the [Submit a program with specified parameters](https://developer.zuora.com/other-api/revenue/operation/POST_SubmitRevenueJob/) operation to start the Revpro 3.0 Accounting Transfer Master program. The organization ID in the path is 1 and the program ID is 149. In the request body, the first two parameters (CRITERIA NAME and CRITERIA VALUE) are left empty. The third parameter EXCLUDE FLAG is set to N.

    | Endpoint | /api/integration/v1/{org_id}/programs/{program_id}/submitExample: /api/integration/v1/1/programs/149/submit |
    | --- | --- |
    | Request example | { "parameters": [ { "parameter_id": 228, "sequence": 1, "parameter_value" : "" }, { "parameter_id": 229, "sequence": 2, "parameter_value" : "" }, { "parameter_id": 230, "sequence": 3, "parameter_value" : "N" } ] } |
    | Response example | { "job_id": "26570", "message": "Request ID: 26570 submitted successfully", "success": true } |

    After the operation is submitted successfully, the job ID 26570 is returned, which can be used to check the started job status in the next step.

4.  To check the job status, use the [Get the job status](https://developer.zuora.com/other-api/revenue/operation/GET_RevenueJobStatus/) operation.

    | Endpoint | /api/integration/v1/{org_id}/jobs/{job_id}Example: /api/integration/v1/1/jobs/26570 |
    | --- | --- |
    | Response example | { "data": { "actual_start_date": null, "crtd_by": "SYSADMIN", "crtd_dt": "2021-12-08T18:46:46+00:00", "error_message": "No Period Status Found for ORG_ID:N,this job cannot be submitted", "id": 26570, "sec_atr_val": "2000", "status": "Error", "updt_dt": "2021-12-08T18:46:46+00:00" }, "success": true } |

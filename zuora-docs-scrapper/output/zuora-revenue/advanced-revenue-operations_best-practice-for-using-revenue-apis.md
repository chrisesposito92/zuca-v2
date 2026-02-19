---
title: "Best practice for using Revenue APIs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/best-practice-for-using-revenue-apis"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:40:48.358Z"
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

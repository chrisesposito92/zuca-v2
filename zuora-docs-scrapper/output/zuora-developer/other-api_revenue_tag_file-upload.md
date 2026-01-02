---
title: "File Upload"
url: "https://developer.zuora.com/other-api/revenue/tag/File-Upload/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:38.520Z"
---

# File Upload

The File Upload operations are used to upload large volumes of data as a CSV file in the HTTP body to Zuora Revenue and to get status information about the file upload.

If the data volume is in the range of 40k-60k records per file per request, the Upload file operation can process the data quickly. A unique request ID is generated after the file is successfully received, which can be used to query the upload status in the Get file upload status operation.

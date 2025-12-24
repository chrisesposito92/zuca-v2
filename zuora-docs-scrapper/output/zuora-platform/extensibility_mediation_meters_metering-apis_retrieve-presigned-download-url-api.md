---
title: "Retrieve presigned download URL API"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis/retrieve-presigned-download-url-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:43.433Z"
---

# Retrieve presigned download URL API

Once an export job is finished, it produces one or more files, such as CSV files, and returns file keys. This API converts those file keys into time-limited download URLs.

## Usage

-   Automated ingestion workflow:

    1.  Create export job.

    2.  Use the list-jobs API to find the file keys.

    3.  Call the presigned url API.

    4.  Use the URL to download into your warehouse or data pipeline.

-   Self-service data access. You can build a lightweight UI for internal users to choose filters and request an export and receive a secure download link when it's ready.

-   Secure sharing. Because URLs are presigned and temporary, you can safely hand them off to other internal systems or users without exposing permanent credentials. There is no need to expose S3 or storage details directly.

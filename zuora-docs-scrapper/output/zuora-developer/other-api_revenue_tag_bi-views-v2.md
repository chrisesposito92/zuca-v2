---
title: "BI Views v2"
url: "https://developer.zuora.com/other-api/revenue/tag/BI-Views-v2/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:18.864Z"
---

# BI Views v2

Starting from version 36.008.00, the BI Views V2 operations are provided to download data from the standard BI views. Compared with the previous version, BI Views V1, this new version has the following enhancements:

-   In addition to CSV format, data can also be downloaded in a compressed format, gzip.
-   The number of rows on each downloaded page is increased. In the CSV format, each page can contain up to 10,000 rows. In the gzip format, each page can contain up to 20,000 rows.
-   The data volume of up to 5 million rows per query can be supported by using the BI Views V2 operations.
-   A continuation token is introduced to accelerate data download for multiple pages. After a request is made for the first page, a continuation token is returned in the response header. Meanwhile, subsequent pages are cached by the system. Using the continuation token in the subsequent requests will make the system to retrieve data from the cache instead of re-executing the query against the database.
-   An operation to query the row count is introduced. You can know the number of rows to be returned before the actual download.

For more information about the BI Views V2 operations, such as new feature introduction, suggested pattern to consume these APIs, and sample codes, see [Integration service (BI Views V2)](https://knowledgecenter.zuora.com/Zuora_Revenue/Y_Integration_service_\(BI_Views_V2\)) in Zuora Revenue Knowledge Center.

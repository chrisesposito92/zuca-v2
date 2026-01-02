---
title: "Inbound"
url: "https://developer.zuora.com/other-api/revenue/tag/Inbound/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:39.661Z"
---

# Inbound

The Inbound operations are used to upload data in the CSV format to Zuora Revenue. As a prerequisite, the upload template definitions must be present in Zuora Revenue. Then, you specify the template name, file name, authentication token, and the CSV data in HTTP body of the inbound operations to upload data. It is recommended to use the Create upload operation for the CSV file than contains less than 20k lines.

After the data is uploaded to the pre-stage table, Zuora Revenue scheduler will load the CSV content to corresponding staging tables in Zuora Revenue. You can query the upload status by using the Get upload status operation.

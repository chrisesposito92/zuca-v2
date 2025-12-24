---
title: "Get results files"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/get-results-files"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:13.160Z"
---

# Get results files

Retrieve results files using the API operation, with a maximum size of 2,047 MB, purged after 3 days.

Use the [Retrieve a file](https://www.zuora.com/developer/api-references/api/operation/GET_Files/) API operation to retrieve the results in the specified file format. The AQuA results files are purged after 3 days. Note that the maximum size of the result file is 2,047 MB.

The following code snippet is an example CSV output file:

Accounting Period: ID,Accounting Period: Start Date,Accounting Period: End Date,Accounting Period: Fiscal Year,Accounting Period: Name,Accounting Period: Status 2c9082e8468d10b501468d93dc6301c0,03/01/2013,03/31/2013,2013,new3,Open 2c9082e8468d29a401468d2ab9150212,04/01/2013,,0,Open-Ended,Open

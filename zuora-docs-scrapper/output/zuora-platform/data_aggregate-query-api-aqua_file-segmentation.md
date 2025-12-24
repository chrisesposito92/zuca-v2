---
title: "File segmentation"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/file-segmentation"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:20.085Z"
---

# File segmentation

The AQuA File Segmentation feature allows retrieval of data in multiple files, enhancing performance for large datasets. It is recommended to use stateless mode for bulk data extraction.

The AQuA File Segmentation feature enables you to retrieve data in multiple files instead of one complete file. File Segmentation is useful if you have hundreds of thousands of records in the database.

Note:

To benefit from File Segmentation, you must be using AQuA in stateful mode. However, Zuora now highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices.

To enable File Segmentation for your Zuora tenant, submit a request at [Zuora Global Support](https://support.zuora.com/).

## Effect of File Segmentation

File Segmentation affects responses to [Retrieve a job](https://www.zuora.com/developer/api-references/api/operation/GET_BatchQueryJob/) and [Retrieve the last completed aggregate query job](https://www.zuora.com/developer/api-references/api/operation/GET_LastBatchQueryJob/) calls for full data loads in stateful mode. File Segmentation does not affect responses to Get Job Results and Get Last Job Completed calls for incremental data loads in stateful mode.

For full data loads in stateful mode:

-   If File Segmentation is disabled, responses contain a string field called `fileId` for each completed batch. The value of `fileId` identifies a file that contains all records from the full query results.

-   If File Segmentation is enabled, responses contain an array field called `segments` for each completed batch. Each value in `segments` identifies a file that contains some records from the full query results. Each file identified by `segments` contains at most 500,000 records from the full query results. You cannot change this size limit. Together, the files identified by `segments` provide all records from the full query results.


To download a query results file, use [Retrieve a file](https://www.zuora.com/developer/api-references/api/operation/GET_Files/).

## Examples

The following example demonstrates how to download full query results if File Segmentation is enabled.

Submit the query using [Submit an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/POST_BatchQueryJob/):

`POST https://rest.zuora.com/v1/batch-query/`

Request body in JSON format:

{ "format": "csv", "version": "1.1", "name": "Example", "encrypted": "none", "useQueryLabels": "true", "partner": "salesforce", "project": "00170000011K3Ub", "queries": \[ { "name": "Account", "query": "select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName, BillToContact.Id, SoldToContact.Id from Account", "type": "zoqlexport", "deleted": { "column": "Deleted", "format": "Boolean" } } \] }

Response body in JSON format:

{ "batches": \[ { "deleted": { "column": "Deleted", "format": "Boolean" }, "full": true, "name": "Account", "query": "select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName, BillToContact.Id, SoldToContact.Id from Account", "status": "pending", "recordCount": 0, "apiVersion": "60.0", "batchType": "zoqlexport", "batchId": "402881824835bb2a0148419305d602a7" } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "402881824835bb2a0148419305d402a6", "version": "1.1", "format": "CSV", "status": "submitted", "encrypted": "none" }

Get the job status using [Retrieve a job](https://www.zuora.com/developer/api-references/api/operation/GET_BatchQueryJob/):

`GET https://rest.zuora.com/v1/batch-query/jobs/402881824835bb2a0148419305d402a6`

Response body in JSON format:

{ "batches": \[ { "deleted": { "column": "Deleted", "format": "Boolean" }, "full": true, "name": "Account", "query": "select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName, BillToContact.Id, SoldToContact.Id from Account", "status": "completed", "recordCount": 88, "apiVersion": "60.0", "batchType": "zoqlexport", "batchId": "402881824835bb2a0148419305d602a7", "segments": \[ "402881824835bb2a01484193065e02ab", "402881824835bb2a01484193066602ac", "402881824835bb2a01484193066e02ad", "402881824835bb2a01484193067602ae", "402881824835bb2a01484193067f02af", "402881824835bb2a01484193068602b0", "402881824835bb2a01484193068e02b1", "402881824835bb2a01484193069502b2", "402881824835bb2a01484193069c02b3", "402881824835bb2a0148419306a202b4", "402881824835bb2a0148419306a902b5", "402881824835bb2a0148419306b102b6", "402881824835bb2a0148419306b802b7", "402881824835bb2a0148419306bf02b8", "402881824835bb2a0148419306c502b9", "402881824835bb2a0148419306cc02ba", "402881824835bb2a0148419306d302bb", "402881824835bb2a0148419306d902bc" \] } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "402881824835bb2a0148419305d402a6", "version": "1.1", "format": "CSV", "startTime": "2014-09-04 09:50:27", "status": "completed", "encrypted": "none" }

Use [Retrieve a file](https://www.zuora.com/developer/api-references/api/operation/GET_Files/) to download each file listed in the `segments` array:

`GET https://rest.zuora.com/v1/file/402881824835bb2a01484193065e02ab`

`GET https://rest.zuora.com/v1/file/402881824835bb2a01484193066602ac`

`GET https://rest.zuora.com/v1/file/402881824835bb2a01484193066e02ad`

And so on.

## Limitation

-   If any function is used in the AQuA query, for example, `date(UpdatedDate)` , the exported file will not be segmented for full data loads in stateful mode even if the File Segmentation feature is enabled.

-   File Segmentation does not support aliases in the query. For example, `select Name from Account` is supported but the `select Name as CustomerName from Account` query is not supported.

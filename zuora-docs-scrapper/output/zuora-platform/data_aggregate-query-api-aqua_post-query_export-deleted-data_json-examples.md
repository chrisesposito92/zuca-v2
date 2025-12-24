---
title: "JSON Examples"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/post-query/export-deleted-data/json-examples"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:47.838Z"
---

# JSON Examples

Provides examples of JSON requests for full and incremental data loads, highlighting the handling of deleted records in Zuora.

## Example 1

This example shows how deleted records are not extracted for a full load, making the MyDeleted column = 0 or False for all the records. To do so, submit a full load JSON request with the deleted column as numeric.

HTTP Request:

POST https://rest.zuora.com/v1/batch-query/ POST https://apisandbox.zuora.com/v1/batch-query/

Download File:

Account.MyDeleted,Account: ID,Account: Name,Account: Account Balance,Account: Tax Exempt Status, Account: Auto Pay,Account: Currency,Bill To: ID,Sold To: ID 0,40288187485e400101485e426c6f0d2c,name1410330684509,77.86,,false,USD,40288187485e400101485e426c760d2d,40288187485e400101485e426c7c0d2e 0,40288187485e400101485e426f770da8,name1410330685288,77.86,,false,USD,40288187485e400101485e426f7e0da9, 40288187485e400101485e426f840daa 0,40288187485e400101485e4271fd0e08,name1410330685934,77.86,,false,USD, 40288187485e400101485e4272040e09,40288187485e400101485e42720a0e0a 0,40288187485e400101485e42748e0e68, name1410330686592,77.86,,false,USD,40288187485e400101485e4274990e69,40288187485e400101485e4274a00e6a 0,40288187485e400101485e42772d0ec8,name1410330687262,77.86,,false,USD,40288187485e400101485e4277350ec9, 40288187485e400101485e42773b0eca 0,40288187485e400101485e4279bb0f28,name1410330687915,77.86,,false,USD, 40288187485e400101485e4279c20f29,40288187485e400101485e4279c90f2a 0,40288187485e400101485e427c4e0f88,name1410330688575,77.86,,false,USD,40288187485e400101485e427c550f89,40288187485e400101485e427c5b0f8a 0,40288187485e400101485e427ed60fe8,name1410330689222,77.86,,false,USD,40288187485e400101485e427edc0fe9, 40288187485e400101485e427ee20fea 0,40288187485e400101485e4281821048,name1410330689905,77.86,,false,USD, 40288187485e400101485e42818d1049,40288187485e400101485e428193104a 0,40288187485e400101485e42841e10a8,name1410330690570,77.86,,false,USD,40288187485e400101485e42842610a9,40288187485e400101485e42842c10aa 0,40288187485e400101485e42bfc81108,name1410330705849,0,,false,USD,40288187485e400101485e42bfcf1109, 40288187485e400101485e42bfd5110a

## Example 2

This example show how to delete an existing account and create a new account before an incremental load. This results in two records. The deleted account record has the deleted flag = 1 or True, and the newly created account record has the deleted flag = 0.

1.  Submit an incremental JSON request.

    HTTP request:

    POST https://www.zuora/v1/batch-query/ POST https://apisandbox.zuora.com/v1/batch-query/

    JSON request:

    { "format": "csv", "version": "1.1", "name": "Example", "encrypted": "none", "partner": "salesforce", "project": "00170000011K3Ub", "queries": \[ { "name": "Account", "query": "select Id,Name,Balance,TaxExemptStatus,AutoPay,Currency, BillToContact.Id, SoldToContact.Id from Account", "type": "zoqlexport", "apiVersion": "20.0", "deleted": { "column": "MyDeleted", "format": "Numeric" } } \] }

    JSON response:

    { "batches": \[ { "deleted": { "column": "MyDeleted", "format": "Numeric" }, "full": false, "name": "Account", "query": "select Id,Name,Balance,TaxExemptStatus,AutoPay,Currency, BillToContact.Id, SoldToContact.Id from Account", "status": "pending", "recordCount": 0, "apiVersion": "20.0", "batchType": "zoqlexport", "batchId": "4028818748597d2f01485fbe4d8d05db" } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "4028818748597d2f01485fbe4d8805da", "version": "1.1", "format": "CSV", "status": "submitted", "encrypted": "none" }
2.  Get the job details

    HTTP request:

    GET https://www.zuora.com/v1/batch-query/jobs/4028818748597d2f01485fbe4d8805da GET https://apisandbox.zuora.com/v1/batch-query/jobs/4028818748597d2f01485fbe4d8805da

    JSON response:

    { "batches": \[ { "deleted": { "column": "MyDeleted", "format": "Numeric" }, "full": false, "name": "Account", "message": "", "query": "select Id,Name,Balance,TaxExemptStatus,AutoPay,Currency, BillToContact.Id, SoldToContact.Id from Account", "status": "completed", "recordCount": 2, "apiVersion": "20.0", "fileId": "4028818748597d2f01485fbe4e1105dd", "batchType": "zoqlexport", "batchId": "4028818748597d2f01485fbe4d8d05db" } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "4028818748597d2f01485fbe4d8805da", "version": "1.1", "format": "CSV", "startTime": "2014-09-10 06:26:20", "status": "completed", "encrypted": "none"
3.  Retrieve the download file.

    HTTP request:

    GET https://www.zuora.com/v1/file/4028818748597d2f01485fbe4e1105dd GET https://apisandbox.zuora.com/v1/file/4028818748597d2f01485fbe4e1105dd

    Download file:

    Account.MyDeleted,Account: ID,Account: Name,Account: Account Balance,Account: Tax Exempt Status, Account: Auto Pay,Account: Currency,Bill To: ID,Sold To: ID 0,4028818748597d2f01485fbe171805d4,testIncremenatlLoad,0,No,false,USD,4028818748597d2f01485fbe172a05d5, 4028818748597d2f01485fbe172a05d5 1,40288187485e400101485e42841e10a8,name1410330690570,77.86,,false,USD,,

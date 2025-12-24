---
title: "Get last job completed"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/get-last-job-completed"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:14.702Z"
---

# Get last job completed

Learn how to use the API operation to retrieve details of the last completed aggregate query job in Zuora.

Use the [Retrieve the last completed aggregate query job](https://www.zuora.com/developer/api-references/api/operation/GET_LastBatchQueryJob/) API operation to get the details of the last completed job.

The completed AQuA jobs that were created 180 days ago are deleted permanently from Zuora, so you cannot query these jobs through API or AQuA job finder.

See the following JSON and cURL examples to learn how to use this API opration.

HTTP request:

`GET https://www.zuora.com/apps/api/batch-query/jobs/partner/salesforce/ project/00170000011K3Ub`

`GET https://apisandbox.zuora.com/apps/api/batch-query/jobs/partner/salesforce/ project/00170000011K3Ub`

JSON response:

{ "batches": \[ { "full": false, "name": "AccountingPeriod", "message": "", "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod", "status": "completed", "recordCount": 0, "apiVersion": "60.0", "fileId": "402881824835bb2a01483c1e67c7025d", "batchType": "zoqlexport", "batchId": "402881824835bb2a01483c1e678c025b" } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "402881824835bb2a01483c1e678a025a", "version": "1.1", "format": "CSV", "startTime": "2014-09-03 08:24:58", "status": "completed", "encrypted": "none" }

## cURL Example

cURL request:

echo echo "============= Project and Partner last processed job details ===========" echo curl -i -k -u $USER\_NAME:$PASSWORD -H "Accept:application/json" -X GET $BASE\_URL/api/batch-query/jobs/partner/$PARTNER/project/$PROJECT

cURL response:

HTTP/1.1 200 OK Server: Apache-Coyote/1.1 Content-Type: application/json Transfer-Encoding: chunked Date: Fri, 05 Sep 2014 11:45:36 GMT { "batches" : \[ { "full" : true, "name" : "AccountingPeriod", "query" : "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod", "status" : "completed", "recordCount" : 1, "apiVersion" : "60.0", "batchType" : "zoqlexport", "batchId" : "402881824835bb2a01484577116e035e", "segments" : \[ "402881824835bb2a0148457711ae0361" \] } \], "project" : "00170000011K3Ub", "partner" : "salesforce", "name" : "Example", "id" : "402881824835bb2a01484577116c035d", "version" : "1.1", "format" : "CSV", "startTime" : "2014-09-05 03:58:24", "status" : "completed", "encrypted" : "none" }

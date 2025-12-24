---
title: "Get Job Results"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/get-job-results"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:10.447Z"
---

# Get Job Results

Learn how to use the Retrieve an aggregate query job API operation to obtain job results using the Job ID, and understand the limitations regarding completed AQuA jobs.

Use the [Retrieve an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/GET_BatchQueryJob/) API operation to retrieve an aggregate query using the Job ID.

Note that the completed AQuA jobs that were created 180 days ago are deleted permanently from Zuora, so you cannot query these jobs through API or AQuA job finder.

See the following JSON and cURL example to learn how to use this operation.

`GET https://rest.zuora.com/v1/batch-query/jobs/{id}`

`GET https://rest.apisandbox.zuora.com/v1/batch-query/jobs/{id}`

JSON response:

{ "batches": \[ { "full": true, "name": "AccountingPeriod", "message": "", "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod", "status": "completed", "recordCount": 1, "apiVersion": "60.0", "fileId": "402881824835bb2a01483c19f8190259", "batchType": "zoqlexport", "batchId": "402881824835bb2a01483c19f7da0257" } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "402881824835bb2a01483c19f7d70256", "version": "1.1", "format": "CSV", "startTime": "2014-09-03 08:20:07", "status": "completed", "encrypted": "none" }

## cURL Example

cURL request:

echo echo "============= Get Aqua Job Details ===========" echo curl -i -k -u $USER\_NAME:$PASSWORD -H "Accept:application/json" -X GET $BASE\_URL/api/batch-query/jobs/$JOBID

cURL response:

HTTP/1.1 200 OK Content-Type: application/json Date: Fri, 05 Sep 2014 11:34:35 GMT Transfer-Encoding: chunked Connection: Keep-Alive { "batches" : \[ { "full" : true, "name" : "AccountingPeriod", "query" : "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod", "status" : "completed", "recordCount" : 132, "batchId" : "e20b07474841608a01484592147305d3", "apiVersion" : "59.0", "segments" : \[ "e20b07474841608a01484592159c05d7" \], "batchType" : "zoqlexport" } \], "project" : "00170000011K3Ub", "partner" : "salesforce", "name" : "Example", "id" : "e20b07474841608a01484592147005d2", "version" : "1.1", "startTime" : "2014-09-05 04:27:54", "format" : "CSV", "status" : "completed", "encrypted" : "none" }

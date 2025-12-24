---
title: "Post Query"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/post-query"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:42.499Z"
---

# Post Query

Learn how to use the Submit an aggregate query job API operation to submit aggregated ZOQL and Export ZOQL queries, with examples in JSON and cURL.

Use the [Submit an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/POST_BatchQueryJob/) API operation to submit an aggregated list of ZOQL and Export ZOQL queries.

The following section provides JSON and cURL examples to use this API operation.

HTTP request:

`POST` `https://rest.zuora.com/v1/batch-query/`

`POST` `https://rest.apisandbox.zuora.com/v1/batch-query/`

-   JSON Full Load example

    -   JSON request:

        { "format" : "csv", "version" : "1.1", "name" : "Example", "encrypted" : "none", "useQueryLabels" : "true", "partner" : "salesforce", "project" : "00170000011K3Ub", "dateTimeUtc" : "true", "queries" : \[ { "name" : "AccountingPeriod", "query" : "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod", "type" : "zoqlexport" }\] }
    -   JSON response (Full load):

        { "encrypted": "none", "partner": "salesforce", "useLastCompletedJobQueries": false, "project": "00170000011k3ub", "batches": \[ { "localizedStatus": "pending", "apiVersion": "91.0", "full": false, "recordCount": 0, "batchId": "2c92c0f966cd4f580166ec0ac8a75bb8", "batchType": "zoqlexport", "status": "pending", "name": "AccountingPeriod", "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod" } \], "status": "submitted", "name": "Example", "id": "2c92c0f966cd4f580166ec0ac89d5bb7", "version": "1.1", "format": "CSV" }
-   JSON Incremental Load example

    -   JSON request:

        { "format" : "csv", "version" : "1.1", "name" : "Example", "encrypted" : "none", "useQueryLabels" : "true", "partner" : "salesforce", "project" : "00170000011K3Ub", "dateTimeUtc" : "true", "queries" : \[ { "name" : "AccountingPeriod", "query" : "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod", "type" : "zoqlexport" }\] }
    -   JSON response (Incremental load):

        { "encrypted": "none", "partner": "salesforce", "useLastCompletedJobQueries": false, "project": "00170000011k3ub", "batches": \[ { "localizedStatus": "pending", "apiVersion": "91.0", "full": false, "recordCount": 0, "batchId": "2c92c0f966cd4f580166ec0ac8a75bb8", "batchType": "zoqlexport", "status": "pending", "name": "AccountingPeriod", "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod" } \], "status": "submitted", "name": "Example", "id": "2c92c0f966cd4f580166ec0ac89d5bb7", "version": "1.1", "format": "CSV" }
-   CURL example

    Note: When processing a request through a curl shell script, you must enclose the field value in nested single double single quotes, such as Invoice.Status=`'"'Posted'"'`
    -   JSON request:

        USER\_NAME="ZUORA\_API\_USERNAME" PASSWORD="PASSWORD" BASE\_URL="https://www.zuora.com/apps" echo echo "============= Posting the Aqua Job ===========" echo curl -i -k -u $USER\_NAME:$PASSWORD -H "Content-Type:application/json" -H "Accept:application/json" -d ' { "format" : "csv", "version" : "1.1", "name" : "Example", "encrypted" : "none", "useQueryLabels" : "true", "partner" : "salesforce", "project" : "00170000011K3Ub", "dateTimeUtc" : "true", "queries" : \[ { "name" : "Invoice", "query" : "select Invoice.Amount, Invoice.Balance, Invoice.InvoiceDate, Invoice.InvoiceNumber from Invoice where ( Invoice.Status='"'Posted'"')", "type" : "zoqlexport" }\] } ' -X POST $BASE\_URL/api/batch-query/
    -   Curl response:

        HTTP/1.1 200 OK Content-Type: application/json Date: Fri, 05 Sep 2014 11:27:54 GMT Transfer-Encoding: chunked Connection: Keep-Alive { "encrypted": "none", "partner": "salesforce", "useLastCompletedJobQueries": false, "project": "00170000011k3ub", "batches": \[ { "localizedStatus": "pending", "apiVersion": "91.0", "full": false, "recordCount": 0, "batchId": "2c92c0f966cd4f580166ec0ac8a75bb8", "batchType": "zoqlexport", "status": "pending", "name": "AccountingPeriod", "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status from AccountingPeriod" } \], "status": "submitted", "name": "Example", "id": "2c92c0f966cd4f580166ec0ac89d5bb7", "version": "1.1", "format": "CSV" }

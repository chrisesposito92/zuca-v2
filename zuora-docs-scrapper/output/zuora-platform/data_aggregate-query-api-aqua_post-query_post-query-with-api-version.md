---
title: "Post query with API version"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/post-query/post-query-with-api-version"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:50.543Z"
---

# Post query with API version

Learn how to use the Submit an aggregate query job API operation with the apiVersion query parameter to ensure consistent query performance.

Use the [Submit an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/POST_BatchQueryJob/) API operation with the `apiVersion` query parameter to submit an aggregate query with a specified API version.

For integration purposes, specify the `apiVersion` to ensure consistent and reliable query performance. For many other reporting purposes you do not have to specify the `apiVersion` and by default, AQuA uses the latest Zuora API version to execute the query.

The following sections provides JSON examples to use this API operation.

## Example 1

This example shows submitting a JSON request with the apiVersion = 58.0.

HTTP request:

`POST https://www.zuora.com/apps/api/batch-query/`

`POST https://apisandbox.zuora.com/apps/api/batch-query/`

JSON request:

{ "format": "csv", "version": "1.1", "name": "Example", "encrypted": "none", "partner": "salesforce", "project": "00170000011K3Ub", "queries": \[ { "name": "Account", "query": "select UpdatedDate from ProductRatePlanCharge", "type": "zoqlexport", "apiVersion": "58.0", "deleted": { "column": "Deleted", "format": "Boolean" } } \] }

Successful JSON response:

{ "batches": \[ { "deleted": { "column": "Deleted", "format": "Boolean" }, "full": true, "name": "Account", "query": "select UpdatedDate from ProductRatePlanCharge", "status": "pending", "recordCount": 0, "apiVersion": "58.0", "batchType": "zoqlexport", "batchId": "402881824835bb2a0148463a2c3804d0" } \], "project": "00170000011K3Ub", "partner": "salesforce", "name": "Example", "id": "402881824835bb2a0148463a2c3704cf", "version": "1.1", "format": "CSV", "status": "submitted", "encrypted": "none" }

## Example 2

This example shows submitting a JSON request with the apiVersion= 19.0.

HTTP request:

`POST https://www.zuora.com/apps/api/batch-query/`

`POST https://apisandbox.zuora.com/apps/api/batch-query/`

{ "format": "csv", "version": "1.1", "name": "Example", "encrypted": "none", "partner": "salesforce", "project": "00170000011K3Ub", "notifyUrl" : "http://requestb.in/1ju8vhu1", "queries": \[ { "name": "Account", "query": "select Id,ProductRatePlan.Id,BillCycleDay,AccountingCode,ChargeModel,ChargeType,Description,Name,UpdatedDate from ProductRatePlanCharge", "type": "zoqlexport", "apiVersion": "19.0", "deleted": { "column": "Deleted", "format": "Boolean" } } \] }

JSON response with error:

Error.zoql.noSuchFieldId\\n

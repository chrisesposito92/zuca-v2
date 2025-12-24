---
title: "Examples"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-stateless-and-stateful-modes/examples"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:08.039Z"
---

# Examples

Learn how to use AQuA queries to retrieve data from custom fields and deleted records for enhanced integration.

## Full Load for a New Query

For example, if you want to retrieve the data of two custom fields from Invoice object, that were not in the previous AQUA queries, you can add a new query "`Select My_Custom1__c, My_Custom2__c From Invoice`" in the AQUA queries. Stateful AQUA returns all records of Invoice object, containing these two custom fields.

## Retrieve Deleted Data

The following use case provides an example of how to retrieve deleted data.

In addition to the query capabilities currently supported by ZOQL and Export ZOQL, AQUA can retrieve records that have been deleted. This capability is especially important if you use Stateful AQUA for continuous data integration.

JSON request:

{ "format":"gzip", "version" : "1.1", "encrypted" : "none", "useQueryLabels" : "true", "partner" : "salesforce", "project" : "00170000011K3Ub", "name" : "submit\_002", "queries" : \[ { "name" : "CreditBalanceAdjustment", "type" : "zoql", "query" : "select AccountId,AccountingCode,AdjustmentDate,Amount,CreatedDate,Id,Number, SourceTransactionType,Status,Type,UpdatedDate from CreditBalanceAdjustment" }, { "name" : "AccountingPeriod", "type" : "zoql", "query" : "select Id,StartDate,EndDate,FiscalYear,Name,Status,UpdatedDate from AccountingPeriod" }, { "name" : "ProductRatePlan", "type" : "zoql", "query" : "select Id, Description, Name, CreatedDate, EffectiveEndDate, EffectiveStartDate, ProductId, UpdatedDate from ProductRatePlan" }, { "name" : "InvoiceAdjustmentQuery" , "type" : "zoqlexport", "query" : "select AccountingCode,CancelledOn,CreatedDate,Id,ImpactAmount, Invoice.Id,InvoiceNumber,AdjustmentNumber,AdjustmentDate,Amount, Status,Account.Id,Type,ReasonCode,UpdatedDate from InvoiceAdjustment", "deleted" : { "column" : "MyDeletedColumn", "format" : "Boolean" // Remember it is Boolean not boolean. } } \] }

JSON response:

{ "partner" : "salesforce", "project" : "00170000011K3Ub", "batches" : \[ { "name" : "CreditBalanceAdjustment", "query" : "select AccountId,AccountingCode,AdjustmentDate,Amount,CreatedDate,Id,Number,SourceTransactionType,Status,Type,UpdatedDate from CreditBalanceAdjustment", "status" : "pending", "recordCount" : 0, "batchType" : "zoql", "batchId" : "2c9083c346f3830d0146f3867cc1056a" }, { "name" : "AccountingPeriod", "query" : "select Id,StartDate,EndDate,FiscalYear,Name,Status,UpdatedDate from AccountingPeriod", "status" : "pending", "recordCount" : 0, "batchType" : "zoql", "batchId" : "2c9083c346f3830d0146f3867cc3056b" }, { "name" : "ProductRatePlan", "query" : "select Id, Description, Name, CreatedDate, EffectiveEndDate, EffectiveStartDate, ProductId, UpdatedDate from ProductRatePlan", "status" : "pending", "recordCount" : 0, "batchType" : "zoql", "batchId" : "2c9083c346f3830d0146f3867cc5056c" }, { "deleted" : { "column" : "MyDeletedColumn", "format" : "Boolean" }, "full" : true, "name" : "InvoiceAdjustmentQuery", "query" : "select AccountingCode,CancelledOn,CreatedDate,Id,ImpactAmount,Invoice.Id,InvoiceNumber, AdjustmentNumber,AdjustmentDate,Amount,Status,Account.Id,Type,ReasonCode,UpdatedDate from InvoiceAdjustment", "status" : "pending", "recordCount" : 0, "batchType" : "zoqlexport", "batchId" : "2c9083c346f3830d0146f3867cc7056d" } \], "name" : "submit\_002", "id" : "2c9083c346f3830d0146f3867ca90569", "version" : "1.1", "format" : "GZIP", "status" : "submitted", "encrypted" : "none" }

---
title: "Delete a running job"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/delete-a-running-job"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:17.600Z"
---

# Delete a running job

Learn how to delete a running job using the Zuora API, including examples of HTTP requests and responses.

Use the [Cancel a running aggregate query job](https://www.zuora.com/developer/api-references/api/operation/DELETE_BatchQueryJob/) API operation to delete the current job, only if the job is not complete. If the job is complete, an error is thrown.

The following section provides JSON and cURL examples to use this API operation.

HTTP request:

`DELETE https://www.zuora.com/apps/api/batch-query/jobs/e20b07474688ad5001468daf10e501de`

`DELETE https://apisandbox.zuora.com/apps/api/batch-query/jobs/ e20b07474688ad5001468daf10e501de`

JSON response:

{ "name": "June10", "id": "e20b07474688ad5001468daf10e501de", "version": "1.1", "format": "CSV", "status": "cancelled", "batches": \[ { "name": "InvoiceItemAdjustment", "message": "", "query": "select AccountingCode,CancelledDate,CreatedDate,Id,InvoiceId,InvoiceItemName, InvoiceNumber,SourceType,AdjustmentNumber,ServiceStartDate,ServiceEndDate,AdjustmentDate, Amount,Status,AccountId,SourceId,Type,ReasonCode, UpdatedDate from InvoiceItemAdjustment", "status": "completed", "recordCount": 1580, "fileId": "e20b07474688ad5001468daf155f01f5", "batchId": "e20b07474688ad5001468daf10ea01df", "batchType": "zoqlexport" }, { "name": "InvoiceAdjustment", "message": "", "query": "select AccountingCode,CancelledOn,CreatedDate,Id,ImpactAmount,Invoice.Id, InvoiceNumber,AdjustmentNumber,AdjustmentDate,Amount,Status,Account.Id,Type,ReasonCode, UpdatedDate from InvoiceAdjustment", "status": "completed", "recordCount": 411, "fileId": "e20b07474688ad5001468daf166601f6", "batchId": "e20b07474688ad5001468daf10ec01e0", "batchType": "zoqlexport" } \], "encrypted": "none" }

## Curl Example

Curl request:

echo echo "============= Aqua Job Delete ===========" echo curl -i -k -u $USER\_NAME:$PASSWORD -H "Accept:application/json" -X DELETE $BASE\_URL/api/batch-query/jobs/$JOBID

Curl response:

HTTP/1.1 200 OK Server: Apache-Coyote/1.1 Content-Type: application/json Transfer-Encoding: chunked Date: Fri, 05 Sep 2014 11:52:30 GMT { "name": "DSEXPORT", "id": "2c90839d46f936820146fd4ef77a1eb6", "version": "1.1", "format": "CSV", "status": "cancelled", "encrypted": "none", "batches": \[ { "name": "Account", "query": "select AccountNumber,Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName, BillToContact.Id, SoldToContact.Id from Account", "status": "completed", "recordCount": 1322, "batchType": "zoqlexport", "batchId": "2c90839d46f936820146fd4ef77f1eb7", "segments": \[ "2c90839d46f936820146fd4ef8c71ece", "2c90839d46f936820146fd4ef8d21ecf", "2c90839d46f936820146fd4ef8dd1ed0", "2c90839d46f936820146fd4ef8e91ed1", "2c90839d46f936820146fd4ef8f31ed3", "2c90839d46f936820146fd4ef9021ed5", "2c90839d46f936820146fd4ef90d1ed8", "2c90839d46f936820146fd4ef9161edb", "2c90839d46f936820146fd4ef9201ede", "2c90839d46f936820146fd4ef9291ee2", "2c90839d46f936820146fd4ef9311ee5", "2c90839d46f936820146fd4ef93a1ee8", "2c90839d46f936820146fd4ef9431eec", "2c90839d46f936820146fd4ef94d1eef", "2c90839d46f936820146fd4ef9561ef2", "2c90839d46f936820146fd4ef9601ef6", "2c90839d46f936820146fd4ef96a1efb", "2c90839d46f936820146fd4ef9751efe", "2c90839d46f936820146fd4ef97d1f03", "2c90839d46f936820146fd4ef9861f0c", "2c90839d46f936820146fd4ef9991f15", "2c90839d46f936820146fd4ef9a11f1d", "2c90839d46f936820146fd4ef9ab1f1e", "2c90839d46f936820146fd4ef9bf1f21", "2c90839d46f936820146fd4ef9c91f23", "2c90839d46f936820146fd4ef9d31f26", "2c90839d46f936820146fd4ef9da1f2e" \] }, { "name": "AccountingPeriod", "query": "select Id,StartDate,EndDate,FiscalYear,Name,Status,UpdatedDate from AccountingPeriod", "status": "submitted", "recordCount": 0, "batchType": "zoqlexport", "batchId": "2c90839d46f936820146fd4ef7951ecc", "segments": \[ "2c90839d46f936820146fd4f061e23cf" \] } \] }

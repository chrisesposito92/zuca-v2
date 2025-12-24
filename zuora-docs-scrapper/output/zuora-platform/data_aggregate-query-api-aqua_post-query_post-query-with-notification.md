---
title: "Post query with notification"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/post-query/post-query-with-notification"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:52.840Z"
---

# Post query with notification

Learn how to use the Submit an aggregate query job API operation to submit queries with user notification upon completion.

Use the [Submit an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/POST_BatchQueryJob/) API operation to submit an aggregate query with a request for the user to be notified once the job is complete. The user must provide their own implemented URL, which will be called by AQuA once the job has completed.

Note:

Callout notifications that you configure through the Zuora user Interface have higher precedence than callout notifications that you specify in AQuA queries.

If you submit an AQuA query with `notifyUrl` specified, the value of `notifyUrl` will be ignored if your organization has already configured a callout notification through the Zuora user interface.

The following section provides a JSON example to use this API operation.

HTTP request:

`POST https://www.zuora.com/apps/api/batch-query/`

`POST https://apisandbox.zuora.com/apps/api/batch-query/`

JSON request:

{ "format": "csv", "version": "1.1", "name": "Example", "encrypted": "none", "partner": "salesforce", "project": "00170000011K3Ub", "notifyUrl": "https://hookb.in/Kb88lR8N?jobId=${JOBID}&status=${STATUS}", "queries": \[ { "name": "Account", "query": "select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName, BillToContact.Id, SoldToContact.Id from Account", "type": "zoqlexport", "deleted": { "column": "Deleted", "format": "Boolean" } } \] }

JSON response:

{ "batches": \[ { "deleted": { "column": "Deleted", "format": "Boolean" }, "full": true, "name": "Account", "query": "select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency, PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate, TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance, CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName, BillToContact.Id, SoldToContact.Id from Account", "status": "pending", "recordCount": 0, "apiVersion": "60.0", "batchType": "zoqlexport", "batchId": "402881824835bb2a0148450c7fca02f9" } \], "project": "00170000011K3Ub", "partner": "salesforce", "notifyUrl": "https://hookb.in/Kb88lR8N&jobId=${JOBID}&status=${STATUS}", "name": "Example", "id": "402881824835bb2a0148450c7fc502f8", "version": "1.1", "format": "CSV", "status": "submitted", "encrypted": "none" }

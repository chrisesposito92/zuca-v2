---
title: "Post query with time offset"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/post-query/post-query-with-time-offset"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:57.836Z"
---

# Post query with time offset

Learn how to use the Submit an aggregate query job API operation with the offset parameter to retrieve records created or updated within a specific time frame.

Use the [Submit an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/POST_BatchQueryJob/) API operation with the `offset` parameter to submit an aggregate query to retrieve those records created or updated between the completion time of the previous query and the time calculated from the `offset` parameter.

Note:

Zuora highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices.

The following example shows submitting a JSON request with `offset` specified.

HTTP request:

`POST https://www.zuora.com/apps/api/batch-query/`

`POST https://apisandbox.zuora.com/apps/api/batch-query/`

JSON request:

{ "format":"CSV", "version":"1.1", "project": "aquatest64", "partner": "gooddata", "encrypted":"none", "offset": 600, "queries":\[ { "name":"Account", "query":"select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName from Account", "type":"zoql" } , { "name":"Subscription", "query": "select Id, AutoRenew, CancelledDate, ContractAcceptanceDate,ContractEffectiveDate, CreatedDate, InitialTerm, InvoiceOwnerId, IsInvoiceSeparate,Name, OriginalCreatedDate, RenewalTerm, ServiceActivationDate, Status, SubscriptionEndDate, SubscriptionStartDate, TermEndDate, TermStartDate, TermType,UpdatedDate, Version, PreviousSubscriptionId from Subscription", "type":"zoql" } \], "name":"DSEXPORT" }

Successful JSON response:

{ "useLastCompletedJobQueries": false, "batches": \[ { "full": false, "name": "Account", "query": "select Id,CreditBalance,Name,Balance,TaxExemptStatus,AutoPay,Currency,PaymentGateway,PaymentTerm,SalesRepName,TaxExemptIssuingJurisdiction,TaxExemptEffectiveDate,TaxExemptExpirationDate,TaxExemptCertificateType,LastInvoiceDate,Status,TotalInvoiceBalance,CreatedDate,UpdatedDate, ParentId, CustomerServiceRepName from Account", "status": "pending", "recordCount": 0, "apiVersion": "65.0", "batchType": "zoql", "batchId": "2c9080214b08c3a0014b08f0a6d70042" }, { "full": false, "name": "Subscription", "query": "select Id, AutoRenew, CancelledDate, ContractAcceptanceDate,ContractEffectiveDate, CreatedDate, InitialTerm, InvoiceOwnerId, IsInvoiceSeparate,Name, OriginalCreatedDate, RenewalTerm, ServiceActivationDate, Status, SubscriptionEndDate, SubscriptionStartDate, TermEndDate, TermStartDate, TermType,UpdatedDate, Version, PreviousSubscriptionId from Subscription", "status": "pending", "recordCount": 0, "apiVersion": "65.0", "batchType": "zoql", "batchId": "2c9080214b08c3a0014b08f0a6d90043" } \], "project": "aquatest64", "partner": "gooddata", "name": "DSEXPORT", "id": "2c9080214b08c3a0014b08f0a6d50041", "version": "1.1", "format": "CSV", "status": "submitted", "offset": 600, "encrypted": "none" }

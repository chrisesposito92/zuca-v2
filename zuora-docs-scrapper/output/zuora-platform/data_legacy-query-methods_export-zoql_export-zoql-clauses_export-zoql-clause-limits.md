---
title: "Export ZOQL Clause Limits"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/export-zoql-clauses/export-zoql-clause-limits"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:35.393Z"
---

# Export ZOQL Clause Limits

Overview of limits for Export ZOQL clauses, including restrictions on fields in group by clauses, alias function usage, and nested aggregate functions.

Export ZOQL clauses have the following limits:

| Limit | Description |
| --- | --- |
| Maximum Fields on group by clause | A maximum of five fields allowed when using group by. |
| Alias Function Limited Support | The alias function is allowed only to define column labels in the result file. You cannot replace an aggregate function with its alias in having or orderby clauses. Duplicate aliases for column labels are not supported. |
| Nested Aggregate Functions Not Allowed | Nested aggregate functions are not allowed. |
| Alias in the SELECT clause might be ignored in certain cases. | When an alias in the SELECT clause is the same as the corresponding full column name of the object (case insensitive), the header name in the result file uses the full column name instead of the alias.For example, for select Account.Id, Account.InvoiceDeliveryPrefsEmail as "account.invoicedeliveryprefsemail" from Account , the header names in the result file are Account.Id, Account.InvoiceDeliveryPrefsEmail . The all lower-case account.invoicedeliveryprefsemail is ignored. |

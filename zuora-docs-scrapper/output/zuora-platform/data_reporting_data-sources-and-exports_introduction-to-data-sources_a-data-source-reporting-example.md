---
title: "A data source reporting example"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/introduction-to-data-sources/a-data-source-reporting-example"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:23.664Z"
---

# A data source reporting example

Here is a data source reporting example

If we wanted to report on invoices, we could pick the Invoice data source. From the Invoice data source we can link each Invoice to an Account because each Invoice is tied to only one Account. One drawback of picking the Invoice data source, however, is that if you want more granular details, that is prohibited by the data object model where each base object has only one record, and each invoice can contain multiple invoice items. A selection of the Invoice data source would only allow us to construct the following table:

| Account: Account Number | Invoice: Invoice Number | Invoice: Invoice Date | Invoice: Amount |
| --- | --- | --- | --- |
| A-00001 | INV-00001 | 1/1/2015 | 100 |
| A-00001 | INV-00002 | 2/1/2015 | 100 |
| A-00001 | INV-00003 | 3/1/2015 | 100 |

On the other hand, if we choose the Invoice Item data source, we can link to Invoice, and, via Invoice, all the way back to Account. Each row in this data source represents one Invoice Item.

| Account: Account Number | Invoice: Invoice Number | Invoice: Invoice Date | Invoice: Amount | Invoice Item: Charge Name | Invoice Item: Charge Amount |
| --- | --- | --- | --- | --- | --- |
| A-00001 | INV-00001 | 1/1/2015 | 100 | Monthly Platform Charge | 80 |
| A-00001 | INV-00001 | 1/1/2015 | 100 | Monthly Support Charge | 20 |
| A-00001 | INV-00002 | 2/1/2015 | 100 | Monthly Platform Charge | 80 |
| A-00001 | INV-00002 | 2/1/2015 | 100 | Monthly Support Charge | 20 |
| A-00001 | INV-00003 | 3/1/2015 | 100 | Monthly Platform Charge | 80 |
| A-00001 | INV-00003 | 3/1/2015 | 100 | Monthly Support Charge | 20 |

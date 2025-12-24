---
title: "InvoiceData"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/invoicedata"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:13.601Z"
---

# InvoiceData

The InvoiceData object provides the results of a subscribe() request in preview mode.

It returns what an invoice would be for the given [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe) call.

## Field descriptions

All field names are case sensitive.

| Name | Type | Description |
| --- | --- | --- |
| Invoice | Invoice object | The invoice for what the subscribe() call would be. |
| InvoiceItem | Invoice Item object | The invoice items that belong to the preview invoice. |
| TaxationItemData | Taxation Item object | The taxation items that belong to the preview invoice. Note that this object is available in the response only when you use WSDL version 120.0 or higher to make the Subscribe() call. |

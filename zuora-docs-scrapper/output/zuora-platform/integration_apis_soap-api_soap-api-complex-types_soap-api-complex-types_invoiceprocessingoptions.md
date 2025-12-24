---
title: "InvoiceProcessingOptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/invoiceprocessingoptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:16.215Z"
---

# InvoiceProcessingOptions

The InvoiceProcessingOptions object is used with the amend() call.

InvoiceProcessingOptions is wrapped by the [AmendOptions](/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/amendoptions) object.

## Supported calls

This object can be used with the [amend()](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend) call.

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| InvoiceTargetDate | Yes | dateTime | Specifies a date for when an invoice should be generated.Type :date supported as of WSDL version 69+dateTime supported through WSDL version 68 |
| InvoiceDate | No | dateTime | Specifies the date on which to generate the invoice. (WSDL 49.0+).Type :date supported as of WSDL version 69+dateTime supported through WSDL version 68 |

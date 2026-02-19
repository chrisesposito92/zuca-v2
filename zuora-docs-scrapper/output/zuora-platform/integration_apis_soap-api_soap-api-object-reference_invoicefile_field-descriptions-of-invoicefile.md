---
title: "Field descriptions of InvoiceFile"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicefile/field-descriptions-of-invoicefile"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:29.278Z"
---

# Field descriptions of InvoiceFile

This reference provides the description of the fields of the InvoiceFile object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query | User ID of the person who created the invoice file. If a bill run created the invoice file, then the value is the user ID of the person who created the bill run.Type: zns:IDCharacter limit: --Version: WSDL 65.0+Values: automatically generated |
| CreatedDate | optional | Query | Date and time the invoice PDF file was created.Type: dateTimeCharacter limit: --Version: WSDL 65.0+Values: automatically generated |
| Id | optional | Query | The ID of this object.Type : zns:IDCharacter limit : 32Version notes : WSDL 65.0+Values : automatically generated |
| InvoiceId | optional | Query | ID of the invoice that the InvoiceFile object belongs to.Type: zns:IDCharacter limit: --Version: WSDL 65.0+Values: automatically generated |
| PdfFileUrl | optional | Query | URL where you can download the invoice PDF file.Type: stringCharacter limit: --Version: WSDL 65.0+Values: automatically generated |
| UpdatedById | optional | Query | User ID of the person who last updated the invoice.Type: zns:IDCharacter limit: --Version: WSDL 65.0+Values: automatically generated |
| UpdatedDate | optional | Query | Date and time the invoice was last updated.Type: dateTimeCharacter limit: --Version: WSDL 65.0+Values: automatically generated |
| VersionNumber | optional | Query | Version number of the invoice PDF file.Type: longCharacter limit: --Version: WSDL 65.0+Values: automatically generated |

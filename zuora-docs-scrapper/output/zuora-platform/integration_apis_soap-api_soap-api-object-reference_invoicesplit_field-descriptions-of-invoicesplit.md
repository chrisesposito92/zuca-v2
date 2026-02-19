---
title: "Field descriptions of InvoiceSplit"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplit/field-descriptions-of-invoicesplit"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:15.726Z"
---

# Field descriptions of InvoiceSplit

This reference lists the description of the fields of the InvoiceSplit object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required or optional to create | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the InvoiceSplit object.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the InvoiceSplit object was created.Type : dateTime Character limit : 29 Version notes : WSDL 43.0 Values : automatically generated |
| Id | optional | Query Filter | The ID of this object. Upon creation of this object, this field becomes InvoiceSplitId .Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| InvoiceId | optional | Create Query Filter | The ID of the original invoice that the InvoiceSplit object splits. This field becomes read-only after the InvoiceSplit object is created.For allowed Operations, Query and Filter.After the invoice split is executed, the original invoice ID will be deleted and you will no longer be able to query the original invoice ID.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : a valid invoice ID |
| UpdatedById | optional | Query Filter | The ID of the Zuora user who last updated the invoice split.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the invoice split was last updated.Type : dateTime Character limit : Version notes : WSDL 43.0 Values : automatically generated |

---
title: "Field Descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicesplititem/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:09.248Z"
---

# Field Descriptions

wiki.page{path: "z\_Source/apiBP", heading: "1", section: "Field case sensitivity"}

| Name | Required to Create? | Allowed Operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the InvoiceSplitItem object.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the InvoiceSplitItem was created.Type : dateTime Character limit : Version notes : WSDL 43.0 Values : automatically generated |
| Id | optional | Query Filter | The ID of this object. Upon creation of this object, this field becomes InvoiceSplitItemId .Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| InvoiceDate | required | Create Query Filter | The generation date of the new split invoice.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : WSDL 43.0 Values : a valid date and time value |
| InvoiceId | optional | Query Filter | The new invoice after the split.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| InvoiceSplitId | required | Create Query Filter | The ID of the invoice split associated with the individual invoice split item.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : a valid invoice split ID |
| PaymentTerm | optional | Create Query Filter | Indicates when the customer pays the split invoice.Type : string Character limit : Version notes :WSDL 43.0 Values : a valid, active payment term defined in the web-based UI administrative settings |
| SplitPercentage | required | Create Query Filter | Specifies the percentage of the original invoice that you want to be the balance of the split invoice. The total of the SplitPercentage field values for all of the InvoiceSplitItem objects in an InvoiceSplit object must equal 100.Type :If you're using WSDL 73.0 or earlier: longIf you're using WSDL 74.0 or later: decimalCharacter limit : -- Version notes : WSDL 43.0+ Values :If you're using WSDL 73.0 or earlier: a whole number between 1 and 100If you're using WSDL 74.0 or later: a decimal number with up to nine decimal places between 0.000000001 and 100, for example, 25 or 33.34 |
| UpdatedById | optional | Query Filter | The ID of the Zuora user who last updated the invoice split.Type : zns:ID Character limit : 32 Version notes : WSDL 43.0 Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the invoice split was last updated.Type : dateTime Character limit : Version notes : WSDL 43.0 Values : automatically generated |

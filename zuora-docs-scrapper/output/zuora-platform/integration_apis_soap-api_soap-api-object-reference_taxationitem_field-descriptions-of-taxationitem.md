---
title: "Field descriptions of TaxationItem"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/taxationitem/field-descriptions-of-taxationitem"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:52.332Z"
---

# Field descriptions of TaxationItem

This reference provides the description of the fields of the TaxationItem object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountingCode | optional | Create Query Update Delete Filter | The accounting code for the taxation item. Accounting codes group transactions that contain similar accounting attributes.Type : string Character limit : 32 Version notes : Zuora Tax Values : an active accounting code in your Zuora Chart of Accounts |
| CreatedById | optional | Query Filter | The ID of the user who created the taxation item.Type : zns:ID Character limit : 32 Version notes : Zuora Tax; WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the payment was created in the Zuora system.Type : dateTime Character limit : 29 Version notes : Zuora Tax; WSDL 20.0+ Values : automatically generated |
| ExemptAmount | optional | Create Query Update Filter | The calculated tax amount excluded due to the exemption.Type : decimal (currency) Character limit : 16 Version notes : Zuora Tax; type is double for WSDL18.0 and older Values : a decimal value |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is TaxationItemId .Type : zns:ID Character limit : 32 Version notes : Zuora Tax Values : automatically generated |
| InvoiceId | optional | Create Query Filter | The ID of the invoice that the taxation item applies to.Type : zns:ID Character limit : 32 Version notes : Zuora Tax Values : automatically generated |
| InvoiceItemId | required | Create Query Filter | The ID of the specific invoice item that the taxation information applies to.Type : zns:ID Character limit : 32 Version notes : Zuora Tax Values : a valid invoice item ID |
| Jurisdiction | required | Create Query Update Filter | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.Type : string Character limit : 32 Version notes : Zuora Tax Values : a string of 32 characterrs or fewer |
| LocationCode | optional | Create Query Update Filter | The identifier for the location based on the value of the TaxCode field.Type : string Character limit : 32 Version notes : Zuora Tax Values : automatically generated |
| Name | required | Create Query Update Filter | The name of the tax rate, such as sales tax or GST. This name is displayed on invoices.Type : string Character limit : 128 Version notes : Zuora Tax Values : a string of 128 characters or fewer |
| TaxAmount | required | Create Query Update Delete Filter | The amount of the tax applied to the charge.Type : decimal (currency) Character limit : 16 Version notes : Zuora Tax; type is double for WSDL18.0 and older Values : a decimal value |
| TaxCode | optional | Create Query Update Delete Filter | The tax code identifies which tax rules and tax rates to apply to a specific charge.Type : string Character limit : 32 Version notes : Zuora Tax Values : a string of 32 characters or fewer |
| TaxCodeDescription | optional | Create Query Update Delete Filter | The description for the tax code.Type : string Character limit : 255 Version notes : Zuora Tax Values : a string of 255 characters or fewer |
| TaxDate | required | Create Query Update Delete Filter | The date that the tax is applied to the charge.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : Zuora Tax Values : a valid date and time value |
| TaxRate | required | Create Query Update Filter | The tax rate applied to the charge.Type : decimal Character limit : 16 Version notes : Zuora Tax; type is double for WSDL18.0 and older Values : a valid decimal value |
| TaxRateDescription | optional | Create Query Update Filter | The description of the tax rate.Type : string Character limit : 255 Version notes : Zuora Tax Values : a string of 255 characters or fewer |
| TaxRateType | required | Create Query Update Filter | The type of the tax rate applied to the charge.Type : string (enum) Character limit : 10 Version notes : Zuora Tax Values : Percentage , FlatFee |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the taxation item.Type : zns:ID Character limit : Version notes : Zuora Tax; WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the taxation item was last updated.Type : dateTime Character limit : Version notes : Zuora Tax; WSDL 20.0+ Values : automatically generated |

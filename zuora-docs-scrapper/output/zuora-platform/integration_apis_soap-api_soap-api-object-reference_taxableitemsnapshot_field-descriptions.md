---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/taxableitemsnapshot/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:29.904Z"
---

# Field descriptions

This reference provides the description of the fields of the TaxableItemSnapshot object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| TaxableItemId | required | Create Query Delete Filter | The Id of an invoice item or invoice item adjustment that the taxation item applies to.Type : zns:ID Character limit : 32 Version notes : WSDL 82.0+ Values : A valid item Id of an invoice or invoice item adjustment |
| ItemType | required | Create Query Delete Filter | Type of the item.Type : string (enum) Character limit : 10 Version notes : WSDL 82.0+ Values :InvoiceInvoiceItemAdjustment |
| TaxDate | required | Create Query Delete Filter | The date that the tax is applied to the charge.Type : dateTime Character limit : 29 Version notes : WSDL 82.0+ Values : A valid date format in yyyy-mm-dd |
| TaxCodeName | required | Create Query Delete Filter | A meaningful string used to identify the tax code, and is mapped to the product charge. For example, "Freight service".Type : string Character limit : 64 Version notes : WSDL 82.0+ Values : A string of 64 characters or fewer |
| TaxMode | required | Create Query Delete Filter | The type of tax mode for the account.Type : string (enum) Character limit : 32 Version notes : WSDL 82.0+ Values : TaxExclusive , TaxInclusive |
| CompanyCode | optional | Create Query Delete Filter | A unique code that identifies a company account.Type : string Character limit : 50 Version notes : WSDL 82.0+ Values : A string of 50 characters or fewer |
| VatId | optional | Create Query Delete Filter | EU Value Added Tax ID.Type : string Character limit : 25 Version notes : WSDL 82.0+ Values : A valid Value Added Tax ID |
| TaxExemptStatus | optional | Create Query Delete Filter | Status of the account's tax exemption.Type : string (enum) Character limit : 19 Version notes : WSDL 82.0+ Values :YesNoPendingVerification |
| TaxExemptCertificateID | optional | Create Query Delete Filter | ID of your customer's tax exemption certificate.Type : string Character limit : 32 Version notes : WSDL 82.0+ Values : A string of 32 characters or fewer |
| TaxExemptCertificateType | optional | Create Query Delete Filter | Type of the tax exemption certificate that your customer holds.Type : string Character limit : 32 Version notes : WSDL 82.0+ Values : A string of 32 characters or fewer |
| TaxExemptEffectiveDate | optional | Create Query Delete Filter | The date when the customer's tax exemption starts.Type: dateTime Character limit : 29 Version notes : WSDL 82.0+ Values : A valid date format in yyyy-mm-dd |
| TaxExemptEntityUseCode | optional | Create Query Delete Filter | A unique entity use code to apply exemptions in Avalara AvaTax.This account-level field is required only when you choose Avalara as your tax engine. See Exempt Transactions for more details.Type : string Character limit : 32 Version notes : WSDL 91.0+ Values : A string of 32 characters or fewer |
| TaxExemptExpirationDate | optional | Create Query Delete Filter | The date when the customer's tax exemption certificate expires.Type: dateTime Character limit : 29 Version notes : WSDL 82.0+ Values : The date format in yyyy-mm-dd |
| TaxExemptIssuingJurisdiction | optional | Create Query Delete Filter | Indicates the jurisdiction in which the customer's tax exemption certificate was issued.Type : string Character limit : 32 Version notes : WSDL 82.0+ Values : A string of 32 characters or fewer |
| TaxExemptDescription | optional | Create Query Delete Filter | Description of the tax exemption certificate that your customer holds.Type : string Character limit : -- Version notes : WSDL 82.0+ Values : A string |
| DestAddressRegion | optional | Create Query Delete Filter | The region of the destination address.Type : string Character limit : 32 Version notes : WSDL 82.0+ Values : A string of 32 characters or fewer |
| DestAddressCountry | required | Create Query Delete Filter | The country of the destination address.Type : string Character limit : 32 Version notes : WSDL 82.0+ Values : A string of 32 characters or fewer |
| DestAddressState | optional | Create Query Delete Filter | The state of the destination address.Type : string Character limit : 40 Version notes : WSDL 82.0+ Values : A string of 40 characters or fewer |
| DestAddressCounty | optional | Create Query Delete Filter | The county of the destination address.Type : string Character limit : 32 Version notes : WSDL 82.0+ Values : A string of 32 characters or fewer |
| DestAddressCity | optional | Create Query Delete Filter | The city of the destination address.Type : string Character limit : 40 Version notes : WSDL 82.0+ Values : A string of 40 characters or fewer |
| DestAddressPostalCode | optional | Create Query Delete Filter | The postcode of the destination address.Type : string Character limit : 20 Version notes : WSDL 82.0+ Values : A string of 20 characters or fewer |
| DestAddressLine1 | optional | Create Query Delete Filter | The address line 1 of the destination address.Type : string Character limit : 255 Version notes : WSDL 82.0+ Values : A string of 255 characters or fewer |
| DestAddressLine2 | optional | Create Query Delete Filter | The address line 2 of the destination address.Type : string Character limit : 255 Version notes : WSDL 82.0+ Values : A string of 255 characters or fewer |

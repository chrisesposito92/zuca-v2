---
title: "Testing recommendations for E-invoice configuration Sovos for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-mexico/testing-recommendations-for-e-invoice-configuration-sovos-for-mexico"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:57.019Z"
---

# Testing recommendations for E-invoice configuration Sovos for Mexico

Zuora has conducted comprehensive testing of e-invoicing configurations for various billing document types in Mexico, utilizing default e-invoice file templates and the Sovos Sandbox environment.

Zuora has tested e-invoicing on various billing document types and operations with the default e-invoice file templates.

The following table lists the test cases for your reference.

| Billing Document Type | Document Source | Case Category | Operation | Description |
| --- | --- | --- | --- | --- |
| Invoice | Subscription | One charge | Submit to Sovos | Create a subscription containing one rate plan charge with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Invoice | Subscription | Multiple charges | Submit to Sovos | Create a subscription containing multiple charges with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Invoice | Standalone | Multiple charges | Submit E-Invoice | Create a standalone invoice containing multiple items from product rate plan charges, and post the invoice. |
| Invoice | Subscription | Multiple charges | Cancel E-Invoice | Create a subscription containing multiple charges with taxation, generate a draft invoice from the subscription, and then post the invoice.Reverse the invoice, generate a new invoice, and submit it. Cancel the previous e-invoice. |
| Invoice | Standalone | Multiple charges | Cancel E-Invoice | Create a standalone invoice containing multiple items from product rate plan charges, and post the invoice.Write off the invoice, then cancel the previous e-invoice. |

The testing was performed in the Sovos Sandbox environment with a testing account, and the following assumptions apply:

-   Zuora uses testing tax identification numbers for both the Seller and Buyer, which are not real.

-   All billing documents have Taxation enabled. Zuora does not test scenarios where billing documents have no taxation.

-   The taxation addresses are testing address data and do not represent the addresses of real business entities. The same testing address data is used for B2B and B2C business categories.

-   The billing documents cover only regular charges, without discount charges. If you use Zuora discount charges, you must customize the e-invoice file template.

-   Zuora has confirmed that document data has been successfully submitted through the Sovos Sandbox environment.


For more details on scenarios that Zuora has not tested, see the next sections. It is best practice to include these scenarios in your testing if they align with your business requirements.

Mexico requires the line item description not be empty or null. When the description of a billing document item is empty, the Description value is used by default.

## Company Code

The child node type CompanyCode uses Supplier's RFC as the node identity. It is mapped from BusinessRegion.BusinessNumber.

## Business Category

The child node type BusinessCategory uses node identity: BusinessToBusiness or BusinessToConsumer. The default mode is BusinessToBusiness when this node is omitted, so if the transaction is business to consumer, this must be explicitly specified.

Please note that B2B or BusinessToBusiness, B2C or BusinessToConsumer both work.

Zuora's default e-invoice file template is configured for B2B. If you operate in both B2B and B2C scenarios, you must customize the default e-invoice file template according to business requirements. We recommend that it is mapped from Invoice.Account.EInvoiceProfile.BusinessCategory.

## OutputSchema

The child node type OutputSchema uses node identifier Comprobante.

In Mexico's electronic invoicing system (CFDI), the Comprobante node is the root element of the CFDI XML file. It is the main node that identifies the document as an official tax receipt (a comprobante fiscal), encapsulating all of the invoice's header-level information.

<sbd:Scope> <sbd:Type>Mapping.OutputSchema</sbd:Type> <sbd:InstanceIdentifier/> <sbd:Identifier>Comprobante</sbd:Identifier> </sbd:Scope>

## Originator Document Associated with this Document

The field path `Invoice/OriginatorDocumentReference/UUID` represents an identifier for the referenced document. Its attribute schemeID is required to indicate the key of the relationship that exists.

In Mexico's CFDI 4.0 e-invoicing system, the concept of an "OriginatorDocumentReference" is mapped to the CfdiRelacionados node and its child CfdiRelacionado node. This structure explicitly links a new CFDI being issued to one or more previously issued CFDIs.

Here are some of the most frequently used values from the catalog:

-   `01: Nota de crédito de los documentos relacionados (Credit note of the related documents)`. Used when issuing a credit note that modifies or cancels the total amount of a previous invoice.

-   `02: Nota de débito de los documentos relacionados (Debit note of the related documents)`. Used to increase the value of a previous invoice by issuing a debit note.

-   `03: Devolución de mercancía sobre facturas o traslados previos (Return of merchandise on previous invoices or transfers)`. Used for the return of goods related to a prior invoice.

-   `04: Sustitución de los CFDI previos (Substitution of previous CFDIs)`. This is one of the most critical codes. It is used when canceling and replacing a CFDI that was issued with errors.

-   `05: Traslados de mercancías facturados previamente (Transfers of goods previously invoiced)`. Used when goods have already been invoiced and a transfer CFDI (CFDI de Traslado) needs to be issued to document their transportation.

-   `06: Factura generada por los traslados previos (Invoice generated from previous transfers)`. This is the reverse of 05, where a transfer CFDI was issued first, and a formal income CFDI (CFDI de Ingreso) is now being generated.

-   `07: CFDI por aplicación de anticipo (CFDI for application of advance payment)`. Used when a prior CFDI was issued for an advance payment and a new invoice is being issued to apply that advance.


Zuora default e-invoice templates are configured as “04” in order to support the cancellation flow.

When canceling an electronic invoice (e-invoice) with reason code `01 – Invoice issued with error regarding relationship`, you must provide a reference to the original document being replaced. This ensures a clear and compliant audit trail for tax authorities.

To link your new billing document (Invoice or Debit Memo) to the old one, follow these steps:

1.  Retrieve the Transaction ID of the original billing document.

    Note:

    This can be found in the EInvoiceData object, which stores country-specific information.

2.  Enter the Transaction ID into the designated custom field: `documentReferenceID__c`.

3.  The system will automatically map this information to the correct fields in the e-invoice when the custom field contains a value. If the field is empty, no mapping will occur.


This process ensures that your cancellation and replacement are accurately recorded, maintaining compliance with all tax regulations.

Here’s a sample mapping. The mapping applies only when the custom field `DocumentReferenceID__c` has a value.

{{^DocumentReferenceID\_\_c|IsBlank}} <cac:OriginatorDocumentReference> <cbc:UUID schemeID="04"\>{{DocumentReferenceID\_\_c}}</cbc:UUID> </cac:OriginatorDocumentReference> {{/DocumentReferenceID\_\_c|IsBlank}}

## Additional document associated with this document

The field path Invoice/AdditionalDocumentReference/ID represents an identifier for the referenced document, its attribute schemeID represents the identification scheme for a specific identifier associated with a document.

Following values are allowed for schemeID:

-   NoCertificado: When the schemeID is NoCertificado, the value in the `<cbc:ID>` element represents the serial number of the Digital Seal Certificate (CSD) used to digitally sign the invoice. In Mexico's CFDI, this is the CSD used by the issuer. This ensures the document's authenticity and integrity.

-   Exportacion: When the schemeID is Exportacion, the value in the `<cbc:ID>` element indicates whether the document is associated with an export transaction. In Mexico's CFDI 4.0, this is a mandatory field from a catalog with values like 01 (not applicable) or 02 (definitive export A1).


Zuora default e-invoice templates are configured Exportation for schemeID and “01” for ID.

Here is the sample mapping:

<cac:AdditionalDocumentReference> <cbc:ID schemeID="Exportation"\>01</cbc:ID> </cac:AdditionalDocumentReference>

## Supplier Party ID

The field path is Invoice/AccountingSupplierParty/Party/PartyIdentification/ID and Invoice/AccountingSupplierParty/Party/PartyIdentification/ID @schemeID.

For Mexican CFDI (Comprobante Fiscal Digital por Internet) standard, the field ID maps to the tax identification number of the supplier, and the @schemeID attribute is typically used to indicate the type of identifier provided. schemeID must be TaxID, and ID is by default mapped from BusinessNumber of business region.

Zuora's default e-invoice file template is configured for TaxID only.

## Supplier and Consumer Party Tax Scheme

The field path is Invoice/AccountingSupplierParty/Party/PartyTaxScheme/TaxScheme/ID, and Invoice/AccountingCustomerParty/Party/PartyTaxScheme/TaxScheme/ID.

In Mexico, the "tax scheme code" (c\_RegimenFiscal) is a numeric value from a catalog published by the Tax Administration Service (SAT). The code specifies the tax regime under which a taxpayer (supplier or recipient) is registered and must pay taxes.

This field is a mandatory validation requirement for CFDI 4.0 electronic invoices. For a CFDI to be certified, the tax scheme code provided in the invoice XML must precisely match the one registered for the taxpayer with the SAT.

Zuora default e-invoice templates are configured as “601”.

The SAT's official c\_RegimenFiscal catalog contains numerous codes for both individuals (Personas Físicas) and legal entities (Personas Morales).

| Code | Description |
| --- | --- |
| 601 | General Law Legal Entities (General de Ley Personas Morales). |
| 603 | Legal Entities for Non-profit Purposes (Personas Morales con Fines no Lucrativos). |
| 620 | Cooperative Production Companies that Opt to Defer their Income (Sociedades Cooperativas de Producción que optan por diferir sus ingresos). |

| Code | Description |
| --- | --- |
| 605 | Salaries and General Assimilated Income (Sueldos y Salarios e Ingresos Asimilados a Salarios) |
| 606 | Leasing (Arrendamiento). |
| 612 | Individuals with Business and Professional Activities (Personas Físicas con Actividades Empresariales y Profesionales). |
| 616 | Without Fiscal Obligations (Sin obligaciones fiscales). |
| 621 | Tax Incorporation (Incorporación Fiscal). |
| 625 | Business Activities with Income through Technological Platforms (Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas). |

The field path is Invoice/AccountingSupplierParty/AdditionalAccountID.

## Consumer party's Industry Classification Code

The field path is Invoice/AccountingCustomerParty/Party/IndustryClassificationCode.

In Mexico, the e-invoicing system (CFDI 4.0) does not require a specific "Industry Classification Code" for parties. Instead, the tax authority (SAT) uses two mandatory catalogs to validate the nature of the transaction and the taxpayer's business activity: the Tax Scheme Code and the Use of CFDI ((c\_UsoCFDI).

Zuora default e-invoice templates are configured as “G03”.

This catalog specifies the purpose for which the recipient is acquiring the goods or services. The selected code must be compatible with the recipient's tax regime.

-   For general business expenses: The code G03 (General Expenses) is often used.

-   For investments: Codes like I02 (Furniture and office equipment) or I03 (Transportation equipment) specify the type of investment.

-   For personal tax deductions (personas físicas): Codes like D01 (Medical expenses) or D10 (Educational services) are used.


Please check the government official page for confirmation.

## Identifier for Tax Category

The field path Invoice/TaxTotal/TaxSubtotal/TaxCategory/ID represents an identifier for the tax category.

It contains the following allowed values for specifying if an item or service is subject to tax:

-   001: Not Subject to Tax. This is for items or services that are outside the scope of Mexican tax law. When this value is used, no tax details are included for the line item.

-   002: Subject to Tax. This is for items or services that are subject to tax, such as VAT (IVA). When this value is used, the CFDI must include a complete breakdown of the applicable taxes, including the tax type, rate, and total amount.

-   003: Subject to Tax and Not Required to be Broken Down. This is for items that are subject to tax, but due to specific regulations, a detailed tax breakdown is not required at the line-item level.


## Identifier and Name for Tax scheme

The field path Invoice/TaxTotal/TaxSubtotal/TaxCategory/TaxScheme/ID and

Invoice/TaxTotal/TaxSubtotal/TaxCategory/TaxScheme/Name represent an identifier and name for the taxation scheme.

Allowed values for identification of tax schema are as below. These codes indicate whether a particular line item in the invoice is taxable.

-   '001' (Not subject to tax): The item or service is not subject to any taxes, and no tax breakdown is required in the invoice.

-   '002' (Subject to tax): The item or service is subject to tax, and the invoice must include a detailed breakdown of the taxes applied.

-   '003' (Yes, subject to tax and not required to be broken down): The item is subject to tax, but the CFDI regulations do not require a detailed tax breakdown for that specific line item.


Allowed values for names of tax schema are as below. These values describe how the tax is calculated and applied to a taxable item within the invoice.

-   'Tasa' (Rate): This indicates that a tax rate, or percentage, will be applied to the base amount of the item to calculate the tax amount. For example, applying a 16% VAT rate.

-   'Cuota' (Fee): This indicates that a fixed amount or fee will be applied to the item, rather than a percentage.

-   'Exento' (Exempt): This indicates that the item is explicitly exempt from a particular tax. This is distinct from '01' (Not subject to tax), as it specifies that an otherwise taxable item is exempt due to a specific rule.


Zuora e-invoice templates configure the identification of tax schema as 002' (Subject to tax), and name as “Tasa”.

The allowed values for identifiers and name of tax scheme are applicable to the invoice line, too. The corresponding field paths are: Invoice/InvoiceLine/TaxTotal/TaxSubtotal/TaxCategory/TaxScheme/ID and Invoice/InvoiceLine/TaxTotal/TaxSubtotal/TaxCategory/TaxScheme/Name.

## Unit of Quantity

The field path Invoice/InvoiceLine/invoicedQuantity @unitCode represents the unit of the quantity.

In Mexico's CFDI 4.0 e-invoicing system, the field for the unit of measure is called `ClaveUnidad` and its values are defined by the official `c_ClaveUnidad` catalog published by the Tax Administration Service (SAT). This catalog is comprehensive and based on international standards, such as those from the United Nations Economic Commission for Europe (UNECE).

Since the catalog is very extensive, it's not practical to list all values. However, some common examples demonstrate the range of available codes:

General measurements and units

-   E48: Unit (for generic units)

-   H87: Piece (for single items)

-   KGM: Kilogram

-   LTR: Liter

-   MTK\*\*: Square meter

-   MTR: Meter

-   FOT: Foot

-   INH: Inch


Specialized units

-   XBX: Box

-   XUN: Carton

-   HUR: Hour

-   DAY: Day

-   GRM: Gram

-   PR: Pair


Zuora e-invoice templates configure the unit code as E48.

Here is the sample mapping:

<cbc:InvoicedQuantity unitCode="E48"\>{{Quantity|Round(3)}}</cbc:InvoicedQuantity>

## Catalogue Item Identification

Invoice/InvoiceLine/Item/StandardItemIdentification/ID represents the identifier for the item.

In Mexico's CFDI 4.0 e-invoicing system, the item identifier is the Product or Service Key (ClaveProdServ). This mandatory, 8-digit numeric code classifies the item being sold according to the official c\_ClaveProdServ catalog published by the Tax Administration Service (SAT).

The SAT's c\_ClaveProdServ catalog is a comprehensive and extensive list of codes for all products and services taxable under Mexican law. Because the catalog contains tens of thousands of individual codes, it's not practical to list them all here.

-   Structure: The catalog uses a hierarchical structure to classify items, allowing for both broad and specific descriptions.

-   International standards: It is largely based on the international United Nations Standard Products and Services Code (UNSPSC) system.

-   Default code: If a supplier cannot find a suitable code for their product or service, they can use the generic code 01010101.

-   Example values: While not a complete list, some example codes demonstrate the level of detail in the catalog:


-   84121500: Banking Institutions

-   Specific codes also exist for thousands of other items, ranging from raw materials and manufactured goods to financial and professional services.


For any specific implementation, businesses should consult the official SAT catalog download to ensure they are using the correct and current codes for their products and services.

We recommend using a custom field, such as ItemCode\_\_c on the ProductRatePlanCharge, to store the code. You can also define your own custom field.

Here is the sample mapping.

<cac:StandardItemIdentification> <cbc:ID>{{#Wp\_Eval}}"{{RatePlanCharge.ProductRatePlanCharge.ItemCode\_\_c}}" != "" ? "{{RatePlanCharge.ProductRatePlanCharge.ItemCode\_\_c}}" : "{{ProductRatePlanCharge.ItemCode\_\_c}}"{{/Wp\_Eval}} </cbc:ID> </cac:StandardItemIdentification>

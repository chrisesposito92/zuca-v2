---
title: "Field mapping for e-invoice file templates for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-mexico/field-mapping-for-e-invoice-file-templates-for-mexico"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:56.954Z"
---

# Field mapping for e-invoice file templates for Mexico

Ensure accurate field mapping for e-invoice file templates in Mexico's e-invoicing process, with customization options for business requirements.

In the e-invoicing clearance process in Mexico, ensure that the field mapping for e-invoice file templates is complete and correct. The following fields are used in the default e-invoice file template.
Note: you might have to customize the default e-invoice file template if the default field mapping does not align with your business requirements.

## E-invoicing business regions configuration for Mexico

In the e-invoicing clearance process in Mexico, you must configure business regions according to Mexico-specific requirements.

The business region objects can be looked up according to the country and state, and their related fields can be mapped accordingly within the e-invoicing template. You must configure e-invoicing business regions for Mexico according to Mexico-specific requirements.

The following table lists the business region settings you must configure in the Add Business Region

| UI Section | UI Field | API Field | Required | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | Yes | Specify the full official name of the Seller registered with the relevant legal authority. Use uppercase. |  |
| Legal Business Number | businessNumber | Yes | Specify the unique identifier of the legal entity or person. For Mexico, this is the Supplier Tax ID (RFC), alphanumeric with length 12 to 13.Sample XML mapping:<cac:PartyIdentification> <cbc:ID schemeID="TaxID">{{VarBusinessNumber}}</cbc:ID> </cac:PartyIdentification> |  |
| Business Number Schema Id | businessNumberSchemeId | No | Specify the identification scheme identifier. For Mexico, always use TaxID. If not set, it can be hard-coded in the template. |  |
| Trade Name | tradeName | No | Specify the Seller’s trade name, if different from the legal business name. |  |
| Tax Register Number | taxRegisterNumber | No | Specify the Seller’s VAT ID or local tax identifier. |  |
| E-Invoice Destination Code | endpointId | No | Specify the Seller's electronic address where the response to the e-invoice file may be delivered. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | Specify the identification scheme for the Seller’s electronic address. |  |
| Business Address | Address 1 | addressLine1 | No | Specify the first line of the Seller’s address (street or business name). |
| Address 2 | addressLine2 | No | Specify the second line of the Seller’s address (e.g., building name). |  |
| Postal Code | postalCode | Yes | Specify the 5-digit código postal (CP) as registered with SAT for both sender and recipient. |  |
| City | city | No | Specify the city where the business is located. |  |
| State/Province | state | No | Specify the state or province where the business is located. |  |
| Contact Info | Contact Name | contactName | No | Specify the Seller contact’s name for e-invoicing correspondence. |
| Email | email | No | Specify the contact email address for e-invoicing communications. |  |
| Business Phone Number | phoneNumber | No | Specify the Seller’s business phone number. |  |
| Service Provider | Provider | serviceProviderId | Yes | Select your e-invoicing service provider. For Mexico, if Sovos is used, choose Clearance with Cancellation for full cancellation support. Use Clearance Only if handling cancellations externally. |
| Digital Signature | Enable PDF Digital Signature | digitalSignatureEnable | No | Specify whether to enable digital signing of PDF billing documents. Click Yes to enable. Default is No. |
| Billing Document Type | Invoice, Credit Memo, Debit Memo | invoiceEnabled, creditMemoEnabled, debitMemoEnabled | — | Select supported document types. Default for Mexico includes all three. Exclude specific credit memos (e.g., reversals) by using conditional rules. |

## E-invoicing profiles for accounts configuration in Mexico

According to Mexico-specific requirements, you must configure e-invoicing profiles for customer accounts involved in the e-invoicing business.

The following table lists the e-invoicing profile settings to configure for a customer account in Mexico.

| UI Field | API Field | Required | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable the e-invoicing profile for the customer account.All billing documents for an account can be submitted to the e-invoicing service provider if the following conditions are met:The account is configured to generate e-invoice files for billing documents.The billing document is in Posted status.A business region exists for the billing country contact and is linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | Yes | Choose from the following options:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government)For Mexico, specify B2B or B2C. |
| Legal Business Name | businessName | Yes | Specify the full official name that the Buyer is registered with the relevant legal authority.For Mexico, use the name as registered with the relevant fiscal authority. |
| Legal Business Number | businessNumber | Yes | Specify the unique identifier number of the Buyer (legal entity or person).For Mexico, two identification scheme options are available:TaxID: Receiver Tax ID (Clave del Registro Federal de Contribuyentes)ForeignerTaxID: Foreign receiver's tax IDFor TaxID, this is the Federal Taxpayers Registry code for the receiving taxpayer. For ForeignerTaxID, this expresses the Receptor’s tax identity registration number when the entity is a foreign resident.Sample XML mapping:<cac:PartyIdentification> <cbc:ID schemeID="TaxID">{{Account.EInvoiceProfile.BusinessNumber}}</cbc:ID> </cac:PartyIdentification> |
| Business Number Schema Id | businessNumberSchemeId | No | Specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person.For Mexico, available options are:TaxID: Receiver Tax ID (Clave del Registro Federal de Contribuyentes)ForeignerTaxID: Foreign receiver's tax IDZuora’s default e-invoice templates use TaxID. |
| Tax Register Number | taxRegisterNumber | No | Specify the Buyer’s VAT ID or local tax identification number, or any reference used to indicate registered tax status. |
| E-Invoice Destination Code | endpointId | No | Specify the Buyer’s electronic address where the application-level response to the e-invoice or billing document will be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | Specify the identification scheme for the Buyer’s electronic address. |

## Sold-to contacts for accounts configuration in Mexico

You must configure sold-to contacts for customer accounts involved in the e-invoicing business in Mexico.

The following table lists the contact-related fields involved in the e-invoicing business in Mexico.

| UI Field | API Field | Required | Description |
| --- | --- | --- | --- |
| Country | country | Yes | From the Country list, select Mexico. |
| Address 1 | addressLine1 | No | Specify the first line of the Buyer’s address, which is often a street address or business name. |
| Address 2 | addressLine2 | No | Specify the second line of the Buyer’s address, which is often the name of a building. |
| Postal Code | postalCode | Yes | Specify the short code that identifies the business address.For Mexico, this is the postal identifier for the address as defined by the national postal service (ZIP or Post Code).The postal code must be:A valid, five-digit Mexican ZIP code.Registered with the SAT in the official catalog of ZIP codes. |
| City | city | No | Specify the name of the city where the business is located.For Mexico, this value represents a city, town, or village name. |
| State/Province | state | No | Specify the state or province where the business is located.For Mexico, this represents the political or administrative division (such as a county, province, or state), expressed as a standardized code.Note: E-Invoice requires a two-letter abbreviation for the state. It is recommended to create and use a custom field on the contact object to store this value. |

## Custom fields creation specific to e-invoicing

You must create and manage custom fields to store country-specific information for mapping to Sovos. It is best practice to use the objects and custom fields listed in the following table.

| Object | Custom Field | Notes |
| --- | --- | --- |
| Product Rate Plan Charge | ItemCode__c | Create this custom field of the string type to store the item identifier for a product or service.The product and service catalog is a mandatory, standardized classification system for all products and services traded in Mexico. It is used for e-invoicing (CFDI) purposes and is published and maintained by the Tax Administration Service (SAT). |
| Invoice, Debit Memo | DocumentReferenceID__c | Create a custom field named DocumentReferenceID__c on the Invoice and Debit Memo objects.This field stores a reference to the original document being replaced and is required when canceling a billing document and replacing it with a new one (Invoice or Debit Memo). |

These custom fields are integral to the default e-invoice file templates. If you opt to define custom fields with different names or on alternative objects, you are required to make adjustments to the default templates.

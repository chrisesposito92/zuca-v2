---
title: "Field mapping for e-invoice file templates for Brazil"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-sovos-for-brazil/field-mapping-for-e-invoice-file-templates-for-brazil"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:45.169Z"
---

# Field mapping for e-invoice file templates for Brazil

This topic provides instructions for configuring field mapping and business regions for e-invoice file templates in Brazil, including customization options for NFS-e and NF-e support.

In the e-invoicing clearance process in Brazil, ensure that the field mapping for e-invoice file templates is complete and correct. The following fields are used in the default e-invoice file template. Remember that you might have to customize the default e-invoice file template if the default field mapping does not align with your business requirements.

Note: Zuora’s default e-invoice file template supports NFS-e (Service) only. It does not support NF-e (Goods). You could customize the default template in order to support NF-e. Zuora only provides the default Invoice template. There are no default templates for Credit Memo and Debit Memo as Brazil doesn't support those document types.

## E-invoicing business regions configuration for Brazil

In the e-invoicing clearance process in Brazil, you must configure business regions according to Brazil-specific requirements.

The business region objects can be looked up according to the country and state, and their related fields can be mapped accordingly within the e-invoicing template. You must configure e-invoicing business regions for Brazil according to Brazil-specific requirements.

The following table lists the business region settings you must configure in the Add Business Region dialog.

| UI section | UI field | API field | Required | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name of the Seller registered with the relevant legal authority. |  |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person you do business with.For Brazil, two options for the identification of the identification scheme: CPF and CNPJ. CPF and CNPJ are mandatory tax identification numbers that distinguish between individuals and businesses.CPF stands for Cadastro de Pessoas Físicas (Register of Individual Persons).CNPJ stands for Cadastro Nacional da Pessoa Jurídica (National Register of Legal Entities).In the e-invoicing file template, below is a sample mapping.<cbc:ID schemeID="CNPJ">{{BusinessNumber}}</cbc:ID> |  |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person.For Brazil, two options for the identification of the identification scheme: CPF and CNPJ. You should always use CNPJ as a company.If you don’t specify the scheme is in the business region, you can hard-code in the template. |  |
| Trade Name | tradeName | No | In the Trade Name field, specify the name that the Seller is known as, other than the legal business name. |  |
| Tax Register Number | taxRegisterNumber | Yes | In the Tax Register Number field, specify the Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status.This field is mapped to the AdditionalAccountID field in the e-invoice file template. The field depends on the type of transaction and the relevant tax authority.IE (Inscrição Estadual): This is the State Registration Number, obtained via the relevant SEFAZ (Secretaria da Fazenda Estadual). It is required for transactions involving goods (NF-e), as these are subject to state-level ICMS (Value-Added Tax on Sales and Services).CCM (Cadastro de Contribuintes Mobiliários): This is the Municipal Taxpayer's ID, obtained via the relevant municipality (Prefeitura). It is required for service transactions (NFS-e), as services are subject to municipal ISS (Tax on Services). |  |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Seller's electronic address, to which the application-level response to the e-invoice file might be delivered. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Seller’s electronic address. |  |
| Business Address | Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Seller’s address, which is often a street address or business name. For Brazil, Address 1 is the name of the street, road, avenue, way, etc. to which the number of the building is attached.. |
| Address 2 | addressLine2 | No | In the Address 2 field, specify the second line of the Seller’s address, which is often the name of a building. For Brazil, Address 2 is an additional street name used to further clarify the address. |  |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address.For Brazil, the value is the postal identifier for this address according to the relevant national postal service, such as a ZIP code or Post Code.. |  |
| City | city | Yes | In the City field, specify the name of the city where the business is located. For Brazil, it’s the name of a city, town, or village. |  |
| State/Province | state | Yes | In the State/Province field, specify the name of the state or province where the business is located.For Brazil, the value is the political or administrative division of a country in which this address is located, such as a county, province, or state, expressed as a code (typically nationally agreed). |  |
| Contact Info | Contact Name | contactName | No | In the Contact Name field, specify the name of the Seller contact to receive e-invoicing data. |
| Email | email | No | In the Email field, specify the email address of the Seller contact to receive e-invoicing data. |  |
| Business Phone Number | phoneNumber | No | In the Business Phone Number field, specify the business phone number of the Seller contact to receive e-invoicing data. |  |
| Service Provider | Provider | serviceProviderId | Yes | From the Provider list, select your e-invoicing service provider.For Brazil, if the service provider is Sovos, the E-Invoice Process could select either Clearance Only. or Clearance with Cancellation. The Clearance with Cancellation is recommended because Brazil supports cancellation workflow. If you’d like to handle the cancellation workflow outside of Zuora, you can set it to Clearance Only. |
| Digital Signature | Enable PDF Digital Signature | digitalSignatureEnable | No | Specify whether the e-invoicing service provider signs PDF files for billing documents.Click Yes to enable the setting. The default setting is NO.For more information, see Digital Signature. |
| Billing Document Type | InvoiceCredit MemoDebit Memo | invoiceEnabledcreditMemoEnableddebitMemoEnabled |  | Select one or more of the following billing document types to be supported:InvoiceCredit MemoDebit MemoThese document types are selected by default.For Brazil, only Invoice is supported. You’ll need to unselect Credit Memo and Debit Memo. |

## E-invoicing profiles for accounts configuration in Brazil

According to Brazil-specific requirements, you must configure e-invoicing profiles for customer accounts involved in the e-invoicing business.

The following table lists the e-invoicing profile settings to configure for a customer account in Brazil.

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable the e-invoicing profile for the customer account.If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:The account must be configured to generate e-invoice files for billing documents.The billing document must be in Posted status.A business region must be created for the billing country contact, and be linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | Yes | The following three options are available:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government)For Brazil, specify the field as B2B or B2C. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Buyer is registered with the relevant legal authority.For Brazil, it’s the name of the party as registered with the relevant fiscal authority. It’s alphanumeric up to 75 characters. |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.For Brazil, two options for the identification of the identification scheme: "CPF" and "CNPJ". CPF and CNPJ are mandatory tax identification numbers that distinguish between individuals and businesses.CPF stands for Cadastro de Pessoas Físicas (Register of Individual Persons).CNPJ stands for Cadastro Nacional da Pessoa Jurídica (National Register of Legal Entities).In the e-invoicing file template, below is a sample mapping.<cac:PartyIdentification><cbc:ID schemeID="CNPJ">{{Account.EInvoiceProfile.BusinessNumber}}</cbc:ID> </cac:PartyIdentification> |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person.For Brazil, two options for the identification of the identification scheme: "CPF" and "CNPJ".If you don’t specify the scheme is in the business region, you can hard-code in the template. |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status. |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Buyer's electronic address, to which the application-level response to the invoice/billing document might be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Buyer’s electronic address. |

## Sold-to contacts for accounts configuration in Brazil

You must configure sold-to contacts for customer accounts involved in the e-invoicing business in Brazil.

The following table lists the contact-related fields involved in the e-invoicing business in Brazil.

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Country | country | Yes | From the Country list, select Brazil. |
| Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Buyer’s address, which is often a street address or business name.For Brazil, Address 1 is the name of the street, road, avenue, way, etc. to which the number of the building is attached. It’s Alphanumeric up to 50 characters. |
| Address 2 | addressLine2 | No | In the Address 2 field, specify the second line of the Buyer’s address, which is often the name of a building.For Brazil, Address 2 is an additional street name used to further clarify the address. |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address.For Brazil, the value is the postal identifier for this address according to the relevant national postal service, such as a ZIP code or Post Code. The address zip code is Numeric with 7-8 characters. |
| City | city | Yes | In the City field, specify the name of the city where the business is located.For Brazil, the value is the name of a city, town, or village. |
| State/Province | state | Yes | In the State/Province field, specify the name of the state or province where the business is located.For Brazil, it’s the political or administrative division of a country in which this address is located, such as a county, province, or state, expressed as a code (typically nationally agreed).E-Invoice requires an abbreviation of the State which are 2 digit values. I recommend using a custom field on the contact object. See the details in the State Code field next row. |
| State Code | StateCode__c | Yes | The field value must be an abbreviation of the State of the address for Brazil. It’s alphanumeric with 2 characters. |

## Custom fields creation specific to e-invoicing

You must create and manage custom fields to store country-specific information for mapping to Sovos. It is best practice to use the objects and custom fields listed in the following table.

| Object | Custom field | Notes |
| --- | --- | --- |
| Product Rate Plan Charge | HSN__c | Create this custom field of the string type to store HSN codes.While configuring e-invoicing for Brazil, ensure that you configure HSN codes for all your products and services under the Product Catalog. Electronic billing documents can be generated only with an HSN code. The use of HSN codes is mainly for dealers and trades. They must adopt 2-digit, 4-digit, and 8-digit HSN codes depending on the business turnover. For more information, see GST HSN Codes. |
| Contact | StateCode__c | A new custom field with label StateCode has to be defined with its type being Text under Contact Standard Object with No default value being populated. The values should be 2 digit code of the state and that must be populated whenever the Contact record for the Invoice is created. |

These custom fields are integral to the default e-invoice file templates. If you opt to define custom fields with different names or on alternative objects, you are required to make adjustments to the default templates.

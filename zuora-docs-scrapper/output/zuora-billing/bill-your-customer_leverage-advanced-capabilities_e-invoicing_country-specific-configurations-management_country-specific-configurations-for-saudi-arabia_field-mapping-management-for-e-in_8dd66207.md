---
title: "Field mapping management for e-invoice file templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-for-saudi-arabia/field-mapping-management-for-e-invoice-file-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:52.082Z"
---

# Field mapping management for e-invoice file templates

n the e-invoicing clearance process in Saudi Arabia, ensure that the field mapping for e-invoice file templates is complete and correct. The default e-invoice file template for Saudi Arabia in Zuora is explained below. Keep in mind that you may need to customize the template if the default field mapping doesn't align with your business requirements.

## E-invoicing business regions configuration for Saudi Arabia

In the e-invoicing clearance process in Saudi Arabia, you must configure business regions according to the specific requirements of Saudi Arabia.

The business region objects can be looked up according to the country and state, and their related fields can be mapped accordingly within the e-invoicing template. You must configure e-invoicing business regions for Saudi Arabia according to its requirements.

The following table lists the business region settings you must configure in the Add Business Region dialog.
| UI section | UI field | API field | Required | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name of the Seller registered with the relevant legal authority.Character limit : 1000 |  |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person you do business with.For Saudi Arabia, the value is the Tax Identification Number (TIN) issued by the General Authority for Zakat and Tax (GAZT) to all taxpayers and withholding entities (such as government ministries, agencies, and departments). GAZT is the Saudi Arabia's tax administrator. Once a TIN is issued to a taxpayer, it remains valid as long as the taxpayer is in operation. The taxpayer's TIN is used for all the taxes to which the taxpayer is liable. |  |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person. |  |
| Trade Name | tradeName | No | In the Trade Name field, specify the name that the Seller is known as, other than the legal business name. |  |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status. |  |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Seller's electronic address, to which the application-level response to the e-invoice file might be delivered. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Seller’s electronic address. |  |
| Business Address | Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Seller’s address, which is often a street address or business name.For Saudi Arabia, it's the main address line in an address.Character limit 1000 |
| Address 2 | addressLine2 | Yes | In the Address 2 field, specify the second line of the Seller’s address, which is often the name of a building. For Saudi Arabia, it's the building number within a street. |  |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address.For Saudi Arabia, the value is the postal identifier for this address according to the relevant national postal service, such as a ZIP code or postcode. |  |
| City | city | Yes | In the City field, specify the name of the city where the business is located. For Saudi Arabia, it's the common name of a city, town, or village of the seller.Character limit : 127 |  |
| State/Province | state | Yes | In the State/Province field, specify the name of the state or province where the business is located.For Saudi Arabia, it’s the name of the subdivision of the Seller's city, town, or village in which its address is located. For example, the name of its district or borough.Character limi: 127 |  |
| Contact Info | Contact Name | contactName | No | In the Contact Name field, specify the name of the Seller contact to receive e-invoicing data. |
| Email | email | No | In the Email field, specify the email address of the Seller contact to receive e-invoicing data. |  |
| Business Phone Number | phoneNumber | No | In the Business Phone Number field, specify the business phone number of the Seller contact to receive e-invoicing data. |  |
| Service Provider | Provider | serviceProviderId | Yes | From the Provider list, select your e-invoicing service provider.For Saudi Arabia, if the service provider is Sovos, the E-Invoice Process automatically changes to Clearance Only . |
| Digital Signature | Enable PDF Digital Signature | digitalSignatureEnable | No | Specify whether the e-invoicing service provider signs PDF files for billing documents.Click Yes to enable the setting. The default setting is NO .For more information, see Digital Signature . |
| Billing Document Type | InvoiceCredit MemoDebit Memo | invoiceEnabledcreditMemoEnableddebitMemoEnabled | Yes | Select one or more of the following billing document types to be supported:InvoiceCredit MemoDebit MemoThese document types are selected by default. |

## E-invoicing profiles configuration for accounts in Saudi Arabia

According to the specific requirements of Saudi Arabia, you must configure e-invoicing profiles for customer accounts involved in the e-invoicing business.

The following table lists the e-invoicing profile settings to configure for a customer account in Saudi Arabia.
| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable the e-invoicing profile for the customer account.If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:The account must be configured to generate e-invoice files for billing documents.The billing document must be in Posted status.A business region must be created for the billing country contact, and be linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | No | The following three options are available:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government) |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Buyer is registered with the relevant legal authority.Character limi t : 1000 |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.The value is the tax identification number for VAT purposes. The first two characters represent the country (IT, DE, ES, and so on), and the remaining characters (up to a maximum of 28) are the actual code, which, for the residents of Saudi Arabia, corresponds to their VAT number. |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person. |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status. |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Buyer's electronic address, to which the application-level response to the invoice/billing document might be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Buyer’s electronic address. |

## Sold-to contacts configuration for accounts in Saudi Arabia

You must configure sold-to contacts for customer accounts involved in the e-invoicing business in Saudi Arabia.

The following table lists the contact-related fields involved in the e-invoicing business in Saudi Arabia.
| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Country | country | Yes | From the Country list, select Saudi Arabia. |
| Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Buyer’s address, which is often a street address or business name.For Saudi Arabia, it's the main address line in an address. |
| Address 2 | addressLine2 | Yes | In the Address 2 field, specify the second line of the Buyer’s address, which is often the name of a building.For Saudi Arabia, it's the building number within a street. |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address.For Saudi Arabia, the value is the postal identifier for this address according to the relevant national postal service, such as a ZIP code or postcode. |
| City | city | Yes | In the City field, specify the name of the city where the business is located. For Saudi Arabia, it's the common name of a city, town, or village of the seller. |
| State/Province | state | Yes | In the State/Province field, specify the name of the state or province where the business is located.For Saudi Arabia, it’s the name of the subdivision of the Buyer's city, town, or village in which its address is located. For example, the name of its district or borough. |

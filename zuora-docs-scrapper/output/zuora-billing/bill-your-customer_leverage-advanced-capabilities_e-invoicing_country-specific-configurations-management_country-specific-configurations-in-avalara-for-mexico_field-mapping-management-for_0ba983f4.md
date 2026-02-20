---
title: "Field mapping management for e-invoice file templates for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-avalara-for-mexico/field-mapping-management-for-e-invoice-file-templates-for-mexico"
product: "zuora-billing"
scraped_at: "2026-02-20T17:35:32.509Z"
---

# Field mapping management for e-invoice file templates for Mexico

Manage field mapping for e-invoice file templates in Mexico's e-invoicing clearance process, ensuring compliance with business requirements.

In the e-invoicing Clearance process in Mexico, ensure that the field mapping for e-invoice file templates is complete and correct.

The following fields are used in the default e-invoice file template. Remember that you might have to customize the default e-invoice file template if the default field mapping does not align with your business requirements. You can get the details of field descriptions and sample payload from Avalara websiste: [https://developer.avalara.com/elr-usecases/](https://developer.avalara.com/elr-usecases/)

## E-invoicing business regions configuration for Mexico

In the e-invoicing clearance process in Mexico, you must configure business regions according to Mexico-specific requirements.

The business region objects can be looked up according to the country and state, and their related fields can be mapped accordingly within the e-invoicing template. You must configure e-invoicing business regions for Mexico according to Mexico-specific requirements.

The following table lists the business region settings you must configure in the Add Business Region dialog.

| UI section | UI field | API field | Required | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Seller is registered with the relevant legal authority.For Mexico, it’s an attribute required to register the name, denomination, or business name of the taxpayer registered in the RFC. |  |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.For Mexico, the value is the RFC Number, you need to retrieve this number from the Mexico tax authority. It’s an attribute required to register the Issuer's RFC key. For example, IIA040805DZ4 |  |
| Business Number Schema Id | businessNumberSchemeId | Yes | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person.For Mexico, it’s 9930 typically. |  |
| Trade Name | tradeName | No | In the Trade Name field, specify the name that the Seller is known as, other than the legal business name. |  |
| Tax Register Number | taxRegisterNumber | Yes | In the Tax Register Number field, specify the Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status.For Mexico, it’s the RFC number. |  |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Seller's electronic address, to which the application-level response to the e-invoice file might be delivered. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Seller’s electronic address. |  |
| Business Address | Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Seller’s address, which is often a street address or business name.It’s required for the Credit Memo. |
| Address 2 | addressLine2 | No | In the Address 2 field, specify the second line of the Seller’s address, which is often the name of a building. |  |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address. Seller postcode: The identifier for an addressable group of properties according to the relevant postal service. |  |
| City | city | Yes | In the City field, specify the name of the city where the business is located.It’s required for the Credit Memo. |  |
| State/Province | state | No | In the State/Province field, specify the name of the state or province where the business is located. |  |
| Contact Info | Contact Name | contactName | No | In the Contact Name field, specify the name of the Seller contact to receive e-invoicing data. |
| Email | email | No | In the Email field, specify the email address of the Seller contact to receive e-invoicing data. |  |
| Business Phone Number | phoneNumber | No | In the Business Phone Number field, specify the business phone number of the Seller contact to receive e-invoicing data. |  |
| Service Provider | Provider | serviceProviderId | Yes | From the Provider list, select your e-invoicing service provider.For Mexico, if the service provider is Avalara, the E-Invoice Process automatically changes to Clearances. |
| Billing Document Type | InvoiceCredit MemoDebit Memo | invoiceEnabledcreditMemoEnableddebitMemoEnabled | Yes | Select one or more of the following billing document types to be supported:InvoiceCredit MemoDebit MemoThese document types are selected by default. |

## E-invoicing profiles for accounts configuration in Mexico

According to Mexico-specific requirements, you must configure e-invoicing profiles for customer accounts involved in the e-invoicing business.

The following table lists the e-invoicing profile settings to configure for a customer account in Mexico.

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable the e-invoicing profile for the customer account.If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:The account must be configured to generate e-invoice files for billing documents.The billing document must be in Posted status.A business region must be created for the billing country contact, and be linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | Yes | The following three options are available:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government)Mexico uses mandates B2B or B2C. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Buyer is registered with the relevant legal authority.For Mexico, It’s an attribute required to register the name(s), first surname, second surname, as appropriate, denomination or business name of the taxpayer. |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.For Mexico, it’s the Buyer identifier. It’s an attribute required to register the RFC key of the Receiver. |
| Business Number Schema Id | businessNumberSchemeId | Yes | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person. |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status. |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Buyer's electronic address, to which the application-level response to the invoice/billing document might be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Buyer’s electronic address. |

## Sold-to contacts configuration for e-invoicing

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Country | country | Yes | From the Country list, select Mexico . |
| Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Buyer’s address, which is often a street address or business name.It’s required for the Credit Memo. |
| Address 2 | addressLine2 | No | In the Address 2 field, specify the second line of the Buyer’s address, which is often the name of a building. |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address.For Mexico, it’s an attribute required to register the postal code of the tax domicile of the recipient of the receipt. |
| City | city | Yes | In the City field, specify the name of the city where the business is located.It’s required for the Credit Memo. |
| State/Province | state | No | In the State/Province field, specify the name of the state or province where the business is located. |

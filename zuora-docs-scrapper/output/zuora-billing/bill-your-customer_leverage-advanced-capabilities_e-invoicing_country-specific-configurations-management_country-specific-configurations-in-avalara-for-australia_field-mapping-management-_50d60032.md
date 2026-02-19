---
title: "Field mapping management for e-invoice file templates for Australia"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-avalara-for-australia/field-mapping-management-for-e-invoice-file-templates-for-australia"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:34.818Z"
---

# Field mapping management for e-invoice file templates for Australia

Manage field mapping for e-invoice file templates in the Peppol network process in Australia, ensuring alignment with business requirements and accessing field descriptions and sample payloads from Avalara.

In the e-invoicing Peppol network process in Australia, ensure that the field mapping for e-invoice file templates is complete and correct. The following fields are used in the default e-invoice file template. Remember that you might have to customize the default e-invoice file template if the default field mapping does not align with your business requirements. You can get the details of field descriptions and sample payload from Avalara websiste: [https://developer.avalara.com/elr-usecases/](https://developer.avalara.com/elr-usecases/).

## E-invoicing business regions configuration for Australia

In the e-invoicing Peppol network process in Australia, you must configure business regions according to Australia-specific requirements.

The business region objects can be looked up according to the country and state, and their related fields can be mapped accordingly within the e-invoicing template. You must configure e-invoicing business regions for Australia according to Australia-specific requirements.

The following table lists the business region settings you must configure in the Add Business Region dialog.

| UI section | UI field | API field | Required | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Seller is registered with the relevant legal authority. |  |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.For Australia, the value is your ABN that you can look up at the Australian Government website: https://abr.business.gov.au/ |  |
| Business Number Schema Id | businessNumberSchemeId | Yes | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person.For Australia, the number is 0151, it indicates Australian Business Number (ABN) Scheme |  |
| Trade Name | tradeName | No | In the Trade Name field, specify the name that the Seller is known as, other than the legal business name. |  |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller's address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status. |  |
| E-Invoice Destination Code | endpointId | Yes | In the E-Invoice Destination Code field, specify the Seller's electronic address, to which the application-level response to the e-invoice file might be delivered.In Australia, the Peppol ID is made up of the ABN. When you generate Peppol ID as iso6523-actorid-upis::0151:74004085818. You'll input endpointId as 74004085818, which is the ABN number. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | Yes | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Seller's electronic address.After the activation is completed, you need to record the Peppol ID, for example, iso6523-actorid-upis::0151:74004085818. Enter "0151" as the E-Invoice Destination Code Schema Id. |  |
| Business Address | Address 1 | addressLine1 | No | In the Address 1 field, specify the first line of the Seller's address, which is often a street address or business name. |
| Address 2 | addressLine2 | No | In the Address 2 field, specify the second line of the Seller's address, which is often the name of a building. |  |
| Postal Code | postalCode | No | In the Postal Code field, specify the short code that can identify the business address. |  |
| City | city | No | In the City field, specify the name of the city where the business is located. |  |
| State/Province | state | No | In the State/Province field, specify the name of the state or province where the business is located. |  |
| Contact Info | Contact Name | contactName | Yes | In the Contact Name field, specify the name of the Seller contact to receive e-invoicing data. |
| Email | email | Yes | In the Email field, specify the email address of the Seller contact to receive e-invoicing data. |  |
| Business Phone Number | phoneNumber | Yes | In the Business Phone Number field, specify the business phone number of the Seller contact to receive e-invoicing data. |  |
| Service Provider | Provider | serviceProviderId | Yes | From the Provider list, select your e-invoicing service provider.For Australia, if the service provider is Avalara, the E-Invoice Process automatically changes to PEPPOL Network. |
| Billing Document Type | InvoiceCredit MemoDebit Memo | invoiceEnabledcreditMemoEnableddebitMemoEnabled | Yes | Select one or more of the following billing document types to be supported:InvoiceCredit MemoDebit MemoThese document types are selected by default. |

## E-invoicing profiles for accounts configuration in Australia

According to Australia-specific requirements, you must configure e-invoicing profiles for customer accounts involved in the e-invoicing business.

The following table lists the e-invoicing profile settings to configure for a customer account in Australia.

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable the e-invoicing profile for the customer account.If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:The account must be configured to generate e-invoice files for billing documents.The billing document must be in Posted status.A business region must be created for the billing country contact, and be linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | Yes | The following three options are available:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government) |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Buyer is registered with the relevant legal authority. |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.For Australia, the value is your ABN that you can look up at the Australian Government website: https://abr.business.gov.au/ |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person. |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer's address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status. |
| E-Invoice Destination Code | endpointId | Yes | In the E-Invoice Destination Code field, specify the Buyer's electronic address, to which the application-level response to the invoice/billing document might be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | Yes | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Buyer's electronic address. |

## Sold-to contacts configuration for e-invoicing

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Country | country | Yes | From the Country list, select Austrialia. |
| Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Buyer’s address, which is often a street address or business name. |
| Address 2 | addressLine2 | No | In the Address 2 field, specify the second line of the Buyer’s address, which is often the name of a building. |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address.For Saudi Arabia, the value is the postal identifier for this address according to the relevant national postal service, such as a ZIP code or postcode. |
| City | city | Yes | In the City field, specify the name of the city where the business is located. For Saudi Arabia, it's the common name of a city, town, or village of the seller. |
| State/Province | state | No | In the State/Province field, specify the name of the state or province where the business is located.For Saudi Arabia, it’s the name of the subdivision of the Buyer's city, town, or village in which its address is located. For example, the name of its district or borough. |

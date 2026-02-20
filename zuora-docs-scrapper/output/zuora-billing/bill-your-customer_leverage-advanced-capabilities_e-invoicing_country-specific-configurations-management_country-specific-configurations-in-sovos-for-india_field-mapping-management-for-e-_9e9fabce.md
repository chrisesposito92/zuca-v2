---
title: "Field mapping management for e-invoice file templates for India"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-india/field-mapping-management-for-e-invoice-file-templates-for-india"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:20.254Z"
---

# Field mapping management for e-invoice file templates for India

Guide to managing field mapping for e-invoice file templates in the Indian e-invoicing clearance process.

In the e-invoicing clearance process in India, ensure the field mapping for e-invoice file templates.

## Configure e-invoicing business regions for India

You must specify the GSTIN number for the Seller in the Business Number field of the business Region.

The following table lists the business region settings you must configure in the Add Business Region dialog.

| section | UI field | API field | Required by India | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Seller is registered with the relevant legal authority. |  |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.You must specify the GSTIN number for the Seller. |  |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person. |  |
| Trade Name | tradeName | Yes | In the Trade Name field, specify the name that the Seller is known as, other than the legal business name. |  |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status. |  |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Seller's electronic address, to which the application-level response to the e-invoice file might be delivered. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Seller’s electronic address. |  |
| Business Address | Address 1 | addressLine1 | Yes | In the Address 1 field, specify the first line of the Seller’s address, which is often a street address or business name. |
| Address 2 | addressLine2 | Yes | In the Address 2 field, specify the second line of the Seller’s address, which is often the name of a building. |  |
| Postal Code | postalCode | Yes | In the Postal Code field, specify the short code that can identify the business address. |  |
| City | city | Yes | In the City field, specify the name of the city where the business is located. |  |
| State/Province | state | Yes | In the State/Province field, specify the name of the state or province where the business is located.The state name needs to be converted to a GST code, as Sovos requires GST codes for states. The Zuora default e-invoicing file template includes a method for converting state names to GST codes. See Create custom objects for storing state names and codes . |  |
| Contact Info | Contact Name | contactName | No | In the Contact Name field, specify the name of the Seller contact to receive e-invoicing data. |
| Email | email | No | In the Email field, specify the email address of the Seller contact to receive e-invoicing data. |  |
| Business Phone Number | phoneNumber | No | In the Business Phone Number field, specify the business phone number of the Seller contact to receive e-invoicing data. |  |
| Service Provider | Provider | serviceProviderId | Yes | From the Provider list, select your e-invoicing service provider.For India, if the service provider is Sovos, the E-Invoice Process automatically changes to Clearance Only. |
| Digital Signature | Enable PDF Digital Signature | digitalSignatureEnable | No | Specify whether the e-invoicing service provider signs PDF files for billing documents.Click Yes to enable the setting. The default setting is NO.For more information, see Digital Signature . |
| Show Signature Box | digitalSignatureBoxEnable | No | Specify whether the digital signature box is displayed on PDF files for billing documents.Click Yes to enable the setting. The default setting is NO. |  |
| Coordination on PDF | digitalSignatureBoxPosX, digitalSignatureBoxPosY | No | In the text box, specify the position of the on-page signature box. If the coordinates are set to (0,0), the signature box will appear in the lower-left corner of the page, while the coordinates (595,842) place the signature box in the upper-right corner of the page. |  |
| Billing Document Type | InvoiceCredit MemoDebit Memo | invoiceEnabledcreditMemoEnableddebitMemoEnabled | Yes | Select one or more of the following billing document types to be supported:InvoiceCredit MemoDebit MemoThese document types are selected by default. |

## Configure e-invoicing profiles for accounts in India

You must specify the GSTIN number for the Buyer in the Business Number field of the account e-invoicing profile.

The following table lists the e-invoicing profile settings to configure for a customer account.

| UI field | API field | Required by India | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable the e-invoicing profile for the customer account.If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:The account must be configured to generate e-invoice files for billing documents.The billing document must be in Posted status.A business region must be created for the billing country contact, and be linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | No | The following three options are available:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government)For India, specify the field as B2B or B2G. |
| Legal Business Name | businessName | Yes | In the Legal Business Name field, specify the full official name that the Buyer is registered with the relevant legal authority. |
| Legal Business Number | businessNumber | Yes | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with.You must specify the GSTIN number for the Buyer. |
| Business Number Schema Id | businessNumberSchemeId | No | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person. |
| Tax Register Number | taxRegisterNumber | No | In the Tax Register Number field, specify the Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status. |
| E-Invoice Destination Code | endpointId | No | In the E-Invoice Destination Code field, specify the Buyer's electronic address, to which the application-level response to the invoice/billing document might be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | No | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Buyer’s electronic address. |

## Configure sold-to contacts for accounts in India

You must configure sold-to contacts for customer accounts involved in the e-invoicing business in India.

The following table lists the contact-related fields involved in the e-invoicing business in India.

| UI field | API field | Required by India | Description |
| --- | --- | --- | --- |
| Country | country | Yes | Specify a country or region where you must comply with e-invoicing requirements. |
| Address 1 | addressLine1 | Yes | Specify the first line of the Buyer’s address, which is often a street address or business name. |
| Address 2 | addressLine2 | Yes | Specify the second line of the Buyer’s address, which is often the name of a building. |
| Postal Code | postalCode | Yes | Specify the short code that can identify the business address. |
| City | city | Yes | Specify the name of the city where the business is located. |
| State/Province | state | Yes | Specify the name of the state or province where the business is located.The state name needs to be converted to a GST code, as Sovos requires GST codes for states. The Zuora default e-invoicing file template includes a method for converting state names to GST codes. See Create custom objects for storing state names and codes . |

## Create custom fields specific to e-invoicing

You must create and manage custom fields to store country-specific information for mapping to Sovos. It is best practice to use the objects and custom fields listed in the following table.

| Object | Custom field | Notes |
| --- | --- | --- |
| Product Rate Plan Charge | HSN__c | Create this custom field of the string type to store HSN codes.While configuring e-invoicing for India, ensure that you configure HSN codes for all your products and services under the Product Catalog. Electronic billing documents can be generated only with an HSN code. The use of HSN codes is mainly for dealers and trades. They must adopt 2-digit, 4-digit, and 8-digit HSN codes depending on the business turnover. For more information, see GST HSN Codes . |
| Account | SupplyType__c | Create this custom field of the picklist type to store the type of supply. This picklist field has the following options:B2B: business to businessSEZWP: SEZ with paymentSEZWOP: SEZ without paymentEXPWP: export with paymentEXPWOP: export with paymentDEXP: deemed exportNote that the values of the picklist field must use short names like B2B, SEZWP, and so on. |

These custom fields are integral to the default e-invoice file templates. If you opt to define custom fields with different names or on alternative objects, you are required to make adjustments to the default templates.

---
title: "Business region settings"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-business-regions-configuration/business-region-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:48.440Z"
---

# Business region settings

The business region objects can be looked up according to the country and state, and their related fields can be mapped accordingly within the e-invoicing template.

The following table lists the business region settings that you need to configure in the Add Business Region dialog. This table includes the general settings for countries that are not pre-integrated. For settings of the pre-integrated countries, see Manage country-specific configurations .

The Invoice, Credit Memo, and Debit Memo and Use Default Rule to Match the Business Region checkboxes are all selected by default. You can clear the Use Default Rule to Match the Business Region to use a custom filter to define your rule for restricting the billing documents that can be transferred. See Configure rules for selecting documents and mandates .

| UI section | UI field | API field | Description |
| --- | --- | --- | --- |
| Basic Info | Country | country | From the Country list, select a country or region where you must comply with e-invoicing requirements. |
| Legal Business Name | businessName | In the Legal Business Name field, specify the full official name that the Seller is registered with the relevant legal authority. |  |
| Legal Business Number | businessNumber | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with. |  |
| Business Number Schema Id | businessNumberSchemeId | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Seller as a legal entity or person. |  |
| Trade Name | tradeName | In the Trade Name field, specify the name that the Seller is known as, other than the legal business name. |  |
| Tax Register Number | taxRegisterNumber | In the Tax Register Number field, specify the Seller's VAT identifier (also known as Seller VAT identification number) or the local identification (defined by the Seller’s address) of the Seller for tax purposes, or a reference that enables the Seller to state the registered tax status. |  |
| E-Invoice Destination Code | endpointId | In the E-Invoice Destination Code field, specify the Seller's electronic address, to which the application-level response to the e-invoice file might be delivered. |  |
| E-Invoice Destination Code Schema Id | endpointSchemeId | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Seller’s electronic address. |  |
| Business Address | Address 1 | addressLine1 | In the Address 1 field, specify the first line of the Seller’s address, which is often a street address or business name. |
| Address 2 | addressLine2 | In the Address 2 field, specify the second line of the Seller’s address, which is often the name of a building. |  |
| Postal Code | postalCode | In the Postal Code field, specify the short code that can identify the business address. |  |
| City | city | In the City field, specify the name of the city where the business is located. |  |
| State/Province | state | In the State/Province field, specify the name of the state or province where the business is located. |  |
| Contact Info | Contact Name | contactName | In the Contact Name field, specify the name of the Seller contact to receive e-invoicing data. |
| Email | email | In the Email field, specify the email address of the Seller contact to receive e-invoicing data. |  |
| Business Phone Number | phoneNumber | In the Business Phone Number field, specify the business phone number of the Seller contact to receive e-invoicing data. |  |
| Service Provider | Provider | serviceProviderId | From the Provider list, select your e-invoicing service provider. |
| Digital SignatureNote: Available to Sovos | Enable PDF Digital Signature | digitalSignatureEnable | Specify whether the e-invoicing service provider signs PDF files for billing documents.Click Yes to enable the setting. The default setting is NO .For more information, see Digital Signature . |
| Show Signature Box | digitalSignatureBoxEnable | Specify whether the digital signature box is displayed on PDF files for billing documents.Click Yes to enable the setting. The default setting is NO . |  |
| Coordination on PDF | digitalSignatureBoxPosX, digitalSignatureBoxPosY | In the text box, specify the position of the on-page signature box. If the coordinates are set to (0,0), the signature box will appear in the lower-left corner of the page, while the coordinates (595,842) place the signature box in the upper-right corner of the page. |  |
| E-Invoice ProcessNote: Available to Sovos and Avalara | E-Invoice Process | processType | If the selected service provider is Sovos or Avalara, the E-Invoice Process field is available, you can select one of the process types corresponding to the service provider:Sovos:Clearance OnlyClearance with CancellationAvalara:ClearancePEPPOL Network |
| E-Invoice File Format | FileFormat | If the selected service provider is Avalara, the E-Invoice File Format field is available. Depending on the country, up to three business categories (B2C, B2B, and B2G) and the supported file formats, including XML, UBL, PNG, or QR codes, will be displayed. You can configure the default file format for these business categories. When the invoice completes the e-invoicing process, the file with the default format is downloaded and stored in Zuora automatically.Note:When an invoice is processed by Sovos or PEPPOL, you can download the e-invoice only in the default file format. |  |
| Billing Document Type | invoiceEnabledcreditMemoEnableddebitMemoEnabled | Select one or more of the following billing document types to be supported:InvoiceCredit MemoDebit MemoThe Invoice, Credit Memo, and Debit Memo and Use Default Rule to Match the Business Region checkboxes are all selected by default. You can clear the Use Default Rule to Match the Business Region to use a custom filter to define your rule for restricting the billing documents that can be transferred. See Create rules for selecting documents and mandates , Use cases for creating rules , and Objects and fields for creating rules . |  |

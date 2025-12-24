---
title: "E-invoicing profile settings for accounts"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts/e-invoicing-profile-settings-for-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:00.900Z"
---

# E-invoicing profile settings for accounts

This topic outlines the e-invoicing profile settings for customer accounts, including general settings for non-pre-integrated countries and usage in e-invoice file templates and custom events.

The following table lists the e-invoicing profile settings to configure for a customer account. This table includes the general settings for countries that are not pre-integrated. For settings of the pre-integrated countries, see Manage country-specific configurations .

You can use these fields in e-invoice file templates, custom events, and other places to include profile-level e-invoicing information.

| UI field | API field | Description |
| --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Enable the e-invoicing profile for the customer account.If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:The account must be configured to generate e-invoice files for billing documents.The billing document must be in Posted status.A business region must be created for the billing country contact, and be linked to an e-invoicing service provider. |
| Business Category | BusinessCategory | The following three options are available:B2B (Business to Business)B2C (Business to Consumer)B2G (Business to Government) |
| Legal Business Name | businessName | In the Legal Business Name field, specify the full official name that the Buyer is registered with the relevant legal authority. |
| Legal Business Number | businessNumber | In the Legal Business Number field, specify the unique identifier number of the legal entity or person that you do business with. |
| Business Number Schema Id | businessNumberSchemeId | In the Business Number Schema Id field, specify the identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person. |
| Tax Register Number | taxRegisterNumber | In the Tax Register Number field, specify the Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status. |
| E-Invoice Destination Code | endpointId | In the E-Invoice Destination Code field, specify the Buyer's electronic address, to which the application-level response to the invoice/billing document might be delivered. |
| E-Invoice Destination Code Schema Id | endpointSchemeId | In the E-Invoice Destination Code Schema Id field, specify the identification scheme identifier of the Buyer’s electronic address. |
| (Any custom field defined on the EInvoiceProfile object) | (Corresponding API field ending with __c) | You can specify any value in the custom field as needed.For more information about how to define custom fields on the EInvoiceProfile object, see Manage custom fields with the Object Manager . |

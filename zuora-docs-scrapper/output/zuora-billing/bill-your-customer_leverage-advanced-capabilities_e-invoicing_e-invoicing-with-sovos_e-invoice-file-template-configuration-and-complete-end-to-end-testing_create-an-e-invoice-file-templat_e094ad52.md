---
title: "Create an e-invoice file template for a pre-integrated country"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing/create-an-e-invoice-file-template-for-a-pre-integrated-country"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:15.077Z"
---

# Create an e-invoice file template for a pre-integrated country

Create e-invoice file templates for pre-integrated countries using Zuora UI, including customization options and saving procedures.

Zuora provides default e-invoice file templates for pre-integrated countries such as India, Italy, and Saudi Arabia. For a complete list of pre-integrated countries, see [Pre-integrated countries](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/supported-countries).

To create an e-invoice file template for a pre-integrated country in Zuora UI, perform the following steps:

1.  Perform steps 1 to 4 in [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents). Make sure to click Save And Edit Content in the last step.
2.  In the displayed e-invoice file template editor, where a default template is available in the Edit tab, search for a Type tag with the value SenderSystemId and replace the value of the same-level Identifier tag with your sender system ID in Sovos. For more information about Sender System ID in Sovos, see [Configure Sovos sandbox environment](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/configure-sovos-sandbox-environment).

    <Scope> <Type>SenderSystemId</Type> <!-- search for this --> <InstanceIdentifier/> <Identifier>YourSenderSystemId</Identifier> <!-- replace this content --> </Scope>

3.  (Optional) Customize the template as needed. You can customize XML tags or merge fields in the template to meet your specific business needs in the country. For example, configuring country-specific settings. For more information, see [Country-specific configurations management](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management). The merge field syntax in e-invoice file templates is the same as HTML templates, including supported objects, fields, and functions. For more information, see [Merge field syntax for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates).
4.  Click Save in the upper right to save the e-invoice file template.

    Note: Alternatively, you can use the [Create an e-invoice file template](https://developer.zuora.com/api-references/api/operation/POST_CreateEInvoiceFileTemplate/)API operation.

---
title: "Create an e-invoice file template for a country not pre-integrated with Zuora"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/e-invoice-file-templates-creation-and-testing/create-an-e-invoice-file-template-for-a-country-not-pre-integrated-with-zuora"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:00.548Z"
---

# Create an e-invoice file template for a country not pre-integrated with Zuora

You can create e-invoicing file templates for any country supported by Avalara, regardless of whether Zuora is pre-integrated with this country.

To create an e-invoice file template for a country not pre-integrated with Zuora in Zuora UI, perform the following steps:

1.  Perform steps 1 to 4 in [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents/create-and-preview-e-invoice-file-templates-for-billing-documents-through-the-zuora-ui). Make sure to click Save And Edit Content in the last step.
2.  In the displayed e-invoice file template editor, edit the e-invoice file template content:

    1.  Identify the country mandate XML sample code on the [E-Invoicing mandate definitions](https://developer.avalara.com/elr-usecases/) page in Avalara’s documents.
    2.  Replace everything in the Edit tab with the XML sample code in step a.
    3.  Replace account and billing-document-related content with merge fields. All account and billing-document-related content are fixed values in the sample code. You must replace them with merge fields. For example, replace the invoice number with `{{Invoice.InvoiceNumber}}` . The merge field syntax in e-invoicing file templates is the same as HTML templates, including supported objects, fields, and functions. For more information, see [Merge field syntax for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates).
    4.  Customize the template as needed. If the mandate for a business category of a particular country differs from another business category of the same country in Avalara, you must customize the template to make it comply with all mandates you enabled in Avalara. For more information about the business category configuration, see [Configure e-invoicing profile for customer accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/end-to-end-testing-data-preparation). For example, the following code sample returns different tags for B2B, B2C, and other accounts by using an [Expression](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/expressions):

        {{#Wp\_Eval}} "{{Invoice.Account.EInvoiceProfile.BusinessCategory}}" == "B2B" ? "<B2BTag>Available for B2B accounts</B2BTag>" : "{{Invoice.Account.EInvoiceProfile.BusinessCategory}}" == "B2C" ? "<B2CTag>Available for B2C accounts</B2CTag>" : "<GeneralTag>Available for other accounts</GeneralTag>" {{/Wp\_Eval}}

    5.  Click Save in the upper right to save the e-invoice file template.

    Alternatively, you can use the [Create an e-invoice file template](https://developer.zuora.com/api-references/api/operation/POST_CreateEInvoiceFileTemplate/) API operation.

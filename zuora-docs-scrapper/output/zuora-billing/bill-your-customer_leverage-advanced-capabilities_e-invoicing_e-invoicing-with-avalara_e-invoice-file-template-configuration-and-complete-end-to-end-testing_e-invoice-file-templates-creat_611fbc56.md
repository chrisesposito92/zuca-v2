---
title: "Create an e-invoice file template for a pre-integrated country"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/e-invoice-file-templates-creation-and-testing/create-an-e-invoice-file-template-for-a-pre-integrated-country"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:55.144Z"
---

# Create an e-invoice file template for a pre-integrated country

Learn how to create and customize e-invoice file templates for pre-integrated countries.

Zuora provides default e-invoice file templates for pre-integrated countries such as Australia and Mexico. For a complete list of pre-integrated countries, see [Pre-integrated countries](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara#concept-jjbrsiuk__section-69).

To create an e-invoice file template for a pre-integrated country in Zuora UI, perform the following steps:

1.  Perform steps 1 to 4 in [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents/create-and-preview-e-invoice-file-templates-for-billing-documents-through-the-zuora-ui). Make sure to click Save And Edit Content in the last step.
2.  Customize the template as needed. If the mandate for a business category of a particular country differs from another business category of the same country in Avalara, you must customize the template to make it comply with all mandates you enabled in Avalara. For more information about the business category configuration, see [Configure e-invoicing profile for customer accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/end-to-end-testing-data-preparation). You can use merge fields in e-invoicing file templates. The merge field syntax is the same as HTML templates, including supported objects, fields, and functions. For more information, see [Merge field syntax for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates). For example, the following code sample returns different tags for B2B, B2C, and other accounts by using an [Expression](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/expressions):

    {{#Wp\_Eval}} "{{Invoice.Account.EInvoiceProfile.BusinessCategory}}" == "B2B" ? "<B2BTag>Available for B2B accounts</B2BTag>" : "{{Invoice.Account.EInvoiceProfile.BusinessCategory}}" == "B2C" ? "<B2CTag>Available for B2C accounts</B2CTag>" : "<GeneralTag>Available for other accounts</GeneralTag>" {{/Wp\_Eval}

3.  Click Save in the upper right to save the e-invoice file template.

    Alternatively, you can use the [Create an e-invoice file template](https://developer.zuora.com/api-references/api/operation/POST_CreateEInvoiceFileTemplate/)API operation.

---
title: "Create an e-invoice file template for a country not pre-integrated with Zuora"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing/create-an-e-invoice-file-template-for-a-country-not-pre-integrated-with-zuora"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:16.769Z"
---

# Create an e-invoice file template for a country not pre-integrated with Zuora

Create a customized e-invoice file template for non-pre-integrated countries by modifying the template according to Sovos' regulations.

Zuora provides common e-invoice file templates for all billing document types in non-pre-integrated countries. Unlike pre-integrated countries, you must modify the template according to Sovos' regulations for each country before starting the e-invoicing service in that country.

To create an e-invoice file template for a country not pre-integrated with Zuora in Zuora UI, perform the following steps:

1.  Perform steps 1 to 4 in [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents). Make sure to click Save And Edit Content in the last step.
2.  In the displayed e-invoice file template editor, modify the template according to the country-specific request sample payload provided by Sovos and the [Sovos Canonical Invoice (SCI)](https://developer-guide.sovos.com/connect-once-api/standard-business-document/sovos-canonical-invoice/).
    1.  Add the required XML tags if they are not included in the template.
    2.  Update the merge fields as needed. Zuora has pre-defined some merge fields in the common templates. These default merge fields might not meet your specific business needs in the country. For example, you must specify your Sovos sender system ID in the template. You can find more customization suggestions in the template comments. Additionally, if you use custom fields to track information on seller, buyer, or billing documents, you must update the relevant merge fields accordingly. The merge field syntax in e-invoicing file templates is the same as HTML templates, including supported objects, fields, and functions. For more information, see [Merge field syntax for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates).
3.  Click Save in the upper right to save the e-invoice file template.

    Note: Alternatively, you can use the [Create an e-invoice file template](https://developer.zuora.com/api-references/api/operation/POST_CreateEInvoiceFileTemplate/) API operation.

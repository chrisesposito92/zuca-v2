---
title: "Enable multilingual support in HTML billing document templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/enable-multilingual-support-in-html-billing-document-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:57.038Z"
---

# Enable multilingual support in HTML billing document templates

Learn how to set up and generate multilingual PDF billing documents using a single template.

If you operate a global business with customers in multiple languages, you can dynamically generate PDF files for billing documents, including invoices, credit memos, and debit memos, in your customers' preferred languages using one template.

This article describes the process of setting up and generating PDF files for billing documents in multiple languages.

Zuora translates only text-based merge fields using the uploaded translation profile. It selects the language for translation using the locale in customer's communication profile. If the translation profile does not contain a column for the customer's communication profile locale, the original untranslated value for the merge field is used.

Date and numeric merge fields are formatted based on the locale in the customer's communication profile.

To generate PDF files for billing documents in multiple languages:

1.  Enable multilingual billing document templates in the tenant
2.  Identify valid merge fields
3.  Create and upload a translation profile file for the languages you want to translate your billing document PDF files into .
4.  Edit and generate invoice PDF files or memo PDF files. You do not need to make any additional change to billing document templates for translation.

    Note: The multilingual billing feature is currently in the Early Availability phase. If you wish to join this early adopter program, submit a request through

    [Zuora Global Support](http://support.zuora.com/)

    .

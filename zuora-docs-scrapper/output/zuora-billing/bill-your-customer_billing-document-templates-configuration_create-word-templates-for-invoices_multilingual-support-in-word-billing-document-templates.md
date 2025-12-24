---
title: "Multilingual support in Word billing document templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/multilingual-support-in-word-billing-document-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:04.483Z"
---

# Multilingual support in Word billing document templates

Understand how to generate multilingual billing documents in PDF format using a single template, accommodating customers' language preferences.

If you operate a global business with customers in multiple languages, you can dynamically generate PDF files for billing documents, including invoices, credit memos, and debit memos, in your customers' preferred languages using one template.

This article describes the process of setting up and generating PDF files for billing documents in multiple languages.

Zuora translates only text-based merge fields using the uploaded translation profile. It selects the language for translation using the locale in customer's communication profile. If the translation profile does not contain a column for the customer's communication profile locale, the original untranslated value for the merge field is used.

Date and numeric merge fields are formatted based on the locale in the customer's communication profile.

To generate PDF files for billing documents in multiple languages:

1.  [Enable the localization of billing documents in PDF in your tenant.](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/multilingual-support-in-word-billing-document-templates/enable-multilingual-billing-document-templates-in-the-tenant)
2.  [Create and upload a translation profile file for the languages you want to translate your billing document PDF files into.](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/multilingual-support-in-word-billing-document-templates/create-and-upload-a-translation-profile)
3.  [Edit and generate invoice PDF files](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/overview-of-creating-word-template) or [memo PDF files](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/create-a-custom-memo-template). You do not need to make any additional change to billing document templates for translation.

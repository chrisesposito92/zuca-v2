---
title: "Create and upload a translation profile"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/multilingual-support-in-word-billing-document-templates/create-and-upload-a-translation-profile"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:11.045Z"
---

# Create and upload a translation profile

Learn how to create and upload a translation profile for billing documents, ensuring merge fields are translatable and correctly formatted.

A merge field value can be translated if all of the following are true about the merge field:

-   A supported merge field name or [SPECIAL.PPOC](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/enable-multilingual-support-in-html-billing-document-templates/enable-multilingual-billing-document-templates-in-the-tenant) is used.

-   The merge field is not marked as untranslatable.

-   The field type is string.


For the names, types, and translatability of merge fields, see [Merge Fields for Invoices](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices), [Merge Fields for Credit Memos](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-credit-memos), or [Merge Fields for Debit Memos](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-debit-memos).

To create and upload a translation profile, complete the following steps:

1.  Click your username at the top right and select Billing.
2.  In the Billing Settings screen, select Manage Billing Document Configuration.
3.  Click the Translation Profile tab.
4.  From the Choose Template Format drop-down list, select Word .
5.  Click export.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/60289717-d70d-4fbc-8af9-6a97171f2138?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYwMjg5NzE3LWQ3MGQtNGZiYy04YWY5LTZhOTcxNzFmMjEzOCIsImV4cCI6MTc2NjY0MTc0OCwianRpIjoiMzZlNGJiMjQ1M2Q3NDM1ZjkxMDQ5NDU4YmMxYjYzY2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dr00uZNsmumVlgypfS0mZliXSKaiG-JEXkw-S0-CSPk)

    A sample translation file will be downloaded. This file contains two columns:

    -   MergeFieldName: The merge field name as it appears in the billing document template. For a list of supported merge fields, click [here](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-supported-in-if-fields-on-invoice-tempaltes).

    -   OriginalValue: The value in the default language of your tenant. The maximum allowed length is 500 characters.


6.  Add the target languages to the remaining columns. For each column heading, type the language code (e.g., de-DE). Language codes are case-sensitive, so ensure accuracy by referring to the [Supported languages](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/multilingual-support-in-word-billing-document-templates/supported-languages-for-word-billing-document-templates)section below. Each column has a maximum allowed length of 500 characters.
7.  Save the translation file. If you use Microsoft Excel, save it in the Windows Comma Separated (.csv) format.

    Note:

    -   Do not save in the MS-DOS Comma Separated (.csv) format.

    -   You must save the translation file in the UTF-8 Format.


8.  In the Import Translation Profile section, click Choose File , select the translation CSV file, and click Import .
9.  Review the import summary and click OK .
10.  Click and select a language in the translation file to review the translation.

     Now, you can manage billing document template files and generate billing document PDF files as described in [Customize Billing Document Templates Using Word Mail Merge](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/billing-document-templates-customization-using-word-mail-merge).

     Below is an example translation profile. The two merge fields will render translated values based on the profile. All other merge fields will display in the default language used in the product catalog.

     | MergeFieldName | OriginalValue | fr-FR | de-DE |
     | --- | --- | --- | --- |
     | Subscription.Product. Name | Best Product Ever | Meilleur Produit Jamais | Beste Product aller Zeiten |
     | Subscription.RatePlan. Name | Best Product Ever - Gold Edition | Meilleur Produit Jamais - Edition d'Or | Beste Produkt aller Zeiten - Gold Edition |

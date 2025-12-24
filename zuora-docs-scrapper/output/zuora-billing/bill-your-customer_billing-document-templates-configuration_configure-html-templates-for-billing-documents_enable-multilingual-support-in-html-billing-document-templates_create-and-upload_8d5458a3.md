---
title: "Create and upload a translation profile"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/enable-multilingual-support-in-html-billing-document-templates/create-and-upload-a-translation-profile"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:04.867Z"
---

# Create and upload a translation profile

Learn how to create and upload a translation profile in CSV format, including exporting, editing, and importing the profile for use in billing document templates.

Before exporting your translation profile, you must first upload it in CSV format. The system does not have any default files or values. You can refer the sample files below for reference:

Sample 1

MergeFieldName,OriginalValue,ja-JP Account.Name,Butterfly,蝶 Contact.Country,United States,アメリカ合衆国 Contact.State,California,カリフォルニア

Sample 2

MergeFieldName,OriginalValue,zh-CN,ja-JP Account.Name,Butterfly,蝴蝶,蝶 SoldToContact.Country,United States,美利坚合众国,アメリカ合衆国 SoldToContact.State,California,加利福尼亚,カリフォルニア

To create and upload a translation profile, complete the following steps:

1.  Click your username at the top right and navigate to .
2.  Click the Translation Profile tab.
3.  In the Translation Profile Detail section, choose HTML as the template format.
4.  Click Export . A translation file is downloaded with only the MergeFieldName and OriginalValue columns. You can create and edit a merge field in HTML format manually by specifying an object and field name in the translation profile.

    -   MergeFieldName : The merge field name as it appears in the billing document template.

    -   OriginalValue : The value given in the language of your tenant. The maximum allowed length is 500 characters.


5.  Add a language you want to translate to in each of the remaining columns. Type the language code in the column heading, for example, de-DE. The language codes are case-sensitive. You need to type exactly as shown in the Supported languages section. The maximum allowed length is 500 characters.
6.  Save the translation file. If you use Microsoft Excel to edit the translation file, save the file in the Windows Comma Separated (.csv) format.

    Note:

    -   Do not save in the MS-DOS Comma Separated (.csv) format.

    -   You must save the translation file in the UTF-8 Format.


7.  In the Import Translation Profile section, click Choose File , select the translation CSV file, and click Import .
8.  Review the import summary and click OK .
9.  Click and select a language in the translation file to review the translation.

    Note:

    After a new translation profile is uploaded, it will take around 10 minutes for the new translation to take effect.

    Now, you can manage billing document template files and generate billing document PDF files as described in Merge Field mapping for billing documents.

    With the example translation profile below, the two merge fields will render translated values because these are the only two provided in the translation profile. All other merge fields will be displayed in the default language that is used in the product catalog.

    | MergeFieldName | OriginalValue | fr-FR | de-DE |
    | --- | --- | --- | --- |
    | Product.Name | Best Product Ever | Meilleur Produit Jamais | Beste Product aller Zeiten |
    | RatePlan. Name | Best Product Ever - Gold Edition | Meilleur Produit Jamais - Edition d'Or | Beste Produkt aller Zeiten - Gold Edition |

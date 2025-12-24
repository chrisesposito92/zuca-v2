---
title: "Personal Settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/additional-tenant-management-settings/personal-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:10:44.865Z"
---

# Personal Settings

Personal Settings allow you to edit your user profile, view your login history, and change your password or security questions.

The settings in Personal Settings affect only your user profile. To change settings at the tenant level, see [Manage your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

## Locale setting and date formatting

The locale setting of your user profile determines how the Zuora UI displays date information and how you enter dates. For example, if the locale is set to "English (United States)", the date format is displayed or entered as MM/DD/YYYY. If you set the locale to "English (United Kingdom)", the date format is displayed or entered as DD/MM/YYYY.

The following table lists where locale date formatting is applied and where it is not applied.

| Locale Date Format Applied | Locale Date Format NOT Applied |
| --- | --- |
| Zuora UIData source exports from Zuora UIQuote PDFsImport Customer AccountImport Payment MethodMass Order Entry (Subscription and Amendment)Usage UploadReporting | Field names and values in requests and responses from the REST API, SOAP API, and AQuA APIData source exports created through the APIsCallout ParametersMass Updater |

## Language setting

The language setting of your user profile determines which language is used on the Zuora UI and in certain imports and exports.

The following table lists where the language is applied and where it is not applied.

| Display Language Applied | Display Language NOT Applied |
| --- | --- |
| Zuora UI: All system-generated text is displayed in the display language, but user-input text, such as the names of products and revenue recognition rules, remains unchangedData source exports created through the UIThe following Finance exports:Unprocessed ChargesAccounts Receivable Aging Invoice DetailAccounts Receivable Aging Account DetailRevenue DetailAccounts Receivable DetailRealized Gain and Loss DetailUnrealized Gain and Loss DetailJournal Entry Transaction DetailSystem-generated emails from Zuora, for example, a reset password emailReporting: All labels and text are displayed in the display language, but standard report names and descriptions are displayed in English | Field names and values in requests and responses from the REST API, SOAP API, and AQuA API (Error messages are in the display language)Data source exports created through the APIsThe Zuora WSDLCustom fieldsImport files for the following features:Mass UpdaterUsage UploadImport Customer AccountImport ContactImport Payment MethodMass Order Entry360 Sync: Data synchronized to Salesforce is not affected by the Zuora display language.Z-SuiteUser roles |

For more information about date formats, see [Locale date formats](/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/locale-date-formats).

---
title: "Multi-language support"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-ui/multi-language-support"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:12.021Z"
---

# Multi-language support

Zuora Revenue supports multiple languages in the UI, allowing system-generated text to be displayed in the selected language, configurable at the tenant level.

Zuora Revenue can support the following languages in the UI and display the system-generated text in the selected language. This language setting can be configured at the tenant level.

-   English

-   Japanese

-   French


## Switch UI language

To switch the language at the tenant level, navigate to Setups > Application > Profile and change the system level value for the Language profile.

To switch the language at the user level, open the user profile menu by clicking your username on the top right corner and then select the language from the Change Language option. Note that the user's language selection will override the selection that is made at the tenant level. The language selection persists for the consecutive logins of the same user.

To be able to import files that contain non-English characters, enable the UPLOAD\_NON\_ENGLISH\_CHARS profile as well.

To enable French UI, navigate to Setups > Application > Profile and then enable the Enable\_French profile.

After the language is switched, all system-generated texts (such as menu options, UI labels, table headers, and report names) will be displayed in the specific language.

## User-defined values

In Zuora Revenue, some fields can have both system-generated and user-defined values. When you add or modify these fields in one language, they are saved in that particular language. Not all of these fields can be supported by multiple languages.

For the fields with multi-language support, when you first switch to a second language, the system only displays the value in the first language. To display the field value in a second language, switch the UI to the second language and then change the field value to the second language. The specified value gets saved for the second language upon saving. After that, switching back to the first language will display fields in the first language.

For example, when you create an RC Grouping template, you must specify the template name and optionally provide a short description of the template. The Name and Description field is supported by multiple languages. If you create the template in the English UI and provide an English name and description, you can then switch to the Japanese/French UI and modify the template to change the name and description to Japanese/French. After that, the template name and description can be displayed in different languages depending on the UI language.

The user-defined field values for which multi-language support has been enabled have the following characteristics:

-   The field has both system-generated and user-defined values.
-   The field is used on various UI pages of the application.
-   Changes made to a field will be reflected across all users of a tenant.

The following table lists the fields that can be supported by multiple languages.

| Main UI navigation | Supported field name |
| --- | --- |
| Setups > Application > Labels | Display Label |
| Setups > Application > Event Setup | Display Value |
| Setups > Application > Lookups | Lookup value |
| Setups > Application > Profiles | Description |
| Setups > Application > Pre/Post Processor | Procedure Name |
| Setups > Application > Report Setup | Name, Description |
| Setups > Application > Background Jobs | Program Name, Parameter Name |
| Setups > Application > Error Setup | Error Description |
| Setups > Security > Roles | Name, Description |
| Setups > Data Augmentation | Name, Description |
| Setups > Stage Validation | Name, Description |
| Policies > RC Grouping Template | Template Name, Template Description, Rule Name (for primary grouping rule) |
| Policies > Performance Obligations > POB Templates | Description |
| Policies > Performance Obligations > Advance Rule | Name, Rule Name |
| Policies > Cost | Cost Type (name of the cost type) |
| Policies > Variable Consideration | VC Type (name of the VC type), Name, Description |
| Policies > Holds and Approvals > Revenue Holds | Name, Description |
| Policies > Holds and Approvals > Approval Rules | Name, Description |
| Policies > Period Open/Close Tasks | Name, Description |
| Policies > Period Open/Close Templates | Name, Description |
| Forecast > Upload | Name, Description |
| File Upload > Transactions /Cost | Name, Description |
| File Upload > Events | Name, Description |
| File Upload > Bundle | Name, Description |
| File Upload > Variable Consideration | Name, Description |
| File Upload > Custom | Name, Description |
| Reports > Run Reports | Layout Name (name of the report layout) |
| Workbench > Revenue Contracts > Revenue Contract Detail to manage layouts in different tabs | Layout Name, Description |

## Special notes about user-defined values

-   On the Setups > Application > Labels page, if you create a new label, the Display Label field is initially blank. You must input a value for this field in the current language. When you switch to another language, the Display Label field will be the field name displayed in English in the capitalization case without underscores. For example, if you are using the Japanese/French UI and creating a new label, you are responsible for adding the desired Japanese/French texts in the Display Label column. However, if you switch to the English UI, the Display Label column will show the capitalized label name in English without underscores. You can then add the desired English texts in that column so that the English value can be stored in the database for the English language.

-   On the Setups > Application > Event Setup page, the Display Value field will be displayed as the event name across all UI pages wherever the event is used. It is recommended to always set the Name column in English for the event because it is a primary key and can help users that use different languages to identify the event.


## Limitations of Japanese and French UI

Be aware of the following limitations when you are working with the Japanese and French UI:

-   Japanese/French translation does not include user inputs, numbers, database fields (for example, Ids), queries and data type, dates, accounting segments, organization names, and abbreviations.

-   On the following UI pages, only column headers and field names are translated into Japanese/French. Other items remain in English.

    -   Previous Manual JE upload page (prior to 37.008.00.00)

    -   Migration

-   The whole Revenue Analytics page can be displayed only in English at this moment.

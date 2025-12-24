---
title: "E-invoice file templates configuration for billing documents"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:06.101Z"
---

# E-invoice file templates configuration for billing documents

Learn about configuring and managing e-invoice file templates for billing documents using the E-Invoicing feature and REST API operations.

With the [E-Invoicing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature, you must configure e-invoice file templates for your billing documents, including invoices, credit memos, and debit memos.

To configure and manage e-invoice file templates for billing documents through the REST API, use the following operations:

-   [Create an e-invoice file template](https://www.zuora.com/developer/api-references/api/operation/POST_CreateEInvoiceFileTemplate/).

-   [List e-invoice file templates](https://www.zuora.com/developer/api-references/api/operation/GET_EInvoiceFileTemplates/).

-   [Retrieve an e-invoice file template](https://www.zuora.com/developer/api-references/api/operation/GET_EInvoiceFileTemplate/).

-   [Update an e-invoice file template](https://www.zuora.com/developer/api-references/api/operation/PUT_EInvoiceFileTemplate/).

-   [Delete an e-invoice file template](https://www.zuora.com/developer/api-references/api/operation/DELETE_EInvoiceFileTemplate/).


Zuora provides default e-invoice file templates that you can customize as required. For example, some country-specific fields like Harmonized System of Nomenclature (HSN) might be stored on product rate plan charges.

The E-Invoicing feature provides the following functionalities to simplify and enhance your e-invoice file template development experience through the Zuora UI.

-   Built-in default templates

    -   You can jumpstart e-invoice file template creation with new built-in default templates tailored for countries like India, Italy, and Saudi Arabia.

    -   You can also customize these templates based on your unique data configurations, significantly reducing the effort compared to starting from scratch.


-   Data schema and functions for templates

    -   You can easily access a comprehensive view of all supported objects, fields, and functions available for your templates.

    -   This functionality saves you from memorizing object or field names, functions, or their structures.


These enhancements empower you to develop e-invoice file templates more efficiently, providing a smoother and more intuitive experience.

## E-invoice file template editor

In the online e-invoice file template editor, you can switch between the Edit mode and Preview mode to configure and manage e-invoice file templates.

In Edit mode, you can create and customize e-invoice file templates for billing documents according to business demands.

The online e-invoice file template editor in Edit mode mainly consists of the following panels tabs to provide customization capabilities:

-   XML editor in the left panel You can configure and customize detailed contents for e-invoice file templates in the XML editor.

-   Data Schema and Functions tabs in the right panel

    -   In the Data Schema tab, you can copy and search the objects and fields available to use in e-invoice file templates. By default, the root object with its data type is displayed. Invoice is the root object of e-invoice file templates configured for invoices. CreditMemo is the root object of e-invoice file templates configured for credit memos. DebitMemo is the root object of e-invoice file templates configured for debit memos.

        -   Clicking the root object row expands all the nested fields and joined objects of the root object. Similarly, clicking a joined object row expands all the nested fields and joined objects of the corresponding object. You can expand at most seven layers of data schema.

        -   When hovering over an object name or a field name in the left column, the detailed path of the object or field is displayed as a tooltip. When hovering over the data type of an object or field in the right column, the copy icon is displayed to replace the original data type. You can click the icon to copy the path of an object or a field, and then paste it to the specific location in the XML editor where you want to apply the object or field. For example, if you click the copy icon in the `Invoice` > `EInvoiceFileId` row, the copied content is `Invoice.EInvoiceFileId` .

        -   To search for an object or a field, you can enter keywords in the search bar under the tab name. The objects and fields containing the keyword are automatically displayed as search results.

    -   In the Functions tab, you can see all the functions available to use in e-invoice file templates. When hovering over a function name in the left column, the complete function is displayed as a tooltip, containing all available arguments and operators, and the copy icon is displayed in the right column. You can click the icon to copy the complete function, and then paste it to the specific location in the XML editor where you want to apply the function.


In Preview mode, you can select an account and a billing document to preview the rendered e-invoice file online.

## Custom fields creation specific to e-invoicing

You are required to create and manage custom fields to store country-specific information for mapping to Sovos. It is best practice to use the objects and custom fields listed in the following table.

| Object | Custom field | Notes |
| --- | --- | --- |
| Product Rate Plan Charge | HSN__c | Create this custom field of the string type to store HSN codes.While configuring e-invoicing for India, ensure that you configure HSN codes for all your products and services under the Product Catalog. Electronic billing documents can be generated only with an HSN code. The use of HSN codes is mainly for dealers and trades. They must adopt 2-digit, 4-digit, and 8-digit HSN codes depending on the business turnover. For more information, see GST HSN Codes . |
| Account | SupplyType__c | Create this custom field of the picklist type to store the type of supply. This picklist field has the following options:B2B: business to businessSEZWP: SEZ with paymentSEZWOP: SEZ without paymentEXPWP: export with paymentEXPWOP: export with paymentDEXP: deemed exportNote that the values of the picklist field must use short names like B2B, SEZWP, and so on. |

These custom fields are integral to the default e-invoice file templates. If you opt to define custom fields with different names or on alternative objects, you are required to make adjustments to the default templates.

## Field mapping for e-invoice file templates

E-invoice file templates follow the same merge field syntax as HTML templates, and support the same set of objects and fields as HTML templates.

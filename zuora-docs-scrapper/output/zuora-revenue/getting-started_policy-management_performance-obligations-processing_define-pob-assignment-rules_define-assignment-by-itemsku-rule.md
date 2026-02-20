---
title: "Define assignment -   by item/SKU# rule"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules/define-assignment---by-itemsku-rule"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:13.541Z"
---

# Define assignment - by item/SKU# rule

The Assignment - By Item/SKU# rule allows mapping of transaction lines to a single POB using high-level attributes like Product Family or Product Catalog, differentiating it from the Assignment - By Attributes rule. Complete the following steps to define this type of rule.

Note:

Use the Assignment - By Item/SKU# rule to map one transaction line into one single POB. It is recommended to use the high-level attribute for mapping the POB template, such as Product Family or Product Catalog. The difference between this rule and the Assignment - By Attributes rule is that you can specify more aggregated attributes for mapping the POB template with the Assignment - By Attributes rule.

1.  Navigate to Policies > Performance Obligations .
2.  Click the left pointing arrow to open the side menu, and then click Assignment - By Item/SKU# .
3.  Click the '+' icon to add an assignment rule.
4.  Specify the line item number in the Item Number column and optionally provide an item description.
5.  In the Derived POB Name column, specify how to derive the POB name in a revenue contract by selecting the attribute name to be assigned to the POB name.
6.  In the POB Template column, select the appropriate POB template to which you want the transaction line to map. The remaining columns are automatically populated based on your selection.
7.  Enable this assignment rule by selecting the checkbox in the Enabled column.

Note:

If you have a large product list that contains many line item numbers to be configured, you can create the assignment rules by uploading a list of the line item numbers with the naming convention of the POB and the POB template. To do this, first click Download to get the template spreadsheet, fill in the data and then upload the spreadsheet again.

Zuora Revenue attempts the Assignment - By Item/SKU# rule. If none of the rules are applicable, Zuora Revenue then assigns the AUTO POB template to the transaction lines.

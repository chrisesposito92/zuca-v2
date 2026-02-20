---
title: "Define and configure assignment - by attributes"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules/define-and-configure-assignment---by-attributes"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:14.320Z"
---

# Define and configure assignment - by attributes

Learn how to define and configure Assignment - By Attributes rules to map transaction lines to POB templates in Zuora Revenue. Complete the following steps to define this type of assignment rule.

Note: Use the Assignment - By Attributes rule to map one transaction line to one single POB. You can define up to 10 Assignment - By Attributes rules. The rule is the most common approach that is used to assign POB templates.

1.  Navigate to Policies > Performance Obligations .
2.  Click the left pointing arrow to open the side menu, and then click Assignment - By Attributes .
3.  Click the add new icon to add one attribute.
4.  Specify the attribute name and specify how to derive the POB name.
5.  In the POB Template column, select the appropriate POB template. Revenue treatment information is automatically populated.
6.  Add more attributes if necessary. Zuora Revenue can support up to 10 attributes to be configured.
7.  In the Seq column, edit the number to set the order of how the attributes are applied. A best practice is to place the more specific attribute on a higher level and place the more generic attribute on a lower level.
8.  Click the save icon to save your configuration.

You can create the assignment rules by uploading a spreadsheet, which can be created based on a provided template. Click Download to download the template as a spreadsheet, fill in the data and then click Upload to upload the spreadsheet again.

Zuora Revenue attempts the Assignment - By Attributes rule to assign POB templates. If none of these rules are applicable, Zuora Revenue then attempts the Assignment - By Item/SKU ID rule.

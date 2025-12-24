---
title: "Use custom objects with relationships with Zuora objects"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates/use-custom-objects-with-relationships-with-zuora-objects"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:19.777Z"
---

# Use custom objects with relationships with Zuora objects

Learn how to associate customer accounts with legal entities using custom objects in Zuora, and display entity-specific information on invoices.

Assume that your company has multiple legal entities globally, and you want to associate your customer accounts with appropriate legal entities. The legal entity information is used to display information conditionally on generated invoice PDF files.

To use custom objects with relationships with Zuora objects in your scenario, perform the following steps:

1.  Define a custom object named LegalEntity to store the legal entity information. The custom object has a custom field called `Account__c` with `Field Type` as `Relationship` , `Namespace` as `com_zuora` , and `Object Name` as `Account` . The relationship between the custom object LegalEntity and its related object Account is many-to-one, although one Account object is related to only oneLegalEntity object. The following table lists the structures of the custom object. The `EntityNumber__c` and `Account__c` fields are filterable.

    | ID | Entity Name (EntityName__c) | Entity Number (EntityNumber__c) | Account (Account__c) |
    | --- | --- | --- | --- |
    | 0f9e8dc6-4256-4185-805a-efbb761245a4 | Legal Entity USA | 100001 | 2c92c8fe79652c000179683d2c1f122d |
    | 0f9e8dc6-4256-4185-805a-efbb761245a5 | Legal Entity UK | 100002 | 2c92c8fb783a5faa01783ae11bdc0731 |
    | 0f9e8dc6-4256-4185-805a-efbb761245a9 | Legal Entity APAC | 100003 | 2c92c8fb7d2c85e1017d2d18bd9d0cda |

2.  To display entity names on invoices, use the following example: `{{#Account.default__legalentities|First(1)}} {{EntityName__c}} {{/Account.default__legalentities|First(1)}}` In the preceding example, `Account.default__legalentities` refers to the custom object list, and the `First` function returns the first one record.
3.  To display tax information by entity number, use the following example: `{{#Invoice}} {{#Account.default__legalentities|First(1)}} {{Cmd_Assign(VarEntityNumber,EntityNumber__c,True)}} {{/Account.default__legalentities|First(1)}} {{#Wp_Eval}}"{{VarEntityNumber}}" == "100001" ? "show Legal Entity USA tax info" : ""{{/Wp_Eval}} {{#Wp_Eval}}"{{VarEntityNumber}}" == "100002" ? "show Legal Entity UK tax info" : ""{{/Wp_Eval}} {{/Invoice}}` The preceding example assigns `EntityNumber__c` to a global variable, and uses the global variable in later expressions. The expressions evaluate entity numbers, and show tax information appropriately. For more information, see Variables and Expressions.
4.  To display the custom fields of a custom object in a table, use the following example: `{{#Invoice.Account.default__legalentities|First(1)}} {{EntityName__c}} {{/Invoice.Account.default__legalentities|First(1)}}` In a Data Table component, assume that you select InvoiceItems as Table Object . Then, you can add a new column with Advanced Options set to on, and use the preceding merge field example for the column. For more information, see Configuring data tables in HTML invoice templates.

---
title: "Notes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates/notes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:22.243Z"
---

# Notes

Learn how to avoid PDF generation errors when using the same custom object multiple times or applying multiple decorators such as FilterByValue and FilterByRef in HTML templates. This article explains how to use the Cmd\_Assign command to assign custom objects to variables, ensuring all custom object data is correctly displayed in generated PDF files.

If you use one custom object multiple times in a template or use multiple decorators like `FilterByValue` and `FilterByRef` on such objects, you cannot get the PDF generated as expected. For example, assume that you define a custom object named `resources` , and the filter function examples are as follows:

`{{#default__resources|FilterByValue(Key__c,EQ,SupplierVATId)|FilterByRef(Country__c,EQ,Invoice.Account.SoldTo.Country)}} {{Invoice.Account.SoldTo.Country}} {{Label__c}}: {{Value__c}} {{/default__resources|FilterByValue(Key__c,EQ,SupplierVATId)|FilterByRef(Country__c,EQ,Invoice.Account.SoldTo.Country)}}`

`{{#default__resources|FilterByValue(Key__c,EQ,SupplierPSTId)|FilterByRef(State__c,EQ,Invoice.Account.SoldTo.State)}} {{Label__c}}: {{Value__c}} {{/default__resources|FilterByValue(Key__c,EQ,SupplierPSTId)|FilterByRef(State__c,EQ,Invoice.Account.SoldTo.State)}}`

You will receive an error, saying that "Could not generate PDF: Exception while fetching data (/default\_\_resources) : com.zuora.owl.hawk.exception.HawkException: Bad argument: Your Filter is not supported for current object type \[ErrorCode: 412 QueryFailed\] \[85B30716DE46310C\]."

To generate the PDF files and avoid missing custom object data on the generated PDF files, you can use the `Cmd_Assign` command to have the custom object get assigned to a variable. Note that you must have the required permissions to access the custom objects. For more information about the `Cmd_Assign` command, see Merge field syntax for HTML templates .

Assume that you define a custom object named `resources` , which has four custom fields called `Entity` , `Key` , `Value` , `Label` . You can assign the custom object to variable along with the available custom fields by using the `Cmd_Assign` command:

`{{Cmd_Assign(Resources1,default__resources|FilterByValue(Entity__c,NOT_NULL)|FilterByValue(Key__c,NOT_NULL)|FilterByValue(Value__c,NOT_NULL)|FilterByValue(Label__c,NOT_NULL),true)}}`

The following example shows how you can apply the required decorators on the variable Resources1 in the template:

{{#Invoice}} {{Cmd\_Assign(Resources1,default\_\_resources|FilterByValue(Entity\_\_c,NOT\_NULL)|FilterByValue(Key\_\_c,NOT\_NULL)|FilterByValue(Value\_\_c,NOT\_NULL)|FilterByValue(Label\_\_c,NOT\_NULL),true)}} {{#Resources1|FilterByValue(Key\_\_c,EQ,'Zuora')|FilterByValue(Entity\_\_c,EQ,'Zuora Inc')}} {{Label\_\_c}}: {{Value\_\_c}} {{/Resources1|FilterByValue(Key\_\_c,EQ,'OrgName')|FilterByValue(Entity\_\_c,EQ,'Zuora Inc')}} {{Cmd\_Assign(Resources1,default\_\_resources,true)}} {{#Resources1|FilterByValue(Key\_\_c,EQ,'Address1')|FilterByValue(Entity\_\_c,EQ,'SomeValue')}} {{Label\_\_c}}: {{Value\_\_c}} {{/Resources1|FilterByValue(Key\_\_c,EQ,'Address1')|FilterByValue(Entity\_\_c,EQ,'SomeValue')}} {{/Invoice}}

Through using the `Cmd_Assign` command, you can avoid the PDF file generating issue when you use one custom object multiple times in a template or use multiple decorators like `FilterByValue` and `FilterByRef` on such objects. Also, with this `Cmd_Assign` command workaround, you will not have custom object data missing on the PDF files.

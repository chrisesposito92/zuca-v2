---
title: "Default function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/default-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:25.140Z"
---

# Default function

This function filters out null or blank/undefined records and provides a default value when necessary.

This function filters out `null` or blank/undefined records in the list.

## Syntax

`Default(Value)`

The `Default(Value)` function syntax is as follows:

-   If the input data of the `Default` function is either `null` or undefined, this function returns the value of its argument.

-   If the input data of the `Default` function is neither `null` nor undefined, this function returns its input data.


## Examples

If you want to look up a custom object by `Account.Locale__c` to implement globalization, you can use the following function example:

`{{Cmd_ListToDict(default__messages|FilterByRef(locale__c,EQ,Invoice.Account.Locale__c),key__c,value__c,Message)}}`

The preceding function example uses `FilterByRef(locale__c,EQ,Invoice.Account.Locale__c)` to dynamically filter custom object records by an account custom field. However, if no account custom field is defined, the preceding function example returns empty in the rendered result.

In this case, you can append a `Default` function that uses a default value `en_US` in case the account custom field is undefined and the `Account.Locale__c` field is empty. The function example can be as follows:

`{{Cmd_ListToDict(default__messages|FilterByRef(locale__c,EQ,Invoice.Account.Locale__c|Default(en__US)),key__c,value__c,Message)}`

If the `Account.Locale__c` field is undefined, the preceding function example returns `en_US` in the rendered result.

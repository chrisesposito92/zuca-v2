---
title: "Display messages based on locales"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates/display-messages-based-on-locales"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:09.396Z"
---

# Display messages based on locales

Learn how to display messages based on locales by storing translation messages in custom objects and querying them using filter functions.

You can store translation messages in custom objects including locales and message keys as filterable fields. Later, you can query the translation messages based on message keys and locales, and use them as field labels, table header names, or texts in the template.

To display messages based on locales, perform the following steps:

1.  Define a custom object named messages to store the messages. The following table lists the structures of the custom object. For example, KEY is the field label, and `key__c` is its API name. The fields `key__c` and `locale__c` are filterable.

    | ID | KEY(key__c) | LOCALE(locale__c) | VALUE(value__c) |
    | --- | --- | --- | --- |
    | 0f9e8dc6-4256-4185-805a-efbb761245a4 | invoice_date | en_US | Invoice Date |
    | 0f9e8dc6-4256-4185-805a-efbb761245a5 | payment_terms | en_US | Payment Terms |
    | 0f9e8dc6-4256-4185-805a-efbb761245a9 | invoice_date | zh_CN | 账单日 |
    | 0f9e8dc6-4256-4185-805a-efbb76124510 | payment_terms | zh_CN | 账期 |

2.  Use filter functions to query the message value based on keys. `{{#default__messageses|FilterByValue(locale__c,EQ,zh_CN)|FilterByValue(key__c,EQ,invoice_date)}}{{value__c}}:{{/default__messageses|FilterByValue(locale__c,EQ,zh_CN)|FilterByValue(key__c,EQ,invoice_date)}}`

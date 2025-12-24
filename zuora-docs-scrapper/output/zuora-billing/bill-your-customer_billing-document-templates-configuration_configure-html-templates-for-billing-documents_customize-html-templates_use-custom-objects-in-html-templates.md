---
title: "Use custom objects in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:04.056Z"
---

# Use custom objects in HTML templates

Learn how to use custom objects and fields in HTML templates to enhance billing documents like invoices, credit memos, and debit memos.

You can use custom objects and fields in HTML templates to display more complex or advanced data in billing documents, including invoices, credit memos, and debit memos.

Note:

You must have the "View Custom Object" permission to generate PDFs from HTML templates that use custom objects.

This tutorial takes invoices as an example; the configuration procedure is similar for credit memos and debit memos.

When using custom objects and fields in HTML templates, keep the following key points in mind:

-   Object names must be made plural when they are used in HTML templates. If you define a custom object name as `Messages` , you have to use `default__messageses` to refer to the object list. The following table lists more examples.

    | API names of custom objects | Names to refer to object lists in HTML templates |
    | --- | --- |
    | Messages | default__messageses |
    | Entites | default__entiteses |
    | Reefer | default__reefers |
    | ExchangeRate | default__exchangerates |
    | LegalEntity | default__legalentities |

-   The custom fields used in a filter must be filterable. For example, if you want to retrieve a list of reefers that belong to a subscription, the custom field `SubscriptionName__c` contained in `{{#default__reefers|FilterByRef(SubscriptionName__c,EQ,SubscriptionNumber)}}` must be filterable.

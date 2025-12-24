---
title: "Merge field syntax"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/merge-fields-for-email-and-callout-templates/merge-field-syntax"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:29.154Z"
---

# Merge field syntax

Describes the merge field syntax you can use to include related object data in email or callout templates.

## Overview

A merge field serves as a placeholder in email and callout templates to automatically incorporate values from objects when an email or a callout notification is triggered. Merge fields are enclosed by angle brackets or double curly brackets, which depend on the merge field type.

Email and callout templates support all merge field syntax for HTML templates. For more information, see [Merge field syntax for HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates).

The following table describes the main differences between merge fields in email and callout templates, and HTML templates:

|  | Email and callout template | HTML template |
| --- | --- | --- |
| Support data source and system merge fields? | Yes | No |
| Root object of a template | The base object of the standard or custom event linked to the email template.For example, if the related event is Order Processed, the base object is Order. | One of the following objects depending on the template type:Invoice: for invoice templatesCreditMemo: for credit memo templatesDebitMemo: for debit memo templates |
| Limit on the number of merge fields in a template | >= 0 | >= 1 |

## Supported merge field types

Email and callout templates support the following merge field types:

-   Advanced merge field

-   Data source merge field

-   System merge field


| Field type | When to use | Example | Note |
| --- | --- | --- | --- |
| Advanced merge field | Use advanced merge fields for the following scenarios:Retrieving field values from the base object or joined objects of the event to which the email or callout template is related.Retrieving field values from custom objects.Using functions to filter or compute field values.Applying conditional logic and loop control.For more information, see Merge field syntax for HTML templates, Functions used in merge fields, and Logic control and looping. | {{Invoice.Amount}}{{Invoice.Account.AccountNumber}} | Advanced merge fields do not support the angle bracket format.Advanced merge fields are not referenced as DataSource.X.Advanced merge fields must start with the base object related to the event. |
| Data source merge field | Use data source merge fields to retrieve field values from the objects that are supported by Data Source Exports. Normally, the base object or joined objects of the event to which the email or callout template is related.For more information, see Data source merge fields for email and callout templates. | {{DataSource .Account.AccountNumber}} or<DataSource .Account.AccountNumber> | Data source merge fields are defined at the system level and do not support syntax customization, so you cannot use the advanced merge field syntax and functions on these fields. |
| System merge field | Use system merge fields to retrieve system-level information, such as the date of today, or your tenant information.For more information, see System merge fields for email and callout templates. | {{Tenant.ID}} or<Tenant.ID> | System merge fields are defined at the system level and do not support syntax customization, so you cannot use the advanced merge field syntax and functions on these fields. |

## Merge field syntax for fields from the base object or joined objects

Most standard or custom events are defined on base objects.

The following table lists the base object for some commonly used events:

| Event name | Event type | Base object | Base object type |
| --- | --- | --- | --- |
| Bill Run Completion | Standard event | Bill Run | Standard object |
| Invoice Due | Standard event | Invoice | Standard object |
| Order Processed | Standard event | Order | Standard object |
| Account Created | Custom event | Account | Standard object |
| Vehicle Created | Custom event | Vehicle | Custom object |

When creating or editing an email or a callout template, you can use fields not only from the base object but also from joined objects. For example, if the base object is Invoice, you can use fields from Invoice and fields from Account, Bill To, Send To, and Default Payment Method objects.

The following table lists merge field syntax for each object field:

| Object | Field | Merge field syntax |
| --- | --- | --- |
| Invoice (base object) | Amount | {{Invoice.Amount}} |
| MyData__c | {{Invoice.MyData__c}} |  |
| Account (joined object) | AccountName | {{Invoice.Account.AccountName}} |
| Bill To (joined object) | FirstName | {{Invoice.Account.BillTo.FirstName}} |

Note that advanced merge fields must start with the base object related to the event.

For example, if you would like to retrieve a product name from an OrderAction event, you should access the Product object in the following order:

OrderAction → Subscription → RatePlan → Product

For more information on extended objects, see [Zuora business object model](/basics/about-zuora/zuora-business-object-model).

If you receive the following error message when creating email templates:

"Email body rendering error: X can not be used as root level mergCe field in a template"

It indicates that there was an issue with getting the right object and field in the notification because of incorrect merge field syntax.

As shown in the following table, if the merge field is for email or callout templates related to the Invoice Due event, the first object must be Invoice instead of Account:

| Correct | Incorrect |
| --- | --- |
| {{Invoice.Account.AccountName}} | {{Account.AccountName}} |

You can use the following merge field syntax if the base object is a custom object:

| Object | Field | Merge field syntax |
| --- | --- | --- |
| Vehicle (base object) | Color__c | <default__vehicle.Color__c> |
| Model__c | <default__vehicle.Model__c> |  |

## Merge field syntax for custom fields from custom objects

When using custom fields from custom objects as merge fields in email or callout templates, you must follow these rules:

-   Use section and variable merge fields (start with `{{#...}}` and end with `{{/...}}`).

-   Add the `default__` prefix to custom object names.

-   Use custom object names in their plural form.


For more information and examples about merge field syntax for custom objects, see [Use custom objects in HTML templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates).

There are two main scenarios for using custom object fields as merge fields in email or callout templates:

| Scenario | Merge field syntax | Description |
| --- | --- | --- |
| Fields from a custom object linked to the base object or a joined object | {{#baseobject.default__myobjects}} {{mydata__c}} {{/baseobject.default__myobjects} | The mydata__c value of each myobject record linked to a particular baseobject record (in the context of this event). |
| Fields from an independent custom object | {{#default__myobjects}} {{mydata__c}} {{/default__myobjects}} | The mydata__c value of each myobject record. |

## Merge field resolving

When an event is triggered, a specific object record of the base object type is considered as the context data. Zuora replaces all merge fields in email or callout templates with the corresponding values from the context data or other related objects before sending notifications.

The following table provides details on the base object and context data for some commonly used events:

| Event name | Base object | Context data |
| --- | --- | --- |
| Bill Run Completion | Bill Run | The completed bill run |
| Invoice Due | Invoice | The invoice whose invoice due date matches the criteria set in the notification |
| Order Processed | Order | The order that is processed |
| Account Created | Account | The newly created account |
| Vehicle Created | Vehicle | The newly created vehicle |

For example, suppose that the context data (an invoice) of a triggered Invoice Due event is as follows:

{ "id": "8ad0962d87bc17870187c0ff4dc80cca", "invoiceNumber": "INV00065283", "accountId": "2c92c0f959916d780159973781be2f15", "amount": 150.000000000, … }

The account info of this invoice is as follows:

{ "basicInfo": { "id": "2c92c0f959916d780159973781be2f15", "accountNumber": "A00000077", "status": "Active", … }, … }

The custom object records linked to the Invoice object are as follows:

{ "Id": "14b65982-a61f-4452-b89d-59b072506a08", "type": "MyObject", "invoiceID\_\_c": "8ad0962d87bc17870187c0ff4dc80cca", "mydata\_\_c": "My Data 1", … }, { "Id": "66e1a250-c544-4cc9-8ebc-72dcce36c40c", "type": "MyObject", "invoiceID\_\_c": "8ad0962d87bc17870187c0ff4dc80cca", "mydata\_\_c": "My Data 2", … }, { "Id": "f25ecd70-0875-4dec-8afc-9228d8de0796", "type": "MyObject", "invoiceID\_\_c": "8a9099d584ccc5180184cfe470277450", "mydata\_\_c": "My Data 3", … }

The first two records are linked to the context invoice of this event, and the third record is linked to another invoice.

The following table shows the values of merge fields in email or callout templates related to the Invoice Due event:

| Merge field | Value |
| --- | --- |
| {{Invoice.Amount}} | 150.000000000 |
| {{Invoice.Account.AccountNumber}} | A00000077 |
| {{#Invoice.default__myobjects}} {{mydata__c}} {{/Invoice.default__myobjects}} | My Data 1 My Data 2 |
| {{#default__myobjects}} {{mydata__c}} {{/default__myobjects}} | My Data 1 My Data 2 My Data 3 |

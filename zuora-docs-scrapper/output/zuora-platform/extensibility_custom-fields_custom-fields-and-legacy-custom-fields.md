---
title: "Custom fields and legacy custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-fields-and-legacy-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:20:58.613Z"
---

# Custom fields and legacy custom fields

Depending on the object type and how custom fields are created, some custom fields on standard objects are recognized as legacy custom fields, while others are referred to as custom fields or advanced custom fields.

Zuora recommends using custom fields if possible because custom fields are more powerful and have fewer limitations than legacy custom fields.

## Standard objects that support both custom fields and legacy custom fields

The following standard objects support both custom fields and legacy custom fields:

-   Account

-   Credit Memo

-   Debit Memo

-   EInvoiceProfile (only if the [E-Invoicing](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview) feature is enabled)

-   Invoice

-   Orders

-   Order Actions

-   Order Line Items

-   Payment

-   Product

-   Product Rate Plan

-   Product Rate Plan Charge

-   Refund

-   Subscription

-   Subscription Rate Plan

-   Subscription Rate Plan Charge

-   Usage


For other standard objects, only legacy custom fields are supported.

## Comparison between custom fields and legacy custom fields

The following table describes the differences between custom fields and legacy custom fields.

|  | Custom field | Legacy custom field |
| --- | --- | --- |
| Supported custom field types for an object | TextLong TextURLIntegerNumberBooleanDateDatetimePicklistMultiselectNote that the Relationship custom field type applies only to custom objects. | TextIntegerNumberBooleanDatePicklist |
| The maximum number of total custom fields on an object | Varies depending on your Zuora edition or Zuora modules:Growth/Bronze: 50Enterprise/Silver: 75Nine/Gold: 100For more information, see Zuora Editions and Zuora Modules. | 50 |
| The maximum number of filterable custom fields on an object | Varies depending on your Zuora edition or Zuora modules:Growth/Bronze: 10Enterprise/Silver: 15Nine/Gold: 20For more information, see Zuora Editions and Zuora Modules. | 10 |
| Support self-serve conversion from indexed to non-indexed and vice versa? | Yes | No |
| Support the Unique setting? (Enforce a unique value restriction on the custom field) | YesApplies only to custom fields on custom objects. | No |
| Support the Auditable setting? (Enable Audit Trail to record the changes of the custom field) | YesApplies only to custom fields on custom objects. | No |
| Support the UI Read Only setting? (Restrict the access to the custom field in the UI to read-only) | No | Yes |
| Support for sharing with sub-entities? | No | Yes |
| How to create? | Via the Object ManagerIf a standard object does not support advanced custom fields, you can define only legacy custom fields via the Object Manager. | Via the Object Manager (applies only to standard objects that do not support advanced custom fields)On the Manage Custom Fields settings page |

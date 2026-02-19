---
title: "Configurable Invoice Grouping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/configurable-invoice-grouping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:47.102Z"
---

# Configurable Invoice Grouping

Configurable Invoice Grouping allows you to define flexible rules for grouping subscription charges and order line items into invoices and credit memos, ensuring alignment with customer and regulatory requirements.

Zuora provides multiple mechanisms to control how you separate and group invoices, helping you meet a wide range of billing requirements.

Zuora automatically separates invoices when subscriptions have different Invoice Owners. Subscriptions with different Bill To Contacts, Payment Terms, Invoice Templates, or Sequence Sets are also grouped into separate invoices through the [Flexible Billing Attributes](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) capability.

For more granular control within a single account, you can use the invoiceGroupNumber field on Subscription and Order Line Item (OLI) objects to define invoice grouping as part of the [Invoice Grouping](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-grouping-overview) feature. You can also invoice subscriptions individually by enabling the Invoice Subscription Separately (ISS) flag.

As your billing models become more complex, you need greater efficiency and automation in invoice generation. You may want to define invoice groups for subscription rate plan charges—whether those charges belong to a single subscription or span multiple subscriptions—and customize grouping criteria using both standard and custom data fields.

The Configurable Invoice Grouping feature adds a powerful control layer that lets you define how subscription charges and OLIs are grouped into invoices and credit memos. You can configure flexible grouping criteria based on standard or custom fields across key objects, including Subscription, Rate Plan Charge, and Order Line Item. This capability helps you manage complex billing relationships while ensuring invoices align with your specific business and compliance requirements.

## Key capabilities

| Capability | Description |
| --- | --- |
| Default grouping setup | Define a system-wide default invoice grouping configuration administered at the tenant levelThe default applies automatically to all accounts that do not have their own grouping configuration. |
| Flexible grouping fields | Build grouping rules using standard or custom fields from Subscription, Rate Plan Charge, and Order Line Item objects.Common examples include charge type, billing code, transaction type, or customer-specific attributes. |
| Cross-object grouping | If Rate Plan Charges and OLIs (or Subscriptions and OLIs) share the same field name in the configuration, you can group them into the same invoice, unifying subscription and order-level charges where needed. |

Note: This feature is currently in Limited Available (LA). You enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see [Enable billing features by yourself](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/enable-billing-features-by-yourself).

## Key Considerations

When using Configurable Invoice Grouping, keep the following in mind:

-   The [Subscribe](https://developer.zuora.com/v1-api-reference/older-api/operation/Action_POSTsubscribe/) and [Amend](https://developer.zuora.com/v1-api-reference/older-api/operation/Action_POSTamend/) actions do not support invoice generation based on configurable invoice grouping settings.

-   You cannot create or update an invoice grouping configuration while draft billing documents exist. You must first post or cancel all draft billing documents. Any changes you save apply only to invoices generated after the update.

-   When you create an Invoice Schedule, all subscriptions and charges included in the schedule must share the same billing attributes (such as Bill-To Contact and Payment Terms) or the same configurable invoice grouping values. If you later update invoice grouping attributes on a subscription or rate plan charge, invoice generation may fail because all subscriptions in an Invoice Schedule must maintain consistent billing attributes or grouping values.

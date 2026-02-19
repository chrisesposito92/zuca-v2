---
title: "Enable Configurable Invoice Grouping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/configurable-invoice-grouping/enable-configurable-invoice-grouping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:47.959Z"
---

# Enable Configurable Invoice Grouping

Learn how to enable Configurable Invoice Grouping in Zuora, ensuring necessary features are activated and understanding the grouping logic for invoice generation.

Before enabling Configurable Invoice Grouping, ensure:

-   The [Orders](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders) feature is enabled.

    Note: [Orders Harmonization](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization) feature is not supported.

-   The [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) feature is enabled.

-   The [Flexible Billing Attributes](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes) feature is enabled.

-   Check the [Key Considerations](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/configurable-invoice-grouping#concept-8624__keyconsiderations).

-   This feature is enabled in Sandbox and Production environments with the self-serve interface.
    Note: For more information, see [Enable billing features by yourself](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/enable-billing-features-by-yourself).


Perform the following steps to enable Configurable Invoice Grouping within the Zuora billing system.

Note: The process allows you to how charges and order items are grouped into invoices, providing users with greater control and flexibility.

1.  Navigate to .

    Note: You need to have administrator permission to view the configuration page. If no fields are defined, your tenant currently has no custom invoice grouping rules.

2.  Select the fields from the Subscription, Rate Plan Charge, and Order Line Item objects that should drive invoice grouping.

    Note: You can adjust field order, edit, or remove fields at any time (as long as no draft billing documents exist).

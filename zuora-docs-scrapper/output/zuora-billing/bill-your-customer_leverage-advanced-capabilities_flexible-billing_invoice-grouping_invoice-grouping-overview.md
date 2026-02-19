---
title: "Invoice Grouping overview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-grouping-overview"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:47.713Z"
---

# Invoice Grouping overview

The Invoice Grouping feature in Zuora Billing allows you to customize and manage invoice groups for subscriptions and order line items using specific criteria, enhancing billing flexibility and efficiency.

With the Invoice Grouping feature, you can customize invoice groups to bill subscriptions and order line items based on specific criteria.

As part of the Flexible Billing feature, you must enable the Flexible Billing Attributes feature. You can enable the Flexible Billing Attributes feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

Zuora Billing allows you to group and generate multiple invoices by account, or consolidate invoices across multiple subscriptions to ensure that you can bill your customers efficiently and flexibly. You can use any of the following approaches to group subscriptions into different invoices during the billing process.

-   Accounts By default, Zuora Billing groups subscriptions with different customer accounts as invoice owners into separate invoices by account.
-   Invoice Subscription Separately For the same customer account, you can enable the Invoice Subscription Separately setting for the subscriptions if you want to generate invoices separately.
-   Billing attributes at the subscription level or order line item level If you have the Flexible Billing Attributes feature enabled, you can specify different billing attributes for subscriptions and order line items (OLIs) so that they are automatically grouped into separate invoices.
    -   The billing attributes at the subscription level include bill-to contacts, payment terms, invoice templates, sequence sets, sold-to contacts, and currency.
    -   The billing attributes at the OLI level include bill-to contacts, payment terms, invoice templates, sequence sets, and sold-to contacts.
-   Invoice group numbers With the Invoice Grouping feature, you can use the invoiceGroupNumber field on the Subscription and Order Line Item objects to define your own criteria for invoice grouping within a single account.

With the Invoice Grouping feature, you can flexibly customize invoice groups, empowering you to bill subscriptions and order line items based on specific criteria. For the same order or account, you can separate invoices for subscriptions and order line items by using custom criteria such as purchase order numbers or ship-to locations.

To achieve this goal, use the invoiceGroupNumber field for the Subscription and Order Line Item objects. You can enter a string of up to 255 characters. To avoid any unexpected behavior, we recommend using only standard alphanumeric characters (a–z, A–Z, and 0–9) and special characters such as '.', '-', '\_', and '#', which are case-insensitive.

For the same account, Zuora can bill subscriptions and order line items separately by using distinct invoice group numbers. Each customer account can have multiple invoice groups. For different customer accounts, invoice group numbers do not need to be unique. For more information, see Create invoice groups for subscriptions or order line items .

Note:

Among a group of subscriptions that have the same invoice group number, if the Invoice The Subscription Separately setting is selected on some subscriptions in the group, the setting has a higher priority. Separate invoices are generated for the subscriptions on which the Invoice The Subscription Separately setting is selected.

Invoices group items by Bill To Contact, Payment Term, Invoice Template, and Sequence Set. Sold To and Ship To do not affect grouping.

## Restriction and limitation

When using the Invoice Grouping feature, keep the following restriction and limitation in mind:

Actions Subscribe and Amend are not supported for creating subscriptions by specifying invoice group numbers at the subscription level.

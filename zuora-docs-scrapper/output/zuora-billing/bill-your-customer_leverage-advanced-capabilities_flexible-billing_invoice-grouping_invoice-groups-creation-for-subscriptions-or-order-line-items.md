---
title: "Invoice groups creation for subscriptions or order line items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-groups-creation-for-subscriptions-or-order-line-items"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:40.678Z"
---

# Invoice groups creation for subscriptions or order line items

This topic covers information about how to create invoice groups for subscriptions or order line items to streamline billing processes by using invoice group numbers.

You can group subscriptions or order line items under the same account by invoice group numbers. When you bill your customer, invoices are generated for invoice groups indicated by the invoice group numbers. The invoice group number is your defined criteria, such as purchase order number or ship-to location, for grouping the invoices for subscriptions or order line items.

## Prerequisites

Before specifying an invoice group number for subscriptions and order line items, keep in mind the following:

-   This feature is generally available and enabled in Sandbox environments. If you want to enable this feature in your Production environments, contact your Zuora account team for assistance.

-   Read the [Restrictions and limitations](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-grouping-overview).


## General procedure

Depending on whether you want to group subscriptions or order line items, do one of the following:

-   You can specify the same invoice group number for a group of subscriptions under the same account during the following order actions:

    -   In the Create subscriptions task, you can specify the number in one of the following two phases:

        -   On the Create Subscription page, specify the number in the Billing and Payment section.

        -   After clicking Review Order, go to the Associated Subscriptions section on the Review Order page, select the Order Actions tab, click the edit icon to enter the edit mode, and specify the number in the Billing and Payment section.

    -   In the Change terms and conditions of subscriptions task, you can specify the number in the Billing and Payment section on the Update Terms and Conditions page.

    -   In the Renew subscriptions and upgrade products task, you can specify the number in the Billing and Payment section on the Renew subscription page.

-   You can specify the same invoice group number for a group of order line items under the same account during the following tasks:

    -   In the Create sales order line items task, specify the number in the Billing section on the Add Order Line Item page.

    -   In the Update order line items task, specify the number in the Billing section on the Edit Order Line Item page.


If you use API, specify the `invoiceGroupNumber` field during the preceding tasks.

After specifying the number for a group and generating invoices for the account, invoices are generated for the account as follows:

-   A consolidated invoice is generated for each group of subscriptions or order line items with the same invoice group number.

-   A separate invoice is generated for each subscription or order line item that is not specified with an invoice group number.


Note:

For the same group number under different accounts, Zuora will generate an invoice for this group number for each account. Therefore, the group number can be the same for different accounts.

---
title: "Create consolidated invoices for parent accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/owners-of-subscriptions-changes/create-consolidated-invoices-for-parent-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:49.683Z"
---

# Create consolidated invoices for parent accounts

This topic explains the consolidated invoices for parent accounts by establishing a parent-child account hierarchy and transferring subscription ownership to child accounts.

You can create a consolidated invoice for larger companies with many departments, divisions, or subsidiaries in a tenant with Orders enabled. For example, a reseller can be billed for its subsidiaries in a consolidated invoice if the reseller and the subsidiaries are in a parent-child account hierarchy.

A parent-child account hierarchy for the reseller and subsidiaries is shown below:

\- Reseller (parent account)

\- Subsidiary A (child account)

\- Subsidiary B (child account)

If the subscriptions are created in the parent account, the parent account is the invoice owner of the subscriptions by default. After setting the child accounts to the subscription owners of all subscriptions, you can create a consolidated invoice from the parent account.

To create a consolidated invoice for a parent account, perform the following tasks:

1.  Create a parent-child account hierarchy
2.  Transfer subscription ownership to child accounts
3.  Create a bill run for the parent account

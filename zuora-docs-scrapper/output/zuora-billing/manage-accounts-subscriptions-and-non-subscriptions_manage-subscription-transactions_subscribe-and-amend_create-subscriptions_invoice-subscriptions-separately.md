---
title: "Invoice subscriptions separately"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/invoice-subscriptions-separately"
product: "zuora-billing"
scraped_at: "2025-12-24T05:33:13.081Z"
---

# Invoice subscriptions separately

Zuora Billing allows for flexible invoicing by enabling the "Invoice the Subscription Separately" feature, which lets you generate independent invoices for each subscription, improving cash flow and providing customization in billing processes.

## Overview

By default, Zuora Billing consolidates subscriptions onto a single invoice. This allows you to send one invoice even if subscriptions are added over time when your customer signs up for new offerings.

Zuora Billing also has the ability to separate a single charge and bill that charge independently to give you the flexibility to invoice charges independently, allowing you to improve your cash flow by immediately invoicing a charge. If you enable the Invoice the Subscription Separately feature and set it for a subscription, the subscription will always generate its own invoice, regardless of the number of subscriptions bill for that customer on the same bill run. Any subscriptions that do not have the option enabled that are due to be billed on the same bill run will be included in a single invoice.

## Using the Invoice Subscription Separately setting

Select Invoice the Subscription Separately to create independent invoices per subscription. You can group subscriptions into a single invoice or invoice one or more of the subscriptions independently. For example, if you have five subscriptions, you can group three of them into one invoice and invoice the remaining two independently.

Select Invoice the Subscription Separately to specify on a per-subscription basis whether the subscription should be invoiced separately. If you do not enable this feature, all subscriptions within a customer account will be invoiced together, and the total charges will be aggregated into a single invoice. If you set a subscription to be invoiced separately, all charges generated from that subscription will be collected into a dedicated invoice.

This feature is not enabled by default. Click your username at the top right and navigate to to activate the feature.

![InvoiceSeparately](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/adc91ca3-6726-4c12-9a3a-6bfff27db343?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFkYzkxY2EzLTY3MjYtNGMxMi05YTNhLTZiZmZmMjdkYjM0MyIsImV4cCI6MTc2NjY0MDc5MCwianRpIjoiYWJiM2UwMzFjNjYxNGQ3MjgzMWYyMDg1NzM4MTQ1MWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.j1j7sQEJDL1yB_t9rRUZfhsnMTa-7LyGzTtY2zt49QY)

When you select `Yes` for Enable Subscriptions to be Invoiced Separately, you will see an Invoice the Subscription Separately option in subscription records. Note that the option is not checked by default, but you can set this option on new subscriptions and on existing subscriptions.

![InvoiceSeparatelyOnSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/91f0dbc5-91c7-43fb-bb83-2b63038d957e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxZjBkYmM1LTkxYzctNDNmYi1iYjgzLTJiNjMwMzhkOTU3ZSIsImV4cCI6MTc2NjY0MDc5MCwianRpIjoiZTEyYWExYjYzYWYyNDE5MmE2MzIwN2I0ZWVlMTdhNDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6ngW-t3Umwx5S2E8-mWncXKnB-GfEB3z10H5d55Y_bs)

For existing subscriptions, view the subscription record and click Edit in the upper-right corner. You can then check or uncheck the Invoice the Subscription Separately option. You can also set this option when creating new subscriptions.

When enabled, the subscription will always generate its own invoice, regardless of the number of subscriptions bill for that customer on the same bill run. Any subscriptions that do not have the option enabled that are due to be billed on the same bill run will be included in a single invoice.

When using the Tax app for tax calculation in subscription preview, if the Invoice the Subscription Separately option is checked, and multiple subscriptions are to be created, the tax preview may take longer than expected. For better performance, you can uncheck the Invoice the Subscription Separately option.

## Scenario

Account.NewBalance Mergefield Value Incorrect on Invoice PDF

If you post an invoice that only contains subscriptions with the Invoice Subscription Separately (ISS) option enabled, then post an invoice that contains at least one subscription with the ISS option disabled, the value of the merge field`Account.NewBalance` on the second invoice PDF will be incorrect.

For example, consider having two invoices: one invoice INV00000001 for subscription A-S00000001 which has the ISS option enabled; another invoice INV00000002 for subscriptions A-S00000002 and A-S00000003, at least one of which has the ISS option disabled. If you post INV00000001 first, the value of `Account.NewBalance` for INV00000002 will be incorrect after you post it.

The workaround to correct the value of `Account.NewBalance` on the invoice PDF for INV00000002 is to regenerate it, either through the API or by performing additional transactions.

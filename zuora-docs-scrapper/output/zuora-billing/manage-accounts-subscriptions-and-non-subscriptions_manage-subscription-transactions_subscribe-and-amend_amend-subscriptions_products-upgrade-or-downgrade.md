---
title: "Products upgrade or downgrade"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-upgrade-or-downgrade"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:02.718Z"
---

# Products upgrade or downgrade

This topic explains how to upgrade or downgrade a subscription rate plan using the UI, REST API, or SOAP API.

You can use UI, REST API, or SOAP API to upgrade or downgrade a subscription rate plan.

## Upgrade or downgrade a product using the REST API

You can use the Update a subscription operation to upgrade or downgrade a product.

You can use one of the following two methods:

-   Remove an existing subscription rate plan and then add a new product rate plan

-   Change rate plans - to replace the existing rate plans in a subscription with other rate plans. Changing rate plans is currently not supported for Billing - Revenue Integration. When Billing - Revenue Integration is enabled, changing rate plans will no longer be applicable in Zuora Billing.

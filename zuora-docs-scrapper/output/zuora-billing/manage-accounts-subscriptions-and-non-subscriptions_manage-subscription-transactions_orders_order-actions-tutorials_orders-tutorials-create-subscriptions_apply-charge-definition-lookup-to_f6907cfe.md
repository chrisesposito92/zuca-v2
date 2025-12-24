---
title: "Troubleshooting to resolve failed lookup issues"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions/apply-charge-definition-lookup-to-subscriptions/troubleshooting-to-resolve-failed-lookup-issues"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:54.856Z"
---

# Troubleshooting to resolve failed lookup issues

Learn how to troubleshoot and resolve failed lookup issues by addressing formula syntax errors and custom field value specifications.

Many reasons can cause a failed lookup. Perform one of the following steps to identify and resolve your failure reason:

-   Formula syntax errors: open the charge in the product catalog, correct your formula, and perform the order action again. For more information, see Price lookup in Attribute-based Pricing .

-   The custom field value InRegion in the subscription is not specified: perform the order action again and make sure this value is specified.

-   The custom field value InRegion in the subscription is specified. However, none of the charge definitions has this value specified: open another web session to check charge definitions of the charges, and update any charge definition to have the custom field value InRegion . Click Re-Lookup to reinitiate the lookup process.

-   The custom field value InRegion in the subscription is specified. However, more than one charge definition has this value: update charge definitions to make only one charge definition left with this value.

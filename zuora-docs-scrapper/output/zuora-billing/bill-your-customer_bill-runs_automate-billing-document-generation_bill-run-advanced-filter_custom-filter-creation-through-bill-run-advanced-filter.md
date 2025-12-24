---
title: "Custom filter creation through Bill Run Advanced Filter"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/custom-filter-creation-through-bill-run-advanced-filter"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:03.232Z"
---

# Custom filter creation through Bill Run Advanced Filter

This topic covers information about logic and conditions for creating custom filters through Bill Run Advanced Filter.

You can define your custom filter using the Account Filter, Subscription Filter, and Rate Plan Charge Filter.

## Filter logic

For your defined custom filter, the system proceeds from account to subscription and then charges. If you do not specify the Account Filter, all accounts that have charges to be billed are picked up, and then the system will check your defined subscription condition. If you do not specify the Account Filter and Subscription Filter, all accounts and subscriptions that have charges to be billed are picked up, and then the system will check your defined charge condition. Besides this logic, you can read [Common use cases of Bill Run Advanced Filter](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/common-use-cases-of-bill-run-advanced-filter) to better understand the filtering logic.

## Default conditions and billed objects

By default, the custom filter may include or exclude some conditions. For example, if you specify some accounts in the custom filter, order line items and invoice schedules in the accounts will be billed.

## Bill order line items and invoice schedules

We don't support defining a custom filter for order line items and invoice schedules directly. However, if an account or subscription is picked up, the associated order line items and invoice schedules will be picked and billed by default if they meet the target date. For more information, see [Bill Run Advanced Filter involving order line items and invoice schedules](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/bill-run-advanced-filter-involving-order-line-items-and-invoice-schedules).

## Other conditions excluded or included by default

The following conditions are excluded or included for your custom filter by default:

-   Account Filter:
    -   Accounts with Draft and Canceled statuses are excluded by default; you do not have to specify these statuses in your filter.
    -   Only Accounts with the Active status can be processed by default.
-   Subscription Filter:
    -   Subscriptions with Draft and Expired statuses are excluded by default; you do not have to specify these statuses in your filter.
    -   Subscriptions with other statuses are processed.
-   Rate Plan Charge Filter:
    -   Charges with the `isProcessed` flag as `True` are excluded by default.
    -   If your defined custom filter picks up a regular charge, the discount charges applied to this regular charge are automatically picked up by default if the discount charges are eligible. However, if you define custom filters directly for discount charges, those filters will be skipped. In other words, the custom filters must be defined for regular charges instead of discount charges.

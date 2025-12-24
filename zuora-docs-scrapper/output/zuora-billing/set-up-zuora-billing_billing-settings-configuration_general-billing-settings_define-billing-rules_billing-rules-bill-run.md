---
title: "Billing Rules - Bill Run"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/billing-rules---bill-run"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:14.301Z"
---

# Billing Rules - Bill Run

The Bill Run section outlines rules for configuring bill runs, including auto-post options, subscription renewals, catch-up bill runs, error handling, and rating details generation.

The Bill Run section contains billing rules specific to bill run configurations.

## Support bill run auto-post

This rule enables auto-post options for selection when creating a bill run. You must enable this rule if you want to use auto-post options when creating bill runs from the Zuora UI or from the Zuora API.

Once enabled, the following options appear on the Create Bill Run page:

-   Auto-post billing documents (invoices, credit memos, and debit memos) upon completion of bill runs.

-   Email billing documents after auto-post is complete.


Select Yes to enable the auto-post for billing documents.

## Default bill run to auto-post

Select whether to automatically post billing documents (invoices, credit memos, and debit memos) that complete successfully. This option appears only after changing the Support bill run auto-post billing rule to Yes.

## Ignore Invoice Past End-of-Term when charge's end date is on or before than term

A Bill Run passes when the billing rule `Ignore Invoice Past End-of-Term when charge's end date is on or before than term end?` is set to `Yes.`

## Default bill run to automatically renew auto-renew subscriptions that are up for renewal

Select whether to enable bill runs to automatically renew auto-renewable subscriptions that are up for renewal.

The following options are provided:

-   Yes (default) With this option, the Automatically renew auto-renew subscriptions that are up for renewal check box is selected by default in the Processing Rules section on the Create Bill Run page and Create Scheduled Bill Run pages. Auto-renewable subscriptions that are up for renewal are automatically renewed during bill run creation.

-   No With this option, the Automatically renew auto-renew subscriptions that are up for renewal check box is unselected by default in the Processing Rules section on the Create Bill Run page and Create Scheduled Bill Run pages. Auto-renew subscriptions that are up for renewal are not automatically renewed during bill run creation.


## Enable catch-up bill run

Select whether to enable the Catch-Up Bill Run feature.

The following options are provided:

-   No (default)

-   Yes You can create catch-up bill runs to migrate customer data or subscription information from other systems into Zuora.


For more information about this feature, see Catch-up bill tun .

## How should errors be handled when generating multiple invoices for a single account via bill run

The default option Terminate processing of all invoices causes a bill run for an account to halt if any single subscription in that account produces an error in processing.

The Skip error and continue processing option allows the bill run for an account to complete despite any processing errors in individual subscriptions that may occur. Enabling this option may result in a performance increase for large bill runs.

This option increases performance for Zuora users who have many accounts with multiple subscriptions each. It is only for those users who already enable the Invoice The Subscription Separately option for subscriptions. If you don't invoice your customers for each subscription separately, have a large number of accounts, or haven't experienced any performance issues, then you are advised not to enable Skip error and continue processing.

See Usage for related information.

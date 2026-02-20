---
title: "Overview of customer accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:52.291Z"
---

# Overview of customer accounts

This topic explains the management of customer accounts, including viewing subscription history, processing transactions, and utilizing features like Customer Hierarchy and Reseller Account for efficient account organization and processing.

For each account, you can view the complete history of all subscriptions and amendments, transactions (including invoices, payments, refunds, credits, adjustments), and key metrics (for example, monthly recurring revenue) for that customer. Key actions can be easily launched from the Customer Accounts page, including the ability to cancel or delete a customer account, create new subscriptions, process payments and refunds, adjust invoice charges, and create invoice item adjustments. Many of these actions can be found by clicking on the more button on the customer account page.

## Customer Hierarchy

The Customer Hierarchy feature allows you to select a parent record in the customer account. You can use this with both existing customers (view the account and edit it to add a parent) and when creating a new customer account.

To enable this feature, set the [Enable Customer Hierarchy?](//Zuora_Billing/B_Set_up_Zuora_Billing/Configure_billing_settings/General_billing_settings/Define_billing_rules) billing rule to Yes.

A parent-child relationship is not required for most accounts, and this should be configured only when needed.

Typically, Zuora users use customer hierarchy for one of these two cases:

-   To arrange billing accounts in a hierarchy: This is for organizational purposes.
-   To roll up usage: You can use customer hierarchy to roll up usage from child to parent accounts.

In the Zuora UI, you can navigate customer hierarchy by clicking the Navigate Hierarchy link next to the account name in the Customer Accounts page.

In the SOAP API, you can navigate parent account with the `ParentId` field on the [Account](//Zuora_Platform/Integration/API/G_SOAP_API/E1_SOAP_API_Object_Reference/Account) object.

## Reseller Account

The Reseller Account feature is now generally available to all customers. If you want to access this feature, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).

With this feature, you can flag an account as a partner account by specifying the `partnerAccount` field on the Account object. This feature is designed specifically for businesses that have distributors or resellers, or operate in B2B model with a large number of subscriptions.

If an account is flagged as a partner account, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments. This means that the calculation of metrics is delayed for partner accounts.

For more information, see [Reseller Account](//Zuora_Billing/Manage_accounts,_subscriptions,_and_non-subscription_transactions/Manage_customer_accounts/AAA_Overview_of_customer_accounts/Reseller_Account).

## Importing Accounts

If you already have a list of your customers from another database (for example, Salesforce.com, Excel, QuickBooks, or another source), you can quickly enter data in our system by importing your customer accounts.

See [Importing Customer Accounts](Importing Customer Accounts, Path: //Zuora_Billing/Manage_accounts,_subscriptions,_and_non-subscription_transactions/Manage_customer_accounts/Import_customer_accounts) for detailed instructions.

## Grouping Accounts for Batch Processing

You can use Batches to easily group your customer accounts in order to allow for separate processing. A maximum of 50 different batches can be created for different types of customer accounts. For example, your customer accounts can be organized as Batch 1 for US-based customers, Batch 2 for EMEA, and Batch 3 for Asia. This gives you the flexibility to select who you want to bill for by running bill runs based on batches. You can also choose to bill batches by payment method such as electronic and external.

---
title: "Chart of accounts setup"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/finance-settings/define-your-chart-of-accounts/chart-of-accounts-setup"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:19.496Z"
---

# Chart of accounts setup

Zuora's chart of accounts uses accounting codes to categorize transactions, aiding in financial reporting and management by identifying affected accounts like Accounts Receivable or Cash.

Zuora's chart of accounts contains the accounting codes used to categorize your Zuora transactions for accounting purposes. In accounting terms, these codes identify the account affected by a transaction, such as Accounts Receivable or Cash. In most cases, the general ledger account names are used for Zuora accounting codes.

Using accounting codes to group transactions within reports makes it easy to generate reports on the various categories of financial activity. One typical purpose of such reports is to produce totals for summary journal entries in an accounting system.

Not everyone uses accounting codes in the same way. For instance, some use the same accounting code for payments and refunds so that you get a single net payment amount when you total the transactions for that accounting code. Others prefer to use separate accounting codes to keep separate totals for payments and refunds.

Once the accounting codes are in use, there are strict limitations on your changes. We strongly recommend that the company CFO or Controller participate in planning your Finance configuration.

## Supported fields

The Zuora chart of accounts includes the following fields:

| Field | Description | Finance note |
| --- | --- | --- |
| Name | Required. Name of the accounting code. Once this code is used in a transaction, the name cannot be changed.Note that duplicate accounting code names are not allowed. | All tenants |
| Notes | Optional text field for notes about the account. | All tenants |
| Type | The account type, such as Assets, Accounts Receivable, Cash, and so on. The Type can be changed at a later time unless it is Accounts Receivable.Note: It is suggested to use the On-Account Receivable accounting code type as a credit memo On-Account accounting code if you enable the Advanced AR Settlement feature.The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information. After Invoice Settlement is enabled, the Invoice Item Adjustment feature will be deprecated for your tenant. | All tenants |
| GL Account Name | Optional. The name of the corresponding account in your general ledger accounting system. | Finance only |
| GL Account Number | Optional. The number of the corresponding account in your general ledger accounting system. | Finance only |

## Pre-populated accounting code values

Your chart of accounts is pre-loaded by default with typical accounting codes that work well for many companies.

We recommend that you review your chart of accounts, add any new accounts you know you will need, and consider deactivating any accounts that you will not be using in the future.

## View your chart of accounts

To view a list of your accounting codes, access the Chart of Accounts page by completing the following steps:

1.  Click your user avatar at the top right and then click Finance. The Finance Settings page opens.

2.  Click Manage Chart of Accounts. The Chart of Accounts page opens and displays the accounting codes in a table format, showing their name, type, and status.

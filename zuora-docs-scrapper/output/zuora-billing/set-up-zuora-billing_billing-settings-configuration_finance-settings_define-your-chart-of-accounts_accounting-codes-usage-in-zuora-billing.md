---
title: "Accounting codes usage in Zuora Billing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/finance-settings/define-your-chart-of-accounts/accounting-codes-usage-in-zuora-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:24.595Z"
---

# Accounting codes usage in Zuora Billing

Zuora Billing requires the assignment of accounting codes to various financial transactions to provide accurate revenue accounting data.

For Zuora to provide you with revenue accounting data, you must assign accounting codes to various revenue transactions (invoices, payments, credits, refunds).

Before you begin, your chart of accounts must be configured for your business. See [Chart of account setup](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/finance-settings/define-your-chart-of-accounts/chart-of-accounts-setup) for more information.

## Financial transactions

You can use Zuora Billing as a simple revenue sub-ledger or a more full-featured revenue sub-ledger. Either way, every financial transaction in Zuora Billing must be associated with an accounting code that maps to the GL account affected by the transaction. The transactions which require an accounting code are:

-   Invoices
-   Invoice adjustments
-   Invoice item adjustments
-   Credit balance adjustments
-   Payments (and credit balance payments)
-   Refunds (and credit balance refunds)
-   Credit and debit memos
-   FX Gain/Loss

Credit balance payments and credit balance refunds can use their own separate codes or use the same codes as payments and refunds.

## Add or change codes

If you don't use accounting codes, your transactions are recorded with a blank code. If you later start using accounting codes, new transactions created after the change will reflect the accounting codes, and old transactions will still have the blank code.

The same principle generally applies when making other changes as well:

-   If you edit the codes you're using, transactions recorded before the edits will still have the old codes, and new transactions will have the new codes.
-   If you change an accounting code assignment for a particular type of transaction, the change applies only to new transactions. For instance, if you assign a different accounting code to a product rate plan charge, any new invoices that you create will use the new accounting code. Existing invoices will not be affected by the change and will still have the old accounting code.

## How accounting codes are derived and defined

The following chart summarizes where accounting codes are derived and defined in Zuora Billing. Detailed explanations are provided in the next section.

| Transaction | Where the Accounting Code is Derived From | Where to Define the Accounting Code in Zuora |
| --- | --- | --- |
| Invoice Item | Rate Plan Charge | If Zuora Finance is enabled:Product Catalog Rate Plan Charge > Finance > Accounting CodeIf Zuora Finance is not enabled:Product Catalog Rate Plan Charge > Name > Accounting Code |
| Invoice Payment | Payment Method | Finance Settings > Configure Accounting CodesWhen creating a payment, go to Additional Fields > Accounting Code. See Overriding Accounting Codes on Payments for more information. |
| Tax Item | Tax Code | Finance Settings > Configure Accounting Codes |
| Credit Balance Payment | Finance Settings: Configure Accounting Codes | Finance Settings > Configure Accounting Codes |
| Payment Refund | Payment Method | Finance Settings > Configure Accounting Codes |
| Credit Balance Refund | Finance Settings: Configure Accounting Codes | Finance Settings > Configure Accounting Codes |
| Credit Balance Adjustment | Finance Settings: Configure Accounting Codes | Finance Settings > Configure Accounting Codes |
| Invoice AdjustmentNote: Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment instead. | Invoice Adjustment Transaction | When creating an Invoice Adjustment, go to Additional Fields > Accounting Code |
| Invoice Item Adjustment | Invoice Item: Rate Plan Charge | If Zuora Finance is enabled:Product Catalog Rate Plan Charge > Finance > Accounting CodeIf Zuora Finance is not enabled:Product Catalog Rate Plan Charge > Name > Accounting CodeWhen adjusting an invoice item, go to Advanced Options > Change Accounting Codes. See Override Invoice Item Adjustment Service Periods and Accounting Codes for more information. |
| The following transaction types are only available if you enable the Invoice Settlement feature.The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information. After Invoice Settlement is enabled, the Invoice Item Adjustment feature will be deprecated for your tenant. |  |  |
| Credit MemoNote: Credit memos can be created due to an invoice/debit memo write-off.If a write-off credit memo impacts revenue, the deferred revenue accounting code used at the time of invoice/DM posting will be used during the write-off CM creation.For non-revenue impacting write offs, such as write offs using bad-debt expense accounts, the accounting code can be selected in . | Finance Settings: Configure Accounting Codes | Finance Settings > Configure Accounting Codes |
| Debit Memo | Invoice Item: Rate Plan Charge | If Zuora Finance is enabled:Product Catalog Rate Plan Charge > Finance > Accounting CodeIf Zuora Finance is not enabled:Product Catalog Rate Plan Charge > Name > Accounting Code |

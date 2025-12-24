---
title: "Accounting codes for transaction types"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/finance-settings/define-your-chart-of-accounts/accounting-codes-usage-in-zuora-billing/accounting-codes-for-transaction-types"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:27.301Z"
---

# Accounting codes for transaction types

This section discusses the best accounting codes to assign to various transaction types.

Note: Associating an accounting code at the transaction level might take some time. Allow some time before exporting the accounting information associated with the transactions.

## Invoice Items

For invoicing, the accounting code maps to an income or revenue GL account in your accounting system.

An invoice can include multiple items, such as subscription fees, support fees, and professional services fees. The GL account that you would associate with each of those items corresponds to the Zuora accounting code to assign at the product rate plan charge level. In Zuora, each invoice item will be tracked by the accounting code from the product rate plan charge.

You can use the same accounting code for any product rate plan charges that have the same revenue attributes. For example, subscriptions that contain quarterly billing schedules may have the same accounting codes as subscriptions that contain annual billing schedules.

## Setting finance rules for rate plan charges

When creating a rate plan charge, select the revenue recognition rule that you want to use with the charge:

-   Recognize upon invoicing: Select this rule so revenue will go straight against the Recognized Revenue accounting code – revenue is recognized all at once when the charge is invoiced.
-   Recognize daily over time: Select this to include the charge in the Zuora Finance standard deferred revenue report, which recognizes revenue over a period of time using a daily recognition calculation. When closing an accounting period, Zuora will group all invoice items using the Deferred Revenue General Ledger account.

## Using discount specific accounting codes and rules to manage revenue

When creating or editing a discount charge, select this option to define the finance information (including revenue recognition rules and accounting codes) for this discount charge. If you do not select this option, the discount charge uses finance information from the regular charge where the discount is applied.

## Configuring accounting codes

Use the accounting codes to map to the GL accounts you use to create journal entries. Depending on how you choose to recognize revenue, you might need to enter either a recognized revenue account or both a recognized revenue account and a deferred revenue account.

If you have any existing accounting codes, we have automatically migrated them to the recognized revenue account. This has not changed any existing functionality of the accounting codes.

The accounting code represents the offsetting account to your accounts receivable (AR). We now automatically select accounting codes for you based on the revenue recognition rule that you have selected.

If you recognize revenue upon invoicing, we populate the accounting code with the value from the recognized revenue account. If you recognize revenue daily over time, we populate the accounting code with the value from the deferred revenue account.

## Invoice Item Adjustments

The accounting code and accounting period for an invoice item adjustment automatically map to the same revenue GL account that was used for the original invoice item. If you have a direct integration with your accounting system, invoice item adjustments will reduce your corresponding accounts receivable balance. An invoice item adjustment can increase or decrease the invoice balance.

## Invoice Payments

Accounting codes for invoice payments are defined under , and typically map to a bank account in your accounting system.

## Credit Balance Payments

Accounting code for credit balances are defined under . A credit balance payment is created from an overpayment. The accounting code for a credit balance payment typically maps to a bank account in your accounting system and is generally different from the accounting code you would use for a normal payment.

## Payment Refunds

Accounting codes for payments are defined under . The accounting code in a payment refund typically maps to a bank account in your accounting system. A refund also updates the accounts receivable in your GL. You then process an invoice item adjustment to the extent that the accounts receivable needs to be removed from your financial statements.

## Credit Balance Refunds

Accounting codes for your credit balances are defined under . A credit balance refund occurs when you refund a credit balance payment. The accounting code for a credit balance refund is typically a bank account in your accounting system.

## Credit Balance Adjustments (Increase)

The accounting code for a credit balance adjustment typically maps to a cash-on-account GL account in your accounting system. This transaction type is used when creating a credit balance from a negative invoice, which results in an increase to the credit balance amount on a customer account.

## Credit Balance Adjustments (Decrease)

The accounting code for a credit balance adjustment typically maps to a cash-on-account GL account in your accounting system. This transaction type is used to transfer funds from the credit balance to a positive invoice, thus reducing the invoice balance.

## Credit Memos

The Credit Memo transaction type is only available if you enable the Invoice Settlement feature.

Note:

The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information. After Invoice Settlement is enabled, the Invoice Item Adjustment feature will be deprecated for your tenant.

Accounting codes for your credit memos are defined under .

The accounting code for a credit memo that is applied to invoices inherits the Accounts Receivables from the invoice on the credit entry, and inherits the On-Account from the credit memo on the debit entry.

The accounting code for a credit memo that is applied to debit memos inherits the Accounts Receivables from the debit memo on the credit entry, and inherits the On-Account from the credit memo on the debit entry.

The accounting code for credit memo refunds inherits the Bank Account from the refund on the credit entry, and inherits the On-Account from the credit memo on the debit entry.

Non-revenue impacting write off: This field is available only if you have enabled the enhanced write-off permission for your tenant. Contact [Zuora Global Support](https://support.zuora.com/hc/en-us) to enable this permission.

You can create and select accounting codes for a non-revenue impacting write off, such as write offs to a bad-debt expense account.

The accounting code for a credit memo that is applied to invoices inherits the Accounts Receivables from the invoice on the credit entry, and inherits the On-Account from the credit memo on the debit entry.

The accounting code for a credit memo that is applied to debit memos inherits the Accounts Receivables from the debit memo on the credit entry, and inherits the On-Account from the credit memo on the debit entry.

## Debit Memos

The Debit Memo transaction type is only available if you enable the Invoice Settlement feature.

Note:

The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information. After Invoice Settlement is enabled, the Invoice Item Adjustment feature will be deprecated for your tenant.

The accounting code for debit memo automatically maps to the same revenue GL account that was used for the original invoice item. If you have a direct integration with your accounting system, debit memo items will reduce your corresponding accounts receivable balance.

## FX Gain/Loss

FX Gain/Loss transaction type is only available if you enable the FX Gain Loss GL Entries. For more information, see Create FX Gain Loss GL Entries. The accounting code for FX Gain/Loss is applied to realized and unrealized FX gain loss on accounting period end and reversal entries.

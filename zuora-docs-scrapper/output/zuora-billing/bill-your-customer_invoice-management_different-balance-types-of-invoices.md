---
title: "Different balance types of invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/different-balance-types-of-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:02.276Z"
---

# Different balance types of invoices

This topic explains the different types of balances on invoices and customer accounts, including invoice balance, account balance, credit balance, debit memo balance, unapplied credit memo, and unapplied payment.

There are different types of balances on an invoice and a customer account. The balance amount can be calculated depending on the feature you have enabled in the environment.

## Invoice Balance

An Invoice Balance represents how much is owed on an invoice. An invoice balance can be positive or negative.

A negative invoice balance is different from a credit balance.

`Invoice Balance =`

`(Invoice + Adjustments[Charge] + Refunds) - (Payments + Adjustments[Credit])`

If you have the Invoice Settlement feature enabled:

`Account Balance = Total Invoice Balance + Total Debit Memo Balance - Total Unapplied Payments – Total Unapplied Credit Memos`

For more information about the Invoice Settlement feature, see Unapplied Payments and Credit and Debit Memos. See Understand Available to Credit and Invoice Balance for more explanation and examples.
Note: If the Include invoices with negative totals in the Account Balance (included associated Debit Memos)? billing rule is set to No, only the invoices with positive totals are included in the invoice balance.

## Account Balance

An Account Balance is the total amount due (includes credit balance). The account balance can be positive or negative.

`Account Balance = Total Invoice Balance – Total Credit Balance`

If you have the Invoice Settlement feature enabled:

`Account Balance = Total Invoice Balance + Total Debit Memo Balance - Total Unapplied Payments – Total Unapplied Credit Memos`

For more information about the Invoice Settlement feature, see Unapplied Payments and Credit and Debit Memos.

## Credit Balance

Note:

If you have the Invoice Settlement feature enabled, Credit Balance is deprecated and is only available for backward compatibility. Use the Unapplied Payments and Unapplied Credit Memo features instead.

A Credit Balance allows you to hold on to a 'credit' that can be applied to future invoices or refunded to the customer. Unlike invoice and account balances, the credit balance cannot be negative.

For example: A customer pays for a one-year subscription, but cancels after two months. Instead of sending a prorated refund check, you can retain the amount and allow the customer to use it to pay for another invoice.

Once the credit balance feature is enabled, each billing account in Zuora Billing will have an account balance and a credit balance displayed under the customer account Key Metrics.

See Credit Balances for more information.

## Debit Memo Balance

A Debit Memo Balance represents how much is owed on a debit memo. A debit memo balance can only be positive.

## Unapplied Credit Memo

An Unapplied Credit Memo represents a credit memo that has been created, but not used to settle or offset an invoice balance or a debit memo balance. It can only be positive.

## Unapplied Payment

An Unapplied Payment represents a payment that you have received but has not yet applied to any invoices or debit memos. It can only be positive.

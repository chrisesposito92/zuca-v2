---
title: "Billing operations use cases"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/billing-operations-use-cases"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:21.405Z"
---

# Billing operations use cases

Explore use cases for managing billing operations with Flexible Billing Attributes, including creating credit and debit memos, writing off invoices, and reversing transactions.

Note:

The Flexible Billing Attributes feature is generally available and has been enabled for all customers in Sandbox environments. If you want to enable this feature in your Production environments, contact your Zuora account team for assistance.

The following use cases are presented to showcase how you can use Flexible Billing Attributes to manage billing operations.

## Create standalone credit memos from invoices for disputes

If a dispute regarding service interruptions or low quality of service occurs, you can create a standalone credit memo for an account as compensation.

In this case, the credit memo uses the bill-to contact and sequence set on the invoice instead of the default bill-to contact and sequence set on the account.

## Create standalone debit memos from invoices for undercharge

In the case of undercharge, you might have to create a standalone debit memo from an invoice for an account.

In this case, the debit memo uses the bill-to contact, payment term, and sequence set on the invoice instead of the default bill-to contact, payment term, and sequence set on the account.

## Write off invoices for bad debt

In the case of bad debt, you might have to write off an invoice. During the invoice write-off, a credit memo is automatically created and applied to the invoice, and the charge through date is reverted back.

In this case, the credit memo uses the default bill-to contact and sequence set on the invoice instead of the default bill-to contact and sequence set on the account.

## Reverse invoices to correct mistakes

Occasionally, you might have to reverse an invoice to correct a mistake. During the invoice reversal, a credit memo is automatically created and applied to the invoice.

In this case, the credit memo uses the default bill-to contact and sequence set on the invoice instead of the default bill-to contact and sequence set of the account.

## Reverse credit memos to correct mistakes

Occasionally, you might have to reverse a credit memo to correct a mistake. During the credit memo reversal, a debit memo is automatically created, and the credit memo is applied to the debit memo.

In this case, the debit memo uses the bill-to contact specified on the subscription, from which the credit memo is created, and uses the default payment term on the account.

## Create standalone credit memos or debit memo from product rate plan charges

If you create a standalone credit memo or debit memo from a product rate plan charge, the credit memo or debit memo uses the default bill-to contact, payment term, and billing document sequence set on the account.

## Create payments or refunds

If you create a payment to apply to an invoice, the payment always uses the default sequence set on the account, instead of the sequence set on the invoice. If you create a refund to apply to a payment, the refund always uses the default sequence set on the account.

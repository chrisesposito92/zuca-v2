---
title: "Invoice reversal"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-reversal"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:55.749Z"
---

# Invoice reversal

Invoice reversal allows correction of billing errors by generating a credit memo and creating a new invoice for the same billing period.

Occasionally, a subscription can be incorrectly configured or account information is not up-to-date. When this happens, the resulting invoice might be incorrect, including either over or undercharging, or incorrect bill-to or sold-to contact information. When you discover mistakes on a posted invoice, you can reverse the invoice, correct the mistakes, and then generate a new corrected invoice for the same billing period.

To learn about the common use cases of invoice reversal, see [Invoice reversal use cases](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/invoice-reversal-use-cases).

Reverse Invoice is a single atomic operation that does the following:

1.  A credit memo is automatically generated and applied to the incorrect invoice to reduce the invoice balance to zero.
2.  Existing credit memos associated with the invoice are automatically reversed. This applies only to credit memos whose credit memo items link to the same subscription rate plan charge as the invoice items of the incorrect invoice. For more information about credit memo reversal, see Reverse credit memos.
3.  The charge through date in the Zuora rating engine is reset back to the start of the billing period.
4.  The incorrect invoice is flagged as Reversed.

For example, you have an invoice with the amount of $100. After you posted the invoice to your customer, you find that a charge fee is missing in the invoice. You can reverse the invoice, and generate the correct one. A credit memo is auto-generated with the memo amount of $100 and auto-applied to the reversed invoice. You can then amend the subscription to include the missing charge and re-run the bill run for that period to create a new correct invoice.

After reversing invoices, the invoices are still in Posted status. Once you have reversed an invoice, you can no longer cancel or change the reversed invoice and the generated credit memo. In the Zuora UI, the Reversed field in the Basic Information panel of an invoice detail page shows whether this invoice is reversed. Currently, Zuora does not flag whether the invoice is reversed in the SOAP API.

You can reverse invoices either from the Zuora UI or REST API, even in a closed accounting period. See [Reversing Invoices from the Zuora UI](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/reverse-invoices-from-the-zuora-ui) and [PUT Reverse Invoice](https://www.zuora.com/developer/api-references/api/operation/PUT_ReverseInvoice) for more information.

As a tenant administrator, you can configure the Billing user permissions to restrict users from reversing invoices. See Billing Roles for more information.

You can only reverse the most recently generated invoices for each subscription. If a new invoice is generated for a subscription, you cannot reverse the previously generated invoices for this subscription. Besides, you cannot reverse an invoice when both of the following conditions are true:

-   The invoice includes more than one subscription
-   One of the subscriptions has a newer invoice generated

For example, an invoice is generated (Service period: March 1 - March 31) and posted for Subscription A and Subscription B. Later, you generate a new invoice (Service period: April 1 - April 30) for Subscription B. You are not allowed to reverse the invoice (Service period: March 1 - March 31), because a new invoice is generated for Subscription B.

Whether you can reverse the invoices that have the total amount of zero depends on the option of the Create credit memos mirroring invoice items billing rule.

-   For zero-amount invoices composed of all zero-amount invoices items and taxation items, they can be reversed only if the billing rule is set to Yes .
-   For zero-amount invoices composed of positive and negative invoices items or taxation items, they can be reversed no matter which option the billing rule is set to. The specific credit memo creation during the invoice reversal might be different according to the option set for the billing rule.

The credit memo items and their taxation items created in the invoice reversal are applied to the corresponding invoice items and invoice taxation items respectively.

After you reverse an invoice, Zuora now sets some taxation item fields of generated credit memo items by copying values from the corresponding invoice taxation items. The values of the following taxation item fields are copied:

-   `taxRate`
-   `exemptAmount`
-   `taxRateType`
-   `taxAmount` - When an invoice is reversed, tax is not calculated by Avalara through the Connect Tax Engine. Instead, the tax transaction event type is recorded as an "Override Call." This occurs because the billing rule Enable Sequential Billing Document Number is set to Yes, which assigns a temporary document number in the format TMP-CM-\*\*\*."

## Considerations

You cannot reverse an invoice under any of the following conditions:

-   Payments and credit memos are applied to the invoice.
-   Credit memos or debit memos are not canceled and derived from the invoice.
-   The invoice is split.
-   The invoice is not in Posted status.
-   An invoice contains more than 50,000 items in total, including invoice items, discount items, and taxation items. For invoices with more than 2,000 items, the reversal action is performed asynchronously to prevent timeouts. If the limit is reached during invoice reversal, unpost the invoice and cancel it. If you do not want to unpost an invoice, create a credit memo or debit memo from the invoice to adjust or correct the amount.

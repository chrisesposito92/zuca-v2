---
title: "Overview of Credit Balances"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/overview-of-credit-balances"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:16.055Z"
---

# Overview of Credit Balances

The Credit Balance feature in Zuora Billing allows you to manage customer credits for future invoices or refunds, enhancing cash flow and reducing transaction fees.

Use the Credit Balance feature to hold on to a credit that can be applied to future invoices or refunded to the customer. With this feature enabled, each billing account in Zuora Billing will have an account balance and a credit balance displayed in the UI as the key metric for a customer account.

Note:

If you have the Invoice Settlement feature enabled, the Credit Balances feature is deprecated and only available for backward compatibility.

A credit balance allows you to hold on to a "credit" that can be applied to future invoices or refunded to the customer. Unlike invoice and account balances, the credit balance cannot be negative. Once the credit balance feature is enabled, each billing account in Zuora Billing will have an account balance and a credit balance displayed under the customer account's key metrics.

For example, a customer pays for a one-year subscription, but cancels after two months. Instead of sending a prorated refund check, you can retain the amount and allow the customer to use it to pay for another invoice.

A credit balance lets you:

-   Accept an overpayment
-   Transfer an invoice with a negative balance to the credit balance
-   Apply a credit balance to an invoice
-   Refund a credit balance to the customer
-   Automatically apply the credit balance to invoices before attempting to apply a payment via the Payment Run

Credit Balances is a feature recommended for customers who use Zuora Billing as a sub-ledger with summarized integration to the accounting system (summarizing transactions by Accounting Code to create journal entries). This feature is not recommended for users who are performing transaction-level integration to their accounting system.

## Key considerations

-   Account-Level Application: Credit balances apply at the account level and can only be used to offset invoice-level balances.
-   Cannot Apply to Charge Level: Credit balances cannot be applied to individual products, charges, or invoice items. They function as a high-level adjustment mechanism rather than line-item credits.

## Benefits of credit balances

The purpose of the Credit Balance is to allow you to hold on to a "credit" that can be applied to future invoices or refunded to the customer.

Using the Credit Balance is beneficial for both the merchant and the customer, for the following reasons:

-   Customers do not have to have multiple transactions on their credit card statements.
-   Merchants do not have to pay credit card fees associated with each transaction.
-   Merchants do not have to manually generate a refund check.
-   Merchants also improve their cash position as cash output does not occur.

## Credit balances and refunds

A credit balance is an amount that can be used to lower the amount of a future invoice. A refund is actual money given back to the customer for service not used. Typically, you will give a customer who is staying with you a credit memo for a service issue or something similar. A refund is given to a customer who may have canceled service with your company and is no longer a customer.

## Types of credit balance adjustments

Credit balance adjustments can be increases or decreases.

Note that the Order to Revenue feature or the Billing - Revenue Integration feature does not support the Credit Balance Adjustment object.

## Credit balance increases

A credit balance increase is caused by moving money into the credit balance, which increases the credit balance.

-   A credit balance increase from a negative invoice can be canceled if the credit balance has enough funds to cover the transfer amount.
-   A credit balance increase from an overpayment cannot be canceled. You can refund the payment when there are enough funds to cover the transfer.

You cannot adjust the credit balance manually; the credit balance must be associated with a transaction. However, you can increase a credit balance in the following situations:

-   If a customer has a check overpayment, you can transfer the overpayment to the Credit Balance.
-   A customer can also be allowed to pay an overpayment via credit card.
-   The balance of a negative invoice can be transferred to the Credit Balance.

## Credit balance decreases

A credit balance decrease is caused by applying a credit balance to an invoice or refunding, which decreases the credit balance.

-   This is similar to canceling a Payment. When a credit balance decrease is canceled, the amount is removed from the invoice, and the balance is moved back to the credit balance.
-   A credit balance decrease from a refund cannot be canceled. To undo this, you can create a subsequent external payment to offset the amount. In general, a refund is final.

You can decrease a credit balance in the following situations:

-   The merchant can apply a Credit Balance to a positive invoice balance.
-   The merchant can also refund the Credit Balance to the end customer. This refund can be external or electronic.

## Use cases

The Credit Balance feature can be used to:

-   Handle overpayments
-   Issue credits to a billing account instead of refunding money back to the customer

## Use case 1: Overpayment

In the event that a customer submits a payment for an amount greater than what is applied to the invoice ("overpayment"), the remaining payment amount can be transferred to a credit balance in Zuora Billing. The credit balance can then be applied (just like a payment) towards an open invoice.

## Use case 2: Credit

In the event that a customer is due a refund, you can issue them a "credit" instead of a refund. The credit balance can then be applied (like a payment) towards an open invoice.

For example, a customer pays for a one-year subscription, but cancels after two months. Instead of sending a prorated refund check, you can retain the amount and allow the customer to use it to pay for another invoice.

## View credit balances

The credit balance is displayed in the Key Metrics section of the customer account detail page. The credit balance increases or decreases depending on whether you are adding to the credit balance or taking from the credit balance (and applying it to an invoice). The credit balance cannot be negative.

Use the Transactions tab to see the rolling balance and list of transactions.

## Include the credit balance on an invoice

You can include a Transactions Table in your invoice template to display credit balances in your invoice PDF.

When viewing an invoice in Zuora Billing, the Invoice Detail page includes a History section. The history includes all of the actions associated with this invoice, including when the invoice was created, when it was posted, and when a credit balance was applied.

## Future-dated credit balance adjustment

This feature is available after you enable it. With this feature enabled, you can process credit balance adjustment from or to a future dated invoice, including:

-   Transferring credit balance from a future-dated negative invoice
-   Applying credit balance to a future-dated invoice
-   Refunding credit balance that is transferred from a future dated negative invoice through either external refund or electronic refund

See Future Dated Credit Balance Adjustment for more information about feature details and enablement.

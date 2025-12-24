---
title: "Apply credit balances"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/apply-credit-balances"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:31.252Z"
---

# Apply credit balances

Learn about applying credit balances

You can apply a credit balance in a single payment or use a payment run to automate the process.

## Apply a credit balance to a future invoice

A [credit balance](/zuora-billing/bill-your-customer/credit-balances/overview-of-credit-balances) represents money that you owe your customer. It is possible to refund this credit balance if your customer makes that request. As a best practice, Zuora recommends that you apply the credit balance to future invoices, where the invoice picklist will show maximum limit invoices.

Note:

Depending on your business practices, you may need to inform your customer of this policy.

To know how to apply a credit balance in a single payment, see [Apply a credit balance in a single payment](/zuora-billing/bill-your-customer/credit-balances/apply-credit-balances/apply-a-credit-balance-in-a-single-payment).

## Apply a credit balance in a payment run

As part of a payment run, Zuora provides the ability to automatically apply the credit balance before attempting a payment. By selecting this option, the payment run will apply the credit balance to the invoice as the first step of the payment run.

When creating a payment run, select Apply Credit Balance to the invoice before attempting payment. This attempts to apply a credit balance amount to the outstanding invoices before charging for payment using an electronic payment method. The target date of the payment run must be on or before the date when the payment run is executed. Otherwise, the invoice might be charged by using an electronic payment method rather than by applying the credit balance. For example, if the payment run is executed on September 2 but you set the target date of the payment run to September 3, the credit balance amount might not be applied to the invoice.

If a billing account has a credit balance, the credit balance will be applied towards open invoices before charging the electronic payment method for any remaining balance. This is similar to "Balance Forward" billing.

If the credit balance is greater than the invoice balance, the payment run will apply an amount equal to the invoice balance.

If the credit balance is less than the invoice balance, the full amount of the credit balance will be applied and then the payment run will attempt a payment for the remaining invoice balance.

To know about applying a credit balance without payments runs, see [Apply a credit balance without payment runs](/zuora-billing/bill-your-customer/credit-balances/apply-credit-balances/apply-a-credit-balance-without-payment-runs).

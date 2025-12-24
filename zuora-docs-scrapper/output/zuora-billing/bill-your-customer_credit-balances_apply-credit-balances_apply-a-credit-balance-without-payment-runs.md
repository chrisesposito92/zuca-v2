---
title: "Apply a credit balance without payment runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/apply-credit-balances/apply-a-credit-balance-without-payment-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:36.390Z"
---

# Apply a credit balance without payment runs

Use Credit Balances to manage customer overpayments by applying or refunding them automatically

When your customer sends you a payment for an amount over than the invoice, that's an overpayment. There are lots of reasons why a customer will send an overpayment ranging from a simple mistake to forgetting that they paid via an electronic method.

The Credit Balances feature can be used to store the overpayment so you can apply it to a future invoice or refund it to the customer. There is even a feature to automatically apply the credit balance automatically as part of the payment run so you can use the credit balance before processing an electronic payment.

It would be good if you could process electronic payments. If you don't use electronic payments, see the following section.

## Use the Zuora API

Zuora's payment run will automatically apply the credit balance to an invoice balance before attempting an electronic payment with the gateway.

If you don't use Zuora's payment runs, you can still apply the credit balance with APIs.

As a best practice, these APIs should be called before sending invoices to customers so that the invoice you send will have any credit balance applied. If you choose to apply the credit balance after sending the invoice to the customer, the customer will not know that the credit balance is applied to this invoice.

From the data source API, you can query the invoice data source for accounts with a total invoice balance greater than zero AND a credit balance greater than zero AND an invoice with an invoice balance greater than zero. This query will yield an open invoice for any customer with a credit balance. For more information about the APIs, see [Zuora API documentation](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/API/G_SOAP_API).

You can then call the [Create a Credit Balance Adjustment](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/API/G_SOAP_API/E1_SOAP_API_Object_Reference/CreditBalanceAdjustment/Create_a_Credit_Balance_Adjustment)API to apply the credit balance to the invoice balance. From the initial data source query, you will get all invoices with open balances, so you can choose to apply the credit balance to the invoice of your choosing. It is a best practice to apply the credit balance to the oldest invoice first.

When applying the credit balance, It is recommended that you consider the use case where your credit balance is greater than your invoice balance:

-   If the credit balance is greater than the invoice balance, apply the invoice balance amount
-   If the credit balance is less than the invoice balance, apply the full credit balance

Now that the credit balance is applied, you can send invoices as appropriate.

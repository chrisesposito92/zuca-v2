---
title: "Cancel and refund credit balances"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/cancel-and-refund-credit-balances"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:38.706Z"
---

# Cancel and refund credit balances

Reverse a credit balance by canceling or refunding the credit balance

You can reverse a credit balance by canceling or refunding the credit balance. This article explains how to cancel or refund credit balances, including electronic non-referenced refunds, such as a credit card payment.

## Cancel credit balances

When you cancel a credit balance:

-   The amount is removed from the credit balance

-   The balance of the negative invoice is reopened.


You must then create a debit memo (adjustment) to handle the negative invoice.

## Refund a credit balance

When you refund a credit balance:

-   Zuora refunds the credit balance amount.
-   The invoice balance is not restored.

You can use an external or electronic refund to refund the credit balance. The Credit Balance Refund feature, also known as Non-Referenced Refund feature, is available only if you have enabled the Credit Balance feature. You must create a credit balance to be able to create a refund.

Credit Balance is not a supported object in the advanced custom fields. The custom fields will not show up when you refund a credit balance that has custom fields created through advanced custom fields.

-   You cannot specify values to those custom fields as they would not show up in the UI.
-   If one of the custom fields is marked mandatory, you cannot create a refund.

In such cases, create the refund custom fields through the legacy custom fields feature and then refund the credit balance.

Zuora recommends that you create a process to manage this operation - for example, through accounts payable, or refunding by check with approval.

You can also use the `PaymentMethodId` field of the [Refund](https://knowledgecenter.zuora.com/Zuora_Platform/Integration/API/G_SOAP_API/E1_SOAP_API_Object_Reference/Refund_object) object to use the Commerce API when working with electronic credit balance refunds.

Refund a Credit Card Payment: If you want to refund a payment that is processed by a credit card, you must refund the money to the original credit card.

If the original credit card is no longer valid, you can process a refund directly in your gateway to another credit card in the customer account, and at the same time process an external refund in Zuora to restore the invoice balance.

If you do not want to collect the balance in the original invoice again from the customer, you can process an invoice item adjustment to bring the invoice balance to $0. This is the most common practice for this situation.

If you have the Invoice Settlement feature enabled, Credit Balance is no longer supported. So the non-referenced refunds are refunds on credit memos.

Note that not all payment gateway integrations support non-referenced refunds.

For more information on refunding a credit balance, see these topics:

-   [Create an external non-referenced refund](/zuora-billing/bill-your-customer/credit-balances/cancel-and-refund-credit-balances/create-an-external-non-referenced-refund)

-   [Create an electronic non-referenced refund](/zuora-billing/bill-your-customer/credit-balances/cancel-and-refund-credit-balances/create-an-electronic-non-referenced-refund)

-   [Configure the electronic non-referenced refund role](/zuora-billing/bill-your-customer/credit-balances/cancel-and-refund-credit-balances/configure-the-electronic-non-referenced-refund-role)

-   [Create an electronic non-referenced refund (to refund credit card payment)](/zuora-billing/bill-your-customer/credit-balances/cancel-and-refund-credit-balances/create-an-electronic-non-referenced-refund-to-refund-credit-card-payment)

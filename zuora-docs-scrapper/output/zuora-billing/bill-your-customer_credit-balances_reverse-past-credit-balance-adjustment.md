---
title: "Reverse past credit balance adjustment"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/reverse-past-credit-balance-adjustment"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:01.509Z"
---

# Reverse past credit balance adjustment

Information on reverse past credit balance adjustment

You can reverse a previously made credit balance adjustment, by creating another credit balance adjustment to counter the effect of the previous adjustment, even in a closed accounting period.

Note:

This feature is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.

## Reverse past credit balance adjustments

You can reverse a past credit balance adjustment even if the accounting period is closed.

For example, you have an invoice with open balance of $100. You accidentally apply $30.00 from the credit balance, making the new balance $70.00. You realize your mistake and reverse the amount by transferring $10 to the credit balance, making the new invoice balance $80.00.

Consider the following before reversing a credit balance adjustment:

-   Invoices with a positive balance:
    -   The amount transferred cannot exceed the amount applied from the credit balance.
    -   Can only be transferred after it's been applied from the credit balance.
-   Invoices with a negative balance:
    -   Can only be transferred after it's been transferred to the credit balance.
    -   The amount applied cannot exceed the amount transferred to the credit balance.
-   A credit balance cannot be applied if the balance is zero, regardless If the invoice is positive or negative.
-   A credit balance adjustment transaction cannot be canceled.

For example, you have an invoice with an open balance of $100.00, $40 of which is applied from the credit balance, bringing the balance to $60. 10 USD to the credit balance, the balance of the invoice is 100 + (-40) + 10 = 70 USD. Now, if the user wants to cancel the first credit balance adjustment, which is $40. It will make the invoice balance be 100 + (-40) + 10 + 40 = 110 USD. It means the invoice balance is greater than the invoice amount. So this operation is not allowed.

To know how to reverse a past credit balance, refer to [Reverse a past credit balance](/zuora-billing/bill-your-customer/credit-balances/reverse-past-credit-balance-adjustment/reverse-a-past-credit-balance).

## View credit balance activity

Open the customer account detail page and scroll down to the Transactions section. You can see the credit balance activity on the Credit Balance tab.

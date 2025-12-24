---
title: "Example: Create a partial service credit"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/create-credit-balances/example-create-a-partial-service-credit"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:26.337Z"
---

# Example: Create a partial service credit

How to create a partial service credit for your customers

This example describes how to create a partial service credit for your customers. For example, if your website is down for some reason, you can give your customers a credit for each day of the downtime.

To process partial service credit for subscriptions, complete these steps.

1.  Create a rate plan charge for a "Service Credit." This can be in its own product or in an existing product.
2.  Create a negative one-time charge for the "Credit." For this case, you might want to create a per unit charge that is -$X per day or a flat fee. Note that the actual amounts can be changed in the next step.
3.  Add the Service Credit rate plan to the subscription on the accounts you want to credit. At this time, you can change the amount or quantity.
4.  Either wait for the next billing cycle to pick up the credit or generate an invoice immediately. If you want the credit applied to the next bill, the best practice is to generate it on the next normally scheduled invoice. This is the more streamlined approach.
5.  If the credit needs to be generated immediately, execute a bill run for the accounts for one-time charges only.
6.  Transfer the negative charge to the credit balance on the account.
7.  Refund the credit balance, if desired, or apply the credit balance to current or future open invoices.

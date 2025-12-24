---
title: "Future dated credit balance adjustment"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:51.470Z"
---

# Future dated credit balance adjustment

Enable future-dated credit balance adjustments for transfers, applications, and refunds

When the Enable future dated credit balance adjustment payment rule is enabled, you can process credit balance adjustment from or to a future-dated invoice, including:

-   Transferring credit balance from a future-dated negative invoice

-   Applying credit balance to a future-dated invoice

-   Refunding credit balance that is transferred from a future dated negative invoice through external refund or electronic refund


Note:

Transferring credit balance from a future dated overpayment is not supported.

To know how to enable the future dated credit balance adjustment payment rule, refer to [Enablement](/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment/enablement).

For more information, refer to these topics:

-   [Rules for specifying the adjustment date](/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment/rules-for-specifying-the-adjustment-date)

-   [Use case examples](/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment/use-case-examples)


## Limitation

If credit balance is transferred from or applied to a future-dated invoice, in Zuora Finance, the cash data of the accounting period during which the credit balance adjustment happened does not show the actual cash amount. Here is an example.

Assume today is 2020-09-01 and a negative invoice -$100 is generated with the invoice date 2020-09-01. The invoice is transferred to credit balance with the date 2020-09-01. The credit balance on the billing account shows $100.

An invoice with the amount of $40 is generated with the invoice date 2020-10-15. Credit balance is applied to this future dated invoice and the credit balance on the billing account shows $60.

In Zuora Finance, the cash amount of the 2020-09 accounting period shows $100, but the cash amount in fact is $60. $40 cash that has been applied to the future dated invoice does not reflect in the cash amount.

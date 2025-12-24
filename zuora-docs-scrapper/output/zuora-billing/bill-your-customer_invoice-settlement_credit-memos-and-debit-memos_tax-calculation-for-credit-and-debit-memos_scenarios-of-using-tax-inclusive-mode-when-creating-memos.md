---
title: "Scenarios of using tax inclusive mode when creating memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/tax-calculation-for-credit-and-debit-memos/scenarios-of-using-tax-inclusive-mode-when-creating-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:40.058Z"
---

# Scenarios of using tax inclusive mode when creating memos

This reference explores scenarios where tax inclusive mode affects credit memo creation, highlighting issues like credit amount exceeding limits and maintaining standard credit amounts across varying tax rates.

Scenario 1: Credit amount exceeds the acceptable range

You want to give full credit to your customer from an invoice in tax inclusive mode . The following tables show the automatic calculation by tax engine. When you create the credit memo, the memo item is by default in tax exclusive mode and the credit amount is a system populated value of $20.33. According to the calculation, the invoice tax amount and the memo tax amount have a $0.01 difference due to the rounding . Now the credit amount (with tax) is $25.01, whereas the available to credit amount is $25. Because the system does not allow credit amount to exceed the available to credit amount, you are blocked from creating this credit memo.

| Invoice (tax inclusive) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Invoice amount (with tax) | Tax rate | Invoice tax amount | Invoice tax amount (rounded) | Invoice amount (without tax) | Invoice amount (without tax) (rounded) |
| 25 | 0.23 | 4.67 | 4.67 | 20.3252 | 20.33 |
| Credit amount (without tax) | Tax rate | Memo tax amount | Memo tax amount (rounded) | Credit amount (with tax) | Credit amount (with tax) (rounded) |
| 20.33 | 0.23 | 4.6759 | 4.68 | 25.0059 | 25.01 |

Billing rule setting: Round net amount (default)

Calculations for invoice:

-   Invoice amount (without tax) = 25/(1+0.23) = 20.3252

-   Invoice amount (without tax) (rounded) = 20.33

-   Invoice tax amount = 25-20.33 = 4.67


Calculations for credit memo:

-   Credit amount (with tax) = 20.33\*(1+0.23) = 25.0059

-   Credit amount (with tax) (rounded) = 25.01

-   Memo tax amount = 25.01-20.33 = 4.68


After switching the tax mode of this memo item to tax inclusive, you can enter a $25 credit amount (with tax) to give your customer full credit and no tax discrepancy occurs.
| Invoice (tax inclusive) |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Invoice amount (with tax) | Tax rate | Invoice tax amount | Invoice tax amount (rounded) | Invoice amount (without tax) | Invoice amount (without tax) (rounded) |
| 25 | 0.23 | 4.67 | 4.67 | 20.3252 | 20.33 |
| Credit Amount (with tax) | Tax rate | Memo tax amount | Memo tax amount (rounded) | Credit amount (without tax) | Credit amount (without tax) (rounded) |
| 25 | 0.23 | 4.67 | 4.67 | 20.3252 | 20.33 |

Scenario 2: Maintain standard credit amount across different tax rates

You want to give a standard $10 partial credit amount (with tax) to two customers in different states with different tax rates. Both invoices are in tax exclusive mode. The following tables show the automatic calculation by tax engine. When you create the credit memos, the memo items are by default in tax exclusive mode. According to the calculation, when you enter $10 as a credit amount for both memo items, the credit amounts (with tax) are higher than $10 and different, all because of tax calculation.

|  | Invoice (tax exclusive) |  |  |  |
| --- | --- | --- | --- | --- |
|  | Invoice amount (without tax) | Tax rate | Invoice tax amount | Invoice amount (with tax) |
| Customer 1 in State 1 | 100 | 0.2 | 20 | 120 |
| Customer 2 in State 2 | 100 | 0.1 | 10 | 110 |
|  | Credit amount (without tax) | Tax rate | Memo tax amount | Credit amount (with tax) |
| Customer 1 in State 1 | 10 | 0.2 | 2 | 12 |
| Customer 2 in State 2 | 10 | 0.1 | 1 | 11 |

Calculations for credit memo:

-   Customer 1 in state 1: Credit amount (with tax) = 10\*(1+0.2) = 12

-   Customer 2 in state 2: Credit amount (with tax) = 10\*(1+0.1) = 11

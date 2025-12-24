---
title: "Both unbilled and billed contract liability exist"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/both-unbilled-and-billed-contract-liability-exist"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:09.711Z"
---

# Both unbilled and billed contract liability exist

A scenario that explains RORD and CM-RO accounting entries

In this scenario, when RORD is collected, there are both unbilled and billed contract liability entires. As designed, Zuora Revenue will always debit the unbilled contract liability for the RORD line. After that, a CM-RO line is collected. Zuora Revenue will debit the billed contract liability for unbilled to billed conversion based on the CM-RO amount.

The current open period is Jan-2021. Both the SO line and the invoice line are collected in Zuora Revenue in January 2021. The POB ratable method is Upon Booking.

| Line ID | Transaction Type | Quantity | Ext. List Price | Ext. Sell Price | Start Date | End Date | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | SO | 5 | 1000 | 500 | 1/1/2021 | 5/31/2021 | 202101 |
| 1.1 | INV | 5 | 500 | 250 | 1/1/2021 | 3/15/2021 | 202101 |

The waterfall revenue is as follows:

| Period | 202101 | 202102 | 202103 | 202104 | 202105 |
| --- | --- | --- | --- | --- | --- |
| Number of days | 31 | 28 | 31 | 30 | 31 |
| Waterfall revenue | 102.65 | 92.72 | 102.65 | 99.34 | 102.65 |

The accounting entries are created as follows:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability (Billed) |  | 250 | 202101 |
| Contra Liability (Billed) | 102.65 |  | 202101 |
| Revenue |  | 102.65 | 202101 |
| Contra Liability (Billed) | 92.72 |  | 202102 |
| Revenue |  | 92.73 | 202102 |
| Contra Liability (Billed) | 54.63 |  | 202103 |
| Revenue |  | 54.63 | 202103 |
| Contra Liability (Unbilled) | 48.02 |  | 202103 |
| Revenue |  | 48.02 | 202103 |
| Contra Liability (Unbilled) | 99.34 |  | 202104 |
| Revenue |  | 99.34 | 202104 |
| Contra Liability (Unbilled) | 102.65 |  | 202105 |
| Revenue |  | 102.65 | 202105 |

In the Mar-2021 period, the RORD line is collected for $260 as follows:

| Line ID | Transaction Type | Quantity | Ext. List Price | Ext. Sell Price | Start Date | End Date | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | RORD | -3 | -520 | -260 | 3/16/2021 | 5/31/2021 | 202103 |

The waterfall revenue for the RORD line is as follows:

| Period | 202101 | 202102 | 202103 | 202104 | 202105 |
| --- | --- | --- | --- | --- | --- |
| Number of days | N/A | N/A | 16 | 30 | 31 |
| Waterfall revenue | N/A | N/A | -54.03 | -101.30 | -104.68 |

The Net Sell Price is the sum of SO and RORD lines, which is $240. The Net Billed Price is the invoice amount, which is $250. Net Billed Price is greater than Net Sell Price, so contra entry is created for $10. The RORD line will debit the unbilled contract liability.

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability (Unbilled) |  | 48.02 | 202103 |
| Revenue | 48.02 |  | 202103 |
| Contract Liability (Billed) |  | 6.01 | 202103 |
| Revenue | 6.01 |  | 202103 |
| Contract Liability (Billed) |  | 10 | 202103 |
| Contra AR | 10 |  | 202103 |
| Contract Liability (Unbilled) |  | 101.30 | 202104 |
| Revenue | 101.30 |  | 202104 |
| Contract Liability (Unbilled) |  | 104.68 | 202105 |
| Revenue | 104.68 |  | 202105 |

In the Apr-2021 period, a CM-RO line is collected as follows. Then, Net Billed Amount is $240, which equals Net Sell Price ($240). The contra revenue reversal happens.

| Line ID | Transaction Type | Quantity | Ext. List Price | Ext. Sell Price | Start Date | End Date | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | CM-RO | -0.0385 | -20 | -10 | 3/16/2021 | 5/31/2021 | 202104 |

The accounting entries are as follows:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability | 10 |  | 202104 |
| Contract Liability | 10 |  | 202104 |
| Contra AR |  | 10 | 202104 |

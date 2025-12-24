---
title: "Simple median calculated on discount percentage"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/simple-median-calculated-on-discount-percentage"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:28.226Z"
---

# Simple median calculated on discount percentage

This reference explains how to calculate the simple median on discount percentages to derive SSP%, including steps for calculating median, high band, and low band SSP Discount% values, and determining transaction compliance.

When Simple Median is selected to determine the midpoint value of SSP and the SSP Band Calc On field is DISC\_PCT , the SSP Analyzer will do the calculations in the following order to derive SSP%.

1\. Calculate the median SSP%.

The Median SSP% is calculated based on the following formula:

Median SSP% = MEDIAN (Discount%)

The following table shows the discount percentage of each transaction line in this example.

| ITEM_NUM | List Price | Sell Price | SSP Sell% (%List) | Discount% |
| --- | --- | --- | --- | --- |
| HARDWARE_FV | 7049 | 6785 | 96.25% | 3.75% |
| HARDWARE_FV | 7059 | 6613 | 93.68% | 6.32% |
| HARDWARE_FV | 7299 | 6506 | 89.14% | 10.86% |
| HARDWARE_FV | 7061 | 6253 | 88.56% | 11.44% |
| HARDWARE_FV | 7010 | 6123 | 87.35% | 12.65% |
| HARDWARE_FV | 7372 | 6369 | 86.39% | 13.61% |
| HARDWARE_FV | 7465 | 6090 | 81.58% | 18.42% |
| HARDWARE_FV | 7344 | 5555 | 75.64% | 24.36% |
| HARDWARE_FV | 7249 | 5343 | 73.71% | 26.29% |
| HARDWARE_FV | 7572 | 5281 | 69.74% | 30.26% |
| HARDWARE_FV | 7040 | 4771 | 67.77% | 32.23% |
| HARDWARE_FV | 7041 | 4438 | 63.03% | 36.97% |
| HARDWARE_FV | 7535 | 4741 | 62.92% | 37.08% |
| HARDWARE_FV | 7587 | 4628 | 61.00% | 39.00% |

There are 14 transactions altogether. According to the simple median method, SSP Discount% equals the average discount percentage of 7th and 8th transactions.

Median SSP Discount% = (18.42% + 24.36%)/2 = 21.39%

2\. Calculate the High Band SSP Discount% value.

The High Band SSP Discount% is derived based on the following formula:

High Band SSP Discount% = Median SSP Discount% + (Median SSP Discount% \* High Band Percent/100)

The High Band Percent is specified by the High/Ceiling% field in the SSP Analyzer template or SSP batch. The value is 15 in this example.

High Band SSP Discount% = 21.39% + (21.39% \* 15/100) = 24.60%

3\. Calculate the Low Band SSP Discount% value.

The Low Band SSP Discount% is derived based on the following formula:

Low Band SSP Discount% = Median SSP Discount% - (Median SSP Discount% \* Low Band Percent/100)

The Low Band Percent is specified by the Low/Floor% field, which 15 in this example.

Low Band SSP Discount% = 21.39% - (21.39% \* 15/100) = 18.18%

4\. Calculate the High Band SSP% and Low Band SSP% based on the following formulas:

High Band SSP% = 100 – Low Band Discount%

Low Band SSP% = 100 - High Band Discount%

4\. Determine whether each transaction is compliant within the SSP% (or SSP Discount%) range.

If the Discount% of a transaction is within this SSP Discount% range (18.18% ~ 24.60%), this transaction is marked as compliant by the Analyzer; otherwise, the transaction is incompliant.

5\. Calculate the compliance percentage.

The actual compliance percentage can be calculated by the following formula and then compared to the Compliance% value specified in the SSP Analyzer template or SSP batch.

Compliance Percentage = (Total number of compliant transactions/Total number of transactions) \* 100

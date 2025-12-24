---
title: "Simple median calculated on price"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/simple-median-calculated-on-price"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:25.991Z"
---

# Simple median calculated on price

This reference explains the calculation of the Simple Median for SSP, including the derivation of High and Low Band Prices, and the compliance percentage of transactions within the SSP range.

When Simple Median is selected to determine the midpoint value of SSP and the SSP Band Calc On field is SSP , the SSP Analyzer will do the calculations in the following order to derive SSP.

1\. Calculate the Median SSP on the transaction lines.

The Median SSP is calculated based on the following formula:

Median SSP = MEDIAN (Unit Sell Price)

The following table shows the Unit Sell Price of each transaction line.

| RC_ID | DOC_NUM | ITEM_NUM | Unit Sell Price |
| --- | --- | --- | --- |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7010 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7040 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7041 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7049 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7059 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7061 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7249 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7299 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7344 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7372 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7465 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7535 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7572 |
| 10360 | FV_LOAD_01 | HARDWARE_FV | 7587 |

There are 14 transactions altogether. According to the simple median method, Median SSP is equal to the average price of 7th and 8th transactions.

Median SSP = (7249 + 7299)/2 = 7274

2\. Derive the High Band Price value.

The High Band Price is calculated based on the following formula:

High Band Price = Median SSP + (Median SSP \* High Band Percent/100)

The High Band Percent is specified by the High/Ceiling% field in the SSP Analyzer template or SSP batch. The value is 15 in this example.

High Band Price = 7274 + (7274 \* 15/100) = 8365.1

3\. Derive the Low Band Price value.

The Low Band Price is derived based on the following formula:

Low Band Price = Median SSP - (Median SSP \* Low Band Percent/100)

The Low Band Percent is specified by the Low/Floor% field, which 15 in this example.

Low Band Price = 7274 - (7274 \* 15/100) = 6182.9

4\. Determine whether each transaction is compliant within the SSP range.

After the Low Band Price and High Band Price are calculated, if the Price of a transaction is within this range (6182.9 ~ 8365.1), this transaction is marked as compliant by the Analyzer; otherwise, the transaction is incompliant.

5\. Calculate the compliance percentage.

The actual compliance percentage can be calculated by the following formula and then compared to the Compliance% value specified in the SSP Analyzer template or SSP batch.

Compliance Percentage = (Total number of compliant transactions/Total number of transactions) \* 100

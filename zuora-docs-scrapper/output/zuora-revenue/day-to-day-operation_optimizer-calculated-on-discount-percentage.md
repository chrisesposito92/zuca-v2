---
title: "Optimizer calculated on discount percentage"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/optimizer-calculated-on-discount-percentage"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:33.250Z"
---

# Optimizer calculated on discount percentage

This example demonstrates how the SSP Analyzer calculates SSP% using discount percentages, including building test buckets, calculating median, low, and high band percentages, and determining transaction compliance.

In this example, the Optimizer Scale field is 0.5 the SSP Band Calc On field is DISC\_PCT in the SSP Analyzer template. The Low/Floor% field is 15 and the High/Ceiling% field is 15.

The SSP Analyzer will do the calculations in the following order to derive SSP%.

1\. Build the test buckets based on the SSP Band Calc Type field in the SSP Analyzer template.

-   If the SSP Band Calc Type field is PERCENT, use the following formulas:


Low Band% =100 - (100- Median%) \* (100 + Low/Floor %)/100

High Band%= 100 - (100 - Median%) \* (100 - High/Ceiling% )/100

For example,

| Bucket# | Median% | Low Band% | High Band% |
| --- | --- | --- | --- |
| 1 | 0 | -15.00 | 15.00 |
| 2 | 0.5 | -14.43 | 15.43 |
| 3 | 1 | -13.85 | 15.85 |
| 4 | 1.5 | -13.28 | 16.28 |
| 5 | 2 | -12.70 | 16.70 |
| 6 | 2.5 | -12.13 | 17.13 |

-   If the SSP Band Calc Type field is ABSOLUTE, use the following formulas:


Low Band% = Median% - Low/Floor %

High Band%= Median% + High/Ceiling%

For example,

| Bucket# | Median% | Low Band% | High Band% |
| --- | --- | --- | --- |
| 1 | 0 | -15.00 | 15.00 |
| 2 | 0.5 | -14.50 | 15.50 |
| 3 | 1 | -14.00 | 16.00 |
| 4 | 1.5 | -13.50 | 16.50 |
| 33 | 16 | 1.00 | 31.00 |
| 34 | 16.5 | 1.50 | 31.50 |
| 35 | 17 | 2.00 | 32.00 |
| 36 | 17.5 | 2.50 | 32.50 |

3\. Count the number of transactions whose Discount% falls into the range of each test bucket.

In this example, the number of transactions for each bucket is as follows:

| Bucket# | Median% | Low Band% | High Band% | Number of Transactions |
| --- | --- | --- | --- | --- |
| 112 | 55.50 | 47.18 | 63.83 | 401 |
| 113 | 56.00 | 47.60 | 64.40 | 399 |
| 114 | 56.50 | 48.03 | 64.98 | 400 |
| 115 | 57.00 | 48.45 | 65.55 | 472 |
| 116 | 57.50 | 48.88 | 66.13 | 472 |
| 117 | 58.00 | 49.30 | 66.70 | 472 |
| 118 | 58.05 | 49.73 | 67.28 | 470 |

4\. Identify the bucket with the largest number of transactions.

In this example, buckets 115, 116, and 117 are identified.

5\. Calculate Median SSP Discount% based on the following formula by using the transaction data in the identified buckets. (It is supposed the ENABLE\_MULTI\_PEAK\_CALC profile is set to Y.)

Median SSP Discount% = (Bucket From Low Band% + Bucket To High Band%)/2

In this example, 3 buckets are identified. The From value of bucket 115 and the To value of bucket 117 are used.

Median SSP Discount% = (48.45 + 66.70)/2 = 57.58

6\. Calculate Low Band SSP Discount% based on the following formula.

Low Band SSP Discount% = Median SSP Discount% - (Low/Floor% \* ( 100 – Median SSP Discount%)/100)

In this example, the Low Band SSP Discount% is 51.22.

57.58 - (15 \* (100 - 57.58)/100) = 51.22

7\. Calculate the High Band SSP Discount% based on the following formula.

High Band SSP Discount% = Median SSP Discount% + (Low/Floor% \* ( 100 – Median SSP Discount%)/100)

In this example, the High Band SSP Discount% is 63.94.

57.58 + (15 \* (100 - 57.58)/100) = 63.94

8\. Determine whether the Discount% of each transaction is compliant within the SSP Discount% range.

In this example, if the Discount% of a transaction is within this range (51.22 ~ 63.94), this transaction is marked as compliant by the Analyzer; otherwise, the transaction is incompliant.

9\. Calculate the compliance percentage.

The actual compliance percentage can be calculated by the following formula and then compared to the Compliance% value specified in the SSP Analyzer template or SSP batch.

Compliance Percentage = (Total number of compliant transactions/Total number of transactions) \* 100

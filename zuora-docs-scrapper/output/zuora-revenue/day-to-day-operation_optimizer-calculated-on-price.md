---
title: "Optimizer calculated on price"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/optimizer-calculated-on-price"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:30.987Z"
---

# Optimizer calculated on price

This reference explains how the Optimizer method calculates SSP using specified fields and formulas, including the creation of test buckets and compliance determination.

If Optimizer method is selected as the SSP calculation type, you must also specify the Optimizer Scale field, which determines the scale increment value for the Analyzer to build the test buckets.

In this example, the Optimizer Scale field is 0.5 and the SSP Band Calc On field is SSP in the SSP Analyzer template. The Low/Floor% value is 15 and the High/Ceiling% value is 15.

The SSP Analyzer will do the calculations in the following order to derive SSP.

1\. Derive the maximum and minimum Unit Sell Price from the transactions.

2\. Apply the following formulas to calculate the Optimizer range for each test bucket.

Min Range = Minimum Unit Sell Price Max Range = Min Range + (Min Range \*(Optimized Scale/100) Low Band = Min Range - (Min Range \* Low/Floor%) High Band = Min Range + (Min Range\* High/Ceiling%)

3\. Build the test buckets based on the above calculations.

In this example, the range for each test bucket is shown as follows:

| Bucket# | Min Range | Max Range | Low Band | High Band |
| --- | --- | --- | --- | --- |
| 1 | 788.70 | 788.78 | 670.39 | 907.01 |
| 2 | 788.78 | 788.86 | 670.46 | 907.10 |
| 3 | 788.86 | 788.94 | 670.53 | 907.19 |
| 4 | 788.94 | 789.02 | 670.60 | 907.28 |
| 5 | 789.02 | 789.10 | 670.67 | 907.37 |
| 6 | 789.10 | 789.18 | 670.73 | 907.47 |

4\. Count the number of transactions whose Unit Sell Price falls into each bucket.

Based on the input transaction data, the following table is derived.

| Bucket# | Min Range | Max Range | Low Band | High Band | Number of Transactions |
| --- | --- | --- | --- | --- | --- |
| 1 | 788.70 | 788.78 | 670.39 | 907.01 | 2 |
| 2 | 788.78 | 788.86 | 670.46 | 907.10 | 5 |
| 3 | 788.86 | 788.94 | 670.53 | 907.19 | 5 |
| 4 | 788.94 | 789.02 | 670.60 | 907.28 | 2 |
| 5 | 789.02 | 789.10 | 670.67 | 907.37 | 1 |
| 6 | 789.10 | 789.18 | 670.73 | 907.47 | 1 |

5\. Identify the bucket with the biggest number of transactions. In this example, bucket 2 and 3 are identified.

6\. Calculate the SSP based on the following formula by using the transaction data in the identified bucket or buckets. (It is supposed the ENABLE\_MULTI\_PEAK\_CALC profile is set to Y.)

SSP = (Bucket From Price + Bucket To Price)/2

In this example, 2 buckets are identified.

SSP = (670.46 + 907.19)/2 = 788.82

7\. Calculate the Low Band SSP based on the following formula.

Low Band SSP = (100 – Low/Floor%)/ 100 \* SSP

For this example, the Low Band SSP is 670.50.

( (100 - 15)/100 ) X 788.82 = 670.50

8\. Calculate the High Band SSP based on the following formula.

High Band Price = (100 + High/Ceiling%) \* SSP

For this example, the High Band SSP is 907.14.

(100 + 15 ) \* 788.82 = 907.14

9\. Determine whether each transaction is compliant within the SSP range.

After the Low Band SSP and High Band SSP are calculated, if the Price of a transaction is within this range (670.50 ~ 907.14), this transaction is marked as compliant by the Analyzer; otherwise, the transaction is incompliant.

10\. Calculate the compliance percentage.

The actual compliance percentage can be calculated by the following formula and then compared to the Compliance% value specified in the SSP Analyzer template or SSP batch.

Compliance Percentage = (Total number of compliant transactions/Total number of transactions) \* 100

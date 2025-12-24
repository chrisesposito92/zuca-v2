---
title: "Calculation methods of SSP Analyzer"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/calculation-methods-of-ssp-analyzer"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:23.219Z"
---

# Calculation methods of SSP Analyzer

Zuora Revenue's SSP Analyzer provides various SSP calculation types for defining SSP templates.

The SSP Analyzer of Zuora Revenue has a matrix of four SSP calculation types for you to choose when you create the SSP template.

-   Simple Median - By Transaction
-   Simple Median - By Quantity
-   Optimizer - By Transaction
-   Optimizer - By Quantity

The four SSP calculation types are interpreted in the following table.

| Transaction Count Method | Midpoint Calculation Method |  |
| --- | --- | --- |
| By Transaction | Simple Median | Optimizer |
| By Quantity | Simple Median | Optimizer |

## Transaction count method

The Transaction Count Method column determines how to count the number of transactions for the SSP analysis.

-   By Transaction: Each transaction line represents a single quantity.

-   By Quantity: The quantity on the transaction line is counted in the analysis.


For example, the Ext. Sell Price of a sales order line with the quantity of 10 is $1200. The Unit Sell Price is $120. When SSP analysis is done by transaction, it represents a count of 1 with the Sell Price of $120. When SSP analysis is done by quantity, it represents a count of 10 with the Sell Price of $120.

The count of transactions matters because it has an impact on transaction compliance percentage calculation.

## Midpoint calculation method

The Midpoint Calculation Method columns determine how to calculate the midpoint value for SSP.

-   Simple Median: SSP is determined by the standard mathematical median of the unit sell price or the discount percentage of the transaction set.
-   Optimizer: SSP is determined by the midpoint of the range with the highest concentration (the number of transactions) within your defined range.

The high-level steps that SSP Analyzer performs in the Optimizer calculation method are listed as follows:

1.  Derive the test bucket range based on Optimizer Scale, Low/Floor%, High/Ceiling%, SSP Band Calc On, and/or SSP Band Calc Type values that are specified in SSP Analyzer template or SSP batch.
2.  Count the number of transactions that fall into each equally split test bucket.
3.  Identify the bucket or buckets with the biggest number of transactions.
4.  Derive the SSP or SSP% (determined by the SSP Band Calc On field) based on transaction data in the identified bucket or buckets.

    Note: If more than one bucket is identified in Step 3 and the ENABLE\_MULTI\_PEAK\_CALC profile value is N, SSP Analyzer does not calculate the average and you must take control and manually enter the values. If the ENABLE\_MULTI\_PEAK\_CALC profile value is Y, the From value of the 1st bucket and the To value of the last bucket is used to calculate the average.

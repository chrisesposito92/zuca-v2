---
title: "Query the Prepaid with Drawdown objects through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/query-the-prepaid-with-drawdown-objects-through-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:32.048Z"
---

# Query the Prepaid with Drawdown objects through Data Query

Learn how to query Prepaid Balance, Prepaid Balance Fund, and Prepaid Balance Transaction objects using SQL examples through Data Query.

You can perform queries on the Prepaid Balance, Prepaid Balance Fund, Prepaid Balance Transaction objects through the [Data Query](/zuora-platform/data/data-query/overview-of-data-query).

## SQL examples for querying the Prepaid with Drawdown objects

To query the Prepaid with Drawdown objects, you can use the following SQL examples:

-   Query the Prepaid Balance object by using the `OrigSubscriptionId` field:

    select Id,Name,Balance,TotalFund,StartDate,EndDate,OrigSubscriptionId,UOM from prepaidbalance where OrigSubscriptionId='402881847e2d707b017e2d76c48a0016'

-   Query the Prepaid Balance object by using the `Name` field:

    select Id,Name,TotalFund,Balance,UOM from prepaidbalance where Name ='A-S00000037\_Each'

-   Query the Prepaid Balance Fund object by using the `PrepaidBalanceId` field:

    select id,PrepaidBalanceId,FundedBalance,Balance,StartDate,EndDate,FundSourceType from prepaidbalancefund where PrepaidBalanceId='402881847e2d707b017e2d76c8ae002f'

-   Query the Prepaid Balance Transaction object by using the `FundId` field:

    select id,PrepaidBalanceId,FundId,Amount,Balance,TransactionDate,PrepaidBalanceTransactionType from PrepaidBalanceTransaction where FundId='402881847e2d707b017e2d76c8b80030'

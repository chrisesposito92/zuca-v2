---
title: "Multi-currency contracts"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/multi-currency-contracts"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:41.012Z"
---

# Multi-currency contracts

Explore how multi-currency contracts allow transactions in various currencies, system configurations for currency allocations, and examples of currency determination in Zuora Revenue.

## Overview

Multi-currency contracts involve more than one transaction currency in a revenue contract, thus allowing your customers to pay in their local cash.

When there is more than one transaction currency in a revenue contract, this revenue contract is identified as a multi-currency contract. Either the functional currency or the reporting currency will be used for any calculations that are done for multi-currency revenue contracts in Zuora Revenue.

Depending on the system-level value of the MULTI\_CURR\_FV\_REPORT\_LEVEL profile, you can use the functional or reporting currency for allocations or calculations in multi-currency revenue contracts. You can set the profile value to one of the following:

-   Lowest Common Currency
-   Reporting Currency

When you set the MULTI\_CURR\_FV\_REPORT\_LEVEL profile to the Lowest Common Currency, all the lines within the revenue contract will have the same functional currency, and Zuora Revenue will execute calculations in the functional currency. In all other circumstances, Zuora Revenue will use the reporting currency specified by the REPORTING\_CURRENCY profile to do the calculations.

## Multi-currency contract in Workbench

You can view the multi-currency contracts in M following the revenue contract number in the contract header, as shown in the following graphic.

![image-multi-currency.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e6aa9a75-d58e-4bd5-a622-af96a69fac40?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2YWE5YTc1LWQ1OGUtNGJkNS1hNjIyLWFmOTZhNjlmYWM0MCIsImV4cCI6MTc3MTU1ODcxNSwianRpIjoiZGZhMWUxZDBhNzQwNDY5M2FhOWE4ZjJkZWM3YWQyNWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ulpjAGyO4rx0sKlHGnhcMoBxRKnrJpaVVFOov7jQvgA)

The Overview tab of the Revenue Contract Detail page also indicates the allocation currency on the right pane. In the above graphic, allocations of contract RC10725 happen in the Reporting Currency (USD). On the left pane, values are displayed only in the reporting currency.

If the allocation happens in the transaction currency, values are displayed in the transaction currency, functional currency, and reporting currency. If the allocation happens in the functional currency, values are displayed in the functional and reporting currencies.

## Examples of currency determination

The underlying examples help you understand how the allocation currency is determined for the multi-currency contracts eligible for allocations in Zuora Revenue. The same logic also applies to multi-currency contracts that are not eligible for allocation.

The column headers are abbreviated in the example tables as follows:

-   T.Curr: Transaction currency
-   F.Curr: Functional currency, which is the book currency.
-   G.Curr: Reporting currency.
-   F.Ex.Rate: Functional exchange rate is the exchange rate from the transaction currency to the functional currency.
-   G.Ex.Rate: Reporting exchange rate, which is the exchange rate from the functional currency to the reporting currency.

    Read these examples provided here to further understand currency determination.

-   [Example 1](/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-transaction-currency)

-   [Example 2](/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-functional-currency)

-   [Example 3](/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-reporting-currency)

-   [Example 4](/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-reporting-currency-with-functional-currency-being-the-same)


## Related articles

An example is provided to explain how the carve amount is calculated after the allocation currency is determined for a multi-currency contract. See [Derivation of carve amount](/zuora-revenue/month-end-process/multi-currency-contracts/derivation-of-carve-amount).

To understand how the linking and delinking operations can impact the allocation currency, see the examples provided in [Impact of linking and delinking](/zuora-revenue/month-end-process/multi-currency-contracts/impact-of-linking-and-delinking).

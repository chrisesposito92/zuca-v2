---
title: "Impact of linking and delinking"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/impact-of-linking-and-delinking"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:41.404Z"
---

# Impact of linking and delinking

This document explores how linking and delinking operations can alter a revenue contract's currency status and allocation currency.

After linking and delinking operation is performed, a revenue contact might change from multi-currency contract to single currency contract or the other way around. The allocation currency might also change. Different scenarios are provided below to explain the allocation currency change caused by linking and delinking.

## Scenario 1 - Transaction currency to reporting currency after linking

In this scenario, initial allocations happen in the transaction currency (USD) because all lines have the same transaction currency.

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hardware | USD | EUR | USD | 1.2 | 0.84 | USD |
| 2 | Support | USD | USD | USD | 1 | 1 | USD |
| 3 | PS | USD | USD | USD | 1 | 1 | USD |

After the following line with a different transaction currency (EUR) is linked to this contract, this contract becomes a multi-currency contract. The allocation currency will change to either the functional currency or the reporting currency depending on the MULTI\_CURR\_FV\_REPORT\_LEVEL profile. In this example, the MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Lowest Common Currency.

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate |
| --- | --- | --- | --- | --- | --- | --- |
| 4 | Maintenance | EUR | USD | USD | 0.84 | 1.2 |

Therefore, allocations will happen in the reporting currency (USD) because the functional currencies of the four lines are different.

The reporting exchange rate, which is used to calculate allocations, is based on the line level exchange rates. When allocations are posted, Zuora Revenue derives the functional exchange rate by dividing 1 by the line-level reporting exchange rate. The reporting currency exchange rate used for posting is the line-level reporting exchange rate.

| SO No | Item | T.Curr | F.Curr | G.Curr | F. EX Rate(=1/G. Ex Rate) | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hardware | USD | EUR | USD | 1.19 | 0.84 | USD |
| 2 | Support | USD | USD | USD | 1 | 1 | USD |
| 3 | PS | USD | USD | USD | 1 | 1 | USD |
| 4 | Maintenance | EUR | USD | USD | 0.83333 | 1.2 | USD |

## Scenario 2 - Transaction currency to functional currency after linking

In this scenario, initial allocations happen in the transaction currency (USD) because all lines have the same transaction currency.

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hardware | USD | EUR | USD | 0.8 | 1.2 | USD |
| 2 | Support | USD | EUR | USD | 0.8 | 1.2 | USD |
| 3 | PS | USD | EUR | USD | 0.8 | 1.2 | USD |

The following line with a different transaction currency (EUR) is linked to this contract, which makes the contract a multi-currency contract. The allocation currency will change to either the functional currency or the reporting currency depending on the MULTI\_CURR\_FV\_REPORT\_LEVEL profile.

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate |
| --- | --- | --- | --- | --- | --- | --- |
| 4 | Maintenance | EUR | EUR | USD | 1.0 | 1.2 |

If the MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Lowest Common Currency, the allocation currency will change to the functional currency (EUR) because the functional currency is the same for all the four lines. The functional exchange rate, which is used to calculate the allocation amounts, is based on the line level exchange rates. The reporting exchange rate for posting is determined based on the exchange rate on the earliest SO Book Date.

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hardware | USD | EUR | USD | 0.8 | 1.2 | EUR |
| 2 | Support | USD | EUR | USD | 0.8 | 1.2 | EUR |
| 3 | PS | USD | EUR | USD | 0.8 | 1.2 | EUR |
| 4 | Maintenance | EUR | EUR | USD | 1.0 | 1.2 | EUR |

## Scenario 3 - Functional currency to reporting currency after linking

In this scenario, the revenue contract is a multi-currency revenue contract and the MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Lowest Common Currency. Initial allocations happen in the functional currency (EUR).

| SO No | SO Book Date | Item | T.Curr | F.Curr | G. Curr | F. Ex Rate | G. Ex Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | USD | 1.2 | 1.2 | EUR |
| 2 | 02/01/2019 | Support | USD | EUR | USD | 1.2 | 1.2 | EUR |
| 3 | 03/01/2019 | PS | GBP | EUR | USD | 0.8 | 1.2 | EUR |

The following line with a different functional currency (USD) is linked to this contract.

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | 04/01/2019 | Maintenance | EUR | USD | USD | 0.8 | 1.0 |

Allocations will happen in the reporting currency (USD) because the functional currencies for all the lines are different. The functional exchange rate is derived by dividing 1 by the line-level reporting exchange rate.

| SO No | SO Book Date | Item | T.Curr | F.Curr | G.Curr | F. EX Rate(1/G. Ex Rate) | G. EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | USD | 0.8333 | 1.2 | USD |
| 2 | 02/01/2019 | Support | USD | EUR | USD | 0.8333 | 1.2 | USD |
| 3 | 03/01/2019 | PS | GBP | EUR | USD | 0.8333 | 1.2 | USD |
| 4 | 04/01/2019 | Maintenance | EUR | USD | USD | 1.0 | 1.0 | USD |

## Scenario 4 - Functional currency to transaction currency after delinking

In this scenario, initial allocations for a multi-currency contract happen in the functional currency (EUR).

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F. EX Rate | G. EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | USD | 0.8 | 1.2 | EUR |
| 2 | 02/01/2019 | Support | USD | EUR | USD | 1 | 1 | EUR |
| 3 | 03/01/2019 | PS | USD | EUR | USD | 1 | 1 | EUR |
| 4 | 04/01/2019 | Maintenance | EUR | EUR | USD | 1.2 | 1 | EUR |

After the 4th line is delinked from this contract, it becomes a single currency contract because all the remaining lines have the same transaction currency. Allocations are recalculated in the transaction currency (USD). The functional exchange rate and reporting exchange rate, which are used to post allocations, are determined based on the earliest SO Book Date (01/01/2019).

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | USD | 0.8 | 1.2 | USD |
| 2 | 02/01/2019 | Support | USD | EUR | USD | 0.8 | 1.2 | USD |
| 3 | 03/01/2019 | PS | USD | EUR | USD | 0.8 | 1.2 | USD |

## Scenario 5 - Reporting currency to transaction currency after delinking

In this scenario, initial allocations for a multi-currency contract happen in the reporting currency (EUR).

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | EUR | 0.8 | 1.0 | EUR |
| 2 | 02/01/2019 | Support | USD | EUR | EUR | 0.8 | 1.0 | EUR |
| 3 | 03/01/2019 | PS | USD | EUR | EUR | 0.8 | 1.0 | EUR |
| 4 | 04/01/2019 | Maintenance | EUR | USD | EUR | 0.8 | 1.2 | EUR |

After the 4th line is delinked from this contract, all the remaining lines have the same transaction currency so this contract becomes a single currency contract. Allocations are recalculated in the transaction currency (USD). The exchange rate from the transaction currency to the functional currency, which is used to post allocations, is determined based on the earliest SO Book Date.

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | EUR | 0.8 | 1.0 | USD |
| 2 | 02/01/2019 | Support | USD | EUR | EUR | 0.8 | 1.0 | USD |
| 3 | 03/01/2019 | PS | USD | EUR | EUR | 0.8 | 1.0 | USD |

## Scenario 6 - Reporting currency to functional currency after delinking

In this scenario, the transaction currencies and the functional currencies of the lines in a multi-currency contract are different. The MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Lowest Common Currency. Allocations happen in the reporting currency (USD).

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | USD | 1.2 | 1.2 | USD |
| 2 | 02/01/2019 | Support | USD | EUR | USD | 1.2 | 1.2 | USD |
| 3 | 03/01/2019 | PS | GBP | EUR | USD | 0.8 | 1.2 | USD |
| 4 | 04/01/2019 | Maintenance | EUR | USD | USD | 0.8 | 1.0 | USD |

After the 4th line is delinked from this contract, the functional currency is the same for all the remaining lines. So allocations are recalculated in the functional currency (EUR), which is the lowest common currency.

The functional exchange rate, which is used to calculate the allocation amounts, is based on the line level exchange rates. The reporting exchange rate for posting is determined based on the exchange rate on the earliest SO Book Date.

| SO No | So Book Date | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | Hardware | USD | EUR | USD | 1.2 | 1.2 | EUR |
| 2 | 02/01/2019 | Support | USD | EUR | USD | 1.2 | 1.2 | EUR |
| 3 | 03/01/2019 | PS | GBP | EUR | USD | 0.8 | 1.2 | EUR |

## Scenario 7 - Allocation changes after posting

Initial allocations of a single currency revenue contract happen in the transaction currency (USD).

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency | Allocation Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hardware | USD | EUR | USD | 0.8 | 1.2 | USD | 1000 |
| 2 | Support | USD | EUR | USD | 0.8 | 1.2 | USD | 1000 |
| 3 | PS | USD | EUR | USD | 0.8 | 1.2 | USD | -2000 |

The initial allocation adjustment entries are posted in the 201901 period.

| Line No | Allocation Amount | Allocation Currency | Account Type | Period | Dr | Cr | F.EX Rate | G.EX Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1000 | USD | ADJ.Liability | 201901 |  | 1000 | 0.8 | 1.2 |
| 2 | 1000 | USD | ADJ.Liability | 201901 |  | 1000 | 0.8 | 1.2 |
| 3 | -2000 | USD | ADJ.Liability | 201901 | 2000 |  | 0.8 | 1.2 |

In the same period, the following line is linked to this contract, which makes the contract a multi-currency contract. The MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Lowest Common Currency. The functional currency is the same for all the lines. Allocation will happen in the functional currency (EUR).

| SO No | Item | T.Curr | F.Curr | G.Curr | F.EX Rate | G.EX Rate | Allocation Currency |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | Maintenance | EUR | EUR | USD | 1.0 | 0.8 | EUR |

The initial allocation adjustment entries that were posted in January 2019 are reversed. The new initial allocation adjustment entries are recalculated in the functional currency and the exchange rate is listed below. The functional exchange rate, which is used to calculate the allocation amounts, is based on the line level exchange rates. The reporting exchange rate for posting is determined based on the exchange rate on the earliest SO Book Date.

| Line No | Allocation Amount | Allocation Currency | Account Type | Period | Dr | Cr | F.EX Rate | G.EX Rate | Posted Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1000 | USD | ADJ.Liability | 201901 |  | 1000 | 0.8 | 1.2 | Y |
| 2 | 1000 | USD | ADJ.Liability | 201901 |  | 1000 | 0.8 | 1.2 | Y |
| 3 | -2000 | USD | ADJ.Liability | 201901 | 2000 |  | 0.8 | 1.2 | Y |
| 1 | 1000 | USD | ADJ.Liability | 201901 | 1000 |  | 0.8 | 1.2 | Y |
| 2 | 1000 | USD | ADJ.Liability | 201901 | 1000 |  | 0.8 | 1.2 | Y |
| 3 | -2000 | USD | ADJ.Liability | 201901 |  | 2000 | 0.8 | 1.2 | Y |
| 1 | 800 | EUR | ADJ.Liability | 201901 |  | 800 | 1.0 | 1.2 | N |
| 2 | 800 | EUR | ADJ.Liability | 201901 |  | 800 | 1.0 | 1.2 | N |
| 3 | -2000 | EUR | ADJ.Liability | 201901 | 2000 |  | 1.0 | 1.2 | N |
| 4 | 400 | EUR | ADJ.Liability | 201901 |  | 400 | 1.0 | 1.2 | N |

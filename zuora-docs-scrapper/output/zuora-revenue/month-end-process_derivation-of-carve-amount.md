---
title: "Derivation of carve amount"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/derivation-of-carve-amount"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:38.894Z"
---

# Derivation of carve amount

After the allocation currency is determined, the allocatable functional price, the extended fair value price, and the allocated amount must all be calculated in the allocation currency. The calculation is done based on the line level exchange rate.

In the following example, the allocation currency is determined to be the functional currency, which is USD.

| SO No | Ext. List Price | Ext. Sell Price | Item | T.Curr | F.Curr | Fair Value % | F.Ex Rate | G.Ex Rate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1000 | 800 | Hardware | USD | USD | 90 | 1 | 1 |
| 2 | 1200 | 1000 | Support | EUR | USD | 75 | 0.8 | 1 |
| 3 | 800 | 600 | PS | USD | USD | 60 | 1 | 1 |

The extended fair value price is calculated based on the following formula and the RSSP% can also be derived based on the extended fair value prices.

Ext. Fair Value = Ext. List Price \* Fair Value% \* F.Ex Rate

| SO No | Ext. List Price (A1) | Item | T.Curr | F.Curr | Fair Value% (B) | F.Ex Rate (C) | G.Ex Rate (D) | Ext. Fair Value (A1*B*C) | RSSP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1000 | Hardware | USD | USD | 90 | 1 | 1 | 900 | 0.428571 |
| 2 | 1200 | Support | EUR | USD | 75 | 0.8 | 1 | 720 | 0.342857 |
| 3 | 800 | PS | USD | USD | 60 | 1 | 1 | 480 | 0.228571 |
| Total | 3000 |  |  |  |  |  |  | 2100 | 1.00000 |

The allocatable functional price is calculated based on the following formula:

Allocatable Functional Price = Ext. Sell Price \* F. Ex Rate

| SO No | Ext. Sell Price (A2) | Item | T.Curr | F.Curr | Fair Value % (B) | F.EX Rate (C) | G.EX Rate (D) | Allocatable Func. Price (A2*C) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 800 | Hardware | USD | USD | 90 | 1 | 1 | 800 |
| 2 | 1000 | Support | EUR | USD | 75 | 0.8 | 1 | 800 |
| 3 | 600 | PS | USD | USD | 60 | 1 | 1 | 600 |
| Total | 2400 |  |  |  |  |  |  | 2200 |

The allocated value can be derived based on the allocatable functional price and RSSP.

| SO No | Item | T.Curr | F.Curr | F.EX Rate (C) | G.EX Rate (D | Ext. Fair Value Price | RSSP | Allocatable Func. Price | Allocated Func. Price |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Hardware | USD | USD | 1 | 1 | 900 | 0.428571 | 800 | 942.86 |
| 2 | Support | EUR | USD | 0.8 | 1 | 720 | 0.342857 | 800 | 754.29 |
| 3 | PS | USD | USD | 1 | 1 | 480 | 0.228571 | 600 | 502.86 |
| Total |  |  |  |  |  | 2100 | 1.00000 | 2200 | 2200 |

The carve amount can be calculated based on the allocatable functional price and the allocated functional price as follows:

| SO No | Ext.List Price | Ext. Sell Price | Item | Allocatable F.Curr (A) | Allocated F.Curr (B) | Carve Amount(B-A) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1000 | 800 | Hardware | 800 | 942.86 | 142.86 |
| 2 | 1200 | 1000 | Support | 800 | 754.29 | -45.71 |
| 3 | 800 | 600 | PS | 600 | 502.86 | -97.15 |

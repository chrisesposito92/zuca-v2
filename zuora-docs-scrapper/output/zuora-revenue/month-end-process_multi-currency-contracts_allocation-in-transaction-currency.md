---
title: "Allocation in transaction currency"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-transaction-currency"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:40.827Z"
---

# Allocation in transaction currency

This document explains the allocation process in a transaction currency, using GBP as an example, and details the exchange rates applied for functional and reporting currencies.

In the following example, the transaction currencies of all the lines are the same, which is GBP. The reporting currency, according to the REPORTING\_CURRENCY profile, is USD. This revenue contract is not a multi-currency contract; the transaction currency (GBP) is used for allocations. The exchange rate used to post the allocations from the transaction currency to the other two currencies (functional and reporting) is determined based on the earliest Sales Order Book Date. In this example, the earliest Sales Order Book Date is 01/01/2019, so the exchange rate from the transactional currency to the functional currency is 1.1 and from the functional currency to the reporting currency is 0.90.

| Line No | SO Book Date | Company Code | Amount | T.Curr | F.Ex.Rate | F.Ex.Date | F.Curr | G.Ex.Rate | G.Ex.Date | G.Curr |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | 100 | 1000 | GBP | 1.1 | 01/01/2019 | EUR | 0.90 | 01/01/2019 | USD |
| 2 | 01/02/2019 | 100 | 2000 | GBP | 1.2 | 01/02/2019 | EUR | 0.88 | 01/02/2019 | USD |
| 3 | 01/03/2019 | 100 | 3000 | GBP | 1.3 | 01/03/2019 | EUR | 0.85 | 01/03/2019 | USD |
| 4 | 01/04/2019 | 100 | 4000 | GBP | 1.4 | 01/04/2019 | EUR | 0.82 | 01/04/2019 | USD |

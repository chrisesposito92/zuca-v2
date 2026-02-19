---
title: "Allocation in functional currency"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-functional-currency"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:41.022Z"
---

# Allocation in functional currency

This reference explains the allocation process in a multi-currency contract, focusing on functional and reporting currencies, with USD as the reporting currency and EUR as the functional currency.

In the following example, the different transaction currencies depict a multi-currency contract. The reporting currency is USD, according to the REPORTING\_CURRENCY profile. The MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to the Lowest Common Currency.

| Line No | SO Book Date | Company Code | Amount | T.Curr | F.Ex.Rate | F.Ex.Date | F.Curr | G.Ex.Rate | G.Ex.Date | G.Curr |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | 100 | 1000 | EUR | 1.0 | 01/01/2019 | EUR | 0.90 | 01/01/2019 | USD |
| 2 | 01/02/2019 | 100 | 2000 | GBP | 1.2 | 01/02/2019 | EUR | 0.88 | 01/02/2019 | USD |
| 3 | 01/03/2019 | 100 | 3000 | USD | 1.3 | 01/03/2019 | EUR | 0.85 | 01/03/2019 | USD |
| 4 | 01/04/2019 | 100 | 4000 | GBP | 1.4 | 01/04/2019 | EUR | 0.82 | 01/04/2019 | USD |

In this multi-currency contract, all the lines have the same functional currency, so the allocations happen in the functional currency (EUR). The functional exchange rate, which is used to calculate the allocations, is based on the line-level exchange rates. The reporting exchange rate for posting allocations is determined based on the minimum Sales Order Book Date of 01/01/2019 in this example, so the reporting exchange rate is 0.90.

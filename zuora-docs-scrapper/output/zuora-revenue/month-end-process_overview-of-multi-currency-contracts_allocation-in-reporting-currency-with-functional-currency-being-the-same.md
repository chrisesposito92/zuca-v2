---
title: "Allocation in reporting currency with functional currency being the same"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/overview-of-multi-currency-contracts/allocation-in-reporting-currency-with-functional-currency-being-the-same"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:36.115Z"
---

# Allocation in reporting currency with functional currency being the same

In the following example, the different transaction currencies depict a multi-currency contract. The reporting currency is USD, according to the REPORTING\_CURRENCY profile. The MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Reporting Currency.

| Line No | SO Book Date | Company Code | Amount | T.Curr | F.Ex.Rate | F.Ex.Date | F.Curr | G.Ex.Rate | G.Ex.Date | G.Curr |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | 100 | 1000 | EUR | 1.0 | 01/01/2019 | EUR | .90 | 01/01/2019 | USD |
| 2 | 01/02/2019 | 100 | 2000 | GBP | 1.2 | 01/02/2019 | EUR | .88 | 01/02/2019 | USD |
| 3 | 01/03/2019 | 100 | 3000 | USD | 1.3 | 01/03/2019 | EUR | .85 | 01/03/2019 | USD |
| 4 | 01/04/2019 | 100 | 4000 | GBP | 1.4 | 01/04/2019 | EUR | .82 | 01/04/2019 | USD |

Although the functional currencies for all lines are the same, allocations happen in the reporting currency (USD) as specified by the MULTI\_CURR\_FV\_REPORT\_LEVEL profile. The reporting exchange rate, used to calculate allocations, is based on the line-level exchange rates. When allocations are posted, Zuora Revenue derives the functional exchange rate based on the 1/reporting exchange rate at the line level. The reporting currency exchange rate for posting is the line-level reporting exchange rate.

---
title: "Allocation in reporting currency"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/multi-currency-contracts/allocation-in-reporting-currency"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:40.611Z"
---

# Allocation in reporting currency

Explains allocation in a multi-currency contract with USD as the reporting currency, detailing the calculation of allocations using line-level exchange rates and derivation of the functional exchange rate.

In the following example, the different transaction currencies depict a multi-currency contract. The reporting currency is USD, according to the REPORTING\_CURRENCY profile. The MULTI\_CURR\_FV\_REPORT\_LEVEL profile is set to Lowest Common Currency.

| Line No | SO Book Date | Company Code | Amount | T.Curr | F.Ex.Rate | F.Ex.Date | F.Curr | G.Ex.Rate | G.Ex.Date | G.Curr |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2019 | 100 | 1000 | EUR | 1.0 | 01/01/2019 | EUR | .80 | 01/01/2019 | USD |
| 2 | 01/02/2019 | 200 | 2000 | GBP | 1.0 | 01/02/2019 | GBP | .70 | 01/02/2019 | USD |
| 3 | 01/03/2019 | 300 | 3000 | USD | 1.0 | 01/03/2019 | USD | 1.0 | 01/03/2019 | USD |
| 4 | 01/04/2019 | 400 | 4000 | GBP | 1.0 | 01/04/2019 | GBP | .72 | 01/04/2019 | USD |

The functional currencies of all the lines are different, so allocations happen in the reporting currency (USD). The reporting exchange rate, used to calculate allocations, is based on the line-level exchange rates. When allocations are posted, Zuora Revenue derives the functional exchange rate based on the 1/reporting exchange rate at the line level. The reporting currency exchange rate for posting is the line-level reporting exchange rate.

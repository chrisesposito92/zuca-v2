---
title: "Currency mapping"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/mapping-between-zuora-billing-and-zuora-revenue/currency-mapping"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:36.870Z"
---

# Currency mapping

Map currencies in Billing to currencies in Zuora Revenue

Transactions in Zuora Billing or Zuora Revenue can be conducted in various currencies. Since multi-currency transactions are supported in both systems, it is important to understand how currencies in Billing are mapped to currencies in Zuora Revenue.

## Currency mapping between Zuora Billing and Zuora Revenue

The following table describes the currency mapping relationships between the two systems:

| Zuora currency type | Zuora Revenue currency type | Description |
| --- | --- | --- |
| Rate Plan Charge currency | Transactional currency | It is the currency in which the transactions are actually conducted. In Zuora Billing, it is the currency of the Rate Plan Charge and is derived from the Customer Account. |
| Entity currency | Functional currency | It is the home currency in which either Zuora Billing entity or Zuora Revenue entity operates. |
| N/A | Global currency | It is the reporting currency in which your Zuora Revenue entity publishes financial statements. |

## Derivation of exchange rates

Although the transaction currency can be quite different, all transaction lines in Zuora Revenue must use a common currency for allocation or reporting purpose. Zuora Revenue uses the following exchange rates to convert currencies:

-   Func Ex Rate: Functional exchange rate, which is the exchange rate from the transaction currency to the functional currency.

-   Global Ex Rate : Reporting exchange rate, which the exchange rate from the functional currency to the reporting currency.


The Data Sync job populates the currency exchange rate data into exchange rate tables on a daily basis. The date used to determine the exchange rate is dependent on the data type:

-   For booking data: Billing - Revenue Integration takes the sales order date as the exchange rate date to populate the exchange rate into Zuora Revenue.

-   For billing data: Billing - Revenue Integration syncs the exchange rate date and the corresponding exchange rate from Zuora Billing into Zuora Revenue. See [Sync exchange rate from Zuora Billing into Zuora Revenue](/zuora-revenue/advanced-revenue-operations/sync-currency-exchange-rate-for-billing-documents) for more information.


If the exchange rate on a specific date is not available in the system, Zuora Revenue uses the last available exchange rate.

## Example

For example, a transaction that takes place in Zuora is in a currency different from the functional currency in Zuora Revenue. The following SO line is added to the revenue contract. Note that some column headers are abbreviated as below:

-   T.Curr: Transaction currency.
-   F.Curr: Functional currency.
-   G.Curr: Reporting currency.

| SO date | Subscription | Charge num | Charge contractual value | T.Curr | Exchange rate date | Func Ex Rate | F.Curr | Global Ex Rate | G.Curr |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01-Jun-19 | A-100000 | C-1 | 100 | EUR | 01-Jun-19 | 1.12 | USD | 1 | USD |

In this scenario, the revenue contract is allocated in the functional currency. Therefore, Zuora Revenue populates the functional exchange rate and the corresponding date in this SO line. The exchange rate will be used to convert the contractual value in EUR to the value in USD for allocation.

See [Multi-currency](/zuora-revenue/month-end-process/multi-currency-contracts) contracts for more information on how Zuora Revenue handles multi-currency contracts.

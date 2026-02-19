---
title: "Sync currency exchange rate examples"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/sync-currency-exchange-rate-for-billing-documents/sync-currency-exchange-rate-examples"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:57.785Z"
---

# Sync currency exchange rate examples

Examples of sync currency exchange rate for billing documents

For example, a transaction is conducted in EUR through Zuora Billing, but the home currency for your Zuora tenant is USD. You use Oanda as the exchange rate provider.

-   The Invoice Date for this transaction is January 1, 2019, where the exchange rate is 0.75.

-   The Invoice Post Date for this transaction is December 31, 2018, where the exchange rate is 0.77.


After you have completed the configuration to sync exchange rates from Zuora Billing to Zuora Revenue, the transaction line in Zuora Revenue is as below:

| Transaction | Transaction amount | Currency | Home currency | Invoice date | Exchange Rate | Exchange Rate Date |
| --- | --- | --- | --- | --- | --- | --- |
| INV | 100 | EUR | USD | 2019-01-01 | 0.77 | 2018-12-31 |

Without the preceding Zuora Billing settings and Zuora Revenue profile being correctly configured, no exchange rate is synced. Zuora Revenue populates the exchange rate on the invoice date during data transformation. If the exchange rate on the invoice date is not available in the system, Zuora Revenue uses the last available exchange rate.

In this case, the data that is synced to Zuora Revenue Pre-staging tables is as follows:

| Transaction | Transaction amount | Currency | Home currency | Invoice Date |
| --- | --- | --- | --- | --- |
| INV | 100 | EUR | USD | 2019-01-01 |

After data transformation, the exchange rate is populated automatically. The corresponding transaction line in Zuora Revenue Staging tables is as follows:

| Transaction | Transaction amount | Currency | Home currency | Invoice Date | Exchange Rate |
| --- | --- | --- | --- | --- | --- |
| INV | 100 | EUR | USD | 2019-01-01 | 0.75 |

Because Zuora Billing uses 0.77 as the exchange rate, the billing data mismatch occurs between Zuora Billing and Zuora Revenue. Therefore, it is recommended that you sync the exchange rate from Zuora Billing into Zuora Revenue. By doing so, Zuora Revenue uses the same exchange rate as Zuora Billing, which avoids the data discrepancy between the two systems.

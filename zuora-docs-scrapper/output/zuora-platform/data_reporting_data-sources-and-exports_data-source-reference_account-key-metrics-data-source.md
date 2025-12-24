---
title: "Account Key Metrics data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/account-key-metrics-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:46.838Z"
---

# Account Key Metrics data source

Data source to export data about key account metrics by currency

Use the Account Key Metrics data source to export data about key account metrics by currency.

Navigate to Reporting > Data Sources and select Account Key Metrics from the Data Source list in the Basic Information section. To export data about key account metrics by currency, see Generate a data source export .

This data source is available only if you have the Multiple Currencies feature enabled.

## Base object

The following table lists the fields available in the Invoice Schedule base object.

| Object | Description |
| --- | --- |
| Account Key Metrics | The key account metrics by currency. This object contains the following fields:CMRRCreated By IDCreated DateCurrencyIDLast Invoice DateReversed Payment AmountTotal Debit Memo BalanceTotal Invoice BalanceUnapplied BalanceUnapplied Credit Memo AmountUpdated By IDUpdated Date |

## Related objects

The following table lists the related objects of the Invoice Schedule object in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The customer account that the key metrics by currency is about. For a list of available fields on this object, see Account data source. |
| Bill To | The contact of the entity or person to whom you bill for your product or service. For a list of available fields on this object, see Contact data source. |
| Default Payment Method | The default payment method to be used for making payments. For a list of available fields on this object, see Payment Method data source. |
| Parent Account | The parent account associated with the customer account, if applicable. For a list of available fields on this object, see Account data source. |
| Sold To | The contact of the entity or person to whom your product or service is sold. For a list of available fields on this object, see Contact data source. |

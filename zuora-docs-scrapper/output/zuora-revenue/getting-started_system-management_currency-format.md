---
title: "Currency format"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/currency-format"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:22:56.992Z"
---

# Currency format

Learn how to configure currency formats and manage exchange rates in Zuora Revenue for accurate revenue recognition.

Currency is one of the basic system configurations in Zuora Revenue. All currencies are predefined in Zuora Revenue with standard currency codes during the Zuora Revenue implementation phase. You can configure the display format and number rounding for the currency that you will use in Zuora Revenue.

## Overview

All transactions are processed based on three currencies:

-   Transaction currency
-   Functional currency (also known as base currency or company code currency)
-   Reporting currency (also known as consolidation currency)

For billing-based revenue recognition, exchange rates are obtained from your ERP systems and populated in Zuora Revenue. Then, all billing based revenue is recorded based on the rate at the time of billing.

For unbilled revenue recognition, either the exchange rate as of the order book date or the exchange rate of the current period can be used. When the actual billing occurs, Zuora Revenue reverses the revenue that is originally booked based on the original exchange rate, and then re-book the revenue entries based on the exchange rate from the billing transaction.

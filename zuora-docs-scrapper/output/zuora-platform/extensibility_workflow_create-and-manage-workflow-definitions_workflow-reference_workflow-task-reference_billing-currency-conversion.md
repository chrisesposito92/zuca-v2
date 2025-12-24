---
title: "Billing: Currency Conversion"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-currency-conversion"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:08.053Z"
---

# Billing: Currency Conversion

This reference describes the Billing: Currency Conversion task.

The currency conversion task converts values of selected data fields from one currency to another using exchange rates from exchange rate providers. Currently, Oanda is the only supported exchange rate provider. To use this task, you need to have access to the exchange rate service of Oanda.

The exchange rates are averaged for the 24-hour period ending at 22:00 UTC (Coordinated Universal Time) on the day before Oanda posts them. The bid rate is used.

To learn more about currency conversion in Zuora, see [Foreign currency conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion).

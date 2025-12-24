---
title: "Sync currency exchange rate for billing documents"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/sync-currency-exchange-rate-for-billing-documents"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:15.369Z"
---

# Sync currency exchange rate for billing documents

Know how exchange rates on billing documents can be synced from Zuora Billing to Zuora Revenue

For multi-currency transactions, Zuora Billing uses either Invoice Post Date or Invoice Date as the exchange rate date for billing transactions depending on which date is earlier. In addition, Zuora Billing gives you the flexibility to customize the currency conversion configuration based on your business requirements. However, Zuora Revenue uses Invoice Date as the exchange rate date by default. The behavior discrepancy between Zuora Billing and Zuora Revenue can potentially result in issues when you reconcile two systems.

So we recommend that you sync the transaction-level exchange rate from Zuora Billing into Zuora Revenue. It guarantees that the exchange rate for billing transactions is consistently used across the two systems. The RevPro3.0 Billing Fxrate Sync Process program is provided and can be scheduled to run on a daily basis.

## Prerequisites

To sync the exchange rate for billing items from Zuora Billing into Zuora Revenue, complete the following configuration on both applications:

[Zuora Billing configuration](#concept-6wfbyiup__zuora_billing_configuration)

[Zuora Revenue configuration](#concept-6wfbyiup__zuora_revenue_configuration)

## Zuora Billing configuration

-   Ensure that the Currency Conversion feature has been enabled for your Zuora tenant. Contact [Zuora Support](https://support.zuora.com/) to enable this feature.

-   Navigate to Finance Settings > Manage Currency Conversion in the Zuora UI to select the Automatically include additional Currency Conversion information in data source exports check box. For more information, see [Manage Currency Conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion).


## Zuora Revenue configuration

-   Ensure that the value for the KS\_ENABLE\_ZBILL\_EXCHG\_RATE profile is set to Y. This profile indicates whether to sync the exchange rate from Zuora Billing. The default value is Y. Navigate to Setups > Application > Profiles in the Zuora Revenue UI to check its value.

-   (Optional): Configure the BILLING\_EXCHANGE\_RATE\_DATE profile as needed. This profile is set to Latest Rate Available by default. If you change this profile to Rate On Specified Date, the rate on the SO date will be used for SO transactions and the rate on the invoice date will be used for billing transactions. If the exchange rate on the SO date or invoice date is not available, an error message will be displayed.


For information on the Run RevPro3.0 Billing Fxrate Sync Process, refer to [Run RevPro3.0 Billing Fxrate Sync Process](/zuora-revenue/advanced-revenue-operations/sync-currency-exchange-rate-for-billing-documents/run-revpro3.0-billing-fxrate-sync-process).

## Result

As a result, the following fields are obtained from Zuora Billing using data source or AQuA and first synced into Zuora Revenue Pre-staging tables:

-   <Object>.ExchangeRate

-   <Object>.ExchangeRateDate


The <Object> can be one of the following supported Zuora Billing objects:

-   InvoiceItem

-   InvoiceItemAdjustment

-   CreditMemoItem

-   DebitMemoItem


For examples, refer to [Examples](/zuora-revenue/advanced-revenue-operations/sync-currency-exchange-rate-for-billing-documents/examples)

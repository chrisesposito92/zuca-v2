---
title: "Upload exchange rates to Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/upload-exchange-rates-to-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:20.510Z"
---

# Upload exchange rates to Zuora Revenue

Learn how to upload exchange rates to Zuora Revenue to enable exchange rate conversion for various reports, ensuring accurate reporting currency fields.

Exchange rate conversion is supported for the following reports. After you upload exchange rates to Zuora Revenue, the system can derive the reporting currency fields based on the uploaded exchange rates for these reports.

-   Revenue Insight
-   Waterfall Report
-   RC Rollforward Report
-   Unsatisfied POB Balances
-   Revenue Summary
-   Billing RollForward Report
-   Trial Balance Report

## Prerequisites

Before you start uploading the exchange rate, make sure the following requirements are met:

-   Ensure that the required report layout is configured to add the reporting currency fields. For more information about how to edit the report layout, see [Edit layout](/zuora-revenue/month-end-process/reports/work-with-reports#concept-dlkb68eg__title-412) .

-   Enable the exchange rate conversion in the system. To do this, navigate to Setups > Applications > Profiles and set the ENABLE\_SOURCE\_R\_EX\_RATE profile to Yes .

## Procedure

Complete the procedure [explained here](/zuora-revenue/month-end-process/reports/upload-exchange-rates-to-zuora-revenue/procedure-to-upload-exchange-rate) to upload the exchange rate to Zuora Revenue:

## What to do next

After the exchange rates are successfully uploaded, you can run the supported reports based on the layout configured with the reporting currency fields. For general instructions, see [Run reports](/zuora-revenue/month-end-process/reports/work-with-reports#concept-dlkb68eg__title-978) .

Note:

-   Every month, all the functional currency and its reporting currency conversion exchange rate(only incremental) must be manually uploaded to Zuora Revenue. Otherwise, the system cannot derive the reporting currency fields for the supported reports.
-   If any correction is needed, you can re-upload the exchange rates at any time. Zuora Revenue will automatically use the latest data available for the respective month.

## Limitations

Be aware of the following limitations when you enable exchange rate conversion for the supported reports:

-   Exchange rate conversion is not applicable when the Aggregate Flag is enabled in the layout for RC Rollforward, Revenue Insight, and Waterfall reports.
-   The following reporting currency fields are calculated based on the reporting currency from the transactional tables, which are not applicable to using the uploaded reporting currency exchange rates. These fields will still display the original amount in Reporting currency.

    -   Invoice Amount (R)
    -   Ext Sell Price (R)
    -   Ext List Price (R)
    -   Billed - Unreleased Revenue (R)
    -   Ext SSP Price (R)
    -   Unreleased Revenue (R)
    -   Released Revenue (R)
    -   Billed - Released Revenue (R)

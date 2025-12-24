---
title: "VC impact on Workbench"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-impact-on-workbench"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:32:01.434Z"
---

# VC impact on Workbench

The VC impact on the Workbench is reflected in various tabs, detailing price adjustments, transaction pricing, and revenue calculations.

The processed VC will be reflected on the Revenue Contract Detail page in the Workbench from the following aspects.

## Overview tab

-   When an RC is associated with either system applied VC or manually uploaded VC, the Price Adjustment value is calculated based on the corresponding VC formula. The value will change for every adjustment (increase or decrease) through estimates or actuals by VC uploads.

-   The Transaction Price value is equal to the adjusted revenue contract value.

-   The Revenue To Date value will be calculated as equal to the sum of revenue, allocations, and the VC revenue that are scheduled in the current period.


## Contracts/Orders tab

-   The price adjustment details, estimated amount, cleared amount, and VC type details for each line can be viewed by clicking Line Details > Transaction Pricing .

-   The released, adjusted, or cleared amount for each line can be tracked by clicking Line Details > VC Actions .


## Waterfall tab

If the appropriate waterfall type is defined for the VC account, waterfall data is available for that account.

## Revenue Summary tab

The accrued VC amount is displayed as VC Liability amount until it is cleared when actuals are brought in. The accrued VC amount is calculated based on the total amount booked, the percentage of billing, or the percentage of revenue released.

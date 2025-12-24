---
title: "Adjustment revenue release"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/adjustment-revenue-release"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:31.410Z"
---

# Adjustment revenue release

This document explains the calculation of released adjustment revenue in Zuora Revenue, detailing both retrospective and prospective allocation methods.

In Zuora Revenue, the released percentage of adjustment revenue follows the released percentage of contractual revenue. To facilitate reporting on contractual revenue and adjustment revenue separately, the revenue release calculations are done separately for contractual revenue and adjustment revenue.

The following sections explain how released adjustment revenue is calculated in retrospective allocation and prospective allocation.

Note:

All the calculated revenue amount is rounded based on the currency setting in the system. For more information, see [Configure currency format](/zuora-revenue/getting-started/system-management/currency-format).

## Retrospective allocation

To derive the released adjustment revenue and net revenue in retrospective allocation, Zuora Revenue does the following calculations step by step:

1.  Calculate the released contractual revenue at the line level based on the released percentage that is received from the upstream system. The following formula is used to calculate.

    Released contractual revenue = Net Sell Price \* Released percentage

2.  Calculate the released percentage internally based on the rounded released contractual revenue from Step 1. The following formula is used.

    Released percentage = Released contractual revenue / Net Sell Price

    Note: This released percentage is an internal reference column. It does not represent the combined released percentage that is used for contractual and adjustment amounts.

3.  Calculate the released adjustment revenue based on the released percentage (from Step 2) of the carves adjustment.

    Released adjustment revenue = Carves adjustment \* Released percentage

4.  Calculate the net revenue based on the following formula:

    Net revenue = Released contractual revenue + Released adjustment revenue


## Prospective allocation

To derive the released adjustment revenue and net revenue in prospective allocation, Zuora Revenue does the following calculations step by step:

1.  Calculate the released contractual revenue at the line level based on the released percentage that is received from the upstream system. The following formula is used to calculate. The calculated released contractual revenue is rounded to two decimal places.

    Released contractual revenue = Net Sell Price \* Released percentage

2.  Calculate the released percentage internally based on the rounded released contractual revenue from Step 1. The following formula is used.

    Released percentage = Released contractual revenue / Net Sell Price

    Note: This released percentage is an internal reference column. It does not represent the combined released percentage that is used for contractual and adjustment amounts
    .

3.  Calculate the released adjustment revenue based on the released percentage (from Step 2) of the carves adjustment. The result will be rounded based on the system currency configuration.

    Released adjustment revenue = Carves adjustment \* Released percentage

4.  When an amendment happens to the contract, the released percentage is recalculated based on the remaining contractual revenue (which is unposted contractual revenue). The remaining adjustment revenue will be released based on the new released percentage. The following calculations are involved in sequence:

    1.  Remaining contractual revenue = Total contractual revenue - posted contractual revenue (line-level)
    2.  New released percentage = Released contractual revenue / Remaining contractual revenue
    3.  Remaining adjustment revenue = Cumulative carves - Released adjustment revenue (from Step 3)
    4.  Released adjustment revenue = Remaining adjustment revenue\* New released percentage

    The posted percentage (Posted%) is also calculated upon contract modification that triggers prospective allocation. The posted percentage is applicable for prospective allocation calculations only and is determined based on the following formula:

    Posted percentage = Posted contractual revenue / Net Sell Price


## Example

The following example shows the difference between retrospective allocation and prospective allocation when contract amendment occurs. In the beginning, schedules for contractual revenue and adjustment revenue are as follows. Revenue has been released and posted from January to March. In the current period Apr-2021, adjustment revenue is changed from $120 to $180.

| Contractual Revenue | Revenue Start Date | Revenue End Date | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total = 1200 | 1/1/2021 | 12/31/2021 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |
| Adjustment Revenue | Revenue Start Date | Revenue End Date | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| Total = 120 | 1/1/2021 | 12/31/2021 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 |

In retrospective allocation, based on the formulas listed in the above section, the released adjustment revenue should be changed to $15 for every month. There is a catch-up of $5 every month from January to March because revenue has been posted for the three months. In April, the total released adjustment revenue is the sum of the released adjustment revenue for that month and the catch-up for the posted periods. Schedules for the adjustment revenue after amendment are shown in the bottom row of the table.

| Adjustment Revenue | Revenue start date | Revenue End date | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total = 120 | 1/1/2021 | 12/31/2021 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 |
| Total = 180 | 1/1/2021 | 12/31/2021 | 10 | 10 | 10 | 30 | 15 | 15 | 15 | 15 | 15 | 15 | 15 | 15 |

In prospective allocation, the released adjustment revenue is $30 before the amendment occurs. So the total remaining adjustment revenue is $150. The total remaining contractual revenue is $900. From April to December, the new released percentage is 100/900. So the released adjustment revenue for each month is $16.67 (=150\*100/900). There is no catch-up for the posted periods.

| Adjustment Revenue | Revenue Start date | Revenue End date | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total = 120 | 1/1/2021 | 12/31/2021 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 |
| Total = 180 | 1/1/2021 | 12/31/2021 | 10 | 10 | 10 | 16.67 | 16.67 | 16.67 | 16.67 | 16.67 | 16.67 | 16.67 | 16.67 | 16.64 |

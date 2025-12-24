---
title: "Understand Revenue from Prior/Current period Satisfied POBs Report"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/understand-revenue-from-priorcurrent-period-satisfied-pobs-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:28:50.096Z"
---

# Understand Revenue from Prior/Current period Satisfied POBs Report

The "Revenue from Prior/Current period Satisfied POBs" report in Zuora Revenue helps distinguish revenue from prior accounting periods from current period revenue, providing insights into entity performance at the line level.

As one of the critical disclosure requirements, revenue from the prior accounting periods must be separated from the current accounting period revenue. To meet this requirement, the Revenue from Prior/Current period Satisfied POBs report is provided under the Revenue category in Zuora Revenue to display the revenue from prior and current accounting periods at the line level. You can use this report to get insights into the performance of the entity for the current accounting period.

## Overview

The Revenue from Prior/Current period Satisfied POBs report displays both the revenue from the prior period/quarter/year and the revenue from the current period/quarter/year for each transaction line based on the layout selected.

This reported value is the summation of both contractual revenue and allocation revenue and contains the data points for each transaction line as shown in the following table. The determination of the prior period/quarter/year and the current period/quarter/year is based on the accounting calendar that is set up in Zuora Revenue.

| Column header | Description |
| --- | --- |
| Rev From Prev Sat POBs - PTD | Sum of revenue from POBs that are satisfied in all prior periods in the current period. |
| Rev From Prev Sat POBs - QTD | Sum of revenue from POBs that are satisfied in all prior quarters in the current period. |
| Rev From Prev Sat POBs - YTD | Sum of revenue from POBs that are satisfied in all prior years in the current period. |
| Rev From Cur Sat POBs - PTD | Revenue from POBs that are satisfied in the current period. |
| Rev From Cur Sat POBs - QTD | Sum of revenue from POBs that are satisfied in the current quarter as of the current period. |
| Rev From Cur Sat POBs - YTD | Sum of revenue from POBs that are satisfied in the current year as of the current period. |
| Total Rev Activity - PTD | Total amortization revenue for the current period. |
| Total Rev Activity - QTD | Total amortization revenue for the current quarter as of the current period. |
| Total Rev Activity - YTD | Total amortization revenue for the current year as of the current period. |

## Supported ratable methods

When the revenue catch-up occurs in the current accounting period, the total amortization revenue for the current accounting period will include all the prior accounting period changes. Revenue catch-up occurs in one of the following circumstances:

-   The performance obligation is satisfied however the line is collected in Zuora Revenue in a later period.

-   Amendment occurs to the line in the current accounting period, which has a cumulative catch-up.


The POB ratable methods play a significant role in determining the revenue for the current accounting period. This value includes some amount as revenue catch-up for the POB that was satisfied in the previous period/quarter/year. The following POB ratable methods might result in catch-up of revenue in the current period:

-   Ratable Method

-   Contract Ratable

-   Invoice Ratable

-   Mid Month Ratable

-   Next Month Ratable

-   Fixed Duration


If any transaction line is based on POB with the Immediate ratable method, there won't be any revenue catch-up. So, there is no need to calculate the revenue for the prior accounting periods.

## Limitations

When you use the Revenue from Prior/Current period Satisfied POBs report, be aware of the following limitations:

-   The schedules for RORD (reduction order) transactions are not included in this report.
-   If a transaction is based on the POB with the User Defined Schedule ratable method, the transaction is not included in this report.

## Transaction line examples

Examples are provided for one transaction line in different catch-up scenarios to help you understand how revenue is calculated for the Revenue from Prior/Current period Satisfied POBs report.

## Accounting calendar settings

For all the examples, the accounting calendar is set up in Zuora Revenue as follows:

| Period name | Period # | Period start date | Period end date |
| --- | --- | --- | --- |
| JAN-19 | 1 | 01-Jan-2019 | 31-Jan-2019 |
| FEB-19 | 2 | 01-Feb-2019 | 28-Feb-2019 |
| MAR-19 | 3 | 01-Mar-2019 | 31-Mar-2019 |
| APR-19 | 4 | 01-Apr-2019 | 30-Apr-2019 |
| MAY-19 | 5 | 01-May-2019 | 31-May-2019 |
| JUN-19 | 6 | 01-Jun-2019 | 30-Jun-2019 |
| JUL-19 | 7 | 01-Jul-2019 | 31-Jul-2019 |
| AUG-19 | 8 | 01-Aug-2019 | 31-Aug-2019 |
| SEP-19 | 9 | 01-Sep-2019 | 30-Sep-2019 |
| OCT-19 | 10 | 01-Oct-2019 | 31-Oct-2019 |
| NOV-19 | 11 | 01-Nov-2019 | 30-Nov-2019 |
| DEC-19 | 12 | 01-Dec-2019 | 31-Dec-2019 |

The accounting calendar for quarters is as follows:

| Quarter # | Quarter start date | Quarter end date |
| --- | --- | --- |
| 1 | 01-Jan-2019 | 31-Mar-2019 |
| 2 | 01-Apr-2019 | 30-Jun-2019 |
| 3 | 01-Jul-2019 | 30-Sep-2019 |
| 4 | 01-Oct-2019 | 31-Dec-2019 |

| Quarter # | Quarter start date | Quarter end date |
| --- | --- | --- |
| 1 | 01-Jan-2019 | 31-Mar-2019 |
| 2 | 01-Apr-2019 | 30-Jun-2019 |
| 3 | 01-Jul-2019 | 30-Sep-2019 |
| 4 | 01-Oct-2019 | 31-Dec-2019 |

The accounting calendar for years is as follows:

| Year # | Year start date | Year end date |
| --- | --- | --- |
| 2018 | 01-Jan-2018 | 31-Dec-2018 |
| 2019 | 01-Jan-2019 | 31-Dec-2019 |

## Example 1 - PSat PP and CSat CP

In this example, a line with the contract value of $1200 starts on January 1, 2019, and ends on December 31, 2019. According to the POB ratable method, the amortization revenue for each month should be $100. However, this line is collected in Zuora Revenue in the MAY-19 period. So, there will be revenue catch-up for the past 4 months in May.

| Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 500 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 1200 |

The amortization revenue for May is $500, which contains both the revenue for the current period and the revenue for the prior periods. The current period revenue is expected to be $100. So the revenue for the prior period can be calculated based on the following formula, which is 400 (= 500-100) in this example.

Prior period revenue = Total revenue of the current period - Current period revenue

-   Total revenue for MAY-19 = 500
-   Current period revenue for MAY-19 = 100
-   Prior period revenue for MAY-19 = 400

## Example 2 - PSat PP and CSat CP

In this example, a line with the contract value of $1200 starts on January 1, 2019, and ends on December 31, 2019. This line is collected in Zuora Revenue in the JAN-19 period. According to the POB ratable method, the amortization revenue for each month is $100.

| Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 1200 |

The current open period is JUL-19. Revenue has been posted from January to June. In July, the amendment occurs for $960 to this line. There will be revenue catch-up in the current period.

After the amendment, the revenue from January to July should be 560 (= 80\*7). The revenue recognized from January to June is 600. So, the amortization revenue for July should be -40 (= 560-600), which includes both the current period revenue and the prior period revenue.

| Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100 | 100 | 100 | 100 | 100 | -40 | 80 | 80 | 80 | 80 | 80 | 960 |

When you run Revenue from Prior/Current Satisfied POBs report for the JUL-19 period, the current period revenue is 80, so the prior period revenue should be -120 (= -40-80).

-   Total revenue for JUL-19 = -40
-   Current period revenue for JUL-19 = 80
-   Prior period revenue for JUL-19 = -120

## Example 3 - PSat PQ and CSat CQ

Similar to Example 1, a line with the contract value of $1200 starts on January 1, 2019, and ends on December 31, 2019. According to the POB ratable method, the amortization revenue for each month should be $100. However, this line is collected in Zuora Revenue in the MAY-19 period. So, there will be revenue catch-up for the past 4 months in May. The amortization revenue contains both the revenue for the current quarter and the revenue for the prior quarter.

| Q1 | Q2 |  | Q3 |  | Q4 | Total | Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec |  |  |  |  |  |  |  |  |
| 0 | 0 | 0 | 0 | 500 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 1200 |  |  |  |  |  |  |  |

The current quarter revenue as of May is expected to be $200 ($100 for each month). So the revenue for the prior quarter can be calculated based on the following formula, which is $300 (= 500-200) in this example.

Prior quarter revenue = Total revenue of the current quarter - Current quarter revenue

-   Total revenue for Q2 as of MAY-19 = 500
-   Current quarter revenue for Q2 as of MAY-19 = 200
-   Prior quarter revenue for Q2 as of MAY-19 = 300

## Example 4 - PSat PQ and CSat CQ

Similar to Example 2, a line with the contract value of 1200 starts on January 1, 2019, and ends on December 31, 2019. This line is collected in Zuora Revenue in the JAN-19 period. According to the POB ratable method, the amortization revenue for each month is $100.

| Q1 | Q2 |  | Q3 |  | Q4 | Total | Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec |  |  |  |  |  |  |  |  |
| 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 1200 |  |  |  |  |  |  |  |

The current open period is MAY-2019. Revenue has been posted from January to April. In May, the amendment occurs for $840 to this line. There will be revenue catch-up in the current period.

After the amendment, the revenue from January to May should be $350 (= 70\*5). The revenue recognized from January to April is $400. So, the amortization revenue for May should be -50 (= 400-350).

| Q1 | Q2 |  | Q3 |  | Q4 | Total | Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Jan | Feb | Mar | Apr | May | Jun | July | Aug | Sep | Oct | Nov | Dec |  |  |  |  |  |  |  |  |
| 100 | 100 | 100 | 100 | -50 | 70 | 70 | 70 | 70 | 70 | 70 | 70 | 840 |  |  |  |  |  |  |  |

When you run Revenue from Prior/Current Satisfied POBs report for the MAY-19 period, the amortization revenue for Q2 as of May is 50 (100 for April and -50 for May). It includes the current quarter revenue and the prior quarter revenue. The current quarter revenue should be 140 (70 for each month). Then, the prior quarter revenue is -90 (= 50-140).

-   Total revenue for Q2 as of MAY-19 = -50
-   Current quarter revenue for Q2 as of MAY-19 = 70
-   Prior quarter revenue for Q2 as of MAY-19 = -90

## Example 5 - PSat PY and CSat CY

In this example, a line with the contract value of $2400 starts on January 1, 2018, and ends on December 31, 2019. According to the POB ratable method, the amortization revenue for each month should be $100. However, this line is collected in Zuora Revenue in the MAY-19 period. There will be revenue catch-up for the past 16 months. The amortization revenue for the year 2019 as of MAY-19 is $1700.

| Jan-18 | Feb-18 | Mar-18 | Apr-18 | May-18 | Jun-18 | Jul-18 | Aug-18 | Sep-18 | Oct-18 | Nov-18 | Dec-18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 500 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

| Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1700 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 2400 |

The amortization revenue ($1700) contains both the revenue for the current year and the revenue for the prior year. The current year revenue as of May is expected to be $500 (100 for each month). So the revenue for the prior year can be calculated based on the following formula, which is $1200 (= 1700-500) in this example.

Prior year revenue = Total revenue of the current year - Current year revenue

-   Total revenue for year 2019 as of MAY-19 = 1700
-   Current year revenue as of MAY-19 = 500
-   Prior year revenue as of MAY-19 = 1200

## Example 6 - PSat PY and CSat CY

In this example, a line with the contract value of $2400 starts on January 1, 2018, and ends on December 31, 2019. This line is collected in Zuora Revenue in the Jan-18 period. According to the POB ratable method, the amortization revenue for each month is $100.

n this example, a line with the contract value of $2400 starts on January 1, 2018, and ends on December 31, 2019. This line is collected in Zuora Revenue in the Jan-18 period. According to the POB ratable method, the amortization revenue for each month is $100.

| Jan-18 | Feb-18 | Mar-18 | Apr-18 | May-18 | Jun-18 | Jul-18 | Aug-18 | Sep-18 | Oct-18 | Nov-18 | Dec-18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 500 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

| Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 500 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

The current open period is MAY-19. Revenue has been posted from January 2018 to April 2019. In May, the amendment occurs for $1920 to this line. There will be revenue catch-up in the current period.

After the amendment, the revenue from January 2018 to May 2019 should be $1360 (= 80\*17). The revenue recognized from January 2018 to April 2019 is $1600. So, the amortization revenue for May should be -240 (= 1360-1600).

| Jan-18 | Feb-18 | Mar-18 | Apr-18 | May-18 | Jun-18 | Jul-18 | Aug-18 | Sep-18 | Oct-18 | Nov-18 | Dec-18 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

| Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100 | 100 | 100 | -240 | 80 | 80 | 80 | 80 | 80 | 80 | 80 | 1920 |

When you run Revenue from Prior/Current Satisfied POBs report for the MAY-19 period, the amortization revenue for the current year 2019 as of May is $160 (=100\*4-240). It includes the current year revenue and the prior year revenue. The current year revenue should be $400 (80 for each month). Then, the prior year revenue is -240 (= 160-400).

-   Total revenue for year 2019 as of MAY-19 = 160
-   Current year revenue as of MAY-19 = 400
-   Prior year revenue as of MAY-19 = -240

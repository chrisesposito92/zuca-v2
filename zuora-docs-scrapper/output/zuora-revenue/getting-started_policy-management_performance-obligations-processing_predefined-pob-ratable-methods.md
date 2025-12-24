---
title: "Predefined POB ratable methods"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/predefined-pob-ratable-methods"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:29.913Z"
---

# Predefined POB ratable methods

Predefined POB ratable methods determine how revenue is amortized in a POB template, offering options like Condense, Contract Ratable, and Immediate Using Open Period.

The Ratable Method field in a POB template determines how the revenue is to amortized based on the line duration. By default, the following ratable methods are available for your selection when you create a POB template:

-   Condense
-   Contract Ratable
-   Immediate Using Open Period
-   Immediate Using Start Date
-   Invoice Ratable
-   Mid Month Ratable
-   Next Month Ratable
-   Ratable
-   Sliding
-   User Defined Schedules

## Condense

When this ratable method is selected, revenue is scheduled ratably from the release date to the end date of the sales order line, or from the start date to the end date.

-   If the release date is later than the start date, Zuora Revenue will not do the revenue catchup and the revenue is recognized evenly from the release date to the end date.
-   If the release date is earlier than the start date, revenue will be scheduled based on the start and end dates.

Take the following sales order line for example. This line is created for $1200 from January 1 to December 31, 2019.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 |

If the current open period is Jul-2019 and 100% of revenue is released upon billing in this month. The release date is later than the start date, so revenue is recognized evenly from July to December without any revenue catchup. The released revenue is amortized as follows:
| Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- |
| 200 | 200 | 200 | 200 | 200 | 200 |

## Contract Ratable

When this ratable method is selected, revenue is scheduled based on the start and end dates of the sales order line. The invoice start and end dates are ignored.

-   If the release date is later than the start date, Zuora Revenue will do the revenue catchup from the start date to the release date.
-   If the release date is earlier than the start date, revenue will be scheduled based on the start and end dates.

Take the following sales order line for example. This line created for $1200 from January 1 to December 31, 2019. For this sales order line, the daily amortization value is calculated by dividing the total contract value (1200) by the total number of the days (365), which equals to 3.287671.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 |

If the current open period is Jan-2019 and revenue has been released for the line before January, revenue will be scheduled based on the start date and end date of the sales order line. The amortization value for each month is as follows:

| Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 days | 28 days | 31 days | 30 days | 31 days | 30 days | 31 days | 31 days | 30 days | 31 days | 30 days | 31 days |
| 101.92 | 92.05 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 |

If the current open period is Feb-2019 and revenue is released upon billing in the current period, Zuora Revenue will do the revenue catchup from January 1st to the release date in February. The amortization value for different months is as follows:

| Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 days | 28 days | 31 days | 30 days | 31 days | 30 days | 31 days | 31 days | 30 days | 31 days | 30 days | 31 days |
| 101.92 | 92.05 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 |

| Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 | 59 days | 31 days | 30 days | 31 days | 30 days | 31 days | 31 days | 30 days | 31 days | 30 days | 31 days |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 59 days | 31 days | 30 days | 31 days | 30 days | 31 days | 31 days | 30 days | 31 days | 30 days | 31 days |  |  |  |  |  |  |  |  |  |  |  |
| 193.97 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 |  |  |  |  |  |  |  |  |  |  |  |

## Invoice Ratable

When this ratable method is selected, revenue is scheduled based on the start and end dates of the invoice.

-   If the release date is later than the start date, Zuora Revenue will do the revenue catchup from the start date to the release date.
-   If the release date is earlier than the start date, revenue will be scheduled based on the start date of the invoice.

Note: This ratable method is applicable only when the revenue release event is Upon Billing

Take the following sales order line for example. The line is created for $1200 from January 1 to December 31, 2019. Revenue is released upon billing. The start date and the end date of the invoice are the same as the sales order line. The daily amortization value is calculated by dividing the total contract value (1200) by the total number of the days (365) of the invoice, which equals to 3.287671.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Invoice Start Date | Invoice End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1/1/2019 | 12/31/2019 | 1200 |

If the current open period is Jan-2019 and revenue has been released upon billing before January, revenue will be scheduled based on the start date and end date of the invoice. The amortization value for each month is as follows:

| Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 days | 28 days | 31 days | 30 days | 31 days | 30 days | 31 days | 31 days | 30 days | 31 days | 30 days | 31 days |
| 101.92 | 92.05 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 |

If the current open period is Feb-2019 and revenue is released upon billing in this period, Zuora Revenue will do the revenue catchup from January 1st (invoice start date) to the release date in February. The amortization value for different months is as follows:

| Feb 19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 59 days | 31 days | 30 days | 31 days | 30 days | 31 days | 31 days | 30 days | 31 days | 30 days | 31 days |
| 193.97 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 |

## Immediate Using Open Period

Revenue is scheduled for the current open period based on the percentage of released revenue on the sales order line. The dates of the sales order line or the dates of the release event are ignored.

Take the following sales order line for example. The line is created for $1200 from April 1 to December 31, 2019. The revenue release event is upon booking.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 4/1/2019 | 12/31/2019 | 1200 |

The current open period is Jan-2019. Although the line starts from April 1 to December 31, 2019, these dates are not considered for revenue amortization. The entire value of sales order line is amortized in the current open period. The revenue is amortized as follows:
| Jan-19 |
| --- |
| 1200 |

## Immediate Using Start Date

Revenue is scheduled based on the start date of the sales order line. The end date of the sales order line or the dates of the release event are ignored. The entire released revenue of the sales order line is scheduled at the period of the line start date. If the period of the line start date has passed, the released revenue will be amortized at the current open period.

Take the following sales order line for example. The line is created for $1200 from April 1 to December 31, 2019. The revenue release event is upon booking.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 4/1/2019 | 12/31/2019 | 1200 |

The current open period is Jan-2019. The line starts from April 1 and ends on December 31, 2019, only the start date of the sales order line is considered for revenue amortization. The released revenue of the line is amortized for the Apr-19 period as follows:
| Apr-19 |
| --- |
| 1200 |

If the current open period is Jun-2019. It means the Apr-19 period when the line starts has passed. The revenue will be amortized for the current open period as follows:
| Jun-19 |
| --- |
| 1200 |

## Mid Month Ratable

This ratable method always recognizes 50% of the monthly revenue in the first month no matter which day is the start date of the month, 100% of the monthly revenue for the subsequent months, and 50% in the last month (which is the next month after the sales order line ends). If the sales order line duration is N months, revenue recognition occurs in N+1 months.

Take the following sales order line for example. The line is created for $1200 from January 1 to December 31, 2019. Revenue is released upon booking.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 |

Revenue recognition will occur in 13 months from January 2019 to January 2020. 50% of the monthly revenue will be recognized for the first month and the last month. The revenue will be amortized as follows:

| Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 | Jan-20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 50 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 50 |

## Next Month Ratable

This ratable method represents a form of ratable sliding. Revenue recognition always starts on the 1st day of the next month no matter which day is the start date of the current month. The duration remains constant.

Take the following sales order line for example. The line is created for $1200 from January 1 to December 31, 2019. Revenue is released upon booking.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 |

The current open period is Jan-19. Revenue recognition will start from February until January 2020. The revenue will be amortized as follows:

| Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 | Jan-20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

## Ratable

When this ratable method is selected, the revenue is amortized equally for each revenue release from the start date to the end date of the sales order line. If the revenue is released after the start date of the line, the revenue catchup takes place in the current open period.

Take the following sales order line for example. This line is created for $1200 from January 1 to December 31, 2019.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price | Revenue Released (%) |
| --- | --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 | 50 |

If the current open period is Jan-2019 and 50% of the revenue is released in this period, 50% of released revenue is amortized as follows:

| Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 |

If the current open period is Feb-2019 and 50% of the revenue is released in February, which is later than the start date of the sales order line. Zuora Revenue will do the revenue catchup in the Feb-2019 period. 50% of released revenue is amortized as follows:

| Feb-19 | Mar-19 | Apr-19 | May-19 | Jun-19 | Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 |

## Sliding

When this ratable method is selected, revenue is scheduled from the release date to the calculated end date, or from the start date to the end date of the sales order line.

-   If the release date is later than the start date, Zuora Revenue will calculate the end date instead of using the actual end date of the sales order line. For example, if the release date is 30 days behind the start date, Zuora Revenue will add 30 days to the actual end date of the sales order line and recognize revenue ratably over the period. There is no revenue catchup.
-   If the release date is earlier than the start date, revenue is scheduled based on the start and end dates of the sales order line.

Take the following sales order line for example. The line is created for $1200 from January 1 to December 31, 2019.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 |

The current open period is Jul-2019 and 100% of revenue is released upon booking in July, which is six months later than the start date. The end date for revenue amortization will be in 6 months after the end date of the sales order line. The released revenue is amortized as follows:

If the system period is different from the current open period, one-day revenue is amortized.

| Jul-19 | Aug-19 | Sep-19 | Oct-19 | Nov-19 | Dec-19 | Jan-20 | Feb-20 | Mar-20 | Apr-20 | May-20 | Jun-20 | Jul-20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.29 | 101.92 | 98.63 | 101.92 | 98.63 | 101.92 | 101.92 | 95.34 | 101.92 | 98.63 | 101.92 | 98.63 | 95.33 |

## User Defined Schedules

This ratable method will recognize revenue based on the release schedule defined in the POB template. Revenue can be scheduled from the selected date for the Release Base Date field, or based on the specific POB schedules. The start and end dates of the sales order line are ignored.

Take the following sales order line for example. The line is created for $1200 from January 1 to December 31, 2019. The revenue release event is upon booking.

| Sales Order NO. | Sales Order Line NO. | Item | SO Start Date | SO End Date | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- |
| 100 | 100.1 | Training | 1/1/2019 | 12/31/2019 | 1200 |

In the POB template definition, User Defined Schedule is selected for the Ratable Method field. In the POB Schedules tab of the POB template definition window, the following schedules are added.

| Seq | Duration Type | Duration | Percent |
| --- | --- | --- | --- |
| 1 | Period(s) | 1 | 50 |
| 2 | Period(s) | 5 | 50 |

The current open period is Jan-2019. The revenue is amortized based on the specified POB schedules (50% after one period and 50% after five periods) as follows:

| Feb-19 | Jun-19 |
| --- | --- |
| 600 | 600 |

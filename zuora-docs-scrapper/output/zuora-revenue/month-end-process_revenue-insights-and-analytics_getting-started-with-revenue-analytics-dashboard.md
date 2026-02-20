---
title: "Getting started with revenue analytics dashboard"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/revenue-insights-and-analytics/getting-started-with-revenue-analytics-dashboard"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:12.290Z"
---

# Getting started with revenue analytics dashboard

Explore the revenue analytics dashboard to view, filter, and analyze revenue and booking data by product family, customer, and time period.

The revenue analytics dashboard works as an interactive and actionable management dashboard and can be accessed from the Dashboard main menu. Filter and data export functionalities are applicable for all tabs.

-   [Overview](#concept-g8vkyoax__overview_tab): This is the default tab. The Overview tab displays the total revenue and booking data as well as a breakdown of revenue by product family. You can also view the revenue and booking data by customer.

-   [Revenue Insights](#concept-g8vkyoax__Revenue_Insights_tab): Displays the detailed summary on revenue by product family, revenue contract summary, and balance.

-   [Top Bookings](#concept-g8vkyoax__Top_Bookings): Displays the top 10 bookings by customers, products, and product families.

-   [Forecast](#concept-g8vkyoax__Forecast_tab): Displays the forecasted future revenue.

-   [History](#concept-g8vkyoax__Historical_tab): Displays the revenue trends and bookings trends based on the specified filters.


The following sections describe how to view, filter, and understand the data on the revenue analytics dashboard.

## View the dashboard

To view the default dashboard, navigate to Dashboard > Revenue Analytics . The Overview tab opens by default and displays key revenue metrics. The default data displayed in each tab belongs to the current open period.

Hover your mouse over a card to see a set of icons and options to take action on the card. Hover your mouse over the filter icon on a card to see the applied set of filters. These are the same set of filters that appear on the Filters pane. For more details on the filtering options, see [Filters in dashboard](#concept-g8vkyoax__Filters_Dashboard).

Note:

Changes in your Zuora Revenue data take an average of 20 minutes to appear in the dashboard. The dashboard displays the date and time when the data was last updated.

## Overview tab

The Overview tab displays the amounts of booking data, revenue, and detailed revenue by product family view. It also provides an option to view the revenue and bookings by customers.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/43671482-26d8-4f7b-bc43-db329f98e1dc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQzNjcxNDgyLTI2ZDgtNGY3Yi1iYzQzLWRiMzI5Zjk4ZTFkYyIsImV4cCI6MTc3MTcwODc0NywianRpIjoiMzU4MDM1MTQyYjQ0NDBhN2FkMGUyNmJjYTZjNWY1YjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Mnuh2H8bc3SUr6rlOyACmzhNUTSE52UUdp8r-9rBKI4)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6bc9ad34-247b-4a7c-a2fc-c5d242d7262e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZiYzlhZDM0LTI0N2ItNGE3Yy1hMmZjLWM1ZDI0MmQ3MjYyZSIsImV4cCI6MTc3MTcwODc0NywianRpIjoiNjU0Zjg3YzFhNGFlNDlhMDliM2RmMDdmMjI0OGJjYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.xJBvF-CZwjlMAjkqyXR4ZgPWHzMynk9nM7A97k4DLk0)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8f4e5199-f3af-4768-a01c-2ec3227fbf40?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhmNGU1MTk5LWYzYWYtNDc2OC1hMDFjLTJlYzMyMjdmYmY0MCIsImV4cCI6MTc3MTcwODc0NywianRpIjoiYmRhODVmZmQwZDVkNDFkMzk5ZDE1MTc1NjdjNjI4NmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Xli7mGHIx6VBp6Z5iG7aUAFANBtzQ4dOqfq5g7_STd0)

The following cards are available in this tab. Selecting a data point on any of the cards will automatically filter all other cards as well.

| Card name | Description |
| --- | --- |
| Bookings | A filled line graph view that presents the total bookings for each month in the current financial year. You can also select any specific month for this view to interactively see the changes. |
| Revenue | A line chart that presents the total revenue and month-wise revenue breakdown. |
| Revenue by Customers | A tabular view that presents customer names, their generated revenue, and percentage of revenue contribution to the total. |
| Bookings by Customers | A tabular view that presents customer names, their generated booking value, and percentage of revenue contribution to the total. |
| Booking by Product Family | A horizontal bar chart that presents the revenue distribution based on the family of products. |

## Revenue Insights tab

The Revenue Insights tab provides a detailed summary on revenue by product family, revenue contract summary, and balance.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b8b9e30a-bdcc-4873-8056-39835278f4b8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI4YjllMzBhLWJkY2MtNDg3My04MDU2LTM5ODM1Mjc4ZjRiOCIsImV4cCI6MTc3MTcwODc0NywianRpIjoiZWIyM2UzYzZjMTczNDBmNDgzYjBjNDY3NzAyMjY2MzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.pe-yxiHvyM7RTGeL8RzsMK-rZWZWHO_IYdDvt14HAXo)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4d0fdd15-0ee9-4130-9bbb-20e4eee9b6a9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkMGZkZDE1LTBlZTktNDEzMC05YmJiLTIwZTRlZWU5YjZhOSIsImV4cCI6MTc3MTcwODc0NywianRpIjoiNzBjNTc2YzgwNGU0NGE3YWJlZWFiNmEzZjkzN2QxNjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.uTnv-mmR1ZRNFQNJ28emdv4Q8PUC7hbMbShXlIMWDVY)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/31294a37-4780-435b-8f1d-2a9b97286a95?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMxMjk0YTM3LTQ3ODAtNDM1Yi04ZjFkLTJhOWI5NzI4NmE5NSIsImV4cCI6MTc3MTcwODc0NywianRpIjoiMWQ5NDQxZGVlYjY2NGM0NDg1MTI5YjQ0ZmY3NjhmZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wh7qT8PL5UB8bIbti9g5MoJpo8OLgQgulAC5xiih7oE)

The following cards are available in this tab. Selecting a data point on any of the cards will automatically filter all other cards as well.

| Card name | Description |
| --- | --- |
| Revenue by Product Family | A tabular view and a bar chart to present the details of revenue distribution across product families. The product-level revenue distribution is further categorized into MTD, QTD, and YTD. |
| Revenue Contract Summary | A tabular view and a doughnut chart to present a summary by product family and product-level contract summary showing details into contract balance, carve balance, and allocated balance. |
| Revenue Balances | A tabular view and a doughnut chart to present a product family and product-wise distribution of billed and unbilled balance. |

## Top Bookings tab

The Top Bookings tab shows the top 10 bookings by customers, products, and product families with cards to summarize the bookings over the date, quarter, and year.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/92d84f6b-c655-4590-b870-4b708d77651b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkyZDg0ZjZiLWM2NTUtNDU5MC1iODcwLTRiNzA4ZDc3NjUxYiIsImV4cCI6MTc3MTcwODc0NywianRpIjoiNzA5Y2ExNGNiNzE0NDRjODhiOWJkN2IzNzkyNWFjYzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.b0Wzvtj1NR-kPAyk88DTZ7uiKn9xPSh7SX_mlAYfsG0)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e16e8534-a84f-4419-aba8-f30e8304cd51?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUxNmU4NTM0LWE4NGYtNDQxOS1hYmE4LWYzMGU4MzA0Y2Q1MSIsImV4cCI6MTc3MTcwODc0NywianRpIjoiZjUxNGI2OTkxMDFkNDhiOGFjYzM0MGRlODAwOTJhMDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gaQp_30wuxgtZVAoPKz9ku68BVU6xKCW3pUx9vJBcSY)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/be6eebb6-4547-4cb2-8479-8a5df28269e3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJlNmVlYmI2LTQ1NDctNGNiMi04NDc5LThhNWRmMjgyNjllMyIsImV4cCI6MTc3MTcwODc0NywianRpIjoiN2U5ZTQzMjU5YzRiNDkyZGFhMjc3ZTFmODhjZGZmNDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.N-z9-wNjkfYadusQa5AooXuGhYoPpCohWaaiiV0pT-c)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f96895fa-b563-4365-a98e-e4c9dec76e13?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY5Njg5NWZhLWI1NjMtNDM2NS1hOThlLWU0YzlkZWM3NmUxMyIsImV4cCI6MTc3MTcwODc0NywianRpIjoiYjZiNTIyOWE2MDhiNDMyNGIyMmNkNjBiMDIxNDhlMDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.63Vw1Go7I2s2r_WAZeD8ohP1PWS9oIc09LnHuqtOycs)

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/585db7f2-8933-4461-a69a-7feeced85a09?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU4NWRiN2YyLTg5MzMtNDQ2MS1hNjlhLTdmZWVjZWQ4NWEwOSIsImV4cCI6MTc3MTcwODc0NywianRpIjoiMGVhYzkxZTY3NzU5NGQ5Zjk5NDJjYTNhNjdhZGVkMjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.E7yEmJ_wIqfRH27mO9tBggs4fp4TPeoufyUf5ie_asQ)

The following cards are available in this tab. Selecting a data point on any of the cards will automatically filter all other cards as well.

| Card name | Description |
| --- | --- |
| Top 10 bookings by Customers | A tabular view and a bar chart to present the booking data contributed by the top 10 customers. The booking data includes the actual contract value and the percentage of total bookings by MTD, QTD, and YTD for each of the 10 customers. |
| Top 10 bookings by Products | A tabular view and a bar chart to present the booking data contributed by the top 10 products. The booking data includes the actual contract value and the percentage of total bookings by MTD, QTD, and YTD for each of the 10 products. |
| Top 10 bookings by Product Family | A tabular view and a bar chart to present the booking data contributed by the top 10 product families. The booking data includes the actual contract value and the percentage of total bookings by MTD, QTD, and YTD for each of the 10 product families. |

## Forecast tab

The Forecast tab displays the expected or forecasted future revenues.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f6f9fc02-f034-4ced-8b4e-5ff86b86ca54?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2ZjlmYzAyLWYwMzQtNGNlZC04YjRlLTVmZjg2Yjg2Y2E1NCIsImV4cCI6MTc3MTcwODc0NywianRpIjoiZDZmYTQxNGNkNTViNDJhNDg3NjdkYjA1ODhlMTlmNmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wtYp3Rp0hv1qdeF_sGwSgxKEBhSncTkSeg1rk5VqLHY)

The following cards are available in this tab. Selecting a data point on any of the cards will automatically filter all other cards as well.

| Card name | Description |
| --- | --- |
| Revenue by Period | A filled line graph view that presents the total, billed, and unbilled revenue projections for the selected period. You can choose a period of 1 to 10 years or UTD. |
| Revenue by Product Family | A horizontal bar chart that presents the revenue projections based on the product family. |

## Historical Tab

The Historical tab displays the revenue trends and bookings trends based on the applied filters.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1a2ce8a9-6d87-45bf-a531-7a8921e81791?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhMmNlOGE5LTZkODctNDViZi1hNTMxLTdhODkyMWU4MTc5MSIsImV4cCI6MTc3MTcwODc0NywianRpIjoiNDVjYzliMTIwYzI3NDQ3M2JiNmJmZTA3YTFjZTZjYTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.kIfq2yhbZXeBxag2Z_XyPyr3-sDtWyeD0OZ_M_9iv0g)

The historical tab displays the following cards. Selecting a data point on any of the cards will automatically filter all other cards as well.

| Card name | Description |
| --- | --- |
| Revenue Trends | A vertical bar chart that presents a comparison result of the past period revenue as per applied filters. This chart represents the revenue over time and different colors on the bars denote the month that the bar is representing. |
| Booking Trends | A vertical bar chart that presents a comparison result of the past period booking as per applied filters. This chart represents the bookings over time and different colors on the bars denote the month that the bar is representing. |

## Filters in Dashboard

You can apply one or more filters on the Analytics dashboard to interact with the report for data analysis. The Filters pane appears on the right side of the dashboard, which you can collapse and expand.

You have various options to filter the data of a dashboard. The filtering options allow you to filter data for the specific time period, organizations, currency types, and so on. You can also filter by selecting a data point on a card. Remember that the filters that you have specified for a card or a whole dashboard will not be persisted. The next time you visit this dashboard, the default data will be displayed. You can also refresh the page to reset and display the default data or use the erase option. You cannot create or add any custom filters to this dashboard.

| Filters | Description |
| --- | --- |
| Search | Enables you to search for filters by specifying the keywords. |
| Filters on this visual | The visual-level filters are the ones that are activated when you click a graph view. When you select a data point on a card, it turns into a filter condition. This filter will be applied to all the cards in the current tab. |
| Filters on this page | The page-level filters are the ones that are specific to the selected tab only. The filter options vary for each tab. |
| Filters on all pages | The report-level filters are the ones that are commonly available for all tabs of the dashboard. |

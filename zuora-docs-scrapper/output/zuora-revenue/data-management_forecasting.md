---
title: "Forecasting"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/forecasting"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:00.751Z"
---

# Forecasting

Zuora Revenue's forecast feature enables ASC 606-compliant reporting by projecting deferred revenue, comparing forecasts with actuals, and supporting revenue recognition decisions.

Under the ASC 606 guidance, forecast reporting is one of the disclosure requirements. Zuora Revenue provides the forecast functionality to foresee the deferred revenue from a single line. With the forecast feature, you can forecast the revenue based on configurable forecast hierarchies and forecast schedules. The actuals and forecasted comparison reports can be generated to help drive your revenue recognition decision-making process.

## Overview

Zuora Revenue can create forecast schedules for all transaction lines within the POB based on the associated forecast templates. Alternatively, you can manually upload forecast schedules. After that, Zuora Revenue can generate forecasted revenue for the following scenarios:

-   POBs that have met all revenue recognition criteria (actual waterfall)

-   POBs that have not met any revenue recognition criteria but has integrated into Zuora Revenue as bookings (forecast waterfall)

-   POBs that have only partially met revenue recognition criteria where bookings are partially backlog (backlog waterfall)


To have Zuora Revenue automatically create forecast schedules, you must first define a forecast template and then associate the forecast template with the POB template. In the forecast template definitions, you need to specify the forecast date hierarchy by specifying the dates based on which revenue can be forecasted. Then, you define the forecast schedule. The definition includes durations and the percentage of the forecasted revenue to be released in each duration, for each forecast date hierarchy.

The RevPro3.0 Generate Forecast Master program can be scheduled to run on a daily basis to generate the forecasted revenue for the POBs. This program can run with the following parameters specified. Periodic snapshots of the forecast are captured at the end of each month.

-   POB Template: The program will identify the POBs that are associated with the specified POB template name, and then generate forecast based on the forecast schedule assigned to the POB template.

-   Forecast Template: This program will filter the POBs that have the forecast template associated to generate the forecast.

-   Override Manual Forecast: When this parameter is set to Y, the program will consider the forecast schedules that were manually uploaded and deleted from the system, and regenerate the forecast schedule based on the configuration else the transactions are not considered for systemic forecast generation.

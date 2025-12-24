---
title: "SSP setup"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ssp-setup"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:12.902Z"
---

# SSP setup

Learn how to set up standalone selling price (SSP) in Zuora Revenue using formula, upload, and analyzer methods.

As defined by ASC 606 and IFRS 15, standalone selling price (SSP) is the price at which an entity sells a good or service separately to a customer. A good or service might have more than one SSP.

The best evidence of SSP is the observable price of a good or service when the entity sells that good or service separately in similar circumstances to similar customers. If no observable price is not available, you must estimate and set up the SSP for Zuora Revenue to automatically allocation transaction price.

There are three methods to set up SSP in Zuora Revenue:

-   Formula Formula is defined and applied to appropriate transaction lines to calculate SSP. For information about how to configure Zuora Revenue to derive SSP based on formulas, see Calculate SSP Based on Formulas .

-   Upload SSP values are provided based on templates and uploaded to Zuora Revenue. For information about how to upload your SSP data that is estimated outside Zuora Revenue, see Upload SSP .

-   Analyzer Zuora Revenue uses historical transaction data to analyze the SSP. For information about how to configure the SSP Analyzer, see Calculate SSP with Analyzer .


Especially, different calculation methods are provided with the SSP Analyzer. Before you start configuring the Analyzer, it is recommended to understand how SSP data is derived with different methods. For more information, see Calculation Methods of SSP Analyzer .

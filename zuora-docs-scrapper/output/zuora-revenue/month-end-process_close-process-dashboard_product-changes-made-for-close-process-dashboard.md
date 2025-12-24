---
title: "Product changes made for Close Process dashboard"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/close-process-dashboard/product-changes-made-for-close-process-dashboard"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:02.924Z"
---

# Product changes made for Close Process dashboard

This document outlines the recent updates to the Close Process dashboard in Zuora Revenue, including new jobs for data validation and trend analysis.

To keep improving the performance of the Close Process dashboard and to enhance its capabilities, the following changes are introduced in Zuora Revenue, which are not visible on the dashboard but elsewhere.

## New Close Process Jobs

The following jobs are added for refreshing the data on the Data Validations and Trend Analysis tabs. These jobs are automatically started by the system and are visible only to the user who has the Schedule Manager role in Zuora Revenue. Although schedule managers can see these jobs on the Schedule Jobs page, they cannot manually submit the job.

These jobs are assigned with level 2 priority. Any other business-critical jobs will take precedence and be picked up by the system scheduler before these jobs.

| Job ID | Job name |
| --- | --- |
| 503 | RevPro3.0 RCO Revenue Analysis Acct Summ |
| 504 | RevPro3.0 RCO Revenue Analysis Acct Summ Thread |
| 508 | RevPro3.0 Refresh Close Process Dashboard |
| 510 | RevPro3.0 Trend Analysis Master |
| 511 | RevPro3.0 Trend Analysis Child |
| 512 | RevPro3.0 Trend Planned Revenue Process |
| 519 | RevPro3.0 Close Process Events |

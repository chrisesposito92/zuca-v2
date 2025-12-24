---
title: "Supported time periods"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-copilot-for-analytics/work-with-prompts-in-zuora-copilot-for-analytics/supported-time-periods"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:35.127Z"
---

# Supported time periods

This document outlines the implicitly supported time periods, including half-year, quarterly, individual month, continuous month, and cross-year queries.

The following table includes the implicitly supported time periods:

| Time period phrases | Actual time period |
| --- | --- |
| H1 | January to June |
| H2 | July to December |
| Q1 (January - March)Q2 (April - June)Q3 (July- September)Q4 (October - December) | Each quarter represents a span of three months within the calendar year. |
| Individual Month | A single month can be queried as “Jan/January 2024”. |
| Group of Months: Continuous/Synchronized Month | A continuous range of months, prompt as “January to December 2024”You cannot month-hop.For example,Incorrect prompt: "Show me the average Net MRR for January, March and November 2023"Correct prompt: "Show me the average net MRR from January to November 2023". |
| Cross-year queries | Periods that span more than one calendar year can be specified.For example, "June 2022 to June 2023" or "December 2022 to March 2023." |

---
title: "Implicit phrases"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-copilot-for-analytics/work-with-prompts-in-zuora-copilot-for-analytics/implicit-phrases"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:41.867Z"
---

# Implicit phrases

Explore how implicit phrases in prompts depend on contextual information, such as dates, for accurate interpretation.

Implicit phrases in prompts often require context, such as the current date, for interpretation. The behavior of some commonly used implicit prompts is described in the For example, the date in context or today is December 31, 2023.

| Implicit phrases used in a prompt | Results |
| --- | --- |
| Last year | Returns a time series for the entire previous calendar year (January to December 2022). |
| This year: | Most MRR/ARR related metrics are only available until the nearest completed month.Average Net MRR: Returns data up until the last completed monthFor example, if today is October 18, 2023, the result will return data for January to September 2023.Other metrics like active users are able to return up until the previous day1Active Users: Returns data from January 2023 to Oct 18, 20231 Pending the availability of the data in our system. |
| Past {number} years (including this year):For example - Past 2 years | Returns data for 2023 and 2022. |
| Last quarter | Returns data for the most recently completed fiscal quarter (Q3 2023: July to September). |
| Last {number} completed quartersFor example - The last 2 completed quarters | Returns data for Q3 and Q2 of 2023. |
| So far | Returns data up to, but not necessarily including, the current month if it's incomplete.For example, if today’s date is December 25, 2023, so far would return Jan to November 2023 |

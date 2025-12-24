---
title: "Find Subscriptions that have a Rate Plan Charge"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source/find-subscriptions-that-have-a-rate-plan-charge"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:33.813Z"
---

# Find Subscriptions that have a Rate Plan Charge

Learn to find subscriptions that have a Rata Plan Charge

You can use the Rate Plan Charge data source to find all the subscriptions or amendments that use a specific rate plan charge.

1.  In Zuora, go to Reporting > Data Sources.
2.  In the Basic Information section, set the Data Source to `Rate Plan Charge`.
3.  In the Fields section, select the fields that you want to include in the report, including the Rate Plan Charge, Subscription, and Amendment fields.
4.  In the Filters section, create the filter `Rate Plan Charge.ID = 'xxxxx'`

    -   Where `'xxxxx'` is the ID of the specific rate plan charge that you want to report on.


5.  Click export to generate the report.
6.  Refresh the screen until the report's status changes to `Completed`.
7.  Click the name of the report to download it.

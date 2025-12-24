---
title: "Filter data by date range"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/query-data-through-subscription-status-history-data-source/filter-data-by-date-range"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:50.287Z"
---

# Filter data by date range

This topic explains how to filter and export subscription data by status and date range using the data source UI.

This section introduces how to filter and export subscriptions, subscription rate plans, and subscription rate plan charges by subscription status in a date range or on a specific date through the data source UI.

Note that the examples in this section show how to filter the Subscription object with its joined object Subscription Status History. You can filter the Subscription Rate Plan and Subscription Rate Plan Charge objects with the joined object Subscription Status History in a similar way.

To filter and export subscriptions by status in a date range from the data source UI, complete the following steps:

1.  Navigate to Reporting > Data Sources . The Data Sources page opens.
2.  From the Data Source dropdown list, select Subscription . A list of joined objects is displayed.
3.  From the list of joined objects, select Subscription Status History .
4.  In the Filters section, apply the filters by the Status , Start Date , and End Date fields of the Subscription Status History object, and set the operators and values appropriately.
5.  In the Format section, select the proper formats.
6.  Click Export .

The following diagram illustrates the key configurations (steps 2 - 4) in the preceding operation flow.

![query-by-date-range](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d5a7b861-d70a-4011-bedf-28417b1cabe9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ1YTdiODYxLWQ3MGEtNDAxMS1iZWRmLTI4NDE3YjFjYWJlOSIsImV4cCI6MTc2NjY0MDA0OCwianRpIjoiMGU2ZTdkNTA3Njk3NDNjNGIyNTJmMTM1ZDFjYzdiYmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WaK8kByga4mOiFfcQjAy9ZBQQcPZ1k1_BjA3qf6ofqo)

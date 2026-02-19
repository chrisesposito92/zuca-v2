---
title: "Filter data by date range"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/data-query-through-subscription-status-history-data-source/filter-data-by-date-range"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:47.053Z"
---

# Filter data by date range

This task topic explains how to filter and export subscription data by status and date range using the data source UI.

This chapter explains the process to filter and export subscriptions, subscription rate plans, and subscription rate plan charges by subscription status in a date range or on a specific date through the data source UI.

Note that the examples in this section explain how to filter the Subscription object with its joined object Subscription Status History. You can filter the Subscription Rate Plan and Subscription Rate Plan Charge objects with the joined object Subscription Status History in a similar way.

1.  Navigate to Reporting > Data Sources. The Data Sources page opens.
2.  From the Data Source dropdown list, select Subscription . A list of joined objects is displayed.
3.  From the list of joined objects, select Subscription Status History .
4.  In the Filters section, apply the filters by the Status, Start Date, and End Date fields of the Subscription Status History object, and set the operators and values appropriately.
5.  In the Format section, select the proper formats.
6.  Click Export .

The following diagram illustrates the key configurations (steps 2 - 4) in the preceding operation flow.

![query-by-date-range](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d5a7b861-d70a-4011-bedf-28417b1cabe9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ1YTdiODYxLWQ3MGEtNDAxMS1iZWRmLTI4NDE3YjFjYWJlOSIsImV4cCI6MTc3MTU1NzEwMiwianRpIjoiNDY5YmVlN2M0NTU5NDI1NjgxZTg3NTRhM2RhY2YyZjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.UZ93giYQosBIl0KMHCE6OyfHVUVqGuDySd7R8JbOrO4)

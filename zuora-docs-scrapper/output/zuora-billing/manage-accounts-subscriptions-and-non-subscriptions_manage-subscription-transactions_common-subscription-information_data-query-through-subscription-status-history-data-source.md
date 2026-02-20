---
title: "Data query through Subscription Status History data source"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/data-query-through-subscription-status-history-data-source"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:54.660Z"
---

# Data query through Subscription Status History data source

This article introduces the Subscription Status History object and how to query subscriptions, subscription rate plans, and subscription rate plan charges by subscription status through the Subscription Status History data source.

## Subscription Status History object

With the Subscription Status History object, you can query the status of a subscription on any given date in the subscription lifecycle.

The Subscription Status History object is introduced because the `status` field of a subscription only reflects its last status. However, you cannot access the status change history of the subscription through the `status` field. Since the Subscription object is actually an object corresponding to a date range, the status of a subscription should also be an object corresponding to the date range.

Therefore, the Subscription Status History object is defined as an array of object items. Each of the object items corresponds to a date range and indicates the status of a subscription in that date range. The following example illustrates how the Subscription Status History object presents the statuses of a subscription in the subscription lifecycle.

As shown in the following diagram, a subscription is effective from 2022/1/1 to 2024/4/1. The subscription is suspended on 2023/1/1, resumed on 2023/4/1, and cancelled on 2024/4/1.

![sample-status-change-history](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/22db8a62-ccbd-44f1-af99-ed83f4f337c4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjIyZGI4YTYyLWNjYmQtNDRmMS1hZjk5LWVkODNmNGYzMzdjNCIsImV4cCI6MTc3MTY5NTA0OSwianRpIjoiNmE0OTdjMDQ5MTQ2NGFmNmE4MzUxYzVkMDUyMWMwMDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.TcW2fGlf8OIu1IhqqytAnSPolf7q4kcvDTNsLpnTl8c)

For the preceding subscription, its Subscription Status History object contains four object items to present the statuses of the subscription. Each object item corresponds to a date range and is indicated as a row in the following table:

| Start Date | End Date | Status |
| --- | --- | --- |
| 2022/1/1 | 2023/1/1 | Active |
| 2023/1/1 | 2023/4/1 | Suspended |
| 2023/4/1 | 2024/4/1 | Active |
| 2024/4/1 | NULL | Cancelled |

As shown in the preceding table, the statuses of the subscription are as follows:

-   Active from 2022/1/1 to 2023/1/1

-   Suspended from 2023/1/1 to 2023/4/1

-   Active from 2023/4/1 to 2024/4/1

-   Cancelled from 2024/4/1

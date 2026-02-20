---
title: "Condition and considerations"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/data-query-through-subscription-status-history-data-source/condition-and-considerations"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:55.344Z"
---

# Condition and considerations

This article discusses the Subscription Status History object, detailing the conditions for querying and limitations of the EffectiveDate field.

This article introduces the Subscription Status History object and how to query subscriptions, subscription rate plans, and subscription rate plan charges by subscription status through the Subscription Status History data source .

This section introduces the condition that must be met when you query the Subscription Status History data source and the limitations on the `EffectiveDate` field of the Subscription Status History object.

## Condition that must be met

When querying subscriptions, subscription rate plans, and subscription rate plan charges with the Subscription Status History object, your query criterion must contain either a data range (defined by the `StartDate` and `EndDate` fields) or the `EffectiveDate` field. Otherwise, the following error is returned:

SubscriptionStatusHistory.EffectiveDate(SubscriptionStatusHistory.StartDate and SubscriptionStatusHistory.EndDate) is required in WHERE condition.

## Limitations on EffectiveDate

The `EffectiveDate` field of the Subscription Status History object is a virtual field and has the following limitations:

-   Available only in the query criterion

-   Supports only the `=` operator

-   Not support the `NOT` operator

-   Not support functions

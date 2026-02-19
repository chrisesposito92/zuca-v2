---
title: "Common use cases and sample queries"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/data-query-through-subscription-status-history-data-source/common-use-cases-and-sample-queries"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:47.344Z"
---

# Common use cases and sample queries

This topic explains how to query subscription data using the Subscription Status History data source, including querying by date range, specific date, and current date through ZOQL or UI.

With the Subscription Status History data source, you can query subscriptions, subscription rate plans, and subscription rate plan charges by subscription status in a date range or on a specific date.

Note: The query result returns only the objects with the latest subscription version.

To perform the preceding queries, query the Subscription Status History object and join from the Subscription object and the subordinate objects including Subscription Rate Plan, Subscription Rate Plan Charge, and Subscription Rate Plan Charge Tier.

There are two ways to perform the queries:

-   Query data source through ZOQL.
-   Query data source through UI.

## Query data source through ZOQL

This section introduces the common use cases for using the Subscription Status History data source through ZOQL.

## Query data by date range

You can perform a ZOQL query on the data sources to query the subscriptions, subscription rate plans, and subscription rate plan charges by subscription status in a date range.

For example, to query all the subscriptions which are in the `Active` status from 2022-01-01 to 2022-02-01, perform the following ZOQL query:

Select \* from Subscription where SubscriptionStatusHistory.Status='Active' and SubscriptionStatusHistory.StartDate>='2022-01-01' and SubscriptionStatusHistory.EndDate<'2022-02-01

## Query data by date

You can perform an "As-of-Day" query to find the subscriptions, subscription rate plans, and subscription rate plan charges with a specific subscription status on a specific date. Use the EffectiveDate field of the Subscription Status History object in your query criteria to perform such queries. Note that the EffectiveDate field is only available in the query criterion and cannot be used anywhere else. Also, the = operator is the only supported operator for the EffectiveDate field.

For example, to query all the subscriptions which are in the `Active` status on 2022-01-01, perform the following ZOQL query:

Select \* from Subscription where SubscriptionStatusHistory.status='Active' and SubscriptionStatusHistory.EffectiveDate='2022-01-01'

## Query data on current date

You can perform an "As-of-Today" query to find subscriptions, subscription rate plans, and subscription rate plan charges with a specific subscription status on the current date. Use the keyword `today` as the value of the `EffectiveDate` field in your query criterion to perform such queries.

For example, to query all the subscriptions which are in the `Active` status on the current date, perform the following ZOQL query:

Select \* from Subscription where SubscriptionStatusHistory.status='Active' and SubscriptionStatusHistory.EffectiveDate='today'

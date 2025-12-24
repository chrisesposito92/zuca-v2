---
title: "Overview of Ramps and Ramp Metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/overview-of-ramps-and-ramp-metrics"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:49.881Z"
---

# Overview of Ramps and Ramp Metrics

This topic explains about ramp deals, their metrics, and how to manage them using Zuora's CPQ and Revenue systems.

## What is a Ramp Deal?

A ramp deal is a multi-year deal in which products can vary in price, quantity, or discount over different ramp intervals (time-based periods) or can remain flat for the entire duration of the subscription term. For example, in the diagram below, you can see a ramp deal for a 3-year subscription which has 3 Ramp Intervals. Product A has a different price for each Ramp Interval, Product B shows the same price for all 3 Ramp Intervals, and Product C is only relevant for Ramp Interval 1.

![RampDeal](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b82b7fc3-b362-4682-85e0-acbd7a4acd56?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI4MmI3ZmMzLWIzNjItNDY4Mi04NWUwLWFjYmQ3YTRhY2Q1NiIsImV4cCI6MTc2NjY0MDQ2NywianRpIjoiYmM2OWFmMWIzYmFiNDhjZmI5MThlYTY5MDI4YjM5OWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jLUA7-IhxvZ7wQ-t1-dX9bKrTCMGTLQJq1xySbXu-Bk)

Ramp deals are supported end-to-end from Zuora CPQ to Zuora Revenue. If you are a CPQ customer, see Manage Ramp Deals for the use cases on how you can create and manage ramp deals in CPQ.

See the video for a Ramps product demo. See the Ramps object model in Orders Object Model .

The key metrics for Ramps are accessible at the following levels. See Accessing Ramp Metrics .

-   TCB, TCV in the Ramp level

-   TCB, TCV in the Ramp Interval level

-   TCB, TCV, Quantity, and MRR in Ramp Interval Metrics

-   Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Ramp Interval Delta Metrics


## Uses Cases Supported by Ramps

You can create and manage subscriptions with ramp deals either through Orders API, Orders UI, or CPQ. For CPQ ramp use cases, see Manage Ramp Deals .

The following are some example use cases supported by the Ramps feature.

-   Create a ramp deal

-   Add a product in a ramp deal

-   Adding a product mid-interval update on a ramp deal

-   Change the terms and conditions of a ramp deal


## Querying Ramps

You can query Ramps by the following ways:

-   Make the following API calls:

    -   Get ramp by ramp number

    -   Get ramps by subscription key

-   Use Data Query. This is an asynchronous query and any field can be used in the WHERE clause to filter results. See SQL Queries in Data Query for details.


## Accessing Ramp Metrics

You can view the following Ramp Metrics in the Orders UI:

-   Ending MRR, TCB, TCV for each Interval

-   TCB, TCV for the Ramp


You can access the following Ramp Metrics through the Preview order REST API operation and all the get ramp metrics REST API operations:

-   TCB, TCV at the Ramp level

-   TCB, TCV at the Interval level

-   TCB, TCV, Quantity, and MRR in Interval Metrics

-   Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics


See the key metrics for Ramps for more information.

## Ramps Limitations

The following limitations exist in the Ramps feature:

-   The Ramps feature is only supported in Orders. Therefore, it inherits the limitations of the Orders feature.

-   A maximum of 12 Ramp Intervals is supported in a Ramp.

-   A maximum of 50 rate plan charges is supported in a Ramp.

-   When you change the term of a subscription, the Ramp Interval start and end dates are not auto-updated accordingly to match the term change.

-   For evergreen subscriptions, MRR and TCV in the Ramp Metrics are not supported for one-time charges and usage charges.

-   You can create orders for subscriptions with account level discounts; however, no Ramp Metrics will be generated.

-   Account level discounts are not supported in the Preview order operation or any of the get ramp metrics REST API operations.


## How to Get Started

You need to make sure you have access to the Ramps feature. Once you have this, you must set the Enable Ramp for Orders? setting to Yes in Billing Settings > Define Default Subscription and Order Settings in order to create ramp deals from Orders UI.

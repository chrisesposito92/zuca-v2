---
title: "Monthly Recurring Revenue"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:52.470Z"
---

# Monthly Recurring Revenue

This article explains the concept of Monthly Recurring Revenue (MRR), its types, calculation methods, and the factors influencing MRR in subscription businesses.

This article introduces the concept of MRR, the three types of MRR that Zuora supports, the methods to access MRR, and the calculation logic for each type of MRR. It also gives an introduction to the concept of Contracted MRR. For Order MRR, see Key metrics for Orders.

Monthly recurring revenue (MRR) is a key metric for subscription businesses. It represents the amount of predictable revenue that a company can expect to receive on a monthly basis. You can calculate MRR for a tenant, entity, account, subscription, charge, or any number of other dimensions stored in Zuora.

MRR calculates recurring fees normalized to a monthly value and does not consider one-time or usage fees. Since MRR is a normalized monthly fee and a charge pricing can change at any time within a month, you can tie the MRR value to a specific date.

## Types of MRR

For regular charges, Zuora supports Gross MRR, Discount MRR, and Net MRR:

-   Gross MRR is the MRR exclusive of any discounts applicable.
-   Discount MRR equals the total MRR of all the discount charges that are applied to the regular charge.
-   Net MRR is the MRR inclusive of all the discounts applicable, including the fixed-amount discounts and percentage discounts.

For discount charges, Zuora supports Discount MRR only. It is the MRR normalized from the discount value that can be allocated to a particular regular charge from the discount charge.

## General rules for MRR calculation

The following formula applies to the MRR calculation:

Net MRR = Gross MRR - Discount MRR

The calculation of Gross MRR is dependent on the following factors of a regular charge:

-   Charge price
-   Charge quantity
-   Charge effective date, including effective start date and effective end date

To determine whether a discount charge can be applied to a regular charge, two factors are contributing:

-   Whether the effective time range of the discount charge has an overlap with that of the regular charge.
-   Whether there is any balance in the discount charge so that some amount of discount (if not all) can be applied to the regular charge. For example, if a discount charge is applicable to several regular charges.

Therefore, the calculation of Discount MRR is impacted by many factors including those in the following, as well as how many discount charges are going to be applied to a particular regular charge. See Process discounts in MRR metrics for how discounts are processed in the MRR calculation.

-   Discount charge fields, including:
    -   Discount charge price
    -   Discount charge effective date, including effective start date and effective end date
    -   Discount class
    -   Discount charge model
    -   Discount level
    -   Discount charge number
    -   Discount charge type
-   Regular charge fields, including:

    -   Regular charge price
    -   Regular charge quantity
    -   Regular charge effective date, including effective start date and effective end date
    -   Regular charge type
    -   Regular charge number
    -   Regular charge segment ID

For the prepayment charge supported in the Prepaid with Drawdown feature, the gross MRR is an average value across the duration of the whole charge segment, regardless of the validity period setup for the prepayment charge.

## Charge-level gross MRR

The lowest level of granularity for Gross MRR in Zuora is a Rate Plan Charge segment (referred to as a "charge segment"). A regular Rate Plan Charge (referred to as a "charge") can be segmented to several charge segments with a different price for each charge segment, as a result of amendments or order actions. The charge-level Gross MRR for a regular charge (on a specific date) equals the Gross MRR of the corresponding charge segment.

You can calculate the charge segment Gross MRR based on the billing period:

-   Weekly
-   Monthly
-   Subscription term

## Weekly based billing period

Follow the formula below to calculate Gross MRR values for weekly based billing period:

Gross MRR = (Price / Number\_of\_Days\_of\_Base\_Price) \* 30

For example 1: Suppose your customer subscribes to your recurring charge:

-   Charge Model: Flat Fee Pricing
-   Price: $140
-   List Price Base: Week

Gross MRR = ($140/7) \* 30 = 600

For example 2: Suppose your customer subscribes to your recurring charge:

-   Charge Model: Flat Fee Pricing
-   Price: $140
-   List Price Base: Per Billing Period (2 Weeks)

Gross MRR = ($140/14) \* 30 = 300

## Monthly based billing period

Follow the formula below to calculate Gross MRR values for monthly based billing period:

Gross MRR = Price / Number\_of\_Months\_in\_a\_Billing\_Period

Example 1: Suppose your customer subscribes to your recurring charge:

-   Charge Model: Flat Fee Pricing
-   Price: $300
-   List Price Base: Per Billing Period
-   Billing Period: Month

Gross MRR = 300 / 1 = 300

Example 2: Suppose your customer subscribes to your recurring charge:

-   Charge Model: Flat Fee Pricing
-   Price: $300
-   List Price Base: Per Billing Period
-   Billing Period: Quarter

Gross MRR = 300 /3 = 100

## Full-term based billing period

If you select Subscription Term as the billing period, Gross MRR of recurring charge is calculated based on the list price base:

-   List Price based on Week: Same as Weekly based billing period
-   List Price based on Month: Same as Monthly based billing period

## Subscription-level gross MRR

The Gross MRR of a subscription (on a specific date) is the sum of the Gross MRRs of the regular recurring charges in that subscription (on that date).

Example:

Suppose your customer had a termed subscription with two monthly recurring charges:

-   Charge 1 of $10/month was amended on 3/1/2019, with the price changed to $15/month and then amended on 7/1/2019, with the price changed to $20/month.
-   Charge 2 of $20/month was amended on 6/1/2019, with the price changed to $10/month and then removed on 10/1/2019.

The Gross MRR of Charge 1, Charge 2, and the subscription are shown in the diagram below:

![Subscription Gross MRR](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/afa8b99b-10d2-4e12-9887-06049f3349b5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFmYThiOTliLTEwZDItNGUxMi05ODg3LTA2MDQ5ZjMzNDliNSIsImV4cCI6MTc3MTY5NDk4NywianRpIjoiM2M2NjAzN2M4MmQ5NDhjOWE4MjBiZjhjNzY5M2E4MDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.e-yLNWHJvtvYcBSAMXlnre4DppwJVgOPyrOdjTzNBEY)

## Charge-level net MRR

The lowest level of granularity for Net MRR in Zuora is determined by the alignment of effective time range between a regular charge and a discount charge that is applicable to the regular charge.

-   When the effective time ranges align, the lowest level of granularity for Net MRR is a charge segment . See Charge-level net MRR calculation based on charge segments .
-   When the effective time ranges do not align, the lowest level of granularity for Net MRR is a charge period (part of a charge segment). See Charge-level net MRR calculation based on charge periods . The charge period is a concept used for calculating Net MRR. You cannot get an actual object of it as for a charge segment.


See General rules for MRR calculation and Process discounts in MRR metrics for the factors and rules that determine whether a discount charge is applicable to a regular charge.

See Subscription-level net MRR for more examples of the MRR calculation for a regular charge in different scenarios.

## Charge-level net MRR calculation based on charge segments

When the effective time range of a discount charge aligns with that of a regular charge, the regular recurring charge can be segmented to several charge segments as a result of amendments or order actions. The net pricing of a charge segment remains constant. Therefore, the charge-level Net MRR on a specific date equals the Net MRR of the corresponding charge segment.

The Net MRR for a charge segment can be calculated by:

Net MRR of Charge Segment = Gross MRR of Charge Segment - Discount MRR of Charge Segment

Example:

A percentage discount charge of 20% is applied to a regular monthly charge. The effective ranges of both charges are 2019/1/1 - 2020/1/1. The price of the regular charge is $300/month for the first half year. It is then amended to $500/month for the second half year.

The following diagram shows the Net MRR calculation for each charge segment of the regular charge:

![Charge level MRR-Sample 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ae13c0f0-bfc2-4f05-9d59-c8b6f28cfce8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFlMTNjMGYwLWJmYzItNGYwNS05ZDU5LWM4YjZmMjhjZmNlOCIsImV4cCI6MTc3MTY5NDk4NywianRpIjoiZjFkODkwNjgxNjc2NGNjYmFiYjA1YTQ1YmU0YTFmOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.z9_5vld4wyDRlwcZjRqmjr3G8nyP6O7efAven-nY6P8)

In this example, the regular charge has two charge segments. The Net MRR of each charge segment is:

-   Charge Segment 1 (2019/1/1-2019/7/1): 300 - 300 \* 20% = 240
-   Charge Segment 2 (2019/7/1-2019/9/1): 500 - 500 \* 20% = 400

## Charge-level net MRR calculation based on charge periods

When the effective range of a discount charge does not align with that of a regular charge, a charge segment of the regular charge can be further segmented to several charge periods as determined by the effective dates of discounts. In such a charge period, the net pricing of the regular charge remains constant. The charge-level Net MRR on a specific date equals the Net MRR of the corresponding charge period.

The Net MRR of a charge period can be calculated by:

Net MRR of Charge Period = Gross MRR of Charge Period - Discount MRR of Charge Period

Example:

A percentage discount charge of 20% is applied to a regular monthly charge for the last quarter of a one-year term (2019/1/1-2020/1/1). The price of the regular monthly charge is $300/month for the first half year. It is then amended to $500/month for the second half year.

The following diagram shows the Net MRR calculation for each charge segment and each charge period of the regular charge:

![Charge-level Net MRR - Sample 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b56dfe68-d8c2-4660-9b56-f8c7bb7048e3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI1NmRmZTY4LWQ4YzItNDY2MC05YjU2LWY4YzdiYjcwNDhlMyIsImV4cCI6MTc3MTY5NDk4NywianRpIjoiYTlkMjdmMTUwZGFkNDZmNGI4MDAwZTU2MGRiNWI3ZWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.FPygRwYhPa05J7rY58HH5LHLq1B29feEBwuohB3Ev3Q)

In this example, the regular charge has two charge segments. The second charge segment is segmented by the discount charge into two charge periods.

The Net MRR for each charge segment or each charge period is:

-   Charge Segment 1: 300 - 300 \* 20% = 240
-   Charge Period 1: 500 - 500 \* 20% = 400
-   Charge Period 2: 500

The following diagram shows how a charge segment of a regular charge can be segmented by a discount charge into several charge periods.

![Charge Segment Divided by Discount](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/51006fe0-e9d7-4da8-b9c1-b36bdb45dc74?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUxMDA2ZmUwLWU5ZDctNGRhOC1iOWMxLWIzNmJkYjQ1ZGM3NCIsImV4cCI6MTc3MTY5NDk4NywianRpIjoiOGFhMTkzMDIzYjEwNGE1YzgzMmQ1NTdlMWFlN2FhZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.TajQxsnIYHX31wKbQ9ji7ggGFSAYZF8u0RxG7OmKsJQ)

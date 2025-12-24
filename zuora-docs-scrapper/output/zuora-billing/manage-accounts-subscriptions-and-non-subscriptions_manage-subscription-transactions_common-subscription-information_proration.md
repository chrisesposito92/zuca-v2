---
title: "Proration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:36.981Z"
---

# Proration

Zuora's proration feature allows you to align charges to specific billing cycles, ensuring invoices meet customer expectations and billing requirements.

Zuora allows you to prorate a partial period fees in order to align your charges to a certain bill cycle day. This article introduces how proration works in Zuora so that your invoices will match your requirements and your customers will understand what they are being billed for.

Proration is controlled under the Billing > Define Billing Rules setting.

## Credit back for removing or canceling one time charges

If you would like to give credit back to your customers for a one-time charge, click your username at the top right and navigate to Billing > Define Billing Rules and set Set Enable credit back for removing or canceling one time charges? to Yes (the default is No ).

## Proration for recurring charges

When the charge start date and the bill cycle day are not aligned, depending on your billing period alignment setting when configuring charges, a partial month/period may appear at the start of a charge. Whether such a partial month/period will be billed is determined by a combination of billing settings as described below.

Similarly, when your customer cancels a subscription, a partial month/period may appear at the end of a charge. By the current design, such a partial month/period will always be billed. See the examples below for an illustration.

Note that the proration settings described in this section are tenant-level. If you want to enable and use the charge-level proration settings for recurring charges, see Charge level proration option for a recurring charge .

## Prorate for partial month

The proration of a partial month is controlled by the Bill recurring charges for partial month (with monthly based billing periods)? setting in Billing > Define Billing Rules .

See Calculate Total Amount with Partial Month Proration for more information.

For example, imagine a scenario where:

-   Bill cycle day : 1st of the month

-   Billing period: monthly

-   Charge start date: 11/10/2018

-   Charge end date: 03/20/2019


If Bill recurring charges for partial month (with monthly based billing periods)? is set to Yes (the default):

-   Partial month of 11/10/2018 – 11/30/2018 will be charged.

-   Full months of December, January, and February will be charged.

-   Partial month of 03/01/2019 – 03/20-2019 will be charged.


If Bill recurring charges for partial month (with monthly based billing periods)? is set to No:

-   Partial month of 11/10/2018 – 11/30/2018 will NOT be charged.

-   Full months of December, January, February, and March will be charged.


![Proration-partial month](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/62fdbdf3-11b3-458d-a4a1-c69703420fc0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYyZmRiZGYzLTExYjMtNDU4ZC1hNGExLWM2OTcwMzQyMGZjMCIsImV4cCI6MTc2NjYzOTQxNiwianRpIjoiNjY4NGM1ZDk4MTA3NDJhNWFiMzIzMTU4M2IyM2UwZGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QDHE1_ZiDqPT8fNxHhFyU45OKHlTNJ24Y22N_TiJcRs)

## Prorate for partial period

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at Zuora Global Support .

As well as a monthly billing period, customers can also subscribe with quarterly, semi-annually, or annually billing periods. Therefore, in addition to proration by partial month, you can also choose whether or not to prorate for a partial period. By default, the option to prorate recurring charges at any point during the period is set to Yes .

If your tenant has the feature enabled, you can set Prorate recurring charges for partial period? to No by navigating to Billing > Define Billing Rules . This is useful in a variety of situations, for instance when selling physical goods that are dispatched at the start of a billing period.

See Calculating Total Amount with Partial Period for more information.

For example, imagine a scenario where:

-   Bill cycle day : 1st of the month

-   Charge start date: 7/15/2018

-   Charge end date: 03/15/2019

-   Billing period: quarterly


For billing periods greater than a month, the results of the proration depend on the combination of Prorate recurring charges for partial period? and Bill recurring charges for partial month (with monthly based billing periods)? settings:

## Prorate for partial month and partial period

Bill recurring charges for partial month (with monthly based billing periods)? = Yes , Prorate recurring charges for partial period? \= Yes

-   Partial month 7/15/2018 - 7/31/2018 will be charged.

-   Full periods of August – October and November – January will be charged.

-   Partial period of 02/01/2019 – 03/15/2019 will be charged.


## Prorate for partial period

Bill recurring charges for partial month (with monthly based billing periods)? \= No , Prorate recurring charges for partial period? = Yes

-   Partial month of 07/15/2018 – 07/31/2018 will NOT be charged.

-   Full periods of August – October and November – January will be charged.

-   Partial period of 02/01/2019 – 03/31/2019 will be charged.


## Do not prorate

Bill recurring charges for partial month (with monthly based billing periods)? \= No, Prorate recurring charges for partial period? = No

-   Partial month of 07/15/2018 – 07/31/2018 will NOT be charged.

-   Full periods of August – October, November – January, and February – April will be charged.


![Proration-partial periods](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/55efa81a-45c7-47d4-8f0f-a2c434d36783?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU1ZWZhODFhLTQ1YzctNDdkNC04ZjBmLWEyYzQzNGQzNjc4MyIsImV4cCI6MTc2NjYzOTQxNiwianRpIjoiOTI2MjM3ZDdjZDM2NDFiY2I3NWYwYmY1Y2NmNTQxZGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CuxN6cKBErmF4UuUhvWvr2NHgtiN29Rs8GWopiw21eo)

Note:

It is not possible to set Bill recurring charges for partial month (with monthly based billing periods)? to Yes and Prorate recurring charges for partial period? to No , as this is an invalid combination.

## When prorating periods greater than a month, prorate by month first, or by day?

If you are billing annually, semi-annually, or quarterly and you are prorating, you can control how Zuora calculates the length of a month. Click your username at the top right and navigate to ​​​​ Billing > Define Billing Rules to find the When prorating periods greater than a month, prorate by month first, or by day? setting.

The Prorate by month first option causes proration to be calculated based on whole months first, with the remaining days prorated over a month. The Prorate by day option means the proration will be based on the exact number of days in the months.

When using the Prorate by month first option, the proration period depends on what is selected for the When prorating a month, assume 30 days in a month or use actual days? setting.

For example, if you are prorating for 2.5 months, Prorate by day might calculate the proration based on a value of 75 days (the actual number of days would vary, depending on the particular months in question). Prorate by month first would calculate the proration period as 2.5 x the length of a month as set in the When prorating a month, assume 30 days in a month or use actual days? setting.

## Prorate for partial week

The proration of a partial week is controlled by the z setting.

See Calculate Total Amount with Partial Week Proration for more information.

Example Scenario:

-   Billing Period: Week

-   Billing Day: Specific Day of Week, Wednesday

-   Billing Period Alignment: Align to Charge


A customer subscribes to your service for four weeks starting from 01/01/2018.

If Bill recurring charges for partial week (with weekly based billing periods)? is set to Yes, partial weeks are charged. In this scenario, two partial week fees are charged on invoices. The first invoice shows a prorated charge for the service period of 01/01/2018 - 01/02/2018. In the following week, the invoice charges for service period of 01/03/2018 – 01/09/2018, to align with the bill cycle day. Then the charge is billed for every week through the subscription term. The last invoice also shows a prorated charge for service period of 01/24/2018 - 01/28/2018.

If Bill recurring charges for partial week (with weekly based billing periods)? is set to No, partial weeks are not charged. In this scenario, prorated charge for the service periods of 01/01/2018 - 01/02/2018 and 01/24/2018 - 01/28/2018 are not included on the invoice. The first invoice shows the service period of 01/03/2018 – 01/09/2018, to align with the bill cycle day.

## Proration for usage charges

For usage charges:

-   If Bill usage charges for partial month? is set to Yes (the default): all usage charges that occur within a prorated month will be billed.

-   If Bill usage charges for partial month? is set to No : If the prorated billing period is at the beginning of the subscription, usage charges that occur within that prorated period will not be billed. If the prorated billing period is at the end of the subscription in the event of a cancellation, usage charges that occur within that prorated period will be billed.


Note that the proration settings described in this section are tenant-level. If you want to enable and use the charge-level proration settings for usage charges, see Usage charge proration .

## Proration Credit

For information on how prorated credit is issued, see Proration Credit .

## Additional Information

Having a good understanding of cancelations and proration can help you to avoid unexpected proration, undesired credit-backs, and unnecessary charges being billed to the customer. We recommend the following knowledge center articles:

-   Zuora Billing Settings for Proration

-   Subscription Cancellations

-   Cancel or Downgrade Customers Without Issuing a Credit/Refund

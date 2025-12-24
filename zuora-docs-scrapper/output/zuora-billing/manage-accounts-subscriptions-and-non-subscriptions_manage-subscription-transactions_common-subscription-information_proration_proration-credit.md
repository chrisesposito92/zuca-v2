---
title: "Proration credit"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/proration-credit"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:42.049Z"
---

# Proration credit

This article explains how to issue prorated credits to customers for unused service periods, detailing the impact of billing rules and scenarios where credits are applied.

## Overview

Zuora allows you to prorate the credit issued back to a customer. This article explains how your billing rules affect the amount of prorated credit issued.

## Proration Credit

There are situations where a credit needs to be issued back to a customer who has paid for a service period in advance. For instance, if a customer cancels a subscription early or removes a product from their subscription, you can choose to issue a credit for the unused service period.

For example, imagine a scenario where:

-   the bill cycle day of the subscription rate plan charge is set as Default from Customer Account

-   the bill cycle day of the account is set as 1st of the month

-   the subscription billing trigger date is 10/1/2014

-   the billing period of the rate plan is set to quarterly

-   the rate plan is set to align to subscription or align to term such that the first full quarter period is 10/1/2014 to 12/31/2014

-   the subscription is canceled early on 10/15/2014


The amount of prorated credit issued depend on the combination of the Prorate recurring charges for partial period? and Bill recurring charges for partial month (with monthly based billing periods)? settings, as specified in Billing > Define Billing Rules . In all cases the first invoice charges for the full quarterly service period from the subscription trigger date to the bill cycle day, 10/1/2014 – 12/31/2014.

For charges involving in proration credit, the charge names displayed as line items on invoices vary in different situations:

-   If a charge is billed for a partial month or period, the charge name ends with Proration.

-   If a charge is partially credited back, the charge name ends with Proration Credit .

-   If a charge is fully credited back, the charge name ends with Credit .


## Prorate for Partial Month and Partial Period

Bill recurring charges for partial month (with monthly based billing periods)? = Yes, Prorate recurring charges for partial period? \= Yes

The invoice shows a prorated credit for the partial month and partial period. In this scenario, the next invoice would show a credit for the period 10/15/2014 – 12/31/2014.

## Prorate for Partial Period

Bill recurring charges for partial month (with monthly based billing periods)? = No , Prorate recurring charges for partial period? = Yes

The invoice only shows a prorated credit any full months in the partial period. In this scenario, the next invoice would show a credit for the period 11/1/2014 – 12/31/2014.

## Do no prorate

Bill recurring charges for partial month (with monthly based billing periods)? = No , Prorate recurring charges for partial period? = No

No prorated credit is issued.

![File:CA_Billing/C_Subscriptions/G_Proration/B_Proration_Credit/Proration_Credit](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a6d712b9-8d72-4d5e-a1ed-5ddaf594de19?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE2ZDcxMmI5LThkNzItNGQ1ZS1hMWVkLTVkZGFmNTk0ZGUxOSIsImV4cCI6MTc2NjYzOTk4MCwianRpIjoiMDU2NjdlYWQ0YzE3NGE1YmIzM2NiMzgwNzAzZTIwM2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Ad9GtxHL614ckH5BxKjjYP5cPIHK6xJhCavHSk_hTaw)

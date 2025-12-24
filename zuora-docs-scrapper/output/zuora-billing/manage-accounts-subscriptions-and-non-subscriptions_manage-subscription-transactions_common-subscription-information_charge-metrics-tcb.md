---
title: "Charge Metrics TCB"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics-tcb"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:16.985Z"
---

# Charge Metrics TCB

Charge Metrics TCB provides access to total contracted billing data for rate plan charges, detailing estimated billing amounts and potential discrepancies.

Charge Metrics TCB (total contracted billing) allows you to access the TCB metric data of rate plan charges.

## Overview of TCB

The TCB of a charge is defined as the estimated total amount that will be billed over the duration of the rate plan charge based on billing settings at ordering time.

For example, a customer subscribes to 10 units of your product for 12 months, with a list price of $5.00 per unit per month. The bill cycle is per quarter and the bill cycle day is the 1st of the month. This scenario is represented by a recurring charge with a quantity of 10 units, a duration of 4 billing periods, and TCB equal to $600.00 = 10 units × $5.00 × 3 months × 4 billing periods.

Discrepancies might exist between TCB and the actual invoice amount. TCB is rated at the time of booking, while the invoice amount is rated at the time of billing. As the rating time is different, several factors can lead to a discrepancy in the rated value, including but not limited to the following:

-   Difference in the rounding result caused by the difference in discount applying sequence or bill run scope

-   Change of billing rules

-   Change of customer account bill cycle day (BCD)


For more scenarios about when discrepancies might exist between TCB and the invoice amount, see the scenarios that cause the booking and billing variances for CCV.

## Access Charge Metrics TCB

You can access the Charge Metrics TCB objects and fields through Data Query.

For more information about supported objects and fields, see Charge Metrics TCB objects and fields .

## Common use cases of retrieving Charge Metrics TCB

To get started with Charge Metrics TCB, see Common use cases of retrieving Charge Metrics TCB through Data Query .

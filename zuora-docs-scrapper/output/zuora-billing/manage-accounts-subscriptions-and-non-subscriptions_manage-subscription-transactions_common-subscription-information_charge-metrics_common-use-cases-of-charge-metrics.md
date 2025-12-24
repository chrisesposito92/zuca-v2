---
title: "Common use cases of Charge Metrics"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics/common-use-cases-of-charge-metrics"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:04.638Z"
---

# Common use cases of Charge Metrics

This topic explains about the use cases for performing queries and join operations on Charge Metrics objects to retrieve data such as MRR, TCV, and charge price using specific fields and examples.

You can perform queries from the Charge Metrics objects through Data Query . You can also perform join queries from the Charge Metrics objects , Rate Plan Charges, and other objects. For example, you can retrieve MRR, TCV, and charge price about a rate plan charge based on the `ratePlanChargeId` field.

## Query example

-   Retrieve charge&nbsp;metrics data for a specified date:

    SELECT StartDate, EndDate, MrrNetAmount, SubscriptionName, ChargeNumber FROM ChargeMetrics WHERE StartDate &lt;= DATE '2020-04-01' And EndDate &gt; DATE '2020-04-01'
-   StartDate,EndDate,MrrNetAmount,SubscriptionName,ChargeNumber 2020-02-15,2020-08-15,5000.000000000,A-S00003346,C-00004367 2020-02-15,2020-08-15,1000.000000000,A-S00002811,C-00003207 2020-02-15,2020-08-15,5000.000000000,A-S00004045,C-00005637 2020-02-01,2020-06-01,760.000000000,A-S00026548,C-00039026 2020-02-15,2020-08-15,5000.000000000,A-S00003135,C-00003652
-   Retrieve charge&nbsp;metrics data for a specified date:

    SELECT c.StartDate, c.EndDate, c.MrrNetAmount, c.SubscriptionName, c.ChargeNumber, r.chargeType, r.chargeModel FROM ChargeMetrics c JOIN RatePlanCharge r ON c.ratePlanChargeId = r.id WHERE StartDate &lt;= DATE '2020-04-01' And EndDate &gt; DATE '2020-04-01'
-   StartDate,EndDate,MrrNetAmount,SubscriptionName,ChargeNumber,chargeType,chargeModel 2020-02-15,2020-08-15,5000.000000000,A-S00003346,C-00004367,Recurring,Per Unit Pricing 2020-02-01,2020-06-01,760.000000000,A-S00026548,C-00039026,Recurring,Flat Fee Pricing 2020-02-15,2020-08-15,5000.000000000,A-S00003135,C-00003652,Recurring,Per Unit Pricing 2020-02-15,2020-08-15,5000.000000000,A-S00004429,C-00006197,Recurring,Per Unit Pricing 2020-02-15,2020-08-15,10.000000000,A-S00002785,C-00003181,Recurring,Per Unit Pricing

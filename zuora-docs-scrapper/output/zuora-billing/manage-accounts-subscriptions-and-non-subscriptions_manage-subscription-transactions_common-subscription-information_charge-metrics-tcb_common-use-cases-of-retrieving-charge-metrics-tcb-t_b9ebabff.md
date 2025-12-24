---
title: "Common use cases of retrieving Charge Metrics TCB through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/charge-metrics-tcb/common-use-cases-of-retrieving-charge-metrics-tcb-through-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:22.696Z"
---

# Common use cases of retrieving Charge Metrics TCB through Data Query

This topic explains how to retrieve Charge Metrics TCB data using Data Query, including performing join queries for additional information.

To retrieve Charge Metrics TCB (total contracted billing) data, you can perform queries on the `ChargeMetricsTcb` or `ChargeMetricsTcbDiscount` object through Data Query.

Additionally, you can perform join queries on these objects and other related objects to retrieve additional information. For example, you can retrieve the charge price and model from the `RatePlanCharge` object based on the `RatePlanChargeId` field on the `ChargeMetricsTcb` object.

For more information about Data Query, see Construct SQL Queries in Data Query .

## Query examples

## Retrieve TCB metric data from a specified time period

The following example retrieves Charge Metrics TCB from a specified time period.

Query sample:

SELECT StartDate, EndDate, TcbGrossAmount, TcbNetAmount, SubscriptionName, ChargeNumber FROM ChargeMetricsTcb WHERE StartDate <= DATE '2025-04-01' And EndDate > DATE '2025-04-01'

Response sample:

StartDate,EndDate,TcbGrossAmount,TcbNetAmount,SubscriptionName,ChargeNumber 2025-02-15,2025-08-15,5000.000000000,5000.000000000,A-S00003346,C-00004367 2025-02-15,2025-08-15,1000.000000000,1000.000000000,A-S00002811,C-00003207 2025-02-15,2025-08-15,5000.000000000,5000.000000000,A-S00004045,C-00005637 2025-02-01,2025-06-01,760.000000000,760.000000000,A-S00026548,C-00039026 2025-02-15,2025-08-15,5000.000000000,5000.000000000,A-S00003135,C-00003652

## Retrieve TCB metric data and rate plan information

The following example retrieves Charge Metrics TCB and rate plan charge information through a join query.

Query sample:

SELECT c.StartDate, c.EndDate, c.TcbGrossAmount, c.TcbNetAmount, c.SubscriptionName, c.ChargeNumber, r.ChargeType, r.ChargeModel FROM ChargeMetricsTcb c JOIN RatePlanCharge r ON c.RatePlanChargeId = r.Id WHERE StartDate <= DATE '2025-04-01' And EndDate > DATE '2025-04-01'

Response sample:

StartDate,EndDate,TcbGrossAmount,TcbNetAmount,SubscriptionName,ChargeNumber,ChargeType,ChargeModel 2025-02-15,2025-08-15,5000.000000000,5000.000000000,A-S00003346,C-00004367,Recurring,Per Unit Pricing 2025-02-15,2025-08-15,1000.000000000,1000.000000000,A-S00002811,C-00003207,Recurring,Per Unit Pricing 2025-02-15,2025-08-15,5000.000000000,5000.000000000,A-S00004045,C-00005637,Recurring,Per Unit Pricing 2025-02-01,2025-06-01,760.000000000,760.000000000,A-S00026548,C-00039026,Recurring,Flat Fee Pricing 2025-02-15,2025-08-15,5000.000000000,5000.000000000,A-S00003135,C-00003652,Recurring,Per Unit Pricing

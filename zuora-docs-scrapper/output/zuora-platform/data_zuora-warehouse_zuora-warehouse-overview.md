---
title: "Zuora Warehouse overview"
url: "https://docs.zuora.com/en/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:53.592Z"
---

# Zuora Warehouse overview

Key features, supported services, available tables and columns, FAQs, and limitations

This article provides an overview of Zuora Warehouse, including key features, supported services, available tables and columns, FAQs, and limitations.

## Overview

Zuora Warehouse is an elastically scalable data warehouse service provided by Zuora. You can leverage Zuora Warehouse to run high-performance queries on unlimited data volumes.

After enabling Zuora Warehouse, Zuora refreshes the data in Zuora Warehouse on a regular basis to keep it consistent with your tenant. You can seamlessly query data from Zuora Warehouse in various Zuora features, such as Data Query, Workflow, or Reporting (is only applicable to Saved Data Query).

The following diagram is a comparison of querying data from Zuora Warehouse and Zuora Transactional Database. Since Zuora Warehouse is purpose-built for data querying, it offers enhanced performance, supports more complex queries, and has fewer limitations.

![zuora warehouse vs zuora transactional database.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d906b09d-c120-4ed1-9e76-075fb2c35075?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ5MDZiMDlkLWMxMjAtNGVkMS05ZTc2LTA3NWZiMmMzNTA3NSIsImV4cCI6MTc2NjY4ODU5MiwianRpIjoiNDFkODY5NGMyM2Y1NDBlMjlmMmVjZDBmMjVhNjAxMzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Sdaic-ixfukz1uIq7l0xQsgzI2ibgqEt45jMfveMIvw)

Note:

The Zuora Warehouse feature is in the Early Adopter phase. If you want to enable this feature, please contact your Zuora account representative. Additional fees apply.

## Key features

-   Fewer query limitations: Unlimited input rows and up to 50 million output rows.

-   Broad compatibility: Built to work with native Zuora data features, such as Data Query, Reporting (is only applicable to Saved Data Query), or Workflow, without further configuration.

-   Consistent SQL syntax : Transition smoothly without the need to rewrite your existing SQL statements.

-   Near real-time refresh rate: Choose from a range of data-refresh options, from five minutes to support near real-time operational workflows to delayed refreshes every 24 hours to support analytics and data analysis.


## Services that support Zuora Warehouse

You can query data from Zuora Warehouse in the following services:

-   [Data Query](/zuora-platform/data/data-query/use-data-query-through-user-interface/create-new-data-queries)

-   Workflow

-   Reporting (is only applicable to Saved Data Query)


Click the links above for detailed information on how to query data from Zuora Warehouse in each service.

## Zuora Warehouse size

The size of Zuora Warehouse represents computing capability. Warehouses of a larger size have better performance and consume more compute credits.

Currently, the available warehouse size is X-Small, which consumes 15 credits per hour (0.0042 credits per second).

## Set up Zuora Warehouse

To enable Zuora Warehouse for your tenant, contact your Zuora account representative.

The time for set up and the initial data refresh for Zuora Warehouse may vary depending on the volume of data in your tenant. It might take up to 21 days.

## Tables and columns available in Zuora Warehouse

The following tables are available in Zuora Warehouse. You can use the `SHOW COLUMNS` statement in Data Query to get available columns of each table. For more information, see [SHOW COLUMNS and DESCRIBE statements](/zuora-platform/data/data-query/construct-sql-queries-in-data-query#concept-rxpkzi7t__title-2522).

## Available Billing objects

Zuora Warehouse supports standard and custom objects in Billing:

-   Account

-   AccountingCode

-   AccountingPeriod

-   Amendment

-   ARTransaction

-   BillingPreviewRunResult

-   BillingRun

-   Contact

-   Contactsnapshot

-   CreditBalanceAdjustment

-   CreditMemo

-   CreditMemoApplication

-   CreditMemoApplicationItem

-   CreditMemoItem

-   CreditMemoPart

-   CreditMemoPartItem

-   CreditTaxationItem

-   DailyConsumptionSummary

-   DebitMemo

-   DebitMemoItem

-   DebitTaxationItem

-   Feature

-   FXCustomRate

-   GuidedUsage

-   Invoice

-   InvoiceAdjustment

-   InvoiceHistory

-   InvoiceItem

-   InvoiceItemAdjustment

-   InvoicePayment

-   JournalEntry

-   JournalEntryItem

-   JournalRun

-   MinCommitPeriod

-   MinCommitTransaction

-   NonSubscriptionInvoiceItem

-   OrderAction

-   OrderActionRatePlan

-   OrderCallLog

-   OrderContact

-   OrderDeltaMrr

-   OrderDeltaTcb

-   OrderDeltaTcv

-   OrderElp

-   OrderItem

-   OrderLineItem

-   OrderMrr

-   OrderQuantity

-   Orders

-   OrderTcb

-   OrderTcv

-   Payment

-   PaymentApplication

-   PaymentApplicationItem

-   PaymentMethod

-   PaymentMethodSnapshot

-   PaymentPart

-   PaymentPartItem

-   PaymentRun

-   PaymentSchedule

-   PaymentScheduleItem

-   PaymentTransactionLog

-   PrepaidBalance

-   PrepaidBalanceFund

-   PrepaidBalanceTransaction

-   ProcessedUsage

-   Product

-   ProductFeature

-   ProductRatePlan

-   ProductRatePlanCharge

-   ProductRatePlanChargeTier

-   Ramp

-   RampInterval

-   RampIntervalDeltaMetrics

-   RampIntervalDeltaMrr

-   RampIntervalDeltaQuantity

-   RampIntervalMetrics

-   RampIntervalMrr

-   RatePlan

-   RatePlanCharge

-   RatePlanChargeTier

-   RatingResult

-   RealTimeRatingProcessedUsage

-   Refund

-   RefundApplication

-   RefundApplicationItem

-   RefundInvoicePayment

-   RefundPart

-   RefundPartItem

-   RefundtTansactionLog

-   RevenueChargeSummary

-   RevenueChargeSummaryItem

-   RevenueEvent

-   RevenueEventCreditMemoItem

-   RevenueEventDebitMemoItem

-   RevenueEventInvoiceItem

-   RevenueEventInvoiceItemAdjustment

-   RevenueEventItem

-   RevenueEventItemCreditMemoItem

-   RevenueEventItemDebitMemoItem

-   RevenueEventItemInvoiceItem

-   RevenueEventItemInvoiceItemAdjustment

-   RevenueEventType

-   RevenueSchedule

-   RevenueScheduleCreditMemoItem

-   RevenueScheduleDebitMemoItem

-   RevenueScheduleInvoiceItem

-   RevenueScheduleInvoiceItemAdjustment

-   RevenueScheduleItem

-   RevenueScheduleItemCreditMemoItem

-   RevenueScheduleItemDebitMemoItem

-   RevenueScheduleItemInvoiceItem

-   RevenueScheduleItemInvoiceItemAdjustment

-   Subscription

-   SubscriptionProductFeature

-   SubscriptionStatusHistory

-   TaxationItem

-   UpdaterBatch

-   UpdaterDetail

-   Usage

-   User

-   ValidityPeriodSummary


## Custom objects

Zuora Warehouse supports all custom objects in your tenant.

The custom object names in Zuora Warehouse are consistent with the custom object names in Data Query, which are prefixed with `default__`. For example, `default__vehicle`.

## Tables for monitoring

Zuora provides the following tables to help you monitor your data volume and compute credit usage:

-   [TAR\_USAGE\_HISTORY](/zuora-platform/data/zuora-warehouse/monitor-zuora-warehouse-usage/tar_usage_history)

-   [WAREHOUSE\_METERING\_HISTORY](/zuora-platform/data/zuora-warehouse/monitor-zuora-warehouse-usage/warehouse_metering_history)


## Common clarifications

-   Frequently at which Zuora Warehouse updated with the latest data: The data-update frequency of Zuora Warehouse depends on the data-refresh level you purchased. Available refresh rates are as follows:

    -   5 minutes

    -   15 minutes

    -   60 minutes

    -   12 hours

    -   24 hours

        Typically, it is advisable to refresh data every 15 or 60 minutes. Additional fees are applicable depending on the refresh rate option. Contact your Zuora account representative for more information.

-   There are limits to how much data Zuora will share to your Zuora Warehouse. Zuora will share data up to your committed Total Active Rows (TAR) level. For more information about TAR, see [TAR\_USAGE\_HISTORY](/zuora-platform/data/zuora-warehouse/monitor-zuora-warehouse-usage/tar_usage_history).

-   TAR: TAR stands for Total Active Rows and is the total count of rows made available from Zuora to your Zuora Warehouse. Zuora will exclude data from `INFORMATION_SCHEMA` and tables for monitoring in the total active row count. Zuora will include soft deleted records as part of the total active row count. Customers are able to view and monitor total active rows by querying the `TAR_USAGE_HISTORY` table provided by Zuora, which is a daily snapshot and accounting of TAR levels. Your purchase of this feature commits you to a specific total committed TAR level for each tenant identified on the applicable Order Form.

-   The impact if the data in your Zuora tenant grows so much that your committed TARs level is exceeded: If your committed TAR level is exceeded, Zuora will pause new data updates into your share from Zuora until your TAR level is increased. Contact your Zuora account representative to discuss options for increasing your allowance if you are approaching your TAR limit.

-   There are costs associated with querying data from your Zuora Warehouse: Every query issued against the Zuora Warehouse will consume compute credits. Zuora will pause extracting data from your Zuora Warehouse if your compute credit is used up. Contact your Zuora account representative to discuss options for increasing your compute credit. You can use the [WAREHOUSE\_METERING\_HISTORY](/zuora-platform/data/zuora-warehouse/monitor-zuora-warehouse-usage/warehouse_metering_history)table to monitor your compute credit usage.


## Limitations

-   Zuora Warehouse does not support Revenue objects for now.

-   All monetary values of Billing objects are in transaction currency. Currently, conversions to “HomeCurrency” are not supported.

-   Zuora warehouse does not support the Multi-Org functionality. That is, when using Zuora Warehouse as a data source, the retrieved data may not be automatically filtered based on the user's organization within a tenant, presenting a limitation in handling distinct organizational structures.

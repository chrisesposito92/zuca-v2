---
title: "Tables and columns available in Snowflake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/tables-and-columns-available-in-snowflake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:13.581Z"
---

# Tables and columns available in Snowflake

Here is information on the tables available in the shared database.

To determine the columns available in each table, you can use the `SHOW COLUMNS` command from Snowflake's SQL syntax. For more information, see [SHOW COLUMNS](https://docs.snowflake.com/en/sql-reference/sql/show-columns) in the Snowflake documentation. Columns containing PCI data contain null values and are excluded from the share.

To save your Total Active Rows (TAR) credit, Zuora syncs a basic group of Billing objects, all custom objects, and all supported Revenue objects to Snowflake by default. If you want to sync other supported Billing objects to Snowflake, submit a request at [Zuora Global Support](https://support.zuora.com/).

The following table shows details of each supported table type:
| Table type | Sync by default | List of available objects |
| --- | --- | --- |
| Billing - basic standard objects | Yes | See Available Billing objects. |
| Billing - other standard objects | No | See Available Billing objects. |
| Billing - custom objects | Yes | All custom objects in your tenant are supported. See, Custom Objects. |
| Revenue objects | Yes | See Available Revenue objects. |
| Tables for monitoring | (N/A) | See Tables for monitoring. |

## Zuora Secure Data Share for Snowflake – Object Schema Definition

Snowflake Secure Share is fully consistent with the schema of Data Query and is designed for users who want instant, read-only access to Zuora data directly from their Snowflake environment. Similar to Data Query, when new fields are added, they are not automatically reflected in Secure Data Share immediately. Schema changes typically follow Zuora’s regular release cycle. This delay is intentional, whenever a new field is introduced, we first assess the impact of adding it to the shared schema to make sure it won’t break anything for downstream users. Once that’s done, the field gets added as part of the release.

If you come across a field that is available in Data Query but missing in your Secure Share schema, reach out to Zuora Support.

## Available Billing objects

Zuora supports syncing both standard and custom objects to Snowflake. Any objects from the list can be added or removed based on an on-demand request. All these objects contribute to the TAR (Total Active Rows) usage. For Billing objects, Zuora supports multiple latency options, including 5 minutes, 15 minutes, 60 minutes, 12 hours, and 24 hours, allowing users to choose the sync frequency that best fits their needs.

Zuora syncs the following basic standard objects to Snowflake by default:

-   Account

-   AccountingCode

-   AccountingPeriod

-   Amendment

-   Contact

-   CreditMemo

-   CreditMemoItem

-   CreditTaxationItem

-   DebitMemo

-   DebitMemoItem

-   DebitTaxationItem

-   Invoice

-   InvoiceItem

-   JournalEntry

-   JournalEntryItem

-   NotificationHistoryEmail

-   OrderAction

-   OrderMrr

-   OrderQuantity

-   Orders

-   OrderTcb

-   OrderTcv

-   Payment

-   PaymentMethod

-   PaymentSchedule

-   PaymentScheduleItem

-   Product

-   ProductRatePlan

-   ProductRatePlanCharge

-   RatePlan

-   RatePlanCharge

-   Refund

-   RevenueEvent

-   RevenueEventInvoiceItem

-   RevenueSchedule

-   RevenueScheduleItem

-   Subscription

-   TaxationItem


Zuora does not sync the following standard objects to Snowflake by default. If you want Zuora to sync these objects, submit a request at [Zuora Global Support](https://support.zuora.com/).

-   AccountAgingDetail

-   AccountAgingSummary

-   ApplicationGroup

-   ARTransaction

-   BillingPreviewRunResult

-   BillingRun

-   BillingTransaction

-   BookingTransaction

-   ChargeMetrics

-   Contactsnapshot

-   CreditBalanceAdjustment

-   CreditMemoAgingDetail

-   CreditMemoApplication

-   CreditMemoApplicationItem

-   CreditMemoPart

-   CreditMemoPartItem

-   DailyConsumptionSummary

-   DebitMemoAgingDetail

-   Feature

-   FXCustomRate

-   GuidedUsage

-   InvoiceAgingDetail

-   InvoiceAdjustment

-   InvoiceHistory

-   InvoiceItemAdjustment

-   InvoicePayment

-   JournalRun

-   MinCommitPeriod

-   MinCommitTransaction

-   NonSubscriptionInvoiceItem

-   OrderActionRatePlan

-   OrderCallLog

-   OrderContact

-   OrderDeltaMrr

-   OrderDeltaTcb

-   OrderDeltaTcv

-   OrderElp

-   OrderItem

-   OrderLineItem

-   PaymentApplication

-   PaymentApplicationItem

-   PaymentGatewayReconciliationEventLog

-   PaymentMethodSnapshot

-   PaymentPart

-   PaymentPartItem

-   PaymentRun

-   PaymentTransactionLog

-   PrepaidBalance

-   PrepaidBalanceFund

-   PrepaidBalanceTransaction

-   ProcessedUsage

-   ProductFeature

-   ProductRatePlanChargeTier

-   Ramp

-   RampInterval

-   RampIntervalDeltaMetrics

-   RampIntervalDeltaMrr

-   RampIntervalDeltaQuantity

-   RampIntervalMetrics

-   RampIntervalMrr

-   RefundtTansactionLog

-   RatePlanChargeTier

-   RatingResult

-   RealTimeRatingProcessedUsage

-   RefundApplication

-   RefundApplicationItem

-   RefundInvoicePayment

-   RefundPart

-   RefundPartItem

-   RefundTransactionLog

-   RevenueChargeSummary

-   RevenueChargeSummaryItem

-   RevenueEventCreditMemoItem

-   RevenueEventDebitMemoItem

-   RevenueEventInvoiceItemAdjustment

-   RevenueEventItem

-   RevenueEventItemCreditMemoItem

-   RevenueEventItemDebitMemoItem

-   RevenueEventItemInvoiceItem

-   RevenueEventItemInvoiceItemAdjustment

-   RevenueEventType

-   RevenueScheduleCreditMemoItem

-   RevenueScheduleDebitMemoItem

-   RevenueScheduleInvoiceItem

-   RevenueScheduleInvoiceItemAdjustment

-   RevenueScheduleItemCreditMemoItem

-   RevenueScheduleItemDebitMemoItem

-   RevenueScheduleItemInvoiceItem

-   RevenueScheduleItemInvoiceItemAdjustment

-   SubscriptionProductFeature

-   SubscriptionStatusHistory

-   UnappliedPaymentAgingDetail

-   ChargeMetrics

-   UpdaterBatch

-   UpdaterDetail

-   Usage

-   User

-   ValidityPeriodSummary


## Supported FX data tables

When the [currency conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion) feature is enabled on your tenant, you can export transaction amounts converted into your home currency and other specified currencies. This functionality applies to a set of [transaction tables](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/fx-data-in-data-source-exports).

## Example format for Snowflake schema

In Snowflake, the tables related to transaction amounts converted into your specified currencies will appear as follows:

-   Payment Object

    -   Payment

    -   PaymentFXData

-   Credit Memo Object

    -   CreditMemo

    -   CreditMemoFXData


These FX data tables contain the foreign currency conversion amounts for the corresponding transaction types (e.g., PaymentFXData for payments, InvoiceFXData for invoices). You will find both the original transaction data and the converted data in the specified currencies based on the Currency Conversion feature.

## Custom objects

Zuora syncs all custom objects in your tenant to Snowflake by default. The custom object names in Snowflake are consistent with the custom object names in Data Query, which are prefixed with `default__` . For example, `default__vehicle`. Custom objects also contribute to TAR usage.

## Multi-Organization related tables

You can view your Zuora tenant data in Snowflake tables and associate it with Organization IDs. It facilitates accurate data segmentation and control according to your organizational boundaries.

## Multi-Org support configurations

One-to-One mapping: Each object is directly associated with a single organizational ID, which has been added as a new field within the respective business object tables.

Many to Many mapping: Dedicated mapping tables are useful in scenarios where objects may belong to multiple organizations or multiple organizations need to be linked to a single object. These tables follow the pattern `<ObjectName>OrgMap`, e.g., `ProductOrgMap`, supporting flexible associations between objects and organizations.

An organization table is used to support both configurations. This table provides the Organization ID and Name, enabling you to associate these tables and filter records effectively.

## Schema details

-   Organization:

    -   Id: Unique identifier for the organization.

    -   Name: The name of the organization.

-   OrgMap (e.g., ProductOrgMap):

    -   ObjectNameID: Links to the specific object. (e.g., ProductID)

    -   OrgId: Corresponds to the associated organization.

    -   TenantId: Identifier for the tenant.


## Existing table enhancements

For example, the Account table:

-   Existing columns are retained.

-   OrganizationId: Field used to link each account directly to an organizational entity.


## Mapping types

One-to-One mapping: The following tables have the OrganizationId field directly within the object itself:

-   Account

-   Amendment

-   Contact

-   CreditMemo

-   CreditMemoItem

-   CreditTaxationItem

-   DebitMemo

-   DebitMemoItem

-   DebitTaxationItem

-   Invoice

-   InvoiceItem

-   JournalEntry

-   JournalEntryItem

-   OrderAction

-   Orders

-   Payment

-   PaymentMethod

-   RatePlan

-   RatePlanCharge

-   Refund

-   Subscription

-   TaxationItem

-   CreditMemoApplication

-   CreditMemoApplicationItem

-   CreditMemoPart

-   CreditMemoPartItem

-   OrderLineItem

-   PaymentApplication

-   PaymentApplicationItem

-   PaymentMethodSnapshot

-   PaymentPart

-   PaymentPartItem

-   PaymentTransactionLog

-   RatePlanChargeTier

-   RefundApplication

-   RefundApplicationItem

-   RefundPart

-   RefundPartItem

-   SubscriptionStatusHistory

-   Usage


Many to Many Mapping: The following tables have an associated dedicated mapping table:

-   AccountingPeriod

-   Product

-   ProductRatePlan

-   ProductRatePlanCharge

-   BillingRun

-   JournalRun

-   PaymentRun

-   ProductRatePlanChargeTier


## Available Revenue objects

Zuora syncs the [Revenue objects](/zuora-revenue/month-end-process/zuora-revenue-data-object-model) to Snowflake by default. For Revenue objects, Zuora supports multiple latency options, including 60 minutes, 12 hours, and 24 hours, allowing users to choose the sync frequency that best fits their needs.

## Tables for monitoring

The following tables in Snowflake are generated by Zuora for data monitoring purposes:

-   [TAR\_USAGE\_HISTORY](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/tables-for-monitoring/tar_usage_history)

-   [DATA\_QUALITY\_LOG](/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/tables-for-monitoring/data_quality_log)

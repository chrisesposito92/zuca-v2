---
title: "Billing objects supported for Zuora Connectors for Data Warehouses"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/billing-objects-supported-for-zuora-connectors-for-data-warehouses"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:15.202Z"
---

# Billing objects supported for Zuora Connectors for Data Warehouses

Explore the supported billing objects for Zuora Connectors, including both standard and custom objects, and understand their impact on Total Active Rows (TAR) usage.

Note:

The Zuora Connector for Data Warehouses feature is in the Early availability phase. This is a paid add-on. If you are interested in joining our early availability program, please reach out to your Zuora Representative for further details.

## Available billing objects

Zuora supports syncing both standard and custom objects to your chosen destination, depending on the selected [connectors](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/available-connectors). All synced objects contribute to your Total Active Rows (TAR) usage. You can choose to sync any combination of objects from the list below:

-   Account

-   AccountingCode

-   AccountingPeriod

-   Amendment

-   ARTransaction

-   BillingRun

-   Contact

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

-   OrderContact

-   OrderElp

-   OrderItem

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


## Supported FX data tables

When the [currency conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion) feature is enabled on your tenant, you can export transaction amounts converted into your home currency and other specified currencies. This functionality applies to a set of transaction tables. For more see information, see [Foreign currency conversion for data source exports](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion-for-data-source-exports).

## Example format for tables that support FX data conversion

In your destination, the tables related to transaction amounts converted into your specified currencies will appear as follows:

-   Payment Object

    -   `Payment`

    -   `PaymentFXData`

-   Credit Memo Object

    -   `CreditMemo`

    -   `CreditMemoFXData`


These FX data tables contain the foreign currency conversion amounts for the corresponding transaction types (e.g., `PaymentFXData` for payments, `InvoiceFXData` for invoices). You will find both the original transaction data and the converted data in the specified currencies based on the Currency Conversion feature.

## Custom objects

Zuora Connectors for Data Warehousing supports all custom objects in your tenant. The custom object names in Zuora Connectors are consistent with the custom object names in Data Query, which are prefixed with `default__`. For example, `default__vehicle`.

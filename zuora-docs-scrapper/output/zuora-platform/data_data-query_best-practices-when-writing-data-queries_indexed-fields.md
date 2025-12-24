---
title: "Indexed fields"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/best-practices-when-writing-data-queries/indexed-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:36.236Z"
---

# Indexed fields

Indexed fields are essential for optimizing data retrieval and search operations in databases, enhancing query performance and efficiency.

## Understand index fields

Indexed fields play a crucial role in optimizing data retrieval and search operations in databases.

## What indexed fields do?

An Indexed Field refers to a column in a table that has been strategically optimized to improve the efficiency of data retrieval and search operations.

When a field is indexed, the database engine creates a data structure known as an index. This index functions as a streamlined guide, facilitating swift access to relevant rows of data. In Data Query, leveraging indexed fields is pivotal for enhancing query performance, ensuring faster and more efficient data retrieval.

Effective reduction in table size: Utilizing indexed fields can significantly reduce the size of tables scanned during query execution, enhancing the speed and efficiency of your queries.

Overcoming input row limitation: Data Query Live imposes a limitation on the number of input records per table after filters have been applied, set at 10 million. However, utilizing queries with indexed fields helps reduce the number of rows scanned, thereby preventing input row limits from being reached.

## Examples

These cases illustrate the impact of using indexed fields and optimized query conditions on performance, providing insights into improving query efficiency

The examples given in this section illustrate the impact of using indexed fields and optimized query conditions on performance, providing insights into improving query efficiency.

-   Query Limit Exceeded :


Attempting to count all records in the InvoiceItem table results in a failure due to exceeding the input row limit of 10,000,000.

SELECT count(\*) FROM InvoiceItem;

Fails due to input row limit constraints.

-   Query Without Indexed Fields:


A query without explicitly specified indexed fields, but with a filter in the WHERE clause, avoids the input limit exception.

SELECT count(\*) FROM InvoiceItem, Subscription WHERE InvoiceItem.chargenumber = 'C-04468289';

Completed in 11:02 minutes, scanning 14M rows at a rate of 21.2K rows/s.

-   Query with Indexed Fields in WHERE Clause:


Optimizing by using indexed fields in the WHERE clause, the query successfully passes the input limit constraint.

SELECT count(\*) FROM InvoiceItem, Subscription WHERE InvoiceItem.subscriptionid ='2c92a0fe718678c901719fafc062349a';

Completed in 8:32 minutes, scanning 14M rows at a rate of 27.4K rows/s.

-   Further Optimized Query with Joins :


Achieving additional optimization by utilizing joins on indexed fields and adding specific conditions in the filter.

SELECT \* FROM InvoiceItem JOIN Subscription ON InvoiceItem.subscriptionid = Subscription.id WHERE InvoiceItem.subscriptionid = '2c92a0fe718678c901719fafc062349a';

Completed successfully in 0.33 minutes.

When Input Limit is Reached:

Even with indexed field optimization, if the input row limit is still a concern, users can explore [Zuora Warehouse](/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview) . This efficient alternative provides a scalable solution for optimizing query performance, ensuring that users can unlock the full potential of their data analysis.

## List of tables within Data Query (Live) and corresponding indexed fields

The subsequent sections provide the list of tables within Data Query (Live) and the corresponding indexed fields.

## Account

-   Id

-   UpdatedDate

-   AccountNumber

-   Batch

-   BillCycleDay

-   BillToId

-   CommunicationProfileId

-   CrmId

-   Currency

-   DefaultPaymentMethodId

-   InvoiceTemplateId

-   Name

-   ParentId

-   SoldToId

-   Status


## AccountingCode

-   Type

-   Id

-   UpdatedDate


## AccountingPeriod

-   Id

-   UpdatedDate

-   EndDate

-   Name

-   StartDate


## Amendment

-   Id

-   Name

-   Status

-   SubscriptionId

-   Type

-   UpdatedDate


## ApplicationGroup

-   UpdatedDate

-   PaymentId

-   RefundId


## AquaTaskLog

-   JobId

-   Id

-   UpdatedDate


## Attachment

-   Id

-   UpdatedDate

-   AssociatedObjectType

-   AssociatedObjectId


## Auditloginevent

-   Year

-   Month

-   Day


## Auditsettingchangeevent

-   Year

-   Month

-   Day


## Auditobjectchangeevent

-   Year

-   Month

-   Day


## BillingRun

-   Id

-   CreatedById

-   UpdatedDate

-   BillingRunNumber

-   ExecutedDate

-   Status


## ChargeContractualValue

-   RatePlanChargeId

-   SubscriptionId

-   UpdatedOn


## ChargeMetrics

-   ChargeNumber

-   Currency

-   InvoiceOwnerAccountNumber

-   SubscriptionName

-   SubscriptionOwnerAccountNumber

-   AmendmentId

-   ProductId

-   ProductRatePlanId

-   ProductRatePlanChargeId

-   RatePlanChargeId

-   StartDate

-   EndDate

-   CreatedDate

-   UpdatedDate


## Collections\_CollectionsWindowInfo

-   Amount\_Due

-   InCollections

-   LastOpenInvoice

-   CollectUserId

-   AccountId


## Collections\_Commentables

-   NotesId

-   CollectUserId


## Collections\_ConnectorExecutions

-   LockboxId


## Collections\_Groups

-   Name


## Collections\_LockboxPayment

-   LockboxRecordId


## Collections\_LockboxRecords

-   ConnectorExecutionId


## Collections\_Replies

-   NotesId

-   CollectUserid

-   CommentableId


## Collections\_Retryattempts

-   RetryCycleId

-   AttemptNumber

-   Success

-   CreatedDate


## Collections\_Retrycycles

-   InvoiceId

-   PaymentMethodId

-   DebitMemoId

-   AccountId

-   AttemptNumber

-   CustomerGroupId

-   NextAttempt

-   Currency

-   Processing

-   Status


## Contact

-   Id

-   UpdatedDate

-   AccountId

-   Country

-   FirstName

-   PersonalEmail


## ContactSnapshot

-   Id

-   UpdatedDate

-   ContactId


## Country

-   Id


## CreditBalanceAdjustment

-   AccountId

-   AccountingPeriodId

-   Id

-   UpdatedDate


CreditMemo

-   MemoNumber

-   Status

-   InvoiceId

-   AccountId

-   Id

-   UpdatedDate


## CreditMemoApplication

-   Id

-   UpdatedDate

-   EffectiveDate

-   AccountId

-   ApplicationGroupId


## CreditMemoApplicationItem

-   EffectiveDate

-   ApplicationGroupId

-   Id

-   UpdatedDate


## CreditMemoItem

-   SubscriptionId

-   InvoiceItemId

-   RatePlanChargeId

-   CreditMemoId

-   Id

-   UpdatedDate


## CreditMemoPart

-   Id

-   UpdatedDate

-   AccountId

-   CreditMemoId


## CreditMemoPartItem

-   Id

-   UpdatedDate

-   TaxationItemId

-   CreditMemoPartId

-   DebitMemoItemId

-   InvoiceItemId

-   DebitTaxationItemId

-   CreditMemoItemId

-   CreditTaxationItemId


## CreditTaxationItem

-   CreditMemoItemId

-   TaxationItemId

-   Id

-   UpdatedDate


## DebitMemo

-   MemoDate

-   MemoNumber

-   Status

-   InvoiceId

-   AccountId

-   Id

-   UpdatedDate


## DebitMemoItem

-   SubscriptionId

-   InvoiceItemId

-   ProductRatePlanChargeId

-   RatePlanChargeId

-   DebitMemoId

-   Id

-   UpdatedDate


## DebitTaxationItem

-   DebitMemoItemId

-   TaxationItemId

-   Id

-   UpdatedDate


## DiscountAppliedMetrics

-   DiscountRatePlanChargeId

-   RatePlanChargeId

-   Id

-   UpdatedDate


## DiscountApplyDetail

-   Id

-   UpdatedDate

-   RatePlanChargeId


## DiscountContractualValue

-   SubscriptionId

-   RatePlanChargeId

-   AppliedToRatePlanChargeId

-   UpdatedOn


## FXCustomRate

-   Id

-   UpdatedDate

-   CurrencyFrom

-   CurrencyTo

-   RateDate


## Feature

-   Id

-   UpdatedDate

-   FeatureCode

-   Status


## Invoice

-   AccountId

-   InvoiceDate

-   InvoiceNumber

-   SourceId

-   Status

-   Id

-   UpdatedDate


## InvoiceAdjustment

-   AccountId

-   InvoiceId

-   AccountingCode

-   AdjustmentNumber

-   ReasonCode

-   Status

-   Id

-   UpdatedDate


## InvoiceHistory

-   InvoiceId

-   Id


## InvoiceItem

-   InvoiceId

-   RatePlanChargeId

-   AccountingCode

-   SubscriptionId

-   Id

-   UpdatedDate


## InvoiceItemAdjustment

-   AccountId

-   AccountingCode

-   AdjustmentNumber

-   InvoiceId

-   SourceId

-   Status

-   Id

-   UpdatedDate


## InvoicePayment

-   InvoiceId

-   PaymentId

-   Id

-   UpdatedDate


## JournalEntry

-   AccountingPeriodId

-   Currency

-   Number

-   Status

-   Id

-   UpdatedDate


## JournalEntryItem

-   Id

-   UpdatedDate


## JournalRun

-   Number

-   Status

-   TargetEndDate

-   TargetStartDate

-   Id


## MemoHistory

-   MemoId

-   Id


## NonSubscriptionInvoiceItem

-   InvoiceId

-   RatePlanChargeId

-   AccountingCode

-   SubscriptionId

-   Id

-   UpdatedDate

-   BookingReference


## NotificationHistoryCallout

-   Id

-   ObjectId

-   AccountId

-   CreateTime


## NotificationHistoryEmail

-   Id

-   NotificationId

-   ObjectId

-   AccountId

-   EventName

-   CreatedOn

-   Status


## NotificationHistoryEmailEvent

-   Id

-   AccountId

-   NotificationId

-   EmailHistoryId

-   EventTimestamp

-   EventType

-   EventSubtype

-   CreatedDate

-   UpdatedDate


## OrderAction

-   Id

-   UpdatedDate

-   SubscriptionVersionAmendmentId

-   OrderId


## OrderActionRatePlan

-   Id

-   OrderActionId

-   RatePlanId

-   UpdatedDate


## OrderContact

-   Id

-   UpdatedDate

-   Country

-   FirstName


## OrderElp

-   Id

-   InvoiceOwnerId

-   OrderItemId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderItem

-   Id

-   UpdatedDate

-   EndDate

-   StartDate

-   RatePlanChargeId

-   OrderActionId


## OrderLineItem

-   Id

-   UpdatedDate

-   ItemName

-   ItemNumber

-   ItemState

-   ItemType

-   OrderId

-   ProductCode

-   ProductRatePlanChargeId

-   UOM

-   RelatedSubscriptionNumber


## OrderMrr

-   Id

-   UpdatedDate

-   DiscountChargeId

-   InvoiceOwnerId

-   OrderItemId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderMrrDefault

-   Id

-   UpdatedDate

-   DiscountChargeId

-   InvoiceOwnerId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderQuantity

-   Id

-   UpdatedDate

-   InvoiceOwnerId

-   OrderItemId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderQuantityDefault

-   Id

-   UpdatedDate

-   InvoiceOwnerId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderTcb

-   Id

-   UpdatedDate

-   DiscountChargeId

-   InvoiceOwnerId

-   OrderItemId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderTcbDefault

-   Id

-   UpdatedDate

-   DiscountChargeId

-   InvoiceOwnerId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderTcv

-   Id

-   UpdatedDate

-   DiscountChargeId

-   InvoiceOwnerId

-   OrderItemId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## OrderTcvDefault

-   Id

-   UpdatedDate

-   DiscountChargeId

-   InvoiceOwnerId

-   SubscriptionOwnerId

-   RatePlanChargeId

-   OrderActionId


## Orders

-   Id

-   UpdatedDate

-   OrderDate

-   OrderNumber

-   AccountId


## Payment

-   AccountId

-   EffectiveDate

-   GatewayOrderId

-   GatewayState

-   PaymentMethodId

-   PaymentMethodSnapshotId

-   PaymentNumber

-   ReferenceId

-   Source

-   SourceName

-   Status

-   Id

-   UpdatedDate


## PaymentApplication

-   EffectiveDate

-   AccountId

-   PaymentId

-   ApplicationGroupId

-   Id

-   UpdatedDate


## PaymentApplicationItem

-   EffectiveDate

-   TaxationItemId

-   PaymentApplicationId

-   ApplicationGroupId

-   DebitTaxationItemId

-   Id

-   UpdatedDate


## PaymentGatewayReconciliationEventLog

-   Id

-   GatewayReferenceId

-   PaymentReconciliationJobId


## PaymentItem

-   Id

-   UpdatedDate

-   PaymentItemNumber

-   InvoiceItemId

-   InvoicePaymentId

-   PaymentId

-   TaxationItemId


## PaymentMethod

-   AccountId

-   AchAccountName

-   AchBankName

-   AchCountry

-   Active

-   IsSystem

-   BusinessIdentificationCode

-   Country

-   CreditCardMaskNumber

-   PaypalBaid

-   Type

-   Id

-   UpdatedDate


## PaymentMethodSnapshot

-   AccountId

-   Country

-   CreditCardCountry

-   PaymentMethodId

-   Id

-   UpdatedDate


## PaymentMethodTransactionLog

-   Id

-   TransactionId

-   PaymentMethodId


## PaymentPart

-   Id

-   UpdatedDate

-   PaymentId

-   InvoiceId

-   AccountId


## PaymentPartItem

-   Id

-   UpdatedDate

-   DebitMemoItemId

-   DebitTaxationItemId

-   InvoiceItemId

-   PaymentPartId

-   TaxationItemId


## PaymentReconciliationAttempt

-   Id

-   PaymentReconciliationJobId


## PaymentReconciliationJob

-   Id

-   JobNumber

-   Status


## PaymentReconciliationLog

-   Id

-   Status


## PaymentRun

-   Id

-   UpdatedDate

-   PaymentRunNumber


## PaymentTransactionLog

-   Id

-   CreatedDate

-   GatewayReasonCode

-   TransactionDate

-   TransactionId

-   PaymentId


## ProcessedUsage

-   UsageId

-   BillingPeriodEndDate

-   BillingPeriodStartDate

-   Id

-   UpdatedDate


## Product

-   Name

-   SKU

-   Id

-   UpdatedDate


## ProductDiscountApplyDetail

-   Id

-   UpdatedDate

-   ProductRatePlanChargeId


## ProductFeature

-   Id

-   UpdatedDate

-   FeatureId

-   ProductId


## ProductRatePlan

-   ProductId

-   Name

-   Id

-   UpdatedDate


## ProductRatePlanCharge

-   deleted

-   BillCycleDay

-   ChargeModel

-   Id

-   UpdatedDate


## ProductRatePlanChargeTier

-   Id

-   UpdatedDate

-   ProductRatePlanChargeId


## ProductRatePlanCurrency

-   IsActive

-   Currency

-   ProductRatePlanId

-   Id

-   UpdatedDate


## Ramp

-   Id

-   OrderId

-   UpdatedDate


## RampInterval

-   Id

-   RampId

-   UpdatedDate


## RampIntervalDeltaMetrics

-   Id

-   ProductRatePlanChargeId

-   RampIntervalId


## RampIntervalDeltaMrr

-   Id

-   RampIntervalDeltaMetricsId


## RampIntervalDeltaQuantity

-   Id

-   RampIntervalDeltaMetricsId


## RampIntervalMetrics

-   Id

-   ProductRatePlanChargeId

-   RampIntervalId

-   RatePlanChargeId


## RampIntervalMrr

-   Id

-   RampIntervalMetricsId


## RatePlan

-   AmendmentId

-   SubscriptionId

-   Id

-   UpdatedDate


## RatePlanCharge

-   Id

-   OriginalId

-   RatePlanId

-   UpdatedDate


## RatePlanChargeTier

-   Currency

-   Id

-   UpdatedDate


## RealTimeRatingProcessedUsage

-   UsageId

-   BillingPeriodEndDate

-   BillingPeriodStartDate

-   Id

-   UpdatedDate


## Refund

-   AccountId

-   PaymentMethodSnapshotId

-   PaymentMethodId

-   ReasonCode

-   RefundNumber

-   SourceType

-   Id

-   UpdatedDate


## RefundApplication

-   AccountId

-   ApplicationGroupId

-   EffectiveDate

-   RefundId

-   Id

-   UpdatedDate


## RefundApplicationItem

-   Id

-   UpdatedDate


## RefundInvoicePayment

-   InvoicePaymentId

-   RefundId

-   Id

-   UpdatedDate


## RefundItem

-   Id

-   UpdatedDate

-   RefundItemNumber

-   RefundInvoicePaymentId

-   PaymentItemId


## RefundPart

-   Id

-   UpdatedDate

-   PaymentId

-   RefundId

-   CreditMemoId

-   AccountId


## RefundPartItem

-   Id

-   UpdatedDate


## RefundTransactionLog

-   Id

-   TransactionDate

-   TransactionId

-   RefundId


## RevenueChargeSummary

-   AccountId

-   Number

-   Id

-   UpdatedDate


## RevenueChargeSummaryItem

-   AccountingPeriodId

-   Amount

-   Id

-   UpdatedDate


## RevenueEvent

-   Number

-   Id

-   UpdatedDate


## RevenueEventCreditMemoItem

-   Number

-   Id

-   UpdatedDate


## RevenueEventDebitMemoItem

-   Number

-   Id

-   UpdatedDate


## RevenueEventInvoiceItem

-   Number

-   Id

-   UpdatedDate


## RevenueEventInvoiceItemAdjustment

-   Number

-   Id

-   UpdatedDate


## RevenueEventItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueEventItemCreditMemoItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueEventItemDebitMemoItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueEventItemInvoiceItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueEventItemInvoiceItemAdjustment

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueEventType

-   Name

-   SystemId

-   Id

-   UpdatedDate


## RevenueSchedule

-   BillingTransactionId

-   Number

-   RevenueScheduleDate

-   AccountId

-   Id

-   UpdatedDate


## RevenueScheduleCreditMemoItem

-   CreditMemoItemId

-   Number

-   RevenueScheduleDate

-   Id

-   UpdatedDate


## RevenueScheduleDebitMemoItem

-   DebitMemoItemId

-   Number

-   AccountId

-   Id

-   UpdatedDate


## RevenueScheduleInvoiceItem

-   Number

-   InvoiceItemId

-   AccountId

-   Id

-   UpdatedDate


## RevenueScheduleInvoiceItemAdjustment

-   Number

-   AccountId

-   InvoiceItemAdjustmentId

-   Id

-   UpdatedDate


## RevenueScheduleItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueScheduleItemCreditMemoItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueScheduleItemDebitMemoItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueScheduleItemInvoiceItem

-   AccountingPeriodId

-   Id

-   UpdatedDate


## RevenueScheduleItemInvoiceItemAdjustment

-   AccountingPeriodId

-   Id

-   UpdatedDate


## State

-   Id


## Subscription

-   Id

-   AccountId

-   ContractEffectiveDate

-   CreatorAccountId

-   CreatorInvoiceOwnerId

-   InvoiceOwnerId

-   Name

-   OriginalId

-   PreviousSubscriptionId

-   Status

-   SubscriptionVersionAmendmentId

-   TermStartDate

-   Version

-   UpdatedDate


## SubscriptionProductFeature

-   Id

-   UpdatedDate

-   FeatureId

-   RatePlanId


## TaxableItemSnapshot

-   Id

-   TaxableItemId


## TaxationItem

-   Id

-   UpdatedDate

-   InvoiceItemId


## UpdaterBatch

-   BatchId

-   InternalStatus

-   RequestId

-   Status

-   UpdaterAccountId

-   Id

-   UpdatedDate


## UpdaterDetail

-   BillingAccountId

-   RecordId

-   Status

-   TransactionId

-   UpdaterBatchId

-   PaymentMethodId

-   Id

-   UpdatedDate


## Usage

-   AccountId, UOM, StartDateTime (composite index)

-   UOM

-   Id

-   UpdatedDate

-   ImportId


## User

-   Id

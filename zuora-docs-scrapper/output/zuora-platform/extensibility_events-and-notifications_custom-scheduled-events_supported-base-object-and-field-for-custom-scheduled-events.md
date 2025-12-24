---
title: "Supported base object and field for custom scheduled events"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/supported-base-object-and-field-for-custom-scheduled-events"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:24.837Z"
---

# Supported base object and field for custom scheduled events

Provides the base objects and base fields supported for custom scheduled events and the communication profile Zuora uses for each object.

See [Data source reference](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference) for details on each object.

| Supported base object | Supported base field | Communication profile used |
| --- | --- | --- |
| Account | CreatedDate, LastInvoiceDate, UpdatedDate, TaxExemptEffectiveDate, TaxExemptExpirationDate | The profile associated with the account |
| AccountingCode | CreatedDate, UpdatedDate | Tenant default profile |
| AccountingPeriod | CreatedDate, StartDate, EndDate, UpdatedDate | Tenant default profile |
| Amendment | ContractEffectiveDate, CustomerAcceptanceDate, EffectiveDate, ResumeDate, SpecificUpdateDate, SuspendDate, TermStartDate, ServiceActivationDate, BookingDate, CreatedDate, UpdatedDate | The profile associated with the account |
| BillingRun | CreatedDate, EndDate, ExecutedDate, InvoiceDate, PostedDate, StartDate, TargetDate, LastEmailSentTime, ScheduledExecutionTime, UpdatedDate | Tenant default profile |
| Contact | CreatedDate, UpdatedDate | The profile associated with the account |
| CreditBalanceAdjustment | AdjustmentDate, CancelledOn, CreatedDate, UpdatedDate | The profile associated with the account |
| CreditMemo | CancelledOn, ExchangeRateDate, MemoDate, PostedOn, TargetDate, CreatedDate, UpdatedDate | The profile associated with the account |
| CreditMemoApplication | CreatedDate, EffectiveDate, UpdatedDate | The profile associated with the account |
| CreditMemoApplicationItem | CreatedDate, EffectiveDate, UpdatedDate | The profile associated with the account |
| CreditMemoItem | ChargeDate, ServiceEndDate, ServiceStartDate, CreatedDate, UpdatedDate | The profile associated with the account |
| CreditMemoPart | CreatedDate, UpdatedDate | The profile associated with the account |
| DebitMemo | CancelledOn, DueDate, ExchangeRateDate, MemoDate, PostedOn, TargetDate, CreatedDate, UpdatedDate | The profile associated with the account |
| DebitMemoItem | ChargeDate, ServiceEndDate, ServiceStartDate, CreatedDate, UpdatedDate | The profile associated with the account |
| Feature | CreatedDate, UpdatedDate | Tenant default profile |
| Fulfillment | CreatedDate, UpdatedDate, FulfillmentDate, BillTargetDate | The profile associated with the account |
| Fund | CreatedDate, UpdatedDate | The profile associated with the account |
| Invoice | DueDate, InvoiceDate, LastEmailSentDate, PostedDate, TargetDate, CreatedDate, UpdatedDate | The profile associated with the account |
| InvoiceAdjustment | AdjustmentDate, CancelledOn, CreatedDate, UpdatedDate | The profile associated with the account |
| InvoiceItem | ChargeDate, RevRecStartDate, ServiceEndDate, ServiceStartDate, CreatedDate, UpdatedDate | The profile associated with the account |
| InvoiceItemAdjustment | AdjustmentDate, CancelledDate, ServiceEndDate, ServiceStartDate, CreatedDate, UpdatedDate | The profile associated with the account |
| JournalEntry | JournalEntryDate, TransferDate, CreatedDate, UpdatedDate | Tenant default profile |
| JournalEntryItem | CreatedDate, UpdatedDate | Tenant default profile |
| Order | CreatedDate, OrderDate, UpdatedDate | The profile associated with the account |
| OrderAction | CreatedDate, UpdatedDate, ContractEffectiveDate, CustomerAcceptanceDate, ServiceActivationDate, TermStartDate, SuspendDate, ResumeDate, CancellationEffectiveDate | The profile associated with the account |
| OrderLineItem | CreatedDate, UpdatedDate | The profile associated with the account |
| Payment | CancelledOn, MarkedForSubmissionOn, SettledOn, SubmittedOn, CreatedDate, EffectiveDate, LastEmailDateTime, UpdatedDate | The profile associated with the account |
| PaymentApplication | EffectiveDate, CreatedDate, UpdatedDate | The profile associated with the account |
| PaymentMethod | LastFailedSaleTransactionDate, LastTransactionDateTime, MandateCreationDate, MandateUpdateDate, CreatedDate, UpdatedDate | The profile associated with the account |
| PaymentMethodTransactionLog | CreatedDate, TransactionDate | The profile associated with the account |
| PaymentPart | CreatedDate, UpdatedDate | The profile associated with the account |
| PaymentSchedule | CreatedDate, UpdatedDate, StartDate, NextPaymentDate, RecentPaymentDate | The profile associated with the account |
| PaymentScheduleItem | CreatedDate, UpdatedDate, ScheduledDate | The profile associated with the account |
| PaymentTransactionLog | CreatedDate, TransactionDate | The profile associated with the account |
| Product | EffectiveStartDate, EffectiveEndDate, CreatedDate, UpdatedDate | Tenant default profile |
| ProductFeature | CreatedDate, UpdatedDate | Tenant default profile |
| ProductRatePlan | EffectiveStartDate, EffectiveEndDate, CreatedDate, UpdatedDate | Tenant default profile |
| ProductRatePlanCharge | CreatedDate, UpdatedDate | Tenant default profile |
| ProductRatePlanChargeTier | CreatedDate, UpdatedDate | Tenant default profile |
| RatePlan | CreatedDate, UpdatedDate | The profile associated with the account |
| RatePlanCharge | ChargedThroughDate, EffectiveEndDate, EffectiveStartDate, ProcessedThroughDate, SpecificEndDate, TriggerDate, OriginalOrderDate, AmendedByOrderOn, CreatedDate, UpdatedDate | The profile associated with the account |
| RatePlanChargeTier | CreatedDate, UpdatedDate | The profile associated with the account |
| RatingResult | CreatedDate, UpdatedDate, ServiceStartDate, ServiceEndDate | The profile associated with the account |
| Refund | CancelledOn, MarkedForSubmissionOn, RefundDate, RefundTransactionTime, SettledOn, SubmittedOn, CreatedDate, UpdatedDate | The profile associated with the account |
| RefundApplication | EffectiveDate, CreatedDate, UpdatedDate | The profile associated with the account |
| RefundPart | CreatedDate, UpdatedDate | The profile associated with the account |
| RevenueEvent | RecognitionEnd, RecognitionStart, CreatedDate, UpdatedDate | The profile associated with the account |
| RevenueEventItem | CreatedDate, UpdatedDate | The profile associated with the account |
| RevenueSchedule | ExchangeRateDate, RecognitionPeriodEnd, RecognitionPeriodStart, RevenueScheduleDate, TransactionDate, CreatedDate, UpdatedDate | The profile associated with the account |
| RevenueScheduleItem | CreatedDate, UpdatedDate | The profile associated with the account |
| Subscription | CancelledDate, ContractAcceptanceDate, ContractEffectiveDate, OriginalCreatedDate, ServiceActivationDate, SubscriptionEndDate, SubscriptionStartDate, TermStartDate, TermEndDate, LastBookingDate, CreatedDate, UpdatedDate | The profile associated with the account |
| SubscriptionProductFeature | CreatedDate, UpdatedDate | The profile associated with the account |
| TaxationItem | TaxDate, CreatedDate, UpdatedDate | The profile associated with the account |
| UpdaterDetail(Payment Method Update object) | CreatedDate, UpdatedDate, SubmittedResponseTime | The profile associated with the account |
| Usage | StartDateTime, EndDateTime, SubmissionDateTime, CreatedDate, UpdatedDate | The profile associated with the account |
| ValidityPeriodSummary | CreatedDate, UpdatedDate, StartDate, EndDate | The profile associated with the account |

---
title: "Available tables"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/construct-sql-queries-in-data-query/available-tables"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:25.903Z"
---

# Available tables

This reference provides an overview of available tables in Data Query, differences between tenants, and methods to retrieve table lists using the SHOW TABLES statement and Data Query Schema Browser.

Depending on the available features in each tenant, the available tables in Data Query might be different between tenants. You can use the `SHOW` `TABLES` statement to retrieve a complete and exact list of the available tables. You can also use Data Query Schema Browser to view the full list of all available tables.

Each table corresponds to a Zuora object type, and most tables correspond to the base object of a Zuora data source.

The main difference between tables in Data Query and data sources is that tables in Data Query are not pre-joined to other tables. When you query a table in Data Query, you can arbitrarily join other tables to retrieve any data that you require. In the corresponding data source, Zuora has pre-joined the base object to a fixed set of related object types; you cannot retrieve data from other object types.

To learn how different object types relate to one another, see:

-   Zuora Business Object Model

-   Invoice Settlement Object Model

-   Orders Object Model


To get a complete and exact list of the available tables in your tenant, use `SHOW TABLES`.

| Table | Each Row Represents | Columns |
| --- | --- | --- |
| Account | A customer account | Use SHOW COLUMNS to list the available columns. |
| AccountingPeriodOnly available if you use Zuora Finance | An accounting period | Use SHOW COLUMNS to list the available columns. |
| AccountingCode | An accounting code | Use SHOW COLUMNS to list the available columns. |
| AmendmentNot available if the Orders feature is enabled | An amendment to a subscription | Use SHOW COLUMNS to list the available columns. |
| ApplicationGroupOnly available if the Invoice Settlement feature is enabled | A group of payment, refund, and credit memo applications | Use SHOW COLUMNS to list the available columns. |
| BillingRun | A billing run | Use SHOW COLUMNS to list the available columns. |
| ChargeMetrics | A charge metrics service for accessing the key metrics for Rate Plan Charges in Zuora. | Use SHOW COLUMNS to list the available columns. |
| ChargeMetricsDiscountAllocationDetail | The discount allocation detail in the charge metrics | Use SHOW COLUMNS to list the available columns. |
| ChargeMetricsTcb | A charge metrics record for accessing the TCB metric date of Rate Plan Charges. | Use SHOW COLUMNS to list the available columns. |
| ChargeMetricsTcbDiscount | The discount allocation details for accessing the TCB metric data of Discount Rate Plan Charges. | Use SHOW COLUMNS to list the available columns. |
| Collections_ApmPaymentRuns | A payment run initiated in the Advanced Payment Manager feature | Use SHOW COLUMNS to list the available columns. |
| Collections_CollectionsWindowInfo | An account that is in collection based on the system condition and the conditions you defined in the Collections Window feature | Use SHOW COLUMNS to list the available columns. |
| Collections_ConnectorExecutions | A processing record of the configured lockbox file format in the Configurable Lockbox feature | Use SHOW COLUMNS to list the available columns. |
| Collections_LockboxRecords | A file record of the configured lockbox file format in the Configurable Lockbox feature | Use SHOW COLUMNS to list the available columns. |
| Collections_Lockboxes | A lockbox file format configured in the Configurable Lockbox feature | Use SHOW COLUMNS to list the available columns. |
| Collections_LockboxPayment | A payment record that has been completed or is in progress in the Configurable Lockbox feature | Use SHOW COLUMNS to list the available columns. |
| Collections_RetryAttempts | A payment retry attempt initiated in the Configurable Payment Retry feature | Use SHOW COLUMNS to list the available columns. |
| Collections_CustomerGroups | A customer group configured in the Configurable Payment Retry feature | Use SHOW COLUMNS to list the available columns. |
| Collections_MetricSnapshots | A record of the retry metics in the Configurable Payment Retry feature | Use SHOW COLUMNS to list the available columns. |
| Collections_RetryCycles | A retry cycle in the Configurable Payment Retry feature | Use SHOW COLUMNS to list the available columns. |
| Collections_Groups | A user group in the Notes feature | Use SHOW COLUMNS to list the available columns. |
| Collections_Note | A note in the Notes feature | Use SHOW COLUMNS to list the available columns. |
| Collections_Replies | A reply in the Notes feature | Use SHOW COLUMNS to list the available columns. |
| Collections_Commentables | A user in the Notes feature | Use SHOW COLUMNS to list the available columns. |
| Contact | A contact person. For example, the Bill To contact of a customer account | Use SHOW COLUMNS to list the available columns. |
| ContactSnapshot | A copy of the Bill To or Sold To contact information from a posted invoice | Use SHOW COLUMNS to list the available columns. |
| Country | A country or region | Use SHOW COLUMNS to list the available columns. |
| CreditBalanceAdjustmentDeprecated if the Invoice Settlement feature is enabled | An adjustment to the credit balance of a customer account | Use SHOW COLUMNS to list the available columns. |
| CreditMemoOnly available if the Invoice Settlement feature is enabled | A credit memo that is owned by a customer account | Use SHOW COLUMNS to list the available columns. |
| CreditMemoApplicationOnly available if the Invoice Settlement feature is enabled | A credit memo that is applied to an invoice or a debit memo | Use SHOW COLUMNS to list the available columns. |
| CreditMemoApplicationItemOnly available if the Invoice Settlement feature is enabled | A credit memo that is applied to a line item in an invoice or a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| CreditMemoItemOnly available if the Invoice Settlement feature is enabled | A line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| CreditMemoPartOnly available if the Invoice Settlement feature is enabled | An applied or unapplied portion of a credit memo | Use SHOW COLUMNS to list the available columns. |
| CreditMemoPartItemOnly available if the Invoice Settlement feature is enabled | A portion of a credit memo that is applied to a line item in an invoice or a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| CreditTaxationItemOnly available if the Invoice Settlement feature is enabled | A taxation line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| DebitMemoOnly available if the Invoice Settlement feature is enabled | A debit memo that is owned by a customer account | Use SHOW COLUMNS to list the available columns. |
| DebitMemoItemOnly available if the Invoice Settlement feature is enabled | A line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| DebitTaxationItemOnly available if the Invoice Settlement feature is enabled | A taxation line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| DiscountAppliedMetrics | A discount rate plan charge that is applied to another rate plan charge | Use SHOW COLUMNS to list the available columns. |
| FXCustomRateOnly available if the Custom Foreign Currency Exchange Rates feature is enabled | A custom exchange rate | Use SHOW COLUMNS to list the available columns. |
| Invoice | An invoice | Use SHOW COLUMNS to list the available columns. |
| InvoiceAdjustmentDeprecated | An adjustment to an invoice | Use SHOW COLUMNS to list the available columns. |
| InvoiceItem | A line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| InvoiceItemAdjustmentDeprecated if the Invoice Settlement feature is enabled | An adjustment to a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| InvoicePaymentDeprecated if the Invoice Settlement feature is enabled | A payment that is applied to an invoice | Use SHOW COLUMNS to list the available columns. |
| JournalEntryOnly available if you use Zuora Finance | A journal entry | Use SHOW COLUMNS to list the available columns. |
| JournalEntryItemOnly available if you use Zuora Finance | A line item in a journal entry | Use SHOW COLUMNS to list the available columns. |
| JournalRunOnly available if you use Zuora Finance | A journal run | Use SHOW COLUMNS to list the available columns. |
| notificationhistorycallout | A callout notification history | Use SHOW COLUMNS to list the available columns. |
| notificationhistoryemail | An email notification history | Use SHOW COLUMNS to list the available columns. |
| notificationhistoryemailevent | An email-sending event, such as Bounced events, or Delivered events.Note that you can find events of a particular email history in this table only if this email was sent from the default email server or Advanced SMTP server. | Use SHOW COLUMNS to list the available columns. |
| OrderActionOnly available if the Order Metrics feature, the Orders feature, or the Orders Harmonization feature is enabled | An order action that is applied to a subscription | Use SHOW COLUMNS to list the available columns. |
| OrderActionRatePlanOnly available if the Orders feature or the Orders Harmonization feature is enabled. Click the use case below to see a query sample.Query the rate plan added by the Add Product order action in an order SELECT rp.Id, rp.Name, rp.ProductRatePlanId, rp.SubscriptionId, rp.CreatedDate FROM Orders o JOIN OrderAction oa ON oa.OrderId = o.Id JOIN OrderActionRatePlan oaRp ON oaRp.OrderActionId = oa.Id JOIN RatePlan rp ON rp.Id = oaRp.RatePlanId WHERE o.OrderNumber = 'O-00001' AND oa.Type = 'AddProduct' | A rate plan (in a subscription) that has been created or amended by a specific order action | Use SHOW COLUMNS to list the available columns. |
| OrderLineItemNote:The Order Line Items feature is now generally available. You need to enable the Orders or Orders Harmonization feature to access the Order Line Items feature. | An order line item | Use SHOW COLUMNS to list the available columns. |
| OrderElpOnly available if the Order Metrics feature or the Orders feature is enabledNote: The following Order Metrics have been deprecated. Any new customers who onboard on Orders or Orders Harmonization will not get these metrics.The Order ELP and Order Item objectsThe "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objectsExisting Orders customers who have these metrics will continue to be supported. | An "extended list price" metric for an order action | Use SHOW COLUMNS to list the available columns. |
| OrderItemOnly available if the Order Metrics feature or the Orders feature is enabledNote: The following Order Metrics have been deprecated. Any new customers who onboard on Orders or Orders Harmonization will not get these metrics.The Order ELP and Order Item objectsThe "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objectsExisting Orders customers who have these metrics will continue to be supported. | An order item | Use SHOW COLUMNS to list the available columns. |
| OrderMrrOnly available if the Order Metrics feature, the Orders feature, or the Orders Harmonization feature is enabledNote: The following Order Metrics have been deprecated. Any new customers who onboard on Orders or Orders Harmonization will not get these metrics.The Order ELP and Order Item objectsThe "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objectsExisting Orders customers who have these metrics will continue to be supported. | A "monthly recurring revenue" metric for an order action | Use SHOW COLUMNS to list the available columns. |
| OrderQuantityOnly available if the Order Metrics feature, the Orders feature, or the Orders Harmonization feature is enabledNote: The following Order Metrics have been deprecated. Any new customers who onboard on Orders or Orders Harmonization will not get these metrics.The Order ELP and Order Item objectsThe "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objectsExisting Orders customers who have these metrics will continue to be supported. | A "quantity" metric for an order action | Use SHOW COLUMNS to list the available columns. |
| OrdersOnly available if the Order Metrics feature, the Orders feature, or the Orders Harmonization feature is enabled | An order | Use SHOW COLUMNS to list the available columns. |
| OrderTcbOnly available if the Order Metrics feature, the Orders feature, or the Orders Harmonization feature is enabledNote: The following Order Metrics have been deprecated. Any new customers who onboard on Orders or Orders Harmonization will not get these metrics.The Order ELP and Order Item objectsThe "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objectsExisting Orders customers who have these metrics will continue to be supported. | A "total contracted billing" metric for an order action | Use SHOW COLUMNS to list the available columns. |
| OrderTcvOnly available if the Order Metrics feature, the Orders feature, or the Orders Harmonization feature is enabledNote: The following Order Metrics have been deprecated. Any new customers who onboard on Orders or Orders Harmonization will not get these metrics.The Order ELP and Order Item objectsThe "Generated Reason" and "Order Item ID" fields in the Order MRR, Order TCB, Order TCV, and Order Quantity objectsExisting Orders customers who have these metrics will continue to be supported. | A "total contract value" metric for an order action | Use SHOW COLUMNS to list the available columns. |
| Payment | A payment | Use SHOW COLUMNS to list the available columns. |
| PaymentApplicationOnly available if the Invoice Settlement feature is enabled | A payment that is applied to an invoice or a debit memo | Use SHOW COLUMNS to list the available columns. |
| PaymentApplicationItemOnly available if the Invoice Settlement feature is enabled | A payment that is applied to a line item in an invoice or a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| PaymentGatewayReconciliation EventLog | An event that was processed by a payment reconciliation job | Use SHOW COLUMNS to list the available columns. |
| PaymentMethod | A payment method | Use SHOW COLUMNS to list the available columns. |
| PaymentMethodSnapshot | A copy of the payment method that was used in a transaction | Use SHOW COLUMNS to list the available columns. |
| PaymentMethodTransactionLog | A transaction from Zuora to the payment gateway associated with a payment method.If Zuora Fraud Protection is enabled, the record of data related to the fraud protection service is also included. | Use SHOW COLUMNS to list the available columns. |
| PaymentPartOnly available if the Invoice Settlement feature is enabled | An applied or unapplied portion of a payment | Use SHOW COLUMNS to list the available columns. |
| PaymentPartItemOnly available if both Invoice Settlement and Invoice Item Settlement are enabled | A portion of a payment that is applied to a line item in an invoice or a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| PaymentReconciliationJob | A payment reconciliation job | Use SHOW COLUMNS to list the available columns. |
| PaymentReconciliationLog | A reconciled transaction that was processed by a payment reconciliation job | Use SHOW COLUMNS to list the available columns |
| PaymentRun | A payment run | Use SHOW COLUMNS to list the available columns. |
| PaymentTransactionLog | A transaction from Zuora to the payment gateway associated with a payment.If Zuora Fraud Protection is enabled, the record of data related to the fraud protection service is also included. | Use SHOW COLUMNS to list the available columns. |
| ProcessedUsage | Uploaded usage that has been processed | Use SHOW COLUMNS to list the available columns. |
| Product | A product in your product catalog | Use SHOW COLUMNS to list the available columns. |
| ProductFeatureOnly available if you use Entitlements | A feature in your product catalog | Use SHOW COLUMNS to list the available columns. |
| ProductRatePlan | A rate plan in your product catalog | Use SHOW COLUMNS to list the available columns. |
| ProductRatePlanCharge | A charge in your product catalog | Use SHOW COLUMNS to list the available columns. |
| ProductRatePlanChargeTier | A charge tier in your product catalog | Use SHOW COLUMNS to list the available columns. |
| RatePlan | A rate plan in a subscription | Use SHOW COLUMNS to list the available columns. |
| RatePlanCharge | A charge in a subscription | Use SHOW COLUMNS to list the available columns. |
| RatePlanChargeTier | A charge tier in a subscription | Use SHOW COLUMNS to list the available columns. |
| Ramp | A ramp in an order defined in a ramp deal | Use SHOW COLUMNS to list the available columns. |
| RampInterval | A ramp interval in a ramp | Use SHOW COLUMNS to list the available columns. |
| Refund | A refund | Use SHOW COLUMNS to list the available columns. |
| RefundApplicationOnly available if the Invoice Settlement feature is enabled | A refund that is applied to a payment or a credit memo | Use SHOW COLUMNS to list the available columns. |
| RefundApplicationItemOnly available if the Invoice Settlement feature is enabled | a refund that is applied to a line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| RefundInvoicePaymentDeprecated if the Invoice Settlement feature is enabled | A refunded portion of a payment that is applied to an invoice | Use SHOW COLUMNS to list the available columns. |
| RefundPartOnly available if the Invoice Settlement feature is enabled | An applied or unapplied portion of a refund | Use SHOW COLUMNS to list the available columns. |
| RefundPartItemOnly available if both Invoice Settlement and Invoice Item Settlement are enabled | A portion of a refund that is applied to a line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| RefundTransactionLog | A transaction from Zuora to the payment gateway associated with a payment | Use SHOW COLUMNS to list the available columns. |
| RevenueChargeSummaryOnly available if you use Zuora Finance - Revenue | A revenue distribution summary of a charge | Use SHOW COLUMNS to list the available columns. |
| RevenueChargeSummaryItemOnly available if you use Zuora Finance - Revenue | An item in a revenue distribution summary of a charge | Use SHOW COLUMNS to list the available columns. |
| RevenueEventOnly available if you use Zuora Finance - Revenue | A revenue event | Use SHOW COLUMNS to list the available columns. |
| RevenueEventCreditMemoItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue event that is associated with a line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueEventDebitMemoItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue event that is associated with a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueEventInvoiceItemOnly available if you use Zuora Finance - Revenue | A revenue event that is associated with a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueEventInvoiceItem AdjustmentOnly available if you use Zuora Finance - Revenue | A revenue event that is associated with an adjustment to a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueEventItemOnly available if you use Zuora Finance - Revenue | A revenue event item | Use SHOW COLUMNS to list the available columns. |
| RevenueEventItemCreditMemo ItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue event item that is associated with a line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueEventItemDebitMemo ItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue event item that is associated with a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueEventItemInvoice ItemOnly available if you use Zuora Finance - Revenue | A revenue event item that is associated with a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueEventItemInvoice ItemAdjustmentOnly available if you use Zuora Finance - Revenue | A revenue event item that is associated with an adjustment to a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueEventTypeOnly available if you use Zuora Finance - Revenue | A revenue event type | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleOnly available if you use Zuora Finance - Revenue | A revenue schedule | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleCreditMemo ItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue schedule that is associated with a line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleDebitMemo ItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue schedule that is associated with a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleInvoice ItemOnly available if you use Zuora Finance - Revenue | A revenue schedule that is associated with a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleInvoice ItemAdjustmentOnly available if you use Zuora Finance - Revenue | A revenue schedule that is associated with an adjustment to a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleItemOnly available if you use Zuora Finance - Revenue | a revenue schedule item | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleItemCreditMemo ItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue schedule item that is associated with a line item in a credit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleItemDebitMemo ItemOnly available if you use Zuora Finance - Revenue and the Invoice Settlement feature is enabled | A revenue schedule item that is associated with a line item in a debit memo | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleItemInvoice ItemOnly available if you use Zuora Finance - Revenue | a revenue schedule item that is associated with a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| RevenueScheduleItemInvoice ItemAdjustmentOnly available if you use Zuora Finance - Revenue | A revenue schedule item that is associated with an adjustment to a line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| State | A subregion of a country or region | Use SHOW COLUMNS to list the available columns. |
| Subscription | A subscription | Use SHOW COLUMNS to list the available columns. |
| SubscriptionStatusHistory | The status history of a subscription | Use SHOW COLUMNS to list the available columns. |
| TaxableItemSnapshotOnly available if the Taxable Item Snapshot feature is enabled | A copy of information that was used in a tax calculation | Use SHOW COLUMNS to list the available columns. |
| TaxationItem | A taxation line item in an invoice | Use SHOW COLUMNS to list the available columns. |
| UpdaterBatch | A batch of payment methods that was sent to a payment method updater service provider | Use SHOW COLUMNS to list the available columns. |
| UpdaterDetail | A payment method update | Use SHOW COLUMNS to list the available columns. |
| Usage | A usage recordIf the Active Rating feature is enabled, Each row represents a usage record that was created via the Active Rating feature | Use SHOW COLUMNS to list the available columns. |
| UserOnly platform admin users can access the User table | A user in your Zuora tenant | emailfirstnameidlastnameusername |
| workflow | A workflow version or a workflow run. | Use SHOW COLUMNS to list the available columns. |
| workflow_api_call | An API call made during a workflow run. | Use SHOW COLUMNS to list the available columns. |
| workflow_linkage | A connection between two tasks in a workflow version. | Use SHOW COLUMNS to list the available columns. |
| workflow_task | A task that is part of a workflow version or a workflow run. | Use SHOW COLUMNS to list the available columns. |
| workflow_task_usage | Your entity's usage of Workflow over a single day. | Use SHOW COLUMNS to list the available columns. |
| workflow_definition | A workflow definition that has at least one workflow version. | Use SHOW COLUMNS to list the available columns. |
| attachment | The information of a file attached to a Zuora object. You can now query the attachment file information of the following Zuora objects:debitmemocreditmemoaccountsubscriptioninvoice | Use SHOW COLUMNS to list the available columns. |

By default, all UUIDs are handled as 32-character strings. To enable 36-character UUIDs, submit a request at [Zuora Global Support](https://support.zuora.com/).

To assist with converting between 32-character UUIDs and 36-character UUIDs, Zuora provides the following custom functions:
| Function | Description |
| --- | --- |
| to_uuid32 | Converts a 36-character object identifier to a 32-character object identifier. Newer Zuora features such as Data Query and the Active Rating feature use 36-character object identifiers, while older features use 32-character object identifiers.For example:to_uuid32('2c92c0f9-67bb-659c-0167-be58d878735f')Returns:2c92c0f967bb659c0167be58d878735fSee the "Examples" section below for a sample query that uses the to_uuid32 function. |
| to_uuid36 | Converts a 32-character object identifier to a 36-character object identifier. Newer Zuora features such as Data Query and the Active Rating feature use 36-character object identifiers, while older features use 32-character object identifiers.For example:to_uuid36('2c92c0f967bb659c0167be58d878735f')Returns:2c92c0f9-67bb-659c-0167-be58d878735fSee the "Examples" section below for a sample query that uses the to_uuid36 function. |

## Get the date value of a timestamp

You can get the date value of a timestamp by calling the `date` function. The syntax of this function is as follows:

-   `date(<timestamp>)`

-   `date(<timestamp> AT TIME ZONE <timezone>)`


The `date` function takes the `timestamp` parameter and returns a date value. The `timestamp` parameter is required. You can get the date in a particular time zone by specifying a `timezone` after the `timestamp`.

Assuming the current date and time are 2023-01-12 04:30:00 UTC, the results of some typical examples are as follows:
| Function expression | Result | Description |
| --- | --- | --- |
| date(CURRENT_TIMESTAMP) | 2023-01-12 | Returns the date of current UTC. |
| date(CURRENT_TIMESTAMP AT TIME ZONE '-08:00') | 2023-01-11 | Returns the date of current UTC in UTC-08:00 time zone. |
| date(CURRENT_TIMESTAMP AT TIME ZONE 'America/Los_Angeles') | 2023-01-11 | Returns the date of current UTC in Los Angeles time zone (UTC-07:00 or UTC-08:00 depending on the time of the year). |
| date(timestamp '2022-12-30 13:30:00') | 2022-12-30 | Returns the date of 2022-12-30 13:30:00 UTC. |
| date(timestamp '2022-12-30 13:30:00 -08:00') | 2022-12-30 | Returns the date of 2022-12-30 13:30:00 UTC-08:00. |
| date(timestamp '2022-12-30 13:30:00 -08:00' AT TIME ZONE 'UTC') | 2022-12-30 | Returns the date of 2022-12-30 13:30:00 UTC-08:00 in UTC time zone. |
| date(timestamp '2022-12-30 13:30:00 -08:00' AT TIME ZONE '+08:00') | 2022-12-31 | Returns the date of 2022-12-30 13:30:00 UTC-08:00 in UTC+08:00 time zone. |

For more information about how to use the date function in queries, see Best-practice samples for common queries.

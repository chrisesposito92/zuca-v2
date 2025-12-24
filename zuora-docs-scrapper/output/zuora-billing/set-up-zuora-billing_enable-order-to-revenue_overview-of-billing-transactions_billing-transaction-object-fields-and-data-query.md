---
title: "Billing Transaction object fields and Data Query"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-billing-transactions/billing-transaction-object-fields-and-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:54.924Z"
---

# Billing Transaction object fields and Data Query

An overview of the Billing Transaction object fields and how to perform queries using Data Query.

You can perform a query from the Billing Transaction object through Data Query. For information about the basic usage of Data Query, see [Construct SQL Queries in Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query).

The following table lists all the fields that are defined on the Billing Transaction object.

| Field name | Format | Description |
| --- | --- | --- |
| AdjustmentLiabilityAccountId | String | The accounting ID for the adjustment liability. |
| AdjustmentLiabilityAccountName | String | The accounting name for the adjustment liability. |
| AdjustmentLiabilityAccountNumber | String | The accounting number for the adjustment liability. |
| AdjustmentLiabilityGlAccountName | String | The GL accounting name for the adjustment liability. |
| AdjustmentRevenueAccountId | String | The accounting ID for the adjustment revenue. |
| AdjustmentRevenueAccountName | String | The accounting name for the adjustment revenue. |
| AdjustmentRevenueAccountNumber | String | The accounting number for the adjustment revenue. |
| AdjustmentRevenueGlAccountName | String | The GL accounting name for the adjustment revenue. |
| AvoidOverage | Boolean | The flag of avoiding overage. |
| BillToCityId | String | The city ID of the billed to contact. |
| BillToCountryId | String | The country ID of the billed to contact. |
| BillToStateId | String | The state ID of the billed to contact. |
| BookingReference | String | The booking reference of the billing document. |
| BookingRatePlanChargeVersion | String | The booking rate plan charge version. |
| BookingSubscriptionVersion | String | The booking subscription's version. |
| BusinessType | String | The business type of the billing document. The type is INV for revenue standalone credit memo. |
| ChargeCreateDate | Timestamp | The date when an RPC is created. |
| ChargeLastUpdateDate | Timestamp | The last update date when an RPC is created. |
| ChargeModelId | String | The charge model ID of the RPC. |
| ChargeName | String | The name of the charge. |
| ChargeNumber | String | The unique number that identifies the charge. |
| ChargeSegment | Integer | The ID number of the charge segment. |
| ChargeThroughDate | Date | The charge through the date of the billing document. |
| ChargeTypeId | String | The charge type ID of the RPC. |
| CompanyCode | String | The code of the company. |
| ContractAssetAccountId | String | The accounting ID for the contract asset. |
| ContractAssetAccountName | String | The accounting name for the contract asset. |
| ContractAssetAccountNumber | String | The accounting number for the contract asset. |
| ContractAssetGlAccountName | String | The GL accounting name for the contract asset. |
| ContractLiabilityAccountId | String | The accounting ID for the contract liability. |
| ContractLiabilityAccountName | String | The accounting name for the contract liability. |
| ContractLiabilityAccountNumber | String | The accounting number for the contract liability. |
| ContractLiabilityGlAccountName | String | The GL account name for the contract liability. |
| ContractRecognizedRevenueAccountId | String | The accounting ID for the contract recognized. |
| ContractRecognizedRevenueAccountName | String | The accounting name for the contract recognized. |
| ContractRecognizedRevenueAccountNumber | String | The accounting number for the contract recognized revenue. |
| ContractRecognizedRevenueGlAccountName | String | The GL accounting name for the contract recognized. |
| CreatedByID | String | The ID of the Zuora user that created this transaction |
| CreatedDate | TimeStamp | The date and time when the booking transaction is created. |
| UpdatedByID | String | The ID of the Zuora user who updated the booking transaction. |
| UpdatedDate | TimeStamp | The date and time when the booking transaction is updated. |
| CurrencyCode | String | The currency code associated with the transaction. |
| CustomerId | String | The ID of the customer. |
| CustomerName | String | The name of the customer. |
| CustomerNumber | String | The number of the customer. |
| DiscountAppliedToRatePlanChargeId | String | The discount applied to the rate plan charge ID. |
| DiscountAppliedToRatePlanChargeModelId | String | The charge model ID of the RPC a discount is applied to. |
| DiscountAppliedToRatePlanChargeNumber | String | The charge number of the RPC a discount is applied to. |
| DiscountAppliedToRatePlanChargeSegment | Integer | The charge segment of the RPC a discount is applied to. |
| DiscountAppliedToRatePlanChargeTypeId | String | The charge type ID of the RPC a discount is applied to. |
| DocumentDate | Date | The target date of the document, that is, memo date, invoice date. |
| DocumentId | String | The ID of the billing document. |
| DocumentLineId | String | The ID of the document line. |
| DocumentLineNumber | String | The number of the document line. |
| DocumentNumber | String | The number of the document. |
| DocumentQuantity | Decimal | The quantity of items in one document. |
| DocumentType | String | The type of the billing document. |
| EndDate | Date | The end date of the billing document. |
| ExcludeItemBillingFromRevenueAccounting | Boolean | The billing item excluded from the revenue account. |
| ExcludeItemBookingFromRevenueAccounting | Boolean | The booking item excluded from the revenue account. |
| FxRate | Decimal | The FX rate on the transaction ZbillExRate date. |
| GlobalFxRate | Decimal | The global FX rate on the transaction ZbillExRateDate. |
| HomeCurrencyCode | String | The home currency code associated with the entity. |
| Id | String | The ID of the Billing Transaction object. |
| InlineDiscountAmount | String | The Inline Discount Amount |
| InvoiceId | String | The ID of the invoice. |
| InvoiceOriginalOwnerId | String | The original owner ID of the invoice. |
| InvoiceOwnerId | String | The owner ID of the invoice. |
| InvoiceOwnerName | String | The owner name of the invoice. |
| IsUnbilled | String | Unbilled |
| IsAllocationEligible | String | Eligible for allocation |
| ListPrice | Decimal | The list price of a charge. |
| OrderedQuantity | Decimal | The quantity ordered. |
| OrderLineItemId | String | The ID of the Order Line Item. |
| OrgName | String | The name of the organization |
| OrgID | String | The organisations ID |
| OriginalInvoiceLineId | String | The original invoice line ID. The value is null for revenue standalone credit memo. |
| OriginalRatePlanChargeId | String | The original ID to identify the rate plan charge. |
| OriginalSalesOrderLineItemId | String | The original sales order line ID. The value is null for revenue standalone credit memo. |
| ProductCategory | String | The category of the product |
| ProductClass | String | The class of the product |
| ProductFamily | String | The family of the product |
| ProductId | String | The unique ID of a product. |
| ProductLine | String | The product line. |
| ProductRatePlanChargeId | String | The unique ID to identify the product rate plan charge. |
| ProductRatePlanId | String | The unique ID to identify the product rate plan. |
| RatePlanChargeId | String | The unique ID of the rate plan charge. |
| RatePlanChargeVersion | Long | The version of the RPC. |
| RatePlanId | String | The unique ID of the rate plan. |
| RatePlanName | String | The name of the rate plan. |
| RetainLineId | Boolean | The ID of the retain line. |
| RevenueRecognitionTiming | String | The type of revenue recognition timing. |
| RevenueAmortizationMethod | String | The type of the revenue amortization method. |
| RevenueExtendedSellingPrice | String | The Revenue Extended Selling Price. |
| ReflectDiscountinNetAmount | String | The Reflected discount in net amount. |
| SalesOrderLineId | String | The line ID of the sales order. The value is null for revenue standalone credit memo. |
| SalesOrderLineNumber | String | The line number of the sales order. |
| SalesOrderNumber | String | The number of the sales order. |
| SellPrice | Decimal | The selling price of a charge. |
| SoldToCityId | String | The city ID of the sold to contact. |
| SoldToCountryId | String | The country ID of the sold to contact. |
| SoldToStateId | String | The state ID of the sold to contact. |
| StartDate | Date | The start date of the billing document. |
| SubscriptionEndDate | Date | The end date of the subscription. |
| SubscriptionId | String | The unique ID of the subscription. |
| SubscriptionName | String | The name of the subscription. |
| SubscriptionOriginalOwnerId | String | The original owner ID of the subscription. |
| SubscriptionOwnerId | String | The owner ID of the subscription. |
| SubscriptionOwnerName | String | The owner name of the subscription. |
| SubscriptionStartDate | Date | The start date of the subscription. |
| SubscriptionStatus | String | The status of the subscription. |
| SubscriptionTermEndDate | Date | The end date of the subscription's current term. |
| SubscriptionTermStartDate | Date | The start date of the subscription's current term. |
| SubscriptionVersion | Long | The version number of the subscription. |
| TaxAmount | String | The taxed amount |
| TermNumber | Integer | The term number when a charge segment is first introduced. |
| TermType | String | The term type of the subscription. |
| TransactionType | String | The transaction type of the booking. |
| TriggerEvent | String | The trigger event of the billing document. |
| UnbilledReceivablesAccountId | String | The accounting ID for the unbilled receivables. |
| UnbilledReceivablesAccountName | String | The accounting name for the unbilled receivables. |
| UnbilledReceivablesAccountNumber | String | The accounting number for the unbilled receivables. |
| UnbilledReceivablesGlAccountName | String | The GL accounting name for the unbilled receivables. |
| UnitSalePrice | String | The unit sale price |
| UnitListPrice |  | The unit list price |
| ZbillExRateDate | Date | The Zuora Billing Exchange Rate date. |

---
title: "Booking Transaction object fields and Data Query"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-booking-transactions/booking-transaction-object-fields-and-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:49.905Z"
---

# Booking Transaction object fields and Data Query

An overview of the Booking Transaction object fields and how to perform queries using Data Query.

You can perform a query from the Booking Transaction object through Data Query. For information about the basic usage of Data Query, see [Construct SQL Queries in Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query).

The following table lists all the fields that are defined on the Booking Transaction object.

| Field name | Format | Description |
| --- | --- | --- |
| deleted | Boolean | Indicates whether this record has been removed. |
| Id | String | The ID of the booking transaction. |
| CreatedById | String | The ID of the Zuora user who created this booking transaction. |
| CreatedDate | Timestamp | The date and time when the booking transaction is created. |
| UpdatedById | String | The ID of the Zuora user who updated the booking transaction. |
| UpdatedDate | Timestamp | The date and time when the booking transaction is updated. |
| TransactionType | String | The transaction type of the booking. |
| TransactionSubType | String | The sub transaction type of the booking. |
| OrderID | String | The ID of the order that triggers the change. |
| OrderNumber | String | The number of the order that triggers the change. |
| AmendmentID | String | The ID of the amendment that triggers the change. |
| AmendmentNumber | String | The number of the amendment that triggers the change. |
| TransactionDate | Date | The date of the transaction. |
| SubscriptionOwnerID | String | The ID of the subscription owner the related charge belongs to (snapshot). |
| SubscriptionOwnerAccountNumber | String | The account number of the subscription owner the related charge belongs to (snapshot). |
| SubscriptionInvoiceOwnerId | String | The invoice ID of the subscription owner the related charge belongs to (snapshot). |
| SubscriptionInvoiceOwnerAccountNumber | String | The invoice account number of the subscription owner the related charge belongs to (snapshot). |
| SubscriptionId | String | The unique ID of the subscription. |
| OriginalSubscriptionId | String | The original ID of the subscription. |
| SubscriptionNumber | String | The number of the subscription. |
| SubscriptionVersion | BigInt | The version number of the subscription. |
| RatePlanId | String | The unique ID of the rate plan. |
| RatePlanChargeId | String | The unique ID of the rate plan charge. |
| RevenueRecognitionTiming | String | The type of revenue recognition timing. |
| RevenueAmortizationMethod | String | The type of the revenue amortization method. |
| ChargeNumber | String | The unique number that identifies the charge. |
| OriginalRatePlanChargeId | String | The original ID to identify the rate plan charge. |
| ChargeSegment | Integer | The identifying number of the charge segment. |
| ChargeType | String | The type of the rate plan charge. |
| ChargeModel | String | The charge model that determines how to evaluate charges. |
| OriginalOrderDate | Date | The original order date of the rate plan charge. |
| AmendedByOrderOn | Date | The date when the original subscription or order is created. |
| ProductId | String | The unique ID of a product. |
| ProductName | String | The name of the product. |
| ProductSku | String | The unique SKU for the product. |
| ProductRatePlanId | String | The unique ID to identify the product rate plan. |
| ProductRatePlanName | String | The name of the product rate plan. |
| ProductRatePlanChargeId | String | The unique ID to identify the product rate plan charge. |
| ProductRatePlanChargeName | String | The name of the product rate plan charge. |
| CurrencyCode | String | The currency code associated with the transaction. |
| HomeCurrencyCode | String | The home currency code associated with the entity. |
| FxRate | Decimal | The FX rate on the transaction booking date. |
| DeltaCcv | Decimal | The delta metrics reflect the delta of this segment with the same segment in the previous version (same segment #). For the new segments, the metrics value of the previous version is assumed as 0. |
| PreviousCcv | Decimal | The CCV value for the segment in the previous version of the subscription. |
| CurrentCcv | Decimal | The CCV value for the segment. |
| DeltaElp | Decimal | The delta value of the ELP for the segment before and after the change. |
| PreviousElp | Decimal | The ELP value for the segment in the previous version of the subscription. |
| CurrentElp | Decimal | The ELP value for the segment. |
| DeltaQuantity | Decimal | The delta value of the quantity for the segment before and after the change. |
| PreviousQuantity | Decimal | The quantity for the segment in the previous version of the subscription. |
| CurrentQuantity | Decimal | The quantity for the segment. |
| PreviousStartDate | Date | The start date of the segment in the previous version. |
| CurrentStartDate | Date | The start date of the segment in the current version. |
| PreviousEndDate | Date | The end date of the segment in the previous version. |
| CurrentEndDate | Date | The end date of the segment in the current version. |
| DeltaTermDuration | Integer | The duration of the delta term. |
| ContractLiabilityAccountNumber | String | The accounting number for the contract liability. |
| ContractRecognizedRevenueAccountNumber | String | The accounting number for the contract recognized revenue. |
| ContractAssetAccountNumber | String | The accounting number for the contract asset. |
| AdjustmentLiabilityAccountNumber | String | The accounting number for the adjustment liability. |
| AdjustmentRevenueAccountNumber | String | The accounting number for the adjustment revenue. |
| UnbilledReceivablesAccountNumber | String | The accounting number for the unbilled receivables. |
| DiscountLevel | String | The discount level of the charge. |
| DiscountPercentage | String | The discount percentage of the charge. |
| DiscountAppliedToRatePlanId | String | The discount applied to the rate plan ID. |
| DiscountAppliedToRatePlanChargeId | String | The discount applied to the rate plan charge ID. |
| DiscountAppliedToRatePlanChargeName | String | The discount applied to the rate plan charge name. |
| DiscountAppliedToRatePlanChargenumber | String | The discount applied to the rate plan charge number. |
| DiscountAppliedToRatePlanChargeStartDate | Date | The discount applied to the start date of the rate plan charge. |
| DiscountAppliedToRatePlanChargeEndDate | Date | The discount applied to the end date of the rate plan charge. |
| DiscountAppliedToContractLiabilityAccountNumber | String | The discount applied to the accounting number for the contract liability. |
| DiscountAppliedToContractRecognizedRevenueAccountNumber | String | The discount applied to the accounting number for the contract recognized revenue. |
| DiscountAppliedToContractAssetAccountNumber | String | The discount applied to the accounting number for the contract asset. |
| DiscountAppliedToAdjustmentLiabilityAccountNumber | String | The discount applied to the accounting number for the adjustment liability. |
| DiscountAppliedToAdjustmentRevenueAccountNumber | String | The discount applied to the accounting number for the adjustment revenue. |
| DiscountAppliedToUnbilledReceivablesAccountNumber | String | The discount applied to the accounting number for the unbilled receivables. |
| AmendmentReason | String | Indicates how the term size, quantity, and unit price of a rate plan charge have changed from the previous version. |
| GlobalFxRate | Decimal | The global FX rate on the transaction booking date. |
| OrderLineItemCategory | String | The item category of the order line item. |
| OriginalSalesOrderLineItemID | String | The original sales order ID of the order line item. |
| BillingRule | String | The billing rules of the order line item. |
| ChargeOLICreateDate | Timestamp | Subscription: The creation date of the rate plan charge. OLI: The creation date of the order line item. |
| ChargeOLIUpdateDate | Timestamp | Subscription: The update date of the rate plan charge. OLI: The update date of the order line item. |
| ItemName | String | Subscription: The name of the rate plan charge. OLI: The name of the order line item. |
| CustomerName | String | The name of the customer. |
| CustomerNumber | String | The number of the customer. |
| CustomerID | String | The unique value that is assigned to identify the customer. |
| InlineDiscountAmount | Decimal | The discount amount of the order line item. |
| SalesOrderNumber | String | The number of the sales order. |
| SalesOrderLineNumber | String | The line number of the sales order. |
| SalesOrderLineID | String | The line ID of the sales order. |
| AmendmentType | String | The type of the amendment that triggers the change. |
| OriginalTermStartDate | Date | The original term start date of the rate plan charge. |
| OriginalChargeCreateDate | Timestamp | The original start date when the rate plan charge is created. |
| OriginalChargeSegmentCreateDate | Timestamp | The original start date when the rate plan charge segment is created. |
| AmendmentCreateDate | Timestamp | The date when the amendment is created. |
| SubscriptionLastBookingDate | Date | The last booking date of the subscription. |
| CompanyCode | String | The code of the company. |
| ExcludeItemBookingFromRevenueAccounting | Boolean | The booking item excluded from the revenue account. |
| ExcludeItemBillingFromRevenueAccounting | Boolean | The billing item excluded from the revenue account. |
| SubscriptionTermStartDate | Date | The start date of the subscription current term. |
| SubscriptionTermEndDate | Date | The end date of the subscription current term. |
| SubscriptionCreatorAccountID | String | The account ID who creates the subscription. |
| TermNumber | Integer | The term number when a charge segment is first introduced. |
| ValidityPeriodNumber | Integer | The validity period number for each charge segment. |
| SubscriptionOwnerAccountNumber | String | The subscriptions owner's account number. |
| SubscriptionInvoiceOwnerAccountNumber | String | The subscription invoice owner's account number. |
| ListPrice | String | The Listed price of an item. |
| SellPrice | String | The selling price of an item. |
| ContractLiabilityAccountNumber | String | The Contract Liability Account number. |
| ContractRecognizedRevenueAccountNumber | String | The Account number for Revenue recognized through a contract. |
| AdjustmentLiabilityAccountNumber | String | The Adjustment Liability Account Number. |
| AdjustmentRevenueAccountNumber | String | The Adjustment Revenue Account number. |
| UnbilledReceivablesAccountNumber | String | The unbilled Receivables Account Number. |
| DiscountAppliedToRatePlanChargeId | String | The discount applied to a rate plan charge ID |
| DiscountAppliedToRatePlanChargeName | String | The discount applied to rate plan charge name |
| DiscountAppliedToRatePlanChargeNumber | String | The discount applied to Rate plan charge number |
| DiscountAppliedToRatePlanChargeStar | String | The discount applied to rate plan charge |
| DiscountAppliedToRatePlanChargeEndDate | String | The discount applied to Rate plan charge end date |
| DiscountAppliedToContractLiabilityAccount | String | The discount applied to contract liability account |
| DiscountAppliedToContractRecognized | String | The discount applied to a recognized contract |
| DiscountAppliedToContractAssetAccount | String | The discount applied to contract asset account |
| DiscountAppliedToAdjustmentLiability | String | The discount applied to adjustment liability |
| DiscountAppliedToAdjustmentRevenueAccount | String | The discount applied to adjustment revenue account |
| DiscountAppliedToUnbilledReceivable | String | The discount applied to unbilled receivable |
| OriginalChargeSegmentCreateDate | String | The original charge segment created date |
| ExcludeItemBookingFromRevenueAccount | String | The items that have been excluded from booking in the Revenue account |
| ExcludeItemBillingFromRevenueAccount | String | The item that have been excluded from billing in the Revenue account |
| SubscriptionCreatorAccountName | String | The Account name of the subscription creator |
| SubscriptionCreatorAccountNumber | String | The Account number of the subscription creator |
| SubscriptionCreatorInvoiceOwnerId | String | The invoice owner ID of the subscription |
| SubscriptionCreatorInvoiceOwnerName | String | The invoice owner name of the subscription |
| SubscriptionCreatorInvoiceOwnerNumber | String | The invoice owner number of the subscription |
| TermType | String | The term type |
| RatePlanChargeVersion | String | The rate plan charge version |
| SubscriptionStartDate | String | The subscription start date |
| SubscriptionEndDate | String | The subscription end date |
| TriggerEvent | String | The trigger event |
| SubscriptionStatus | String | The status of subscription |
| ChargeThroughDate | String | The charge through date |
| SubscriptionInvoiceOwnerAccountName | String | The subscription invoice owner account name |
| RampId | String | The Ramp ID |
| RampNumber | String | The Ramp Number |
| ContractLiabilityAccountName | String | The contract liability account name |
| ContractRecognizedRevenueAccountNam | String | Contract recognized Revenue account name |
| ContractAssetAccountName | String | The contract asset account name |
| AdjustmentLiabilityAccountName | String | The adjustment liability account name |
| AdjustmentRevenueAccountName | String | The adjustment Revenue account name |
| UnbilledReceivablesAccountName | String | The unbilled receivables account name |
| ContractLiabilityGlAccountName | String | The contract liability GI account name |
| ContractRecognizedRevenueGlAccountNumber | String | The contract recognized revenue GI account number |
| ContractAssetGlAccountName | String | The contract asset GI account name |
| AdjustmentLiabilityGlAccountName | String | The adjustment liability GI account name |
| AdjustmentRevenueGlAccountName | String | The adjustment Revenue GI account name |
| UnbilledReceivablesGlAccountName | String | The unbilled receivables GI account name |
| IsDoneFlag | String | Confirms the action |
| BusinessType | String | Business Type |
| OrderLineItemId | String | The id of the order line item |
| OrgName | String | Organization's name. |
| UnitSalePrice | String | Unit Sale price |
| UnitListPrice | String | Unit List Price |
| ParentChargeNumber | String | The parent charge number |
| ParentChargeSegment | String | The parent charge segment number |
| TaxAmount | String | Tax amount |
| BillToCountryId | String | Bill to country ID |
| BillToStateId | String | The ID of the state on the bill |
| BillToCityId | String | The ID of the city on the bill |
| SoldToCountryId | String | The ID of the country, the item is sold to |
| SoldToStateId | String | The ID of the state, the item is sold to |
| SoldToCityId | String | The ID of the city, the item is sold to |
| OriginalTermEndDate | String | The original term end date |
| SkipCtModFlag | String | The skip contract modification flag |
| RestrictSoValueUpdateFlag | String | The flag to restrict update SO value |
| OriginalOrderId | String | The original order ID |
| SequenceNumber | String | Sequence number |
| PreviousSubscriptionVersion | String | The version of previous subscription |
| EstimatedEvergreenEndDate | String | The estimate end date of Evergreen invoice |
| ZbillExRateDate | String | The bill Ex rate date |
| IsUnbilled | String | unbilled item |
| IsAllocationEligible | String | Eligible for allocation |
| ProductCategory | String | Product category |
| ProductClass | String | Product Class |
| ProductFamily | String | Product family |
| ProductLine | String | Product Line |
| ActualDiscountStartDate | String | The start date of the actual discount |
| ActualDiscountEndDate | String | The end date of the actual discount |
| OrgId | String | organization ID |
| SubscriptionOwnerAccountName | String | Subscription owner account name |
| RevenueExtendedSellingPrice | String | The Revenue extended selling price |
| ReflectDiscountInNetAmount | String | The reflected discount in net amount |
| ValidityPeriod | String | The validity period |
| EstimatedStartDate | String | The estimated start date |
| EstimatedEndDate | String | The estimated end date |
| ChargeStatus | String | The charge status |

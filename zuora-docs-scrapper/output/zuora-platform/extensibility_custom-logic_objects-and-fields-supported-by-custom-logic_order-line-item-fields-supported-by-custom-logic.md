---
title: "Order Line Item fields supported by Custom Logic"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic/order-line-item-fields-supported-by-custom-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:36.749Z"
---

# Order Line Item fields supported by Custom Logic

This reference lists the fields of the Order Line Item object that are supported by the Custom Logic feature.

For more information about conditions and mutations in custom logic, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

| Field name | Field type | Supported for condition | Supported for mutation |
| --- | --- | --- | --- |
| AccountingCode | String | Yes | No |
| AmendedByOrderOn | Date | Yes | No |
| Amount | Decimal | Yes | No |
| AmountPerUnit | Decimal | Yes | No |
| AmountWithoutTax | Decimal | Yes | No |
| BillingRule | String | Yes | No |
| BillTargetDate | Date | Yes | No |
| CreatedById | String | No | No |
| CreatedDate | DateTime | Yes | No |
| DeferredRevenueAccountingCode | String | Yes | No |
| Description | String | Yes | No |
| Discount | Decimal | Yes | No |
| ExcludeItemBillingFromRevenueAccounting | Boolean | Yes | No |
| ExcludeItemBookingFromRevenueAccounting | Boolean | Yes | No |
| Id | String | No | No |
| InlineDiscountPerUnit | Decimal | Yes | No |
| InlineDiscountType | String | Yes | No |
| IsAllocationEligible | Boolean | Yes | No |
| IsUnbilled | Boolean | Yes | No |
| ItemCategory | String | Yes | No |
| ItemName | String | Yes | No |
| ItemNumber | String | Yes | No |
| ItemState | String | Yes | No |
| ItemType | String | Yes | No |
| ListPrice | Decimal | Yes | No |
| ListPricePerUnit | Decimal | Yes | No |
| OrderId | String | Yes | No |
| OriginalOrderDate | Date | Yes | No |
| OriginalOrderId | String | Yes | No |
| OriginalOrderLineItemId | String | Yes | No |
| OriginalOrderLineItemNumber | String | Yes | No |
| OriginalOrderNumber | String | Yes | No |
| ProductCode | String | Yes | No |
| ProductRatePlanChargeId | String | Yes | No |
| PurchaseOrderNumber | String | Yes | No |
| Quantity | Decimal | Yes | No |
| QuantityAvailableForReturn | Decimal | Yes | No |
| QuantityFulfilled | Decimal | Yes | No |
| QuantityPendingFulfillment | Decimal | Yes | No |
| RecognizedRevenueAccountingCode | String | Yes | No |
| RelatedSubscriptionNumber | String | Yes | No |
| RequiresFulfillment | Boolean | Yes | No |
| RevenueAmortizationMethod | String | No | No |
| RevenueRecognitionRule | String | Yes | No |
| RevenueRecognitionTiming | String | No | No |
| SoldTo | String | Yes | No |
| soldToSnapshotId | String | Yes | No |
| TaxCode | String | Yes | No |
| TaxMode | String | Yes | No |
| TransactionEndDate | Date | Yes | No |
| TransactionStartDate | Date | Yes | No |
| UOM | String | Yes | No |
| UpdatedById | String | No | No |
| UpdatedDate | DateTime | Yes | No |

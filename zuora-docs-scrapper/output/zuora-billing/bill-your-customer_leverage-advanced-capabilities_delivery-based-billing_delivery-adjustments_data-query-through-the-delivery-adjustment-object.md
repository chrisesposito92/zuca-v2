---
title: "Data Query through the Delivery Adjustment object"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-adjustments/data-query-through-the-delivery-adjustment-object"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:55.950Z"
---

# Data Query through the Delivery Adjustment object

Explore how to query the Delivery Adjustment object using Data Query and access its fields through the Adjustments API.

You can query the Delivery Adjustment object through Data Query. For information about the basic usage of Data Query, see Constructing SQL Queries in Data Query .

The following table lists all the fields that are defined on the Delivery Adjustment object. You can access the Delivery Adjustment object and all its fields through Data Query and the Adjustments API .

| Field name | Format | Description |
| --- | --- | --- |
| Id | string | The ID of the delivery adjustment. |
| AdjustmentNumber | string | The unique human readable number of the delivery adjustment. |
| CreditMemoNumber | string | The Credit Memo generated for the delivery adjustment. |
| DebitMemoNumber | string | The Debit Memo generated for the cancelled delivery adjustment. |
| MemoNumber | string | The number of the credit memo that is associated with the delivery adjustment. |
| SegmentId | string | The id for the specific charge segment of the corresponding ChargeNumber. |
| ChargeId | string | The charge ID in the subscription for which the adjustment needs to be created. |
| ChargeNumber | string | The charge number in the subscription for which the adjustment needs to be created. |
| SubscriptionId | string | The subscription ID for which the adjustment is created. |
| SubscriptionNumber | string | The subscription number for which the adjustment is created. |
| OriginalSubId | string | The ID of the subscription of version 1. |
| Status | string | The status of the delivery adjustment. The value is either Billed or Cancelled . |
| Quantity | decimal | The value is 1. Reserved for future use. |
| AmountPerUnit | decimal | The amount for each delivery adjustment. Reserved for future use. |
| Amount | decimal | The value equals the AmountPerUnit multiplied by the Quantity and then by -1, where the Quantity is always 1. |
| Date | date | The date that the delivery adjustment is created against. |
| DeliveryDay | string | The day of the week that the delivery adjustment is against. |
| Reason | string | The reason for the adjustment. |
| Type | string | The type of adjustment. The value is DeliveryCredit. |
| AccountId | string | The account ID for which the adjustment is created. The account ID indicates the subscription owner. |
| InvoiceOwnerAccountId | string | The invoice owner of the subscription. |
| AccountingCode | string | The Accounting Code in the product rate plan that maps to an item in your accounting system. |
| DeferredAccountingCode | string | The accounting code for the deferred revenue, such as Monthly Recurring Liability. |
| RecognizedRevenueAccountingCode | string | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. |
| RevenueRecognitionRuleName | string | The name of the revenue recognition rule governing the revenue schedule. |
| BillingDate | date | The date when the associated Credit Memo is created. |
| deleted | boolean | Denotes whether the corresponding row data is deleted or not. |
| CreatedById | string | The account that creates the delivery adjustment. |
| CreatedDate | timestamp | The date when the delivery adjustment is created. |
| UpdatedById | string | The account that updates the delivery adjustment. |
| UpdatedDate | timestamp | The date when the delivery adjustment is updated. |

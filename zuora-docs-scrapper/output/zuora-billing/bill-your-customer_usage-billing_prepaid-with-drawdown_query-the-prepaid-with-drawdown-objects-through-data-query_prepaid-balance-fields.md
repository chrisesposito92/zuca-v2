---
title: "Prepaid Balance fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/query-the-prepaid-with-drawdown-objects-through-data-query/prepaid-balance-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:33.906Z"
---

# Prepaid Balance fields

A detailed list of fields defined on the Prepaid Balance object, including their types and descriptions.

The following table lists all the fields that are defined on the Prepaid Balance object.

| Field | Type | Description |
| --- | --- | --- |
| Id | string | The identifier. |
| Name | string | The name of the Prepaid Balance. It is a combination of Subscription Number and Prepaid UOM. For example, A-S00000037_Each |
| TotalFund | decimal | The total funded prepaid balance. |
| Balance | decimal | The current prepaid balance. |
| StartDate | date | The start date of the Prepaid Balance. |
| EndDate | date | The end date of the Prepaid Balance. |
| AccountId | string | If it belongs to an Account, the Invoice Owner Account Id. |
| OrigSubscriptionId | string | If it belongs to a Subscription, the original Subscription Id. |
| UOM | string | The Prepaid UOM for a prepayment charge. |
| CreatedById | string | The ID of the user who created the Prepaid Balance. |
| CreatedDate | datetime | The date when the Prepaid Balance is created. |
| UpdatedById | string | The ID of the user who updated the Prepaid Balance. |
| UpdatedDate | datetime | The date when the Prepaid Balance is updated. |
| Deleted | boolean | Indicates whether the Prepaid Balance is deleted. |
| PrepaidBalanceState | enum | The state of the Prepaid Balance. Values: ACTIVE or EXPIRED |
| PrepaidType | int | The type of the Prepaid Balance. Value: NULL. |

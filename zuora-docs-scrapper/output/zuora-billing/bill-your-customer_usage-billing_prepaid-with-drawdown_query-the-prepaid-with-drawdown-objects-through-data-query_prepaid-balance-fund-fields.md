---
title: "Prepaid Balance Fund fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/query-the-prepaid-with-drawdown-objects-through-data-query/prepaid-balance-fund-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:37.042Z"
---

# Prepaid Balance Fund fields

Details the fields defined on the Prepaid Balance Fund object, including their types and descriptions.

The following table lists all the fields that are defined on the Prepaid Balance Fund object.

| Field | Type | Description |
| --- | --- | --- |
| Id | string | The identifier. |
| AccountId | string | The Account Id. |
| PrepaidBalanceId | string | The Prepaid Balance Id. |
| FundedBalance | decimal | The funded balance: the total units of the fund. |
| Balance | decimal | Remaining balance on the fund: the remaining units of the fund. |
| SourceId | string | The source Id of the fund: the original charge ID. |
| FundSourceType | string(enum) | The type of the Prepaid Balance Fund. Values: CHARGE, ORDER_LINE_ITEM, CREDIT_MEMO_ITEM, or DEBIT_MEMO_ITEM |
| FundingPrice | fixed | The price amount of a fund. Calculation: {number of Billing Periods in one Fund Validity Period} * {price in one Billing Period} |
| ChargeSegmentNumber | Integer | The number of the charge segment. |
| StartDate | date | Start date of the fund effective period. |
| EndDate | date | End date of the fund effective period. |
| CreatedById | string | The ID of the user who created the Prepaid Balance Fund. |
| CreatedDate | datetime | The date when the Prepaid Balance Fund is created. |
| UpdatedById | string | The ID of the user who updated the Prepaid Balance Fund. |
| UpdatedDate | datetime | The date when the Prepaid Balance Fund is updated. |
| Priority | Int | The priority of the Fund. Positive values: 10(high), 50(medium),100(low) |
| Deleted | boolean | Indicates whether the Prepaid Balance Fund is deleted. |

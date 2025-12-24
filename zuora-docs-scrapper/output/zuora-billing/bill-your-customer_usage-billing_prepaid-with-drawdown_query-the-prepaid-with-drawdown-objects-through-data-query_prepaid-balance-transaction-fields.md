---
title: "Prepaid Balance Transaction fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/query-the-prepaid-with-drawdown-objects-through-data-query/prepaid-balance-transaction-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:39.824Z"
---

# Prepaid Balance Transaction fields

Details the fields defined on the Prepaid Balance Transaction object, including identifiers, amounts, transaction types, and user information.

The following table lists all the fields that are defined on the Prepaid Balance Transaction object.

| Field | Type | Description |
| --- | --- | --- |
| Id | string | The identifier. |
| AccountId | string | The Account Id. |
| PrepaidBalanceId | string | The Prepaid Balance Id. |
| FundId | string | The Fund Id. |
| Amount | decimal | The Amount of Units to be adjusted to the Prepaid Balance (could be positive or negative). |
| PrepaidBalanceTransactionType | enum | The type of the Prepaid Balance Transaction. One of the following values:PREPAYMENTDRAWDOWNPREPAYMENT_ADJUSTMENTDRAWDOWN_ADJUSTMENTDRAWDOWN_REVERSALPREPAYMENT_CREDIT_BACKPREPAYMENT_CREDIT_BACK_REVERSAL |
| Balance | decimal | The Prepaid Balance after a transaction. |
| TransactionSourceType | enum | The type of the transaction source. Values: CHARGE, ORDER_LINE_ITEM, or USAGE. |
| SourceId | string | The transaction source id (original Charge Id, Guided Usage Id, Order Line Item Id). |
| CreatedById | string | The ID of the user who created the Prepaid Balance Transaction. |
| CreatedDate | datetime | The date when the Prepaid Balance Transaction is created. |
| UpdatedById | string | The ID of the user who updated the Prepaid Balance Transaction. |
| UpdatedDate | datetime | The date when the Prepaid Balance Transaction is updated. |
| TransactionDate | date | The date of the Prepaid Balance Transaction. |
| Deleted | boolean | Indicates whether the Prepaid Balance Transaction is deleted. |

---
title: "Invoice Schedule fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/query-billing-schedule-objects-through-data-query/invoice-schedule-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:50.821Z"
---

# Invoice Schedule fields

Explore the fields available in the Invoice Schedule object, accessible via Data Query and API operations.

The following table lists all the fields that are defined on the Invoice Schedule object. You can access the Invoice Schedule object and all its fields through Data Query and the Invoice Schedules API operations.

| Field | Type | Description |
| --- | --- | --- |
| deleted | boolean | Whether the invoice schedule is deleted. |
| Id | string | The unique identifier of the invoice schedule. |
| CreatedById | string | The ID of the user who created the invoice schedule. |
| CreatedDate | datetime | The date and time when the invoice schedule is created. |
| UpdatedById | string | The ID of the user who updated the invoice schedule. |
| UpdatedDate | datetime | The date and time when the invoice schedule is last updated. |
| TotalAmount | decimal | The total amount that needs to be billed through the processing of the invoice schedule. |
| ActualAmount | decimal | The actual amount that needs to be billed totally through the processing of the invoice schedule. The actual amount might become different from the total amount due to additional order changes. |
| BilledAmount | decimal | The amount that has been billed through the processing of the invoice schedule. |
| UnbilledAmount | decimal | The amount that is waiting to be billed through the invoice schedule. |
| NextRunDate | date | The run date of the next invoice schedule item waiting to be processed.If the invoice schedule needs to be credited back due to additional change orders like subscription cancellation or product removal, the value of this field is the run date of the credit memo.If no additional invoices or credit memos are generated from the invoice schedule, the value of this field is null. |
| Number | string | The sequence number of the invoice schedule. |
| Notes | string | The comments on the invoice schedule. |
| AccountId | string | The unique ID of the customer account that the invoice schedule belongs to. |
| Status | string | The status of the invoice schedule.PendingPartially ProcessedFully Processed |

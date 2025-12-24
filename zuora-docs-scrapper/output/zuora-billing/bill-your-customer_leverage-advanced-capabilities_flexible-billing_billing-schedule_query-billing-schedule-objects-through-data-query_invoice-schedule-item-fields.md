---
title: "Invoice Schedule Item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/query-billing-schedule-objects-through-data-query/invoice-schedule-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:53.425Z"
---

# Invoice Schedule Item fields

Explore the fields available in the Invoice Schedule Item object, accessible through Data Query, including field types and descriptions.

The following table lists all the fields that are defined on the Invoice Schedule Item object. You can access the Invoice Schedule Item object and all its fields through Data Query .

| Field | Type | Description |
| --- | --- | --- |
| deleted | boolean | Whether the invoice schedule item is deleted. |
| Id | string | The unique identifier of the invoice schedule item. |
| CreatedById | string | The ID of the user who created the invoice schedule item. |
| CreatedDate | datetime | The date and time when the invoice schedule item is created. |
| UpdatedById | string | The ID of the user who updated the invoice schedule item. |
| UpdatedDate | datetime | The date and time when the invoice schedule item is last updated. |
| Amount | decimal | The amount of the invoice generated during the processing of the invoice schedule item. |
| ActualAmount | decimal | The amount that is actually billed during the processing of the invoice schedule item.By default, the value of the ActualAmount field is the same as that of the Amount field. The actual amount might become different from the original amount due to additional order changes. |
| RunDate | date | The date in the tenant’s time zone when the invoice schedule item is planned to be processed to generate an invoice. |
| InvoiceScheduleId | string | The ID of the invoice schedule that the invoice schedule item belongs to. |
| InvoiceId | string | The ID of the invoice that is generated during the processing of the invoice schedule item. |
| CreditMemoId | string | The ID of the credit memo that is generated during the processing of the invoice schedule item. |
| Status | string | The status of the invoice schedule item.Pending: The invoice schedule item is waiting to be processed.Executing: The invoice schedule item is being processed.Processed: The invoice has been generated during the processing of the invoice schedule item. |

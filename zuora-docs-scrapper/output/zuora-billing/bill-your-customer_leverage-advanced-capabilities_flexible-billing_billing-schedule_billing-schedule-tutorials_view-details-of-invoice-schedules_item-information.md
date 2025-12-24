---
title: "Item information"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/view-details-of-invoice-schedules/item-information"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:29.908Z"
---

# Item information

The following table lists the information about invoice schedule items displayed in the Schedule Items section.

| Field | Description |
| --- | --- |
| # | The sequence number of the invoice schedule item. |
| Name | The name of the invoice schedule item. |
| Run Date | The date in the tenant’s time zone when the invoice schedule item is planned to be processed to generate an invoice. |
| Amount | The amount of the invoice generated during the processing of the invoice schedule item.The value of the Amount field remains unchanged, regardless of any additional order changes. You can only update the amount value manually through the Zuora UI or REST API. For more information, see Edit invoice schedules . |
| Actual Amount To Bill | The actual amount that needs to be billed during the processing of the invoice schedule item.By default, the actual amount is the same as the total amount. If particular order changes occur, such as Remove Product or Cancel Subscription, this value changes accordingly to reflect the actual amount to be billed, whereas the Amount remains unchanged. |
| Billed Amount | The amount that is actually billed during the processing of the invoice schedule item.By default, the value of the Billed Amount field is the same as that of the Amount field. The actual amount might become different from the original amount due to additional order changes. |
| Target Date | The date in the tenant's time zone used by the invoice schedule to determine which fixed-period regular charges to be billed together with the invoice schedule item.This field is available only if additional subscriptions are specified for the invoice schedule. |
| Schedule Item Status | The status of the invoice schedule item.Pending: The invoice schedule item is waiting to be processed.Executing: The invoice schedule item is being processed.Processed: The invoice has been generated during the processing of the invoice schedule item. |
| Billing Document | The link of the action that you can take on the invoice schedule item, or the number of the invoice that is generated within the processing of the invoice schedule item.If the number of a generated invoice is displayed in this column, you can click the link of the invoice number to visit the detailed invoice information displayed on the invoice details page.If the invoice date specified for an invoice schedule item is in the future or the invoice date has passed but no invoice has been generated, the “Generate” action link is displayed in this column. You can click “Generate” to manually generate a scheduled invoice by an ad hoc bill run.If the invoice schedule item is being processed, the “Refresh” action link is displayed in this column. You can click “Refresh” to refresh the execution status. |

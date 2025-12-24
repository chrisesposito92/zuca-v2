---
title: "Automation History section"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscriptions-details-through-the-reinvented-ui/automation-history-section"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:26.289Z"
---

# Automation History section

This section provides a temporary record of automation flows, detailing their retention periods, access methods, and summary information.

This section retains temporary information lasting 90 days for some automation flows in the production environment but 45 days in the sandbox environment.

Currently, you can view history of automation flows triggered through the Cancel drop-down button on the reinvented subscription details page.

The following table lists summary information about the automation flows:

| Field | Description |
| --- | --- |
| Automation Name | The name of the automation flow. You can click the down arrow to expand the automation details and view the details of each automation flow. See the next table. |
| Status | Indicates whether the automation flow is succeeded or failed. |
| Created On | The date when the flow is triggered. |

| Field | Description |
| --- | --- |
| Processed Events | Displays the processed events by the automation task.Processed Event: The clickable event link for viewing the event details, for example, the credit memo number link.Event Type: Different automation task has different event types. For the Cancel subscription & Write-off automation flow, the type can be Credit Memo, Invoice, or Order.Created On: The date when the event is created. |
| Errors | Displays the errors for the automation flow.Task Id: The Task Id of the flow.Status: The value is error.Error Code: The reason for the error. |

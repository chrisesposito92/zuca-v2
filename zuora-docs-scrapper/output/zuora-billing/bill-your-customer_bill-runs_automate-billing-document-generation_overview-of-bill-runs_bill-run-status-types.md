---
title: "Bill run status types"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/overview-of-bill-runs/bill-run-status-types"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:32.637Z"
---

# Bill run status types

This topic outlines the various statuses a bill run can have in Zuora, detailing the processing stages and actions required for each status.

A bill run can have one of the following possible statuses. The status provides information about how the bill run is being processed in Zuora.

| Status | Description |
| --- | --- |
| Pending | Immediately after a bill run is executed, the status changes to pending. Pending means that a bill run is being queued up for processing. |
| Paused | If a scheduled bill run in Pending status is stopped temporarily, its status will be changed to Paused. When you resume the Paused bill run, its status will be changed to Pending or Cancel In Progress depending on whether it has the next run. |
| Processing | The bill run is processing all accounts for that bill run. |
| Completed | For successful bill runs, the status is completed. Only invoices for accounts that are due to be billed are generated. An email is sent to the user who executed the bill run to notify the user that the bill run has completed.Although the bill run is complete, the invoices have not yet been posted. You must post the bill run, which will post the invoices and then email the invoices to complete the billing process. Typically, the Completed status for bill run is used to review the invoices for accuracy and then post/email them to your customers.When you create the bill run, you can select an option to automate the posting and emailing of the invoices after the bill run. |
| Error | If a bill run is not successful, the bill run shows an error status. An email is sent to the user who executed the bill run to notify the user that the bill run has an error. |
| Cancel in progress | The bill run is being canceled. |
| Canceled | A bill run can be canceled if it is either pending or completed. Bill runs still processing cannot be canceled.You can still individually cancel invoices that were all posted when an entire bill run was posted. |
| Post in progress | The bill run is being posted. |
| Posted | A bill run is posted if all invoices from that bill run were posted together. Posting a bill run means that all invoices generated as part of that run are considered committed. Once invoices have been posted, they are eligible to be processed in payment runs. Depending on how you configured your bill run settings, you might need to email invoices to your customers.Posted invoices can no longer be edited. You must adjust for any errors that were found. |
| Remove in progress | The bill run is being removed. |

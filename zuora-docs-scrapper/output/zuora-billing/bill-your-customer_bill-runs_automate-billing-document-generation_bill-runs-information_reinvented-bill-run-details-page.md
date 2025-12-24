---
title: "Reinvented bill run details page"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-information/reinvented-bill-run-details-page"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:05.028Z"
---

# Reinvented bill run details page

The reinvented bill run details page provides comprehensive information about bill runs, including general information, summary, schedule, settings, associated bill runs, and history. It offers insights into the status, schedule type, and results of bill runs, facilitating efficient billing management.

## General information

The section next to the bill run number at the top of the bill run details page displays general information about the bill run.

| Field | Description |
| --- | --- |
| Schedule Type | The schedule type of the bill run.Ad hoc: The bill run is created for a particular purpose as necessary.Recurring: The bill run occurs again periodically according to a planned schedule.Invoice Schedule: The bill run is created during the processing of an invoice schedule. |
| Bill Run Type | The type of the bill run, only available for catch-up bill runs after you set the Enable catch-up bill run? billing rule to Yes.Regular Bill RunCatch-Up Bill Run |
| Status | The status of the bill run.For more information, see Bill run status types. |
| Created On | The date and time when the bill run was created. |
| Created By | The ID of the Zuora user who created the bill run. |

## Summary

The Summary section provides a clear overview of the results, making it easy to find critical information about the bill run. This section is available only for bill runs in Completed, Paused, Canceled, or Posted status.

| Field | Description |
| --- | --- |
| Total Document Generated (% posted) | The total number of billing documents generated during the execution of the bill run.invoice(s): The total number of invoices generated during the execution of the bill run.credit memo(s): The total number of credit memos generated during the execution of the bill run.invoice(s) with 0 Total: The total number of zero-amount invoices generated during the execution of the bill run. |
| Total Account Processed | The total number of customer accounts processed during the execution of the bill run. |
| Duration | The time during which the bill run is executed. |
| Refresh | You can click this button to refresh the information displayed in the Summary section. |
| View Details | To view detailed information about this bill run, click View Details, and view information displayed in different tabs. |

The following table lists information displayed on different tabs after you click View Details.

| Tab | Column | Description |
| --- | --- | --- |
| Generated Invoices | Invoice Number | The unique number of the invoice generated in the bill run. The status of the invoice is also displayed in this column, next to the invoice number. |
| Invoice Owner Account | The name of the customer account that the invoice is generated for in the bill run. |  |
| Balance | The balance of the invoice generated in the bill run. |  |
| Total Amount | The total amount of the invoice generated in the bill run. |  |
| Invoice Date | The date on which to generate the invoice. |  |
| Due Date | The date by which the payment for this invoice is due. |  |
| Generated On | The date and time when the invoice is generated in the bill run. |  |
| Last Email Sent | The date and time when the last email is sent for the invoice. |  |
| Generated Credit MemosThis tab is available only if you have the Invoice Settlement enabled. | Credit Memo | The unique number of the credit memo generated in the bill run. The status of the credit memo is also displayed in this column, next to the credit memo number. |
| Customer Account | The name of the customer account that the credit memo is generated for in the bill run. |  |
| Balance | The balance of the credit memo generated in the bill run. |  |
| Total Amount | The total amount of the credit memo generated in the bill run. |  |
| Credit Memo Date | The date when the credit memo takes effect. |  |
| Generated On | The date and time when the credit memo is generated in the bill run. |  |
| Last Email Sent | The date and time when the last email is sent for the credit memo. |  |
| Customer Accounts | Account Number | The unique number of the customer account processed in the bill run. |
| Customer Name | The name of the customer account processed in the bill run. |  |
| Account Balance | The balance of the customer account processed in the bill run. |  |
| Bill To | The bill-to contact of the customer account processed in the bill run. You can click the Edit this contact icon to edit the address information about the contact. |  |
| Sold To | The sold-to contact of the customer account processed in the bill run. You can click the Edit this contact icon to edit the address information about the contact. |  |
| Status | The status of the customer account processed in the bill run. |  |
| Search | You can type an exact account number in the search bar and then click Search to quickly identify one account. |  |
| Errors | Account Number | The unique number of the customer account that an error occurs on in the bill run. |
| Customer Name | The name of the customer account that an error occurs on in the bill run. You can click the Edit this contact icon to edit the address information about the contact. |  |
| Sold To | The sold-to contact of the customer account that an error occurs on in the bill run. You can click the Edit this contact icon to edit the address information about the contact. |  |
| Subscription | The unique number of the subscription that an error occurs on in the bill run. |  |
| Failure Reason | The reason why the error occurs. |  |
| Retry | You can click Retry in the upper right of the tab to create another bill run to process customer accounts failing to be processed in the existing bill run. |  |
| Tax Failures | Document | The unique number of the billing document that a tax failure occurs on in the bill run. The status of the billing document is also displayed in this column, next to the document number. |
| Account Number | The unique number of the customer account that a tax failure occurs on in the bill run. |  |
| Customer Name | The name of the customer account that a tax failure occurs on in the bill run. |  |
| Sold To | The sold-to contact of the customer account that a tax failure occurs on in the bill run. You can click the Edit this contact icon to edit the address information about the contact. |  |
| Tax Message | The message about the status of tax calculation related to the billing document. If tax calculation fails in one billing document, this field displays the reason for the failure. |  |

Note that since the update process for the number of accounts, invoices, and credit memos that are associated with the current bill run is asynchronous, there might be a delay in aligning the number of list items in the Generated Invoices, Generated Credit Memos, or Customer Accounts tabs with the statistical fields in the Summary section.

Zuora guarantees that the data gets aligned when the bill run becomes the Completed, Posted, or Canceled status.

## Schedule Information

The Schedule Information section displays the information about the next run time and recurrence of a scheduled bill run. This section is available only for scheduled bill runs in Pending or Paused status.

| Field | Description |
| --- | --- |
| Next run time | The date and time when the scheduled bill run is processed for the next time. |
| Recurrence | The frequency and timing of the associated scheduled bill runs. |

## Settings

The Settings section displays information about the billing settings that are involved in the bill run.

| Subsection | Field | Description |
| --- | --- | --- |
| Dates | Target Date | The target date for this bill run. |
| Document Date | The date of the billing document. |  |
| Processing Rules | Renewal Triggering | Whether to automatically renew auto-renewable subscriptions that are up for renewal in the bill run. |
| Do not email invoices with 0 Invoice Total | Whether to email invoices with the total amount of zero. |  |
| Auto-Post documents upon completion of Bill Run | Whether to automatically post the generated billing documents after the bill run is complete. |  |
| Email documents after Auto-Post is complete | Whether to email billing documents generated from the bill run to your customers after they are automatically posted. |  |
| Filters | Batch(es) Included | The list of the batches of customer accounts processed in the bill run. This field is available only if the bill run is created for batches of customer accounts. |
| Customer Account Selected | The name and number of the customer account processed in the bill run. This field is available only if the bill run is created for a single customer account. |  |
| Subscription(s) Selected | The number of each subscription processed in the bill run. |  |
| Retry Failed Accounts From | The number of the bill run that the existing bill run is retried from to process failed accounts. |  |
| Bill Cycle Day Included | The day of the billing cycle for the bill run. |  |
| Charges Filtered | The types of the charges processed during the generation of billing documents in the bill run. |  |
| Invoice Schedule | The number of the invoice schedule where the bill run is created. This field is available only if you have the Billing Schedule feature enabled. |  |

## Associated Bill Runs

The Associated Bill Runs section displays a table listing information about the bill runs associated with the scheduled bill run by executed date. All instances of executed bill runs for a scheduled bill run are consolidated in this section, allowing for easy tracking of processed accounts and billing documents. This section is available only for scheduled bill runs.

| Field | Description |
| --- | --- |
| Bill Run Number | The unique number of the bill run. |
| Executed Date | The date and time when the bill run is executed. |
| Invoice Date | The date on which to generate the invoice. |
| Target Date | The target date of the invoice. |
| # Of Accounts | The total number of customer accounts processed in the bill run. |
| # Of Documents | The total number of billing documents processed in the bill run. |
| Duration | The time during which the bill run is executed. |
| Status | The status of the bill run. |

## History

The History section displays information about the billing documents that are generated in the bill run. A comprehensive bill run history is included, showcasing the timeline of user operations and bill run status changes. The historical records are displayed in chronological order.

| Field | Description |
| --- | --- |
| Processing status | The processing status of the bill run. |
| by | The ID of the Zuora user who performed actions on the bill run. |
| on | The date and time when the bill run was processed. |

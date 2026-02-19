---
title: "E-Invoice statuses"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents/e-invoice-statuses"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:35.191Z"
---

# E-Invoice statuses

This reference provides an overview of e-invoice statuses, their meanings, and transitions throughout the invoice lifecycle, including a flowchart for visual reference.

This section provides an overview of the different statuses associated with an e-invoice, what each status means, and how these statuses transition throughout the invoice lifecycle. A flowchart is also included to illustrate possible transitions and response flows.

![E-invoice process flowchart](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/86a2b342-ea8c-463c-afbf-1c7a7fd33b2d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg2YTJiMzQyLWVhOGMtNDYzYy1hZmJmLTFjN2E3ZmQzM2IyZCIsImV4cCI6MTc3MTU1NzMzMSwianRpIjoiYWNhNGQ3YjY2YjM1NGNiM2E0ODE5Y2Q1MGE4MzI3N2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9._ofMZSetS60Gnt36sTKAtbbufcnGq0Wtb83a6mTV7QE)

The E-Invoice Status field reflects the current state of the e-invoicing process for a given invoice. Below are the possible statuses and their meanings:

-   Processing - Indicates that the e-invoice process has started. This is typically the initial status before file generation or submission to the tax authority.
-   Retrieve Timeout - Indicates that the responses from tax vendors such as Sovos or Avalara are taking too long. Once the vendor responds successfully, you can use the Resync E-Invoice Status action.
-   Generated - Indicates that the e-invoice file was successfully generated. At this point, the eInvoiceField contains the ID of the generated e-invoice file. This is applicable only when you use PEPPOL as your service provider. See [E-invoicing with PEPPOL Extract](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract).
-   Failed - Indicates that an error occurred during the e-invoice file generation process. In this case, the status is set to Failed.
-   ConditionalSuccess - The e-invoice file generation completed with warnings or partial success. This status is applicable only when using Sovos.
-   ApprovedByAuthority - The e-invoice has been approved by the tax authority but may still require further validation by the end customer. The invoice will eventually transition to either Success or Rejected, depending on the final decision from the customer or downstream system. In most cases, except for Italy, the Approved by Authority status is skipped, as Sovos returns the final status (Success or Failed) in the same response. As a result, the status moves directly to Success or Failed. This status is applicable only when using Sovos.
-   Rejected - The e-invoice has been explicitly rejected by the end customer. You cannot resend a rejected e-invoice and to proceed, you must generate and submit a new invoice. This status is applicable only when using Sovos.
-   Success - The e-invoice has been successfully submitted and accepted by the tax authority and/or end customer. This is the final status for completed and approved invoices.
-   Canceled or Cancel Failed - These statuses are considered as final status. Cancel Failed expects customers to take action to fix the issue and re-trigger the cancellation.
-   Cancel Processing - Intermediate status that could change to Canceled if the cancellation process is completed successfully., or to Cancel Failed if the cancellation.

All these statuses apply to all e-invoicing countries; however, in most regions, except Italy, the Approved by Authority status is typically skipped, as Sovos returns the final status (either Success or Failed) immediately.

## Resync e-invoice status

Zuora also provides an API called Resync E-Invoice Status, which allows external systems to query and update invoice statuses, particularly for documents marked as Approved by Authority. The API must be used to automate this process, as the UI only supports status resync for a single invoice at a time.

Additionally, the Resync E-Invoice Status API or UI action can be triggered for documents in either the Approved by Authority or Processing status and supports Invoices, Credit Memos, and Debit Memos. For Italy, it may take up to 25 days to receive the final Success or Rejected status after the Approved by Authority stage, due to extended processing timelines by the tax authority and end customer.

When responses from tax service providers such as Sovos or Avalara are delayed, the e-invoice status is updated to RetrieveTimeOut. Once the provider responds successfully, you can use the Resync E-Invoice Status action to retrieve the latest notifications and automatically update the document status.

When resyncing for Sovos, you are prompted to choose one of the following modes:

-   Refresh latest unacknowledged notifications (default): Retrieves and processes only the most recent notifications that have not yet been acknowledged.
-   Full re-sync: Reprocesses all notifications from the beginning. This option is useful in scenarios where incremental requests return incomplete results, such as after notifications have been recreated in Sovos.

Note: The resync mode selection is available only for Sovos. For Avalara, the resync operation continues to run without user prompts.

Zuora supports resyncing e-invoice statuses for both Avalara and Sovos. You can trigger Resync E-Invoice Status from the UI or API when an invoice is in RetrieveTimeOut or Processing status. Zuora continues polling until the invoice reaches Success, Failed, or ApprovedByTaxAuthority, ensuring smoother handling of delayed tax authority responses and avoiding unnecessary resubmissions.

## Regenerate or Resync E-invoices

The Regenerate E-Invoice action is available for documents in a Failed status and supports Invoices, Credit Memos, and Debit Memos. After you fix the underlying errors and trigger regeneration, the document is resubmitted to the e-invoicing service provider, and its status updates to Processing.

The Resync E-Invoice action is also available for documents in a Failed status. This option allows Zuora to resubmit the existing document to the e-invoicing service provider without regenerating it. In certain scenarios, such as when the service provider has corrected the failure on their end, resyncing can resolve the issue more efficiently than regeneration.

By providing both Resync and Regenerate actions, you can choose the most appropriate approach based on the cause of the failure

Note:

For the PEPPOL service provider, the Regenerate E-Invoice action is available when the document is in Generated status.

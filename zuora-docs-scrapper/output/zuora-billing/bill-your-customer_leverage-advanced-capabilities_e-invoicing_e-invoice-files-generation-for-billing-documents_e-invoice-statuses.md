---
title: "E-Invoice statuses"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents/e-invoice-statuses"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:34.749Z"
---

# E-Invoice statuses

This reference provides an overview of e-invoice statuses, their meanings, and transitions throughout the invoice lifecycle, including a flowchart for visual reference.

This section provides an overview of the different statuses associated with an e-invoice, what each status means, and how these statuses transition throughout the invoice lifecycle. A flowchart is also included to illustrate possible transitions and response flows.

![E-invoice process flowchart](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/86a2b342-ea8c-463c-afbf-1c7a7fd33b2d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg2YTJiMzQyLWVhOGMtNDYzYy1hZmJmLTFjN2E3ZmQzM2IyZCIsImV4cCI6MTc2ODYwMDU4OSwianRpIjoiNTA2MjIyYTcyYmFlNGIwYThmNjg0NThmMDRkNzM1NWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.i_geCzeWL58pFx8P_1maCAvxtUGg8Q5CRC5tC21v1nk)

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

When responses from tax vendors such as Sovos or Avalara take too long, E-Invoice updates its status to RetrieveTimeOut. Once the vendor responds successfully, you can use the Resync E-Invoice Status action to update the status automatically.

## Regenerate e-invoices

The Regenerate E-Invoice action is available for documents in a Failed status and supports Invoices, Credit Memos, and Debit Memos. Once you fix the errors and trigger the regeneration, the document will be resubmitted to the e-invoicing service provider, and its status will update to Processing.

Note:

For the PEPPOL service provider, the Regenerate E-Invoice action is available in a Generated status.

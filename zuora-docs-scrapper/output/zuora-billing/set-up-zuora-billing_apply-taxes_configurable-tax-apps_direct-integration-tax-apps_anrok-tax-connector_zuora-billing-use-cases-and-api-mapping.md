---
title: "Zuora Billing use cases and API mapping"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/zuora-billing-use-cases-and-api-mapping"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:10.724Z"
---

# Zuora Billing use cases and API mapping

Zuora Billing operations are mapped to Anrok APIs, detailing use cases and event types.

The following table describes how Zuora Billing operations map to Anrok APIs:

| # | Zuora Billing Use Cases | Description | event_type | Anrok API |
| --- | --- | --- | --- | --- |
| 1 | Test Connection | Verifies credentials using the Test Connection action.The type of the event. Enum: “taxPreview”, “taxGenerate”, “taxVoid”, "taxOverride". | API to Anrok directly | /v1/seller/credentials/validate |
| 2 | Order Preview | Account, address, subscription, charges, invoice might not exist yet.Tax preview is triggered during order or subscription preview. Tax results are returned but not committed to Anrok. | taxPreview | /v1/seller/transactions/createEphemeral |
| 3 | Post a billing document | Tax is calculated and committed when invoices, credit memos, or debit memos are posted.Note: When tax for the credit memo is calculated, it will pass the original tax address and document date of the invoice to ensure the same tax rate. | taxGenerate | /v1/seller/transactions/createOrUpdate |
| 4 | Cancel a billing document | Cancels a posted billing document and voids committed tax transactions.Note: Tax Void is triggered only when Tax Void Call Handling is set to Enabled. | taxVoid | /v1/seller/transactions/id:{transactionId}/void |
| 5 | Reversal Invoice | Creates a credit memo that mirrors invoice tax and syncs it with Anrok. | taxOverride | /v1/seller/transactions/createOrUpdate |
| 6 | Create Tax only Credit Memo | Adjusts tax for an invoice. Tax overwrite is expected but not currently supported. | N/A | Not Support |

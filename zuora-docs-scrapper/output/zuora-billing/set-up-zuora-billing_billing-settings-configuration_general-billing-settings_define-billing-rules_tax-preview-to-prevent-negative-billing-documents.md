---
title: "Tax preview to prevent negative billing documents"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/tax-preview-to-prevent-negative-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:34.889Z"
---

# Tax preview to prevent negative billing documents

Use tax preview with external tax engines to prevent negative billing documents and ensure accurate invoice and credit memo generation.

You can use the Enable tax preview with external tax engines during generation of invoice and credit memo billing rule to determine the document type (invoice or credit memo) through the tax preview to external tax vendors. The purpose is to prevent negative billing documents, including negative invoices and negative credit memos, when you use the Invoice Settlement feature.

If a billing document contains more than 1,000 items, the tax preview is not performed, regardless of the option selected for the billing rule.

This feature is available only if you have the Taxation and Invoice Settlement features enabled.

## Tax preview overview

If you use Zuora Tax as the tax solution, the tax preview is always performed to determine the document type regardless of the option selected for this billing rule.

If you use external tax vendors for tax calculation, such as direct Avalara integration or configurable tax apps, you can use the billing rule to enable the tax preview. Given the following considerations, it is best practice to set this billing rule to Yes only when you encounter negative billing document issues:

-   The tax preview sends additional tax API requests to the tax vendor, probably increasing additional costs.

-   The tax preview adds an additional step to the billing document generation process, probably introducing considerable performance impacts.


Negative billing documents might be generated if you select the Create credit memos for net negative invoice totals without grouping charges or Create credit memos for net negative invoice totals for the Invoice/Credit Memo generation rule billing rule. The document type (invoice or credit memo) is determined by whether the total amount of all charges included in the billing process is positive or negative before any taxes are calculated. However, taxes might change the sign of the total amount in some cases.

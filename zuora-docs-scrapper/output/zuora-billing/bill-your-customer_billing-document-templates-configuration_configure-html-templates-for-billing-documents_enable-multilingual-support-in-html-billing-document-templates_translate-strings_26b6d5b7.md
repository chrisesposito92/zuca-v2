---
title: "Translate strings for proration, prepayment, overage, and credit"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/enable-multilingual-support-in-html-billing-document-templates/translate-strings-for-proration-prepayment-overage-and-credit"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:07.337Z"
---

# Translate strings for proration, prepayment, overage, and credit

Learn how to translate strings for proration, prepayment, overage, and credit using the SPECIAL.PPOC merge field.

In addition to the supported merge fields, you can translate the following strings using the SPECIAL.PPOC merge field:

-   — Proration

-   — Prepayment

-   — Overage

-   Credit

-   — Proration Credit

-   — Prepayment Credit


The above SPECIAL.PPOC strings are suffixes appended to invoice or memo item names for a proration, a prepayment, an overage, or a credit. For example, the prorated invoice item name would be "XXX -- Proration" for the invoice or memo item named, "XXX". Invoice or memo items with the SPECIAL.PPOC suffixes are translated separately from the regular invoice or memo item names.

Note:

-   SPECIAL.PPOC is not a true mail merge field and cannot be used in billing document templates.

-   Do not use any of the above SPECIAL.PPOC strings at the end of your charge names. Otherwise, the charge name might be incorrectly translated


The following is an example translation profile for the special merge fields.

| MergeFieldName | OriginalValue | ja-JP |
| --- | --- | --- |
| SPECIAL.PPOC | -- Overage | 過剰 |
| SPECIAL.PPOC | -- Prepayment | 元 払い |
| SPECIAL.PPOC | -- Proration | 比例配分 |
| SPECIAL.PPOC | Credit | クレジット |

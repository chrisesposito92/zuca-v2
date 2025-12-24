---
title: "Concat function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/concat-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:59.840Z"
---

# Concat function

This function merges text from multiple strings using a specified separator.

This function merges text from multiple strings and separates it by a specified separator string.

## Examples

`{{#Invoice}}{{Cmd_Assign(VarStr,.|Concat(Account.Name,InvoiceNumber,'-'))}}{{VarStr}}{{/Invoice}}`

## Remarks

-   \` `.` \` in \` `.|Concat(Account.name` \` is the invoice, and it's a reference to the contextual object.

-   To work, the \` `Concat` \` function decorator requires an input. Piping the invoice object \` `.` \` to the right side function requires the use of \` `|` \`.

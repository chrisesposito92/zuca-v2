---
title: "IsBlank function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/isblank-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:41.339Z"
---

# IsBlank function

This function determines if the input text is empty, useful for checking properties like the Description of an Account object.

This function checks whether the input text is blank.

## Remarks

To check whether the Description property of the Account object is blank, use the following merge field:

`Account.Description|IsBlank`

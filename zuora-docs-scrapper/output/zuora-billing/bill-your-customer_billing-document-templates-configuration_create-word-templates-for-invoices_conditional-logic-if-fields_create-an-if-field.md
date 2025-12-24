---
title: "Create an IF Field"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/conditional-logic-if-fields/create-an-if-field"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:02.773Z"
---

# Create an IF Field

This task guides you through creating an IF field that displays "FREE" when the InvoiceItem.ExtendedPrice is zero.

This example shows you how to construct the following IF field:

{ IF {MERGEFIELD InvoiceItem.ExtendedPrice \\\* MERGEFORMAT} = 0 "FREE" "" `\*` `MERGEFORMAT` }

The IF field displays the text "FREE" if the value of InvoiceItem.ExtendedPrice equals 0. Otherwise, the IF field displays nothing.

To construct this IF field:

1.  Move the cursor to where you want to insert the IF field. Press Ctrl + F9 (or command + fn + F9 on a Mac) to insert curly braces. Then type `IF` into the braces:

    `{ IF }`

    Note: IF fields are contained within curly braces. You must insert the curly braces into your invoice template by pressing Ctrl + F9 (or command + fn +F9 on a Mac). You cannot just type the curly braces.

2.  Type a space after `IF` , then insert the InvoiceItem.ExtendedPrice merge field. Insert the merge field as described in [Customize Invoice Templates Using Word Mail Merge](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/billing-document-templates-customization-using-word-mail-merge). You cannot just type the merge field into the curly braces.

    `{ IF` `{MERGEFIELD InvoiceItem.ExtendedPrice` \\\* MERGEFORMAT `}​` `}`

    Note: If the merge field formatting appears different to the example, you may be in the field result view. To toggle to the field code view, press Alt + F9 (or option + fn + F9 on a Mac).

3.  Type in the rest of the merge field:

    `{ IF` `{MERGEFIELD InvoiceItem.ExtendedPrice` \\\* MERGEFORMAT `}​` `= 0` "FREE" "" `\*` ``MERGEFORMAT`` }

    Note:

    You must insert a space before and after the operator. Operators include `=` , <, `>` , <=, and `>=` .

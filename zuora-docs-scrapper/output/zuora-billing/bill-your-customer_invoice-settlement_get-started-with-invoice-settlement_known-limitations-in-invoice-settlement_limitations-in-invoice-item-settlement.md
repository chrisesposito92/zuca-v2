---
title: "Limitations in Invoice Item Settlement"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/known-limitations-in-invoice-settlement/limitations-in-invoice-item-settlement"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:26.401Z"
---

# Limitations in Invoice Item Settlement

You cannot use Data Query to query the `InvoiceItemId` and `DebitMemoItemId` fields of the Payment Application Item or the Payment Part Item object to retrieve the invoice items and debit memo items that the payments are applied. Instead, use alternative queries like the following to retrieve the invoice items and debit memos respectively:

`select dmi.id, dmi.amount, ppi.amount,ppi.paymentpartid from debitmemoitem dmi join paymentpartitem ppi on dmi.id = ppi.debitmemoitemid join paymentpart pp on pp.id = ppi.paymentpartid`

1.  Use the following to retrieve payments applied to debit memo only:
2.  Use the following to retrieve payments applied to invoice only:

`select ii.id, ii.chargeamount, ppi.amount,ppi.paymentpartid from invoiceitem ii join paymentpartitem ppi on ii.id = ppi.invoiceitemid join paymentpart pp on pp.id = ppi.paymentpartid`

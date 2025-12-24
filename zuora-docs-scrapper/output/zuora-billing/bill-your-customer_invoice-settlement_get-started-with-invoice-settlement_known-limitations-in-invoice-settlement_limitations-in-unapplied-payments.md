---
title: "Limitations in Unapplied Payments"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/known-limitations-in-invoice-settlement/limitations-in-unapplied-payments"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:21.392Z"
---

# Limitations in Unapplied Payments

If you have the Invoice Settlement feature enabled, Unapplied Payments has the following specific known limitations.

| Scenario | Limitations |
| --- | --- |
| Creating payments | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.When you create a payment, the total number of invoice items and debit memo items that the payment to apply to must be less than or equal to 15,000 (including taxation items but excluding zero-amount items). |
| Applying payments | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.When you apply a payment, the total number of invoice items and debit memo items that the payment will apply to must be less than or equal to 15,000 (including taxation items but excluding zero-amount items).If the limit is hit, you can follow the instructions:If you want to apply one payment to multiple invoices or debit memos, decrease the number of invoices or debit memos in the request.If you want to apply one payment to a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000. |
| Unapplying payments | The number of invoices or debit memos in one request must be less than or equal to 1,000.The number of items in each invoice or debit memo must be less than or equal to 1,000.If the limit is hit, you can follow the instructions:If you want to unapply one payment without specifying invoices or debit memos, you have to specify the invoices or debit memos in the request.If you want to unapply one payment from multiple specified invoices or debit memos, decrease the number of invoices or debit memos in the request.If you want to unapply one payment from a single invoice or debit memo with a large volume of items, you have to specify invoice items in the request. The maximum number of invoice items that you can specify in the request is 1,000.Limitations in Invoice Write-Off and Reversal.When you unapply a payment, the total number of invoice items and debit memo items that the payment will unapply from must be less than or equal to 15,000 (including taxation items but excluding zero-amount items). |

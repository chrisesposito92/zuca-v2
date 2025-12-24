---
title: "Bill runs creation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:35.107Z"
---

# Bill runs creation

This topic covers information about ad hoc and scheduled bill runs, including setting target dates and generating credit memos.

An ad hoc bill run lets you create a bill run for a specific and usually one-time purpose. A scheduled bill run lets you create a bill run regularly. You can schedule a bill run so that it is run daily, weekly, or monthly.

If you have the Invoice Settlement feature enabled, bill runs can automatically generate credit memos for negative charges based on your [invoice and credit memo generation rule](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/rules-for-generating-invoices-and-credit-memos).

## What is a target date

The target date is used to determine which charges to bill. All charges to bill as of or before the target date are included in the bill run. Zuora automatically keeps track of all charges that need to be billed and that have not been billed before the target date.

To send an invoice before a billing period, set your invoice date to the date of your bill and the target date to the billing period you are billing in advance. For example, if you want to send an invoice on March 1 for an April 1 to April 30 billing period, set the invoice date to March 1 and the target date to April 30.

Zuora has set a 10-year limit on bill runs created in the Zuora UI or from the Bill Run SOAP API. You can no longer schedule a bill run over 10 years after the current date.

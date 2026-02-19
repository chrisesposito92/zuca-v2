---
title: "Invoice details view"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-details-view"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:20.684Z"
---

# Invoice details view

Explore how to view and manage invoices, including hiding zero-amount items and understanding invoice statuses.

You can view invoices in list or details view, and you can view invoices from your [customer account](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts).

With the [new user interface](/basics/get-familiar-with-zuora-user-interface/zuora-user-interface), you can hide zero-amount invoice items on the reinvented invoice details page. If you have usage-based invoices and most usage charges are zero amount, this feature can help you find non-zero charges efficiently. This feature is only available if you have the Enable New Zuora Experience setting enabled.

## Invoice status

Invoices can have one of the following statuses. You can see an invoice's status by clicking the invoice number on the list view to check its details. The invoice status might also be set by the bill run. For example, if you post your bill run, all invoices created from that bill run will have a status of Posted.

-   Draft: The invoice has been created but has not been posted, or the invoice was posted but then the post was canceled. The bill run that the invoice is a part of has also not been posted.
-   Posted: The invoice has been posted either individually or as a part of the bill run that has posted. The invoice is now ready for a payment to be collected.
-   Canceled: The invoice has been canceled individually or as a part of a bill run that was canceled. When an invoice is canceled, you will not be able to collect a payment for it.

Note:

When an invoice has been canceled, you cannot post it again. If you need to create the invoice again, you can create the invoice from a new [bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation), or you can wait for the next scheduled bill run if you have one scheduled.

In the Transaction(s) associated to this Invoice section of the Invoice Details UI, up to 200 payments will be displayed. Any payments beyond 200 will not be listed.

## PDF Generation Status

You can view the PDF generation status directly on the Invoice Detail page in the Zuora UI, giving you clear visibility into the readiness of an invoice PDF without relying on API calls. The following statuses may be displayed:

-   N/A – PDF generation is disabled for the invoice and no PDF exists.

-   Pending – The PDF generation request has been accepted but processing has not yet started.

-   Processing – The PDF is currently being generated.

-   Generated – The PDF has been successfully generated and there are no pending or in-progress requests.

-   Error – PDF generation failed; failure details are provided, including an error code and error message.

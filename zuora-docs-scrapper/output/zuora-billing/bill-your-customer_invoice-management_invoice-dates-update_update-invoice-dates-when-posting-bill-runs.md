---
title: "Update invoice dates when posting bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-dates-update/update-invoice-dates-when-posting-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:39.356Z"
---

# Update invoice dates when posting bill runs

Learn how to update invoice dates when posting bill runs using the Zuora UI and API.

When posting a bill run, you can update the invoice date for all invoices involved in the bill run through both the Zuora UI and API.

Through the API, you can use the `Status` and `InvoiceDate` field of the CRUD: Post or Cancel bill run operation to specify the new invoice date for all invoices involved in the bill run.

To update the invoice date when posting bill runs through the Zuora UI, complete the following steps:

1.  In the left navigation area, navigate to Billing > Bill Runs .
2.  On the Bill Runs page, click the bill run that you want to post.
3.  On the bill run details page, click Post . A dialog opens to confirm the action.
4.  In the displayed confirmation dialog, select the Update all invoice dates check box and specify the new invoice date. If the Setting determines when the document will be assigned a number from the official document sequence billing rule is set to Upon document posting , this check box is automatically selected, and the new invoice date is set to the date when you post the bill run by default.
5.  Click Post to post the bill run.

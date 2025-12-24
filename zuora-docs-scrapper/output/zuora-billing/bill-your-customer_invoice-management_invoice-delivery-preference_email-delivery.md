---
title: "Email delivery"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-delivery-preference/email-delivery"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:30.417Z"
---

# Email delivery

Explore how invoices are delivered via email, including conditions for automatic and manual email triggers.

If Email is selected as the invoice delivery preference for a customer, the customer will receive an emailed invoice if the "Invoice Posted | Invoice Posted within a Bill Run of Auto-Post" event is enabled. However, if "Invoice Posted | Invoice Posted Manually" and "Invoice Posted | Invoice Posted via API" events are enabled and the customer has an email address, an email will still be triggered even though Email is not selected as the invoice delivery preference.

If you do not select Email as the invoice delivery preference for a customer, but the Bill To contact has an email address in their contact record, the invoice can be emailed to the customer from within the invoice details page.

If Email is not selected and an email address is not in the contact record, an invoice can still be emailed from the invoice details page. In this case, you can specify an email address for delivery.

You can also email PDF invoices for an entire bill run by finding your bill run in Expanded view and then clicking Email invoices.

Note:

-   A bill run must be posted before you can email invoices.
-   The emails delivering the PDF invoices will be sent after the invoices are generated successfully. PDF generation latency could be enormous at the month's end and may be delayed for hours, which could delay the email sending time. Please also note that currently Zuora doesn't guarantee the sending time of emails after the invoice generation.

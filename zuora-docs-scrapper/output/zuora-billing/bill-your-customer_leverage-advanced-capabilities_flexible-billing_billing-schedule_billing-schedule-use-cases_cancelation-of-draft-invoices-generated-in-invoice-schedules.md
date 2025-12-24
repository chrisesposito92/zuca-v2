---
title: "Cancelation of draft invoices generated in invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/cancelation-of-draft-invoices-generated-in-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:50.167Z"
---

# Cancelation of draft invoices generated in invoice schedules

Understand how to cancel draft invoices in invoice schedules and generate new invoices with corrected information.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule is created, you cancel an invoice in Draft status that is generated during the processing of an invoice schedule item, and expect a new invoice to be generated.

After an invoice in Draft status is canceled, the status of the corresponding invoice schedule item changes to Pending from Processed.

Subsequently, another invoice is generated during the processing of the corresponding invoice schedule item in the next hour. The invoice date is automatically set to the previously scheduled date. Therefore, if you want to correct any errors in one generated invoice, cancel the invoice and wait for around one hour for the generation of a new invoice.

For example, you find some information errors after the first invoice is generated in Create single-year invoice schedules on new subscriptions with the same term , and want to correct the errors. Therefore, you cancel the first invoice and correct the errors. Then, what you need to do is to wait for around one hour without further actions. One hour later, a new invoice with corrected information is automatically generated.

To generate a new invoice sooner, you can manually execute the corresponding invoice schedule item through the Zuora UI and REST API. For more information, see Execute invoice schedules .

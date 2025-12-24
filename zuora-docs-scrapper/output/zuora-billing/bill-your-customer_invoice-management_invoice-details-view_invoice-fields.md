---
title: "Invoice fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-details-view/invoice-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:07.599Z"
---

# Invoice fields

This section provides detailed information about various invoice fields in Zuora Billing, including customer details, invoice status, tax calculations, and payment processing.

In Zuora Billing, the details view of an invoice shows the information listed in this section.

| Field | Description |
| --- | --- |
| Customer Name | This shows who the invoice is for. |
| Account Number | The customer account number. |
| Status | The status of the invoice. |
| Generated On | The date the invoice was generated. |
| Posted On | The date the bill run was posted. |
| Tax Status | The status of tax calculation related to the invoice.Complete: The tax calculation is successful and complete.Error: An error occurs in tax calculation.Voided: The tax transaction is successfully canceled on the tax vendor's side.Note: If a tax transaction was successfully committed to the third-party tax engine but the invoice failed to post, Zuora will automatically detect the issue and void the tax transaction on the vendor's side.This field is only applicable to tax calculations by third-party tax engines. |
| Tax Message | The message about the status of tax calculation related to the invoice. If tax calculation fails in one invoice, this field displays the reason for the failure.This field is only applicable to tax calculations by third-party tax engines. |
| Source | The ID of the run from which the invoice was generated. |
| Target Date | The target date of the invoice. |
| Auto-Pay | Whether invoices are automatically picked up for processing in the corresponding payment run. |
| Transferred to Accounting | Whether the invoice was transferred to an external accounting system, such as NetSuite.You can only edit this field if the invoice is posted. Editing this field for draft invoices is in Limited Availability . If you wish to have access to the feature, submit a request at Zuora Global Support. |
| Total Amount | The total amount being billed on the invoice. |

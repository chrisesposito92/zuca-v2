---
title: "API integration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/api-integration"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:45.460Z"
---

# API integration

This reference provides information on using Zuora API for integration in specific functional areas.

| Functional area | Guide |
| --- | --- |
| Subscription management | You can continue to use Subscribe /Amend calls to create and manage subscriptions.If you are a new customer, it is best practice to use the following API operations:With the Orders feature disabled, use Subscription API operations.With the Orders feature enabled, use Order API operations. |
| Adjusting invoices for overcharging and undercharging, and disputes | Invoice Item Adjustment and Invoice Adjustment are deprecated, and are replaced by credit memos and debit memos.It is best practice to use the following API operations:Credit Memos operationsDebit Memos operationsCreate credit memo from invoiceCreate debit memo from invoiceGenerate billing documents by accountWrite off invoice |
| Credit management | Credit Balance Adjustment is deprecated. You can use credit memos ad hoc credit, and unapplied payments for overpayments.It is best practice to use the following API operations:Credit Memos operationsPayments operations |
| Payment management | You can continue to use Actions / SOAP API calls to create or update payments in bulk, or use CRUD Create payment to create or update a single payment. Actions and CRUD API operations do not support payments to debit memos and payments to invoice items . Two new fields unappliedAmount and appliedAmount on payment are available for Query in WSDL version 107.0 or later.If you are a new customer, it is best practice to use the following API operations to manage payments:Payments operations |
| Refund management | You can continue to use Actions or SOAP API calls to create or update refunds for payments in bulk or use CRUD Create refund to create or update a single refund. Actions and CRUD API operations do not support refunding credit balance which is deprecated or refunding credit memos.If you are a new customer, it is best practice to use the following API operations to manage refunds:Refunds operationsRefund credit memo operation |

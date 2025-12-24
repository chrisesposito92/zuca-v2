---
title: "Unpost invoice  with updated billing  attributes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/unpost-invoice-with-updated-billing-attributes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:16.407Z"
---

# Unpost invoice with updated billing attributes

Learn how to update billing attributes and unpost invoices for subscriptions when changes are required.

When the invoice unposting fails with the changed attributes, perform the following steps to update the attributes and unpost the invoice:

1.  Update the billing attributes of subscription S001:

    -   Set Bill To Contact to Ray Lockman.
    -   Set Payment Term to Net 60.

2.  Unpost the invoice.
3.  Cancel the invoice.
4.  Update the billing attributes of subscription S001.

    -   Set Bill To Contact to Steve America..
    -   Set Payment Term to Net 30.

5.  Create a bill run to generate an invoice for this account.

Invoice INV002 in Draft status is generated, with the bill-to contact being Steve America and the payment term being Net 30.

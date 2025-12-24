---
title: "Unpost invoice operation fails with changed billing attributes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/unpost-invoice-operation-fails-with-changed-billing-attributes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:14.019Z"
---

# Unpost invoice operation fails with changed billing attributes

Understand why invoices with updated billing attributes cannot be unposted and learn the steps involved in this process.

After you specify the bill-to contact and payment term on a subscription, an invoice in Draft status is generated for the corresponding account and then posted. Later, you update the bill-to contact and payment term of a subscription. If you want to unpost the invoice, the invoice cannot be unposted.

1.  Create subscription S001 for this account.

    -   Set Bill To Contact to Ray Lockman.
    -   Set Payment Term to Net 60.

2.  Create a bill run to generate an invoice for this account.
    Invoice INV001 in Draft status is generated, with the bill-to contact being Ray Lockman and the payment term being Net 60.

3.  Post the invoice.
4.  Update the billing attributes of subscription S001.

    -   Set Bill To Contact to Steve America.
    -   Set Payment Term to Net 30.

5.  Try to unpost the invoice.

The invoice unposting fails.

In this scenario, if you want to unpost the invoice, see [Unpost invoice with updated billing attributes](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/unpost-invoice-with-updated-billing-attributes).

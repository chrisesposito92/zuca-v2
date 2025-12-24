---
title: "Append new invoice items to draft invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/append-new-invoice-items-to-draft-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:08.761Z"
---

# Append new invoice items to draft invoices

Learn how to append new invoice items to draft invoices using Flexible Billing Attributes.

With Flexible Billing Attributes, you can also append new invoice items to draft invoices.

1.  Create subscription S001 for this account, with the following billing attributes:

    -   Set Bill To Contact to Steve America.
    -   Set Payment Term to Net 30.

2.  Create a bill run to generate an invoice for this account.
    Invoice INV001 in Draft status is generated, with the bill-to contact being Steve and the payment term being Net 30.

3.  Create subscription S002 for this account, with the following billing attributes:

    -   Set Bill To Contact to Steve America.
    -   Set Payment Term to Net 30.

4.  Create another bill run for this account.
    New invoice items are appended to invoice INV001, which contains all the charges of subscriptions S001 and S002.

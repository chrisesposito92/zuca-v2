---
title: "Use the latest billing attributes on generated invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/use-the-latest-billing-attributes-on-generated-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:11.075Z"
---

# Use the latest billing attributes on generated invoices

Learn how to apply the latest billing attributes to generated invoices for subscriptions.

If you have updated the billing attributes of a subscription, the latest billing attributes are used on the generated invoice.

1.  Create subscription S001 for this account, with the following billing attributes:

    -   Set Bill To Contact to Steve America.
    -   Set Payment Term to Net 30.

2.  Renew this subscription for another year and change the billing attributes:

    -   Set Bill To Contact to Ray Lockman.
    -   Set Payment Term to Net 30.

3.  Create a bill run for this account.

    Invoice INV001 in Draft status is generated, with the bill-to contact being Ray and the payment term being Net 60.

    | Subscription | Subscription Renewal | Generated Invoice |  |  |  |  |  |  |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Subscription Number | Bill To Contact | Payment Term | Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
    | S001 | Steve America | Net 30 | S002 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |

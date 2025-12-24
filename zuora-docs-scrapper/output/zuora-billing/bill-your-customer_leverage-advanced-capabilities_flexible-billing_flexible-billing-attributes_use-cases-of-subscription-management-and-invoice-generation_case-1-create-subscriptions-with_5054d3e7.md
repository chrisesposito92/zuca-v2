---
title: "Case 1: Create subscriptions with different bill-to contacts and payment terms"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-1-create-subscriptions-with-different-bill-to-contacts-and-payment-terms"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:51.984Z"
---

# Case 1: Create subscriptions with different bill-to contacts and payment terms

Explains how to create subscriptions with different bill-to contacts and payment terms, and how to generate invoices for these subscriptions.

In this use case, subscriptions are created with different bill-to contacts and different payment terms. Subscriptions are invoiced based on the bill-to contact and payment term.

As listed in the table, the four subscriptions can be categorized into two groups based on the bill-to contact and payment term. Subscriptions S001 and S002 are one group. For this group, the bill-to contact is Steve America and the payment term is Net 30. Subscriptions S003 and S004 are the other group. For this group, the bill-to contact is Tom Lee and the payment term is Net 45.

To generate invoices for these subscriptions, use the [Generate billing documents by account ID](https://www.zuora.com/developer/api-references/api/operation/POST_GenerateBillingDocuments) operation with the `autoPost` field set to `true`.

-   Invoice INV001 is generated for S001 and S002, with the bill-to contact as Steve America and the payment term as Net 30.
-   Invoice INV002 is generated for S003 and S004, with the bill-to contact as Tom Lee and the payment term as Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Steve America | 12 Month | 2022-01-01 | Net 30 | INV001 | Steve America | Net 30 |
| S002 | Steve America | 12 Month | 2022-01-01 | Net 30 |  |  |  |
| S003 | Tom Lee | 12 Month | 2022-01-01 | Net 45 | INV002 | Tom Lee | Net 45 |
| S004 | Tom Lee | 12 Month | 2022-01-01 | Net 45 |  |  |  |

After invoices are generated, you can create a payment for invoice INV001 and another payment for invoice INV002.

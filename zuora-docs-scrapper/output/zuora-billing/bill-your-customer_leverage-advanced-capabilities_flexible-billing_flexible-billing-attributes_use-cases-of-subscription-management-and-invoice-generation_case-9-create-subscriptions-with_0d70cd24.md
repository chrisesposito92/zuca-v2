---
title: "Case 9: Create subscriptions with different bill payment terms"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-9-create-subscriptions-with-different-bill-payment-terms"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:12.554Z"
---

# Case 9: Create subscriptions with different bill payment terms

This reference details the process of creating subscriptions with varying payment terms and generating invoices accordingly.

In this use case, subscriptions are created with no bill-to contact and different payment terms. When subscriptions are invoiced, invoices will be generated based on different payment terms for the default bill-to contact.

As listed in the table below, all three subscriptions are created without the bill-to contact being specified. The payment terms are different. Subscription S001 does not have the payment term specified. Subscriptions S002 and S003 have the payment term as Net 45.

A bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. Invoices are generated based on the bill-to contact and payment term. Invoice INV001 is generated for subscription S001, with the bill-to contact as Ray Lockman and payment term as Net 30. Another invoice INV002 is generated for both S002 and S003, with the bill-to contact as Ray Lockman and payment term as Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | 2022-01-01 | Not specified | INV001 | Ray Lockman | Net 30 |
| S002 | Not specified | 12 Month | 2022-01-01 | Net 45 | INV002 | Ray Lockman | Net 45 |
| S003 | Not specified | 12 Month | 2022-01-01 | Net 45 |  |  |  |

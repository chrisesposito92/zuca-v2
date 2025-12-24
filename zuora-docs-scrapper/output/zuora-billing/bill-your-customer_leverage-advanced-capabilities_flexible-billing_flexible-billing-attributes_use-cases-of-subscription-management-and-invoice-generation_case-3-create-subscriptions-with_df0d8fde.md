---
title: "Case 3: Create subscriptions without payment term and bill-to contact"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-3-create-subscriptions-without-payment-term-and-bill-to-contact"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:57.118Z"
---

# Case 3: Create subscriptions without payment term and bill-to contact

Describes the process of creating subscriptions without specifying a bill-to contact and payment term, and how default values are applied during invoice generation.

In this use case, a subscription is created without the bill-to contact and payment term being specified. When a bill run is created, the invoice for this subscription will be generated for the default bill-to contact and payment term.

As listed in the following table, two subscriptions are created. Subscription S001 is created without the bill-to contact and payment term being specified. A bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. As a result, invoice INV001 is generated for subscription S001. Because this subscription does not have the bill-to contact and payment term specified, the default bill-to contact Ray Lockman and payment term Net 30 are used for invoice INV001. Invoice INV002 is generated for subscription S002 with the bill-to contact as Steve America and payment term as Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | 2022-01-01 | Not specified | INV001 | Ray Lockman | Net 30 |
| S002 | Steve America | 12 Month | 2022-01-01 | Net 45 | INV002 | Steve America | Net 45 |

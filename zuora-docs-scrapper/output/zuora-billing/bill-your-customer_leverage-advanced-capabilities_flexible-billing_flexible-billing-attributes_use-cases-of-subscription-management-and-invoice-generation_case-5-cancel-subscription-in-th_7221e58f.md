---
title: "Case 5: Cancel subscription in the middle of the current term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-5-cancel-subscription-in-the-middle-of-the-current-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:02.264Z"
---

# Case 5: Cancel subscription in the middle of the current term

Outlines the process of canceling subscriptions mid-term, generating invoices, and issuing credit memos for different bill-to contacts and payment terms.

In this use case, subscriptions are created with different bill-to contacts and different payment terms. After being invoiced, the subscriptions are canceled in the middle of the current term. Then, credit memos are generated for different bill-to contacts.

As listed in the following table, the four subscriptions can be categorized into two groups based on the bill-to contact and payment term. Subscriptions S001 and S002 are one group. For this group, the bill-to contact is Steve America and the payment term is Net 30. Subscriptions S003 and S004 are the other group. For this group, the bill-to contact is Tom Lee and the payment term is Net 45.

A bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. Then, invoice INV001 is generated for S001 and S002, with the bill-to contact as Steve America and the payment term as Net 30. Invoice INV002 is generated for S003 and S004, with the bill-to contact as Tom Lee and the payment term as Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Steve America | 12 Month | 2022-01-01 | Net 30 | INV001 | Steve America | Net 30 |
| S002 | Steve America | 12 Month | 2022-01-01 | Net 30 |  |  |  |
| S003 | Tom Lee | 12 Month | 2022-01-01 | Net 45 | INV002 | Tom Lee | Net 45 |
| S004 | Tom Lee | 12 Month | 2022-01-01 | Net 45 |  |  |  |

In the middle of the current term, all subscriptions are canceled with the effective date as 2022-09-01. Another bill run is created with the `targetDate` field as `2022-09-01` and the `autoPost` field as `true`. As a result, credit memo CM-01 is generated for subscriptions S001 and S002 with the bill-to contact as Steve America. Credit memo CM-02 is generated for subscriptions S003 and S004 with the bill-to contact as Tom Lee.

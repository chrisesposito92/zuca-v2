---
title: "Case 6: Regenerate invoice for current term after bill-to contact and payment term change"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-6-regenerate-invoice-for-current-term-after-bill-to-contact-and-payment-term-change"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:04.966Z"
---

# Case 6: Regenerate invoice for current term after bill-to contact and payment term change

Outlines the process of regenerating invoices after changes to the bill-to contact and payment terms, including handling incorrect invoice information and subsequent corrections.

In this use case, two subscriptions are created without the bill-to contact and payment term being specified. After the first invoice is generated, both subscriptions are renewed, and the bill-to contact and payment term of one subscription are changed. Then, another bill run is created to generate two invoices. However, the updated bill-to contact and payment term information is wrong. So the wrong invoice is canceled. After the bill-to contact and payment term information is corrected, a third bill run is created to generate the correct invoice.

As listed in the following table, two subscriptions are created without the bill-to contact and payment term being specified in the initial version. A bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. Invoice INV001 is generated for both subscriptions. The default bill-to contact is Ray Lockman and the payment term is Net 30 according to the account settings.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | 2022-01-01 | Not specified | INV001 | Ray Lockman | Net 30 |
| S002 | Not specified | 12 Month | 2022-01-01 | Not specified |  |  |  |

After the first invoice is generated, the [Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order) operation is used to do the following updates:

-   Renew subscription S001.
-   Renew subscription S002 and update the bill-to contact to Steve America and Payment Term to Net 45.

When the order operation is done, the subscriptions are updated as shown in the table below. Another bill run is created with the `targetDate` field as `2023-01-01` and the `autoPost` field as `true`. Then, invoice INV002 is generated for subscription S001 with the bill-to contact as Ray Lockman and payment term as Net 30. Invoice INV003 is generated for subscription S002 with the bill-to contact as Steve America and payment term as Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | 2023-01-01 | Not specified | INV002 | Ray Lockman | Net 30 |
| S002 | Steve America | 12 Month | 2023-01-01 | Net 45 |  |  |  |
| INV003 | Steve America | Net 45 |  |  |  |  |  |

After INV002 and INV003 are generated, the end customer finds that the bill-to contact of invoice INV003 is wrong. So invoice INV003 is reversed. Credit memo CM-01 is automatically generated during invoice reversal with the bill-to contact as Steve America.

Another order is created to update the terms and conditions for subscription S002. The bill-to contact is updated to Tom Lee and the payment term is updated to Net 60. When the order operation is done, subscription S002 is updated as shown in the table below. A third bill run is created with the `targetDate` field as `2023-01-01` and the `autoPost` field as `true`. As a result, invoice INV004 is generated for S002 with bill-to contact as Tom Lee and payment term as Net 60.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S002 | Tom Lee | 12 Month | 2023-01-01 | Net 60 | INV004 | Tom Lee | Net 60 |

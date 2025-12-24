---
title: "Case 4: Renew subscription and update bill-to contact and payment term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-4-renew-subscription-and-update-bill-to-contact-and-payment-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:59.954Z"
---

# Case 4: Renew subscription and update bill-to contact and payment term

This use case involves renewing two subscriptions, updating the bill-to contact and payment terms, and generating invoices with the updated details.

In this use case, there are two subscriptions. After the first invoice is generated, both subscriptions are renewed, and the bill-to contact and payment terms of one subscription are changed.

As listed in the following table, two subscriptions are created without the bill-to contact and payment term being specified in the initial version. A bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. Invoice INV001 is generated for both subscriptions with the default bill-to contact Ray Lockma and payment term Net 30.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | 2022-01-01 | Not specified | INV001 | Ray Lockman | Net 30 |
| S002 | Not specified | 12 Month | 2022-01-01 | Not specified |  |  |  |

After the first invoice is generated, the [Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order) operation is used to do the following updates:

-   Renew subscription S001.
-   Renew subscription S002 and update the bill-to contact to Steve America and Payment Term to Net 45.

When the order operation is done, the subscriptions are updated as shown in the table below. Another bill run is created with the `targetDate` field as `2023-01-01` and the `autoPost` field as `true`. As a result, invoice INV002 is generated for subscription S001 with the bill-to contact as Ray Lockman and payment term as Net 30. Invoice INV003 is generated for subscription S002 with the bill-to contact as Steve America and payment term as Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | 2023-01-01 | Not specified | INV002 | Ray Lockman | Net 30 |
| S002 | Steve America | 12 Month | 2023-01-01 | Net 45 |  |  |  |
| INV003 | Steve America | Net 45 |  |  |  |  |  |

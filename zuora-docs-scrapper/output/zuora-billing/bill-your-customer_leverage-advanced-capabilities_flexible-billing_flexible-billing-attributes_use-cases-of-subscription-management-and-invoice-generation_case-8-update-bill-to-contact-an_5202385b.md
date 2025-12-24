---
title: "Case 8: Update bill-to contact and payment term in the middle of current term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-8-update-bill-to-contact-and-payment-term-in-the-middle-of-current-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:10.034Z"
---

# Case 8: Update bill-to contact and payment term in the middle of current term

This use case demonstrates updating bill-to contact and payment terms for subscriptions in the middle of a billing term, including generating invoices and modifying subscription details.

In this use case, two subscriptions have different bill-to contacts and payment terms in the initial version. After invoices are generated for the first billing period, the bill-to contact and payment term are updated for one subscription in the middle of the current term.

As listed in the following table, the two subscriptions are created with the details as shown in the table below. The bill-to contact and payment term are not specified for subscription S001. The bill-to contact for subscription S002 is Steve America and the payment term is Net 45. The billing period is monthly for both subscriptions.

A bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. Invoice INV001 is generated for subscription S001 for January. The bill-to contact is Ray Lockman and the payment term is Net 30. Invoice INV002 is generated for subscription S002 for January. The bill-to contact is Steve America and the payment term is Net 45.

| Subscription | Generated Invoice |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Billing Period of Charge | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | Month | 2022-01-01 | Not specified | INV001 | Ray Lockman | Net 30 |
| S002 | Steve America | Month | 2022-01-01 | Net 45 |  |  |  |
| INV002 | Steve America | Net 45 |  |  |  |  |  |

After that, the [Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order) operation is used to do the following updates:

-   The term of subscription S001 is updated to 12 months.
-   The term of subscription S002 is updated to 12 months. The bill-to contact is updated to Tom Lee and the payment term is updated to Net 60.

When the order operation is done, the subscriptions are updated as shown in the table below. Another bill run is created with the `targetDate` field as `2022-01-01` and the `autoPost` field as `true`. Then, invoice INV003 is generated for subscription S001 for February. The bill-to contact is Ray Lockman and the payment term is Net 30. Invoice INV004 is generated for subscription S002 for February. The bill-to contact is Tom Lee and the payment term is Net 60.

| Subscription | Generated Invoice |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Billing Period of Charge | Effective Start Date | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Not specified | 12 Month | Month | 2022-01-01 | Not specified | INV003 | Ray Lockman | Net 30 |
| S002 | Tom Lee | 12 Month | Month | 2022-01-01 | Net 60 |  |  |  |
| INV004 | Tom Lee | Net 60 |  |  |  |  |  |  |

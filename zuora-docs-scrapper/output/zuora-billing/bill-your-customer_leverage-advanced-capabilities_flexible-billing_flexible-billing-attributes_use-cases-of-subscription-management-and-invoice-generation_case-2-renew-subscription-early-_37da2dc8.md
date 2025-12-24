---
title: "Case 2: Renew subscription early and update bill-to contact and payment term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/use-cases-of-subscription-management-and-invoice-generation/case-2-renew-subscription-early-and-update-bill-to-contact-and-payment-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:54.710Z"
---

# Case 2: Renew subscription early and update bill-to contact and payment term

Describes the process of renewing subscriptions early by updating the subscription term, bill-to contact, and payment term, and generating billing documents for the updated subscriptions.

In this use case, after completing all the operations in Case 1, you renew subscriptions S001 and S002 by updating their subscription term, bill-to contact, and payment and changing the charges.

After the all the operations in Case 1, you use the [Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order) operation to do the following updates:

-   Create an order with the order action of Update Terms and Conditions to update the subscription term from 12 months to 20 months, bill-to contact to Lock Richard, and payment term to Net 60 for subscriptions S001 and S002.
-   Create an order with the order action of Remove Product to remove the charges with the effective date as 2022-09-01 for subscriptions S001 and S002.
-   Create an order with the order action of Add Product to add new charges with the effective date as 2022-09-01 to subscriptions S001 and S002.

To generate billing documents for the renewed subscriptions, use the [Generate billing documents by account ID](https://www.zuora.com/developer/api-references/api/operation/POST_GenerateBillingDocuments) operation with the `targetDate` field as `2023-01-01` and the `autoPost` field as `true`.

-   Credit memo CM001 is generated to provide credit for the removed charges from 2022-09-01 to 2022-12-31.
-   Invoice INV003 is generated for the new charges from 2022-09-01 to 2023-08-31.

| Subscription | Generated Billing Document |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Subscription Term | Effective Start Date | Payment Term | Document Number | Bill To Contact | Payment Term |
| S001 | Lock Richard | 20 Month | 2022-01-01 | Net 60 | INV003CM001 | Lock Richard | Net 30 |
| S002 | Lock Richard | 20 Month | 2022-01-01 | Net 60 |  |  |  |

Both the generated invoice and credit memo uses the latest billing attributes, bill-to contact and payment term. After the billing documents are generated, you can apply credit memo CM001 to invoice INV003.

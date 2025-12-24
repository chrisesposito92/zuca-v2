---
title: "Invoice generation changes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes/invoice-generation-changes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:38:06.081Z"
---

# Invoice generation changes

Learn about the changes in invoice generation behavior when Flexible Billing Attributes are enabled, allowing for customization at the subscription and order line item level.

If you have Flexible Billing Attributes enabled, the invoice generation behavior changes.

With the feature enabled, you can specify billing attributes, including bill-to contacts and payment terms, and so on, at the subscription and order line item level. Subsequently, invoices are generated based on the billing attributes on the corresponding subscription and order line item level.

The following billing attributes are used to group invoice items into separate invoices:

-   Bill To Contact
-   Currency
-   Payment Term
-   Invoice Template
-   Sequence Set
-   Communication Profile

The following billing attributes won't affect invoice grouping. Instead, they'll be saved on the invoice items by inheriting them from the related subscription or order line item.

-   Sold To Contact
-   Ship To Contact

Invoice generation follows the following rules:

-   The latest billing attributes of subscriptions and order line items are used for generating invoices.
-   If you disable the Invoice the Subscription Separately setting, only one draft invoice is generated for the subscriptions that have the same billing attributes. Multiple draft invoices are allowed if they are generated from the subscriptions or order line items with different billing attributes.
-   If you enable the Invoice the Subscription Separately setting, separate invoices are generated for subscriptions, regardless of billing attributes.
-   You cannot update the flexible billing attributes on a subscription if a draft invoice exists. To make the changes, you must post the draft invoice first, and then you can update the subscription.

Assume that you have a customer account with the account number being A0001 and two bill-to contacts: Steve America and Ray Lockman.

The default bill-to contact of the account is Steve America, and the default payment term is Net 30.

The following table lists the invoice generation behavior changes if you have the Flexible Billing Attributes feature enabled.

| Without Flexible Billing Attributes | With Flexible Billing Attributes |
| --- | --- |
| Invoices can only be generated for subscriptions at the account level. Additionally, you can use the Invoice the Subscription Separately setting to create independent invoices per subscription. | You have the following flexibility to generate invoices for the subscriptions according to the bill-to contact and payment terms of subscriptions.Multiple invoices are generated according to different bill-to contacts and payment terms.A single invoice is generated per the same bill-to contact and payment term.A single invoice is generated per the default and specific bill-to contact and payment term.New invoice items are appended to draft invoices.The latest billing attributes are used on generated invoices.Unpostting an invoice is not allowed if bill-to contacts and payment terms on the corresponding subscriptions are changed.To unpost the invoice, you have to change the bill-to contact and payment term on the subscriptions to be the same ones as the invoice. |

Read the following sections to understand how the Flexible Billing Attributes feature works in common subscription management and invoice generation scenarios.

For more use case information, see Common use cases of Flexible Billing Attributes.

## Multiple invoices are generated according to different bill-to contacts and payment terms

If the two subscriptions have different bill-to contacts and different payment terms, you can generate two invoices, one for each subscription. The bill-to contacts and payment terms of the generated invoices inherit those of the corresponding subscription. See the following table for details.

| Subscription | Generated Invoice |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |
| S002 | Steve America | Net 30 | INV002 | Steve America | Net 30 |

If two subscriptions have the same bill-to contact, but two order line items have a different bill-to contact, see the following table for details.
| Subscription and order line items | Generated Invoice |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |
| S002 | Ray Lockman | Net 60 |  |  |  |
| Order Line Item Name | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| OLI 1 | Steve America | N/A, see the following note. | INV002 | Steve America | Due Upon Receipt |
| OLI 2 | Steve America | N/A, see the following note. |  |  |  |

If two subscriptions and two order line items have the same bill-to contact, however, the two subscriptions have the same payment term, but the account of the two order line items has a different payment term, see the following table for details.
| Subscription and order line items | Generated Invoice |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |
| S002 | Ray Lockman | Net 60 |  |  |  |
| Order Line Item Name | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| OLI 1 | Ray Lockman | N/A, see the following note. | INV002 | Ray Lockman | Due Upon Receipt |
| OLI 2 | Ray Lockman | N/A, see the following note. |  |  |  |

Note: N/A means that you cannot configure the payment term on order line items. Order line items inherit the payment term value from the account. When the invoice corresponding to the order line items is generated, the payment term value in the invoice reflects the payment term value of the account.

## Invoice generation according to the same bill-to contacts and payment terms

If two subscriptions and two order line items have the same bill-to contact, and the two subscriptions and the account of the two order line items have the same payment term, invoice generation behaviors vary with the setting of the Allow to consolidate subscriptions, order line items and standalone invoice items into a single invoice billing rule.

If this billing rule is No, see the following table for details.

| Subscription and order line items | Generated Invoice |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |
| S002 | Ray Lockman | Net 60 |  |  |  |
| Order Line Item Name | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| OLI 1 | Ray Lockman | N/A, see the following note. | INV002 | Ray Lockman | Net 60 |
| OLI 2 | Ray Lockman | N/A, see the following note. |  |  |  |

If this billing rule is Yes, see the following table for details.

| Subscriptions and order line items | Generated Invoice |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | INV001 | Ray Lockman | Net 60 |
| S002 | Ray Lockman | Order Line Item Name |  |  |  |
| Order Line Item Name | Bill To Contact | Payment Term |  |  |  |
| OL1 | Ray Lockman | N/A, see the following note. |  |  |  |
| OL2 | Ray Lockman | N/A, see the following note. |  |  |  |

Note: N/A means that you can not configure the payment term on order line items. Order line items inherit the payment term value from the account. When the invoice corresponding to the order line items is generated, the payment term value in the invoice reflects the payment term value of the account.

## Single invoice is generated according to default and specific bill-to contact and payment term

If one subscription does not have any defined bill-to contact and payment term, while the other has the same bill-to contact and payment term as the account, you can generate one single invoice for the two subscriptions. See the following table for details.

| Subscription | Generated Invoice |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Subscription Number | Bill To Contact | Payment Term | Invoice Number | Bill To Contact | Payment Term |
| S001 | Steve America (account default) | Net 30 (account default) | INV001 | Steve America (account default) | Net 30 (account default) |
| S002 |  |  |  |  |  |

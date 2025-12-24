---
title: "Invoice Grouping examples"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/invoice-grouping/invoice-groups-creation-for-subscriptions-or-order-line-items/invoice-grouping-examples"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:43.146Z"
---

# Invoice Grouping examples

The following examples show you the results of consolidating the invoices for the subscriptions and order line items into one invoice using the same invoice group number.

## Example 1: Invoice Grouping for Subscriptions

In this example, invoice INV001 is a consolidated invoice for subscriptions S001 and S002 since the two subscriptions are specified with the same invoice group number, PO#1. Invoice INV002 is generated for subscriptions S003 and S004, which are specified with the same invoice group number, PO #2.

| Account Number: A001, Bill To Contact: Tom Lee, Payment Term: Due Upon Receipt |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Subscription | Generated Invoice |  |  |  |  |  |
| Subscription Number | Bill To Contact | Payment Term | Invoice Group Number | Invoice Number | Bill To Contact | Payment Term |
| S001 | Ray Lockman | Net 60 | PO #1 | INV001 | Ray Lockman | Net 60 |
| S002 | Ray Lockman | Net 60 | PO #1 |  |  |  |
| S003 | Ray Lockman | Net 60 | PO #2 | INV002 | Ray Lockman | Net 60 |
| S004 | Ray Lockman | Net 60 | PO #2 |  |  |  |
| S005 | Steve America | Net 30 |  | INV003 | Steve America | Net 30 |
| S006 |  |  |  | INV004 | Tom Lee | Due Upon Receipt |

Note:

The bill-to contact and payment term of an account are used as the default values of the subscriptions.

## Example 2: Invoice Grouping for Order Line Items

In this example, invoice INV001 is a consolidated invoice for order line items OL1 and OL2 since the two order line items are specified with the same invoice group number, Group1. Invoice INV002 is generated for order line items OLI3 and OLI4, which are specified with the same invoice group number, Group2.

| Account Number: A001, Bill To Contact: Tom Lee, Payment Term: Due Upon Receipt |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Order Line Item | Generated Invoice |  |  |  |  |  |
| OLI Name | Bill To Contact | Sold To Contact | Invoice Group Number | Invoice Number | Bill To Contact | Payment Term |
| OLI1 | Ray Lockman | Sold To 1 | Group1 | INV001 | Ray Lockman | Due Upon Receipt |
| OLI2 | Ray Lockman | Sold To 1 | Group1 |  |  |  |
| OLI3 | Ray Lockman | Sold To 2 | Group2 | INV002 | Ray Lockman | Due Upon Receipt |
| OLI4 | Ray Lockman | Sold To 3 | Group2 |  |  |  |
| OLI5 | Ray Lockman | Sold To 3 | Group4 | INV003 | Ray Lockman | Due Upon Receipt |
| OLI6 | Ray Lockman | Sold To 3 | Group5 | INV004 | Ray Lockman | Due Upon Receipt |

Note: The bill-to contact and payment term of an account are used as the default values of the subscriptions.

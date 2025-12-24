---
title: "Interaction with invoice settlement"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/interaction-with-invoice-settlement"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:38.344Z"
---

# Interaction with invoice settlement

This article explains the calculation of charge-level Discount MRR for both discount and regular charges, including examples of discount allocation and charge segmentation.

Generally, invoices with a negative total amount cannot be generated when the Invoice Settlement feature is enabled. However, when the Invoice Settlement feature is disabled, such invoices can be successfully generated.

The following tables demonstrate this limitation with examples, and the examples are grouped by different values of an invoice consolidation billing rule, that is, Allow to consolidate subscriptions, order line items and standalone invoice items into a single invoice.

-   When the Invoice Settlement feature is enabled and the invoice consolidation billing rule is set to Yes, no invoice or credit memo is generated with a negative total amount that includes the amount of the order line items. Examples 1 to 3 in Table 1 demonstrate this limitation; However, an invoice with a positive total amount can be successfully generated. See Examples 4 and 5 in Table 1.

| Example | Total amount of Sales Order Line Items | Total amount of subscription charges | Total amount | Billing document generation |
| --- | --- | --- | --- | --- |
| Example 1 | -$10 | n/a | -$10 | No invoice or credit memo is generated. Billing document generation is rejected because of the negative total amount. |
| Example 2 | -$30 | $20 | -$10 | No invoice or credit memo is generated. Billing document generation is rejected because of the negative total amount. |
| Example 3 | $30 | -$100 | -$70 | No invoice or credit memo is generated. Billing document generation is rejected because of the negative total amount. |
| Example 4 | -$30 | $100 | $70 | A $70 invoice is generated. |
| Example 5 | $30 | -$10 | $20 | A $20 invoice is generated. |

-   When the Invoice Settlement feature is enabled and the invoice consolidation billing rule is set to No, no invoice or credit memo can be generated with a negative total amount of the order line items. Examples 1 to 3 in Table 2 demonstrate this limitation; However, an invoice with a positive total amount of the order line items can be successfully generated. See Examples 4 and 5 in Table 2.

| Example | Total amount of Sales Order Line Items | Total amount of subscription charges | Total amount | Billing document generation |
| --- | --- | --- | --- | --- |
| Example 1 | -$10 | n/a | -$10 | No invoice or credit memo is generated. Billing document generation is rejected because of the negative total amount of order line items. |
| Example 2 | -$30 | $20 | -$10 | No invoice or credit memo is generated for the order line items. Billing document generation is rejected because of the negative total amount of order line items.A $20 invoice is generated for the subscription charges. |
| Example 3 | -$30 | $100 | $70 | No invoice or credit memo is generated for the order line items. Billing document generation is rejected because of the negative total amount of order line items.A $100 invoice is generated for the subscription charges. |
| Example 4 | $30 | -$100 | -$70 | A $30 invoice is generated for the order line items.A $100 credit memo is generated for the subscription charges. |
| Example 5 | $30 | -$10 | $20 | A $30 invoice is generated for the order line items. When the Invoice Settlement feature is enabled and the invoice consolidation billing rule is set to Yes, no invoice or credit memo is generated with a negative total amount that includes the amount of the order line items. Examples 1 to 3 in Table 1 demonstrate this limitation; However, an invoice with a positive total amount can be successfully generated. See Examples 4 and 5 in Table 1. feature is enabled and the invoice consolidation billing rule is set to Yes, no invoice or credit memo is generated with a negative total amount that includes the amount of the order line items. Examples 1 to 3 in Table 1 demonstrate this limitation; However, an invoice with a positive total amount can be successfully generated. See Examples 4 and 5 in Table 1.A $10 credit memo is generated for the subscription charges. |

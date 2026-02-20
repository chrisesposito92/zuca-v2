---
title: "Accounting codes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/accounting-codes"
product: "zuora-billing"
scraped_at: "2026-02-20T17:27:55.494Z"
---

# Accounting codes

The accounting code in your product rate plan must match an item in your accounting system to ensure proper data integration and processing.

The Accounting Code in the product rate plan should map to an item in your accounting system.

## Accounting codes and accounting systems

For Quickbooks, the accounting code should match a Quickbooks item name. For Intacct, it should match an Intacct charge category.

If you are using Boomi to import Zuora Billing data into your back-end accounting system, an accounting code is required to properly push your Zuora Billing and Zuora Payments data into your accounting system. The accounting code in your product rate plan must be an exact match (that is, it must have the exact case, spacing, and spelling) as the item in your accounting item list or charge category in order for the invoices, payments, and adjustments to be properly imported into your accounting system.

The accounting code for a discount is based on the charge that is being discounted. You do not need to set an accounting code for the discount itself.

## Accounting codes and Zuora Finance

If you are using Zuora Finance, see Set up accounting codes for more information about using accounting codes in Zuora.

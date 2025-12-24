---
title: "Bundle reclassification"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/bundle-explosion/bundle-reclassification"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:00.407Z"
---

# Bundle reclassification

If the offset account information is provided on the transaction line for the invoice transaction type, Zuora Revenue can reclassify the initial accounting entries to either the Deferred Offset account or Revenue Offset account. The trigger for the reclassification is at the time of billing.

The required accounting setup for bundle reclassification is to create the following offset account types based on the balance sheet account or income statement account:

-   Deferred Offset (based on Balance Sheet)
-   Revenue Offset (based on Income Statement)

The accounting entries for these offset accounts are created in the transactional currency that is associated with the transaction line.

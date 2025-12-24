---
title: "SO release upon billing (overage invoice)"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/cm-c-accounting-entries/so-release-upon-billing-overage-invoice"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:54.358Z"
---

# SO release upon billing (overage invoice)

This example demonstrates the process of updating a Sales Order (SO) line in Zuora Revenue, where the release event is Upon Billing, and the impact of collecting an invoice line.

In this example, the initial SO line of $100 is uploaded to Zuora Revenue. The release event is Upon Billing, so there is no impact for the initial SO upload. Then, the SO update is collected to increase the SO line value to $180.

Later, an invoice line of $200 is collected to Zuora Revenue, which results in a one-sided initial entry in Zuora Revenue.

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 200 | Contract Liability |  | 200 | Y |
| Contract Liability | 200 |  | Contract Liability | 200 |  | N |
| Revenue |  | 200 | Revenue |  | 200 | N |

The release event is Upon Billing so there is no need to reverse the SO entries. No reclass entry is created.

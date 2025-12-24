---
title: "INV accounting entries"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/inv-accounting-entries"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:41.635Z"
---

# INV accounting entries

This reference provides examples that explain how Zuora Revenue processes sales order (SO) lines, invoices, and updates when the release event is set to Upon Billing.

In this example, the original SO line of $100 is collected in Zuora Revenue. The release event is Upon Billing, so there is no impact for the initial SO upload. The accounting entries will be the same no matter whether the Right\_to\_Bill flag is Y or N.

Later, an invoice of $100 is collected, which is associated with this SO line. A one-sided initial entry is created for $100 in Zuora Revenue because the invoice is created outside of Zuora Revenue. The balance of the accounting entries are as follows:

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 100 | Contract Liability |  | 100 | Y |
| Contract Liability | 100 |  | Contract Liability | 100 |  | N |
| Revenue |  | 100 | Revenue |  | 100 | N |

Then, the SO update is collected to increase the SO line value to $180. The release event is Upon Billing, so there is no accounting impact for the SO update. Later, a second invoice of $80 is collected. Again, a one-sided initial entry is created for this invoice and the balance of the accounting entries are as follows:

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 80 | Contract Liability |  | 180 = (100+80) | Y |
| Contract Liability | 80 |  | Contract Liability | 180 |  | N |
| Revenue |  | 80 | Revenue |  | 180 | N |

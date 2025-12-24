---
title: "CM accounting entries"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/cm-accounting-entries"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:44.042Z"
---

# CM accounting entries

This document details the accounting entries for a sales order (SO) line uploaded to Zuora Revenue, including initial entries, adjustments, and reclassifications.

In this example, the initial SO line of $100 is uploaded to Zuora Revenue. The release event is Upon Booking. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability | 100 |  | Contract Liability | 100 |  |
| Revenue |  | 100 | Revenue |  | 100 |

Later, the SO line with the same SO line ID is uploaded to increase the SO value to $180. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability | 80 |  | Contract Liability | 180 |  |
| Revenue |  | 80 | Revenue |  | 180 |

Then, an invoice line of $180 is collected, which is associated with the original SO line. A one-sided initial entry is created for $180 in Zuora Revenue.

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 180 | Contract Liability |  | 180 | Y |

The reclass entries are created by Zuora Revenue as follows. The first two lines are to reverse the journal entries created for the SO line. The other two lines are to recognize the invoice amount.

| Balance |  |  |  |
| --- | --- | --- | --- |
| Account type | Dr | Cr | Note |
| Contract Liability |  | 180 | SO reverse |
| Revenue | 180 |  | SO reverse |
| Contract Liability | 180 |  | Invoice recognized |
| Revenue |  | 180 | Invoice recognized |

Then, another CM line of (-$30) is collected, which is associated with the original SO line ID. The initial entry for this invoice is created.

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 30 | Contract Liability |  | 150 | Y |

The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability |  | 30 | Contract Liability | 150 |  |
| Revenue | 30 |  | Revenue |  | 150 |

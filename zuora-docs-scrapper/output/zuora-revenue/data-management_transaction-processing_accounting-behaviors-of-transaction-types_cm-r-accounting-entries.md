---
title: "CM-R accounting entries"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/cm-r-accounting-entries"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:56.945Z"
---

# CM-R accounting entries

This document provides examples to explain CM-R accounting behaviors, including invoice-based entries and their impact on contract liability and revenue.

Two examples are provided to explain CM-R accounting behaviors.

## Example 1 - Invoice based CM-R

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

Then, a CM-R line is collected, which is associated with the previous invoice line. The EXT\_SLL\_PRC value of the CM-R line is -$100 for the return. The impact of the CM-R line on the initial entry is as follows:

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability | 100 |  | Contract Liability |  | 80 = (180 - 100) | Y |

The impact and balance of the accounting entries for the billed revenue will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability | 100 |  | Contract Liability | 80 |  |
| Revenue |  | 100 | Revenue |  | 80 |

## Example 2 - SO based CM-R

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

Then, a CM-R line is collected, which is associated with the original SO line. The EXT\_SLL\_PRC value of the CM-R line is -$100 for the return. A one-sided initial entry is created for the CM-R line as follows:

| Balance |  |  |  |
| --- | --- | --- | --- |
| Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 100 | Y |

After that, an invoice line of $180 is collected and another initial entry is created for this invoice line.

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

The balance of the accounting entries is as follows for the billed revenue:

| Balance |  |  |  |
| --- | --- | --- | --- |
| Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 80 | Y |
| Contract Liability | 80 |  | N |
| Revenue |  | 80 | N |

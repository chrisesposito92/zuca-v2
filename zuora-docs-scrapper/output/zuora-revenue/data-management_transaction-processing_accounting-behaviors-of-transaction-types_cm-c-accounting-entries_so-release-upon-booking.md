---
title: "SO release upon booking"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/cm-c-accounting-entries/so-release-upon-booking"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:49.185Z"
---

# SO release upon booking

The initial SO line of $100 is uploaded to Zuora Revenue with a release event upon booking, impacting the accounting entries.

The initial SO line of $100 is uploaded to Zuora Revenue. The release event is Upon Booking. The impact and balance of the accounting entries will be as follows:

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

Then, an invoice of $180 is collected in Zuora Revenue, which results in a one-sided initial entry created in Zuora Revenue.
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

Then, a CM-C line is collected in Zuora Revenue, which is associated with the previous invoice. The EXT\_SLL\_PRC value of this CM-C line is -$100 so it reduces the invoice amount by $100. The initial entry for the invoice line is created as follows:
| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability | 100 |  | Contract Liability |  | 80 | Y |

The entries for the billed revenue and unbilled revenue are as follows:
| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Note |
| Revenue | 100 |  | Contract Liability | 80 |  | Billed revenue |
| Contract Liability |  | 100 | Revenue |  | 80 | Billed revenue |
| Revenue |  | 100 | Revenue | 100 |  | Unbilled revenue |
| Contract Liability | 100 |  | Contract Liability |  | 100 | Unbilled revenue |

---
title: "PORD accounting entries"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/pord-accounting-entries"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:11.946Z"
---

# PORD accounting entries

This document provides examples of PORD accounting behaviors, illustrating the impact and balance of accounting entries in scenarios of price adjustments.

## Example 1 - Price down

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

Then, an invoice line of $180 is collected, which is associated with the SO line. A one-sided initial entry is created for this invoice line as follows:
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

Later, a PORD line is collected, which is associated with the original SO line. The EXT\_SLL\_PRC value of the PORD line is -$50 to decrease the SO value by $50. The impact and balance of the accounting entries are as follows for the billed revenue:
| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability |  | 50 | Contract Liability | 130 |  |
| Revenue | 50 |  | Revenue |  | 130 |

After the PORD line, a CM-RO line of $50 is collected. The impact and balance of the initial entry is as follows:
| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability | 50 |  | Contract Liability |  | 130 | Y |

The accounting entries for the billed revenue remains the same:
| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability |  |  | Contract Liability | 130 |  |
| Revenue |  |  | Revenue |  | 130 |

## Example 2 - Price up

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

Then, an invoice line of $180 is collected, which is associated with the SO line. A one-sided initial entry is created for this invoice line as follows:

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

Later, a PORD line is collected, which is associated with the original SO line. The EXT\_SLL\_PRC value of the PORD line is $70 to increase the SO value by $70. The impact and balance of the accounting entries for the billed revenue are as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability | 70 |  | Contract Liability | 250 |  |
| Revenue |  | 70 | Revenue |  | 250 |

Then, another invoice of $70 is collected for the PORD line. The impact and balance of the initial entry is as follows:

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Initial Entry Flag |
| Contract Liability |  | 70 | Contract Liability |  | 250 = (70+180) | Y |

The reclass entries are created by Zuora Revenue as follows:

| Impact | Balance |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr | Note |
| Revenue | 70 |  | Contract Liability |  | 250 | Invoice recognized |
| Contract Liability |  | 70 | Revenue | 250 |  | Invoice recognized |
| Revenue |  | 70 |  |  |  |  |
| Contract Liability | 70 |  |  |  |  |  |

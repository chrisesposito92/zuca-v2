---
title: "SO accounting entries"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/so-accounting-entries"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:39.040Z"
---

# SO accounting entries

This article provides information on the sales order (SO) accounting behaviors.

Two examples are provided to explain the SO accounting behaviors.

## Example 1 - Right to Bill flag set to N

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

After that, the SO value is decreased to $150 in another upload. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability |  | 30 | Contract Liability | 150 |  |
| Revenue | 30 |  | Revenue |  | 150 |

## Example 2 - Right to Bill flag set to Y

In this example, the initial SO of $100 is uploaded to Zuora Revenue. The release event is Upon Booking and the Right\_to\_Bill flag is set to Y. No invoice is received. The Unbilled account will be impacted. After the initial upload, the impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Unbilled | 100 |  | Unbilled | 100 |  |
| Revenue |  | 100 | Revenue |  | 100 |

Again, the SO value is increased to $180 in the next upload and no invoice is received. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Unbilled | 80 |  | Unbilled | 180 |  |
| Revenue |  | 80 | Revenue |  | 180 |

Then, the SO value is decreased to $150 in another upload and no invoice is received yet. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Unbilled |  | 30 | Unbilled | 150 |  |
| Revenue | 30 |  | Revenue |  | 150 |

After that, an invoice of $100 is received. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Account type | Dr | Cr | Account type | Dr | Cr |
| Contract Liability |  | 100 | Contract Liability | 100 |  |
| Unbilled |  | 100 | Unbilled | 50 |  |
| Revenue | 100 |  | Revenue |  | 150 |
| Contract Liability | 100 |  |  |  |  |
| Revenue |  | 100 |  |  |  |

---
title: "RORD collected after invoicing"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/rord-collected-after-invoicing"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:01.943Z"
---

# RORD collected after invoicing

A scenario that explains RORD and CM-RO accounting entries

In this scenario, the RORD line is collected after the invoice line. The current open period is Jan-2020. Both the SO line and the invoice line are collected in Zuora Revenue in January 2020. The POB is on hold for release.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | SO | 12000 | 12000 | 1/1/2020 | 12/31/2020 | 12000 | 0 | 202001 |
| 1.1 | INV | 12000 | 12000 | 1/1/2020 | 12/31/2020 | 12000 | 0 | 202001 |

The accounting entry is created as follows:

| Account Type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability |  | 12000 | 202001 |

In the same period, the following RORD line is collected. The Net Sell Price is the sum of SO and RORD amount, which equals $6000 and the Net Billed Amount is the invoice amount, which is $12000. Net Billed Amount is greater than Net Sell Price, so Contra AR entry is created for $6000.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | RORD | -6000 | -6000 | 7/1/2020 | 12/31/2020 | -6000 | 0 | 202001 |

After the RORD line is collected, the allocatable amount of the original SO line is decreased.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | SO | 12000 | 6000 | 1/1/2020 | 12/31/2020 | 6000 | 0 |

The accounting entries are created for the RORD line.

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability |  | 12000 | 202001 |
| Contract Liability | 6000 |  | 202001 |
| Contra AR |  | 6000 | 202001 |

The Contra AR reversal happens when the CM-RO line is collected for the RORD amount in the Feb-20 period.

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability |  | 12000 | 202001 |
| Contract Liability | 6000 |  | 202001 |
| Contra AR |  | 6000 | 202001 |
| Contract Liability | 6000 |  | 202002 |
| Contra AR | 6000 |  | 202002 |
| Contract Liability |  | 6000 | 202002 |

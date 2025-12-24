---
title: "CM-C line collected after RORD"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/cm-c-line-collected-after-rord"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:06.951Z"
---

# CM-C line collected after RORD

A scenario that explains RORD and CM-RO accounting entries

In this scenario, a CM-C line is collected after the RORD line has reduced revenue and created Contra AR entries. When CM-C line joins, Zuora Revenue will perform unbilled to billed conversion for Contract Liability and reverse the Contra AR entries.

The current open period is Jan-2020. Both the SO line and the invoice line are collected in Zuora Revenue in January 2020. The POB ratable method is Immediate using current open period.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | SO | 12000 | 1200 | 1/1/2020 | 12/31/2020 | 0 | 1200 | 202001 |
| 1.1 | INV | 12000 | 1200 | 1/1/2020 | 12/31/2020 | 0 | 1200 | 202001 |

The accounting entries are created as follows:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability |  | 1200 | 202001 |
| Contract Liability | 1200 |  | 202001 |
| Revenue |  | 1200 | 202001 |

In the Feb-2020 period, the RORD line is collected for $300. The release of the RORD line follows the POB ratable method of the SO line.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | RORD | -300 | -300 | 12/1/2020 | 12/31/2020 | 0 | -300 | 202002 |

A contra entry will be created for $300, which equals Net Billed Amount ($12000) minus Net Sell Price ($12000-300). The accounting entries are as follows:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability | 300 |  | 202002 |
| Contra AR |  | 300 | 202002 |
| Contract Liability |  | 300 | 202002 |
| Revenue | 300 |  | 202002 |

Then, the CM-C line is collected in the Mar-2020 period.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | CM-C | -1200 | -1200 | 12/1/2020 | 12/31/2020 | 0 | -1200 | 202003 |

After the CM-C line is processed, a portion of the CM-C amount is converted to CM-RO amount. The converted amount equals the RORD amount, which is $300 in this example.

| Account type | Dr | Cr | Period ID | Note |
| --- | --- | --- | --- | --- |
| Contract Liability | 1200 |  | 202003 | CM-C initia entry |
| Contra AR | 300 |  | 202003 | Contra reversal |
| Contract Liability |  | 300 | 202003 | Contra reversal |
| Contract Liability |  | 900 | 202003 | Invoice reversal |
| Revenue | 900 |  | 202003 | Invoice reversal |
| Contract Liability | 900 |  | 202003 | Unbilled recognize |
| Revenue |  | 900 | 202003 | Unbilled recognize |

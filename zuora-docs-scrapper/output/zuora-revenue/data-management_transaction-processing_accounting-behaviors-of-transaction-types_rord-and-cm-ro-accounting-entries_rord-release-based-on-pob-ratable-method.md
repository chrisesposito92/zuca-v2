---
title: "RORD release based on POB ratable method"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/rord-release-based-on-pob-ratable-method"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:04.503Z"
---

# RORD release based on POB ratable method

A scenario that explains RORD and CM-RO accounting entries

In this scenario, the current open period is Jan-2020. Both the SO line and the invoice line are collected in Zuora Revenue in January 2020. The system settings are as follows:

-   The POB ratable method is Contract Ratable and the accounting method is Partially Monthly.

-   The INVOICE\_CONTRACT\_RATABLE profile is set to Y, which means the invoice revenue follows the contract ratable method.


The revenue has been 50% released in January 2020.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | SO | 12000 | 12000 | 1/1/2020 | 12/31/2020 | 6000 | 6000 | 202001 |
| 1.1 | INV | 12000 | 12000 | 1/1/2020 | 12/31/2020 | 6000 | 6000 | 202001 |

The accounting entries will be created as follows:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability |  | 12000 | 202001 |
| Contract Liability | 1000 |  | 202001 |
| Revenue |  | 1000 | 202001 |
| Contract Liability | 1000 |  | 202002 |
| Revenue |  | 1000 | 202002 |
| Contract Liability | 1000 |  | 202003 |
| Revenue |  | 1000 | 202003 |
| Contract Liability | 1000 |  | 202004 |
| Revenue |  | 1000 | 202004 |
| Contract Liability | 1000 |  | 202005 |
| Revenue |  | 1000 | 202005 |
| Contract Liability | 1000 |  | 202006 |
| Revenue |  | 1000 | 202006 |

In the Jul-2020 period, RORD line is collected. The RORD revenue will not be released because there is no revenue schedule in the RORD periods.

| Line ID | Transaction Type | Ext. Sell Price | Allocatable | Start Date | End Date | Deferred | Released | Period ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | RORD | -6000 | -6000 | 7/1/2020 | 12/31/2020 | -6000 | 0 | 202007 |

A contra entry is created for $6000 in the Jul-2020 period, which equals Net Billed Amount ($12000) minus Net Sell Price ($6000). The accounting entries are as follows:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability | 6000 |  | 202007 |
| Contra AR |  | 6000 | 202007 |

When the remaining 50% of the revenue is released in the Jul-2020 period, the following accounting entries are created:

| Account type | Dr | Cr | Period ID |
| --- | --- | --- | --- |
| Contract Liability | 1000 |  | 202007 |
| Revenue |  | 1000 | 202007 |
| Contract Liability |  | 1000 | 202007 |
| Revenue | 1000 |  | 202007 |
| Contra Liability | 6000 |  | 202007 |
| Contra AR |  | 6000 | 202007 |
| Contract Liability | 100 |  | 202008 |
| Revenue |  | 1000 | 202008 |
| Contract Liability |  | 1000 | 202008 |
| Revenue | 1000 |  | 202008 |
| Contract Liability | 1000 |  | 202009 |
| Revenue |  | 1000 | 202009 |
| Contract Liability |  | 1000 | 202009 |
| Revenue | 1000 |  | 202009 |
| Contract Liability | 1000 |  | 202010 |
| Revenue |  | 1000 | 202010 |
| Contract Liability |  | 1000 | 202010 |
| Revenue | 1000 |  | 202010 |
| Contract Liability | 1000 |  | 202011 |
| Revenue |  | 1000 | 202011 |
| Contract Liability |  | 1000 | 202011 |
| Revenue | 1000 |  | 202011 |
| Contract Liability |  | 1000 | 202012 |
| Revenue |  | 1000 | 202012 |
| Contract Liability |  | 1000 | 202012 |
| Revenue | 1000 |  | 202012 |

---
title: "Accounting entries (before 37.001.00.00)"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/reduction-order-transactions/accounting-entries-before-37.001.00.00"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:25.096Z"
---

# Accounting entries (before 37.001.00.00)

This reference provides examples of accounting entries to help you understand the RORD processing in Zuora Revenue. The impact of CM-RO transactions is also explained.

In this example, the original SO line is collected with the following key fields.

| SO NO | Line NO | INV NO | INV Line NO | Item | Ext. Sell Price | Curr | Qty | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO100 | SO100-1 | INV100 | INV100-1 | Hardware | 1200 | USD | 1 | 01/01/2019 | 01/01/2019 |
| SO100 | SO100-2 | INV100 | INV100-2 | Maintenance | 600 | USD | 12 | 01/01/2019 | 31/12/2019 |
| SO100 | SO100-3 | INV100 | INV100-3 | Support | 360 | USD | 12 | 01/01/2019 | 31/12/2019 |

The hardware line is recognized immediately and the maintenance and support lines are Contract Ratable for one year. The waterfall data for these lines are as follows:

| SO NO | Line NO | Item | Curr | Jan-19 | Feb-19 | Mar-19 | Apr-19 | ... | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO100 | SO100-1 | Hardware | USD | 1200 |  |  |  |  |  |  |  |
| SO100 | SO100-2 | Maintenance | USD | 50 | 50 | 50 | 50 |  | 50 | 50 | 50 |
| SO100 | SO100-3 | Support | USD | 30 | 30 | 30 | 30 |  | 30 | 30 | 30 |

In the Jan-19 period, the following accounting entries are created:

| RC ID | Line NO | Account Type | Currency | Debit | Credit | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | SO100-1 | Contract Liability | USD |  | 1200 | Initial Entry |
| 1000 | SO100-2 | Contract Liability | USD |  | 600 | Initial Entry |
| 1000 | SO100-3 | Contract Liability | USD |  | 360 | Initial Entry |
| 1000 | SO100-1 | Contract Liability | USD | 1200 |  | Rev Rec Entry |
| 1000 | SO100-1 | Revenue | USD |  | 1200 | Rev Rec Entry |
| 1000 | SO100-2 | Contract Liability | USD | 50 |  | Rev Rec Entry |
| 1000 | SO100-2 | Revenue | USD |  | 50 | Rev Rec Entry |
| 1000 | SO100-3 | Contract Liability | USD | 30 |  | Rev Rec Entry |
| 1000 | SO100-3 | Revenue | USD |  | 30 | Rev Rec Entry |

The accounting entries for the Feb-19 period are as follows. The same accounting entries will be created for the subsequent periods until Dec-19.

| RC ID | Line NO | Account Type | Currency | Debit | Credit | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | SO100-2 | Contract Liability | USD | 50 |  | Rev Rec Entry |
| 1000 | SO100-2 | Revenue | USD |  | 50 | Rev Rec Entry |
| 1000 | SO100-3 | Contract Liability | USD | 30 |  | Rev Rec Entry |
| 1000 | SO100-3 | Revenue | USD |  | 30 | Rev Rec Entry |

However, in November, the following RORD line is collected to reduce the maintenance line for two months.

| Line Type | SO NO | Line NO | Item | Ext. Sell Price | Qty | Curr | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RORD | SO101 | SO100-1 | Maintenance | -100 | 12 | USD | 01/11/2019 | 31/12/2019 |

If the CREATE\_RORD\_CONTRA\_ENTRY profile is set to No, it means Contra entry will not be created for the RORD line. The accounting entries for the SO100-2 line during the Nov-19 period are created as follows. The same accounting entries will also be created for the Dec-19 period.

| RC ID | Line NO | Account Type | Currency | Debit | Credit | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | SO100-2 | Contract Liability | USD | 50 |  | Rev Rec Entry |
| 1000 | SO100-2 | Revenue | USD |  | 50 | Rev Rec Entry |
| 1000* | SO100-2 | Contract Liability | USD |  | 50 | RORD Entry |
| 1000* | SO100-2 | Revenue | USD | 50 |  | RORD Entry |
| Entries marked with * are created when the RORD line is collected. |  |  |  |  |  |  |

The amortization value for the revenue contract is as follows:

| SO NO | Line NO | Item | Curr | Jan-19 | Feb-19 | Mar-19 | Apr-19 | ... | Oct-19 | Nov-19 | Dec-19 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO100 | SO100-1 | Hardware | USD | 1200 |  |  |  |  |  |  |  |
| SO100 | SO100-2 | Maintenance | USD | 50 | 50 | 50 | 50 |  | 50 | 50 | 50 |
| SO100* | SO100-2 | Maintenance | USD |  |  |  |  |  |  | (50) | (50) |
| SO100 | SO100-3 | Support | USD | 30 | 30 | 30 | 30 |  | 30 | 30 | 30 |
| Entries marked with * are created when the RORD line is collected. |  |  |  |  |  |  |  |  |  |  |  |

If the CREATE\_RORD\_CONTRA\_ENTRY profile is set to Yes, the Contra entry is created when the RORD line is collected. The contra amount for the period is calculated based on the RORD schedules and/or the invoice schedules.

-   If both the RORD schedules and invoice schedules are present for the period, the contra amount is calculated based on the minimum of the invoice schedules and the RORD schedules.

-   If either of the two is not present in the period, the contra amount is calculated based on the present schedules.


For the above example, the following accounting entries will be created for the SO100-2 line during the Nov-19 period.

| RC ID | Line NO | Account Type | Currency | Debit | Credit | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | SO100-2 | Contract Liability | USD | 50 |  | Rev Rec Entry |
| 1000 | SO100-2 | Revenue | USD |  | 50 | Rev Rec Entry |
| 1000 | SO100-2 | Contract Liability | USD |  | 50 | RORD Entry |
| 1000 | SO100-2 | Revenue | USD | 50 |  | RORD Entry |
| 1000* | SO100-2 | Contract Liability | USD | 100 |  | Contract Revenue Entry |
| 1000* | SO100-2 | Contra AR | USD |  | 100 | Contract Revenue Entry |
| Entries marked with * are created when the RORD line is collected. |  |  |  |  |  |  |

In the above example, after the RORD line is collected, the following CM-RO line is input to Zuora Revenue, which reverses the contra revenue that was created for the RORD line.

| Line Type | SO NO | SO Line NO | INV NO | INV Line NO | Item | Currency | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CM-RO | SO101 | SO100-1 | INV101 | INV1001-1 | Maintenance | USD | -100 |

In the scenario when the CREATE\_RORD\_CONTRA\_ENTRY profile is set to No, the accounting entries for the SO100-2 line will be created during the Nov-19 period as follows:

| RC ID | Line NO | Account Type | Currency | Debit | Credit | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | SO100-2 | Contract Liability | USD | 50 |  | Rev Rec Entry |
| 1000 | SO100-2 | Revenue | USD |  | 50 | Rev Rec Entry |
| 1000 | SO100-2 | Contract Liability | USD |  | 50 | RORD Entry |
| 1000 | SO100-2 | Revenue | USD | 50 |  | RORD Entry |
| 1000* | SO100-2 | Contract Liability | USD | 100 |  | CM-RO Entry |
| Entries marked with * are created when the CM-RO line is collected. |  |  |  |  |  |  |

In the scenario when the CREATE\_RORD\_CONTRA\_ENTRY profile is set to Yes, the accounting entries will be created as follows during the Nov-19 period:

| RC ID | Line NO | Account Type | Currency | Debit | Credit | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| 1000 | SO100-2 | Contract Liability | USD | 50 |  | Rev Rec Entry |
| 1000 | SO100-2 | Revenue | USD |  | 50 | Rev Rec Entry |
| 1000 | SO100-2 | Contract Liability | USD |  | 50 | RORD Entry |
| 1000 | SO100-2 | Revenue | USD | 50 |  | RORD Entry |
| 1000 | SO100-2 | Contract Liability | USD | 100 |  | RORD Entry |
| 1000 | SO100-2 | Contra AR | USD |  | 100 | RORD Entry |
| 1000* | SO100-2 | Contract Liability | USD | 100 |  | CM-RO Entry |
| 1000* | SO100-2 | Contract Liability | USD |  | 100 | CM-RO Entry |
| 1000* | SO100-2 | Contra AR | USD | 100 |  | CM-RO Entry |
| Entries marked with * are created when the CM-RO line is collected. |  |  |  |  |  |  |

The amortization of the revenue contract will not be impacted by the CM-RO line in both scenarios.

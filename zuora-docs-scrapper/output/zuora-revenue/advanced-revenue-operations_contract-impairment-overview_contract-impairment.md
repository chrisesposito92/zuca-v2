---
title: "Contract Impairment"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/contract-impairment"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:11.114Z"
---

# Contract Impairment

Information on the Contract Impairment type

When the Impairment Flag value is CONTRACT IMPAIRMENT , the impairment amount goes to the impairment account type.

In the following example, a revenue contract has three support lines and starts from January 1 to March 31, 2019. Each line lasts for a period of one month. These support lines are grouped into the same revenue contract based on the RC grouping template, which uses the sales order number as the grouping logic.

Table 1: Sales order lines collected into Zuora Revenue

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | SSP % | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | 101 | Support | 3600 | 1200 | 72 | 01-Jan-2019 | 31-Jan-2019 |
| 1001 | 102 | Support | 3600 | 2400 | 72 | 01-Feb-2019 | 28-Feb-2019 |
| 1001 | 103 | Support | 3600 | 3600 | 72 | 01-Mar-2019 | 31-Mar-2019 |

The initial entry for carves is created either at the time of schedule creation or at the time of billing when data is collected by Zuora Revenue. First, Ext. SSP Price for each line is calculated based on the following formula:

Ext. SSP Price = Ext. List Price \* SSP %

Table 2: Extended SSP price calculation

| SO NO. | SO Line NO. | Line Item | Ext. List Price(A) | SSP %(B) | Ext. SSP Price(A*B/100) |
| --- | --- | --- | --- | --- | --- |
| 1001 | 101 | Support | 3600 | 72 | 2592 |
| 1001 | 102 | Support | 3600 | 72 | 2592 |
| 1001 | 103 | Support | 3600 | 72 | 2592 |
| Total | 7776 |  |  |  |  |

Then, the RSP is calculated based on the following formula for each line:

RSP = Ext. SSP Price/Sum of Ext. SSP Price

The Allocated Price is calculated based on the following formula:

Allocated Price = Sum of Ext. Sell Price \* RSP

The carve-in amount for the first line and the carve-out amount for the third line are derived.

Table 3: Carves calculation

| SO NO. | SO Line ID | Line Item | Ext. Sell Price(A) | Ext. SSP Price | RSP | Allocated Price(B) | Carves(B-A) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | 101 | Support | 1200 | 2592 | 0.3333 | 2400 | 1200 |
| 1001 | 102 | Support | 2400 | 2592 | 0.3333 | 2400 | 0 |
| 1001 | 103 | Support | 3600 | 2592 | 0.3333 | 2400 | -1200 |
| Total | 7200 | 7776 |  |  |  |  |  |

The revenue is scheduled based on the UPON BOOKING release event. The accounting entries are shown as follows.

Table 4: Accounting entries

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 101 | Contract liability | USD | 1200 |  | Jan-19 |  |
| 2 | 1 | 101 | Revenue | USD |  | 1200 | Jan-19 |  |
| 3 | 1 | 102 | Contract liability | USD | 2400 |  | Feb-19 |  |
| 4 | 1 | 102 | Revenue | USD |  | 2400 | Feb-19 |  |
| 5 | 1 | 103 | Contract liability | USD | 3600 |  | Mar-19 |  |
| 6 | 1 | 103 | Revenue | USD |  | 3600 | Mar-19 |  |
| 7 | 1 | 101 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 8 | 1 | 103 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 9 | 1 | 101 | Adjustment Liability | USD | 1200 |  | Jan-19 |  |
| 10 | 1 | 101 | Adjustment Revenue | USD |  | 1200 | Jan-19 |  |
| 11 | 1 | 103 | Adjustment Liability | USD |  | 1200 | Mar-19 |  |
| 12 | 1 | 103 | Adjustment Revenue | USD | 1200 |  | Mar-19 |  |

The revenue recognized at the end of January is 2400 (1200 contractual revenue + 1200 carve-in revenue). The revenue recognized at the end of February is 4800 (1200 contractual revenue for the 1st period + 1200 carve-in revenue for the 1st period + 2400 contractual revenue for the 2nd period).

After the revenue has been recognized for two months, the RORD line is collected in the Mar-19 period with the impairment flag being CONTRACT IMPAIRMENT to cancel the third line of the contract. Based on the contract modification rule, it triggers prospective allocation for the revenue contract.

Table 5: Impact of line item after change

| SO NO. | SO Line ID | Line Item | Ext. List Price | Ext. Sell Price | Start Date | End Date | Ext SSP Price(A) | Carves(B) | Unscheduled Adjustment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | 101 | Support | 3600 | 1200 | 01-Jan-2019 | 31-Jan-2019 | 0 | 0 | 0 |
| 1001 | 102 | Support | 3600 | 2400 | 01-Feb-2019 | 28-Feb-2019 | 0 | 0 | 0 |
| 1001 | 103 | Support | 3600 | 3600 | 01-Mar-2019 | 31-Mar-2019 | 0 | 0 | -1200 |

The carve-out amount of the canceled line becomes the impairment amount. The accounting entries that are created when the third line is canceled with the CONTRACT IMPAIRMENT flag are shown as follows:

Table 6: Schedule after collection

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | 101 | Contract Liability | USD | 1200 |  | Jan-19 |
| 2 | 1 | 101 | Revenue | USD |  | 1200 | Jan-19 |
| 3 | 1 | 102 | Contract Liability | USD | 2400 |  | Feb-19 |
| 4 | 1 | 102 | Revenue | USD |  | 2400 | Feb-19 |
| 5 | 1 | 103 | Contract Liability | USD | 3600 |  | Mar-19 |
| 6 | 1 | 103 | Revenue | USD |  | 3600 | Mar-19 |
| 7 | 1 | 101 | Adjustment Liability | USD |  | 1200 | Jan-19 |
| 8 | 1 | 103 | Adjustment Liability | USD | 1200 |  | Jan-19 |
| 9 | 1 | 101 | Adjustment Liability | USD | 1200 |  | Jan-19 |
| 10 | 1 | 101 | Adjustment Revenue | USD |  | 1200 | Jan-19 |
| 13 | 1 | 103 | Contract Liability | USD |  | 3600 | Mar-19 |
| 14 | 1 | 103 | Revenue | USD | 3600 |  | Mar-19 |
| 15 | 1 | 103 | Adjustment Liability | USD |  | 1200 | Mar-19 |
| 16 | 1 | 103 | Contract Impairment | USD | 1200 |  | Mar-19 |

New entries are created when the cancellation of the third line is collected with the CONTRACT IMPAIRMENT flag. The unposted allocation recognition entries are deleted, which are line 11 and 12 in Table 4.

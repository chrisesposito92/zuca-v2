---
title: "Null"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/null"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:16.188Z"
---

# Null

Information on the Null type

When the impairment type flag is blank, the impairment amount is left out in the revenue contract. You can choose to customize the treatment for the impairment amount.

In the following example, the revenue contract has three support lines and starts from January 1 to March 31, 2019. Each line lasts for a month period. The lines are grouped into the same revenue contract based on the RC grouping template, which uses the SO number as the grouping logic.

Table 1: Lines collected to Zuora Revenue

| SO NO. | SO Line ID | Line Item | Ext. List Price | Ext. Sell Price | SSP % | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3001 | 301 | Support | 3600 | 1200 | 72 | 01-Jan-2019 | 31-Jan-2019 |
| 3001 | 302 | Support | 3600 | 2400 | 72 | 01-Feb-2019 | 28-Feb-2019 |
| 3001 | 303 | Support | 3600 | 3600 | 72 | 01-Mar-2019 | 31-Mar-2019 |

The initial entry for carves is created either at the time of schedule creation or at the time of billing when data is collected by Zuora Revenue. First, Ext. SSP Price for each line is calculated based on the following formula:

Ext. SSP Price = Ext. List Price \* SSP %

Table 2: Extended SSP price calculation

| SO NO. | SO Line ID | Line Item | Ext List Price(A) | SSP %(B) | Ext. SSP Price(A*B/100) |
| --- | --- | --- | --- | --- | --- |
| 3001 | 301 | Support | 3600 | 72 | 2592 |
| 3001 | 302 | Support | 3600 | 72 | 2592 |
| 3001 | 303 | Support | 3600 | 72 | 2592 |

Then, the RSP is calculated based on the following formula for each line:

RSP = Ext. SSP Price/Sum of Ext. SSP Price

The Allocated Price is calculated based on the following formula:

Allocated Price = Sum of Ext. Sell Price \* RSP

The carve-in amount for the first line and the carve-out amount for the third line are derived.

Table 3: Carves calculation

| SO NO. | SO Line ID | Line Item | Ext Sell Price(A) | Ext. SSP Price | RSP | Allocated Price(B) | Carves(B-A) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3001 | 301 | Support | 1200 | 2592 | 0.3333 | 2400 | 1200 |
| 3001 | 302 | Support | 2400 | 2592 | 0.3333 | 2400 | 0 |
| 3001 | 303 | Support | 3600 | 2592 | 0.3333 | 2400 | -1200 |
| Total | 7200 | 7776 |  |  |  |  |  |

The revenue is scheduled based on the UPON BOOKING release event. The accounting entries are as follows:

Table 4: Schedule

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 3 | 301 | Contract liability | USD | 1200 |  | Jan-19 |  |
| 2 | 3 | 301 | Revenue | USD |  | 1200 | Jan-19 |  |
| 3 | 3 | 302 | Contract Liability | USD | 2400 |  | Feb-19 |  |
| 4 | 3 | 302 | Revenue | USD |  | 2400 | Feb-19 |  |
| 5 | 3 | 303 | Contract Liability | USD | 3600 |  | Mar-19 |  |
| 6 | 3 | 303 | Revenue | USD |  | 3600 | Mar-19 |  |
| 7 | 3 | 301 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 8 | 3 | 303 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 9 | 3 | 301 | Adjustment Liability | USD | 1200 |  | Jan-19 |  |
| 10 | 3 | 301 | Adjustment Revenue | USD |  | 1200 | Jan-19 |  |
| 11 | 3 | 303 | Adjustment Liability | USD |  | 1200 | Mar-19 |  |
| 12 | 3 | 303 | Adjustment Revenue | USD | 1200 |  | Mar-19 |  |

The revenue recognized at the end of January is 2400 (1200 contractual revenue + 1200 carve in revenue). The revenue recognized at the end of February is 4800 (1200 contractual revenue for the first period + 1200 carve-in revenue for the first Period + 2400 contractual revenue for the second period).

After the revenue has been recognized for two months, the RORD line is collected in the Mar-19 period with a blank impairment flag to cancel the third line of the contract. Based on the contract modification rule, it triggers prospective allocation for the revenue contract.

Table 5: Impact of line item after change

| SO NO. | SO Line ID | Line Item | Ext. List Price | Ext. Sell Price | Start Date/th> | End Date | Ext. SSP Price(A) | Carves(B) | Unscheduled Adjustment |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3001 | 301 | Support | 3600 | 1200 | 01-Jan-2019 | 31-Jan-2019 | 0 | 0 | 0 |
| 3001 | 302 | Support | 3600 | 2400 | 01-Feb-2019 | 28-Feb-2019 | 0 | 0 | 0 |
| 3001 | 303 | Support | 3600 | 3600 | 01-Mar-2019 | 31-Mar-2019 | 0 | 0 | -1200 |

The carve-out amount of the canceled line becomes the impairment amount, which is left out in the revenue contract. It gives provision for you to do customization. The accounting entries that are created when the third line is canceled with the impairment flag being null are listed below:

Table 6: Schedule after collection

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 3 | 301 | Contract Liability | USD | 1200 |  | Jan-19 |
| 2 | 3 | 301 | Revenue | USD |  | 1200 | Jan-19 |
| 3 | 3 | 302 | Contract Liability | USD | 2400 |  | Feb-19 |
| 4 | 3 | 302 | Revenue | USD |  | 2400 | Feb-19 |
| 5 | 3 | 303 | Contract Liability | USD | 3600 |  | Mar-19 |
| 6 | 3 | 303 | Revenue | USD |  | 3600 | Mar-19 |
| 7 | 3 | 301 | Adjustment Liability | USD |  | 1200 | Jan-19 |
| 8 | 3 | 303 | Adjustment Liability | USD | 1200 |  | Jan-19 |
| 9 | 3 | 301 | Adjustment Liability | USD | 1200 |  | Jan-19 |
| 10 | 3 | 301 | Adjustment Revenue | USD |  | 1200 | Jan-19 |
| 13 | 3 | 303 | Contract Liability | USD |  | 1200 | Mar-19 |
| 14 | 3 | 303 | Revenue | USD | 1200 |  | Mar-19 |

The bottom two entries are created when the cancelation of the third line is collected with the blank impairment flag. The unposted allocation recognition entries are deleted, which are line 11 and 12 in Table 4.

---
title: "R and R within SSP - Full Impairment"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/r-and-r-within-ssp---full-impairment"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:18.928Z"
---

# R and R within SSP - Full Impairment

Information on the R and R within SSP type

When the Impairment Type flag is R AND R WITHIN SSP, the impairment amount is kept as is and amortized over the term of the ripped contract. The ripped contract is closed for further linking. New POB cannot be collected for the ripped contract. Instead, the new POB will go to a new revenue contract.

## Example 1 - Full impairment

In the following example, a revenue contract has three support lines and starts from January 1 to March 31, 2019. Each line lasts for a period of one month. These support lines are grouped into the same revenue contract based on the RC grouping template, which uses the sales order number as the grouping logic.

Table 1: Sales order lines collected into Zuora Revenue

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | SSP % | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4001 | 401 | Support | 3600 | 1200 | 72 | 01-Jan-2019 | 31-Jan-2019 |
| 4001 | 402 | Support | 3600 | 2400 | 72 | 01-Feb-2019 | 28-Feb-2019 |
| 4001 | 403 | Support | 3600 | 3600 | 72 | 01-Mar-2019 | 31-Mar-2019 |

The initial entry for carves is created either at the time of schedule creation or at the time of billing when data is collected by Zuora Revenue. First, Ext. SSP Price for each line is calculated based on the following formula:

Ext. SSP Price = Ext. List Price \* SSP %

Table 2: Extended SSP price calculation

| SO NO. | SO Line ID | Line Item | Ext. List Price(A) | SSP %(B) | Ext. SSP Price(A*B/100) |
| --- | --- | --- | --- | --- | --- |
| 4001 | 401 | Support | 3600 | 72 | 2592 |
| 4001 | 402 | Support | 3600 | 72 | 2592 |
| 4001 | 403 | Support | 3600 | 72 | 2592 |
| Total | 7776 |  |  |  |  |

Then, the RSP is calculated based on the following formula for each line:

RSP = Ext. SSP Price/Sum of Ext. SSP Price

The Allocated Price is calculated based on the following formula:

Allocated Price = Sum of Ext. Sell Price \* RSP

The carve-in amount for the first line and the carve-out amount for the third line is derived.

Table 3: Carves calculation

| SO NO. | SO Line ID | Line item | Ext. Sell Price(A) | Ext. SSP Price | RSP | Allocated Price(B) | Carves(B-A) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4001 | 401 | Support | 1200 | 2592 | 0.3333 | 2400 | 1200 |
| 4001 | 402 | Support | 2400 | 2592 | 0.3333 | 2400 | 0 |
| 4001 | 403 | Support | 3600 | 2592 | 0.3333 | 2400 | -1200 |
| Total | 7200 | 7776 |  |  |  |  |  |

The revenue is scheduled based on the UPON BOOKING release event. The accounting entries are shown as follows.

Table 4: Accounting entries

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 4 | 401 | Contract liability | USD | 1200 |  | Jan-19 |  |
| 2 | 4 | 401 | Revenue | USD |  | 1200 | Jan-19 |  |
| 3 | 4 | 402 | Contract liability | USD | 2400 |  | Feb-19 |  |
| 4 | 4 | 402 | Revenue | USD |  | 2400 | Feb-19 |  |
| 5 | 4 | 403 | Contract liability | USD | 3600 |  | Mar-19 |  |
| 6 | 4 | 403 | Revenue | USD |  | 3600 | Mar-19 |  |
| 7 | 4 | 401 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 8 | 4 | 403 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 9 | 4 | 401 | Adjustment Liability | USD | 1200 |  | Jan-19 |  |
| 10 | 4 | 401 | Adjustment Revenue | USD |  | 1200 | Jan-19 |  |
| 11 | 4 | 403 | Adjustment Liability | USD |  | 1200 | Mar-19 |  |
| 12 | 4 | 403 | Adjustment Revenue | USD | 1200 |  | Mar-19 |  |

The revenue recognized at the end of January is 2400 (1200 contractual revenue + 1200 carve-in revenue). The revenue recognized at the end of February is 4800 (1200 contractual revenue for the 1st period + 1200 carve-in revenue for the 1st period + 2400 contractual revenue for the 2nd period).

After the revenue has been recognized for two months, the RORD line is collected in the Mar-19 period with the impairment flag being R AND R WITHIN SSP to cancel the third line of the contract. Based on the contract modification rule, it triggers prospective allocation for the revenue contract.

Table 5: Impact of line item after change

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | Start Date | End Date | Ext. SSP Price(A) | Carves(B) | Unscheduled Adjustment | Impairment Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4001 | 401 | Support | 3600 | 1200 | 01-Jan-2019 | 31-Jan-2019 | 0 | 0 | 0 | 0 |
| 4001 | 402 | Support | 3600 | 2400 | 01-Feb-2019 | 28-Feb-2019 | 0 | 0 | 0 | 0 |
| 4001 | 403 | Support | 3600 | 3600 | 01-Mar-2019 | 31-Mar-2019 | 0 | 0 | -1200 | 0 |

The adjustment amount remains the same. The carve-out amount of the canceled line becomes the impairment amount. The accounting entries that are created when the third line is canceled with the R AND R WITHIN SSP flag are shown as follows:

Table 6: Schedule after collection

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 4 | 401 | Contract liability | USD | 1200 |  | Jan-19 |  |
| 2 | 4 | 401 | Revenue | USD |  | 1200 | Jan-19 |  |
| 3 | 4 | 402 | Contract liability | USD | 2400 |  | Feb-19 |  |
| 4 | 4 | 402 | Revenue | USD |  | 2400 | Feb-19 |  |
| 5 | 4 | 403 | Contract liability | USD | 3600 |  | Mar-19 |  |
| 6 | 4 | 403 | Revenue | USD |  | 3600 | Mar-19 |  |
| 7 | 4 | 401 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 8 | 4 | 403 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 9 | 4 | 401 | Adjustment Liability | USD | 1200 |  | Jan-19 |  |
| 10 | 4 | 401 | Adjustment Revenue | USD |  | 1200 | Jan-19 |  |
| 11 | 4 | 403 | Adjustment Liability | USD |  | 1200 | Mar-19 |  |
| 12 | 4 | 403 | Adjustment Revenue | USD | 1200 |  | Mar-19 |  |
| 13 | 4 | 403 | Contract Liability | USD |  | 3600 | Mar-19 |  |
| 14 | 4 | 403 | Revenue | USD | 3600 |  | Mar-19 |  |

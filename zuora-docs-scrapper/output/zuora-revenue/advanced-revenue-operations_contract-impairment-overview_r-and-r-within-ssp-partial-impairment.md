---
title: "R and R within SSP - Partial impairment"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/r-and-r-within-ssp---partial-impairment"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:21.699Z"
---

# R and R within SSP - Partial impairment

Information on the R and R within SSP type

## Example 2 - Partial impairment

In the following example, a revenue contract has three support lines and starts from January 1 to March 31, 2019. Each line lasts for a period of one month. These support lines are grouped into the same revenue contract based on the RC grouping template, which uses the sales order number as the grouping logic.

Table 1: Sales order lines collected into Zuora Revenue

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | SSP % | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5001 | 501 | Support | 3600 | 1200 | 72 | 01-Jan-2019 | 31-Jan-2019 |
| 5001 | 502 | Support | 3600 | 2400 | 72 | 01-Feb-2019 | 28-Feb-2019 |
| 5001 | 503 | Support | 3600 | 3600 | 72 | 01-Mar-2019 | 31-Mar-2019 |

The initial entry for carves is created either at the time of schedule creation or at the time of billing when data is collected by Zuora Revenue. First, Ext. SSP Price for each line is calculated based on the following formula:

Ext. SSP Price = Ext. List Price \* SSP %

Table 2: Extended SSP price calculation

| SO NO. | SO Line ID | Line Item | Ext. List Price(A) | SSP %(B) | Ext. SSP Price(A*B/100) |
| --- | --- | --- | --- | --- | --- |
| 5001 | 501 | Support | 3600 | 72 | 2592 |
| 5001 | 502 | Support | 3600 | 72 | 2592 |
| 5001 | 503 | Support | 3600 | 72 | 2592 |
| Total | 7776 |  |  |  |  |

Then, the RSP is calculated based on the following formula for each line:

RSP = Ext. SSP Price/Sum of Ext. SSP Price

The Allocated Price is calculated based on the following formula:

Allocated Price = Sum of Ext. Sell Price \* RSP

The carve-in amount for the first line and the carve-out amount for the third line is derived.

Table 3: Carves calculation

| SO NO. | SO Line ID | Line item | Ext. Sell Price(A) | Ext. SSP Price | RSP | Allocated Price(B) | Carves(B-A) | Released Revenue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5001 | 501 | Support | 1200 | 2592 | 0.3333 | 2400 | 1200 | 1000 |
| 5001 | 502 | Support | 2400 | 2592 | 0.3333 | 2400 | 0 | 2400 |
| 5001 | 503 | Support | 3600 | 2592 | 0.3333 | 2400 | -1200 | 3600 |
| Total | 7200 | 7776 |  |  |  |  |  |  |

The revenue is scheduled based on the UPON BOOKING release event. The accounting entries are shown as follows.

Table 4: Accounting entries

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 5 | 501 | Contract liability | USD | 1200 |  | Jan-19 |  |
| 2 | 5 | 501 | Revenue | USD |  | 1200 | Jan-19 |  |
| 3 | 5 | 502 | Contract liability | USD | 2400 |  | Feb-19 |  |
| 4 | 5 | 502 | Revenue | USD |  | 2400 | Feb-19 |  |
| 5 | 5 | 503 | Contract liability | USD | 3600 |  | Mar-19 |  |
| 6 | 5 | 503 | Revenue | USD |  | 3600 | Mar-19 |  |
| 7 | 5 | 501 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 8 | 5 | 503 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 9 | 5 | 501 | Adjustment Liability | USD | 1200 |  | Jan-19 |  |
| 10 | 5 | 501 | Adjustment Revenue | USD |  | 1200 | Jan-19 |  |
| 11 | 5 | 503 | Adjustment Liability | USD |  | 1200 | Mar-19 |  |
| 12 | 5 | 503 | Adjustment Revenue | USD | 1200 |  | Mar-19 |  |

The revenue recognized at the end of January is 2400 (1200 contractual revenue + 1200 carve-in revenue). The revenue recognized at the end of February is 4800 (1200 contractual revenue for the 1st period + 1200 carve-in revenue for the 1st period + 2400 contractual revenue for the 2nd period).

After the revenue has been recognized for two months, the RORD line is collected for (-$200) in the Mar-19 period with the impairment flag being R AND R WITHIN SSP to partially cancel the first line of the contract. Based on the contract modification rule, it triggers prospective allocation for the revenue contract.

Table 5: Impact of line item after change

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | Start Date | End Date | Ext. SSP Price(A) | Carves(B) | Unscheduled Adjustment | Impairment Amount | Allocatable Ext. Price | Return Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5001 | 501 | Support | 3600 | 1000 | 01-Jan-2019 | 31-Jan-2019 | 0 | -200 | 200 | 0 | 1000 | N |
| 5001 | 502 | Support | 3600 | 2400 | 01-Feb-2019 | 28-Feb-2019 | 0 | 0 | 0 | 0 | 2400 | N |
| 5001 | 503 | Support | 3600 | 3600 | 01-Mar-2019 | 31-Mar-2019 | 0 | 200 | -1200 | -1000 | 0 | Y |

The adjustment amount remains the same. The accounting entries that are created when the third line is canceled with the R AND R WITHIN SSP flag are shown as follows:

Table 6: Schedule after collection

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Schedule Type |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 5 | 501 | Contract Liability | USD | 1000 |  | Jan-19 | Revenue |
| 2 | 5 | 501 | Revenue | USD |  | 1000 | Jan-19 | Revenue |
| 3 | 5 | 502 | Contract Liability | USD | 2400 |  | Feb-19 | Revenue |
| 4 | 5 | 502 | Revenue | USD |  | 2400 | Feb-19 | Revenue |
| 5 | 5 | 503 | Contract Liability | USD | 3600 |  | Mar-19 | Revenue |
| 6 | 5 | 503 | Revenue | USD |  | 3600 | Mar-19 | Revenue |
| 7 | 5 | 501 | Adjustment Liability | USD |  | 1200 | Jan-19 | Adjustment |
| 8 | 5 | 503 | Adjustment Liability | USD | 1200 |  | Jan-19 | Adjustment |
| 9 | 5 | 501 | Adjustment Liability | USD | 1000 |  | Jan-19 | Adjustment |
| 10 | 5 | 501 | Adjustment Revenue | USD |  | 1000 | Jan-19 | Adjustment |
| 13 | 5 | 503 | Contract Liability | USD |  | 3600 | Mar-19 | Revenue |
| 14 | 5 | 503 | Revenue | USD | 3600 |  | Mar-19 | Revenue |
| 15 | 5 | 503 | Adjustment Liability | USD |  | 1000 | Mar-19 | Impairment |
| 16 | 5 | 503 | Contract Impairment | USD | 1000 |  | Mar-19 | Impairment |
| 17 | 5 | 503 | Adjustment Liability | USD |  | 200 | Mar-19 | Adjustment |
| 18 | 5 | 501 | Adjustment Liability | USD | 200 |  | Mar-19 | Adjustment |

---
title: "New POB Ratable"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/new-pob-ratable"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:13.838Z"
---

# New POB Ratable

Information on the new POB Ratable type

When the Impairment Flag value is NEW POB RATABLE, a new line is created with a POB as impairment for the impairment amount. The new line captures all the characteristics of the canceled line. Revenue of the impairment amount is recognized based on the start date and end date of the canceled line and the trigger for revenue release is Upon Booking.

In the following example, the revenue contract has three support lines and starts from January 1 to March 31, 2019. Each line lasts for a month period. The three lines are grouped into the same revenue contract based on the RC grouping template, which uses the sales order number as the grouping logic.

Table 1: Lines collected into Zuora Revenue

| SO NO. | SO Line ID | Line Item | Ext. List Price | Ext. Sell Price | SSP % | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2001 | 201 | Support | 3600 | 1200 | 72 | 01-Jan-2019 | 31-Jan-2019 |
| 2001 | 202 | Support | 3600 | 2400 | 72 | 01-Feb-2019 | 28-Feb-2019 |
| 2001 | 203 | Support | 3600 | 3600 | 72 | 01-Mar-2019 | 31-Mar-2019 |

The initial entry for carves is created either at the time of schedule creation or at the time of billing when data is collected by Zuora Revenue. First, Ext. SSP Price for each line is calculated based on the following formula:

Ext. SSP Price = Ext. List Price \* SSP %

Table 2: Extended SSP price calculation

| SO NO. | SO Line ID | Line Item | Ext. List Price(A) | SSP %(B) | Ext. SSP Price(A*B/100) |
| --- | --- | --- | --- | --- | --- |
| 2001 | 201 | Support | 3600 | 72 | 2592 |
| 2001 | 202 | Support | 3600 | 72 | 2592 |
| 2001 | 203 | Support | 3600 | 72 | 2592 |

Then, the RSP is calculated based on the following formula for each line:

RSP = Ext. SSP Price/Sum of Ext. SSP Price

The Allocated Price is calculated based on the following formula:

Allocated Price = Sum of Ext. Sell Price \* RSP

The carve-in amount for the first line and the carve-out amount for the third line are derived.

Table 3: Carves calculation

| SO NO. | SO Line NO. | Line Item | Ext. Sell Price(A) | Ext. SSP Price | RSP | Allocated Price(B) | Carves(B-A) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2001 | 201 | Support | 1200 | 2592 | 0.3333 | 2400 | 1200 |
| 2001 | 202 | Support | 2400 | 2592 | 0.3333 | 2400 | 0 |
| 2001 | 203 | Support | 3600 | 2592 | 0.3333 | 2400 | -1200 |
| Total | 7200 | 7776 |  |  |  |  |  |

The revenue is scheduled based on the UPON BOOKING release event. The accounting entries are listed as follows:

Table 4: Schedule

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 201 | Contract liability | USD | 1200 |  | Jan-19 |  |
| 2 | 2 | 201 | Revenue | USD |  | 1200 | Jan-19 |  |
| 3 | 2 | 202 | Contract liability | USD | 2400 |  | Feb-19 |  |
| 4 | 2 | 202 | Revenue | USD |  | 2400 | Feb-19 |  |
| 5 | 2 | 203 | Contract liability | USD | 3600 |  | Mar-19 |  |
| 6 | 2 | 203 | Revenue | USD |  | 3600 | Mar-19 |  |
| 7 | 2 | 201 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 8 | 2 | 203 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 9 | 2 | 201 | Adjustment Liability | USD | 1200 |  | Jan-19 |  |
| 10 | 2 | 201 | Adjustment Revenue | USD |  | 1200 | Jan-19 |  |
| 11 | 2 | 203 | Adjustment Liability | USD |  | 1200 | Mar-19 |  |
| 12 | 2 | 203 | Adjustment Revenue | USD | 1200 |  | Mar-19 |  |

The revenue recognized at the end of January is 2400 (1200 contractual revenue + 1200 carve in revenue). The revenue recognized at the end of February is 4800 (1200 contractual revenue for the first period + 1200 carve-in revenue for the first period + 2400 contractual revenue for the second period).

After the revenue has been recognized for two months, the RORD line is collected in the Mar-19 period with the impairment flag being NEW POB RATABLE to cancel the third line of the contract. Based on the contract modification rule, it triggers prospective allocation for the revenue contract.

Table 5: Impact of line item after change

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | Start Date | End Date | Ext. SSP Price(A) | Carves(B) | Unscheduled Adjustment | Impairment Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2001 | 201 | Support | 3600 | 1200 | 01-Jan-2019 | 31-Jan-2019 | 0 | 0 | 0 | 0 |
| 2001 | 202 | Support | 3600 | 2400 | 01-Feb-2019 | 28-Feb-2019 | 0 | 0 | 0 | 0 |
| 2001 | 203 | Support | 3600 | 3600 | 01-Mar-2019 | 31-Mar-2019 | 0 | 0 | -1200 | 0 |
| 2001 | 204 |  | 0 | 0 | 01-Mar-2019 | 31-Mar-2019 | 0 | 0 | 0 | -1200 |

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 201 | Contract Liability | USD | 1200 |  | Jan-19 |
| 2 | 2 | 201 | Revenue | USD |  | 1200 | Jan-19 |
| 3 | 2 | 202 | Contract Liability | USD | 2400 |  | Feb-19 |
| 4 | 2 | 202 | Revenue | USD |  | 2400 | Feb-19 |
| 5 | 2 | 203 | Contract Liability | USD | 3600 |  | Mar-19 |
| 6 | 2 | 203 | Revenue | USD |  | 3600 | Mar-19 |
| 7 | 2 | 201 | Adjustment Liability | USD |  | 1200 | Jan-19 |
| 8 | 2 | 203 | Adjustment Liability | USD | 1200 |  | Jan-19 |
| 9 | 2 | 201 | Adjustment Liability | USD | 1200 |  | Jan-19 |
| 10 | 2 | 201 | Adjustment Revenue | USD |  | 1200 | Jan-19 |
| 13 | 2 | 203 | Contract Liability | USD |  | 3600 | Mar-19 |
| 14 | 2 | 203 | Revenue | USD | 3600 |  | Mar-19 |
| 15 | 2 | 203 | Adjustment Liability | USD |  | 1200 | Mar-19 |
| 16 | 2 | 203 | Contract Impairment | USD | 1200 |  | Mar-19 |
| 17 | 2 | 204 | Contract Impairment | USD |  | 1200 | Mar-19 |
| 18 | 2 | 204 | Adjustment Liability | USD | 1200 |  | Mar-19 |
| 19 | 2 | 204 | Adjustment Liability | USD |  | 1200 | Mar-19 |
| 20 | 2 | 204 | Adjustment Revenue | USD | 1200 |  | Mar-19 |

New entries are created when the cancelation of the third line is collected with the NEW POB RATABLE impairment type flag. The unposted allocation recognition entries are deleted, which are line 11 and 12 in Table 10.

The impairment amount that gets debited in the canceled line and subsequently credited to the new line is moved to the adjustment liability account and then to the adjustment revenue account. The new POB created with the new line has the name of IMPAIRMENT, which is a seeded POB. The revenue for the impairment POB is recognized based on the start date and end date of the canceled line.

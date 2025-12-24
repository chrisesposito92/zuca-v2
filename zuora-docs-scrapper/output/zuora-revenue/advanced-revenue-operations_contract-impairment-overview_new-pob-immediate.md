---
title: "New POB Immediate"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/new-pob-immediate"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:24.948Z"
---

# New POB Immediate

Information on the new POB Immediate type

When the Impairment Flag value is NEW POB IMMEDIATE, a new line is created with a POB as impairment for the impairment amount. The new line captures all the characteristics of the canceled line. Revenue of the impairment amount is recognized based on the start date and end date of the canceled line and the trigger for revenue release is Upon Booking.

In the following example, the three support lines are grouped into the same revenue contract based on the RC grouping template, which uses the sales order number as the grouping logic.

Table 1: Lines collected into Zuora Revenue

| SO NO. | SO Line ID | Line Item | Ext. List Price | Ext. Sell Price | SSP % | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6001 | 601 | Support | 3600 | 1200 | 72 | 01-Jan-2019 | 30-Jun-2019 |
| 6001 | 602 | Support | 3600 | 2400 | 72 | 01-Jul-2019 | 31-Dec-2019 |
| 6001 | 603 | Support | 3600 | 3600 | 72 | 01-Jan-2020 | 30-Jun-2020 |

The initial entry for carves is created either at the time of schedule creation or at the time of billing when data is collected by Zuora Revenue. First, Ext. SSP Price for each line is calculated based on the following formula:

Ext. SSP Price = Ext. List Price \* SSP %

Table 2: Extended SSP price calculation

| SO NO. | SO Line ID | Line Item | Ext. List Price(A) | SSP %(B) | Ext. SSP Price(A*B/100) |
| --- | --- | --- | --- | --- | --- |
| 6001 | 601 | Support | 3600 | 72 | 2592 |
| 6001 | 602 | Support | 3600 | 72 | 2592 |
| 6001 | 603 | Support | 3600 | 72 | 2592 |

Then, the RSP is calculated based on the following formula for each line:

RSP = Ext. SSP Price/Sum of Ext. SSP Price

The Allocated Price is calculated based on the following formula:

Allocated Price = Sum of Ext. Sell Price \* RSP

The carve-in amount for the first line and the carve-out amount for the third line are derived.

Table 3: Carves calculation

| SO NO. | SO Line NO. | Line Item | Ext. Sell Price(A) | Ext. SSP Price | RSP | Allocated Price(B) | Carves(B-A) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6001 | 601 | Support | 1200 | 2592 | 0.3333 | 2400 | 1200 |
| 6001 | 602 | Support | 2400 | 2592 | 0.3333 | 2400 | 0 |
| 6001 | 603 | Support | 3600 | 2592 | 0.3333 | 2400 | -1200 |
| Total | 7200 | 7776 |  |  |  |  |  |

The revenue is scheduled based on the UPON BOOKING release event. The accounting entries are listed as follows:

Table 4: Schedule

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 6 | 601 | Contract liability | USD | 200 |  | Jan-19 |  |
| 2 | 6 | 601 | Revenue | USD |  | 200 | Jan-19 |  |
| 3 | 6 | 601 | Contract liability | USD | 200 |  | Feb-19 |  |
| 4 | 6 | 601 | Revenue | USD |  | 200 | Feb-19 |  |
| 5 | 6 | 601 | Contract liability | USD | 200 |  | Mar-19 |  |
| 6 | 6 | 601 | Revenue | USD |  | 200 | Mar-19 |  |
| 7 | 6 | 601 | Contract liability | USD | 200 |  | Apr-19 |  |
| 8 | 6 | 601 | Revenue | USD |  | 200 | Apr-19 |  |
| 9 | 6 | 601 | Contract liability | USD | 200 |  | May-19 |  |
| 10 | 6 | 601 | Revenue | USD |  | 200 | May-19 |  |
| 11 | 6 | 601 | Contract liability | USD | 200 |  | Jun-19 |  |
| 12 | 6 | 601 | Revenue | USD |  | 200 | Jun-19 |  |
| 13 | 6 | 602 | Contract liability | USD | 400 |  | Jul-19 |  |
| 14 | 6 | 602 | Revenue | USD |  | 400 | Jul-19 |  |
| 15 | 6 | 602 | Contract liability | USD | 400 |  | Aug-19 |  |
| 16 | 6 | 602 | Revenue | USD |  | 400 | Aug-19 |  |
| 17 | 6 | 602 | Contract liability | USD | 400 |  | Sep-19 |  |
| 18 | 6 | 602 | Revenue | USD |  | 400 | Sep-19 |  |
| 19 | 6 | 602 | Contract liability | USD | 400 |  | Oct-19 |  |
| 20 | 6 | 602 | Revenue | USD |  | 400 | Oct-19 |  |
| 21 | 6 | 602 | Contract liability | USD | 400 |  | Nov-19 |  |
| 22 | 6 | 602 | Revenue | USD |  | 400 | Nov-19 |  |
| 23 | 6 | 602 | Contract liability | USD | 400 |  | Dec-19 |  |
| 24 | 6 | 602 | Revenue | USD |  | 400 | Dec-19 |  |
| 25 | 6 | 603 | Contract liability | USD | 600 |  | Jan-20 |  |
| 26 | 6 | 603 | Revenue | USD |  | 600 | Jan-20 |  |
| 27 | 6 | 603 | Contract liability | USD | 600 |  | Feb-20 |  |
| 28 | 6 | 603 | Revenue | USD |  | 600 | Feb-20 |  |
| 29 | 6 | 603 | Contract liability | USD | 600 |  | Mar-20 |  |
| 30 | 6 | 603 | Revenue | USD |  | 600 | Mar-20 |  |
| 31 | 6 | 603 | Contract liability | USD | 600 |  | Apr-20 |  |
| 32 | 6 | 603 | Revenue | USD |  | 600 | Apr-20 |  |
| 33 | 6 | 603 | Contract liability | USD | 600 |  | May-20 |  |
| 34 | 6 | 603 | Revenue | USD |  | 600 | May-20 |  |
| 35 | 6 | 603 | Contract liability | USD | 600 |  | Jun-20 |  |
| 36 | 6 | 603 | Revenue | USD |  | 600 | Jun-20 |  |
| 37 | 6 | 601 | Adjustment Liability | USD |  | 1200 | Jan-19 | Y |
| 38 | 6 | 603 | Adjustment Liability | USD | 1200 |  | Jan-19 | Y |
| 39 | 6 | 601 | Adjustment Liability | USD | 200 |  | Jan-19 |  |
| 40 | 6 | 601 | Adjustment Revenue | USD |  | 200 | Jan-19 |  |
| 41 | 6 | 601 | Adjustment Liability | USD | 200 |  | Feb-19 |  |
| 42 | 6 | 601 | Adjustment Revenue | USD |  | 200 | Feb-19 |  |
| 43 | 6 | 601 | Adjustment Liability | USD | 200 |  | Mar-19 |  |
| 44 | 6 | 601 | Adjustment Revenue | USD |  | 200 | Mar-19 |  |
| 45 | 6 | 601 | Adjustment Liability | USD | 200 |  | Apr-19 |  |
| 46 | 6 | 601 | Adjustment Revenue | USD |  | 200 | Apr-19 |  |
| 47 | 6 | 601 | Adjustment Liability | USD | 200 |  | May-19 |  |
| 48 | 6 | 601 | Adjustment Revenue | USD |  | 200 | May-19 |  |
| 49 | 6 | 601 | Adjustment Liability | USD | 200 |  | Jun-19 |  |
| 50 | 6 | 601 | Adjustment Revenue | USD |  | 200 | Jun-19 |  |
| 52 | 6 | 603 | Adjustment Liability | USD |  | 200 | Feb-20 |  |
| 53 | 6 | 603 | Adjustment Revenue | USD | 200 |  | Feb-20 |  |
| 54 | 6 | 603 | Adjustment Liability | USD |  | 200 | Mar-20 |  |
| 55 | 6 | 603 | Adjustment Revenue | USD | 200 |  | Mar-20 |  |
| 56 | 6 | 603 | Adjustment Liability | USD |  | 200 | Apr-20 |  |
| 57 | 6 | 603 | Adjustment Revenue | USD | 200 |  | Apr-20 |  |
| 58 | 6 | 603 | Adjustment Liability | USD |  | 200 | May-20 |  |
| 59 | 6 | 603 | Adjustment Revenue | USD | 200 |  | May-20 |  |
| 60 | 6 | 603 | Adjustment Liability | USD |  | 200 | Jun-20 |  |
| 61 | 6 | 603 | Adjustment Revenue | USD | 200 |  | Jun-20 |  |

The revenue recognized for the first line is 2400 (1200 contractual revenue + 1200 carve in revenue) from January to June 2019. The revenue recognized for the second line is 2400 ( 2400 contractual revenue of the second line) from July to December 2019.

After the revenue has been recognized for 2019, the RORD line is collected in the Jan-20 period with the impairment flag being NEW POB IMMEDIATE to cancel the third line of the contract. Based on the contract modification rule, it triggers prospective allocation for the revenue contract.

Table 5: Impact of line item after change

| SO NO. | SO Line ID | Line item | Ext. List Price | Ext. Sell Price | Start Date | End Date | Ext. SSP Price(A) | Carves(B) | Unscheduled Adjustment | Impairment Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6001 | 601 | Support | 3600 | 1200 | 01-Jan-2019 | 30-Jun-2019 | 0 | 0 | 0 | 0 |
| 6001 | 602 | Support | 3600 | 2400 | 01-Jul-2019 | 31-Dec-2019 | 0 | 0 | 0 | 0 |
| 6001 | 603 | Support | 3600 | 3600 | 01-Jan-2020 | 30-Jun-2020 | 0 | 0 | -1200 | 0 |
| 6001 | 604 |  | 0 | 0 | 01-Jan-2020 | 30-Jun-2020 | 0 | 0 | 0 | -1200 |

The carve-out amount of the canceled line becomes the impairment amount. A new line is created for that amount with impairment as its POB. The impairment amount is recognized immediately. See the table below for the accounting entries created when the third line is canceled with the impairment flag being NEW POB IMMEDIATE.

Table 6: Schedule after collection

| NO. | RC ID | Line ID | Account Type | Currency | Dr | Cr | Period | Initial Reporting Entry Flag |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 6 | 603 | Contract Liability | USD |  | 200 | Jan-20 |  |
| 2 | 6 | 603 | Revenue | USD | 200 |  | Jan-20 |  |
| 3 | 6 | 603 | Contract Liability | USD |  | 200 | Feb-20 |  |
| 4 | 6 | 603 | Revenue | USD | 200 |  | Feb-20 |  |
| 5 | 6 | 603 | Contract Liability | USD |  | 200 | Mar-20 |  |
| 6 | 6 | 603 | Revenue | USD | 200 |  | Mar-20 |  |
| 7 | 6 | 603 | Contract Liability | USD |  | 200 | Apr-20 |  |
| 8 | 6 | 603 | Revenue | USD | 200 |  | Apr-20 |  |
| 9 | 6 | 603 | Contract Liability | USD |  | 200 | May-20 |  |
| 10 | 6 | 603 | Revenue | USD | 200 |  | May-20 |  |
| 11 | 6 | 603 | Contract Liability | USD |  | 200 | Jun-20 |  |
| 12 | 6 | 603 | Revenue | USD | 200 |  | Jun-20 |  |
| 13 | 6 | 603 | Adjustment Liability | USD |  | 1200 | Jan-20 |  |
| 14 | 6 | 603 | Contract Impairment | USD | 1200 |  | Jan-20 |  |
| 15 | 6 | 604 | Contract Impairment | USD |  | 1200 | Jan-20 |  |
| 16 | 6 | 604 | Adjustment Liability | USD | 1200 |  | Jan-20 |  |
| 17 | 6 | 604 | Adjustment Liability | USD |  | 1200 | Jan-20 |  |
| 18 | 6 | 604 | Adjustment Revenue | USD | 1200 |  | Jan-20 |  |

New entries are created when the cancelation of the third line is collected with the NEW POB IMMEDIATE impairment type flag. The unposted allocation recognition entries are deleted.

The impairment amount that gets debited in the canceled line and subsequently credited to the new line is moved to the adjustment liability account and then to the adjustment revenue account. The new POB created with the new line has the name of IMPAIRMENT, which is a seeded POB. The revenue for the impairment POB is recognized based on the start date and end date of the canceled line.

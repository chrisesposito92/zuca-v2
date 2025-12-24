---
title: "SSP normalization"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/reduction-order-transactions/ssp-normalization"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:22.295Z"
---

# SSP normalization

When the RORD line is collected, the SSP value of the original SO line gets normalized based on the price, term, or quantity of the RORD line. This reference provide examples to explain the impact of RORD line on SSP normalization.

## SSP based on percentage

In this example, the SSP type is set to be Percentage. The SO line information is shown in the following table. The Ext. SSP Price is calculated based on the Ext. List Price and SSP%. The Allocated and Carve values can also be derived.

| Line Type | SO NO | SO Line NO | SO Line ID | Item | Qty | Ext. List Price | Ext. Sell Price | SSP % | Ext. SSP Price | Allocated | Carve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-1001 | SO1001-1 | 10001 | Hardware | 2 | 1000 | 800 | 75 | 750(=1000*75%) | 801.53(=1400*750/1310) | 1.53 |
| SO | SO-1001 | SO1001-2 | 10002 | Software | 2 | 800 | 600 | 70 | 560(=800*70%) | 598.47(=1400*560/1310) | -1.53 |
| Total | 1400 |  | 1310 |  |  |  |  |  |  |  |  |

Then, the following RORD line is collected to reduce the quantity of the two SO lines.

| Line Type | SO NO | SO Line NO | SO Line ID | Item | Qty | Ext. List Price | Ext. Sell Price |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RORD | SO-1001 | SO1001-3 | 10001 | Hardware | 1 | -500 | -400 |
| RORD | SO-1001 | SO1001-4 | 10002 | Software | 1 | -400 | -300 |

After data collection is done, the Ext. SSP Price is calculated based on the net value of Ext. List Price.

| Line Type | SO NO | SO Line NO | SO Line ID | Item | Qty | Ext. List Price | Ext. Sell Price | SSP % | Ext. SSP Price | Allocated | Carve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO-1001 | SO1001-1 | 10001 | Hardware | 1 | 1000 | 500 | 75 | 375(=500*75%) | 400.76(=700*375/655) | 0.76 |
| SO | SO-1001 | SO1001-2 | 10002 | Software | 1 | 800 | 400 | 70 | 280(=400*70%) | 598.47(=700*280/655) | -0.76 |
| Total | 700 |  | 655 |  |  |  |  |  |  |  |  |

## SSP based on amount

In this example, the SSP type is set to be Amount. The SO line information is shown in the following table. The Ext. SSP Price is calculated based on the following formula:

Ext. SSP Price = SSP Price \* Quantity \* Term

| SO Line ID | Item | Qty | Ext. List Price | Ext. Sell Price | Allocatable | Start Date | End Date | Term | SSP Price | Ext. SSP Price | Allocated | Carve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO20001 | Hardware | 1 | 1000 | 800 | 800 | 01/01/2019 | 01/01/2019 | 1 | 900 | 900 | 777.78(1400*900/1620) | -22.22 |
| SO20002 | Maintenance | 1 | 720 | 600 | 600 | 01/01/2019 | 31/12/2019 | 12 | 60 | 720 | 622.22(1400*720/1620) | 22.22 |
| Total | 1400 |  |  |  |  | 1620 |  |  |  |  |  |  |

Then, the following RORD line is collected to reduce the term of the maintenance line by 3 months from October to December 2019.

| Line Type | SO Line ID | Item | Qty | Ext. List Price | Ext. Sell Price | Start Date | End Date | Term |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RORD | SO20002 | Maintenance | 1 | -180 | -150 | 01/10/2019 | 31/12/2019 | 3 |

The Ext. SSP Price and Term are changed for the maintenance line. The Allocated Value and Carve are also recalculated as follows:

| SO Line ID | Item | Qty | Ext. List Price | Ext. Sell Price | Allocatable | Start Date | End Date | Term | SSP Price | Ext. SSP Price | Allocated | Carve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO20001 | Hardware | 1 | 1000 | 800 | 800 | 01/01/2019 | 01/01/2019 | 1 | 900 | 900 | 781.25(1250*900/1440) | -18.75 |
| SO20002 | Maintenance | 1 | 540 | 450 | 450 | 01/01/2019 | 31/12/2019 | 9 | 60 | 540 | 468.25(1250*540/1440) | 18.25 |
| Total | 1250 |  |  |  |  | 1440 |  |  |  |  |  |  |

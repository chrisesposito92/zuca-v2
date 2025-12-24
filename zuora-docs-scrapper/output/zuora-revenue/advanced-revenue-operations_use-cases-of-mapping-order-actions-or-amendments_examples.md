---
title: "Examples"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/use-cases-of-mapping-order-actions-or-amendments/examples"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:10.336Z"
---

# Examples

Examples to help you understand how actions in Zuora Billing affect Zuora Revenue behaviors

The examples of typical use cases are provided in this section to help you understand how the actions in Zuora Billing affect Zuora Revenue behaviors.

## New subscription

If you create a subscription of Product A (Quantity:1) on Jan 1, 2019 for 1 year in Zuora Billing, and the monthly fee is $100, the following data will be sent to Zuora Revenue:

| Charge Name | Original Charge ID | Subscription Version | Charge Segment | Quantity | Dates | Booked Value | Zuora Revenue Transaction Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product A Monthly | 1a2b3c | 1 | 1 | 1 | 01/01/19 - 12/31/19 | $1,200 | New SO (#1) |

Zuora Revenue will create a new revenue contract that includes one SO line (SO #1).

## Increase price

The monthly fee is increased to $150 on Jul 1st, 2018, then the original rate plan charge segment will be split into two segments:

| Charge Name | Original Charge ID | Subscription Version | Charge Segment | Quantity | Dates | Booked Value | Zuora Revenue Transaction Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product A Monthly | 1a2b3c | 2 | 1 | 1 | 01/01/19 - 06/30/19 | $600 | Update SO (#1) |
| Product A Monthly | 1a2b3c | 2 | 2 | 1 | 07/01/19 - 12/31/19 | $900 | New SO (#2) |

This amendment will trigger the prospective contract modification to the existing revenue contract. Zuora Revenue will bring forward the end date for SO #1 and create a new SO line (SO #2).

## Increase quantity

On Oct 1, 2019, you want to increase the quantity to 2, then the latest charge segment will be split again into two segments:

| Charge Name | Original Charge ID | Subscription Version | Charge Segment | Quantity | Dates | Booked Value | Zuora Revenue Transaction Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product A Monthly | 1a2b3c | 2 | 2 | 1 | 07/01/19 - 09/30/19 | $450 | Update SO (#2) |
| Product A Monthly | 1a2b3c | 2 | 3 | 2 | 10/01/19 - 12/31/19 | $900 | New SO (#3) |

This amendment will trigger the prospective contract modification to the existing revenue contract. Zuora Revenue will bring forward the end date for SO #2 and create a new SO line (SO #3).

## Add a product

On Nov 1, 2019, you want to add a Product B (quantity:1) to this subscription for one month. It is a one-time charge and the price of Product B is $500 per month. The following data will be sent to Zuora Revenue:

| Charge Name | Original Charge ID | Subscription Version | Charge Segment | Quantity | Dates | Booked Value | Zuora Revenue Transaction Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product B | 1a2b3c | 3 | 1 | 1 | 11/01/19 - 11/30/19 | $500 | New SO (#4) |

This amendment will trigger the prospective contract modification to the existing revenue contract. A new performance obligation (POB) will be added to the contract (SO #4).

## Renew subscription

On Dec 31, 2019, you decide to renew the subscription for Product A with the existing quantity for the following year at the price of $150 per month. The data sent to Zuora Revenue will be:

| Charge Name | Original Charge ID | Subscription Version | Charge Segment | Quantity | Dates | Booked Value | Zuora Revenue Transaction Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Product A Monthly | 1a2b3c | 4 | 4 | 2 | 01/01/20 - 12/31/20 | $3,600 | New SO (#5) |

Zuora Revenue will create a new revenue contract that includes a new SO line.

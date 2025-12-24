---
title: "Unit sell price calculation for contract modification"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/unit-sell-price-calculation-for-contract-modification"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:44.075Z"
---

# Unit sell price calculation for contract modification

Learn how Zuora Revenue uses Unit Sell Price to determine contract modification rules based on price changes, and understand the calculation logic and examples.

In Zuora Revenue, Unit Sell Price is used only to determine whether the contract modification rule in the Price Modifications category should be triggered for a revenue contract (RC) based on the price change. Whenever the sales order (SO) update is uploaded, the new and previous Unit Sell Price values are compared to determine whether there is a price increase or decrease.

Note:

Unit Sell Price is never used for revenue calculation in Zuora Revenue.

## Calculation logic

The Unit Sell Price value on an SO line can either be directly populated or calculated by Zuora Revenue based on other values. The Unit Sell Price on the updated SO line is first stored in the staging table. The current Unit Sell Price value is stored in the RC line table. After the updated SO line is consumed in the system, the updated Unit Sell Price will be stored in the RC line table and become the current price.

If Unit Sell Price is populated on the uploaded line, Zuora Revenue will directly compare this value with the Unit Sell Price value stored in the RC line table. Otherwise, Zuora Revenue will calculate Unit Sell Price based on the following formula:

Unit Sell Price = Ext Sell Price/Order Qty/Term

where, Ext Sell Price and Order Qty values must be present on the uploaded SO line. The Term value can be directly uploaded or calculated by Zuora Revenue by using the start date and end date.

## Examples

In the following three examples, Unit Sell Price and Term values are populated by the upstream system and directly uploaded to Zuora Revenue. The uploaded Unit Sell Price value in the staging table is compared with the current value in the RC line table to determine whether contract modification should be triggered.

The updated Unit Sell Price is 50.00 and the current Unit Sell Price is 50.00. No price modification rule is triggered.

The updated Unit Sell Price is 50.00 and the current Unit Sell Price is 50.00. No price modification rule is triggered.

|  | Ext Sell Price | Order Qty | Start Date | End Date | Unit Sell Price | Term |
| --- | --- | --- | --- | --- | --- | --- |
| Values in staging table | 300.00 | 2 | 01-Jan-2020 | 31-Mar-2020 | 50.00 | 3 |
| Values in RC line table | 300.00 | 2 | 01-Jan-2020 | 31-Mar-2020 | 50.00 | 3 |

The updated Unit Sell Price is 50.00 and the current Unit Sell Price is 50.00. No price modification rule is triggered.

|  | Ext sell price | Order Qty | Start Date | End Date | Unit Sell Price | Term |
| --- | --- | --- | --- | --- | --- | --- |
| Values in staging table | 600.00 | 2 | 01-Jan-2020 | 31-Jun-2020 | 50.00 | 6 |
| Values in RC line table | 300.00 | 2 | 01-Jan-2020 | 31-Mar-2020 | 50.00 | 3 |

The updated Unit Sell Price is 58.33 and the current Unit Sell Price is 50.00. The price increase rule will be triggered.
|  | Ext Sell Price | Order Qty | Start Date | End Date | Unit Sell Price | Term |
| --- | --- | --- | --- | --- | --- | --- |
| Values in staging table | 700.00 | 2 | 01-Jan-2020 | 31-Jun-2020 | 58.33 | 6 |
| Values in RC line table | 300.00 | 2 | 01-Jan-2020 | 31-Mar-2020 | 50.00 | 3 |

In the following example, both Unit Sell Price and Term values are not present in the updated SO line. Zuora Revenue first calculates the Term value based on Start Date and End Date, which equals 3 months. The new Unit Sell Price is calculated based on the following formula: Unit Sell Price = Ext Sell Price/Order Qty/Term = 300.00/2/3 = 50.00 The updated Unit Sell Price is 50.00 and the current Unit Sell Price is 50.00. No price modification rule is triggered.

|  | Ext Sell Price | Order Qty | Start Date | End Date | Unit Sell Price | Term |
| --- | --- | --- | --- | --- | --- | --- |
| Values in staging table | 300.00 | 2 | 01-Jan-2020 | 31-Mar-2020 | 50.00 (calculated) | 3 (calculated) |
| Values in RC line table | 300.00 | 2 | 01-Jan-2020 | 31-Mar-2020 | 50.00 | 3 |

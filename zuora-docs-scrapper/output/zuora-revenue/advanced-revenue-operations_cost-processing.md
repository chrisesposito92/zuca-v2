---
title: "Cost processing"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/cost-processing"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:46.739Z"
---

# Cost processing

Learn about the capitalization and amortization of incremental costs related to revenue contracts, and how Zuora Revenue supports processing and reporting of these costs.

It is required by ASC 606 that the incremental costs that are related to obtaining or fulfilling the revenue contract must be capitalized and amortized based on the transfer of the goods and services that the costs relate to. Incremental costs are the costs that are directly incurred as a result of the obtainment or fulfillment of a revenue contract. Incremental costs do not occur if the revenue contract is not obtained. Examples of incremental costs are direct labor, direct materials, and sales commission.

## Standard cost and other costs

Zuora Revenue supports the processing and reporting of incremental costs. In Zuora Revenue, incremental costs are divided into two types: standard cost and other costs.

## Standard cost

Typically, the standard cost is determined or calculated in your ERP system and then uploaded to Zuora Revenue as amounts with each sales order line (Line Type being SO or INV).

There are alternative methods to input the standard cost to Zuora Revenue. For example, you can input the standard cost as separate cost lines and use the SALES\_ORDER\_LINE\_ID field to specify the related sales order line ID. Then, each cost line is associated with the corresponding sales order line. You can also set up a rule in Zuora Revenue to calculate the standard cost based on formulas.

## Other costs

Other costs can also be uploaded to Zuora Revenue on the same sales order line with revenue (Line Type being SO or INV).

Alternatively, you can create a standalone cost type for other costs and then upload other costs as separate cost lines to be associated with the performance obligation. Other costs of a standalone cost type must be input to Zuora Revenue as separate cost lines (Line Type being CST), or by setting up a cost rule in Zuora Revenue to calculate the cost based on a formula. Examples of other costs are commissions and royalties.

Note:

Prior to version 37.004.00.00, standalone cost line (Line Type being CST) will not be processed in Zuora Revenue if the corresponding sales order line does not exist in the system. Beginning from 37.004.00.00, the standalone cost line can be processed by Zuora Revenue even though the corresponding sales order line does not exist. When processing this type of standalone cost lines, Zuora Revenue will create a dummy sales order line with the SO Line ID based on the cost line and then form the revenue contract based on the grouping logic and the POB rules according to the cost line values.

## Input costs to Zuora Revenue

As mentioned before, you can input costs to Zuora Revenue by using one of the following methods.

| Input Method | Input As |
| --- | --- |
| Input costs on the same sales order line with revenue(Line Type is SO or INV) | An amount |
| Input costs as separate cost transaction lines(Line Type is CST) | An amount |
| Calculate costs using a percent-based formula that is set up as a rule in Zuora Revenue | A percent |

## Related articles

-   For information about the cost relates configurations in Zuora Revenue, see [Cost setup](/zuora-revenue/advanced-revenue-operations/cost-processing/cost-setup) .

-   For information about how to upload costs to Zuora Revenue, see [Cost upload](/zuora-revenue/advanced-revenue-operations/cost-processing/cost-upload) .

-   For information about how to review cost data in Zuora Revenue, see Cost review.

-   To understand the accounting behaviors for cost processing, see [Accounting entries for cost](/zuora-revenue/advanced-revenue-operations/cost-processing/accounting-entries-for-cost) .

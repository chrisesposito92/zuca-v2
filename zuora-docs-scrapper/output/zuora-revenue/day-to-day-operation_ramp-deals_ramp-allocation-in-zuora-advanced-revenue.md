---
title: "Ramp allocation in Zuora Advanced Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ramp-deals/ramp-allocation-in-zuora-advanced-revenue"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:28.140Z"
---

# Ramp allocation in Zuora Advanced Revenue

Learn about ramp allocation in Zuora Advanced Revenue, including its configuration, calculation logic, and limitations.

A ramp deal is a set of time-based periods where products or pricing can change. After the ramp deals are collected by Zuora Revenue, Zuora Revenue provides the ramp allocation functionality to identify the ramp deal lines in a revenue contract and perform allocation based on the ramp percentage that is calculated according to the average pricing method of each ramp group.

If you create ramp deals in the Zuora Billing, Zuora Revenue will perform ramp allocation for the ramp deals. The benefit of performing ramp allocation for ramp deals is to get more accurate revenue allocated for the ramp deal line.

Note:

The following statements are applicable to ramp allocation for Zuora Advanced Revenue users who have the SSP Allocation functionality. If you are a user of Zuora Central Revenue, ramp allocation will be different from the statements here. For more information, see Ramp allocation in Zuora Central Revenue .

## Configuration requirement

To use the ramp allocation functionality, you have to configure the AVERAGE\_PRICING\_METHOD profile in Zuora Revenue. This profile determines how to calculate the ramp allocation percentage within each ramp deal group. Valid values are Term and Volume , and the default method is Volume .

## Relative allocation and ramp allocation

In Zuora Revenue, ramp allocation is different from the normal relative allocation in several aspects. The main differences between them are:

-   Relative allocation uses the CV\_ELIGIBLE\_FLAG field to determine whether a line should participate in revenue allocation. However, ramp allocation does not use this flag to determine whether a line is eligible for allocation. As long as a line is identified as a ramp deal line and ramp allocation is enabled in the system, all ramp deal lines will participate in the ramp allocation. In relative allocation, revenue is distributed among all eligible lines within the whole revenue contract. The relative allocation percentage of each line sums up to 100% within the whole revenue contract. However, in ramp allocation, revenue is distributed for each ramp deal group in the revenue contract. There can be more than one ramp deal group in one revenue contract. The ramp allocation percentage for each line within a ramp deal group sums up to 100%.

-   During the ramp allocation process, a relative allocation is also performed to calculate the net revenue for each ramp deal line within the whole RC. All ramp deal lines participate in this relative allocation. The relative allocation percentage for each ramp deal line within the whole revenue contract sums up to 100%. The calculated net revenue during this relative allocation process is used only to calculate the carve amount for each line and will not be used for the actual allocation.

-   There are native validations during the ramp calculation process. If any validation fails, a hold will be applied to the revenue contract. The validation is to calculate the per unit per day rate or per day rate for each ramp deal line depending on different average pricing methods. The rate should be the same within one ramp deal group. If it is not, validation fails and a hold will be applied to the RC.

    -   Validation for Volume average pricing method: Per Day Per Unit Rate = Net Revenue (from ramp allocation) / Term in days / Quantity

    -   Validation for Term average pricing method: Per Day Per Unit Rate = Net Revenue (from ramp allocation) / Term in days


## Key data Points

The following data points are the key to the ramp allocation functionality. Those data points are populated in Zuora Revenue staging tables by the processor that is configured in Zuora Revenue configurationswhen ramp allocation is enabled.

-   RAMP\_DEAL\_REF Line with the RAMP\_DEAL\_REF value populated is identified as a ramp deal line. Within a revenue contract, lines with the same RAMP\_DEAL\_REF value are grouped into one ramp deal group to participate in allocation.
-   AVG\_PRCING\_MTHD

    This field determines how to calculate the ramp allocation percentage within each ramp deal group. Valid values are Term and Volume. Different values result in different ways to calculate the ramp allocation percentage.


| AVG_PRCING_MTHD | Ramp allocation percentage (RAMP_ALLOC_PCT) calculation |
| --- | --- |
| Term | Calculate the term in days for each ramp deal line.Calculate the total by summing up all the line-level values within the ramp deal group.Calculate the ramp allocation percentage (RAMP_ALLOC_PCT) for each line based on the following formula:Line-level term in days/Total line-level term in days |
| Volume | Calculate the total volume for each line based on the following formula:Line-level term in days * QuantityCalculate the total volume for each ramp deal group by summing up all the line-level values within the group.Calculate the ramp allocation percentage (RAMP_ALLOC_PCT)for each line:Line-level term in days * Quantity/Total line-level term in days * Quantity |

## Calculation Logic

When ramp allocation is enabled and the processor is set up appropriately, Zuora Revenue completes the following steps to perform ramp allocation for the ramp deal lines in the revenue contract:

1.  Identify the ramp deal lines in the revenue contract. The ramp deal lines are indicated by the RAMP\_DEAL\_REF field for each line.

2.  Group the lines with the same RAMP\_DEAL\_REF value into one ramp deal group. There can be more than one ramp deal group in one revenue contract.

3.  For each ramp deal group, validate whether the included lines have the same setting for the AVG\_PRCING\_MTHD field. If yes, proceed to the next step; otherwise, place a hold to the revenue contract.

4.  For each ramp deal group, validate whether the included lines have the same setting for the CV\_ELIGIBLE\_FLAG field. If yes, proceed to the next step; otherwise, place a hold to the revenue contract.

5.  For each ramp deal group, check the CV\_ELIGIBLE\_FLAG value for each line.

    -   If the line is not eligible for allocation (CV\_ELIGIBAL\_FLAG = N), set the SSP Price to be equal to the Sell Price for the line, which is the preparation to calculate the carve amount for the line in later steps.

    -   If the line is eligible for allocation (CV\_ELIGIBAL\_FLAG = Y), proceed to the next step.

6.  Calculate the total allocated amount for every ramp deal group by summing up the Allocatable Ext Price of each line.

7.  Calculate the relative allocation percentage for each ramp deal line within the revenue contract. The relative allocation percentages of all the ramp deal lines should sum up to 100%.

8.  Calculate the net revenue from the relative allocation for each line based on the percentages in Step 5.

9.  Calculate the ramp allocation percentage for each ramp line within every ramp deal group based on the AVG\_PRCING\_MTHD value. The ramp allocation percentages of the line within the same ramp deal group should sum up to 100%.

10.  Calculate the total amount for ramp allocation for each ramp deal group. This value is equal to the sum of net revenue from relative allocation within each ramp deal group.

11.  Calculate the net revenue from ramp allocation for each line based on the ramp allocation percentages in Step 7 and the total amount in Step 8.

12.  Validate whether the per unit per day rate (for Volume average pricing method) or the per day rate (for Term average pricing method) is the same for all the lines in the same ramp deal group. The rate for each line is calculated based on the following formula:

     Per Day Per Unit Rate = Net Revenue (from ramp allocation) / Term in days / Quantity

     Per Day Rate = Net Revenue (from ramp allocation) / Term in days

13.  If validation passes, the net revenue from ramp allocation will be used for revenue allocation. Otherwise, a hold is applied to the whole revenue contract with the recovery code provided.


## Limitations

Currently, the following limitations apply to Zuora Revenue:

-   The scenarios where the subscription term does not align with the ramp interval are not supported.

-   The Ramp Interval object is restricted from the mapping template and the query filter.

-   Usage charges are not supported.

-   Account-level discounts are not supported.

-   Fixed amount discounts (FAD) are standalone transactions in Zuora Revenue, hence they are not supported.

-   Only one Average Pricing Method, either Term or Volume, can be configured at tenant level. The configuration on the transaction level is not supported.

-   The price-based average pricing method is not supported.

-   All scenarios where the ramp interval does not align with the charge segment are not supported, for example, evergreen subscriptions.


## Examples

Two sample revenue contracts are provided to explain how ramp allocation is performed within the identified ramp deal groups. In one example, all ramp allocation validations pass. In the other example, validation of the per day per unit rate fails. For more information, see [Ramp deal processing examples](/zuora-revenue/day-to-day-operation/ramp-deals/ramp-allocation-in-zuora-advanced-revenue/ramp-deal-processing-examples).

---
title: "Ramp deal processing examples"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ramp-deals/ramp-allocation-in-zuora-advanced-revenue/ramp-deal-processing-examples"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:43.606Z"
---

# Ramp deal processing examples

Two examples are provided to help you understand how to calculate the ramp allocation amount and validations that are performed during the ramp allocation process. All the data and the involved calculations in the following examples can be downloaded from this [spreadsheet](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/020b334e-7426-4ad2-b317-6e995105862e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyMGIzMzRlLTc0MjYtNGFkMi1iMzE3LTZlOTk1MTA1ODYyZSIsImV4cCI6MTc2NjYzNzEwMiwianRpIjoiYzA3MTNiMjhhYzE4NDE2NWE5ZmVkYzU0NTE1MTY4MjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oOngnaBvt4X2vxDgiB0OJgctKimdJGxua4A0kuV8UW0&response-content-disposition=attachment%3B+filename%3D%22Ramp_deal_processing_examples.xlsx%22).

## Example 1

In this example, there is one ramp deal group within the revenue contract, which is indicated by the Ramp Identifier. Three lines are included in this ramp deal group. Both quantity and price are ramping in the three-year period. All the lines are eligible for allocation (CV\_ELIGIBLE\_FLAG=Y). The AVG\_PRICING\_MTHD filed for them is set to Volume.

To calculate the relative allocation percentage for these lines, the Ext SSP Price is column is used to calculate the relative allocation percentage. Then, the net revenue from the relative allocation can be derived as follows.

| Charge # | Charge Version | Charge Segment | Ext Sell Price | Ext SSP Price | Relative Allocation Percentage | Net Revenue (Relative Allocation) |
| --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 8,000 | 8,000 | 13.20% | 8,712.87 |
| C-00001 | 2 | 2 | 18,000 | 12,600 | 20.79% | 13,722.77 |
| C-00001 | 3 | 3 | 40,000 | 40,000 | 66.01% | 43,564.36 |
|  |  |  | 66,000 | 60,600 | 100.00% | 66,000 |

The AVG\_PRICING\_MTHD is volume-based. So the ramp allocation percentage for each ramp deal line is calculated based on the total term in days.

| Charge # | Charge Version | Charge Segment | Qty | Term (days) | Total Term Days | Ramp Allocation Percentage | Ext Sell Price | Net Revenue (Ramp Allocation) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 10 | 365 | 3,650 | 14.27% | 8,000 | 9,421.20 |
| C-00001 | 2 | 2 | 20 | 366 | 7,320 | 28.63% | 18,000 | 18,894.02 |
| C-00001 | 3 | 3 | 40 | 365 | 14,600 | 57.10% | 40,000 | 37,684.79 |
|  |  |  | 70 | 1,096 | 25,570 | 100.00% | 66,000 | 66,000 |

To validate the per unit per day rate, the per day rate is calculated for each line as follows. The per unit per day rate is the same for all the lines. This validation passes.

| Charge # | Charge Version | Charge Segment | Term (days) | Net Revenue (Ramp Allocation) | Per Day Rate | Per Unit Per Day Rate |
| --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 365 | 9,421.20 | 25.81149785 | 2.581149785 |
| C-00001 | 2 | 2 | 366 | 18,894.02 | 51.6229957 | 2.581149785 |
| C-00001 | 3 | 3 | 365 | 37,684.79 | 103.2459914 | 2.581149785 |
|  |  |  | 1,096 | 66,000 |  |  |

## Example 2

In this example, only two ramp deal groups exist within the revenue contract. Each ramp deal group has three lines. Only the quantity is ramping in the three-year period. All the lines are eligible for allocation (CV\_ELIGIBLE\_FLAG=Y). The AVG\_PRICING\_MTHD filed for them is set to Term.

To calculate the relative allocation percentage for these lines, the Ext SSP Price is column is used to calculate the relative allocation percentage. Then, the net revenue from the relative allocation can be derived as follows.

| Charge # | Charge Version | Charge Segment | Ext Sell Price | Ext SSP Price | Relative Allocation Percentage | Net Revenue (Relative Allocation) |
| --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 10,000 | 8,000 | 5.67% | 9,078.01 |
| C-00001 | 2 | 2 | 20,000 | 14,000 | 9.93% | 15,886.52 |
| C-00001 | 3 | 3 | 40,000 | 40,000 | 28.37% | 45,390.07 |
| C-00002 | 1 | 1 | 10,000 | 8,000 | 5.67% | 9,078.01 |
| C-00002 | 2 | 2 | 30,000 | 21,000 | 14.89% | 23,829.79 |
| C-00002 | 3 | 3 | 50,000 | 50,000 | 35.46% | 56,737.59 |
|  |  |  | 160,000 | 141,000 | 100.00% | 160,000.00 |

The AVG\_PRICING\_MTHD is term based. So the ramp allocation percentage for each ramp deal line within the same ramp deal group is calculated based on the total term in days. The ramp allocation percentage for the first group is calculated as follows:

| Charge # | Charge Version | Charge Segment | Term (days) | Ramp Allocation Percentage |
| --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 365 | 33.30% |
| C-00001 | 2 | 2 | 366 | 33.39% |
| C-00001 | 3 | 3 | 365 | 33.30% |
|  |  |  | 1,096 | 100.00% |

The ramp allocation percentage for the other group is calculated as follows:

| Charge # | Charge Version | Charge Segment | Term (Days) | Ramp Allocation Percentage |
| --- | --- | --- | --- | --- |
| C-00002 | 1 | 1 | 365 | 33.30% |
| C-00002 | 2 | 2 | 366 | 33.39% |
| C-00002 | 3 | 3 | 365 | 33.30% |
|  |  |  | 1,096 | 100.00% |

The total amount for ramp allocation is based on the total amount of relative allocation within each ramp deal group. Then, the total amount to be allocated for the first group is 70354.61 and the net revenue for ramp allocation can be derived based on the ramp allocation percentage is calculated as follows:

| Charge # | Charge Version | Charge Segment | Term (days) | Ramp Allocation Percentage | Net Revenue (Relative Allocation) | Net Revenue (Ramp Allocation) |
| --- | --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 365 | 33.30% | 9,078.01 | 23,430.14 |
| C-00001 | 2 | 2 | 366 | 33.39% | 15,886.52 | 23,494.33 |
| C-00001 | 3 | 3 | 365 | 33.30% | 45,390.07 | 23,430.14 |
|  |  |  | 1,096 | 100.00% | 70354.61 | 70354.61 |

The total amount to be allocated for the second group is 89,645.39 and the net revenue for ramp allocation can be calculated as follows:

| Charge # | Charge Version | Charge Segment | Term (days) | Ramp Allocation Percentage | Net Revenue (Relative Allocation) | Net Revenue (Ramp Allocation) |
| --- | --- | --- | --- | --- | --- | --- |
| C-00002 | 1 | 1 | 365 | 33.30% | 9,078.01 | 29,854.53 |
| C-00002 | 2 | 2 | 366 | 33.39% | 23,829.79 | 29,936.33 |
| C-00002 | 3 | 3 | 365 | 33.30% | 56,737.59 | 29,854.53 |
|  |  |  | 1,096 | 100.00% | 89,645.39 | 89,645.39 |

Validate the per day rate for each group as follows. The per day rate for each line is the same within the same group. This validation passes.

| Charge # | Charge Version | Charge Segment | Term (days) | Net Revenue (Ramp Allocation) | Per Day Rate |
| --- | --- | --- | --- | --- | --- |
| C-00001 | 1 | 1 | 365 | 23,430.14 | 63.86861314 |
| C-00001 | 2 | 2 | 366 | 23,494.33 | 63.86861314 |
| C-00001 | 3 | 3 | 365 | 23,430.14 | 63.86861314 |
| C-00002 | 1 | 1 | 365 | 29,854.53 | 81.79323912 |
| C-00002 | 2 | 2 | 366 | 29,936.33 | 81.79323912 |
| C-00002 | 3 | 3 | 365 | 29,854.53 | 81.79323912 |

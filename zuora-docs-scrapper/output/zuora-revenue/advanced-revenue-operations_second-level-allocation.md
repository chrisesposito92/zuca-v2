---
title: "Second level allocation"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/second-level-allocation"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:04.439Z"
---

# Second level allocation

Zuora Revenue's second-level allocation allows further distribution of allocated revenue across multiple elements within a revenue contract, enhancing flexibility in revenue treatment.

In addition to standard SSP/RSSP relative allocation, Zuora Revenue can also be enabled for second-level revenue allocation. The second-level allocation is to further allocate the allocated amount (which is calculated by Zuora Revenue during the standard relative allocation) into multiple elements within one revenue contract.

If you have the need to further bifurcate the allocated revenue across additional elements for different treatments, you can enable the second-level allocation in Zuora Revenue. For example, in the scenario where the same RSSP item is sold at various prices and allocated with different amounts based on RSSP determination, the second-level allocation can be performed to equally distribute the sum of allocated amounts across these RSSP lines.

## Configuration requirement

For Zuora Revenue to perform second-level allocation for eligible lines, you must first configure the system to enable the second-level allocation functionality. Both lookup and profile configurations are required.

## Lookup configuration

Configure the LVL2\_IDENTIFIER lookup to define the fields that can be selected as the identifier for grouping transaction lines to participate in second-level allocation.

1.  Navigate to Setups > Application > Lookups.
2.  Locate the LVL2\_IDENTIFIER lookup on the list.
3.  Hover the mouse over the line and click the Edit Lookup Definitions icon.
4.  In the Edit Lookup Definition window, to add a field that might be selected as the second-level allocation identifier, click the '+' icon. The lookup code and lookup value are required for each field.
5.  Add as many fields as you need. The added fields will be listed for selection for the LVL2\_ALLOC\_IDENTIFIER profile.
6.  Save and close the window.

## Profile configuration

Navigate to Setups > Application > Profiles and configure the following profiles.

| Profile name | Description |
| --- | --- |
| ENABLE_LVL2_ALLOCATION | Set this profile to Yes to enable the second-level allocation. |
| LVL2_ALLOC_IDENTIFIER | Select the field that is used as the identifier for the second-level allocation. The listed items are defined by the LVL2_IDENTIFIER lookup.If the lines that are eligible for the second-level allocation have the same value for the selected field, these lines are grouped together to participate in the second-level allocation. The sum of the second-level allocation percentage must be 100% for each group. |

## Key data points

The following data points are key to the second-level allocation when the transaction lines are loaded to Zuora Revenue.

-   CV\_ELIGIBLE\_FLAG

    For a transaction line to participate in the second-level allocation, it must be eligible for the standard SSP/RSSP relative allocation in the first place (CV\_ELIGIBLE\_FLAG = Y). If CV\_ELIGIBLE\_FLAG is set to N, the translation line will not participate in the standard relative allocation or the second-level allocation.

-   CV\_ELIGIBLE\_LVL2\_FLAG

    For a transaction line to participate in the second-level allocation, set CV\_ELIGIBLE\_LVL2\_FLAG to Y. Then, after the standard relative SSP/RSSP allocation calculates the allocated amount for the translation line, the second-level allocation is performed on the eligible lines.

-   Selected field for the LVL2\_ALLOC\_IDENTIFIER profile

    Eligible transaction lines that have the same value for the selected field are grouped together to participate in the second-level allocation. The allocated amounts of the lines within the same group are summed and then distributed among these lines based on the second-level allocation percentage.


The following data points are either uploaded or calculated for the second-level allocation.

-   LVL2\_ALLOC\_PCT


The second-level allocation percentage for each eligible line is either calculated based on formulas or uploaded directly to Zuora Revenue during the implementation phase. The sum of this allocation percentage within each group must be 100%.

## Processing logic

After transaction lines are loaded to Zuora Revenue, the second-level allocation is performed in the following way:

1.  Identify the lines that are eligible for the standard relative allocation (CV\_ELIGIBLE\_FLAG = Y).
2.  Calculate the allocated amount for the eligible lines based on the SSP/RSSP stratification (either set up in the system or uploaded).
3.  Identify the lines that are eligible for the second-level allocation (CV\_ELIGIBLE\_LVL2\_FLAG = Y).
4.  Examine the value of the second-level identifier field (specified by the LVL2\_ALLOC\_IDENTIFIER profile) for these eligible lines.
5.  Group the lines with the same identifier field value into one second-level allocation group. There can be more than one second-level allocation group in one revenue contract.
6.  Calculate the total allocatable amount (Allocatable Price) for each group by summing up the allocated amount of each line, which is calculated in Step 2.
7.  Derive the second-level allocation percentage for each line within a group based on formulas or uploaded stratification during the implementation phase.
8.  Validate the second-level allocation percentage of each group. The percentage within one group should sum up to 100%; otherwise, the lines are errored out.
9.  Distribute the total allocatable amount within each group based on the percentage in Step 7.

## Example

In the following example, there are four lines in the revenue contract. All of them are eligible for the standard SSP allocation. Two lines are eligible for the second-level allocation. The SO Line Item field is selected for the LVL2\_ALLOC\_IDENTIFIER profile.

| SO Line Item | Line Item Num | CV Eligible Flag | CV Eligible LVL2 Flag | Ext List Price | Ext Sell Price | SSP% |
| --- | --- | --- | --- | --- | --- | --- |
| 1001 | ROUTER | Y | Y | 12,000.00 | 10,000.00 | 100 |
| 1001 | SWITCH | Y | Y | 6,000.00 | 5,000.00 | 100 |
| 1002 | ROUTER1 | Y |  | 4,000.00 | 6,000.00 | 85 |
| 1003 | SWITCH1 | Y |  | 4,000.00 | 6,000.00 | 90 |
|  |  |  |  | 26,000.00 | 27,000.00 |  |

Standard relative allocation is calculated as follows:

| SO Line Item | Line Item Num | CV Eligible Flag | CV Eligible LVL2 Flag | Ext List Price | Ext Sell Price | SSP% | Ext SSP Price | RSSP% | Allocated Amount | Carves |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | ROUTER | Y | Y | 12,000.00 | 10,000.00 | 100 | 12,000.00 | 48.00 | 12,960.00 | 2,960.00 |
| 1001 | SWITCH | Y | Y | 6,000.00 | 5,000.00 | 100 | 6,000.00 | 24.00 | 6,480.00 | 1,480.00 |
| 1002 | ROUTER1 | Y |  | 4,000.00 | 6,000.00 | 85 | 3,400.00 | 13.60 | 3,672.00 | -2,328.00 |
| 1003 | SWITCH1 | Y |  | 4,000.00 | 6,000.00 | 90 | 3,600.00 | 14.40 | 3,888.00 | -2,112.00 |
|  |  |  |  | 26,000.00 | 27,000.00 |  | 25,000.00 | 100.00 | 27,000.00 | 0.00 |

Two lines are eligible for the second-level allocation and they have the same value for the SO Line Item field. These lines will be grouped together to participate in the second-level allocation. The second-level allocation percentage for each line is as follows. Their sum is 100%.

| SO Line Item | Line Item Num | Ext List Price | Ext Sell Price | SSP% | Ext SSP Price | RSSP% | Allocated Amount | Carves | Lvl2 Allocation% |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | ROUTER | 12,000.00 | 10,000.00 | 100 | 12,000.00 | 48.00 | 12,960.00 | 2,960.00 | 40.00 |
| 1001 | SWITCH | 6,000.00 | 5,000.00 | 100 | 6,000.00 | 24.00 | 6,480.00 | 1,480.00 | 60.00 |

The total allocated amount of these two lines is 19,440.00 (= 12960.00+6480.00). This amount will be allocated to the two lines based on the second-level allocation percentage:

| SO Line Item | Line Item Num | CV Eligible Flag | CV Eligible LVL2 Flag | Ext List Price | Ext Sell Price | SSP% | Ext SSP Price | RSSP% | Allocated Amount | Carves | Lvl2 Allocation% | Lvl2 Allocated Amount | Lvl2 Carves |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | ROUTER | Y | Y | 12,000.00 | 10,000.00 | 100 | 12,000.00 | 48.00 | 12,960.00 | 2,960.00 | 40.00 | 7,776.00 | -2,224.00 |
| 1001 | SWITCH | Y | Y | 6,000.00 | 5,000.00 | 100 | 6,000.00 | 24.00 | 6,480.00 | 1,480.00 | 60.00 | 11,664.00 | 6,664.00 |

Within this revenue contract, two lines participate in the standard allocation and the other two lines participate in the second-level allocation. The carve amount of all the lines nets to zero.

| SO Line Item | Line Item Num | Ext List Price | Ext Sell Price | SSP% | Ext SSP Price | RSSP% | Lvl2 Allocation% | Allocated Amount | Carves |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | ROUTER | 12,000.00 | 10,000.00 | 100 | 12,000.00 | 48.00 | 40.00 | 7,776.00 | -2,224.00 |
| 1001 | SWITCH | 6,000.00 | 5,000.00 | 100 | 6,000.00 | 24.00 | 60.00 | 11,664.00 | 6,664.00 |
| 1002 | ROUTER1 | 4,000.00 | 6,000.00 | 85 | 3,400.00 | 13.60 |  | 3,672.00 | -2,328.00 |
| 1003 | SWITCH1 | 4,000.00 | 6,000.00 | 90 | 3,600.00 | 14.40 |  | 3,888.00 | -2,112.00 |
|  |  | 26,000.00 | 27,000.00 |  | 25,000.00 |  |  | 27,000.00 | 0.00 |

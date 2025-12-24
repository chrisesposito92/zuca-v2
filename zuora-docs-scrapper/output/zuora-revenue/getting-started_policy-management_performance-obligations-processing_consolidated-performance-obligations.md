---
title: "Consolidated performance obligations"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/consolidated-performance-obligations"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:24.897Z"
---

# Consolidated performance obligations

Learn how to define and manage consolidated performance obligations (POBs) in Zuora Revenue, including the use of leading and non-leading lines, grouping identifiers, and mandatory elements for revenue recognition.

The performance obligation (POB) is the unit of accounting for revenue recognition in ASC 606/IFRS15. As a revenue user, you can derive meaningful benefits either by a single line in a POB or by a combination of multiple lines in a POB. To derive benefit by combining multiple POBs, you can define the consolidated POB in Zuora Revenue.

## Overview

Consolidated POB usually has more than one line and these lines are differentiated by one leading line and other non-leading lines. When you define a consolidated POB in Zuora Revenue, it always requires one leading line for one performance obligation to be defined by the POB condition. The revenue release percentage of the non-leading lines in each accounting period always follows the leading line. The cost release of the non-leading line always follows the total release percentage of the leading line, which is independent of the period.

## Accounting impact

Within a consolidated POB, whenever the leading line releases the revenue, the other non-leading lines will follow the same release percentage for the period. All the revenue-related actions such as release, deferral, and hold, are applied to the leading line only.

## Define the consolidated POB rule

After the POB template is created in Zuora Revenue, define the POB assignment rule for a consolidated POB by using the advanced rule. For general instructions about how to define the advanced POB assignment rule in the UI, see [Advance Rules](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules/advance-rule).

The following graphic shows the sub-panel when you are defining a condition for an advanced POB assignment rule.

![consolidate-pob-overview.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/41dfa67b-37e8-4fbf-a4a4-e98f8a97893b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxZGZhNjdiLTM3ZTgtNGZiZi1hNGE0LWU5OGY4YTk3ODkzYiIsImV4cCI6MTc2NjYzNjY2MiwianRpIjoiNjVkYmM1YmExZGZmNGUzNjkzMDI5NDRlM2I2YTBhN2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.2oBNdi3AOxZOiDVxVzBYWIF83Q2WdMrqqpZOBxb-Kw4)

In one advanced POB assignment rule, you can define multiple conditions and specify the sequence to be applied. For each condition, you can specify one grouping identifier in the Grouping Identifier field and add multiple condition lines in the Goods and Services tab. One line must be selected as the leading line.

To form a consolidated POB in Zuora Revenue, the following identifiers and indicators are critical when you define the advanced POB assignment rule:

-   Grouping identifier
-   Mandatory element
-   Consolidate identifier
-   Leading indicator

## Grouping identifier

The grouping identifier is used for the first level of segregation, which needs to be defined for the condition. You select one of the fields from the Grouping Identifier dropdown list to define the grouping identifier.

For example, if you select PO Number as the grouping identifier, the transaction lines with the same PO number are first grouped together. Then, Zuora Revenue will check the definition in the Goods and Services tab to determine whether these lines can form the consolidated POB line.

## Mandatory element

There is a business requirement to create a consolidated POB for the same nature of the transaction lines. Use the Goods and Services tab on the condition page for this purpose after you define the grouping identifier for a condition. There can be more than one condition line for a condition. Use the Actions icon to specify the criteria for the current line.

![goods-services.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6f3216ae-a2db-4d16-81cb-e573986ede6e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZmMzIxNmFlLWEyZGItNGQxNi04MWNiLWU1NzM5ODZlZGU2ZSIsImV4cCI6MTc2NjYzNjY2MiwianRpIjoiMmRmYWM3NTcyZWIwNGRhZDgwOGVjYWYzZjI5ZDZjNmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.osYldNYCzQr9D5nXzS0Iot-XA38BvrcytIRcUkYz7l8)

If a condition line is configured as the mandatory element for a condition, it means the consolidated POB cannot be formed without this line. There can be multiple condition lines that are marked as the mandatory element in the consolidated POB. They must all be present for the consolidated POB to be formed.

For example, transaction lines are collected with different hardware and software lines with the PO Number field populated in Zuora Revenue. There can be hardware, software, or both in a purchase order. If the combination of both hardware and software derives a meaningful benefit, you can define a consolidated POB rule with the PO Number field as the grouping identifier, and then create two conditions lines in the Goods and Services tab.

As shown in the following graphic, one condition line is for the hardware line (Product Category = HW) and the other for the software line (Product Category = SW). Both lines are mandatory elements for the consolidated POB. Only if both hardware line and software line are present for the same PO number, these lines will form the consolidated POB.

![condition-lines.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/caec80af-9b5c-432e-9cbf-469c6a0a79d3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNhZWM4MGFmLTliNWMtNDMyZS05Y2JmLTQ2OWM2YTBhNzlkMyIsImV4cCI6MTc2NjYzNjY2MiwianRpIjoiN2I4NjE1Y2FhZTE3NDNjNTk5YzA1ZjVhMTdlZjk3ZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q9kDP88Ut5ICgraxuhYR4RzudiQ346ZBeSkerOihsz8)

## Consolidate identifier

There are circumstances when multiple transaction lines satisfy the criteria specified for a condition line. In these circumstances, use the consolidate identifier to specify whether all the transaction lines that satisfy the condition line should be part of the same consolidated POB or Zuora Revenue should create a consolidated POB line for every transaction line that meets the criteria.

When the Consolidate switch is toggled to Yes , you must select a field from the Consolidate Identifier list. Then, the transaction lines with the same value for the Consolidate Identifier field will all be part of the same consolidated POB. Otherwise, individual consolidated POBs are created for the line that satisfies the POB condition line.

In the following graphic, both hardware lines and software lines are to be consolidated into one single consolidated POB if they have the same value for the Product Category field.

![consolidate-identifier.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/387ac9a4-86fe-4384-aa51-e852dec51d28?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM4N2FjOWE0LTg2ZmUtNDM4NC1hYTUxLWU4NTJkZWM1MWQyOCIsImV4cCI6MTc2NjYzNjY2MiwianRpIjoiNDg0NTlmNGNjZDIwNDY0ZmIyZTQ5NzQ3MzdlYzQ4ZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GRMk68oo74L9m2rBVDKzUjLDIt5n0fuDLiJmFGq1V1A)

## Leading indicator

It is required for a performance obligation to have one leading line, which determines the revenue and cost release for the performance obligation. If there is only one condition line defined in a consolidated POB condition, you must toggle this switch to Yes . If there is more than one condition line defined, you can select only one line as the leading line.

If multiple transaction lines meet the criteria of the leading condition line, Zuora Revenue will randomly select one of them to be the leading line.

## Example

The following transaction lines are used as an example to explain how consolidated POB lines can be formed based on the POB assignment rule. Other irrelevant fields of the transaction lines are ignored for simplification.

| SO Line ID | Product Category | PO Number |
| --- | --- | --- |
| 100123.1 | HW | PO120 |
| 100124.1 | HW | PO130 |
| 100125.1 | SW | PO120 |
| 100126.1 | SW | PO140 |
| 100127.1 | SW | PO120 |
| 100128.1 | HW | PO140 |
| 100129.1 | HW | PO130 |
| 100130.1 | SW | PO120 |
| 100131.1 | HW | PO150 |
| 100132.1 | HW | PO130 |

In the POB assignment rule, PO Number is selected as the grouping identifier. Two conditions lines are created for hardware (Product Category = HW) and software (Product Category = SW). Both lines are mandatory. The Product Category field is selected as the consolidate identifier for both condition lines. The hardware condition line is selected as the leading line.

Figure 1.

![consolidate-pob-base.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dda9d152-0e80-4634-b1a8-d89fdcabe9c2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRkYTlkMTUyLTBlODAtNDYzNC1iMWE4LWQ4OWZkY2FiZTljMiIsImV4cCI6MTc2NjYzNjY2MiwianRpIjoiNGI5YzM1YzBhNGEwNDhjOGIwNGIyMzgyOTI1ZmZiMTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zuk5TaJSbNnr3ye7HYfs9rCSokr4cTiZIGkyHzqEMMY)

When these transaction lines are processed in Zuora Revenue, they will be grouped based on the PO Number field as follows:

| Group | SO Line ID | Product Category | PO Number |
| --- | --- | --- | --- |

| Group 1 | 100123.1 | HW | PO120 |
| --- | --- | --- | --- |
| 100125.1 | SW | PO120 |  |
| 100127.1 | SW | PO120 |  |
| 100130.1 | SW | PO120 |  |
| Group 2 | 100124.1 | HW | PO130 |
| 100129.1 | HW | PO130 |  |
| 100132.1 | HW | PO130 |  |
| Group 3 | 100126.1 | SW | PO140 |
| 100128.1 | HW | PO140 |  |
| Group 4 | 100131.1 | HW | PO150 |

Group 2 and Group 4 cannot form the POB based on the condition that is defined because the mandatory software line does not exist. Zuora Revenue will check other POB assignment rules in the sequence as listed in [Define POB assignment rules](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules). If no assignment rule is satisfied, these lines will form an Auto POB. Group 1 and Group 3 can form the consolidated POB line because both hardware and software lines exist in the group.

In Group 1, there are three software lines. Based on the POB assignment rule, they should be consolidated based on the Product Category field. Because they have the same value for the Consolidate Identifier field, they will all belong to the same consolidated POB. There is only one hardware line in the consolidated POB so this line will be the leading line. If there is more than one hardware line in Group 1, Zuora Revenue will randomly pick up one hardware line as the leading line.

If Consolidate is toggled to No for the software line in the POB assignment rule, one software line in Group 1 will be randomly picked up to form the consolidated POB line along with the hardware line.

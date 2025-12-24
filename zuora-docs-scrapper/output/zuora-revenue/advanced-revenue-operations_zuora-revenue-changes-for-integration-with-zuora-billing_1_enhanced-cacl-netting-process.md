---
title: "Enhanced CA/CL netting process"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing_1/enhanced-cacl-netting-process"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:41.532Z"
---

# Enhanced CA/CL netting process

This article details the enhancements to the CA/CL netting process in Zuora Revenue, focusing on handling negative charge lines to accurately determine contract asset or liability positions.

In Zuora Billing and Zuora Revenue integration scenarios, both regular and discount charges are collected by Zuora Revenue as separate sales order (SO) lines in a revenue contract (RC), which might result in the incorrect determination of the contract asset or contract liability (CA/CL) position during the normal CA/CL netting process. For example, a large negative value on a discount charge line might put the whole RC in the CA position, which is expected to be the CL position.

To correctly determine the CA/CL position for a revenue contract, the CA/CL netting process is enhanced to better handle the charge line with negative values in a revenue contract.

This article explains only the enhancement to the normal netting process in Zuora Revenue. Compared with the normal CA/CL netting process, the major change in the enhanced netting process is how to determine the CA/CL position for the whole RC. As for creating netting entries either at the transaction line level or at the application level, this is the same as the normal CA/CL netting process.

For information about the common usage of the netting functionality in Zuora Revenue, see [Netting process](/zuora-revenue/advanced-revenue-operations/contract-asset-netting).

## Determine CA/CL position

The enhanced CA/CL netting process starts with checking the billed amount and revenue recognized to date for each line in the whole RC. Based on whether there is a negative value in the RC, different steps are performed as follows:

-   If all the line-level billed amount and revenue recognized to date are positive values in the whole RC, Zuora Revenue performs the following steps to determine the CA/CL position for the RC:
    1.  Calculate the actual CA/CL balance at the RC level based on the following formula:

        Actual CA/CL Balance = Total Billed Amount - Total Revenue to Date

    2.  Use the actual CA/CL balance at the RC level to determine the CA/CL position for the whole RC. If the balance is positive, the RC is in the CL position; otherwise, it is in the CA position.
-   If any of the line-level billed amount and revenue recognized to date is negative, Zuora Revenue performs the following steps to determine the CA/CL position for the RC:

1.  Consider the line-level negative billed amount and/or revenue recognized to date as positive values.
2.  Calculate the line-level CA/CL balance based on all positive values. This value is indicated by the CA/CL Determination Amount column in the UI.

    CA/CL Determination Amount = Positive Billed Amount - Positive Revenue to Date

    CA/CL Determination Amount is used only to determine the CA/CL position for the RC in the next step. It does not reflect the actual balance. When all the lines in the RC are negative, the system considers that as a CL position.
3.  Calculate the RC-level CA/CL Determination Amount by summing up the line-level values.
4.  Use the RC level CA/CL Determination Amount to determine the CA/CL position for the whole RC.

After the CA/CL position is determined for the whole RC, the actual CA/CL balance will be used to create netting entries for each line if necessary. The CA/CL Determination Amount column is available in the RC Rollforward Report to help you understand the decision points.

## Netting examples

Several examples are provided to help you understand how to determine the CA/CL position during the enhanced CA/CL netting process. In the following examples, there are three charge lines in the revenue contract. The current open period is Apr-2019.

Example 1

## Example 1

In this example, the C-00004 charge line has been completely billed and the other two lines have been billed for 4 months until April 2019.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/48fe454a-234b-4351-8c23-178cb8c3cc6b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ4ZmU0NTRhLTIzNGItNDM1MS04YzIzLTE3OGNiOGMzY2M2YiIsImV4cCI6MTc2NjYzNzc1OSwianRpIjoiNzRlZjYzMGMwN2RlNDNlZDk3ZmI4NTUzYzJjYjkyZWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.k_r__7AhDENuSVJDAj1LtIIb9qLsCcyUsELUJFsUmRI)

The line-level negative values are considered as positive values to calculate the line-level CA/CL Determination Amount. The sum of the line-level CA/CL Determination Amount values is 973.3333334 so the RC is in CL position.

| C-00001 | 400 | 73.3333333 | 400 | 73.3333333 | 326.6666667 |  |
| --- | --- | --- | --- | --- | --- | --- |
| C-00002 | 266.6666667 | 306.6666667 | 266.6666667 | 306.6666667 | -40 |  |
| C-00004 | -1000 | -313.3333333 | 1000 | 313.3333333 | 686.6666667 |  |
|  |  |  | 1666.666667 | 693.3333333 | 973.3333334 | CL |

After the CA/CL position is determined for the whole RC, the actual CA/CL balance will be used to create netting entries if necessary.

## Example 2

In this example, all three lines have been billed and recognized for 4 months.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d31aa80b-4526-4933-9b75-707528f85b92?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQzMWFhODBiLTQ1MjYtNDkzMy05Yjc1LTcwNzUyOGY4NWI5MiIsImV4cCI6MTc2NjYzNzc1OSwianRpIjoiOWFiMmQ0NDU0NGIxNGEyYThkMTk4OWZmOTAwNjRiMjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Zj7bffO7YZ_3Z_amIVR9PzSIXnYwBGIzveFlDFwPFUI)

The line-level negative values are considered as positive values to calculate the line-level CA/CL Determination Amount. The sum of the line-level CA/CL Determination Amount values is 16.6666667 so the RC is in CL position.

| C-00001 | 666.6666667 | 655 | 666.6666667 | 655 | 11.6666667 |  |
| --- | --- | --- | --- | --- | --- | --- |
| C-00002 | 133.3333333 | 141.6666667 | 133.3333333 | 141.6666667 | -8.3333333 |  |
| C-00004 | -1000 | -986.6666667 | 1000 | 986.6666667 | 13.3333333 |  |
|  |  |  | 1800 | 178.333333 | 16.6666667 | CL |

After the CA/CL position is determined for the whole RC, the actual CA/CL balance will be used to create netting entries if necessary.

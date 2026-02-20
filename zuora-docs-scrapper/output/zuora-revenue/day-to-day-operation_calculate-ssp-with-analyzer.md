---
title: "Calculate SSP with Analyzer"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/calculate-ssp-with-analyzer"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:27.781Z"
---

# Calculate SSP with Analyzer

The SSP Analyzer in Zuora Revenue uses historical transaction data to determine the SSP for goods and services when direct upload is unavailable.

If the SSP is not available to be directly uploaded to Zuora Revenue, the SSP Analyzer is provided to use the historical transaction data that you uploaded to Zuora Revenue to determine the SSP for your goods and services.

## Overview

To set up the SSP Analyzer, you must complete the following configuration tasks in Zuora Revenue:

1.  Create an SSP Analyzer template.
2.  Create an SSP batch based on the SSP Analyzer template.
3.  If no historical transaction data exists in Zuora Revenue, upload the historical transaction data with File Upload.

After data collection is triggered for the SSP batch, the SSP Analyzer will perform the following steps for SSP analysis:

1.  Identify the eligible historical transactions for determining the SSP stratification based on the criteria defined in the SSP batch.
2.  Calculate the following values based on the calculation parameters that are specified in the SSP Analyzer template.
    -   Low Band SSP or Low Band SSP%
    -   High Band SSP or High Band SSP%
    -   Transaction Compliance Percentage

After SSP analysis completes and SSP is calculated, you can view the SSP stratification and the superuser can approve it to finalize the stratification.

## Before you begin

Before you perform the configuration steps to set up SSP Analyzer, it is recommended to get familiar with the following things:

-   The system-level value of the following profiles can influence the behavior of SSP Analyzer. Some of the profile values can override the values that you will specify in the SSP Analyzer template.
-   Understand how SSP or SSP% and Compliance Percentage are calculated with different calculation methods. So that you can make appropriate choices when you create the SSP Analyzer template.
-   Understand how SSP or SSP% and Compliance Percentage are calculated with different calculation methods. So that you can make appropriate choices when you create the SSP Analyzer template.

| Profile Name | Values | Description |
| --- | --- | --- |
| RECOMPLIANCE_CHECK | YESNO | Enables or disables the re-compliance check operation on the analyzed data. |
| OPTIMIZER_SCALE | FULLOPTIMIZED | Full: Zuora Revenue scans all transactions to derive the optimized value.Optimized: Zuora Revenue scans the transactions in an incremental manner as determined by the Optimizer range. |
| TOL_CALC_TYPE | ABSOLUTEPERCENT | Specifies whether SSP analysis of the midpoint value is based on amount or percent.This profile value can override the value in the SSP Analyzer template. |
| TOL_CALC_ON | SSPDISC_PCT | Specifies whether SSP analysis is based on Discount% or SSP percent.This profile value can override the value in SSP Analyzer template. |
| SSP_GROUP_EDIT | YESNO | Specifies whether the SSP stratification group, which is created as part of SSP analysis, is editable or not. |
| SSP_DETAIL_EDIT | YESNO | Specifies whether the SSP transactions that are considered for creating SSP stratification group are editable or not. |
| MIN_SSP_TRANS_COUNT | An integer | Specifies the minimum number of transactions to be considered for performing SSP analysis in a specific group. |
| ENABLE_MULTI_PEAK_CALC | YESNO | Enables or disables calculating the average between two peaks when more than one buckets are identified by the SSP analyzer. |

Understand how SSP or SSP% and Compliance Percentage are calculated with different calculation methods. So that you can make appropriate choices when you create the SSP Analyzer template.

## Procedure

Complete the following major steps to derive SSP with the SSP Analyzer:

1.  [Create an SSP Analyzer template](#concept-6ckdq2lu__title-120).
2.  [Create an SSP batch based on the Analyzer template](#concept-6ckdq2lu__title-211).
3.  [Start the SSP analysis](#concept-6ckdq2lu__title-282).
4.  [Review and approve the SSP stratification](#concept-6ckdq2lu__title-239).

## Create an SSP analyzer template

To create an SSP Analyzer Template, complete the following steps:

1.  Navigate to SSP > Analyzer.
2.  In the SSP Analyzer left pane, click the add icon (+). to add a template.
3.  In the New SSP Template window, enter the required fields and click the save icon.

    | Required field name | Description |
    | --- | --- |
    | Template Name | A unique name of this SSP Analyzer template. |
    | SSP Type | Select SSP. |
    | Value Type | Specifies whether the SSP calculation is based on amount or on percent. |
    | Start Date | The start effective date of this template. |
    | SSP Source | The source data view |
    | SSP Calculation Type | Specifies the SSP calculation types. For details about each calculation types, see Calculation Methods of SSP Analyzer. |
    | Rounding | An integer value of the rounding to the nearest decimal. |
    | Optimizer Scale | The scale increment to build test buckets for the Optimizer method, for example, 0.5.The specified value determines the accuracy of the SSP analysis. The smaller number you specify, the more accurate the result will be. However, a smaller number also increases the calculation difficulty for the Analyzer.This field is required only for the two Optimizer SSP calculation types. |

4.  Ensure that the Enabled switch is toggled to Yes.
5.  Specify other optional fields on the SSP Definition tab as necessary and click the save icon.

    | Optional Field Name | Description |
    | --- | --- |
    | Template Description | A short description of this template. |
    | End Date | The end effective date of the template. |
    | Low/Floor% | An integer to specify the Lowest range of the SSP value. |
    | High/Ceiling% | An integer to specify the Highest range of the SSP value. |
    | Compliance% | An integer to specify the percentage of transactions that are within the SSP/SSP% range and are compliant. |
    | SSP Band Calc Type: | Specifies whether the SSP band is calculated based on absolute value or percentage. |
    | SSP Band Calc On | Specifies whether the SSP band is calculated based on price or discount percentage. |

6.  (Optional): To determine the transactions that are eligible for SSP analysis, in the Group By section on the SSP Definition tab, select the fields that you want to use as grouping criteria and click . The stratification is uploaded based on the combination of the selected fields.
7.  (Optional): To filter out the specific transactions for SSP analysis, click the Filters tab and do the following:
    1.  Click the add icon (+) to add one filter rule.
    2.  Select the field name and operator, and enter the operand.
    3.  Add as many filter rules as needed.
    4.  Ensure the Enabled checkbox is selected for the rule to be effective.
    5.  Click the save icon.
8.  (Optional): To add the columns that you want to display when you review the transactions that are processed by an SSP batch, click the Columns tab. Make your selection and click the save icon . The selected fields will be displayed in addition to the default fields for the transaction.

## Create an SSP batch

After an SSP Analyzer template is created, you can create an SSP batch based on the template. After that, the transaction data can be collected for the batch and analyzed to derive SSP.

1.  Navigate to SSP > Analyzer.
2.  In the SSP Analyzer left pane, click the template based on which you want to create an SSP Batch and click the add icon (+).
3.  In the New SSP Batch window, specify the following required fields and click the save icon.

    | Required Field Name | Description |
    | --- | --- |
    | Batch Name | A unique name of this SSP batch for which the stratification will be analyzed. |
    | Start Date | The start effective date of this batch. |
    | End Date | The end effective date of this batch. |
    | Rounding | An integer value of the rounding to the nearest decimal. |

4.  Specify the following optional fields in this SSP batch and click the save icon. Values specified in the SSP Analyzer template are automatically populated here. You can modify the value if you want.

    | Optional Field Name | Description |
    | --- | --- |
    | Low/Floor% | An integer to specify the Lowest range of the SSP value. |
    | High/Ceiling% | An integer to specify the Highest range of the SSP value. |
    | Compliance% | An integer to specify the percentage of transactions that are within the SSP/SSP% range and are compliant. |
    | Optimizer Scale | The scale increment to build test buckets for the Optimizer method, for example, 0.5. |
    | SSP Band Calc Type: | Specifies whether the SSP band is calculated based on absolute value or percentage. |
    | SSP Band Calc On | Specifies whether the SSP band is calculated based on price or discount percentage. |
    | Note: If the Optimizer Scale, SSP Band Calc Type, or SSP Band Calc On value is already specified in the SSP Analyzer template, you cannot modify the value in the SSP batch. To change their values, edit the values in the SSP Analyzer template. |  |

5.  (Optional): To filter out the specific transactions to be processed in this batch, click the Filters tab and do the following:

    2.  Click the add icon (+) to add one filter rule.
    3.  Select the field name and operator, and enter the operand.
    4.  Add as many filter rules as needed.
    5.  Ensure the Enabled checkbox is selected for the rule to be effective.
    6.  Click the save icon..

After the SSP batch is created, the Batch Status column value changes to NEW to indicate this is a newly created SSP batch.

## Start SSP Analysis

After the SSP batch is created, you can let the SSP Analyzer collect historical transaction data for the batch and then do SSP analysis.

1.  Navigate to SSP > Analyzer.
2.  In the SSP Analyzer left pane, click the template based on which the SSP batch was created. The SSP batches that are created based on the selected template are displayed on the right.
3.  Click the SSP batch for which you want to the SSP Analyzer to collect data and then click the Collect Data icon (shop cart icon) .
4.  Click OK to confirm your selection. The Analyzer starts to collect the historical transactions that are uploaded or available in the system. After it completes, the Batch Status column value changes to DATA COLLECTED.
5.  On the SSP batch line, click the View Transactions icon . The Transactions window is displayed listing all the historical transactions collected in this batch. The In Compliance column indicates whether the transaction is within the SSP or SSP% range.
6.  (Optional): To exclude one or more transactions from the SSP calculation, clear the checkbox in the Include In Calculation column. In the Comments window, provide the reason for exclusion comments and click Save.
7.  To do the compliance check, click the Compliance icon (gift wrap icon).
    Note: If you excluded or included any transactions from the SSP calculation and want to do SSP analysis again, click the Re-compliance icon.

8.  Click OK to confirm your selection.

After SSP analysis is completed, the Batch Status column value changes to SSP CALCULATED.

## Review and approve SSP stratification

After the SSP is calculated for the SSP batch,

-   To view the SSP stratification, which is generated as part of the analysis, select the SSP batch and click the View Stratification icon . The Stratification window is displayed listing all the groups of transactions that are collected in this batch. The number of transactions and the number of compliant transactions for each group are also listed. You can view transactions for each selected group by clicking the View Transactions icon (grid icon).
-   If you exclude or include any transactions for this SSP batch, to do the SSP analysis again, click the Re-Compliance icon (paper icon).
-   (Super user only) To finalize the SSP stratification, click the Approve icon (check mark) . After it is approved, no more changes to perform SSP analysis are allowed for the batch.
-   If you choose Optimizer as the calculation type, you can do the following on the Stratification page:
    -   View optimization graph
    -   View optimization chart
    -   Review and approve each peak for the multi-peak stratification

## What to do next

Optionally, you can assign the defined SSP Analyzer template to an existing RC grouping template. So that the SSP rules can be applied to the related revenue contracts. To do it, edit the RC grouping template and select this SSP template in the SSP Hierarchy tab.

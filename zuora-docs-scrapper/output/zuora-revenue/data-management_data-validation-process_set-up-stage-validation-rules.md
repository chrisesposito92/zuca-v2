---
title: "Set up stage validation rules"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-validation-process/set-up-stage-validation-rules"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:23.701Z"
---

# Set up stage validation rules

Learn how to configure stage validation rules in Zuora Revenue to complement predefined rules and validate source data according to your business logic.

Setting up stage validation rules is an optional configuration in Zuora Revenue. The customized validation rules can be considered as a complement to the predefined validation rules, which can help validate the source data according to your own business logic.

## Overview

The following types of stage validation rules can be created in Zuora Revenue:

| Rule type | Purpose |
| --- | --- |
| Advanced Rule | Validate certain fields against specific values and display the selected error message if data validation fails.For example, you can create an advanced rule to check whether the SO Line ID is null for the line of INV type. |
| Expression | Validate the source data based on an expression and display the selected error message if validation fails.For example, you can create an expression rule to check the source data contains invalid field values. |
| Lookup | Validate the source data based on a combination of reference fields and target fields.For example, you can specify one reference field and its reference value, and one target field and its target value. If the reference field of a transaction line is found to be specified reference value, validate the value of the target field. If the value of the target field is found to be the specified target value, the selected error message will be displayed. |

## Before you begin

As part of the validation rule configuration, you need to specify the error codes and message to be displayed for each validation rule. To define your own error codes and error messages, complete the following steps:

1.  Navigate to Setups > Application.
2.  Click the left pointing arrow icon to open the side menu and then click Error Setup.
3.  In the Type field, select Custom and then click the '+' icon . A new row is added.
4.  Select Stage Validation or Generic as the error type in the Error Type column. The error code is automatically assigned by the system with a prefix of CUST.
5.  In the Error Message column, type the error message that you want to display and then click .

Note: Please avoid using the prefix 'RPRO' when defining your error codes/messages. RPRO is not allowed as it is used for system errors.
.

## Procedure

1.  Navigate to Setups > Stage Validation.
2.  To create a stage validation rule, click the New Rule icon (+) . The New Stage Validation Rule window is displayed.
3.  Provide the following required information of the rule:
    -   Book Name: Select the accounting book to which this rule is applied.
    -   Rule Name: Specify a unique name for the rule.
    -   Sequence: Specify the sequence in which all the defined rules are to be applied when source data is uploaded.
    -   Start Date: Specify the effective start date of the rule.
4.  Click the save icon. The stage validation rule is added.
5.  In the Conditions tab, to add a validation condition, click the '+' icon to add a row, and then complete the following steps depending on your selection in the Rule Type column:
    | Rule Type | Substeps | Seq | Field Name | Operator | Operand | Seq | Expression | Operator | Operand |  |  |  |  |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Advanced Rule | In the Rule Type column, select Advanced Rule.Click the right pointing arrow icon in the Actions column. The Advanced Rule window is displayed.In the Advance Rule Set section, click the '+' icon to add a row.Specify a meaningful name that can help you identify the error in the Set Name column and then click the right pointing arrow icon in the Actions column. The Error Message window is displayed.Use the Type field to switch between predefined errors and customized messages, click one error message, and then close the window.Note: Do not use standard error messages for customized stage validations to avoid system migration issues.Click to save this rule set.In the Advance Rule Filters section, click the '+' icon to add a row.Specify the criteria for the error message to be displayed. For example, the following filter criteria check the Sales Order Line ID for the invoice lines. If the Sales Order Line ID is not provided, the selected error message in the Advance Rule Set section will be displayed.SeqField NameOperatorOperand1Sales Order Line IDIS NULL2Line Type='INV'Click the save icon to save the criteria.Repeat Step c ~ i to as many rule sets as you need and then close the Advanced Rule window.In the New Stage Validation Rule window, specify the effective start date of this rule type in the Start Date column.(Optional): Specify the effective end date in the End Date column.Ensure this rule is enabled in the Enabled column.When a line satisfies the criteria, the selected error message will be displayed. | Seq | Field Name | Operator | Operand | 1 | Sales Order Line ID | IS NULL |  | 2 | Line Type | = | 'INV' |
    | Seq | Field Name | Operator | Operand |  |  |  |  |  |  |  |  |  |  |
    | 1 | Sales Order Line ID | IS NULL |  |  |  |  |  |  |  |  |  |  |  |
    | 2 | Line Type | = | 'INV' |  |  |  |  |  |  |  |  |  |  |
    | Expression | Select Expression for the Rule Type column.Click the right pointing arrow icon in the Actions column. The Expression window is displayed.In the Expression Set section, click the '+' icon to add a row.Specify a meaningful name that can help you identify the error in the Set Name column and then click the right pointing arrow in the Actions column. The Error Message window is displayed.Use the Type field to switch between predefined errors and customized messages, click one error message, and then close the window.Note:Do not use standard error messages for customized stage validations to avoid system migration issues.Click the save icon to save this rule set.In the Filters section, click the '+' icon to add a row.To add an expression, click the right pointing arrow in the Formula column, specify the expression in the Formulae window, and then close the window. The formula is displayed in the Expression column.Specify the appropriate operator and operand for the criteria. To specify multiple operand values, select IN as the operator and then click the right pointing arrow in the Actions column to add the operand values. For example, the following filter criteria check the Impairment Type filed contains invalid values, the selected error message will be displayed.SeqExpressionOperatorOperand1NVL(Impairment Type,'N ew POB')NOT IN('Contract Impairment','New POB')2Line Type='RORD'Click the save icon to save the criteria.Repeat steps c ~ j to create as many expression rule sets as you need, and then close the Expression window.In the New Stage Validation Rule window, specify the effective start date of this rule type in the Start Date column.(Optional): Specify the effective end date in the End Date column.Ensure this rule is enabled in the Enabled column.When source data is calculated based on the expression and satisfies the criteria, the selected error message will be displayed. | Seq | Expression | Operator | Operand | 1 | NVL(Impairment Type,'N ew POB') | NOT IN | ('Contract Impairment','New POB') | 2 | Line Type | = | 'RORD' |
    | Seq | Expression | Operator | Operand |  |  |  |  |  |  |  |  |  |  |
    | 1 | NVL(Impairment Type,'N ew POB') | NOT IN | ('Contract Impairment','New POB') |  |  |  |  |  |  |  |  |  |  |
    | 2 | Line Type | = | 'RORD' |  |  |  |  |  |  |  |  |  |  |
    | Lookup | Select Lookup for the Rule Type column.Select the lookup type in the Lookup Type column. To create a new lookup definition, select New_Look.Click in the Actions column to specify the lookup. The Lookup window is displayed.If you are creating a new lookup, specify the lookup name in the Lookup Type Name field.In the upper half of the window, click to add a row.Provide a unique name in the Name column.Specify at least one lookup field name in the Reference Field column and one filed name in the Target Field column. You can specify up to 5 reference fields and 5 target fields.Click in the upper half of the window.In the Lookup Values section, specify the values for the lookup fields in the Reference Value and Target Value columns respectively. If the reference field of a line is found to be the specified reference value, check the value of the target field. If the value of the target field is the same as the specified target value, the criteria are satisfied.Click the save icon to save your settings.Repeat Step c ~ j to create as many lookup rule sets as you need, and then close the window.In the New Stage Validation window, specify the effective start date of this rule type in the Start Date column.(Optional): Specify the effective end date in the End Date column.Ensure this rule is enabled in the Enabled column. |  |  |  |  |  |  |  |  |  |  |  |  |

6.  Add as many conditions as you need in the Conditions tab and click the save icon to save them.
7.  (Optional): To define simple filters that are to be applied for all the defined conditions, click the Filters tab and specify the field name, operator, and operands. The validation rules are applied to the filtered transactions only.
8.  After you are finished, click the save icon and close the window.

## Result

When the source data is uploaded to Zuora Revenue, it is validated against all the enabled validation rules in the staging tables. If all the validations succeed, the source data will be picked up by the subsequent data collection process. Otherwise, the problematic transaction data remain in the staging tables and cannot be picked up by the data collection process. Use the displayed error codes and messages to fix the source data and then upload them again.

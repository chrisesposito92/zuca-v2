---
title: "Stage validation rules"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-validation-process/stage-validation-rules"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:05.034Z"
---

# Stage validation rules

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

The procedure to create stage validation rules are provided [here](/zuora-revenue/data-management/data-validation-process/stage-validation-rules/create-stage-validation-rules).

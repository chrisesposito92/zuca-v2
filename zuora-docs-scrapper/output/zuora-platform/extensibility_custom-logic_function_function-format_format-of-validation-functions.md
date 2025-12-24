---
title: "Format of validation functions"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/function-format/format-of-validation-functions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:56.760Z"
---

# Format of validation functions

Describes the format of validation functions, such as function syntax, parameters, and return values.

You can use validation functions to define validation rules on object fields to ensure data accuracy and consistency.

Zuora calls validation functions on the creation or update of a specific object record and uses the record as the only parameter.

The fields that can be used in validation functions vary depending on the object type. For more information, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

## Syntax

((object\_record) => { //JavaScript code(validation rules) })(object\_record)

## Parameters

The function takes one parameter `object_record`. This parameter is required and the parameter name is not editable. The parameter name varies depending on the related object type.

The following table lists the parameter names for some common standard and custom objects:

| Object name | Parameter name |
| --- | --- |
| Account | account |
| Product | product |
| Vehicle (custom object) | default__vehicle |

When a function is called, Zuora provides the context object record as the input value. For example, if the function is called during the creation of an account object record, the parameter name is `account`, which refers to this specific account object record.

## Return value

The return value is an object of the following format:

{ success: boolean, message?: string }
| Key | Required | Value format | Description |
| --- | --- | --- | --- |
| success | Yes | Boolean | Indicating the running result of the function:true: The data evaluation succeeded. Zuora will create or update the object record.false: The data evaluation failed. Zuora will not create or update the object record. |
| message | No | String | The message displayed when the data evaluation fails. |

## Example

((account) => { if (account.Country\_\_c === 'United States' && !account.BillingState\_\_c) { return { success: false, message: "Billing State is required for accounts in the United States." }; } return { success: true }; })(account);

In this example, the function checks whether the `BillingState__c` custom field is specified when the value in the `Country__c` custom field is `United States`.

If `success` is `true` in the returned object, Zuora will create or update the account object record by using the data from `account`. If `success` is `false`, Zuora will display the following error message and not create or update the account object record.

`Billing State is required for accounts in the United States.`

With the help of this validation function, you can ensure the `BillingState__c` custom field is conditionally required every time an account object record is created or updated.

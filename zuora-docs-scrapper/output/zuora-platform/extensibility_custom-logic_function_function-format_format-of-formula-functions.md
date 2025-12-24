---
title: "Format of formula functions"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/function-format/format-of-formula-functions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:59.034Z"
---

# Format of formula functions

Describes the format of formula functions, such as function syntax, parameters, and return values.

You can use formula functions to automate calculations and update object fields.

Zuora calls formula functions on the creation or update of a specific object record and uses the record as the only parameter.

The fields that can be used in formula functions vary depending on the object type. For more information, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

## Syntax

((object\_record) => { //JavaScript code(calculations) })(object\_record)

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

{ success: boolean, message?: string, data?: object }
| Key | Required | Value format | Description |
| --- | --- | --- | --- |
| success | Yes | Boolean | Indicating the running result of the function:true : The data calculation succeeded. Zuora will create or update the object record.false : The data calculation failed. Zuora will not create or update the object record. |
| message | No | String | The message displayed when the data calculation fails. |
| data | No | Object | The updated fields in the format of key-value pairs. For example:{ Year__c: 2023, Country__c: 'United States' }This attribute is available only if success is true.Zuora ignores the fields that do not exist on the object. |

## Example

((default\_\_vehicle) => { const purchaseAmount = default\_\_vehicle.PurchaseAmount\_\_c; const taxRate = default\_\_vehicle.TaxRate\_\_c; const salesTax = purchaseAmount \* taxRate; return { success: true, message: "The sales tax is updated.", data: { SalesTax\_\_c: salesTax } }; })(default\_\_vehicle)

In this example, the function multiplies the purchase amount in the `PurchaseAmount__c` custom field by the tax rate in the `TaxRate__c` custom field, and then updates the `SalesTax__c` custom field with the calculation result.

With the help of this formula function, you can automate sales tax calculations every time a vehicle object record is created or updated without the need to calculate it manually.

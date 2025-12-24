---
title: "Formula function use cases"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/use-cases-and-code-samples/formula-function-use-cases"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:19.649Z"
---

# Formula function use cases

Common use cases and code samples of formula function.

## Calculate tax due

The following code sample updates the `SalesTax__c` field with the value of multiplying the purchase amount in the `PurchaseAmount__c` field by the tax rate in the `TaxRate__c` field.

((default\_\_vehicle) => { const purchaseAmount = default\_\_vehicle.PurchaseAmount\_\_c; const taxRate = default\_\_vehicle.TaxRate\_\_c; const salesTax = purchaseAmount \* taxRate; return { success: true, message: "The sales tax is updated.", data: { SalesTax\_\_c: salesTax } }; })(default\_\_vehicle);

## Calculate total production cost

The following code sample updates the `Total_Production_Cost__c` field with the sum of values in the `Materials_Cost__c`, `Labor_Cost__c`, and `Overhead_Cost__c` fields.

((default\_\_manufacturing) => { const materialsCost = default\_\_manufacturing.Materials\_Cost\_\_c, const laborCost = default\_\_manufacturing.Labor\_Cost\_\_c, const overheadCost = default\_\_manufacturing.Overhead\_Cost\_\_c, const totalProductionCost = materialsCost + laborCost + overheadCost; return { success: true, message: "The total production cost is updated", data: { Total\_Production\_Cost\_\_c: totalProductionCost } }; })(default\_\_manufacturing);

## Copy a custom field value from a related object

The following code sample sets the `AdditionalInfo__c` field on the Subscription Rate Plan Charge object using the value from the `CustomField__c` field on the related Product Rate Plan Charge object.

((rateplancharge) => { let productRatePlanCharge = rateplancharge.ProductRatePlanCharge; let result = { success: true }; if (productRatePlanCharge.CustomField\_\_c !== null) { result = { ...result, data: { AdditionalInfo\_\_c: productRatePlanCharge.CustomField\_\_c } }; } return result; })(rateplancharge);

This use case demonstrates how to access fields on joined objects related to a function's base object. For more information about object relationships, see [Zuora business object model](/basics/about-zuora/zuora-business-object-model).

It is recommended to use [Zuroa Workflow](/zuora-platform/extensibility/workflow/workflow-overview) for use cases that require referencing objects not related to the base object or traversing multiple objects, such as multi-step operations.

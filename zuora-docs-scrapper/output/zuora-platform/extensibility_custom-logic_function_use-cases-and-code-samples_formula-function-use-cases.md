---
title: "Formula function use cases"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/function/use-cases-and-code-samples/formula-function-use-cases"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:38.850Z"
---

# Formula function use cases

Common use cases and code samples of formula function.

## Calculate tax due

The following code sample updates the `SalesTax__c` field with the value of multiplying the purchase amount in the `PurchaseAmount__c` field by the tax rate in the `TaxRate__c` field.

((default\_\_vehicle) => { const purchaseAmount = default\_\_vehicle.PurchaseAmount\_\_c; const taxRate = default\_\_vehicle.TaxRate\_\_c; const salesTax = purchaseAmount \* taxRate; return { success: true, message: "The sales tax is updated.", data: { SalesTax\_\_c: salesTax } }; })(default\_\_vehicle);

## Calculate total production cost

The following code sample updates the `Total_Production_Cost__c` field with the sum of values in the `Materials_Cost__c`, `Labor_Cost__c`, and `Overhead_Cost__c` fields.

((default\_\_manufacturing) => { const materialsCost = default\_\_manufacturing.Materials\_Cost\_\_c, const laborCost = default\_\_manufacturing.Labor\_Cost\_\_c, const overheadCost = default\_\_manufacturing.Overhead\_Cost\_\_c, const totalProductionCost = materialsCost + laborCost + overheadCost; return { success: true, message: "The total production cost is updated", data: { Total\_Production\_Cost\_\_c: totalProductionCost } }; })(default\_\_manufacturing);

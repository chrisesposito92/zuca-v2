---
title: "Order Line Items Object Model"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-object-model"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:24.223Z"
---

# Order Line Items Object Model

Order Line Items are non-subscription transactions that can occur on any account, with detailed field mapping provided.

Order Line Item are non-subscription transactions that may occur on any account.

Field Mapping

| Zuora Field Name | Zuora Field Type | SFDC Field Name | SFDC Field Type |
| --- | --- | --- | --- |
| Id | string | External_Id__c | string |
| CreatedDate | Datetime | CreatedDate__c | datetime |
| UpdatedDate | Datetime | UpdatedDate__c | datetime |
| AccountingCode | string | AccountingCode__c | string |
| BillTargetDate | date | BillTargetDate__c | date |
| Currency | string | Currency__c | string |
| Currency | string | _currency | string |
| PaymentTerm | string |  |  |
| AmountPerUnit | decimal | AmountPerUnit__c | currency(16,2) |
| Description | string | Description | string |
| Amount | decimal | Amount__c | currency(16,2) |
| AmountWithoutTax | decimal | AmountWithoutTax__c | currency(16,2) |
| InvoiceGroupNumber | string | InvoiceGroupNumber__c |  |
| ItemName | string |  |  |
| ItemNumber | string | ItemNumber__c |  |
| ItemState | string | ItemState__c |  |
| ListPricePerUnit | decimal | ListPricePerUnit__c | currency(16,2) |
| ListPrice | decimal | ListPrice__c | currency(16,2) |
| ProductCode | sting | ProductCode__c | string |
| PurchaseOrderNumber | string | PurchaseOrderNumber__c | string |
| Quantity | decimal | Quantity__c | number(15,3) |
| RevenueRecognitionRule | string | RevenueRecognitionRule | string |
| ProductRatePlanChargeId | string |  |  |
| TaxCode | string | TaxCode__c | string |
| TaxMode | string | TaxMode__c | string |
| TransactionDate | date | TransactionDate__c | date |
| UOM | string |  |  |
| deleted | boolean | deleted | boolean |

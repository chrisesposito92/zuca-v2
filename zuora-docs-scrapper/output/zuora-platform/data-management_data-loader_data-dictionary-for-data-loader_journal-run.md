---
title: "Journal run"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/journal-run"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:13.875Z"
---

# Journal run

This reference document lists the fields associated with the Journal runs data dictionary..

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Create | Description |
| --- | --- | --- | --- | --- |
| Journal Run | IsNewJournalRun | TRUE or FALSE | Required when creating new Journal Run,Enter the value as 'True' if applicable; otherwise the value as FALSE the cell can be left blank | Indicator Column marking the start of a new object |
| Journal Run | Journal Entry Date* | STRING <date> | Required when creating a Journal Run | Date of the journal entry. |
| Journal Run | Accounting Period Name | STRING | Optional | Name of the accounting period. This field determines the target start and end dates of the journal run. Required if you do not include targetStartDate and targetEndDate. |
| Journal Run | Target End Date | STRING <date> | Optional | The target end date of the journal run. If you include accountingPeriodName, the targetEndDate must be empty or the same as the end date of the accounting period specified in accountingPeriodName. |
| Journal Run | Target Start Date | STRING <date> | Optional | The target start date of the journal run. Required if you include targetEndDate. If you include accountingPeriodName, the targetStartDate must be empty or the same as the start date of the accounting period specified in accountingPeriodName. |
| Journal Run>Organisation | IsNewOrganizationLabels | TRUE or FALSE | Required when creating new Journal Run for an Org applicable on Multi Org,Enter the value as 'True' if applicable; otherwise the value as FALSE the cell can be left blank | Indicator Column marking the start of a new object.The organization that this run is created for.For each item in the array, either the organizationId or the organizationName field is required.This field is only required when you have already turned on Multi-Org feature. |
| Journal Run>Organisation | Organization Labels Organization Id* | string | Required when adding Journal run to an Org | The organization ID. |
| Journal Run>Organisation | Organization Labels Organization Name* | string | Required when adding Journal run to an Org | The organization name. |
| Array of objects (transactionTypes) | IsNewTransactionTypes | TRUE or FALSE | Required when creating new transactiontypes in Journal Run,Enter the value as 'True' if applicable; otherwise the value as FALSE the cell can be left blank | Indicator Column marking the start of a new object |
| Journal Run>TransactionType | Transaction Types Type* | string | Required for adding transaction type on Journal Run | Enum: "Invoice Item" "Taxation Item" "Invoice Item Adjustment (Invoice)" "Invoice Item Adjustment (Tax)" "Invoice Adjustment" "Electronic Payment" "External Payment" "Electronic Refund" "External Refund" "Electronic Credit Balance Payment" "External Credit Balance Payment" "Electronic Credit Balance Refund" "External Credit Balance Refund" "Credit Balance Adjustment (Applied from Credit Balance)" "Credit Balance Adjustment (Transferred to Credit Balance)" "Revenue Event Item" "Debit Memo Item (Charge)" "Debit Memo Item (Tax)" "Credit Memo Item (Charge)" "Credit Memo Item (Tax)" "Credit Memo Application Item" "Electronic Payment Application" "External Payment Application" "Electronic Refund Application" "External Refund Application" "Electronic Payment Application Item" "External Payment Application Item" "Electronic Refund Application Item" "External Refund Application Item" |

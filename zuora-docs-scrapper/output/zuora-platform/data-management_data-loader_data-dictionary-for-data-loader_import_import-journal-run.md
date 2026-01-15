---
title: "Import journal run"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/import-journal-run"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:40.028Z"
---

# Import journal run

This reference document outlines the fields for importing Journal run data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewJournalRun | IsMarker Column : New object begins | TRUE or FALSE |
| Journal Entry Date* | Date of the journal entry. | string <date> |
| Accounting Period Name | Name of the accounting period. This field determines the target start and end dates of the journal run. Required if you do not include targetStartDate and targetEndDate. | string |
| Target End Date | The target end date of the journal run. If you include accountingPeriodName, the targetEndDate must be empty or the same as the end date of the accounting period specified in accountingPeriodName. | string <date> |
| Target Start Date | The target start date of the journal run. Required if you include targetEndDate. If you include accountingPeriodName, the targetStartDate must be empty or the same as the start date of the accounting period specified in accountingPeriodName. | string <date> |
| IsNewTransactionTypes | IsMarker Column : New object begins | TRUE or FALSE |
| Transaction Types Type* |  | string |

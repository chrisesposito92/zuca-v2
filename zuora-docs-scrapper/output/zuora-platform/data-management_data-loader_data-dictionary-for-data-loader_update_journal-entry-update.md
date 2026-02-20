---
title: "Journal entry update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/journal-entry-update"
product: "zuora-platform"
scraped_at: "2026-02-20T17:37:58.070Z"
---

# Journal entry update

This referece article lists all the fields associated with the with the Journal Runs data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Journal Entry | IsNewJournalEntry | TRUE or FALSE | This field is required when updating a Journal Entry. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object |
| Journal Entry | JE Number* | string | Required for updating | Journal entry number in the format JE-00000001. |
| Journal Entry | Notes | string | Optional | Additional information about this record. Character limit: 2,000 |
| Journal Entry | Transferred To Accounting | string | This field cannot be changed after the summary journal entry has been canceled. | Status shows whether the journal entry has been transferred to an accounting system.Note: The Zuora Finance Override Transferred to Accounting permission is required to change transferredToAccounting from Yes to any other value.Enum: "No" "Processing" "Yes" "Error" "Ignore" |
| Array of objects (journalEntryItems) | IsNewjournalEntryItem | TRUE or FALSE | This field is required when updating a Journal Entry Items. Enter "True" if applicable; otherwise, set the value to "False" or leave the cell blank. | Indicator Column marking the start of a new object Key name that represents the list of journal entry items. |
| Journal Entry>Journal Entry Items | Journal Entry Items Accounting Code Name* | string | Required when updating Journal Entry Item | Name of the accounting code. If the Journal Entry Item has a blank accounting code, enter the empty string. |
| Journal Entry>Journal Entry Items | Journal Entry Items Accounting Code Type | string | Optional | Accounting code type.Note: On-Account Receivable is only available if you enable the Invoice Settlement feature.Enum: "AccountsReceivable" "On-Account Receivable" "Cash" "OtherAssets" "CustomerCashOnAccount" "DeferredRevenue" "SalesTaxPayable" "OtherLiabilities" "SalesRevenue" "SalesDiscounts" "OtherRevenue" "OtherEquity" "BadDebt" "OtherExpenses" |
| Journal Entry>Journal Entry Items | Journal Entry Items Type | string | Required when updating Journal Entry Item | Type of journal entry item. Enum: "Credit" "Debit" |

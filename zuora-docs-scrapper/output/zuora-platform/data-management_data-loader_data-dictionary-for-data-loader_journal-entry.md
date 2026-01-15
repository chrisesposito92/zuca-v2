---
title: "Journal entry"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/journal-entry"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:14.084Z"
---

# Journal entry

This reference document lists the fields associated with the Journal Entry data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to create | Description |
| --- | --- | --- | --- | --- |
| Container of Journal Entry | IsNewJournalEntry | True or False | Required when creating new Journal Entry,Enter the value as 'True' if applicable; otherwise the value as FALSE the cell can be left blank | Indicator Column marking the start of a new object |
| Journal Entry | Accounting Period Name* | String | Required for creating Journal Entry | Name of the accounting period. The open-ended accounting period is named Open-Ended. |
| Journal Entry | Currency* | String | Required for creating Journal Entry | The type of currency used. Currency must be active. |
| Journal Entry | Journal Entry Date* | string <date> | Required for creating Journal Entry | Date of the journal entry. |
| Journal Entry | Notes | String | Optional | The number associated with the revenue event. Character limit: 2,000 |
| Journal Entry | Organization Label | String | Required when creating new Journal Entry for an Org in Multi Org, otherwisethe cell can be left blank | Name of the organization that the journal entry belongs to. This field is only required when you have already turned on Multi-Org feature. |
| Journal Entry | Transferred To Accounting | String | Optional | Status shows whether the journal entry has been transferred to an accounting system. Enum: "No" "Processing" "Yes" "Error" "Ignore" |
| Array of objects (journalEntryItems) | IsNewjournalEntryItem | True or False | Required when creating new Journal Entry Item,Enter the value as 'True' if applicable; otherwise the value as FALSE the cell can be left blank | Indicator Column marking the start of a new object |
| Journal Entry > Journal Entry Items | Journal Entry Items Accounting Code Name* | String | Required for creating the Journal Entry Items | Name of the accounting code. |
| Journal Entry > Journal Entry Items | Journal Entry Items Amount* | string <decimal> | Required when creating Journal entry items | Journal entry item amount in transaction currency |
| Journal Entry > Journal Entry Items | Journal Entry Items Accounting Code Type | string | Optional | Accounting code typeThis field is required if accountingCodeName is not unique.Note: On-Account Receivable is only available if you enable the Invoice Settlement feature.Enum: "AccountsReceivable" "On-Account Receivable" "Cash" "OtherAssets" "CustomerCashOnAccount" "DeferredRevenue" "SalesTaxPayable" "OtherLiabilities" "SalesRevenue" "SalesDiscounts" "OtherRevenue" "OtherEquity" "BadDebt" "OtherExpenses" |
| Journal Entry > Journal Entry Items | Journal Entry Items Home Currency Amount | string <decimal> | This field is required if you have set your home currency for foreign currency conversion. Otherwise, do not pass this field. | Journal entry item amount in home currency. |
| Journal Entry > Journal Entry Items | Journal Entry Items Type | string | Optional | Type of journal entry item. Enum: "Credit" "Debit" |
| Array of objects (segments) | IsNewsegment | True or False | Required when creating new Journal Entry Segments ,Enter the value as 'True' if applicable; otherwise the value as FALSE the cell can be left blank | Indicator Column marking the start of a new object. List of segments that apply to the summary journal entry. |
| Journal Entry > Segments | Segments Segment Name* | string | You must use the segment name that has already been specified in the default segment rule. | Name of segment. In addition, segments need to be passed in the order where they were defined in the segmentation rule. If multiple segments are configured in the default rule, you need to specify all of them in order. |
| Journal Entry > Segments | Segments Segment Value* | string | You must provide the segment value that has already been specified in the default segment rule. | Value of segment in this summary journal entry. |

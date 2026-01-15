---
title: "Accounting period"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/accounting-period"
product: "zuora-platform"
scraped_at: "2026-01-15T21:56:46.000Z"
---

# Accounting period

This reference topic lists the Accounting period data dictionary details .

You can close an accounting period to lock it down and ensure no more changes occur in that period. Zuora shows you all the unresolved transactions like draft invoices that need your attention before you close your accounting period. You have complete visibility into the data by running trial balances as many times as you want.

Note: Fields with an asterisk mark (\*) indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Name* | The name of the accounting period, which is displayed on the list of accounting periods on the All Accounting Periods page. | Alphanumeric |
| Start Date* | The start date of the accounting period. | Date(yyyy-mm-dd) |
| End Date* | The end date of the accounting period. | Date(yyyy-mm-dd) |
| Fiscal year* | The fiscal year for the accounting period. | Year(yyyy format) |
| Fiscal Quarter | The fiscal quarter of the accounting period. | Number(1-4) |
| Notes | Use this field to record comments about the accounting period. | Alphanumeric |

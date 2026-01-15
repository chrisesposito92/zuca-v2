---
title: "Update accounting code"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-accounting-code"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:33.615Z"
---

# Update accounting code

This reference topic lists all the fields associated with the update accounting code.

To provide you with revenue accounting data, Zuora requires you to configure accounting codes for various revenue transactions, such as invoices, payments, credits, and refunds.

The following table explains the details of the accounting code data dictionary.

Note: Fields with an asterisk mark (\*) indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Id* | ID of the accounting code you want to update. | string |
| GLAccountName | Name of the account in your general ledger. Field only available if you have Zuora Finance enabled. Maximum of 255 characters. | string |
| GLAccountNumber | Account number in your general ledger. Field only available if you have Zuora Finance enabled. Maximum of 255 characters. | string |
| Name | Name of the accounting code. Accounting code name must be unique. Maximum of 100 characters. | string |
| Notes | Maximum of 2,000 characters. | string |
| Type | Accounting code type. You cannot change the type of an accounting code from AccountsReceivable to a different type. Note that On-Account Receivable is only available if you enable the Invoice Settlement feature. Enum: "AccountsReceivable" "On-Account Receivable" "Cash" "OtherAssets" "CustomerCashOnAccount" "DeferredRevenue" "SalesTaxPayable" "OtherLiabilities" "SalesRevenue" "SalesDiscounts" "OtherRevenue" "OtherEquity" "BadDebt" "OtherExpenses" | string |

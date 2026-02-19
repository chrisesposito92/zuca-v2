---
title: "Accounting code"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/accounting-code"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:16.372Z"
---

# Accounting code

This reference topic lists the Accounting code data dictionary details for revenue transactions and their descriptions.

For Zuora to provide you with revenue accounting data, you'll have to configure accounting codes for various revenue transactions, such as invoices, payments, credits, and refunds.

Note: Fields with an asterisk mark (\*) indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| GLAccountName | The account name in general ledger (GL) that corresponds to accounting code. | Alphanumeric |
| GLAccountNumber | The account number in the GL that corresponds to the accounting code. | Alphanumeric |
| Name* | The name of the accounting code. | Alphanumeric |
| Notes | Any note about the accounting code. | Alphanumeric |
| Type* | The accounting code type. | AccountsReceivableOnAccountReceivableCashOtherAssetsCustomerCashOnAccountDeferredRevenueSalesTaxPayableOtherLiabilitiesSalesRevenueSalesDiscountsOtherRevenueOtherEquityBadDebtOtherExpensesContractAssetsContractLiabilitiesAdjustmentRevenueUnbilledReceivablesAdjustmentLiabilities |

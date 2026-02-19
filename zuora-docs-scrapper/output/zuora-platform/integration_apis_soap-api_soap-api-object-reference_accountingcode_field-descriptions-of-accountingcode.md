---
title: "Field descriptions of AccountingCode"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/accountingcode/field-descriptions-of-accountingcode"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:56.358Z"
---

# Field descriptions of AccountingCode

This reference lists the description of the fields of the AccountingCode object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to Create? | Allowed Operations | Description |
| --- | --- | --- | --- |
| Category | Optional | Query | The category associated with the accounting code. Possible values:AssetsLiabilitiesEquityRevenueExpensesType : enumCharacter limit : N/AVersion : WSDL 50.0+Zuora Finance Required : No |
| CreatedById | Optional | Query | The identifier of the user who created the accounting code.Type: string IDCharacter limit: N/AVersion: WSDL 50.0+Zuora Finance Required : No |
| CreatedDate | Optional | Query | The date when the accounting code was created.Type: dateTimeCharacter limit: N/AVersion: WSDL 50.0+Zuora Finance Required : No |
| GLAccountName | Optional | Create Query Update | The account name in general ledger (GL) that corresponds to accounting code.Type : StringCharacter limit : 255Version : WSDL 50.0+Zuora Finance Required: Yes |
| GLAccountNumber | Optional | Create Query Update | The account number in the GL that corresponds to the accounting code.Type : StringCharacter limit : 50Version : WSDL 50.0+Zuora Finance Required: Yes |
| Id | Optional | Query Filter | ID of object.Type : zns:IDzns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| Name | Required | Create Query Update | The name of the accounting code.Type : stringCharacter limit : 100Version : WSDL 50.0+Zuora Finance Required: No |
| Notes | Optional | CreateQuery Update | Any note about the accounting code.Type: StringCharacter limit: 2000Version : WSDL 50.0+Zuora Finance Required : No |
| Status | Optional | Query Update | The accounting code status. On create, the accounting code is created in Active status by default. Possible values:ActiveInactiveType: enumCharacter limit: N/AVersion: WSDL 50.0+Zuora Finance Required : No |
| Type | Required | Create Query Update | The accounting code type. Possible values:AccountsReceivableCashOtherAssetsCustomerCashOnAccountDeferredRevenueSalesTaxPayableOtherLiabilitiesSalesRevenueSalesDiscountsOtherRevenueOtherEquityBadDebtOtherExpensesType : enumCharacter limit : N/AVersion : WSDL 50.0+Zuora Finance Required: No |
| UpdatedById | Optional | Query | The identifier of the user who created the accounting code.Type: string IDCharacter limit: N/AVersion: WSDL 50.0+Zuora Finance Required : No |
| UpdatedDate | Optional | Query | The date when the accounting code was updated.Type: dateTimeCharacter limit: N/AVersion: WSDL 50.0+Zuora Finance Required : No |

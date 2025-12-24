---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/accountingperiod/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:06.135Z"
---

# Field descriptions

This reference lists the description of the fields of the AccountingPeriod object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to Create? | Allowed Operations | Description |
| --- | --- | --- | --- |
| CreatedById | Optional | Query | The identifier of the user who created the accounting code.Type: string IDCharacter limit: N/AVersion: WSDL 50.0+Z-Finance Required : No |
| CreatedDate | Optional | Query | The date when the accounting code was created.Type: dateTimeCharacter limit: N/AVersion: WSDL 50.0+Z-Finance Required : No |
| EndDate | required | Create Query Update Filter | The end date of the accounting period.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit :Version notes : Z-Finance |
| FiscalQuarter | optional | Create Query Update Filter | The fiscal quarter of the accounting period.Type : intCharacter limit :Version notes : WSDL 81.0+Values : The default value is null. Supported values are: 1, 2, 3, and 4. |
| FiscalYear | required | Create Query Update Filter | The fiscal year for the accounting period.Type : intCharacter limit :Version notes : Z-FinanceValues : a valid integer of the form, YYYY |
| Id | optional | Query Filter | The ID of this object. Upon creation of this object, this field becomes AccountingPeriodId.Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| Name | required | Create Query Update Filter | The name of the accounting period, which is displayed on the list of accounting periods on the All Accounting Periods page.Type : stringCharacter limit :100Version notes : Z-FinanceValues : a string of 100 characters or fewer |
| Notes | optional | Create Query Update Filter | Use this field to record comments about the accounting period.Type : stringCharacter limit : 255Version notes : Z-FinanceValues : a string of 255 characters or fewer |
| Status | required | Query Update Filter | The status of the accounting period.Type : stringCharacter limit : 6Version notes : Z-FinanceAllowable values : automatically generated on creattion; one of the following values:OpenClosed |
| StartDate | required | Create Query Update Filter | The start date of the accounting period.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes : Z-FinanceValues : automatically generated after the first accounting period |
| UpdatedById | Optional | Query | The identifier of the user who created the accounting code.Type: string IDCharacter limit: N/AVersion: WSDL 50.0+Z-Finance Required : No |
| UpdatedDate | Optional | Query | The date when the accounting code was updated.Type: dateTimeCharacter limit: N/AVersion: WSDL 50.0+Z-Finance Required : No |

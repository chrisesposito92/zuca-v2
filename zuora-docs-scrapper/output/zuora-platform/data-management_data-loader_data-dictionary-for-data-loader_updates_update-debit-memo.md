---
title: "Update debit memo"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-debit-memo"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:57.943Z"
---

# Update debit memo

This referece article lists all the fields associated with the Update Debit Memo data dictionary..

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewCreditMemo | IsMarker Column : New object begins | TRUE or FALSE |
| id* | The ID of the debit memo. | string |
| Auto Pay | Whether debit memos are automatically picked up for processing in the corresponding payment run.By default, debit memos are automatically picked up for processing in the corresponding payment run. | boolean |
| Comment | Comments about the debit memo. | string [ 0 .. 255 ] characters |
| Due Date | The date by which the payment for the debit memo is due, in yyyy-mm-dd format. | string <date> |
| Effective Date | The date when the debit memo takes effect. | string <date> |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the debit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Reason Code | A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code | string |
| Sync Date NS | Date when the debit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Transferred To Accounting | Whether the debit memo is transferred to an external accounting system. Use this field to integrate with accounting systems such as NetSuite. Enum: "Processing" "Yes" "No" "Error" "Ignore" |  |
| IsNewDebitMemoItem | IsMarker Column : New object begins | TRUE or FALSE |
| Invoice Item id* | The ID of the debit memo item. | string = 32 characters |
| Invoice Item Amount | The amount of the debit memo item. For tax-inclusive debit memo items, the amount indicates the debit memo item amount including tax. For tax-exclusive debit memo items, the amount indicates the debit memo item amount excluding tax. | number <double> |
| Invoice Item Comment | Comments about the debit memo item. | string |
| Invoice Item Quantity | The number of units for the debit memo item. | number <double> |
| Invoice Item SKU Name | The name of the SKU. | string |
| Invoice Item Service End Date | The service end date of the debit memo item. | string <date> |
| Invoice Item Service Start Date | The service start date of the debit memo item. | string <date> |
| Invoice Item Unit Of Measure | The definable unit that you measure when determining charges. | string |
| Invoice Item Finance Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability. | string [ 0 .. 100 ] characters |
| Invoice Item Finance Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. | string [ 0 .. 100 ] characters |
| Invoice Item Finance Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule. | string [ 0 .. 100 ] characters |
| IsNewDebitMemoItemTaxItem | IsMarker Column : New object begins | TRUE or FALSE |
| Invoice Item Tax Item id* | The ID of the taxation item in the debit memo item. | string |
| Invoice Item Tax Item Amount | The amount of the taxation item in the debit memo item. | number <double> |
| Invoice Item Tax Item Jurisdiction | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. | string |
| Invoice Item Tax Item Location Code | The identifier for the location based on the value of the taxCode field. | string |
| Invoice Item Tax Item Tax Code | The tax code identifies which tax rules and tax rates to apply to a specific debit memo. | string |
| Invoice Item Tax Item Tax Code Description | The description of the tax code. | string |
| Invoice Item Tax Item Tax Date | The date that the tax is applied to the debit memo, in yyyy-mm-dd format. | string <date> |
| Invoice Item Tax Item Tax Exempt Amount | The calculated tax amount excluded due to the exemption. | number <double> |
| Invoice Item Tax Item Tax Name | The name of taxation. | string |
| Invoice Item Tax Item Tax Rate | The tax rate applied to the debit memo. | number <double> |
| Invoice Item Tax Item Tax Rate Description | The description of the tax rate. | string |
| Invoice Item Tax Item Tax Rate Type | The type of the tax rate applied to the debit memo. Enum: "Percentage" "FlatFee" | string |
| Invoice Item Tax Item Finance Sales Tax Payable Accounting Code | The accounting code for the sales taxes payable. | string [ 0 .. 100 ] characters |

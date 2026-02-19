---
title: "Update credit memo"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/credit-memo/update-credit-memo"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:07.811Z"
---

# Update credit memo

This refence article list all the fields related to the Update Credit Memo.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewCreditMemo | IsMarker Column : New object begins | TRUE or FALSE |
| id* | The ID of the credit memo. | string |
| Auto Apply To Invoice Upon Posting | Whether the credit memo automatically applies to the invoice upon posting. | boolean |
| Comment | Comments about the credit memo. | string [ 0 .. 255 ] characters |
| Effective Date | The date when the credit memo takes effect. | string <date> |
| Exclude From Auto Apply Rules | Whether the credit memo is excluded from the rule of automatically applying unapplied credit memos to invoices and debit memos during payment runs. If you set this field to true, a payment run does not pick up this credit memo or apply it to other invoices or debit memos. | boolean |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the credit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Origin NS | Origin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Reason Code | A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. | string |
| Sync Date NS | Date when the credit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Transaction NS | Related transaction in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Transferred To Accounting | Whether the credit memo is transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite. Enum: "Processing" "Yes" "No" "Error" "Ignore" | string |
| IsNewCreditMemoItem | IsMarker Column : New object begins | TRUE or FALSE |
| Invoice Item id* | The ID of the credit memo item. | string = 32 characters |
| Invoice Item Amount | The amount of the credit memo item. For tax-inclusive credit memo items, the amount indicates the credit memo item amount including tax. For tax-exclusive credit memo items, the amount indicates the credit memo item amount excluding tax | number <double> |
| Invoice Item Comment | Comments about the credit memo item. | string |
| Invoice Item Quantity | The number of units for the credit memo item. | number <double> |
| Invoice Item SKU Name | The name of the SKU. | string |
| Invoice Item Service End Date | The service end date of the credit memo item. | string <date> |
| Invoice Item Service Start Date | The service start date of the credit memo item. | string <date> |
| Invoice Item Unit Of Measure | The definable unit that you measure when determining charges. | string |
| Invoice Item Finance Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability. | string [ 0 .. 100 ] characters |
| Invoice Item Finance On Account Accounting Code | The accounting code that maps to an on account in your accounting system. | string [ 0 .. 100 ] characters |
| Invoice Item Finance Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. | string [ 0 .. 100 ] characters |
| Invoice Item Finance Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule. | string [ 0 .. 100 ] characters |
| IsNewCreditMemoItemTaxItem | IsMarker Column : New object begins | TRUE or FALSE |
| Invoice Item Tax Item id* | The ID of the taxation item in the credit memo item. | string |
| Invoice Item Tax Item Amount | The amount of the taxation item in the credit memo item. | number <double> |
| Invoice Item Tax Item Jurisdiction | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. | string |
| Invoice Item Tax Item Location Code | The identifier for the location based on the value of the taxCode field. | string |
| Invoice Item Tax Item Tax Code | The tax code identifies which tax rules and tax rates to apply to a specific credit memo. | string |
| Invoice Item Tax Item Tax Code Description | The description of the tax code. | string |
| Invoice Item Tax Item Tax Date | The date that the tax is applied to the credit memo, in yyyy-mm-dd format. | string <date> |
| Invoice Item Tax Item Tax Exempt Amount | The calculated tax amount excluded due to the exemption. | number <double> |
| Invoice Item Tax Item Tax Name | The name of taxation. | string |
| Invoice Item Tax Item Tax Rate | The tax rate applied to the credit memo. | number <double> |
| Invoice Item Tax Item Tax Rate Description | The description of the tax rate. | string |
| Invoice Item Tax Item Tax Rate Type | The type of the tax rate applied to the credit memo. Enum: "Percentage" "FlatFee" | string |
| Invoice Item Tax Item Finance On Account Accounting Code | The accounting code that maps to an on account in your accounting system. | string [ 0 .. 100 ] characters |
| Invoice Item Tax Item Finance Sales Tax Payable Accounting Code | The accounting code for the sales taxes payable. | string [ 0 .. 100 ] characters |

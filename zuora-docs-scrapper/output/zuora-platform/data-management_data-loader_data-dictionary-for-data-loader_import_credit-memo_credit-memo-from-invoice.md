---
title: "Credit memo from invoice"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/credit-memo/credit-memo-from-invoice"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:31.983Z"
---

# Credit memo from invoice

This reference document lists the various fields associated with the Credit Memo from Invoice data dictionary in detail..

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewCreditMemo | Marker Column | TRUE |
| Auto Apply To Invoice Upon Posting | Whether the credit memo automatically applies to the invoice upon posting | String |
| Auto Post | Default: False, Whether to automatically post the credit memo after it is created. Setting this field to true, you do not need to separately call the Post credit memo operation to post the credit memo. | Boolean |
| Comment | Comments about the credit memo | Boolean |
| Effective Date | The date when the credit memo takes effect | String-date |
| Exclude From Auto Apply Rules | Whether the credit memo is excluded from the rule of automatically applying credit memos to invoices | Boolean |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Integration Status NS | Status of the credit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Invoice Id | The ID of the invoice that the credit memo is created from | String |
| Origin NS | Origin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Reason Code | It is captured from the Tenant Level Configurations in Settings>Payments>Reason Codes | String |
| Sync Date NS | Date when the credit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Tax Auto Calculation | Default: true , Whether to automatically calculate taxes in the credit memo | Boolean |
| Transaction NS | Related transaction in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| IsNewInvoiceItem | Marker Column | TRUE/FAlse |
| Invoice Item Amount* | The amount of the credit memo item | Number- Double |
| Invoice Item Id* | The ID of the invoice item | String |
| Invoice Item SKU Name* | The name of the charge associated with the invoice | String |
| Invoice Item Description | The description of the credit memo item | String |
| Invoice Item Quantity | The number of units for the item credit memo | Number- Double |
| Invoice Item Service End Date | The service end date of the credit memo item | String-date |
| Invoice Item Service Start Date | The service start date of the credit memo item | String- date |
| Invoice Item Tax Mode | Default : TaxExclusive, you can set this field to TaxInclusive only if the taxAutoCalculation field is set to true. If you set taxMode to TaxInclusive, you cannot input tax amounts for credit memo items. | String- date |
| Invoice Item Unit Of Measure | The definable unit that you measure when determining charges | String |
| Invoice Item Finance Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes | String (0 to 100 characters) |
| Invoice Item Finance On Account Accounting Code | The accounting code that maps to an on account in your accounting system. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes | String (0 to 100 characters) |
| Invoice Item Finance Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes | String (0 to 100 characters) |
| Invoice Item Finance Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |
| IsNewInvoiceItemTaxItem | Marker Column | TRUE/ FALSE |
| Invoice Item Tax Item Tax Exempt Amount* | The calculated tax amount excluded due to the exemption | Number- Double |
| Invoice Item Tax Item Tax Rate* | The tax rate applied to the credit memo | Number- Double |
| Invoice Item Tax Item Amount | The amount of the credit memo taxation item | Number- Double |
| Invoice Item Tax Item Jurisdiction | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city. | String |
| Invoice Item Tax Item Location Code | The identifier for the location based on the value of the taxCode field | String |
| Invoice Item Tax Item Source Tax Item Id | The ID of the source taxation item | String |
| Invoice Item Tax Item Tax Code | The tax code identifies which tax rules and tax rates to apply to a specific credit memo | String |
| Invoice Item Tax Item Tax Code Description | The description of the tax code | String |
| Invoice Item Tax Item Tax Date | The date that the tax is applied to the credit memo, in yyyy-mm-dd format. | String-date |
| Invoice Item Tax Item Tax Name | The name of taxation | String |
| Invoice Item Tax Item Tax Rate Description | The description of the tax rate | String |
| Invoice Item Tax Item Tax Rate Type | The type of the tax rate applied to the credit memo. Enum: "Percentage" "FlatFee" | String |
| Invoice Item Tax Item Finance On Account Accounting Code | The accounting code that maps to an on account in your accounting system. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |
| Invoice Item Tax Item Finance Sales Tax Payable Accounting Code | The accounting code for the sales taxes payable. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |

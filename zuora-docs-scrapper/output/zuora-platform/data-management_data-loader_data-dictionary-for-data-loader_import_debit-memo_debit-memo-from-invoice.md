---
title: "Debit memo from invoice"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/debit-memo/debit-memo-from-invoice"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:46.698Z"
---

# Debit memo from invoice

This reference document provides detailed information on the fields associated with Debit Memos from the Invoice data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Values |
| --- | --- | --- |
| IsNewDebitMemo | Marker Column | TRUE |
| Invoice Id* | The ID of the invoice that the debit memo is created from. | String |
| Auto Pay | Whether debit memos are automatically picked up for processing in the corresponding payment run. By default, debit memos are automatically picked up for processing in the corresponding payment run | Boolean |
| Auto Post | Default: false,Whether to automatically post the debit memo after it is created. Setting this field to true, you do not need to separately call the Post debit memo operation to post the debit memo. | Boolean |
| Comment | Comments about the debit memo | String (0 to 255 characters) |
| Effective Date | The date when the debit memo takes effect | String -date |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite | String <=255 characters |
| Integration Status NS | Status of the debit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite | String <=255 characters |
| Reason Code | It is captured from the Tenant Level Configurations in Settings>Payments>Reason Codes | String |
| Sync Date NS | Date when the debit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite | String <=255 characters |
| Tax Auto Calculation | Default: true ,Whether to automatically calculate taxes in the debit memo | Boolean |
| IsNewInvoiceItem | Marker Column | TRUE/ FALSE |
| Invoice Item Amount* | The amount of the debit memo item | Number- Double |
| Invoice Item SKU Name* | The name of the charge associated with the invoice. | String |
| Invoice Item Description | The description of the debit memo item. | String |
| Invoice Item Id | The ID of the invoice item | String |
| Invoice Item Quantity | The number of units for the debit memo item | Number- Double |
| Invoice Item Service End Date | The service end date of the debit memo item. | String-date |
| Invoice Item Service Start Date | The service start date of the debit memo item | String-date |
| Invoice Item Tax Mode | Default: "TaxExclusive",The tax mode of the debit memo item, indicating whether the amount of the debit memo item includes tax | String |
| Invoice Item Unit Of Measure | The definable unit that you measure when determining charges | String |
| Invoice Item Finance Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes | String (0 to 100 characters) |
| Invoice Item Finance Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes | String (0 to 100 characters) |
| Invoice Item Finance Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes | String (0 to 100 characters) |
| IsNewInvoiceItemTaxItem | Marker Column | TRUE/ FALSE |
| Invoice Item Finance Amount* | The amount of the debit memo taxation item | Number- Double |
| Invoice Item Finance Tax Exempt Amount* | The calculated tax amount excluded due to the exemption | Number- Double |
| Invoice Item Finance Tax Rate* | The tax rate applied to the debit memo | Number- Double |
| Invoice Item Finance Jurisdiction | The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city | String |
| Invoice Item Finance Location Code | The identifier for the location based on the value of the taxCode field | String |
| Invoice Item Finance Source Tax Item Id | The ID of the source taxation item | String |
| Invoice Item Finance Tax Code | The tax code identifies which tax rules and tax rates to apply to a specific debit memo | String |
| Invoice Item Finance Tax Code Description | The description of the tax code | String |
| Invoice Item Finance Tax Date | The date that the tax is applied to the debit memo, in yyyy-mm-dd format | String-date |
| Invoice Item Finance Tax Name | The name of taxation | String |
| Invoice Item Finance Tax Rate Description | The description of the tax rate | String |
| Invoice Item Finance Tax Rate Type | The type of the tax rate applied to the debit memo.Enum: "Percentage" "FlatFee" | String |
| Invoice Item Finance Finance Sales Tax Payable Accounting Code | The accounting code for the sales taxes payable | String (0 to 100 characters) |
| IsNewCustomRate | Marker Column | TRUE/ FALSE |
| Custom Rate Currency Code* | The currency code for either Reporting or Home currency | String |
| Custom Rate FX Rate* | The Custom FX conversion rate between home currency and transactional currency items. | Number-decimal |
| Custom Rate Date | The date on which a particular currency rate is fixed or obtained on | String-date |

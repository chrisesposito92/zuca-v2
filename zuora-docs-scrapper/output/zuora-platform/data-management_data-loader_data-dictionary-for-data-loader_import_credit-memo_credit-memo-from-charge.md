---
title: "Credit memo from charge"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/credit-memo/credit-memo-from-charge"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:30.674Z"
---

# Credit memo from charge

This reference document lists all the data dictionary fields associated with Credit Memo from Charge.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Values |
| --- | --- | --- |
| IsNewCreditMemo | Marker Column | TRUE |
| Account Id* | When creating credit memos from product rate plan charges, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. | String |
| Account Number* | When creating credit memos from product rate plan charges, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. | String |
| Auto Post | Default: false -Setting this field to true, you do not need to separately call the Post a credit memo operation to post the credit memo.Whether to automatically post the credit memo after it is created. | Boolean |
| Comment | Comments about the credit memo. | String |
| Effective Date | The date when the credit memo takes effect | String |
| Exclude From Auto Apply Rules | Default: False- Whether the credit memo is excluded from the rule of automatically applying unapplied credit memos to invoices and debit memos during payment runs. If you set this field to true, a payment run does not pick up this credit memo or apply it to other invoices or debit memos. | Boolen |
| Integration Id NS | ID of the corresponding object in NetSuite. This field is available only if the Zuora Connector for NetSuite is installed. | String <=255 characters |
| Integration Status NS | Status of the credit memo's synchronization with NetSuite. This field is available only if the Zuora Connector for NetSuite is installed. | String <=255 characters |
| Origin NS | Origin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <=255 characters |
| Reason Code | It is captured from the Tenant Level Configurations in Settings>Payments>Reason Codes. | String |
| Sync Date NS | Date when the credit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <=255 characters |
| Transaction NS | Related transaction in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <=255 characters |
| IsNewProductRatePlanCharge | Marker Column | TRUE/FALSE |
| Charge Product Rate Plan Charge Id* | The ID of the product rate plan charge that the credit memo is created from. | String |
| Charge Amount | The amount of the credit memo item | Number-double |
| Charge Comment | Comments about the product rate plan charge | String (0 to 255 characters) |
| Charge Description | The description of the product rate plan charge | String (0 to 255 characters) |
| Charge Quantity | The number of units for the credit memo item | Number-double |
| Charge Service End Date | The service end date of the credit memo item. If not specified, the effective end date of the corresponding product rate plan will be used. | String-date |
| Charge Service Start Date | The service start date of the credit memo item. If not specified, the effective start date of the corresponding product rate plan will be used. | String-date |
| Charge Finance Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |
| Charge Finance On Account Accounting Code | The accounting code that maps to an on account in your accounting system. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |
| Charge Finance Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |
| Charge Finance Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule. It is captured from the Tenant level Configurations in Settings> Payments> Accounting Codes. | String (0 to 100 characters) |
| IsNewCustomRate | Marker Column | TRUE/FALSE |
| Custom Rate Currency Code* | The currency code for either Reporting or Home currency. | String |
| Custom Rate Custom FX Rate* | The Custom FX conversion rate between Home/Reporting and Transactional currency items. | Number-decimal |
| Custom Rate Rate Date | The date on which a particular currency rate is fixed or obtained on. | String-date |

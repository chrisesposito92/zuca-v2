---
title: "Debit memo from charge"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/debit-memo/debit-memo-from-charge"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:31.449Z"
---

# Debit memo from charge

This reference document details the various fields associated with the Debit Memo from Charge data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewDebitMemo | Marker Column | TRUE |
| Account Id* | When creating debit memos from product rate plan charges, you must specify accountNumber, accountId, or both in the request body. If both fields are specified, they must correspond to the same account. | String |
| Account Number* | The number of the account associated with the debit memo.Note: When creating debit memos from product rate plan charges, you must specify accountNumber, accountId, or both in the request body. | String |
| Auto Pay | Whether debit memos are automatically picked up for processing in the corresponding payment run. | Boolean |
| Auto Post | Whether to automatically post the debit memo after it is created.Setting this field to true, you do not need to separately call the Post a debit memo operation to post the debit memo. | Boolean |
| Comment | Comments about the debit memo | String (0 to 255 characters) |
| Due Date | The date by which the payment for the debit memo is due, in yyyy-mm-dd format. | string -date |
| Effective Date | The date when the debit memo takes effect | string -date |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <=255 characters |
| Integration Status NS | Status of the debit memo's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <=255 characters |
| Reason Code | It is captured from the Tenant Level Configurations in Settings>Payments>Reason Codes | String |
| Sync Date NS | Date when the debit memo was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <=255 characters |
| IsNewProductRatePlanCharge | Marker Column | TRUE/ FALSE |
| Charge Product Rate Plan Charge Id* | The ID of the product rate plan charge that the debit memo is created from | String |
| Charge Amount | The amount of the debit memo item | String (0 to 255 characters) |
| Charge Comment | Comments about the product rate plan charge | String (0 to 255 characters) |
| Charge Description | The description of the product rate plan charge | String (0 to 255 characters) |
| Charge Quantity | The number of units for the debit memo item | Number-double |
| Charge Service End Date | The service end date of the debit memo item. If not specified, the effective end date of the corresponding product rate plan will be used | String-date |
| Charge Service Start Date | The service start date of the debit memo item. If not specified, the effective start date of the corresponding product rate plan will be used | String-date |
| Charge Finance Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability | String (0 to 100 characters) |
| Charge Finance Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges | String (0 to 100 characters) |
| Charge Finance Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule | String (0 to 100 characters) |
| IsNewCustomRate | Marker Column | TRUE/ FALSE |
| Custom Rate Currency Code* | The currency code for either Reporting or Home currency | String |
| Custom Rate FX Rate* | The Custom FX conversion rate between home currency and transactional currency items | Number-decimal |
| Custom Rate Date | The date on which a particular currency rate is fixed or obtained on. | String-date |

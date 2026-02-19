---
title: "Payments"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/payments"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:35.769Z"
---

# Payments

This reference article lists the fields associated with the Payments data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewPayment | Marker Column | TRUE |
| Amount* | The total amount of the payment. | Number <double> |
| Currency Code* | The value of the field is dependent upon enablement of Standalone Payments and Multiple Currencies | String |
| Type* | If you specify the type as Electronic, you must specify the value for accountId or accountNumber | String |
| Account Id | The ID of the customer account that the payment is created for. | String |
| Account Number | The number of the customer account that the payment is created for | String |
| Auth Transaction Id | The authorization transaction ID from the payment gateway. Use this field for electronic payments, such as credit cards | string <= 50 characters |
| Comment | Additional information related to the payment. | string [ 0 .. 255 ] characters |
| Effective Date | The date when the payment takes effect, in yyyy-mm-dd format. | string <date> |
| Gateway Id | The ID of the gateway instance that processes the payment. | string |
| Gateway Order Id | A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead. | string <= 50 characters |
| Mit Transaction Source | Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework. | string |
| Payment Method Id | The unique ID of the payment method that the customer used to make the payment. | string |
| Payment Method Type | Default: null, The type of the payment method that the customer used to make the payment. | string |
| Payment Schedule Key | The unique ID or the number of the payment schedule to be linked with the payment. | string |
| Pre-Payment | This field is available with Prepaid Cash with DropDown enablement | boolean |
| Reference Id | The transaction ID returned by the payment gateway. | string [ 0 .. 100 ] characters |
| Soft Descriptor | A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. | string <= 35 characters |
| Soft Descriptor Phone | A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. | string <= 20 characters |
| Standalone | This field is only available if support for standalone payments is enabled. | boolean |
| IsNewcustomRates | Marker Column | TRUE/ FALSE |
| Custom Rates Currency Code* | The currency code for either Reporting or Home currency. | string |
| Custom Rates Custom FX Rate* | The Custom FX conversion rate between Home/Reporting and Transactional currency items. | number <decimal> |
| Custom Rates Rate Date | The date on which a particular currency rate is fixed or obtained on. | string <date> |
| IsNewDebitMemo | Marker Column | TRUE/ FALSE |
| Debit Memo Amount* | The amount of the payment associated with the debit memo. | number <double> |
| Debit Memo Id | The unique ID of the debit memo that the payment is created on. | string |
| IsNewDebitMemoItem | Marker Column | TRUE/ FALSE |
| Debit Memo Items Amount* | The amount of the payment associated with the specific debit memo or taxation item. | number <double> |
| Debit Memo Items Debit Memo Id | The ID of the specific debit memo item. | string |
| Debit Memo Items Tax Item Id | The ID of the specific taxation item. | string |
| Finance Information Accounting | Whether the payment was transferred to an external accounting system. | string |
| Finance Information Bank Account Accounting Code | The accounting code that maps to a bank account in your accounting system. | string [ 0 .. 100 ] characters |
| Finance Information Unapplied Payment Accounting Code | The accounting code for the unapplied payment. | string [ 0 .. 100 ] characters |
| Gateway Options Key | The name of a gateway-specific parameter. | string <= 255 characters |
| Gateway Options Value | The value of the gateway-specific parameter. | string <= 255 characters |
| IsNewInvoice | Marker Column | TRUE/ FALSE |
| Invoice Amount* | The amount of the payment associated with the invoice. | number <double> |
| Invoice Id | The unique ID of the invoice on which the payment is created. | string |
| IsNewInvoiceItem | Marker Column | TRUE/ FALSE |
| Invoice Items Amount* | The amount of the payment associated with the specific invoice or taxation item. | number <double> |
| Invoice Items Invoice Item Id | The ID of the specific invoice item. | string |
| Invoice Items Tax Item Id | The ID of the specific taxation item. | string |
| IsNewpaymentOption | Marker Column | TRUE/ FALSE |
| paymentOption Type | The type of the payment option. Currently, only GatewayOptions is supported for specifying Gateway Options fields supported by a payment gateway. | string |
| paymentOption Detail SecCode | Web | string |

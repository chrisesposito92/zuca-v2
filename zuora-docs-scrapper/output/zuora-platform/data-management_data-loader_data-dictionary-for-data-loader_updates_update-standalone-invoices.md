---
title: "Update standalone invoices"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-standalone-invoices"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:12.519Z"
---

# Update standalone invoices

This reference document lists all fields required for updating a Standalone invoice.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewInvoice | Marker Column | TRUE |
| Id* | The ID of the invoice to be updated. | string |
| Auto pay | Whether invoices are automatically picked up for processing in the corresponding payment run. By default, invoices are automatically picked up for processing in the corresponding payment run. | boolean |
| Due Date | The date by which the payment for this invoice is due. | string <date> |
| Invoice Comments | Additional information related to the invoice that a Zuora user added to the invoice. | string <= 255 characters |
| Invoice Date | The new invoice date of the invoice. The new invoice date cannot fall in a closed accounting period. You can only specify invoiceDate or dueDate in one request. Otherwise, an error occurs. | string <date> |
| Transferred To Accounting | Whether the invoice was transferred to an external accounting system. Enum: "Processing" "Yes" "Error" "Ignore" | string |
| IsNewInvoiceItem | Marker Column | TRUE/ FALSE |
| Invoice Item Id* | The unique ID of the invoice item. | string |
| Invoice Item Accounting Code | The accounting code associated with the invoice item. | string |
| Invoice Item Adjustment Liability Accounting Code | The accounting code for adjustment liability.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Invoice Item Adjustment Revenue Accounting Code | The accounting code for adjustment revenue.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Invoice Item Amount | The amount of the invoice item. For tax-inclusive invoice items, the amount indicates the invoice item amount including tax. For tax-exclusive invoice items, the amount indicates the invoice item amount excluding tax. | string <number> |
| Invoice Item Charge Date | The date when the invoice item is charged, in yyyy-mm-dd hh:mm:ss format. | string <date-time> |
| Invoice Item Charge Name | The name of the charge associated with the invoice item. This field is required if the productRatePlanChargeId field is not specified in the request. | string |
| Invoice Item Contract Asset Accounting Code | The accounting code for contract asset.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Invoice Item Contract Liability Accounting Code | The accounting code for contract liability.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Invoice Item Contract Recognized Revenue Accounting Code | The accounting code for contract recognized revenue.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Invoice Item Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability.Note: This field is only available if you have Zuora Finance enabled. | string |
| Invoice Item Description | The description of the invoice item. | string |
| Invoice Item Item Type | The type of the invoice item. | string |
| Invoice Item Product Rate Plan Charge Id |  |  |
| Invoice Item Purchase Order Number | The purchase order number associated the invoice item. | string |
| Invoice Item Quantity | The number of units for the invoice item. | string <number> |
| Invoice Item Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.Note: This field is only available if you have Zuora Finance enabled. | string |
| Invoice Item Revenue Recognition Code | The revenue recognition code. | string |
| Invoice Item Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule.Note: This field is only available if you have Zuora Finance enabled. | string |
| Invoice Item Revenue Recognition Trigger Condition | The date when revenue recognition is triggered. Enum: "ContractEffectiveDate" "ServiceActivationDate" "CustomerAcceptanceDate" | string |
| Invoice Item SKU | The SKU of the invoice item. The SKU of the invoice item must be different from the SKU of any existing product. | string |
| Invoice Item Service End Date | The service end date of the invoice item. | string <date> |
| Invoice Item Service Start Date | The service start date of the invoice item. | string <date> |
| Invoice Item Tax Code | The tax code identifies which tax rules and tax rates to apply to the invoice item. Note: This field is only available if you have Taxation enabled. | string |
| Invoice Item Tax Mode | The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.Note: This field is only available if you have Taxation enabled. | string |
| Invoice Item UOM | The unit of measure. | string |
| Invoice Item Unbilled Receivables Accounting Code | The accounting code for unbilled receivables.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Invoice Item Unit Price | The per-unit price of the invoice item. | string <number> |
| IsNewInvoiceItemDiscountItem | Marker Column | TRUE/ FALSE |
| Discount Item Id* | The unique ID of the discount item. | string |
| Discount Item Accounting Code | The accounting code associated with the discount item. | string |
| Discount Item Adjustment Liability Accounting Code | The accounting code for adjustment liability.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Discount Item Adjustment Revenue Accounting Code | The accounting code for adjustment revenue.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Discount Item Amount | The amount of the discount item. Should be a negative number. For example, -10. Always a fixed amount no matter whether the discount charge associated with the discount item uses the fixed-amount model or percentage model. For tax-exclusive discount items, this amount indicates the discount item amount excluding tax. For tax-inclusive discount items, this amount indicates the discount item amount including tax. | string <number> |
| Discount Item Charge Date | The date when the discount item is charged, in yyyy-mm-dd hh:mm:ss format. | string <date-time> |
| Discount Item Charge Name | The name of the charge associated with the discount item. This field is required if the productRatePlanChargeId field is not specified in the request. | string |
| Discount Item Contract Asset Accounting Code | The accounting code for contract asset. Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Discount Item Contract Liability Accounting Code | The accounting code for contract liability.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Discount Item Contract Recognition Revenue Accounting Code | The accounting code for contract recognized revenue.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Discount Item Deferred Revenue Accounting Code | The accounting code for the deferred revenue, such as Monthly Recurring Liability.Note: This field is only available if you have Zuora Finance enabled. | string |
| Discount Item Description | The description of the discount item. | string |
| Discount Item Item Type | The type of the discount item. | string |
| Discount Item Purchase Order Number | The purchase order number associated with the discount item. | string |
| Discount Item Recognized Revenue Accounting Code | The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.Note: This field is only available if you have Zuora Finance enabled. | string |
| Discount Item Reference Of The Discount Item | The revenue recognition code. | string |
| Discount Item Revenue Recognition Code | The revenue recognition code. | string |
| Discount Item Revenue Recognition Rule Name | The name of the revenue recognition rule governing the revenue schedule.Note: This field is only available if you have Zuora Finance enabled. | string |
| Discount Item Revenue Recognition Trigger Condition | The date when revenue recognition is triggered. Enum: "ContractEffectiveDate" "ServiceActivationDate" "CustomerAcceptanceDate" | string |
| Discount Item SKU | The SKU of the invoice item. The SKU of the discount item must be different from the SKU of any existing product. | string |
| Discount Item Unbilled Receivables Accounting Code | The accounting code for unbilled receivables.Note: This field is only available if you have the Billing - Revenue Integration feature enabled. | string |
| Discount Item Unit Price | The per-unit price of the discount item. If the discount charge associated with the discount item uses the percentage model, the unit price will display as a percentage amount in PDF. For example: if unit price is 5.00, it will display as 5.00% in PDF. | string <number> |
| IntegrationId__NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| IntegrationStatus__NS | Status of the invoice item's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| SyncDate__NS | Date when the invoice item was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |

---
title: "Revenue Sync errors"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/troubleshoot-billing---revenue-integration_1/revenue-sync-errors"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:05.810Z"
---

# Revenue Sync errors

This reference provides a list of common Revenue Sync errors and their corresponding troubleshooting actions.

To help you troubleshoot errors during the Revenue Sync process, the following table provides a list of Revenue Sync errors that might occur and the corresponding actions:

| Error message | Action |
| --- | --- |
| The previously initiated Revenue Sync job is still in progress. | Wait until the previous Revenue Sync job is completed, then run the new job. |
| No template found for Order/InvoiceItem/InvoiceItemAdjustment/CreditMemo/DebitMemo | Check whether the templates are correctly set up. |
| Template is not enabled/freezed/defaulted for ORDER/INVOICE_ITEM/INVOICE_ITEM_ADJUSTMENT/CREDIT_MEMO_ITEM/DEBIT_MEMO_ITEM template | Check the data mapping templates, and enable, freeze, or default the ORDER/INVOICE_ITEM/INVOICE_ITEM_ADJUSTMENT/CREDIT_MEMO_ITEM/DEBIT_MEMO_ITEM template. |
| Duplicates in data sync object mapping. | This issue occurs because one BillingObject.BillingField is mapped to multiple Revenue Staging fields in data transformation templates.Check all applicable data mapping templates and remove duplicate field mappings. |
| Object Name not supported. | This issue occurs because one or more Billing objects referenced in data mapping templates for Revenue Sync are not supported. For example, Invoice Settlement is not enabled in Billing but you map the Credit Memo object in templates.Check all applicable data mapping templates and ensure that all referenced Billing objects are supported in your Billing tenant. |
| Template mapping field is not valid. | Check all applicable data mapping templates and ensure that all fields are correct and exist in the system. |
| Please check the error table and logs for more details. | If you cannot identify the root cause, submit a request at Zuora Global Support for assistance. |
| Processing failed. Please check error log. | If you cannot identify the root cause, submit a request at Zuora Global Support for assistance. |
| Transformation failed due to wrong data type mapped. | Check the data mapping templates and ensure that the Billing fields are mapped to the Revenue fields of the correct data type. |
| Template not valid / Template mapping not valid / Duplicate mapping...Check log | This error occurs because of one or multiple of the following reasons:The data mapping template for Revenue Sync is invalid.The configured field mapping relationship in the template is invalid.Duplicate field mappings exist in the templateCheck the error log to troubleshoot. |
| Transformation failed for Standalone Debit Memo. | Submit a request at Zuora Global Support for assistance. |
| Transformation failed due to wrong template mapping or label changes. | Check the data mapping templates and ensure that data types of all custom fields are correctly mapped between Zuora Billing and Zuora Revenue. |
| Transaction type is wrong or wrong value in the filter. | Check the transaction type and its value specified in the filter, and ensure that the transaction type and value are correct. |
| Not able to initiate Aqua job. | Try again. If the error still exists, submit a request at Zuora Global Support for assistance. |
| Not able to perform Billing permission check. | Try again. If the error still exists, submit a request at Zuora Global Support for assistance. |

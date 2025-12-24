---
title: "Invoice fields supported by Custom Logic"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic/invoice-fields-supported-by-custom-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:34.532Z"
---

# Invoice fields supported by Custom Logic

This reference lists the fields of the Invoice object that are supported by the Custom Logic feature.

For more information about conditions and mutations in custom logic, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

| Field name | Field type | Supported for condition | Supported for mutation |
| --- | --- | --- | --- |
| AccountId | String | Yes | No |
| AdjustmentAmount | Decimal | Yes | No |
| Amount | Decimal | Yes | No |
| AmountWithoutTax | Decimal | Yes | No |
| AutoPay | Boolean | Yes | No |
| Balance | Decimal | Yes | No |
| BillToContactId | String | Yes | No |
| BillToContactSnapshotId | String | Yes | No |
| Comments | String | Yes | Yes |
| CreatedById | String | No | No |
| CreatedDate | DateTime | Yes | No |
| CreditBalanceAdjustmentAmount | Decimal | Yes | No |
| CreditMemoAmount | Decimal | Yes | No |
| Currency | String | Yes | No |
| DueDate | Date | Yes | Yes |
| EInvoiceErrorCode | String | Yes | No |
| EInvoiceErrorMessage | String | Yes | No |
| EInvoiceFileId | String | Yes | No |
| EInvoiceStatus | String | Yes | No |
| Id | String | No | No |
| IncludesOneTime | Boolean | Yes | No |
| IncludesRecurring | Boolean | Yes | No |
| IncludesUsage | Boolean | Yes | No |
| InvoiceDate | Date | Yes | No |
| InvoiceNumber | String | Yes | No |
| LastEmailSentDate | DateTime | Yes | No |
| PaymentAmount | Decimal | Yes | No |
| PostedBy | String | Yes | No |
| PostedDate | DateTime | Yes | No |
| RefundAmount | Decimal | Yes | No |
| Reversed | Boolean | Yes | No |
| SequenceSetId | String | Yes | No |
| SoldToContactId | String | Yes | No |
| SoldToContactSnapshotId | String | Yes | No |
| Source | String | Yes | No |
| SourceId | String | Yes | No |
| SourceType | String | Yes | No |
| Status | String | Yes | No |
| TargetDate | Date | Yes | No |
| TaxAmount | Decimal | Yes | No |
| TaxExemptAmount | Decimal | Yes | No |
| TaxMessage | String | Yes | No |
| TaxStatus | String | Yes | No |
| TemplateId | String | Yes | No |
| TransferredToAccounting | String | Yes | Yes |
| UpdatedById | String | No | No |
| UpdatedDate | DateTime | Yes | No |

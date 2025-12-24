---
title: "Rounding Amount Invoice Item Object"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-level-rounding/rounding-amount-invoice-item-object"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:25.104Z"
---

# Rounding Amount Invoice Item Object

The Rounding Amount Invoice Item Object stores various fields related to invoice items, including auto-generated values and rounding increments.

The following values are stored for all invoice item fields associated with a rounding amount:

| Field | Value |
| --- | --- |
| AccountingCode | No value |
| ChargeAmount | The amount required to achieve the rounding increment. |
| ChargeDate | The date that your invoice is generated |
| ChargeDescription | Rounding Amount (this cannot be edited) |
| ChargeName | Rounding Amount (this cannot be edited) |
| ChargeNumber | No value |
| CreatedById | Auto-generated |
| CreatedDate | Auto-generated |
| InvoiceId | Auto-generated to connect it to the correct invoice. |
| ProcessingType | 4 (a rounding amount) |
| ProductDescription | No value |
| ProductId | No value |
| Quantity | 1 |
| RatePlanChargeId | No value |
| RevRecCode, RevRecStartDate, RevRecTriggerCondition | No value |
| ServiceStartDate | Set to the invoice date |
| ServiceEndDate | Set to the invoice date |
| SKU | Empty string |
| SubscriptionId | No value |
| TaxAmount | No value |
| TaxCode | No value |
| TaxExemptAmount | No value |
| UnitPrice | The amount required to achieve the rounding increment. |
| UOM | Empty string |
| UpdatedById | Auto-generated |
| UpdatedDate | Auto-generated |

---
title: "Invoice Adjustments"
url: "https://developer.zuora.com/v1-api-reference/older-api/tag/Invoice-Adjustments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:31:40.154Z"
---

# Invoice Adjustments

An invoice adjustment modifies an existing invoice. You use an invoice adjustment to change the entire invoice. For example, you can apply a late fee to the invoice balance.

An invoice adjustment differs from an invoice item adjustment. An invoice item adjustment affects an individual charge or line item on an invoice. An invoice adjustment affects the invoice at the header-level.

**Note**: Invoice Adjustment is deprecated on Production in WSDL version 64.0. Zuora recommends that you use the Invoice Item Adjustment to adjust invoices. If you have the [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) feature enabled, this object is deprecated and only available for backward compatibility.

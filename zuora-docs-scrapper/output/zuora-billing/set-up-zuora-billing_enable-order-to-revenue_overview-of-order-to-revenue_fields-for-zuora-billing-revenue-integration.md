---
title: "Fields for Zuora Billing-Revenue integration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue/fields-for-zuora-billing-revenue-integration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:13.915Z"
---

# Fields for Zuora Billing-Revenue integration

The Zuora Billing-Revenue integration provides fields to exclude non-revenue related data from syncing to Zuora Revenue, ensuring accurate financial reporting.

The following fields are available in Zuora Billing - Revenue Integration, to exclude non-revenue related data from syncing to Zuora Revenue:

-   `excludeItemBookingFromRevenueAccounting`: a Boolean value. Setting this field to `True` excludes non-revenue related rate plan charges and order line items. The default value of this field is `False`.

-   `excludeItemBillingFromRevenueAccounting`: a Boolean value. Setting this field to `True` excludes non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items. The default value of this field is `False`.


These fields are available on the following objects:

-   Product Rate Plan Charge

-   Rate Plan Charge

-   Order Line Item


The `excludeItemBillingFromRevenueAccounting` field is also available on the following objects:

-   Invoice Item

-   Invoice Item Adjustment

-   Credit Memo Item

-   Debit Memo Item


The Zuora UI, API, data source, data query, and AQuA support the following fields:

| Object | Field | Supported operations | Access approaches |
| --- | --- | --- | --- |
| Product Rate Plan Charge | excludeItemBookingFromRevenueAccountingexcludeItemBillingFromRevenueAccounting | Creating a product rate plan chargeUpdating a product rate plan charge | Zuora UIAPIProduct Rate Plan Charge data source |
| Rate Plan Charge | excludeItemBookingFromRevenueAccountingexcludeItemBillingFromRevenueAccounting | Creating a new subscriptionAdding a new product to an existing subscription | Zuora UIAPIRate Plan Charge data source |
| Order Line Item | excludeItemBookingFromRevenueAccountingexcludeItemBillingFromRevenueAccounting | Creating a new order line item | Zuora UIAPIOrder Line Item data sourceData Query |
| Credit Memo Item | excludeItemBillingFromRevenueAccounting | Creating a credit memo from a product rate plan chargeCreating a credit memo from an invoiceUpdating a credit memo itemRetrieving a credit memo itemListing credit memo itemsReversing a credit memo | APICredit Memo Item data sourceData Query |
| Debit Memo Item | excludeItemBillingFromRevenueAccounting | Creating a debit memo from a product rate plan chargeCreating a debit memo from an invoiceUpdating a debit memo itemRetrieving a debit memo itemListing debit memo items | APIDebit Memo Item data sourceData Query |
| Invoice Item | excludeItemBillingFromRevenueAccounting | Creating a standalone invoiceCreating standalone invoicesUpdating an invoice itemUpdating an invoiceUpdating invoicesWriting off an invoiceReversing an invoiceRetrieving an invoice | APIInvoice Item data sourceData Query |
| Invoice Item Adjustment | excludeItemBillingFromRevenueAccounting | Creating an invoice item adjustmentUpdating an invoice item adjustmentRetrieving an invoice item adjustment | Zuora UIAPIInvoice Item Adjustment data sourceAQuA |

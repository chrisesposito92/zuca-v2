---
title: "Unified Invoicing Tutorials"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/overview-of-unified-invoicing/unified-invoicing-tutorials"
product: "zuora-billing"
scraped_at: "2025-12-24T18:40:00.983Z"
---

# Unified Invoicing Tutorials

Explore tutorials on creating, editing, and generating standalone and consolidated invoices, and learn how Unified Invoicing integrates with other features.

Click into each tutorial to see how standalone and consolidated invoices apply to your common business scenarios.

-   Create standalone invoices
-   Edit due dates of draft standalone invoices
-   Edit invoice item prices and custom fields of draft standalone invoices
-   Generate consolidated invoices through bill runs
-   Generate consolidated invoices through Orders
-   Import external invoices as standalone invoices
-   View standalone charge line item details in Zuora Billing

## Working with other features

The following table lists how Unified Invoicing works with other features.

| Feature | Compatibility |
| --- | --- |
| Invoice Settlement | Invoice Settlement supports both standalone and consolidated invoices for AR operations.If you enable both Invoice Settlement and Unified Invoicing, you can perform the common operations on standalone or consolidated invoices:Create credit and debit memosCreate unapplied paymentsReverse invoicesWrite off invoices |
| Data Query | Data Query supports both standalone and consolidated invoices, and can retrieve some new fields added on the InvoiceItem object:BookingReferenceItemTypePurchaseOrderNumberRevRecCodeRevRecTriggerConditionRevenueRecognitionRuleNameSee a sample query in the View standalone charge line item details in Zuora Billing tutorial. |
| Zuora 360+ | Zuora 360+ supports synchronizing standalone and consolidated invoice data to Salesforce in real time. |
| Zuora Finance | If you enable both Zuora Finance and Unified Invoicing, a new finance setting called Manage Non-Subscription Items is available on the Finance Settings page.You can define the default accounting codes and revenue recognition rule for non-subscription invoice items. See Manage Non-Subscription Items for more information. |

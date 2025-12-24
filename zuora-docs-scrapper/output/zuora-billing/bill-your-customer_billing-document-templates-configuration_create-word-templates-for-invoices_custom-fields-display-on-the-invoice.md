---
title: "Custom fields display on the invoice"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/custom-fields-display-on-the-invoice"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:14.994Z"
---

# Custom fields display on the invoice

Understand how to display custom fields on your invoice PDFs by adding them to the template using their API names.

You can include custom fields from Accounts, Subscriptions, Invoice, Invoice Items, Payments, Refunds, Invoice Item Adjustments and Invoice Adjustments (Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment instead.) on your Invoice PDF. To display custom fields on your invoice PDF template, enter the custom field API name in the appropriate place on the Invoice PDF template. These custom fields must be created in the Zuora user interface, where you can define the label, API name, and other values.

Note: Advanced custom fields cannot be used with Word Template. Similarly, custom fields created using Object Manage cannot be utilized with Mail Merge Template.

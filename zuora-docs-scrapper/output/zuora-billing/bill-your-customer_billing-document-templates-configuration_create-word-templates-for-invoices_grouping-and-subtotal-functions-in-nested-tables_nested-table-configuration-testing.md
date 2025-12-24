---
title: "Nested table configuration testing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables/nested-table-configuration-testing"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:45.261Z"
---

# Nested table configuration testing

Ensure you have the necessary prerequisites and templates to test your nested table configuration effectively.

Review the following prerequisites to ensure you are ready to test your nested table configuration.

1.  Copy of the Invoice Template. Click your username at the top right and navigate to to download a sample invoice template for new service.
2.  Edit the invoice template you downloaded. The default template does not include `NestedTable` merge fields. You need to insert them into your invoice template. You can also customize the template based on the [sample nested table templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables).

For more information on working with invoice templates and merge fields, see:

-   [Create a Custom Invoice Template](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/overview-of-creating-word-template).

-   [Customize Invoice Templates Using Word Mail Merge](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/billing-document-templates-customization-using-word-mail-merge).

-   [Create Custom Field](/zuora-platform/extensibility/custom-fields/custom-field-overview).


## Prerequisites for usage data

You need processed usage data to display subtotals based on the charge rating amount. The following are required to populate the Amount field:

-   [Individual Usage](/zuora-billing/bill-your-customer/usage-billing/get-started-with-usage) must be enabled on your tenant.

-   The option [Round and determine a price for usage records individually when rating usage charges?](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/biling-rules---usage) must be set to Yes to calculate a price for each usage record.

-   An existing [product rate plan with usage charges](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges) in the product catalog.

-   You must [import the required usage data](/zuora-billing/bill-your-customer/usage-billing/import-usage-data).

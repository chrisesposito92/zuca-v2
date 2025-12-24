---
title: "Response field mapping configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing/response-field-mapping-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:21.826Z"
---

# Response field mapping configuration

This topic outlines the configuration of response field mapping for e-invoicing, including handling by Zuora for pre-integrated countries and custom configurations for others.

In certain countries, the tax authority generates a unique number or QR code that must be displayed on printed invoices.

When Sovos successfully processes e-invoicing documents, Sovos sends this information to Zuora in the response data, and Zuora stores the data in the EInvoiceData object.

Zuora has handled the response field mapping for countries with which Zuora is pre-integrated, such as India, Italy, and Saudi Arabia. For other countries, you can configure the response field mapping to store any data as needed.

For more information about supported response fields, field path format, and how to configure or retrieve e-invoicing response data, see [E-invoicing response field mapping for Sovos](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoicing-response-field-mapping-for-sovos) and [Configure e-invoicing response field mappings](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-response-field-mappings).

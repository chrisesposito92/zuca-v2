---
title: "Configure e-invoicing in Sovos for Poland"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-poland/configure-e-invoicing-in-sovos-for-poland"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:21.402Z"
---

# Configure e-invoicing in Sovos for Poland

Learn how to configure e-invoicing in Sovos for Poland, including connecting to the KSeF environment and meeting necessary prerequisites.

Before configuring e-invoicing for Poland, ensure that the following requirements are met:

-   Valid Polish Tax ID (PL TaxID): A real and active PL TaxID is required for the business supplier (seller).

-   KSeF Authorization Token: Required to connect to the KSeF Pre-Production environment. You can obtain this token from the [KSeF official portal](https://ksef.podatki.gov.pl/)

-   `SenderSystemID`: Request this value from Sovos.

-   Sovos environment readiness: Ensure that your Sovos UAT environment supports the pl\_Faktura\_2.0 product, including the FA(3) schema.


To enable invoice clearance for Poland, you must configure e-invoicing in Sovos and establish a connection to the KSeF environment.

For detailed instructions, see [Poland - Country Setup Guide](https://docs.sovos.com/en/indirect-tax/indirect-tax-products/einvoicing/compliance-network/country-setup-guides/poland) in the Sovos documentation.

To configure e-invoicing for Poland, complete the following steps:

1.  Create a company profile in Sovos.
2.  Connect the company profile to the appropriate KSeF environment (Pre-Production or Production, as applicable).

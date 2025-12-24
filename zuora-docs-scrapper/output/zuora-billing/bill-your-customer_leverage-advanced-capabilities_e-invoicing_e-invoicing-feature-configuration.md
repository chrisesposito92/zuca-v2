---
title: "E-Invoicing feature configuration"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:35.454Z"
---

# E-Invoicing feature configuration

This topic covers information on configuring the E-Invoicing feature, including common and country-specific settings, to integrate with third-party service providers in Zuora.

Configuring the E-Invoicing feature includes common configurations and country-specific configurations.

In general, common configurations include the following items:

-   Create an e-invoicing service provider to manage authentication keys.

-   Set up an e-invoicing business region to store seller-specific business information and link the business region to the service provider.

-   Configure the buyer's business and address information, including account e-invoicing profiles and bill-to contacts.

-   Define e-invoice file templates that specify how Zuora data maps to the service provider's requirements.


To integrate with third-party e-invoicing service providers, you must configure the E-Invoicing feature in Zuora.

The steps specific to each country can vary due to the unique e-invoicing regulations and requirements of that country or region. These variations might include configurations on the service provider side, defining field mappings, and understanding the e-invoicing outcomes. For more detailed information on country-specific configurations, see Manage country-specific configurations in Sovos .

The billing documents are submitted to the service provider automatically when they are posted and meet the following conditions:

-   The country of the sold-to contacts associated with the billing documents has a specified business region, indicating that a business region is configured for the same country in e-invoicing settings.

-   The customer accounts that the billing documents belong to have the e-invoicing profile enabled.

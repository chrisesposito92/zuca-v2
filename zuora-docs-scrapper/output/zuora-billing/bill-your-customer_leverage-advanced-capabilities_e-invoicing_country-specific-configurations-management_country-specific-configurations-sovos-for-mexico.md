---
title: "Country-specific configurations Sovos for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-sovos-for-mexico"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:22.566Z"
---

# Country-specific configurations Sovos for Mexico

This topic covers information about Mexico's e-invoicing system, CFDI, and how Zuora integrates with Sovos to support compliance with SAT regulations.

Mexico’s electronic invoicing system is highly regulated and follows a clearance-based model overseen by the Tax Administration Service (SAT). This system, known as Comprobante Fiscal Digital por Internet (CFDI), mandates that every electronic invoice must be validated and certified by the SAT in real time before being sent to a customer.

Zuora supports Mexico’s e-invoicing and cancellation workflows through both the UI and API, integrated with Sovos as the certified e-invoicing provider.

## E-invoicing configuration in Sovos for Mexico

To get started with Sovos’ Sandbox (UAT) and/or Production environments, customers must meet the following prerequisites:

-   A valid RFC (Registro Federal de Contribuyentes) obtained from the SAT

-   A valid E.Firma certificate obtained from the SAT

-   A valid CSD (Certificado de Sello Digital) certificate, obtained from the SAT

-   Enable the cancellation function on the SAT to use cancellation through Sovos

-   Add your transmission credentials to your Admin Settings or via the [Configuration v2 resource](https://docs.sovos.com/indirect-tax/indirect-tax-products/einvoicing/indirect-tax-api/configuration/configuration) (API)


Sovos simplifies e-invoicing configuration for Mexico's CFDI regulations by having its Professional Services team handle all backend setup, including connecting to the tax authority via an authorized provider and managing required credentials like the Digital Seal Certificate (CSD). The team also establishes PEPPOL connections if needed. For more details, visit [Sovos Docs](https://docs.sovos.com/en/indirect-tax/indirect-tax-products/einvoicing/compliance-network/country-setup-guides/mexico).

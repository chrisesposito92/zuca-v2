---
title: "Field mapping management for e-invoice file templates for Poland"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-poland/field-mapping-management-for-e-invoice-file-templates-for-poland"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:21.754Z"
---

# Field mapping management for e-invoice file templates for Poland

This topic outlines the default mappings and configuration requirements for e-invoicing in Poland.

Ensuring correct field mapping is critical for successful clearance in the KSeF system. The following tables outline the default mappings and requirements for Poland.

## E-invoicing business regions configuration for Poland

The following fields in the e-invoicing business region are used to map Seller information.

| UI section | UI field | API field | Required | Description |
| --- | --- | --- | --- | --- |
| Basic Info | Country | country | Yes | Select Poland. |
|  | Legal Business Name | businessName | Yes | Full official name of the Seller registered with the tax authority. |
|  | Legal Business Number | businessNumber | Yes | Polish NIP (Tax Identification Number). Must be 10 digits without the 'PL' prefix. |
|  | Trade Name | tradeName | No | Name the Seller is known as. |
|  | Tax Register Number | taxRegisterNumber | No | Seller's VAT identifier if different from NIP. |
| Business Address | Address 1 | addressLine1 | Yes | Street address. |
|  | Postal Code | postalCode | Yes | Postal code for the address. |
|  | City | city | Yes | City name. |
|  | State/Province | state | No | State or province abbreviation (not strictly validated for PL). |
| Service Provider | Provider | serviceProviderId | Yes | Select a Sovos service provider. |

## E-invoicing profiles for accounts configuration for Poland

These fields map Buyer information to the e-invoice.

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Generate E-Invoice for Customer | enabled | Yes | Enable to trigger e-invoicing for this account. |
| Business Category | BusinessCategory | Yes | B2B, B2C, or B2G. B2C invoicing remains optional under KSeF 2.0. |
| Legal Business Name | businessName | Yes | Full official name of the Buyer. |
| Legal Business Number | businessNumber | Yes | Buyer's Polish NIP. Must be 10 digits without the 'PL' prefix. |

## Sold-to contacts for accounts configuration for Poland

The following fields from the Sold-To contact are used as the tax address.

| UI field | API field | Required | Description |
| --- | --- | --- | --- |
| Country | country | Yes | Select Poland. |
| Address 1 | addressLine1 | Yes | The street and building number of the buyer's address. |
| Postal Code | postalCode | Yes | The postal identifier for the buyer's address. |
| City | city | Yes | The name of the city, town, or village. |

---
title: "Supported partners and countries"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-overview/supported-partners-and-countries"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:34.772Z"
---

# Supported partners and countries

Zuora's E-Invoicing feature integrates with partners like Sovos, Avalara, and Peppol, supporting various countries with specific configurations for each partner and country, including pre-integrated and non-pre-integrated solutions.

Zuora's E-Invoicing feature can be integrated with some E-Invoice solutions partners in these countries.

## Supported partners

The supported e-invoicing partners are Sovos, Avalara, and Peppol. The integration with these partners is different. For partner-specific integration steps, see the following:

-   [E-invoicing with Sovos](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos)
-   [E-invoicing with Avalara](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara)
-   [E-invoicing with PEPPOL Extract](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract)

For Sovos and Avalara, to configure the E-Invoicing feature for each country, you have to configure e-invoicing in Sovos and Avalara first and then configure the E-Invoicing feature in Zuora. The configuration steps specific to each country can vary due to the unique e-invoicing regulations and requirements of that country or region. These variations might include configurations on the service provider side, defining field mappings, and understanding the e-invoicing outcomes.

## Pre-integrated countries

Zuora is pre-integrated with the following countries supported by Sovos and Avalara. Zuora provides default e-invoice file templates and response field mapping for these countries. Besides the preceding integration steps, you also need to know the country-specific configurations listed below.
Note: If you want any other unsupported vendors or countries, you can contact your Account Executive or Customer Success Manager.
| Partner | Pre-integrated country | Relevant article |
| --- | --- | --- |
| Sovos | India | Country-specific configurations in Sovos for India |
|  | Italy | Country-specific configurations in Sovos for Italy |
|  | Saudi Arabia | Country-specific configurations in Sovos for Saudi Arabia |
|  | Mexico | Country-specific configurations in Sovos for Mexico |
|  | Brazil | Country-specific configurations in Sovos for Brazil |
|  | Poland | Country-specific configurations in Sovos for Poland |
| Avalara | Mexico | Country-specific configurations in Avalara for Mexico |
|  | Australia | Country-specific configurations in Avalara for Australia |

## Countries not pre-integrated

For Sovos and Peppol, Zuora also provides General default e-invoice file templates for countries that are not pre-integrated. You need to refer to Sovos and Peppol examples and customize your own e-invoice file templates from these General templates. For example, for Sovos, you need to refer to its country-specific examples.

For Avalara, you need to refer to Avalara country-specific examples and create your own e-invoice file templates from Zuora Blank templates.

Note: See the [full list of supported countries](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/supported-countries-by-zuora-e-invoicing) for more details.

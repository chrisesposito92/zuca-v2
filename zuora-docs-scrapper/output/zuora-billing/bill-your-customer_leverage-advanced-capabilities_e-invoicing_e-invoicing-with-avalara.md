---
title: "E-invoicing with Avalara"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:40.236Z"
---

# E-invoicing with Avalara

This section is intended for Zuora Global Service engineers and customer developers who wish to configure e-invoice file templates for Avalara integration.

This topic introduces the process of integration with Avalara. Zuora E-Invoice framework enables you to build country and customers specific integration with Avalara E-Invoice solution.

The Zuora E-Invoicing feature provides the extensibility and configurability to empower you to build country- and customer-specific integrations with Avalara E-Invoice solution including:

-   Create e-invoice file templates to streamline integration for pre-integrated countries

-   Provide Peppol network and Clearance processes to streamline integration for countries not pre-integrated


## Supported countries

Zuora provides pre-integrated support for certain countries covered by Avalara. Pre-integration streamlines the e-invoicing process by offering:

-   Default e-invoice file templates

-   Response field mappings

-   Country-specific configurations


The following table lists all pre-integrated countries:

| Country | Default e-invoicing file template for Invoice | Default e-invoicing file template for Credit Memo | Default e-invoicing file template for Debit Memo | Country specific configurations |
| --- | --- | --- | --- | --- |
| Mexico | Y | Y | Y | See Country-specific configurations for Mexico. |
| Australia | Y | Y | Y | See Country-specific configurations for Australia. |

You can also e-invoice customers in additional countries supported by Avalara ELR, even if they are not pre-integrated with Zuora.

-   For Avalara, Zuora supports:

    -   Countries that are part of the PEPPOL network.

    -   Selected non-PEPPOL countries that use country-specific clearance processes.


Note: See the [full list of supported countries](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/supported-countries-by-zuora-e-invoicing) for details.

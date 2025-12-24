---
title: "Launch on production environment"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/launch-on-production-environment"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:35.078Z"
---

# Launch on production environment

Learn how to set up and launch the Sovos production environment for e-invoicing with Zuora.

You need to collaborate with Sovos to set up the Sovos production environment, and Sovos provisions a production environment for you.

To launch on the Sovos production environment, complete the following tasks:

1.  Create a Sovos developer account in the Sovos Developer Hub, and generate the API key and API secret in Sovos. These credentials enable Zuora to access the Sovos sandbox environment. For more information, see the [Getting Started](https://developer-guide.sovos.com/connect-once-api/getting-started/) section of the Sovos developer guide. You will use the API key and API secret when configuring Sovos as a service provider in Zuora. For more information, see [Configure e-invoicing service providers](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-service-providers-configuration).

    Note: A TLS certificate and password are no longer required for integration with Sovos. Zuora now uses token-based authentication for all supported countries, including India.

2.  Configure e-invoicing in Sovos for a specific country. You must meet the country-specific prerequisites before starting to configure the Sovos sandbox environment and complete country-specific configurations. For more information, see the [Country Prerequisites](https://developer-guide.sovos.com/connect-once-api/integration-guides/e-invoicing-compliance/country-prerequisites/) and [Country Configurations](https://developer-guide.sovos.com/connect-once-api/integration-guides/e-invoicing-compliance/country-configurations/) sections of the Sovos developer guide.

    -   For some countries, you may need to register with the country's tax authority and get the necessary credentials. You need to configure these credentials in Sovos, and Sovos will use the credentials to submit data to the country's tax authority.

    -   After obtaining credentials from Sovos and retrieving your organization ID from Sovos, you can call a dedicated configuration endpoint to create a company and assign a product.


3.  [Configure Zuora E-Invoicing feature](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/configure-zuora-e-invoicing-feature).
4.  Get the `SenderSystemId` for the Sovos production environment from Sovos, copy the e-invoice file template you verified in the Zuora sandbox environment, and modify the value of the `SenderSystemId` field in the template to match the Sovos production environment. For more information, see [Create and test e-invoice file templates](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing).
5.  Upload e-invoice file templates and configure response field mapping:

    -   Upload e-invoice file templates that you have tested in the sandbox environment and configure them as needed.

    -   Configure the field mappings. Ensure that the field mappings on the business region are consistent with the configurations in the sandbox environment. For more information, see [Configure e-invoicing response field mappings](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-response-field-mappings).

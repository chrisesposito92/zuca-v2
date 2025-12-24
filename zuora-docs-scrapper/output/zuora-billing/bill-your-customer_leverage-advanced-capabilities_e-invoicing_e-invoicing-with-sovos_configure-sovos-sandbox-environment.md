---
title: "Configure Sovos sandbox environment"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/configure-sovos-sandbox-environment"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:29.859Z"
---

# Configure Sovos sandbox environment

Learn how to set up and configure the Sovos sandbox environment, including creating developer accounts, generating API credentials, and meeting country-specific prerequisites.

You need to collaborate with Sovos to set up your Sovos sandbox (UAT) environment, and depending on the country, Sovos provisions a simulator or a sandbox environment for you.

To configure the Sovos sandbox environment, complete the following tasks:

1.  Create a Sovos developer account in the Sovos Developer Hub, and generate the API key and API secret in Sovos. These credentials enable Zuora to access the Sovos sandbox environment. For more information, see the [Getting Started](<!--Link text: Getting Started, Path: https://developer-guide.sovos.com/connect-once-api/getting-started/-->) section of the Sovos developer guide. You will use the API key and API secret when configuring Sovos as a service provider in Zuora. For more information, see [E-invoicing service providers configuration](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-service-providers-configuration).

    Note: A TLS certificate and password are no longer required for integration with Sovos. Zuora now uses token-based authentication for all supported countries, including India.

2.  Configure e-invoicing in Sovos for a specific country. You must meet the country-specific prerequisites before starting to configure the Sovos sandbox environment and complete country-specific configurations. For more information, see the [Country Prerequisites](https://developer-guide.sovos.com/connect-once-api/integration-guides/e-invoicing-compliance/country-prerequisites/) and [Country Configurations](https://developer-guide.sovos.com/connect-once-api/integration-guides/e-invoicing-compliance/country-configurations/) sections of the Sovos developer guide.

    -   For some countries, you may need to register with the country's tax authority and get the necessary credentials. You need to configure these credentials in Sovos, and Sovos will use the credentials to submit data to the country's tax authority.

    -   After obtaining credentials from Sovos and retrieving your organization ID from Sovos, you can call a dedicated configuration endpoint to create a company and assign a product.


3.  Contact Sovos to get country-specific SCI (Sovos Canonical Invoice) samples of the up-to-date versions. You can refer to the [e-Invoicing Compliance](https://developer-guide.sovos.com/connect-once-api/integration-guides/e-invoicing-compliance/) section of the Sovos developer guide to see what an SCI sample looks like.

    -   For countries not pre-integrated with Zuora, you will use the request sample for configuring the e-invoice file template in Zuora. For more information, see [Create and test e-invoice file templates](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing).

    -   You will use the response sample for configuring the response field mapping of the service provider in Zuora. For more information, see [Configure e-invoicing response field mappings](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-response-field-mappings).


4.  Get the `SenderSystemId` for the Sovos sandbox environment from Sovos. The `SenderSystemId` identifies the system where the transactions are sent. You will use this information for configuring e-invoice file template. For more information, see [Create and test e-invoice file templates](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing).

    Note: You will perform the same tasks above in the Sovos production environment. You can perform each task in Sovos production environment immediately after performing the same in Sovos sandbox environment without completing all Sovos sandbox environment configurations. For more information, see [Launch on production environment](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/launch-on-production-environment).

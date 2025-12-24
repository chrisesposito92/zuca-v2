---
title: "Launch on production environment"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/launch-on-production-environment"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:12.703Z"
---

# Launch on production environment

Collaborate with Avalara to set up and launch the Avalara production environment by completing necessary tasks, including generating API keys, identifying tax information, and configuring e-invoicing features.

You need to collaborate with Avalara to set up the Avalara production environment. To launch on the Avalara production environment, complete the following tasks.

1.  After setting up your Avalara E-Invoicing and Live Reporting account, you need to generate the API key and secret. For more information, see [Generate an API token](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/uev1682056823407.html). You will use the API key and secret when configuring Avalara as a service provider in Zuora. For more information, see [Configure e-invoicing service providers](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-service-providers-configuration).
2.  Identify country and Tax ID information required by Avalara. For more information, see [Country and Tax ID mapping required by Avalara](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/jth1691652150367.html). Use Australia and Mexico as examples:

    -   For Australia, after identifying the country and Tax ID information required by Avalara is Australian Business Number (ABN), you can look up the ABN at the Australian Government website: [https://abr.business.gov.au/](https://abr.business.gov.au/). After that, you may enter the ABN number as the Local identifier when applying a new Peppol ID during activation. At last, you will enter this ABN in the Legal Business Number field when configuring the Business Region section in Zuora.
    -   For Mexico, after identifying the country and Tax ID information required by Avalara is RFC Number, you need to get the RFC number from your country-specific tax website. After that, you must enter the RFC number in Avalara during activation. At last, you will enter the RFC Number in both of the Legal Business Number field when configuring the Business Region section in Zuora.

3.  Activate the Avalara E-Invoicing and Live Reporting product. The Avalara activation workflow is initiated when you onboard or add a new company. The activation workflows vary with different countries in Avalara:

    -   For countries that are part of the Peppol network, Avalara collects information and completes the activation on your behalf. However, you need to enter your existing Peppol ID in Avalara or apply a new Peppol ID from Avalara. For more information, see [Complete activation for Peppol](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/aoa1681100424767.html). If you want to apply a new Peppol ID from Avalara, you need to use the identified [Country and Tax ID mapping required by Avalara](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/jth1691652150367.html) as the Local identifier. For Australia, the ABN is used as the Local identifier. After the activation is completed, you need to record the Peppol ID, for example, 0151::xxxx. You will use this information when configuring the Business Region section in Zuora.
        -   Enter “0151” as the Business Number Schema Id . For other countries, this number may be different, see [https://docs.peppol.eu/poacc/billing/3.0/codelist/eas/](https://docs.peppol.eu/poacc/billing/3.0/codelist/eas/)
        -   “xxxx” part of the Peppol ID is the ABN number that you will enter as the Legal Business Number .
    -   For a few countries that aren’t part of Peppol, Avalara provides guidance, and you use the country-specific tax websites to complete the activation, and submit the proof of activation to Avalara. For a list of these countries and corresponding activation process, see [Complete activation for countries not part of Peppol network](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/ruj1680858478127.html). You need to use the identified [Country and Tax ID mapping required by Avalara](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/jth1691652150367.html) during the activation. For Mexico, the identified information is RFC number.
    -   For other countries not part of Peppol, Avalara will complete the activation on your behalf. Note: Currently, Zuora does not support the countries mentioned in the third situation.

4.  As a first user or organization administrator, to onboard your Avalara E-Invoicing and Live Reporting product, you need to select a mandate and create users. For more information, see [Onboard E-Invoicing and Live Reporting](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/pzn1729882674259.html). When selecting a mandate, the process differs. For more information, see [Select the mandate, platform, and network for your business](https://knowledge.avalara.com/bundle/nsz1680268923536_nsz1680268923536/page/nuk1680858104579.html). Use Australia and Mexico as examples:

    -   For Australia, select Peppol.
    -   For Mexico, select the following:
        -   Mexico Comprobantes Fiscal Digital por Internet (CFDI) - B2B
        -   Mexico Comprobantes Fiscal Digital por Internet (CFDI) - B2C

    Note:

    -   Each country only supports one mandate type.
    -   Ensure the business category in our Zuora account matches one of the settings in Avalara. For example, if you select B2B and B2C in Avalara and specify B2B in your Zuora account, the B2B data relevant data is finally transmitted. For more information, see [Configure e-invoicing profiles for accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts).

5.  [Configure Zuora E-Invoicing feature](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/configure-zuora-e-invoicing-feature).
6.  Upload e-invoice file templates and configure response field mapping:

    -   Upload e-invoice file templates that you have tested in the sandbox environment and configure them as needed.
    -   Configure the field mappings. Ensure that the field mappings on the business region are consistent with the configurations in the sandbox environment. For more information, see [Configure e-invoicing response field mappings](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-response-field-mappings).

---
title: "Country-specific configurations for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-for-mexico"
product: "zuora-billing"
scraped_at: "2025-12-24T18:32:02.235Z"
---

# Country-specific configurations for Mexico

Learn how to configure e-invoicing for invoice clearance in Mexico by activating Avalara E-Invoicing and Live Reporting, obtaining an RFC number, and setting up the necessary mandates.

To configure e-invoicing for invoice clearance in Mexico, you must activate Avalara E-Invoicing and Live Reporting product for Mexico in Avalara:

1.  Set up an Avalara E-Invoicing and Live Reporting account, and generate API key and secret. For more information, see Generate an API token .
2.  Get RFC number from Mexico tax authority.

    RFC stands for "Registro Federal de Contribuyentes" in Spanish, which translates to "Federal Taxpayer Registry" in English. It is a unique tax identification number assigned by the Mexican tax authority (SAT) to individuals and companies that are required to pay taxes in Mexico.

    -   Format for individuals, for example, GARC 850912 H89

        -   First four letters: Derived from the name (for example, the first two letters of the last name, the first letter of the second last name, and the first letter of the first name).

        -   Six digits: Date of birth in YYMMDD format.

        -   Three alphanumeric characters: Assigned to avoid duplicates.

    -   Format for businesses, for example, ABC 990501 9F3

        -   First three letters: Derived from the company's name or corporate entity.

        -   Six digits: Date of registration or establishment in YYMMDD format.

        -   Three alphanumeric characters: Assigned to avoid duplicates.


    The RFC number is used to configure E-Invoice business regions in Zuora.

3.  Activate the Avalara E-Invoicing and Live Reporting product for Mexico. The Avalara activation workflow is initiated when you onboard or add a new company . For more information, see Activation for Mexico .
4.  Select a mandate and create users. For more information, see Select the mandate, platform, and network for your business . For Mexico, select the following:
    1.  Mexico Comprobantes Fiscal Digital por Internet (CFDI) - B2B
    2.  Mexico Comprobantes Fiscal Digital por Internet (CFDI) - B2C

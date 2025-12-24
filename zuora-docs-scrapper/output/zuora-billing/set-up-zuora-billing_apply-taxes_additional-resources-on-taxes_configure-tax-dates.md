---
title: "Configure tax dates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/configure-tax-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:57.318Z"
---

# Configure tax dates

Learn how to configure tax dates for different countries or regions in Zuora, including default settings and options for customization.

Zuora supports the configuration of tax dates for each country or region. By default, the tax date for a country or region is set to Document Date.

-   If you do not have the Invoice Settlement feature enabled, Document Date defaults the invoice date.

-   If you have the Invoice Settlement feature enabled, Document Date defaults the memo date.


If you use the tax code of Zuora Tax for tax automation and set the " When service period of an invoice item crosses multiple tax rate period, it will generate: " billing rule to Multiple Tax Items, the tax date configuration does not affect the generation of multiple taxation items.

To configure one tax date for a country or region, perform the following steps:

1.  Click your username at the top right and navigate to .
2.  Click Setup Tax Engine and Tax Date .
3.  In the Configure Tax Dates area, and click add new country / region . and configure the following information:
    1.  From the list displayed in the Country / Region column, select a country or region that you want to configure a tax date for.
    2.  From the list displayed in the Country / Region column, select an option as the tax date.

        -   Document Date (default)

        -   Service Period Start Date

        -   Service Period End Date


    3.  In the Actions column, click save to save the configurations.
        With this feature, you can also see any tax date setting changes by using the Audit Trial feature and [Settings API](https://www.zuora.com/developer/api-references/api/tag/Settings).

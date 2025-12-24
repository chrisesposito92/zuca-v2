---
title: "Set up taxation codes"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/install-vertex-o-series-tax-connector-app/set-up-taxation-codes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:50.982Z"
---

# Set up taxation codes

Learn how to set up taxation codes using the Connect Tax Engine, including configuring tax code details and activating them in the product catalog.

To set up a tax code that uses the Connect Tax Engine:

1.  Click your username at the top right and navigate to .
2.  Click Setup Taxation Codes.
3.  Click add new tax code.
4.  In the Basic Information area, complete the tax code details:

    -   Tax Code Name: Enter the name of the tax code to be selected in the product catalog when discerning which Connect Tax Engine the charges will use to calculate tax.

    -   Use Multiple Connect Tax Engines: Select this checkbox if you want to use multiple Connect Tax Engines.

        | Selected | Not selected |
        | --- | --- |
        | Tax Engines: Fill in the Mapping Formula tab with mapping rules which define how to select different Connect Tax Engines to handle tax calculation for various customer accounts. Refer to the Example tab to copy and customize pre-defined mapping formulas. See Tax Engine Mapping Formula for more information. | Tax Engine: Select the name that you have specified for the Connect Tax Engine. External Company Code: Select the company code created when setting up the Connect Tax Engine. |

    -   Active: This is No by default. You will activate it later.

    -   Description (Optional): Describe the tax code and the tax app that will be used for future reference.


5.  Click save.
6.  Click Activate to ensure the tax code is present in the product catalog.

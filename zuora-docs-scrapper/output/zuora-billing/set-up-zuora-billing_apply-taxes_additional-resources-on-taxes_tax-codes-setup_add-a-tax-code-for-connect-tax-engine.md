---
title: "Add a tax code for Connect Tax Engine"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup/add-a-tax-code-for-connect-tax-engine"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:56.107Z"
---

# Add a tax code for Connect Tax Engine

Learn how to add and activate a tax code using the Connect Tax Engine in your product catalog.

To set up a tax code that uses the Connect Tax Engine:

1.  Click your username at the top right and navigate to .
2.  Click Setup Taxation Codes.
3.  Click Add New Tax Code.
4.  In the Basic Information area, complete the tax code details:
    1.  Tax Code Name: Enter the name of the tax code to be selected in the product catalog when discerning which Connect Tax Engine the charges will use to calculate tax.
    2.  Use Multiple Connect Tax Engines: Select this checkbox if you want to use [multiple Connect Tax Engines](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/connect-tax-engines).

        | Selected | Not selected |
        | --- | --- |
        | Tax Engines: Fill in the Mapping Formula tab with mapping rules which define how to select different Connect Tax Engines to handle tax calculation for various customer accounts. Refer to the Example tab to copy and customize pre-defined mapping formulas. See Tax Engine Mapping Formula for more information. | Tax Engine: Select the name that you have specified for the Connect Tax Engine.External Company Code: Select the company code created when setting up the Connect Tax Engine. |

    3.  Active: This is No by default. You will activate it later.
    4.  Description (Optional): Describe the tax code and the tax app that will be used for future reference.
5.  Click Save.
6.  Click Activate to ensure the tax code is available in the product catalog.

The taxation code is created and activated, making it available for selection in the product catalog.

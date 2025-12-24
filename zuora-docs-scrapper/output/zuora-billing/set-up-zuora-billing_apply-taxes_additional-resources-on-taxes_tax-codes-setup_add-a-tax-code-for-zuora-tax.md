---
title: "Add a tax code for Zuora Tax"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup/add-a-tax-code-for-zuora-tax"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:48.562Z"
---

# Add a tax code for Zuora Tax

Learn how to add a tax code using Zuora Tax by navigating through settings, setting up taxation codes, and importing tax rates.

To set up a tax code that uses Zuora Tax:

1.  Click your username at the top right and navigate to .
2.  Click Setup Taxation Codes.
3.  Click Add New Tax Code.
4.  Enter the following information in the Basic Information panel:
    1.  Specify a name in the Tax Code Name field to identify the tax code.
        This field is used to map to the product charge.

    2.  Select Zuora Tax from the Tax Engine list.
        This determines which configured tax engine will be used to calculate tax rates.

    3.  Enter a description in the Description field.

        The description is available in the following documents:

        -   Invoice Details Export
        -   Credit Taxation Item Details Export (Limited Availability)
        -   Debit Taxation Item Details Export (Limited Availability)

    4.  Click Save.
5.  Import tax rates to Zuora:
    1.  Click Choose File in the Zuora Tax Engine: Tax Rates panel to locate the CSV file, then click Import Tax Rates.
        You can download the tax rate import template in CSV format by clicking the here link. Refer to [the sample file](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/918feccf-21ab-4e57-ac04-54ccc83da353?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxOGZlY2NmLTIxYWItNGU1Ny1hYzA0LTU0Y2NjODNkYTM1MyIsImV4cCI6MTc2NjYzOTUwNiwianRpIjoiNDUxNDM5NmU2NzUxNDVjZGEwMWE3NWIyMzlhNjk0ZmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.SH1YDHu1Y_wH8dYIGKbepl76Hw4pA2n_X_TW2Nyq4xE&response-content-disposition=attachment%3B+filename%3D%22Tax_Rates_Import_-_Sample.csv%22) and see [Load Tax Rates](/zuora-billing/set-up-zuora-billing/apply-taxes/load-tax-rates) for CSV field definitions.

    2.  Click OK when Zuora confirms that the tax rates have been uploaded.

If you successfully upload the CSV file, the tax code is now activated.

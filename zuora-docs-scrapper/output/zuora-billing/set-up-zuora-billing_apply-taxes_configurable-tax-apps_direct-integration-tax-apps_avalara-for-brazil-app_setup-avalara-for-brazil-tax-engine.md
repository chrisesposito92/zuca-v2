---
title: "Setup Avalara for Brazil tax engine"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/avalara-for-brazil-app/setup-avalara-for-brazil-tax-engine"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:13.245Z"
---

# Setup Avalara for Brazil tax engine

Learn how to configure Avalara Brazil in Zuora Billing to streamline your tax compliance process.

Follow these steps to streamline your tax compliance process:

1.  Configure Avalara Brazil in Zuora Billing:
    1.  Click Setup New Tax Engine and select Avalara Brazil from the dropdown list.
    2.  Enter the following details:

        1.  Engine Name - The name of the engine.

        2.  Vendor - The name of the third-party vendor. By default, Avalara Brazil is displayed in the field.

        3.  Environment - The environment where the tax engine will be applied.

        4.  Authentication Type - OAuth 2.0 is the default authentication type. Enter the client ID and client secret from your tax vendor. Refer to Avalara Brazil's [documentation](https://developer.avalara.com/goods-calculation-en/authentication/authentication_account/) for authentication setup. If you don't have access to the sandbox and production environments for AvaTax Brazil, please contact Avalara Sales. Note: Avalara offers two environments for AvaTax Brazil: Sandbox and Production. Each environment operates independently, with its own set of credentials. Users with a Sandbox account cannot access Production, and vice versa.


    3.  Adjust the Advanced Settings as needed.

        | Field | Description |
        | --- | --- |
        | Advanced Settings |  |
        | Tax Void Call Handling | The option to determine whether the external Vendor must be voided. The available options are:Pass Through - No call will be made to the vendor; however, the Invoice Cancel Post will be successful (as it says Pass Through)Enable - A call will be made to the vendor.Block - No call will be made to the vendor, and it will return blocked (i.e., Invoice Cancel Post wouldn't be successful). |
        | Netread Timeout | The duration of time in minutes before the timeout occurs. |
        | Request Headers | The option to add additional headers to your tax requests. While custom headers may not be frequently necessary, they prove beneficial in situations where authentication is required through firewalls or in other specific scenarios. |
        | Field Mappings | The option to retrieve data from the tax engine response and store it on the Taxation Item object. For more information on Flexible Field Mapping, see Flexible Tax Mapping. |
        | Custom Fields | The option to select existing custom fields for the tax engine. |
        | Company and Seller Information | The option to add company code, name, and address. |

    4.  Configure the template as required in the Request Template section. Click Use Default Template to use the pre-configured template. The Request Template, in Text/XML or Application/JSON format, is where Zuora populates invoice information based on your configuration.
    5.  Click Save .
2.  Create and Activate Tax Code
    1.  After configuring the tax engine, create and activate a tax code.
    2.  Follow the steps in Set Up Tax Codes - Zuora.
3.  Associate Product Rate Plan Charge with Tax Code
    1.  After configuring the tax engine, create and activate a tax code.
    2.  Follow the steps in the Set up tax codes section.
4.  Generate Invoice
    1.  Create a bill run for the test account and generate an invoice. For more information, see Creating Bill Runs.
    2.  Verify that the tax value is correctly displayed on the invoice.
5.  View Tax Logs on System Health
    1.  Navigate to the Tax Dashboard under System Health to review request and response logs from your new tax engine.

        ![](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/billing/configurable_tax_apps/_media/Tax_Dashboard.png)

6.  Settings API Quickstart
    1.  Use the Settings API for CRUD actions related to tax engines.
    2.  Create, update, get, and delete tax engines with the provided API endpoints. For more information, see Connect Tax Engines Settings.
7.  Setup Tax Codes with API
    1.  After completing the configuration process, create a tax code with Settings API. For more information, see Set Up Tax Codes - Zuora.

        curl --location 'https://rest.sandbox.eu.zuora.com/se...global-tax-hub' \\ --header 'Authorization: Bearer ec165dca4d3842848e8224944aa9a843' \\ --header 'Content-Type: application/json' \\ --data '{ "taxEngineId": "8a90a9b785947dfb0185949dd1231a36", "active": true, "description": "", "name": "TaxCode Name", "taxCompanyId": "8a90a9b786544a6901865cec97ae6a6c" }'

8.  Associate Product Rate Plan Charge with Tax Code (API)
    1.  Associate a tax code with a product rate plan charge. For more information, refer to the following links:

        -   [CRUD: Create a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_POSTProductRatePlanCharge)


        -   [CRUD: Update a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_PUTProductRatePlanCharge)
        -   [CRUD: Retrieve a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_GETProductRatePlanCharge)

9.  Generate Invoice
    1.  Create a bill run for the test account and generate an invoice. For more information, see [Creating Bill Runs](https://www.zuora.com/developer/api-references/quickstart-api/operation/createBillRun/).

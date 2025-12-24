---
title: "Configure tax engine with settings API"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/vertex-advantage-tax-app-v2/configure-tax-engine-with-settings-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:35.254Z"
---

# Configure tax engine with settings API

Learn how to configure tax engines using the Settings API, including creating, updating, retrieving, and deleting tax codes.

The Settings API facilitates the configuration of tax engines, offering CRUD (Create, Read, Update, Delete) operations. You can use the provided API endpoints to manage tax engines, enabling actions such as creation, updating, retrieval, and deletion. For detailed information, refer to the documentation.

1.  Setup Tax Codes with API:
    1.  After completing the configuration process, create a tax code with Settings API. For more information, see Set Up Tax Codes - Zuora.

        curl --location 'https://rest.sandbox.eu.zuora.com/settings/tax-codes/global-tax-hub' \\ --header 'Authorization: Bearer ec165dca4d3842848e8224944aa9a843' \\ --header 'Content-Type: application/json' \\ --data '{ "taxEngineId": "8a90a9b785947dfb0185949dd1231a36", "active": true, "description": "", "name": "TaxCode Name", "taxCompanyId": "8a90a9b786544a6901865cec97ae6a6c" }'

2.  Associate Product Rate Plan Charge with Tax Code (API):
    1.  Associate a tax code with a product rate plan charge. For more information, refer to the following links:

        -   [CRUD: Create a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_POSTProductRatePlanCharge)

        -   [CRUD: Update a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_PUTProductRatePlanCharge)

        -   [CRUD: Retrieve a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_GETProductRatePlanCharge)


3.  Generate Invoice
    1.  Create a bill run for the test account and generate an invoice. For more information, see [Creating Bill Runs](https://www.zuora.com/developer/api-references/quickstart-api/operation/createBillRun/).

        Note:

        Current users of the Vertex Advantage Tax Connector app (v1) will experience significant enhancements and improvements when switching to the new Vertex Advantage Tax Connect app v2.

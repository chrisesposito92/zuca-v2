---
title: "Configure Anrok tax connector using APIs"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/configure-anrok-tax-connector-using-apis"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:01.333Z"
---

# Configure Anrok tax connector using APIs

Learn how to configure the Anrok tax connector using APIs for CRUD operations on tax engines, create tax codes, and associate them with product rate plan charges.

1.  Use the Settings API for CRUD actions related to tax engines.
2.  Create, update, get, and delete tax engines with the provided API endpoints. For more information, see [Connect Tax Engines Settings](/zuora-platform/system-management/settings-api/settings-api-tutorials/connect-tax-engines-settings).
3.  After completing the configuration process, create a tax code with Settings API. For more information, see [Set Up Tax Codes - Zuora](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-codes-setup/tax-codes-configuration-through-settings-api).
4.  Associate a tax code with a product rate plan charge. For more information, refer to the following links:

    -   [CRUD: Create a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_POSTProductRatePlanCharge)

    -   [CRUD: Update a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_PUTProductRatePlanCharge)

    -   [CRUD: Retrieve a product rate plan charge](https://www.zuora.com/developer/api-reference/#operation/Object_GETProductRatePlanCharge)


5.  Create a bill run for the test account and generate an invoice. For more information, see [Creating Bill Runs](https://www.zuora.com/developer/api-references/quickstart-api/operation/createBillRun/).

---
title: "Vertex Advantage Tax Connector app v1"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/vertex-advantage-tax-connector-app-v1"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:03.484Z"
---

# Vertex Advantage Tax Connector app v1

The Vertex Advantage Tax Connector app integrates with the Vertex Advantage tax solution, enabling seamless tax calculations and compliance through the Zuora platform.

Note:

This app connects to [Vertex Advantage tax solution](https://www.vertexinc.com/solutions/products/vertex-advantage).

## Prerequisites

-   Submit a request at [Zuora Global Support](https://support.zuora.com/) to enable the Connect Tax Engines feature in your Zuora tenant.
-   Purchase the [Vertex Advantage Tax Connector app](https://connect.zuora.com/appstore/apps/vertex-tax-connector-1-052def47-579c-4bd5-8508-d0a463f6cd71) from the Marketplace.
-   Ensure your billing user role includes the Admin permission.


## Install the app

Follow the instructions in Install an App to install the app. Specific to the Tax app:

-   Run mode - Select the tax vendor you want to use.

-   Tax - Select the desired credentials to the selected tax vendor. If no desired credential can be found, click New to create the credentials for the new Tax instance.

    -   Username and Password - The credentials for your tax vendor account.

    -   Security Token - Enter the Taxamo-Private-Token for your taxamo account.

        -   This is found in your Taxamo environment: from the left navigation menu go to . See [Taxamo Docs](https://integrate.taxamo.com/reference/authentication) for more information.

    -   URL - The endpoint for tax calculation requests for Taxamo is `https://services.taxamo.com.`


Note:

Zuora's tax integration is built on Taxamo's v2 RESTful API. Other versions, such as v1 or v3, are not supported. For more information, refer to the [Taxamo V2 API Reference](https://developer.vertexinc.com/vertex-e-commerce/reference/introduction).

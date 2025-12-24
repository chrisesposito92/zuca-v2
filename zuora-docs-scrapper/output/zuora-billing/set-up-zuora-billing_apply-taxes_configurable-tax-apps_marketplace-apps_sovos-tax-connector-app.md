---
title: "Sovos Tax Connector app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/sovos-tax-connector-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:08:37.256Z"
---

# Sovos Tax Connector app

The Sovos Tax Connector app requires enabling the Connect Tax Engines feature in your Zuora tenant, purchasing the app from the Marketplace, and ensuring the billing user role includes Admin permission. Follow installation instructions specific to the Tax app.

## Prerequisites

-   Submit a request at [Zuora Global Support](https://support.zuora.com/) to enable the Connect Tax Engines feature in your Zuora tenant.
-   Purchase the

    [Sovos Tax Connector app](https://www.zuora.com/marketplace/app/?appId=507&utm_source=Sovos%20Tax%20Connector&utm_campaign=fy20q2_marketplace_zuora_app&cid=FY20Q2-WBSITE-GLOBL-WBCT-Marketplace%20Zuora%20App) from the Marketplace.
-   Ensure your billing user role includes the Admin permission.


## Install the app

Follow the instructions in Install an App to install the app. Specific to the Tax app:

-   Run mode - Select the tax vendor you want to use.

-   Tax - Select the desired credentials for the selected tax vendor. If no desired credential can be found, click New to create the credentials for the new Tax instance.

    -   Username and Password - The credentials for your tax vendor account.

    -   Security Token - The security token for your tax vendor account.

    -   URL - The endpoint of your tax vendor account. Check this [resource on Sovos](https://developer-guide.sovos.com/simple-connect-api/getting-started/quickstart-guide-for-sandbox-environment/) for information.

Note:

You must provide the username, password, and security token to install the app.

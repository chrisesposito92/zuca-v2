---
title: "CCH SureTax Connector app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/cch-suretax-connector-app"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:24.421Z"
---

# CCH SureTax Connector app

The CCH SureTax Connector app enables tax calculation integration with Zuora, requiring feature activation and app purchase from the Marketplace.

## Prerequisites

-   Submit a request at [Zuora Global Support](https://support.zuora.com/) to enable the [Connect Tax Engines](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/connect-tax-engines) feature in your Zuora tenant.
-   Purchase the [CCH SureTax Connector app](https://www.zuora.com/marketplace/app/?appId=476&utm_source=CCH%20SureTax%20Connector&utm_campaign=fy20q2_marketplace_zuora_app&cid=FY20Q2-WBSITE-GLOBL-WBCT-Marketplace%20Zuora%20App) from the Marketplace.

## Install the app

Follow the instructions in [Install an App](/zuora-platform/integration/integration-hub/get-started-with-integration-hub/install-an-app-you-purchased-in-zuora) to install the app. Specific to the Tax app:

-   Run mode - Select the tax vendor you want to use.

-   Tax - Select the desired credentials to the selected tax vendor. If no desired credential can be found, click New to create the credentials for the new Tax instance.

    -   Username and password - The credentials for your tax vendor account.

    -   Security Token - The security token for your tax vendor account. If you have specified the username and password for your tax vendor account, this field is not required.

    -   URL - The endpoint of your tax vendor account. Check this resource on [CCH SureTax](https://support.cch.com/oss/ml/kb/solution/000109010/000109010) for information.

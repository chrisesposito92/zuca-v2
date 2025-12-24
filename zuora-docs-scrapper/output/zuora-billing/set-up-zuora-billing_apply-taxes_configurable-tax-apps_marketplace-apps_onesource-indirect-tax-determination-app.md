---
title: "ONESOURCE Indirect Tax Determination app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/onesource-indirect-tax-determination-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:08:07.190Z"
---

# ONESOURCE Indirect Tax Determination app

This app connects to ONESOURCE Indirect Tax Determination and is a legacy version. For optimal performance, use the new ONESOURCE Indirect Tax Determination app V2.

Note:

-   This app connects to [ONESOURCE Indirect Tax Determination](https://tax.thomsonreuters.com/en/onesource#indirect-tax).
-   This is a legacy version. Zuora recommends you to use the new ONESOURCE Indirect Tax Determination app V2 for optimal performance.


## Prerequisites

-   Submit a request at [Zuora Global Support](https://support.zuora.com/) to enable the Connect Tax Engines feature in your Zuora tenant.
-   Purchase the [ONESOURCE Indirect Tax Determination app](https://www.zuora.com/marketplace/app/?appId=477&utm_source=ONESOURCE%20Determination%20%28fka%20Sabrix%29%20Tax%20Connector&utm_campaign=fy20q2_marketplace_zuora_app&cid=FY20Q2-WBSITE-GLOBL-WBCT-Marketplace%20Zuora%20App) from the Marketplace.
-   Ensure your billing user role includes the Admin permission.


## Install the app

Follow the instructions in Install an App to install the app. Specific to the Tax app:

-   Run mode - Select the tax vendor you want to use.

-   Tax - Select the desired credentials to the selected tax vendor. If no desired credential can be found, click New to create the credentials for the new Tax instance.

    -   Username and Password - The credentials for your tax vendor account.

    -   Security Token - The security token for your tax vendor account. If you have specified the username and password for your tax vendor account, this field is not required.

    -   URL - The endpoint of your tax vendor account. Contact your tax vendor for the specific URL endpoint required in this field.

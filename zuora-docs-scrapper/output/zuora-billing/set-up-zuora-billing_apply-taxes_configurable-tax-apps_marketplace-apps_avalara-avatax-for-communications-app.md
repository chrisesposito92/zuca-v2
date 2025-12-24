---
title: "Avalara AvaTax for Communications app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/avalara-avatax-for-communications-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:40.804Z"
---

# Avalara AvaTax for Communications app

This article provides guidance on updating to Transport Layer Security (TLS) 1.2 for Avalara AvaTax for Communications app, including prerequisites and installation instructions.

Note:

Because Avalara has updated to the [Transport Layer Security (TLS) 1.2](https://help.avalara.com/Frequently_Asked_Questions/Avalara_-_Knowledge_Base/ACTION_NEEDED%3A_Update_Transport_Layer_Security_to_TLS_1.2?utm_campaign=CL202201%20TLS%20detailed%20Security%20update%20Service%20Notification%20MultiAud%20Email&utm_medium=email&utm_source=Eloqua&elqTrackId=b5ce48a0a1624f909a75b0e1c0d83787&elq=3021fe9677b84b55a2d16348d121f5b7&elqaid=30498&elqat=1&elqCampaignId=9474), the support for the TLS versions 1.0 and 1.1 has been disabled for REST v2 API endpoints in the Sandbox environment on 2/1/2022 and in the Production environment on 3/31/2022. Zuora has made necessary actions to ensure the integration with Avalara supports TLS 1.2. You do not need to take any additional action.

## Prerequisites

-   Submit a request at [Zuora Global Support](https://support.zuora.com/) to enable the Connect Tax Engines feature in your Zuora tenant.
-   Ensure your billing user role includes the Admin permission.


## Install the app

Follow the instructions in Install an App to install the app. Specific to the Tax app:

-   Run mode - Select the tax vendor you want to use.

-   Tax - Select the desired credentials to the selected tax vendor. If no desired credential can be found, click New to create the credentials for the new Tax instance.

    -   Username and Password - The credentials for your tax vendor account.

    -   Security Token - The security token for your tax vendor account. If you have specified the username and password for your tax vendor account, this field is not required.


    -   URL - The endpoint of your tax vendor account. Check this [resource on Avalara](https://developer.avalara.com/communications/dev-guide_rest_v2/getting-started/environments-endpoints/) for information.

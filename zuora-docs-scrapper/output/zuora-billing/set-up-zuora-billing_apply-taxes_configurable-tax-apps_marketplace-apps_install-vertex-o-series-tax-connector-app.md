---
title: "Install Vertex O Series Tax Connector app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/install-vertex-o-series-tax-connector-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:32.409Z"
---

# Install Vertex O Series Tax Connector app

Learn how to install the Vertex O Series Tax Connector app, including prerequisites and setup instructions.

-   Submit a request at Zuora Global Support to enable the Connect Tax Engines feature in your Zuora tenant.

-   Purchase the Vertex O Series Tax Connector app from the Marketplace.

-   Ensure your billing user role includes the Zuora Billing Standard User permission.


1.  Follow the instructions in Install an App to install the app. Specific to the Tax app:
    -   Run mode - Select the tax vendor you want to use.
    -   Tax - Select the desired credentials to the selected tax vendor.
        Note: If no desired credential can be found, click New to create the credentials for the new Tax instance.
        -   Username and Password:
        -   Security Token: The security token for your tax vendor account. Input Vertex trusted ID in this field in addition to Username and Password.
            Note: Contact Vertex for more information on getting your trusted ID.

        -   URL - The endpoint of your tax vendor account. For Vertex Sandbox environments, the URL is `http://VertexDomain/vertex-ws/services/CalculateTaxVersion`. For example,`http://demo0059.vertexinc.com/vertex-ws/services/CalculateTax90`.
            Note: Contact your Vertex vendor for the most up-to-date information on tax calculation URLs.

2.  Go to the Billing Settings page in your Zuora tenant. Click the Setup Tax Engine and Tax Date box. Under the Tax Engines section, you will find the Configurable Tax Apps section with links to the apps you have installed.
3.  Click the name of the app to launch it.

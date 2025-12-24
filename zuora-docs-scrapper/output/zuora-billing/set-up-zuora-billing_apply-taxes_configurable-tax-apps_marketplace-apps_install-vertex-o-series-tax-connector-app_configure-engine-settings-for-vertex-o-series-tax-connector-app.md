---
title: "Configure engine settings for Vertex O Series Tax Connector app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/install-vertex-o-series-tax-connector-app/configure-engine-settings-for-vertex-o-series-tax-connector-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:41.101Z"
---

# Configure engine settings for Vertex O Series Tax Connector app

Learn how to configure engine settings for the Vertex O Series Tax Connector app, including setting headers, system configurations, and seller information.

After configuring the template, perform the following steps to configure engine settings:

1.  Click the ENGINE SETTINGS tab.
2.  Click ![Edit icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c4955ce-f413-4102-9a7d-92c4df7969a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk1NWNlLWY0MTMtNDEwMi05YTdkLTkyYzRkZjc5NjlhMSIsImV4cCI6MTc2NjYzOTM3OSwianRpIjoiNjQwNjExYzE4YzkxNGYzZjgxMjE5ZTE4ZmEzMzI3OGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zIw_nfIrntP5gSlcKp-g5KRgEihJTTHxScq7w1wI2gk) for the tax engine that you want to configure. The tax engine details window is displayed.
3.  In the Headers tab, select the value for `Content - Type` in the Value dropdown list.

    The value defaults to text/xml that works for Vertex, so leave the default value as is. Vertex does not support the JSON format.

    You can click Add Header to add additional headers that will be added to the tax requests that are sent to your tax vendor. Custom headers are not frequently needed; some common cases where they are needed are for customers using them as authentication into their firewalls.

4.  Click the System Configuration tab and complete the system configuration.

    -   Select an authentication type in the Authentication Type dropdown list. Consult your tax vendor for further information regarding your specific authentication type and credentials. For Vertex, you must use the bearer ID and enter the trusted ID, and contact Vertex Support for information about finding your Trusted Id.
        -   None - No authentication required.
        -   Basic-Auth - Will require Username and Password to be entered.
        -   BearerId - Input the Vertex trusted ID in the Security Toke n field of the Configuration window outlined in the preceding Install the Vertex O Series Tax Connector app section. Contact Vertex for more information on getting your trusted ID.
        -   OAuth 2.0 - See OAuth 2.0 Authentification for Configurable Tax Apps for more information.
    -   Select an option from the taxVoid Call Handling dropdown list:
        -   Pass Through - Allows the call to process without any issue, but tax will not be processed.
        -   Block - Does not allow the call to process and will generate an error message.
        -   Enable - Allows the call to pass and will either process tax or generate an error message.
    -   Optionally, you can select Skip Taxation on External Failure . When this option is selected, taxation will be skipped in the case of external failures such as network issues or error responses from the vendor side.

5.  Complete the information in the Seller Information tab. The information that is required to be completed varies depending on the selected tax engine requirements. Check with your tax engine vendor for details.
6.  Click UPDATE to save the configuration for each tab.

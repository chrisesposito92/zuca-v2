---
title: "Configure engine settings for Vertex Advantage Tax Connector app v1"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/vertex-advantage-tax-connector-app-v1/configure-the-vertex-advantage-tax-connector-app/configure-engine-settings-for-vertex-advantage-tax-connector-app-v1"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:40.357Z"
---

# Configure engine settings for Vertex Advantage Tax Connector app v1

Follow these steps to configure engine settings, including system configuration and authentication type selection.

After configuring the template, perform the following steps to configure engine settings:

1.  Click the ENGINE SETTINGS tab.
2.  Click the Edit icon for the tax engine that you want to configure. The tax engine details window is displayed.
3.  In the Headers tab, select the value for `Content` `-` `Type` in the Value dropdown list. You can click Add Header to add additional headers that will be added to the tax requests that are sent to your tax vendor.
4.  Click the System Configuration tab, and complete the system configuration.
    1.  Select an authentication type in the Authentication Type dropdown list. Consult your tax vendor for further information regarding your specific authentication type and credentials.

        -   None - No authentication required.
        -   Basic Auth - Will require Username and Password to be entered.

        -   BearedId - Will require Token to be entered.

        -   OAuth 2.0 \- See OAuth 2.0 Authentification for Configurable Tax Apps for more information.

        -   Taxamo-Private-Token - Required for Vertex Advantage integration.

            -   To obtain your API tokens log-in to your [dashboard](https://manage.taxamo.com/dashboard.html#/test/settings/account/api) and reveal the masked private token.

            -   Detailed instructions on where to find and input your Taxamo-Private-Token in the [Install an App](/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/vertex-advantage-tax-connector-app-v1) section.


    2.  Select an option from the taxVoid Call Handling dropdown list:

        -   Pass Through - Allows the call to process without any issue, but tax will not be processed.

        -   Block - Does not allow the call to process and will generate an error message.

        -   Enable - Allows the call to pass and will either process tax or generate an error message.

            Note: Note: If you select Enable from the list, contact

            [Zuora Global Support](https://support.zuora.com/)

            to perform specific taxVoid configurations.


    3.  Optionally, you can select Skip Taxation on External Failure. When this option is selected, taxation will be skipped in the case of external failures such as network issues or error responses from the vendor side.
5.  Complete the information in the Seller Information tab.

    -   The information that is required to be completed varies depending on the selected tax engine requirements.

    -   The default template does not use Seller fields, if you would like to alter the default template, for any reason, to include Seller fields then this section must be completed or they will not populate.


6.  Merchant/Seller information required by Vertex Advantage to be completed when signing up and configuring your Vertex Advantage account. Login to your Vertex Advantage account and navigate to .
7.  Click UPDATE to save the configuration for each tab.

---
title: "2. Configure engine settings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/onesource-indirect-tax-determination-app/configure-the-onesource-indirect-tax-determination-app/2.-configure-engine-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:08:20.115Z"
---

# 2\. Configure engine settings

Follow these steps to configure engine settings, including system configuration and authentication type selection.

After configuring the template, perform the following steps to configure engine settings:

1.  Click the ENGINE SETTINGS tab.
2.  Click the Edit icon for the tax engine that you want to configure. The tax engine details window is displayed.
3.  In the Headers tab, select the value for `Content` `-` `Type` in the dropdown list. You can click Add Header to add additional headers that will be added to the tax requests that are sent to your tax vendor.
4.  Click the System Configuration tab and complete the system configuration.

    -   Select an authentication type in the Authentication Type dropdown list. Consult your tax vendor for further information regarding your specific authentication type and credentials.

        -   None - No authentication required.

        -   Basic-Auth - Will require Username and Password to be entered.

        -   BearedId - Will require Token to be entered.

        -   OAuth 2.0 - See OAuth 2.0 Authentification for Configurable Tax Apps for more information.

    -   Select an option from the taxVoid Call Handling dropdown list:

        -   Pass Through - Allows the call to process without any issue, but tax will not be processed.

        -   Block - Does not allow the call to process and will generate an error message.

        -   Enable - Allows the call to pass and will either process tax or generate an error message. For more information, see Configure the taxVoid template.

    -   Optionally, you can select Skip Taxation on External Failure . When this option is selected, taxation will be skipped in the case of external failures such as network issues or error responses from the vendor side.


5.  Complete the information in the Seller Information tab. The information that is required to be completed varies depending on the selected tax engine requirements. Check with your tax engine vendor for details.
6.  Click UPDATE to save the configuration for each tab.

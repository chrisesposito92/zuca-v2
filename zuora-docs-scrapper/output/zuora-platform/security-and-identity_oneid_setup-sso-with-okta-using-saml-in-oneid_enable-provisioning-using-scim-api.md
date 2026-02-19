---
title: "Enable provisioning using SCIM API"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-okta-using-saml-in-oneid/enable-provisioning-using-scim-api"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:31.043Z"
---

# Enable provisioning using SCIM API

Learn how to enable provisioning using the SCIM API by configuring OAuth 2.0 client settings and attribute mappings in Okta for Zuora OneID.

1.  Create an OAuth 2.0 client for authorization code grant type in OneID. For more detailed information, see [Manage OAuth 2.0 clients](/zuora-platform/security-and-identity/oneid/oneid-settings/manage-oauth-2.0-clients)
2.  Log in to Okta and go to the Applications tab.
3.  Click the application for Zuora OneID.
4.  On the General tab, click Edit under App Settings , and then select Provisioning - SCIM . The Provisioning tab opens.
5.  Click the Integration menu under the Settings section.
6.  Complete the SCIM Connection settings:

    -   SCIM connector base URL: `https://one.zuora.com/scim/v2`

    -   Unique identifier field for users: `userName`

    -   Supported provisioning actions: Select the Push New Users , Push Profile Updates , and Push Groups checkboxes depending on your requirements

    -   Authentication Mode: `OAuth 2`

    -   Access Token endpoint URI: `https://one.zuora.com/oauth2/token`

    -   Authorization endpoint URI: `https://one.zuora.com/oauth2/authorize`

    -   Client ID: the client ID you received in step 1

    -   Client Secret: the client secret you received in step 1


7.  Click Save .
8.  Click Re-authenticate with <your app name> to authenticate with the Zuora OneID application and generate an authentication token for SCIM provisioning.
9.  After the Oauth authentication is successful, click To App .
10.  In the Provisioning to App section, select the Enable checkbox for the following options:

     -   Create Users

     -   Update User Attributes

     -   Deactivate Users


11.  In the Attribute Mappings section, configure attribute mappings. Zuora OneID needs the following attributes:

     -   Username

     -   Given name

     -   Family Name

     -   Email

     -   Primary email type

     -   Preferred language

     -   Locale Name



For more information, see [Add SCIM provisioning to app integrations](https://help.okta.com/oie/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_SCIM.html).

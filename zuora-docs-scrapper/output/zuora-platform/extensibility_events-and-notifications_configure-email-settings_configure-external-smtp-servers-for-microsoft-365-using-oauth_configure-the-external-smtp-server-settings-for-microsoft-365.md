---
title: "Configure the external SMTP server settings for Microsoft 365"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-servers-for-microsoft-365-using-oauth/configure-the-external-smtp-server-settings-for-microsoft-365"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:54.854Z"
---

# Configure the external SMTP server settings for Microsoft 365

Learn how to configure external SMTP server settings for Microsoft 365.

Complete [Create an OAuth 2.0 Provider using the Authentication Code grant type](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-servers-for-microsoft-365-using-oauth/create-an-oauth-2.0-provider-using-the-authentication-code-grant-type).

1.  Navigate to in the left navigation menu.
2.  Click the Settings tab.
3.  In the Email Settings section, click the External SMTP tab and then click Edit.
4.  Fill in the fields with the values in the following table. For more information about these fields, see [Configure external SMTP server](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-server).

    | Field | Value | Note |
    | --- | --- | --- |
    | SMTP Server Name | smtp.office365.com |  |
    | SMTP Port | 587 |  |
    | SMTP Enable StartTLS | true |  |
    | Authentication | OAuth 2.0 |  |
    | SMTP User Name | <username> | Username of the logged-in user in Azure AD when the OAuth access token is generated.Ensure that your Azure AD user account is only assigned to limited groups. Otherwise, the size of generated access tokens grows and might cause errors. For more information, see Prerequisites in Create an OAuth 2.0 Provider using the Authentication Code grant type. |
    | OAuth2.0 Provider | <oauth 2.0 provider> | From the dropdown list, select the OAuth 2.0 provider created for Microsoft. |
    | SMTP SocketFactory Port | (leave blank) |  |
    | SMTP SocketFactory Class | (leave blank) |  |
    | SMTP SocketFactory Fallback | (leave blank) |  |

5.  Click Test Connection And Save. The data is saved if the connection is successful. If an error occurs, it suggests that the configuration information is not valid and a corresponding error message appears. For more information about error messages and resolutions, see [Common error messages and actions](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-server/common-error-messages-and-actions-for-external-smtp-server).
6.  Select the Select External SMTP Server checkbox.

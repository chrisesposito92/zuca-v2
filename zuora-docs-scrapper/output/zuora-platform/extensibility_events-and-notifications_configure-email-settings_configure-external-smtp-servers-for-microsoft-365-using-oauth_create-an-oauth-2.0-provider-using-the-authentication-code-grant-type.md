---
title: "Create an OAuth 2.0 Provider using the Authentication Code grant type"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-servers-for-microsoft-365-using-oauth/create-an-oauth-2.0-provider-using-the-authentication-code-grant-type"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:52.175Z"
---

# Create an OAuth 2.0 Provider using the Authentication Code grant type

Learn how to create an OAuth 2.0 provider using the Authentication Code grant type.

Before configuring the external SMTP server in Zuora, ensure that the following requirements are met:

-   [Enable SMTP AUTH for the mailbox used to send emails](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission#enable-smtp-auth-for-specific-mailboxes) in Microsoft 365.

-   If the email address of your Zuora tenant is different from the mailbox that has SMTP AUTH enabled in Microsoft 365, [add a "Send as" permission](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/give-mailbox-permissions-to-another-user?view=o365-worldwide#send-email-from-another-users-mailbox) for your Zuora tenant’s email in Microsoft 365.

-   The following permissions are added to your application in Azure Active Directory (Azure AD). For more information about managing permissions in Azure AD, see [Request the permissions in the app registration portal](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#using-the-admin-consent-endpoint).

    -   IMAP.AccessAsUser.All

    -   SMTP.Send

    -   offline\_access

-   Ensure that your Azure AD user account is only assigned to limited groups. The size of generated access tokens depends on the number of groups in this user account. If the token is too large, it might cause errors such as exceeding the size limitation on HTTP headers. For more information, see [Groups overage claim](https://learn.microsoft.com/en-us/azure/active-directory/develop/access-token-claims-reference#groups-overage-claim) in Microsoft’s documentation.


For more information about OAuth 2.0 authentication in Azure AD, see [Microsoft identity platform and OAuth 2.0 authorization code flow](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code).

1.  Navigate to .
2.  Click New OAuth 2.0 Provider. The New OAuth 2.0 Provider page opens.
3.  Fill in the fields with the values in the following table. For more information about these fields, see [Add an OAuth 2.0 Provider](/zuora-platform/system-management/administrator-settings/add-an-oauth-2.0-provider).

    | Field | Value | Note |
    | --- | --- | --- |
    | Name | <provider name> | Name of the provider. |
    | Grant Type | Authorization Code |  |
    | Client ID | <client ID> | Application ID of your application in Azure AD. |
    | Client Secret | <client secret> | Application secret of your application in Azure AD. |
    | Authorization EndPoint | https://login.microsoftonline.com/<tenant>/oauth2/v2.0/authorize | <tenant> is your tenant ID in Azure AD instead of your tenant ID in Zuora. |
    | Access Token EndPoint | https://login.microsoftonline.com/<tenant>/oauth2/v2.0/token | <tenant> is your tenant ID in Azure AD instead of your tenant ID in Zuora. |
    | Revoke EndPoint | (leave blank) |  |
    | Test EndPoint | (leave blank) |  |
    | Scope | https://outlook.office.com/IMAP.AccessAsUser.All https://outlook.office.com/SMTP.Send offline_access |  |

4.  Click Save. After the OAuth 2.0 provider is successfully created, you can find it on the All OAuth 2.0 Providers page.
5.  Click the name of the provider created in step 4 on the All OAuth 2.0 Providers page. The OAuth 2.0 Provider Details page opens.
6.  Copy the Redirect URL on this page and add it to your Azure AD settings. This allows Microsoft 365 to send the authorization response back to Zuora. For more information, see [How to add a redirect URI to your application in Microsoft's documentation](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri).
7.  Click Obtain Token on the OAuth 2.0 Provider Details page in the Zuora UI. After obtaining the access token successfully, you can find the access token and expiration date on the page.

See [Configure the external SMTP server settings for Microsoft 365](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-servers-for-microsoft-365-using-oauth/configure-the-external-smtp-server-settings-for-microsoft-365).

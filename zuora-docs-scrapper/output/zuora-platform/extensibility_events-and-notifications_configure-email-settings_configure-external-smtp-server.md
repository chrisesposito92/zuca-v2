---
title: "Configure external SMTP server"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-server"
product: "zuora-platform"
scraped_at: "2025-12-24T05:27:44.698Z"
---

# Configure external SMTP server

Learn how to configure external SMTP server to send email notifications.

-   Ensure that your SMTP server relay feature is turned on. Otherwise, any emails sent with a mail.from address in the notification that is different from your SMTP server default will fail.

-   If you use the Gmail SMTP server, you might need to generate an application-specific password for your account. Otherwise, you will get an error against the invalid password.


1.  Navigate to in the left navigation menu.
2.  Click the Settings tab.
3.  In the Email Settings section, click the External SMTP tab and then click Edit.
4.  Configure the required fields.

    | Field | Required? | Description |
    | --- | --- | --- |
    | SMTP Server Name | Required | Host name of your SMTP server. |
    | SMTP Port | Required | The port that Zuora uses to connect to the SMTP server. |
    | Authentication | Required | The authentication scheme for the SMTP server. The following schemes are available:Username/PasswordOAuth 2.0 |
    | SMTP Enable StartTLS | Optional | Set to true if the SMTP server attempts to upgrade to an encrypted connection (TLS or SSL) before authentication.Default is false. |
    | SMTP User Name | Required | The email address of the sender. |
    | Password | Required only if Authentication is set to Username/Password | Your password for the SMTP server. |
    | OAuth2.0 Provider | Required only if Authentication is set to OAuth 2.0 | The OAuth 2.0 provider you created in .To create a new OAuth 2.0 provider, see Add an OAuth 2.0 provider for more information. |
    | SMTP SocketFactory Port | Required only if you specify the SMTP SocketFactory Class | If specified, Zuora uses this port to send email to the SMTP server. Otherwise, Zuora uses the SMTP Port. |
    | SMTP SocketFactory Class | Optional | Set to javax.net.ssl.SSLSocketFactory if the SMTP server uses this class to create SSL sockets. |
    | SMTP SocketFactory Fallback | Optional | Set to true if the SMTP server tries to create a socket using a different class if the specified SMTP SocketFactory Class fails.Default is true. |

5.  Click Test Connection And Save when the fields are complete. The data is saved if the connection is successful. If an error occurs, the configuration information is not valid and an error message appears. For more information about error messages and resolutions, see [Common error messages and actions](/zuora-platform/extensibility/events-and-notifications/configure-email-settings/configure-external-smtp-server/common-error-messages-and-actions-for-external-smtp-server).
6.  Select the Select External SMTP Server checkbox.

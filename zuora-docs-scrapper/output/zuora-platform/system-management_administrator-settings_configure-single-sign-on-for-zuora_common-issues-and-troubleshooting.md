---
title: "Common issues and troubleshooting"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/configure-single-sign-on-for-zuora/common-issues-and-troubleshooting"
product: "zuora-platform"
scraped_at: "2025-12-24T05:02:30.657Z"
---

# Common issues and troubleshooting

This reference provides the common issues and troubleshooting guidance on configuring SSO.

The SAML assertion process in SSO can fail for various reasons, such as:

-   Network timeout

-   Identity provider service down

-   Incorrect identity provider configuration

-   Internal errors in the identity provider

    -   For troubleshooting AD FS, see [Troubleshooting AD FS 2.0](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/ff641696\(v=ws.10\)?redirectedfrom=MSDN).

    -   For troubleshooting Okta, contact [Okta Support](https://support.okta.com).


The following table lists a few of the potential error conditions users can encounter while logging in to Zuora via SSO.

| Zuora error message | Cause | Solution |
| --- | --- | --- |
| Federated ID provided by SAML assertion doesn't match our records. | Federated ID of the user who's trying to login via SSO is not registered in Zuora. | Correctly enter the federated ID of this user in Zuora as described in Enable SSO for a Zuora user. |
| Incoming SAML message is invalid: Validation of protocol message signature failed. | Okta metadata has not been uploaded by Zuora. | Contact Zuora and check if the correct metadata is being uploaded on the Zuora side. |
| An invalid Name ID or Default username setting was specified in the Okta SAML settings. | Notify your Okta admin to check and update the Okta SAML settings as specified in Configure Okta for SSO SAML. |  |
| HTTP Status 401 Authentication Failed | The response issue time is either too old or in the future. | Set the clock to the atomic clock. |
| You must use Single Sign-On to log in to Zuora. | An SSO-enabled user tries to log directly into Zuora application without going through the identity provider. | The user must log in from the identity provider log-in page. |
| Your user account is not enabled to use Single Sign-On. | A user who is not SSO-enabled in the Zuora application tries to log into Zuora from the identity provider login page. | Enable SSO for this user in the Zuora application. |
| Your Zuora tenant is not enabled to use Single Sign-On. | In Zuora, the tenant is not provisioned to use SSO. | Contact Zuora to enable SSO for this tenant. |
| SAML error: User is inactive. | The user has been de-activated in the Zuora application. | N/A |
| Original password is not correct. Please reapply or contact Zuora Global Support. | An SSO-enabled user tried to change the password in the Zuora application. | SSO-enabled users should not use the Change Password page in the Zuora application to change their password.If a user wants to use the Zuora local login, the user should contact the tenant admin. |
| Attempted to log into the wrong tenant. | This error message only applies when your identity provider is Okta.The federated ID was used in this SAML requests was mapped to the different Zuora tenant. | Check and use the federated ID associated with the Zuora tenant and the Okta identity provider. |
| SAML error: Your SAML IdP doesn't match our records. Please contact the administrator at your company for help. | Changes in your identity provider settings invalidated the identify provider's metadata in Zuora. | Contact Zuora and check if the correct metadata is uploaded in Zuora.If necessary, re-submit the correct metadata file to Zuora and wait for a notification before allowing your users to login via SSO. |
| SAML certificates or metadata mismatch between your identity provider and Zuora. |  |  |
| Your identity provider metadata is missing. This can be caused by a number missteps or internal errors. |  |  |

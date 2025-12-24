---
title: "Add Zuora OneID application to Azure AD"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid/set-up-sso-with-azure-active-directory-using-saml-in-oneid/add-zuora-oneid-application-to-azure-ad"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:35.334Z"
---

# Add Zuora OneID application to Azure AD

Learn how to add Zuora OneID application to Azure AD

To add Zuora OneID application to Azure AD, perform the following steps.

1.  Log in to Azure AD as an administrator.
2.  Go to the Enterprise Application tab and click New Application.
3.  Click Create your own application and enter a name for the app.
4.  Select Integrate any other application you don’t find in the gallery (Non-gallery) and click Create.
5.  Select SAML 2.0 as the sign-in method in the dialog box and click Next.
6.  Click Single sign-on and select SAML as the sign-in method.
7.  Click Edit in Basic SAML Configuration and configure the following SAML settings:

    -   Identity (Entity ID): Enter the entity ID of this Zuora OneID application ashttps://one.zuora.com/saml/metadata

    -   Reply Url (Assertion Consumer Service URL): The Assertion Consumer Service (ACS) endpoints where the Zuora OneID application receives the SAML assertion as https://one.zuora.com/saml/SSO

    -   Leave other fields at their default values.


8.  Click Edit in Attribute & Claims , remove all the additional claims, and configure the following Unique User Identifier (Name ID).

    -   Set Name Identifier format as Email address

    -   Set Source as Attribute

    -   Change Source attribute to user.mail


9.  Click Save.

For more information, see [Create SAML app integrations](https://learn.microsoft.com/en-us/power-pages/security/authentication/saml2-settings-azure-ad).

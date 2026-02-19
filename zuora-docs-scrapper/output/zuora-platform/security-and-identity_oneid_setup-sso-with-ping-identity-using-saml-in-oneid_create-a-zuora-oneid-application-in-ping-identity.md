---
title: "Create a Zuora OneID application in Ping Identity"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/setup-sso-with-ping-identity-using-saml-in-oneid/create-a-zuora-oneid-application-in-ping-identity"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:30.782Z"
---

# Create a Zuora OneID application in Ping Identity

Learn how to create a Zuora OneID application in Ping Identity by configuring service provider details, logging into the PingOne admin console, and setting up SAML configurations.

1.  Configure the service provider details as mentioned below:

    -   ACS URL: Enter the service provider's Assertion Consumer Service URL as [https://one.zuora.com/saml/SSO](https://one.zuora.com/saml/SSO) .

    -   Entity ID: Enter the unique SAML entity value as [https://one.zuora.com/saml/metadata](https://one.zuora.com/saml/metadata) .


2.  Log in to the PingOne admin console as an administrator.
3.  From the main dashboard, click Applications and select Add Application.
4.  Name the application Zuora OneID and set the Application Type to SAML Application.
5.  Click Configure to proceed with the SAML configuration.
6.  In the SAML Configuration section, select Import from URL .
7.  Enter the Import URL as [https://one.zuora.com/saml/metadata](https://one.zuora.com/saml/metadata) , then click Import and save the settings.
8.  Navigate to the Attributes section, and change the NameID format to Email Address.
9.  Save the changes, then copy the IDP Metadata URL from the configuration page for later use.

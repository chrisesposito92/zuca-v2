---
title: "Configure single sign-on for Zuora"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/configure-single-sign-on-for-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:02:20.549Z"
---

# Configure single sign-on for Zuora

Describes how to configure your organization's security management components to enable single sign-on to Zuora.

It also includes error messages and troubleshooting tips to help you and your users avoid common roadblocks.

## About Zuora single sign-on

Zuora single sign-on feature is only available in Zuora Enterprise and Zuora Nine editions. See [Zuora editions](/entitlements/current-entitlements/zuora-editions) for more information.

A single sign-on (SSO) infrastructure enables enterprise users to sign in once and have access to all authorized applications and resources. Zuora supports the single sign-on infrastructure using federated authentication via Security Assertion Markup Language (SAML) 2.0. SAML provides a secure, XML-based solution for exchanging user security information between an identity provider and service providers. The federated authentication process in Zuora involves the following entities:

-   Identity provider: The authority system that provides the user information. Zuora system trusts the identity provider's user information and uses the data to provide access to the application.

-   Service provider: Zuora application

-   User: Zuora application user


See [Glossary](#concept-ac-824__sso-glossary) for frequently used terms in SSO.

## Requirements

Zuora SSO feature is fully tested and certified with the following identity providers:

-   Microsoft Windows Active Directory Federation Services (AD FS) 2.0 with HTTPS

-   Okta


In addition to the above identity providers, other identity providers that use the SAML 2.0 will work with Zuora SSO.

In your identity provider, you must configure the following settings to work with Zuora SSO:

-   Single sign-on URL: The endpoints where the Zuora application receives the SAML assertion. The value to enter depends on the Zuora environment that you are enabling SSO in.

    -   US Cloud 1 Production - `https://na.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   US Cloud 1 API Sandbox - `https://sandbox.na.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   US Cloud 2 Production - `https://www.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   US Cloud 2 API Sandbox - `https://apisandbox.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   US Performance Test - `https://pt1.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   US Central Sandbox - `https://test.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   EU Cloud Production - `https://eu.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   EU Cloud API Sandbox - `https://sandbox.eu.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   EU Central Sandbox - `https://test.eu.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   APAC Central Sandbox - `https://test.ap.zuora.com/apps/saml/SSO/alias/defaultAlias`

    -   APAC Cloud Production `- https://ap.zuora.com/apps/saml/SSO/alias/defaultAlias`

-   Audience URI: The Entity ID of this Zuora application. The value to enter depends on the Zuora environment that you are enabling SSO in.

    -   US Cloud 1 Production - `na.zuora.com` or `https://na.zuora.com`

    -   US Cloud 1 API Sandbox - `sandbox.na.zuora.com` or `https://sandbox.na.zuora.com`

    -   US Cloud 2 Production - `www.zuora.com` or `https://www.zuora.com`

    -   US Cloud 2 Sandbox - `apisandbox.zuora.com` or `https://apisandbox.zuora.com`

    -   US Performance Test - `pt1.zuora.com` or `https://pt1.zuora.com`

    -   US Central Sandbox - `test.zuora.com` or `https://test.zuora.com`

    -   EU Cloud Production - `eu.zuora.com` or `https://eu.zuora.com`

    -   EU Cloud API Sandbox - `sandbox.eu.zuora.com` or `https://sandbox.eu.zuora.com`

    -   EU Central Sandbox - `test.eu.zuora.com` or `https://test.eu.zuora.com`

    -   APAC Central Sandbox - `test.ap.zuora.com` or `https://test.ap.zuora.com`

    -   APAC Cloud Production `- ap.zuora.com` or `https://ap.zuora.com`

-   Name ID format: Configure this setting to Email Address format.

-   Default username: Configure this setting to Email.

-   Default Relay State - Leave this setting blank.


This version of the Zuora SSO feature requires the following:

-   The artifact and HTTP-POST binding methods are used to validate SAML tokens. The Redirect binding method is not supported.

-   Federated IDs must be unique across all identity providers federated with Zuora

-   One tenant can be associated with only one identity provider, and one identity provider can be associated with multiple tenants by using a different application for each tenant.

-   Zuora only supports the requests initiated by identity providers. SSO-enabled users need to log in from the identity provider's login page to access the Zuora application. Service provider-initiated login is not supported.


The following requirements apply to Zuora SSO users:

-   A Zuora user must have one unique federated ID assigned to use SSO.

-   A user can log in to Zuora either in the SSO mode or in the local login mode. A user cannot be configured to use both modes.

-   SSO is not supported for API users. You can single sign on to Zuora only through the UI.


## Zuora session timeout

When a user session times out in Zuora, the user is redirected to the Zuora login page. If SSO is enabled, the user needs to browse to the Zuora link on their identity provider login page to re-establish a Zuora session.

## SAML federation metadata

SAML federation metadata describes an identity provider or a service provider. The metadata needs to be exchanged between two parties to establish a SAML federation. To enable Zuora SSO, a tenant and Zuora exchange metadata during the tenant SSO provisioning process. SAML metadata typically includes:

-   Entity identifier

-   Public keys used to check SAML message signatures

-   Endpoint URLs

-   Supported bindings and profiles


## Required certificates

The following certificates are required for configuration and operation of Zuora SSO:

Identity provider's SAML certificate

This certificate is used to sign validation requests sent from Zuora to an identity provider. It must be a 2048 bit certificate. We strongly recommend that this certificate is long-lived and self-signed.

Zuora service provider's SAML certificate

The private key of this certificate is used to validate the identity provider response signatures. It is a long-lived, self-signed, 2048 bit certificate.

Identity provider HTTPS certificate

This certificate is used to make HTTPS connections. It must be signed by a respected CA that is included in Java trusted CA list. Self-signed certificates are not supported in Zuora.

Note: If your identity provider certificate expires or changes, you must re-generate the metadata file with the new or updated certificate and submit the new metadata file to Zuora. Wait for a notification from Zuora before allowing your users to log in to Zuora via SSO.

## Glossary

identity provider

A service that is capable of authenticating a user, generating and assigning SSO SAML token to a user session, and verifying an assigned SSO token. An identity provider can be either installed on the Zuora tenant side, or it could be a cloud-based service. An example of customer installed identity provider is Microsoft AD FS, and an example of a cloud-based identity provider is Okta.

service provider

A service that is capable of delegating user authentication to an identity provider via the protocols defined by the SAML specification. The Zuora application is a service provider.

identity provider-initiated

A workflow that requires users to log in to an identity provider first. After a user successfully logs in to an identity provider, a SAML token is presented to the service provider by the browser usually either in the URL or HTTP POST body.

service provider-initiated

A workflow that allows users to access the service provider without first logging into the identity provider. The service provider must be capable of deciding which identity provider the incoming user needs to be redirected to log in.

SAML federation metadata

An XML document that describes the configuration of a service provider or an identity provider. It is exchanged between two parties to build a SAML federation.

SAML artifact binding

A method of transmitting SAML messages via references in HTTP messages. When using this binding, the identity provider sends the user back to the service provider with a reference, referred to as an artifact. The service provider then goes back directly to the identity provider and asks for the assertion matching the reference.

SAML POST binding

A method of transmitting SAML messages via HTTP POST actions. When using this Binding, the identity provider sends the user back to the service provider by supplying an HTTP POST request directed to the service provider and putting the assertion into the POST payload.

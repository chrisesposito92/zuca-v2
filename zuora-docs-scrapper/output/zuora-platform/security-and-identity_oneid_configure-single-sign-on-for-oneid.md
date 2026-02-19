---
title: "Configure single sign-on for OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/configure-single-sign-on-for-oneid"
product: "zuora-platform"
scraped_at: "2026-02-19T03:21:01.125Z"
---

# Configure single sign-on for OneID

This guide provides an overview of configuring single sign-on (SSO) for OneID using the SAML 2.0 protocol, including integration with various identity providers.

## Overview of SSO SAML with OneID

Single sign-on, or SSO, is a solution that allows a user to access multiple applications using one set of credentials. With SSO, users can log in to IdPs and gain access to any registered service providers (SPs).

Identity provider: An identity provider, or IdP, is an entity that stores and manages user identities. The IdP establishes a secure relationship with each SP.

Service provider: A service provider, or SP, is an entity that provides services to other organizations.

OneID supports the SSO solution using federated authentication via Security Assertion Markup Language (SAML) 2.0 protocol, which provides a secure, XML-based solution for exchanging information between an IdP and SPs.

OneID supports SSO integration with Google, JumpCloud, Microsoft Entra ID, and Okta using the SAML 2.0 protocol. It also integrates with most other Identity Providers via SAML 2.0.

## Typical SSO SAML Process

A typical process of accessing OneID with SSO SAML is as follows:

1.  Log in to an IdP, such as Okta, with your IdP user credentials.
2.  Select OneID (SP) through the IdP.
3.  The IdP redirects you to the OneID portal with verified user information, and OneID provides you with corresponding user abilities.

## Enabling SSO SAML for OneID

Take the following steps to enable SSO SAML for OneID:

1.  [Configure IdPs for SSO SAML with OneID](/zuora-platform/security-and-identity/oneid/configure-single-sign-on-for-oneid/configure-idps-for-sso-saml-with-oneid)

2.  [Configure OneID for SSO SAML](/zuora-platform/security-and-identity/oneid/configure-single-sign-on-for-oneid/configure-oneid-for-sso-saml)

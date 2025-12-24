---
title: "Configure single sign-on for OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:30.344Z"
---

# Configure single sign-on for OneID

This guide provides an overview of configuring single sign-on (SSO) with OneID, including setting up identity providers and enabling SSO SAML for users.

This article describes the overview of single sign-on (SSO) with OneID, and how to configure your identity providers (IdPs) and OneID to enable SSO.

## Overview of SSO SAML with OneID

Single sign-on, or SSO, is a solution that allows a user to access multiple applications using one set of credentials. With SSO, users can log in to IdPs and gain access to any registered service providers (SPs).

-   Identity provider: An identity provider, or IdP, is an entity that stores and manages user identities. The IdP establishes a secure relationship with each SP.
-   Service provider: A service provider, or SP, is an entity that provides services to other organizations.

OneID supports the SSO solution using federated authentication via Security Assertion Markup Language (SAML) 2.0 protocol, which provides a secure, XML-based solution for exchanging information between an IdP and SPs.

A typical process of accessing OneID with SSO SAML is as follows:

1.  Log in to an IdP, such as Okta, with your IdP user credentials.
2.  Select OneID (SP) through the IdP.The IdP redirects you to the OneID portal with verified user information, and OneID provides you with corresponding user abilities.

Take the following steps to enable SSO SAML for OneID:

1.  [Configure IdPs for SSO SAML with OneID](#concept-f5c4y4ha__title-233).
2.  [Configure OneID for SSO SAML.](#concept-f5c4y4ha__title-8)

## Configure IdPs for SSO SAML with OneID

The high-level steps to configure IdPs are as follows:

1.  Add OneID to your IdP.
2.  Obtain SAML metadata of your IdP.
3.  [Submit IdP's SAML metadata URL to OneID](#concept-f5c4y4ha__title-21). Note that you should perform this operation in OneID and not in your IdP.
4.  Assign OneID to IdP users.

The actual configuration procedure varies depending on the IdP you use. For more information about configuring Okta SSO, see [Configure Okta for SSO SAML with OneID](/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid/setup-sso-with-okta-using-saml-in-oneid).

## Configure OneID for SSO SAML

## Enable SSO SAML for OneID users

In the SSO SAML solution, a user in your IdP should map to a user in OneID. When logging in to OneID via SSO SAML, your IdP redirects you to the OneID portal, and keeps you logged in as the corresponding OneID user. You need not to enter your credentials in OneID again.

To enable SSO SAML for a OneID user and link it to an IdP user, Add a user to OneID or Edit a user in OneID as usual with the following information:

-   Federated ID : Specify the SSO federated ID of the user. The value must be in an email format, typically the user email of the corresponding IdP user.

-   SSO Saml Enabled : Switch this toggle to the on position to enable SSO SAML.


## Submit IdP’s SAML metadata URL to OneID

IdPs and SPs use SAML metadata to exchange interaction information. The metadata is in XML format and secured.

To enable SSO SAML for your IdP in OneID, you must submit your IdP’s SAML metadata URL to OneID. For more information about how to submit the URL to OneID, see Manage SSO SAML metadata URL.

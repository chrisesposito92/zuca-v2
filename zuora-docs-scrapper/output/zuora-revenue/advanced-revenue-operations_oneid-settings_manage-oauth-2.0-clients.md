---
title: "Manage OAuth 2.0 clients"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/oneid-settings/manage-oauth-2.0-clients"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:40:47.753Z"
---

# Manage OAuth 2.0 clients

This guide explains how to create or delete OAuth 2.0 clients to obtain access tokens for the OneID SCIM API using client credentials or authorization code grant types.

This article describes creating or deleting OAuth 2.0 clients that provide client credentials. You can use these credentials to request access tokens for the OneID SCIM API following the OAuth 2.0 authorization flow.

You can create two types of clients:

-   Client Credentials : used in the OAuth 2.0 authorization flow with client credentials grant type. If you want to manage users or user groups in OneID through the SCIM API, you should create a client of this type.

-   Authorization Code Grant Type : used in the OAuth 2.0 authorization flow with authorization code grant type. If you want to manage users or user groups in OneID through an identity provider (IdP) following the authorization code flow (for example, Okta), you should create a client of this type.

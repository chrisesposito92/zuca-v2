---
title: "Create an OAuth 2.0 client for authorization code grant type"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/oneid-settings/manage-oauth-2.0-clients/create-an-oauth-2.0-client-for-authorization-code-grant-type"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:40:48.325Z"
---

# Create an OAuth 2.0 client for authorization code grant type

Learn how to create an OAuth 2.0 client using the authorization code grant type in the OneID portal.

To create a client for OAuth 2.0 authorization code grant type, take the following steps:

1.  Click your avatar in the upper right of the OneID portal and then click Settings . The Settings page opens.
2.  Click Manage OAuth 2.0 Clients .
3.  On the Manage OAuth 2.0 Clients page, click New . The New OAuth 2.0 Client window opens.
4.  Specify the following fields:

    -   Name : Enter a name for the client.

    -   Type : Select Authorization Code Grant Type from the dropdown list.

    -   App Name : Unique identifier of the Okta app that appears in the App Embed link. ![clipboard_e54ea3eef608e9fb3b2654430e548a23a.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/14b077a7-28c5-4669-acc2-03055f5185b7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE0YjA3N2E3LTI4YzUtNDY2OS1hY2MyLTAzMDU1ZjUxODViNyIsImV4cCI6MTc3MTU1ODg0MCwianRpIjoiODE4M2RiZDIxNzgxNDQ2MmIxNzg3ZTlkMGEwN2Y3NjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.3AR2TyKLtqeGxFdR8aQQmeDSFgrfvoBbbiGfJux8N0s)

    -   Idp Provider : Select your IdP from the dropdown list.

    -   Scopes : Select the authorization scope from the dropdown list.


5.  Click Save . After the client is created successfully, a window with the client ID and client secret opens.
6.  Note down the client ID and client secret. This is the only time you can see the client secret. Your IdP needs them to request authorization codes and access tokens for the OneID SCIM API.

---
title: "Create an OAuth 2.0 client for authorization code grant type"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/oneid-settings/manage-oauth-2.0-clients/create-an-oauth-2.0-client-for-authorization-code-grant-type"
product: "zuora-platform"
scraped_at: "2026-02-19T03:22:31.235Z"
---

# Create an OAuth 2.0 client for authorization code grant type

Create an OAuth 2.0 client using the authorization code grant type by configuring settings, managing clients, and specifying necessary fields.

1.  Click your avatar in the upper right of the OneID portal and then click Settings . The Settings page opens.
2.  Click Manage OAuth 2.0 Clients.
3.  On the Manage OAuth 2.0 Clients page, click New. The New OAuth 2.0 Client window opens.
4.  Specify the following fields:

    -   Name: Enter a name for the client.

    -   Type: Select Authorization Code Grant Type from the dropdown list.

    -   App Name : Unique identifier of the Okta app that appears in the App Embed link. ![App Embedded Link](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/18d04e62-99b4-4f9f-b204-8f43b430082f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE4ZDA0ZTYyLTk5YjQtNGY5Zi1iMjA0LThmNDNiNDMwMDgyZiIsImV4cCI6MTc3MTU1Nzc0NiwianRpIjoiOTMwMTYyNTFlYTIzNDJmN2JiMjc4ZmE4ZTFjYzMxMTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.kKhpj5IGXHE1_1hev3PCsipp3A810KctKgzJE6wT80w)

    -   Idp Provider: Select your IdP from the dropdown list.

    -   Scopes: Select the authorization scope from the dropdown list.


5.  Click Save. After the client is created successfully, a window with the client ID and client secret opens.
6.  Note down the client ID and client secret. This is the only time you can see the client secret. Your IdP needs them to request authorization codes and access tokens for the OneID SCIM API.

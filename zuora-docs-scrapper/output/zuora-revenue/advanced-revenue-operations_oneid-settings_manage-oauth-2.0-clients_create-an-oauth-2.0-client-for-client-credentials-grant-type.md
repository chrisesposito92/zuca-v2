---
title: "Create an OAuth 2.0 client for client credentials grant type"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/oneid-settings/manage-oauth-2.0-clients/create-an-oauth-2.0-client-for-client-credentials-grant-type"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:29.108Z"
---

# Create an OAuth 2.0 client for client credentials grant type

Create an OAuth 2.0 client using the client credentials grant type to manage access tokens for the OneID SCIM API.

To create a client for OAuth 2.0 client credentials grant type, take the following steps:

1.  Click your avatar in the upper right of the OneID portal and then click Settings . The Settings page opens.
2.  Click Manage OAuth 2.0 Clients .
3.  On the Manage OAuth 2.0 Clients page, click New . The New OAuth 2.0 Client window opens.
4.  Specify the following fields:

    -   Name : Enter a name for the client.

    -   Type : Select Client Credentials from the dropdown list.


5.  Click Save . After the client is created successfully, a window with the client ID and client secret opens.
6.  Note down the client ID and client secret. The client secret is displayed only once. You need to create an OAuth 2.0 client again if you forget it. You will need them to request access tokens for the OneID SCIM API.

---
title: "Create an OAuth client for a user"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-users/create-an-oauth-client-for-a-user"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:42.816Z"
---

# Create an OAuth client for a user

Learn how to create an OAuth client for a user.

Zuora recommends that you use OAuth to authenticate to the Zuora REST API. To authenticate using OAuth, you must first create an OAuth client for a user.

1.  Click your username at the top right and navigate to . The Users page opens.
2.  Locate the user in the table, then check that the user's status is Active . If the user's status is not Active, you must either activate the user or choose a different user.
3.  Click the user's First Name, Last Name, or User Name .

    For the OAuth client to be permitted to write data using the REST API, the user must have a Platform role that includes the API Write Access permission.

4.  In the New OAuth Clients section, enter a name for the OAuth client.

    If you have the Multi-entity feature enabled, select which entities the OAuth client will be permitted to access.

5.  Click Create.

    Zuora displays the Client ID and Client Secret for the OAuth client. This is the only time you can see the client secret. You will need the client ID and client secret to generate OAuth tokens.

6.  Click OK .

After creating the client, you are ready to generate an OAuth token with the client ID and client secret. See [Create an OAuth token](https://developer.zuora.com/v1-api-reference/api/operation/createToken/) for more information.

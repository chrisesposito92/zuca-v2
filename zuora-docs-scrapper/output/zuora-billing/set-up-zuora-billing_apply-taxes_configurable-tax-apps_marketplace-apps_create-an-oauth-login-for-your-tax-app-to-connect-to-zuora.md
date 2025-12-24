---
title: "Create an OAuth login for your Tax app to connect to Zuora"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/create-an-oauth-login-for-your-tax-app-to-connect-to-zuora"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:01.314Z"
---

# Create an OAuth login for your Tax app to connect to Zuora

This task guides you through creating an Integration Hub login to store OAuth authentication details for your Zuora tenant, enabling app installations that require OAuth.

Some apps use OAuth to authenticate to your Zuora tenant. This article explains how to create a Integration Hub login that stores OAuth authentication details for you Zuora tenant. You can then select the Integration Hub login when you install an app that uses OAuth.

To create a Integration Hub login:

1.  In your Zuora tenant, select from the Profile & Settings menu, then create a user . Apps that use OAuth to authenticate to your Zuora tenant will perform actions as this user. Zuora recommends that you create an API user specifically for this purpose. See Create an API User for more information.
2.  On the Users page in your Zuora tenant, select the user you created in the previous step, then create an OAuth client for the user. See Manage Users for more information.

    Note:

    -   Zuora displays the Client ID and Client Secret for the OAuth client. Copy and paste these details in a note when Zuora displays them (this aids in inputting them in the next step). This is the only time you can see the Client Secret.

    -   If the Client Id and Secret are not saved, or lost, you can simply remove the created OAuth client and create another one for the new Client ID and Client Secret.

3.  In Zuora Connect , navigate to My Connect > Tenants , then select Zuora from the New Login menu: ![Zuora Connect New Login Zuora](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6fc75bd2-be92-4358-beaa-53f1dbcdc7eb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZmYzc1YmQyLWJlOTItNDM1OC1iZWFhLTUzZjFkYmNkYzdlYiIsImV4cCI6MTc2NjYzOTM5OSwianRpIjoiMjcyZmMwOWI5M2JhNGRjY2E4MzAyMjdiYzQzY2Q4YjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xx4yMrXl66nnt4RFW5OQ2LGw43ldWNQy--5P94IQ5Gg) The New Login dialog box opens.
4.  In the New Login dialog box: ![Zuora Connect New Login OAuth](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/91379f0f-52a6-4bf4-82cb-986510151337?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxMzc5ZjBmLTUyYTYtNGJmNC04MmNiLTk4NjUxMDE1MTMzNyIsImV4cCI6MTc2NjYzOTM5OSwianRpIjoiNGNiZTA1Y2U2YjA4NGY0OGFlMDk0YWJmYWU5OGY5YTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.J3qtxuc_-eNe6oKr4PR0H0RRoeqXmE8MCiBUaL_CIjM)

    -   Select your Zuora tenant's data center and environment type.

    -   Select OAUTH from the drop-down menu.

    -   Enter the Client ID and Client Secret for the OAuth client.



A tile for the new login displays on the Tenants page. An OAuth login has the token following the account name in the top of the tile.

![Market Oauth Login](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7abcd254-5a3d-49a4-a439-0108aea38f31?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdhYmNkMjU0LTVhM2QtNDlhNC1hNDM5LTAxMDhhZWEzOGYzMSIsImV4cCI6MTc2NjYzOTM5OSwianRpIjoiODY2NWE0YWE5OWM2NDgzY2I0NmM2NWQwMDVlYTcyMmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vYUVEB7d059JIl7q3vBu_KV5OnhFBPpu8DIip5frWEc)

When you install an app that uses OAuth, select the OAuth login in the New Configuration dialog box. See Install an App for more information.

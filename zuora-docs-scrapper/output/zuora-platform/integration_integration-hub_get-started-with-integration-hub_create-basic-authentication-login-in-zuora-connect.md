---
title: "Create basic authentication login in Zuora Connect"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/create-basic-authentication-login-in-zuora-connect"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:56.203Z"
---

# Create basic authentication login in Zuora Connect

Learn how to create a login for your tenant in Zuora Integration Hub using basic authentication so that you can install apps in your Zuora tenant.

This is a one-time procedure that grants apps permission to access your Zuora tenant. The authentication credentials for your Zuora tenant are stored in a Zuora Integration Hub login.

A tenant login can use either basic authentication or OAuth. Because some functions only work when OAuth is used, Zuora recommends that you create an OAuth login for your tenant.

You must perform this procedure in Zuora Integration Hub, not in your Zuora tenant.

1.  Log into [Zuora Integration Hub](https://connect.zuora.com/).
2.  Navigate to .

    The Tenant Logins page opens. ![Tenant Logins page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/686e4856-17f9-45eb-9e42-f72eba8f0379?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY4NmU0ODU2LTE3ZjktNDVlYi05ZTQyLWY3MmViYThmMDM3OSIsImV4cCI6MTc2NjY0MTU1NCwianRpIjoiZjk0YzBjMDczZDMxNDM4ZmI1MmQzMTYwOWExNDFmZTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.08G2Iy55nzyI9D2mubOcJ_AtfND_b_UYZC0uMeq2H9c)

3.  Click New Login, then select Zuora. :

    The New Login dialog box opens. ![New Login page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/eaea44bf-0662-486c-96f8-d60e87db7e4a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVhZWE0NGJmLTA2NjItNDg2Yy05NmY4LWQ2MGU4N2RiN2U0YSIsImV4cCI6MTc2NjY0MTU1NCwianRpIjoiYzFiMGU5ZmMwOTc1NDMzNzgxZDkyZTFhOTkzMDNjY2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZE9_bsPDUQhUScIyv92_2am6VjHlAILCYOgC2skyqyE)

4.  Enter the username and password of a user account in your Zuora tenant.

    Apps will access your Zuora tenant as this user. Zuora recommends that you enter the username and password of an API-only user account to prevent unexpected disruption when running apps.

5.  Save the login.

You can now purchase and install apps in your Zuora tenant. You can do this from within Zuora Integration Hub or from within Zuora.

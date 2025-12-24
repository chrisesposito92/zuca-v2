---
title: "Create an OAuth tenant login in Zuora Connect"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/create-an-oauth-tenant-login-in-zuora-connect"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:54.176Z"
---

# Create an OAuth tenant login in Zuora Connect

Some apps use OAuth to authenticate to your Zuora tenant. Learn how to create an Integration Hub login that stores OAuth authentication details for you Zuora tenant.

1.  From the Profile menu in your Zuora tenant, navigate to .
2.  Create a user.

    Apps that use OAuth to authenticate to your Zuora tenant will perform actions as this user. Zuora recommends that you create an API user specifically for this purpose. See Create an API User for more information.

3.  On the Users page in your Zuora tenant, select the user you created and then create an OAuth client for the user.
4.  IMPORTANT: Make a note of the Client ID and Client Secret for the OAuth Client that is displayed.

    This is the only time you can see the Client Secret.

5.  In [Zuora Connect](https://connect.zuora.com/), navigate to , and then select Zuora from the New Login menu. ![New Login menu](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/664062cb-0f35-4b36-8ec6-0698ab88b715?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY2NDA2MmNiLTBmMzUtNGIzNi04ZWM2LTA2OThhYjg4YjcxNSIsImV4cCI6MTc2NjY0MTU1MiwianRpIjoiNTc0Y2I3MWE0YjU2NGI1NWFhZjcwMDYyZmEwZGRlY2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._xB6GlbBVPwdKCMUiF1UAcOlE7K9NWsL7M_DE0mc-3Q)
6.  In the New Login dialog box:
    1.  Select your Zuora tenant's data center and environment type.
    2.  Select OAUTH from the drop-down menu.
    3.  Enter the Client ID and Client Secret for the OAuth client that you noted previously. ![Zuora Connect New Login OAUTH](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/012e8f37-460d-4a41-b28f-445f8cf3d1b1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxMmU4ZjM3LTQ2MGQtNGE0MS1iMjhmLTQ0NWY4Y2YzZDFiMSIsImV4cCI6MTc2NjY0MTU1MiwianRpIjoiMmI2ODkwYzhkYjkyNGEwMGIxNWNhZjhjYTNmODkyM2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1q31zHY-fhh3S5vtvQ_EYwTnhQ0fVND7KK_FvFOxftQ)

7.  Save the login.

    A tile for the new login displays on the Tenants page. An OAuth login has the token following the account name at the top of the tile.![OAuth login token example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1db1be6d-657d-4f56-b1c2-7c05f698595c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFkYjFiZTZkLTY1N2QtNGY1Ni1iMWMyLTdjMDVmNjk4NTk1YyIsImV4cCI6MTc2NjY0MTU1MiwianRpIjoiZGMyNTBiNWI1NDQ1NGMxMjk5NjczOTI4OTliYTRlMmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.z4Se79TwyJ7vDHfm51mU3pis9gJQIt5V3snYJgHxWH8)


You can then select the Integration Hub login when you install an app that uses OAuth. When you install an app that uses OAuth, select the OAuth login in the New Configuration dialog box.

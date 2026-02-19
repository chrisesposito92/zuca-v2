---
title: "Accept the Secure Data Share in Snowflake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/accept-the-secure-data-share-in-snowflake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:12.809Z"
---

# Accept the Secure Data Share in Snowflake

Learn how to accept the Secure Data Share in Snowflake

When the Secure Data Share views are shared by Zuora, complete the following procedure to accept the incoming share and create a database in your Snowflake account to access the shared views.

1.  Log in to your Snowflake account using the account locator you provided during setup.
2.  Navigate to Snowflake > Data Sharing > Private Sharing > Inbound Shares.
3.  You should see an inbound share request from Zuora.
4.  Accept the inbound share. This option is available in the Data Sharing section under the External Sharing menu.
5.  Create a database from the accepted share.
6.  Assign the appropriate Snowflake roles that need access to this database.
7.  Click Get Data to complete the process.

    When these steps are completed, you will see the ZUORA\_<TenantID> schema available in your Snowflake account.

    ![Secure_Data_Share_UI_4](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6274c276-e2a6-4340-a4e0-abe5d866ab1b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYyNzRjMjc2LWUyYTYtNDM0MC1hNGUwLWFiZTVkODY2YWIxYiIsImV4cCI6MTc3MTU1ODQ0NiwianRpIjoiZDllMjhlZjljN2JiNGM2ZWJlMmMzZjZjNDE2Yzc0ZmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.oA5cbIMYykANQhDe_CwiqkssbByuHq2HbQhxoXalRZc)

    ![Secure_Data_Share_UI_5](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2ff34584-c7a6-4c1c-becd-3d0d0e0d1cc0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJmZjM0NTg0LWM3YTYtNGMxYy1iZWNkLTNkMGQwZTBkMWNjMCIsImV4cCI6MTc3MTU1ODQ0NiwianRpIjoiZjk0ODNhZmYzN2RiNGFjMGFlZTExMGM2Y2RjMjI4NTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.OfKxkZvOhOUjjXYD7qcHQoqhlHE_Yot3-zqgpiXi9lQ)

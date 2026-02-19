---
title: "Installing Minimum Commitment"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/minimum-commitment/installing-minimum-commitment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:50.484Z"
---

# Installing Minimum Commitment

This section guides you through the installation process, including configuration details and post-installation steps.

Minimum Commitment app is an integrated service that must be installed directly into your Zuora tenant(s) after purchase.

1.  Navigate to Tenants in Zuora Connect and select Minimum Commitment Application from the New dropdown menu.

    ![Installation-1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f8fbe9a6-1b2c-42cd-bfb3-3d99ae87a048?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4ZmJlOWE2LTFiMmMtNDJjZC1iZmIzLTNkOTlhZTg3YTA0OCIsImV4cCI6MTc3MTU1ODE4MywianRpIjoiNjg2NGUyNDY0OTVmNDYzMGI1MTc3Y2Q1YzA5YTVhNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.QpdRPic_dgtmegAPn2KTXo6vTTbIWyLGZCnyjbqUfe0)

2.  Complete the General login configuration details:
    1.  Name: Used to describe the app, enter a name that will help identify this app later on.
    2.  Run Mode - Standard (default)
    3.  Execution - Select Callout from the drop down menu.
    4.  Build Name - Universal (default).
    5.  Target - Select the credentials to the desired Zuora Environment.
3.  Complete the Advanced login configuration details. There is no configuration needed for Workflow Token, Endpoint or Username. Workflow Token, Endpoint and Username are advanced features for the Billing Post Processor. Contact your Engagement Manager for more details.
4.  Select Require Bill Run.
5.  Click Create .

    ![Installation-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cac154c5-83e1-4088-921b-dfc59f377ec1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNhYzE1NGM1LTgzZTEtNDA4OC05MjFiLWRmYzU5ZjM3N2VjMSIsImV4cCI6MTc3MTU1ODE4MywianRpIjoiNDUyNmJjNTU3NDhkNDUzMzhiZmI5YmRhNGEwYTVmMmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.sIlbhfYBovO98AtW6XdYswuXarQh7H61s95mYtK4uS8)![Installation-3.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3f8aa6de-7019-43e9-a1db-7045f89e2aa9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNmOGFhNmRlLTcwMTktNDNlOS1hMWRiLTcwNDVmODllMmFhOSIsImV4cCI6MTc3MTU1ODE4MywianRpIjoiY2U2ZDU0OTVlMGM1NGFiZmI3MjQxOTQ5NTFiNDMxMDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.bSJz0WcRCmQD0Wa2t0pcEsp3cftdt9qt3MK0qqDyuBY)

    Minimum Commitment app should appear in tenant.

6.  Hover over app in tenant to show the Actions menu. Select the magnifying glass to review Task Details.

    ![Installation-4.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6d6a9ff2-0f76-4bce-bc62-dbd3768afe9f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZkNmE5ZmYyLTBmNzYtNGJjZS1iYzYyLWRiZDM3NjhhZmU5ZiIsImV4cCI6MTc3MTU1ODE4MywianRpIjoiNzU3YzU4MjZmMDY1NGIyZWI3ZDA5NDBjNDg2NjBlZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.9GO-BRFsFdcpDEHqwtJsrV08vKc2CUMbI_BRfwjCbko)

7.  In Task Details, copy the Endpoint URL to configure Zuora environment in later steps.

    ![Installation-5.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b2df1ae1-a3e6-4dd7-ad14-3b1f845d7816?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyZGYxYWUxLWEzZTYtNGRkNy1hZDE0LTNiMWY4NDVkNzgxNiIsImV4cCI6MTc3MTU1ODE4MywianRpIjoiODhjOWY1YThlNjVhNGNjYThjYzI2ZmRmMDkzOTYxNTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.TlMbyEVXKyY8D4YSYsJUZIGd7CA4_rj_HYjrAYO5I0w)

8.  Navigate to Connect profile by selecting Profile from the drop-down menu next to the username in the upper right-hand corner of your Connect account. Make note of your unique API Token to be used when setting up the app in Zuora environment.

    ![Installation-6.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e68ff953-181b-45f1-bbc4-8beb741a3242?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2OGZmOTUzLTE4MWItNDVmMS1iYmM0LThiZWI3NDFhMzI0MiIsImV4cCI6MTc3MTU1ODE4MywianRpIjoiNDc3YzQ5MzY0ZmJjNDlhYmFlMzQzZjg1YWVkY2U2YWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vB6iS44EeuDVlbRpFjrz2NAyLpAxt_3nL79Bu4etYo0)


After you have installed the Minimum Commitment app into your Zuora tenant, you need to [Configure the Minimum Commitment](/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/minimum-commitment) app for Notifications and Custom Fields.

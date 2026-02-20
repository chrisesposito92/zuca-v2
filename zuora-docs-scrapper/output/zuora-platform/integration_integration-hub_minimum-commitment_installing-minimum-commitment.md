---
title: "Installing Minimum Commitment"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/minimum-commitment/installing-minimum-commitment"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:23.705Z"
---

# Installing Minimum Commitment

This section guides you through the installation process, including configuration details and post-installation steps.

Minimum Commitment app is an integrated service that must be installed directly into your Zuora tenant(s) after purchase.

1.  Navigate to Tenants in Zuora Connect and select Minimum Commitment Application from the New dropdown menu.

    ![Installation-1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f8fbe9a6-1b2c-42cd-bfb3-3d99ae87a048?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4ZmJlOWE2LTFiMmMtNDJjZC1iZmIzLTNkOTlhZTg3YTA0OCIsImV4cCI6MTc3MTcwODIxNywianRpIjoiMTdjNGM0YWUyMzQzNDIwZDgwZTk4ZTFmOTI0NWU3Y2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.WLnfx5ok2TY06QGcPjyVmAHYZztMr_3gJuDgQ3PcSPY)

2.  Complete the General login configuration details:
    1.  Name: Used to describe the app, enter a name that will help identify this app later on.
    2.  Run Mode - Standard (default)
    3.  Execution - Select Callout from the drop down menu.
    4.  Build Name - Universal (default).
    5.  Target - Select the credentials to the desired Zuora Environment.
3.  Complete the Advanced login configuration details. There is no configuration needed for Workflow Token, Endpoint or Username. Workflow Token, Endpoint and Username are advanced features for the Billing Post Processor. Contact your Engagement Manager for more details.
4.  Select Require Bill Run.
5.  Click Create .

    ![Installation-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cac154c5-83e1-4088-921b-dfc59f377ec1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNhYzE1NGM1LTgzZTEtNDA4OC05MjFiLWRmYzU5ZjM3N2VjMSIsImV4cCI6MTc3MTcwODIxNywianRpIjoiMGJlNTI4OTBkMjkzNDI2OTliMzdjZmI3MDdkMDdkZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ez0qXP-0_ZXYKY0gsUxsi_qepGIYeqGqOUsb6TsloVc)![Installation-3.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3f8aa6de-7019-43e9-a1db-7045f89e2aa9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNmOGFhNmRlLTcwMTktNDNlOS1hMWRiLTcwNDVmODllMmFhOSIsImV4cCI6MTc3MTcwODIxNywianRpIjoiMjU1NWM3ZmE4ZGI2NDdlYmE2OWNjNTM5YThkZWU0ZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.uE0qTJixxx0U35QHtc9-Q9_XB2DD1ynVbgyKZoT80-8)

    Minimum Commitment app should appear in tenant.

6.  Hover over app in tenant to show the Actions menu. Select the magnifying glass to review Task Details.

    ![Installation-4.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6d6a9ff2-0f76-4bce-bc62-dbd3768afe9f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZkNmE5ZmYyLTBmNzYtNGJjZS1iYzYyLWRiZDM3NjhhZmU5ZiIsImV4cCI6MTc3MTcwODIxNywianRpIjoiMWY5NGQ2ZGUxYzgzNGFhNzgwOTM2ZTlmY2FmMzdkNTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.um5DTC27Qv67jcTxWx5t5iF3XRC12nibWJe2mGx4Kpc)

7.  In Task Details, copy the Endpoint URL to configure Zuora environment in later steps.

    ![Installation-5.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b2df1ae1-a3e6-4dd7-ad14-3b1f845d7816?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyZGYxYWUxLWEzZTYtNGRkNy1hZDE0LTNiMWY4NDVkNzgxNiIsImV4cCI6MTc3MTcwODIxNywianRpIjoiYjgxMTIyMjQwMDk4NGQzNTg3N2YwNDc0ZWY2NDM1YWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.fBNQjZX6oR7_Jd6edhq8mRKnBpR1mtLAvkF6LXJloww)

8.  Navigate to Connect profile by selecting Profile from the drop-down menu next to the username in the upper right-hand corner of your Connect account. Make note of your unique API Token to be used when setting up the app in Zuora environment.

    ![Installation-6.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e68ff953-181b-45f1-bbc4-8beb741a3242?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2OGZmOTUzLTE4MWItNDVmMS1iYmM0LThiZWI3NDFhMzI0MiIsImV4cCI6MTc3MTcwODIxNywianRpIjoiNTQ3NmE3MGNiNzk4NDc4ZGEzMjdhZTJlZTM4ZWIyZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ud5IFCI_rohOM0r8zFDYcH26LcswHjuipD_XUatK96Y)


After you have installed the Minimum Commitment app into your Zuora tenant, you need to [Configure the Minimum Commitment](/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/minimum-commitment) app for Notifications and Custom Fields.

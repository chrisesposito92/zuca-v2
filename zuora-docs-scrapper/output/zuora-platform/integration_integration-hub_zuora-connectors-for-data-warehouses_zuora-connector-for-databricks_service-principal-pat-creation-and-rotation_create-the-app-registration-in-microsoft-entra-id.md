---
title: "Create the app registration in Microsoft Entra ID"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-the-app-registration-in-microsoft-entra-id"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:11.097Z"
---

# Create the app registration in Microsoft Entra ID

Learn how to create the app registration in Microsoft Entra ID

Ensure you have [chosen your service principal type](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/choose-your-service-principal-type).

1.  Sign in to the Azure portal.
2.  Navigate to Microsoft Entra ID > App registrations > New registration.

    ![new_registration_microsoft_entra_ID](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/34ca0217-3d8c-4238-b120-9b0d210255b4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM0Y2EwMjE3LTNkOGMtNDIzOC1iMTIwLTliMGQyMTAyNTViNCIsImV4cCI6MTc3MTU1ODM4NywianRpIjoiMGUyNmE2NjIxN2M4NDA0NGEzMzVjOWJiMGMxZGE0YjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.clEikzPPw8WmBf5Kf4OaIEq2pMKuQOFJIZV4jr38tU8)

3.  Enter a Name (for example, Databricks Service Principal).
4.  Under Supported account types, select Accounts in this organizational directory only (Single tenant).
5.  Click Register.
6.  On the Overview page, copy and save:

    -   Application (client) ID

    -   Directory (tenant) ID



You must [Create a client secret in the app registration](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/service-principal-pat-creation-and-rotation/create-a-client-secret-in-the-app-registration).

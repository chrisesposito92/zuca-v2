---
title: "Add a source code repository to Zuora tenant"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/github-integration-with-deployment-manager/add-a-source-code-repository-to-zuora-tenant"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:38.694Z"
---

# Add a source code repository to Zuora tenant

Learn how to add a GitHub source to a Zuora tenant, creating and upload configuration templates, and manage existing configurations.

You can perform the following operations while uploading the template to the repository:

-   Add GitHub as a source in Zuora tenant.
-   Create a configuration template, select a tenant's complete configuration (golden template), or capture a subset of the latest configurations.
-   Create and upload the template from the configuration template interface in the destination source code repository of GitHub. You should also be able to upload an existing template in the source code repository.
-   Refresh and update an existing configuration template if any configuration is modified.

1.  Navigate to Deployment Manager on the left navigation menu.
2.  In the Deployment Manager list view page, click on the Source Code Repository tab.
3.  Click the +New button.
4.  In the Add new source control pop-up, enter the following details:

    | Parameter | Value |
    | --- | --- |
    | Source Control | Select GitHub*. |
    | Token Key | Provide a unique identifier for mapping Deployment Manager to GitHub. |
    | Organization Name | Project or container in GitHub for sharing the space with users in GitHub. |
    | Repository Name | Place in GitHub for storing files. |
    | Access Token | User level token for accessing GitHub. |

    ![Add source code](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9e706d06-23b7-4865-9c93-147dfa786200?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjllNzA2ZDA2LTIzYjctNDg2NS05YzkzLTE0N2RmYTc4NjIwMCIsImV4cCI6MTc3MTU1NzUxNCwianRpIjoiMTIxY2YwYzZhYWZiNDA2OGFhYTRmODk5ZDM0MmVjM2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.iHY9esNZa5Ok3wzncr0cwha35HLnjn7KYo8pKR8N5Sw)

5.  Click Authenticate .

    Note: This is a one-time configuration setup, and the Source Code Repository remains Active until the access token expires.

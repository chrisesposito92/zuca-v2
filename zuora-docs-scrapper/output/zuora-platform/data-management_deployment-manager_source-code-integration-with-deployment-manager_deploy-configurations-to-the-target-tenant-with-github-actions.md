---
title: "Deploy configurations  to the target tenant with GitHub actions"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/source-code-integration-with-deployment-manager/deploy-configurations-to-the-target-tenant-with-github-actions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:57.175Z"
---

# Deploy configurations to the target tenant with GitHub actions

Learn how to deploy configurations to a target Zuora tenant using GitHub Actions for seamless and automated deployment processes.

You can programmatically deploy the latest version of configurations from a source code repository to a target Zuora tenant using GitHub Actions. This approach enables seamless deployment once configurations are tested and verified.

-   GitHub Actions workflow is available and customisable at the user level and not at the organization level.
-   Integrate automated testing to validate changes before they are merged. This helps catch issues early and ensures stability. Configuring a workflow in GitHub Actions may also achieve this framework.
-   Product Catalog Deployments are currently not available with GitHub Actions.

1.  When a file is stored in the GitHub repository, the Deployment Manager creates a .github/workflows folder. This folder contains a .yml file designed for triggering deployments to target tenants using GitHub Actions. ![Github workflow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9b629eb6-e326-4858-91ac-72008d273801?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjliNjI5ZWI2LWUzMjYtNDg1OC05MWFjLTcyMDA4ZDI3MzgwMSIsImV4cCI6MTc2NjYzOTU3NSwianRpIjoiZThmMjllNjM5ZWJhNDE3MGE5MzJkYTk5OGJlNzlkMzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JsF_Vl4cz_17eFsgW_9iuJD46WsfssRcTWPZCaZXYUI)
2.  Navigate to the Actions tab in the repository and click on Migrate .
3.  Select the Run Workflow option, which will display the required parameters.
4.  Provide the Deployment Name and Template File Path for each deployment. Other parameters (e.g., Tenant ID, Environment, etc.) are auto-populated based on the migrate.yml file configuration. ![GitHub actions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c8cd598d-4004-4d3a-b648-b58bc648eb2e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM4Y2Q1OThkLTQwMDQtNGQzYS1iNjQ4LWI1OGJjNjQ4ZWIyZSIsImV4cCI6MTc2NjYzOTU3NSwianRpIjoiZWI5MWQyMTc0ZjE3NDM1NzhkZGRiMjVjNjQ5NjA5OTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jbvC2I6YJlFsH6HIZIPjG_GW2MltiHWtuPG_0vjOrj4)

    Customizing the Migrate.yml File for Zuora Landscape

    The migrate.yml file is editable, allowing users to tailor it for specific Zuora tenants. Key customizable fields include:

    1.  Client ID and Secret Key : Credentials for authentication.
    2.  Environment : Specifies the target environment (e.g., production or sandbox).
    3.  Tenant ID and Entity ID : Identifiers for the deployment target.
    4.  Template File Path: Path to the configuration file in the repository.

    You can duplicate and modify this file for workflows targeting multiple tenants. When duplicating, ensure the file name is updated for clarity and distinction.

    ![GitHub customize file](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/819858e3-3587-411b-98a1-07c3d758344e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxOTg1OGUzLTM1ODctNDExYi05OGExLTA3YzNkNzU4MzQ0ZSIsImV4cCI6MTc2NjYzOTU3NSwianRpIjoiYmYzNzAxYzEwNWQzNDUyZDhkMzY5MmU5MDk0MmU0OTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.f5PhquLKqGdrsBxmXkxDvwLIllcspMenv0KPjfpqWK0)

    | Parameter | Value |
    | --- | --- |
    | Use Workflow from | Select the Branch associated with the repository. |
    | Deployment Name | Provide a name for the deployment starting with “-”. |
    | Target Tenant Client id | Capture them from user details. |
    | Target Tenant Secret Key | Capture them from user details. |
    | Target Tenant Environment | Capture information from Tenant Details for GitHub Actions in Deployment Manager. |
    | Target Tenant id | Capture information from Tenant Details for GitHub Actions in Deployment Manager. |
    | Target Tenant Entity id | Capture information from Tenant Details for GitHub Actions in Deployment Manager. |
    | Target Tenant User id | Capture information from Tenant Details for GitHub Actions in Deployment Manager. |
    | Template File Path | File path is copied from the GitHub repo. It is the path of the json file that is stored repo>folder>file name>click on copy path. |

    Note: When modifying the Migrate.yml file, it is essential to implement syntax validation to check for errors before applying changes. Ensure that all necessary fields are populated and correctly formatted.

    To generate a Client ID and Secret Key, navigate to Administration > Manage User in Zuora. Click on your username, provide a name for the Client Name field, and then click Create. This will generate the required credentials for authentication.

    ![GitHub create clientId](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/043c63fc-7055-4afb-96be-674c14256a8c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA0M2M2M2ZjLTcwNTUtNGFmYi05NmJlLTY3NGMxNDI1NmE4YyIsImV4cCI6MTc2NjYzOTU3NSwianRpIjoiYjY2NTJjYzUxMzJiNDRjMjk5N2M5N2UxZTBlYTE3ZTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oL1BuZLgONqLzbzL9EmAxAMOfIsviR0o0esfG2SHO-o)

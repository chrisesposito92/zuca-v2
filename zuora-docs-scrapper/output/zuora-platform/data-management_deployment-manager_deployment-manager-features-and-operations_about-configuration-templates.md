---
title: "About configuration templates"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-configuration-templates"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:48.783Z"
---

# About configuration templates

Configuration Templates in Zuora Deployment Manager allows you to simplify tenant setup by importing predefined metadata files.

Configuration Templates in Zuora Deployment Manager enable you to configure your tenants in minutes by importing a templated metadata configuration file. This feature eliminates the need for long manual configuration processes that would have previously taken hours. You will be able to access a comprehensive repository of industry-specific templates. It will be easier for you to deploy and release. Overall, you will be able to combine, validate, deploy, release, redeploy and release, thereby enhancing operational efficiency.

Note: Configuration Templates feature is available for administrators by default. For standard users, the availability is permission-based, and the permission level is "Access Deployment Manager." For more information, see

[Create a custom user role](https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/User_Roles/Create_a_custom_user_role)

.

## High-level flow of Configuration Template

Configuration Templates automate the deployment of non-transactional objects (components). Using templates, you can deploy the same subset of configurations across multiple tenants and environments.

![Flow of configuration template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/335d9bee-f51c-41a4-a682-02ec473c095b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMzNWQ5YmVlLWY1MWMtNDFhNC1hNjgyLTAyZWM0NzNjMDk1YiIsImV4cCI6MTc3MTY5NTUyMywianRpIjoiN2U0MmQ5N2FhYzZkNGMxZjgxODg2ZmQzZjlmZTMwMmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.IzK6OkGDLdPkuSS5Z3z0_Kx82jIyVJyOtzm1bMjgLKs)

## Access Configuration Template

To access the Configuration template, log in to the target tenant, navigate to Administration > Configuration Templates.

You can create, download, validate and deploy templates via UI and API. For more information, see

-   [Create and download template via UI and API](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-configuration-templates/create-and-download-source-template)
-   [Create a deployment via UI and API](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-configuration-templates/create-a-deployment)

For more information on using configuration templates via APIs, see [API references](https://knowledgecenter.zuora.com/Zuora_Platform/Data_Management/Deployment_Manager/CA_Configuration_Templates/Using_Configuration_Templates).

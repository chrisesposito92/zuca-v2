---
title: "User access control for GitHub integration"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/github-integration-with-deployment-manager/user-access-control-for-github-integration"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:20.884Z"
---

# User access control for GitHub integration

This document outlines the user access control requirements for integrating GitHub with Zuora's Deployment Manager.

The users who have access to the deployment manager in the Zuora tenant and are allowed to deploy in Zuora tenants via source Code Repo must have access to the repositories under Organisation > Repositories as Collaborators in GitHub.

For more details on user roles and permissions for Deployment Manager and GitHub, see [Deployment Manager](/zuora-platform/data-management/deployment-manager/deployment-manager-overview), [GitHub User Roles and Permissions](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization).

Note:

This integration is user access-managed and not tenant-managed. The users who have access to Deployment Manager in Zuora tenant must have access to GitHub. The Deployment Manager List View and Configuration Template List View pages are accessible to all users, but adding the source code repository is at the user level.

![User access for collaborator in GitHub](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6f678220-43ea-4799-9f75-c0d26c93e93a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZmNjc4MjIwLTQzZWEtNDc5OS05Zjc1LWMwZDI2YzkzZTkzYSIsImV4cCI6MTc3MTY5NTU1NSwianRpIjoiMDlhY2UxMDI2MzIyNDRjZmExMTUxN2EzNTA3YTRlYjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gqBTyG1y5tlDSsMgoIhqFezcZdyofXw-Ytzt8lhzMHE)

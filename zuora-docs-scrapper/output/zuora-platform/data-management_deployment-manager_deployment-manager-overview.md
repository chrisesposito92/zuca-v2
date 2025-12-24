---
title: "Deployment Manager overview"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:20.757Z"
---

# Deployment Manager overview

Deployment Manager streamlines the migration of metadata objects between Zuora tenants.

Deployment Manager helps you manage the tenant migration process effectively and efficiently in Zuora.

A deployment is an automated process that migrates metadata objects from a source tenant to a target tenant. Metadata objects in Zuora can be Settings, Custom Fields, Notifications, and more.

For example, when expanding your subscription business with a new tenant, you can use Deployment Manager to migrate configuration from a sandbox tenant to a production tenant. This significantly reduces manual effort while giving you control to compare and selectively deploy the most relevant settings.

## Key Features

-   Migrate metadata between tenants, for example, from a sandbox tenant to another sandbox tenant, from a sandbox tenant to a production tenant, or from a sandbox tenant to a QA tenant.
-   Compare differences of values between the source and the target tenants
-   Revert deployments to the previous state in the target tenant
-   View deployment history and logs

## Deployment Manager Flow

The following graph describes a high-level flow for using the Deployment Manager.

![High-level flow of Deployment Manager](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ec64e73d-9265-4879-8c31-eba5b59ee6ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjNjRlNzNkLTkyNjUtNDg3OS04YzMxLWViYTViNTllZTZlZiIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiNzNlZWU1MThkMjNmNDE5NjgyYzNjZjhkYWRmZjgzYTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.2H1DUdDLBLUdsRogmKgSUpyMs-z4Xk2UR7wjnEn0X-s)

See [Use Deployment Manager](/zuora-platform/data-management/deployment-manager/use-deployment-manager/use-deployment-manager) for more information on the general steps.

## Custom Roles in Deployment Manager

Deployment Manager permission can now be incorporated for custom roles. Administrators can grant access perform deployments by creating a custom role and enabling Deployment Manager permission at the tenant level.

To add and authenticate Source Tenants, users must have the Platform Admin role.

![Custom roles in Deployment Manager](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e29a087-d4ee-46cb-907e-57f18aef1b62?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMjlhMDg3LWQ0ZWUtNDZjYi05MDdlLTU3ZjE4YWVmMWI2MiIsImV4cCI6MTc2NjYzOTQ3OCwianRpIjoiMzMyZjE3NDgyZjFhNDY2MWFiNGMyNTdjNzZjZWExM2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.XGTW_GoTCSJsR6aQOhzuND_pM_cDgEUDexx4Wvo7BCk)

## Administrative Access

Deployment manager provides the following permissions within tenants:

-   Source Tenant : Users must have the Platform Administrator role to add and authenticate Source Tenants.
-   Target Tenant : By default, users with a Platform Administrator role will have access to Deployment Manager.

Note:

Platform Standard users can run deployments without needing a Platform Administrator role.

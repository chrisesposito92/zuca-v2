---
title: "Deployment Manager overview"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-overview"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:19.023Z"
---

# Deployment Manager overview

This topic provides an overview of Deployment Manager and its role in managing metadata deployments between Zuora tenants.

A deployment is an automated process that migrates metadata objects from a source tenant to a target tenant. Metadata objects in Zuora can be Settings, Custom Fields, Notifications, and more.

For example, when expanding your subscription business with a new tenant, you can use Deployment Manager to migrate configuration from a sandbox tenant to a production tenant. This significantly reduces manual effort while giving you control to compare and selectively deploy the most relevant settings.

## Key Features

Deployment Manager provides the following capabilities:

-   Migrate metadata between tenants, including:
    -   Sandbox to sandbox
    -   sandbox to QA
    -   sandbox to production
-   Compare differences between the source and the target tenants
-   Revert deployments to a previous state in the target tenant
-   View deployment history and logs

## Prerequisites

-   You must have a [Platform Administrator](https://zuora-staging.portal.heretto.com/zuora-platform/system-management/administrator-settings/user-roles/payments-roles) user role to add source tenants for deployments.
-   You must be logged in to the target tenant to run a deployment.
-   The target tenant must be configured to receive metadata objects from a source tenant.

## Deployment Manager Flow

The following graph describes the high-level flow for using Deployment Manager.

![High-level flow of Deployment Manager](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ec64e73d-9265-4879-8c31-eba5b59ee6ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjNjRlNzNkLTkyNjUtNDg3OS04YzMxLWViYTViNTllZTZlZiIsImV4cCI6MTc3MTY5NTQ5NywianRpIjoiZjAxOThkNjYxOGFhNGQ1M2E1OGU5NzQ1OTY0NjA2NjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.kHAx4KOEj4HWFcy8XmZWWpFeRXC6c7jp0AMRUp-U6A0)

## Permissions and Roles

Administrative Access

Deployment manager provides the following permissions within tenants:

-   Source Tenant : Users must have the Platform Administrator role to add and authenticate Source Tenants.
-   Target Tenant : By default, users with a Platform Administrator role have access to Deployment Manager.

Note: Platform Standard users can run deployments without requiring a Platform Administrator role.
Custom Roles in Deployment Manager

Deployment Manager permission can now be incorporated for custom roles. Administrators can grant access perform deployments by creating a custom role and enabling Deployment Manager permission at the tenant level.

Note: To add and authenticate Source Tenants, users must have the Platform Admin role.

![Custom roles in Deployment Manager](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e29a087-d4ee-46cb-907e-57f18aef1b62?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMjlhMDg3LWQ0ZWUtNDZjYi05MDdlLTU3ZjE4YWVmMWI2MiIsImV4cCI6MTc3MTY5NTQ5NywianRpIjoiZGYwMjJkZWY0YWVmNGNmYzhiZjU2NTU5YjU5NGE1Y2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ihIaTekgbwhhjrC0dI8SjvoihNAoJ0ep_f9cHwUcfrQ)

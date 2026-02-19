---
title: "Taxation component behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/taxation-component-behavior"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:54.962Z"
---

# Taxation component behavior

The article outlines the taxation component and best practices to ensure successful integration in Billing.

The Taxation component is available as an individual deployable component in Deployment Manager. You can access it from the Select screen under Compare > Settings. For more information, see [Taxation](/zuora-billing/set-up-zuora-billing/apply-taxes/overview-of-zuora-tax).

## Taxation deployment flow and best practices

-   The Connect Tax Engine depends on custom fields. To avoid deployment failures, deploy custom fields before deploying the taxation component.

-   Deployment Manager does not support Open Tax Connectors from the Marketplace.

-   Before deployment, ensure that the tax engine connection is tested and validated under the tax engine setup in both source and target tenants.

-   Taxation components must be deployed in a specific hierarchy. Deployment Manager treats the Tax Engine as the master component, followed by dependent child components.

    Deploy the taxation components in the following order:

    1.  Tax companies
    2.  Tax code (dependent on tax engines and tax companies)
    3.  Tax rate (dependent on tax codes)

    The following diagram illustrates the deployment flow of the taxation components.

    ![Taxation components](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/43d3f545-406d-4bd6-ae51-e25ebaaea40b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQzZDNmNTQ1LTQwNmQtNGJkNi1hZTUxLWUyNWViYWFlYTQwYiIsImV4cCI6MTc3MTU1NzUyOSwianRpIjoiZjI4YmM3Y2E3YmFkNDkwNGFiYjVlZWM0YTA0MTc1MWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.PFqP-hV0QYBZVDwmQfafeFLsVALNrWBOljHfT3TS5RY)

-   Deployment Manager deploys only the tax companies associated with tax engines that are configured in the target tenant. For example, if Source Tenant has Avalara and Connect Tax engines configured and the target tenant has only Avalara, only the tax companies of Avalara will be deployed post deployment and acts as a partial deployment.

---
title: "Taxation component deployment behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/taxation-component-deployment-behavior"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:27.025Z"
---

# Taxation component deployment behavior

The article outlines the taxation component and best practices to ensure successful integration in Billing.

The taxation component is available as an individual component in the Select screen and can be found in Compare > Settings. .

Taxation component has the following behaviors and a list of best practices:

-   Connect tax engine has a dependency on custom fields. To ensure successful deployments, deploy custom fields before triggering the taxation deployments.

    The following diagram depicts the deployment flow of the taxation components.

    ![Taxation components](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/43d3f545-406d-4bd6-ae51-e25ebaaea40b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQzZDNmNTQ1LTQwNmQtNGJkNi1hZTUxLWUyNWViYWFlYTQwYiIsImV4cCI6MTc2NjYzOTU0NCwianRpIjoiMmQ3ZDQyZGYwMWYxNGU0YjgzM2IyNjk3YzJkYjRhY2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GjAnQRJ2aKErjV4KW-NlFzVDY3KJ4ny_lnNaj2WODXQ)

-   Perform the following actions to deploy taxation component from source to target tenant:

    Deploy Tax Engine as the master component, followed by the child components in the following order:

    1.  Tax companies
    2.  Tax code (dependent on tax engines and tax companies)
    3.  Tax rate (dependent on tax codes)
-   Deployment Manager deploys the tax companies associated with the tax engines that are configured in the target tenant. For example, if Source Tenant has Avalara and Connect Tax engines configured and the target tenant has only Avalara, only the tax companies of Avalara will be deployed post deployment and acts as a partial deployment.
-   Deployment Manager does not support Open Tax Connectors from Marketplace.
-   Make sure you test the connection of the tax engines under the setup tax engine.

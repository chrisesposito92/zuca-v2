---
title: "Custom fields behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/custom-fields-behavior"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:37.607Z"
---

# Custom fields behavior

Learn how Deployment Manager facilitates the deployment of custom fields across different environments, including guidelines for handling legacy and advanced custom fields.

Note:

Deployment Manager seamlessly facilitates end-to-end deployments of:

-   Advance Custom Fields in Sandbox, Central Sandbox and Production.
-   Deployments of legacy custom fields in Sandbox, Central Sandbox and Production.

-   Deployment Manager will skip updating the custom field if the source tenant has a legacy custom field and in the target, it is an advanced custom field. Similarly, it will skip updating an advanced custom field in the source tenant that is configured as a legacy custom field in the target tenant. It is recommended that legacy custom fields be deployed and updated as legacy from source to target and advance custom fields be deployed and updated as advance. The system will display an error if legacy fields are deployed as advanced and vice versa.
-   Zuora Metadata configurations have relationships in which one component controls certain behavior of the other component. Custom Fields is one such component that directly depends on the successful deployments of other components. It is recommended to deploy custom fields prior to deploying the following components:
    -   Taxation
    -   Billing Documentation
    -   Notifications
    -   Chart of Accounts
    -   Product Catalog
-   Following is a list of custom field settings:

    -   Custom Fields are selected by default when the user selects any of the above-mentioned components. However, the user has the option to deselect/disable the component if custom fields have been deployed previously.

![Custom fields Deployment Manager](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/63904964-8e2f-4ac0-b6f7-6afc1625b681?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzOTA0OTY0LThlMmYtNGFjMC1iNmY3LTZhZmMxNjI1YjY4MSIsImV4cCI6MTc3MTY5NTU3MiwianRpIjoiMTUzNjYwN2YzZjFjNGQ4Y2FkNzljMWQ2MTc5NTY3NjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.YNHQA_AZy7wWdo7itXJQi5DMXYEVenKbdxk4FyPMcz0)

-   Indexed custom fields cannot be updated to non-indexed; non-indexed custom fields cannot be updated to indexed.
-   Custom fields associated with Accounting Codes cannot be deployed in the target.
-   Custom fields cannot be reverted.
-   Sharing the configuration for Custom Fields in Multi-entity is currently not amended in the Deployment Manager.

For more information, see [custom field management](/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager).

---
title: "Custom fields deployment behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/custom-fields-deployment-behavior"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:47.034Z"
---

# Custom fields deployment behavior

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

![Custom fields Deployment Manager](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/63904964-8e2f-4ac0-b6f7-6afc1625b681?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzOTA0OTY0LThlMmYtNGFjMC1iNmY3LTZhZmMxNjI1YjY4MSIsImV4cCI6MTc2ODYwMDcyNCwianRpIjoiYjgyZjNhODE5OGE1NDM0Nzg5YzdhNTczZGVlZDI1OWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.5akg8riFAS60gahdPJcJVxF0ij5xFN0SytlDp_MFmr0)

-   Indexed custom fields cannot be updated to non-indexed; non-indexed custom fields cannot be updated to indexed.
-   Custom fields associated with Accounting Codes cannot be deployed in the target.
-   Custom fields cannot be reverted.
-   Sharing the configuration for Custom Fields in Multi-entity is currently not amended in the Deployment Manager.

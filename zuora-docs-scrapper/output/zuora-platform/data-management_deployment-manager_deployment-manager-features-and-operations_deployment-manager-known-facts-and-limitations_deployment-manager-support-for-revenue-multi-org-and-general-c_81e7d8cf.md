---
title: "Deployment Manager support for revenue, multi-org, and general  configurations"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/deployment-manager-support-for-revenue-multi-org-and-general-configurations"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:41.863Z"
---

# Deployment Manager support for revenue, multi-org, and general configurations

The topic provides an overview of Deployment Manager features, including Multi-Org capabilities, revenue configurations, and general behaviors.

## Multi-Org

-   If Multi Org is not enabled in the target tenant, the result label will be "Feature Disabled". Contact your TAM, CSE, or PDS to get the Multi-Org capability enabled in the target tenant.
-   Deployment Manager does not support organization labels for product catalog, accounting periods, currency conversions, and workflows.

## Revenue Configurations

-   Deployment Manager will override field values each time custom fields on Billing are mapped to Target Revenue fields.

## General

-   Deployment Manager does not delete the values of the parameters configured in the target tenant. For example, in the screenshot below, the values of Different Currencies remain false after deployment.

    ![General configuration of deployment](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ecb5e795-dd19-40fd-8012-daf8b1bd0f92?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjYjVlNzk1LWRkMTktNDBmZC04MDEyLWRhZjhiMWJkMGY5MiIsImV4cCI6MTc2NjYzOTU2MCwianRpIjoiYTNhNWNiZTdiY2NhNDJlYTg5ZDI3YmU4NWUzOTYyODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UZhoh8bX0Bys7Jf3sKymuyQPNUv-73bo3CmRUoDHH8A)

-   If the Deployment Manager service cannot access a resource such as a record or an object, it returns an error - "Retry-able Error". In such cases retry deploying the component and if the issue persists, contact [Zuora Global Support](https://support.zuora.com/).
-   Deployment Manager migrated the GL segmentation rules as a false value in target tenants. In such cases, activate the required GL segmentation rule post-deployment.
-   Deployment Manager supports the export of Product Catalog and Reporting comparison.
-   Zuora Audit Trail integrates with Deployment Manager across all environments. See [Sample queries of Audit Trail.](https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Audit_Trail/Sample_Queries_of_Audit_Trail#Retrieve_jobs_performed_through_the_Deployment_Manager)

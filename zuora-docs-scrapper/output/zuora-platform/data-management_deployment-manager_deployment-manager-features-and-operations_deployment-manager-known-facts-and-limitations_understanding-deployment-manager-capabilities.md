---
title: "Understanding Deployment Manager capabilities"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/understanding-deployment-manager-capabilities"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:47.714Z"
---

# Understanding Deployment Manager capabilities

The article provides the constraints of Deployment Manager, including restrictions on custom fields, sensitive information migration, and unsupported platforms and settings.

-   Deployment Manager does not currently support deploying the Accounts Receivable field under Invoice Posted in Product Rate Plan Charges. You must update this field manually during deployment.
-   Indexed custom fields cannot be updated to non-indexed; non-indexed custom fields cannot be updated to indexed.
-   Deployment Manager does not support the migration of sensitive information like passwords across all the metadata configurations.
-   Revenue accounting codes within the Billing platform are not supported.
-   Zephr Platform and Revenue Platform are not supported.
-   Comparing the content of billing document templates is not supported.
-   Custom fields associated with Accounting Codes cannot be deployed in the target. The following settings are not supported:

| Section | Settings |
| --- | --- |
| Administration | Security Policies |
| Manage Users |  |
| External SMTP |  |
| AQuA Stateful Time Offset |  |
| Billing | Download the Zuora WSDL |
| Fulfillment Settings |  |
| Manage Regions |  |
| App Store Connector |  |
| Payments | Payment Method |
| Setup Payment Gateway |  |
| Setup Payment Method Updater |  |
| CIT/MIT Configuration |  |
| Commerce | Synchronize Salesforce.com Data |
| Configure Salesforce.com Quote Templates |  |
| Manage Checkout Pages |  |
| Finance | Manage Currency Conversion |
| Adding Segments |  |
| GL Segments |  |
| Reporting | Manage Datasources |
| AQuA job finder |  |
| Connect | Lockby Ruby |
| Disputes |  |
| Collection Window |  |
| Advance Payment Retry/Configurable Payment Retry |  |
| Notes |  |
| Statement Generator |  |
| Advance Payment Manager |  |

Related articles

-   [Deployment Manager Overview](/zuora-platform/data-management/deployment-manager/deployment-manager-overview)

-   [Using Deployment Manager](/zuora-platform/data-management/deployment-manager/use-deployment-manager/use-deployment-manager)

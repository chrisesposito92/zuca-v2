---
title: "Scope and behavior overview"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:38.446Z"
---

# Scope and behavior overview

This topic provides an overview of Deployment Manager scope, and supported configurations

Deployment Manager provides role-based access and permission controls. It does not support the migration or cloning of usernames and passwords.
Note: Zuora recommends storing usernames and passwords safely or deleting them when they are obsolete to prevent unauthorized access or data exposure

-   Deployment Manager does not currently support deploying the Accounts Receivable field under Invoice Posted in Product Rate Plan Charges. This field must be updated manually.

-   Indexed custom fields cannot be updated to non-indexed; non-indexed custom fields cannot be updated to indexed.

-   Deployment Manager does not support the migration of sensitive information like passwords across the metadata configurations.

-   Revenue accounting codes within the Billing platform are not supported.

-   Zephr and Revenue Platforms are not supported.

-   Comparing the content of billing document templates is not supported.

-   Deployment Manager does not support comparing and deploying Workflow Tasks.

-   Custom fields associated with Accounting Codes cannot be deployed in the target.

    The following settings are not supported:


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

## Deployment Manager behavior

Deployment Manager has the following behaviors by design concerning Workflow, Custom objects and custom logic, Hosted payment pages, Accounting Period, Taxation, Custom Fields, Notifications, Custom events, User roles, Reporting, and Platforms. It is recommended that Notifications and Workflow be deployed as separate components without any other deployment components for best results.

---
title: "Accounting period deployment behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/accounting-period-deployment-behavior"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:37.773Z"
---

# Accounting period deployment behavior

This document outlines the process of deploying accounting periods using the deployment manager, including necessary permissions and expected behaviors.

The Z-Finance permission should be enabled by default to access the accounting periods under billing platform. Ensure that the user has Finance Permissions to create and update the accounting periods. For more information, see [Finance Permissions](/zuora-platform/security-and-identity/administrator-settings/user-roles/finance-roles) .

The following is a list of known behaviors while deploying accounting period in the deployment manager:

Accounting Periods in Source Tenant:

| Accounting Period Name | From | To |
| --- | --- | --- |
| Quarter 4 FY22 | 11/10/2022 | 10/01/2023 |
| Quarter 3 FY22 | 11/08/2022 | 10/10/2022 |
| Quarter 2 FY22 | 11/05/2022 | 10/08/2022 |

Accounting Periods in Target Tenant:

| Accounting Period Name | From | To |
| --- | --- | --- |
| Open Ended Date | 11/05/2022 |  |
| Quarter 1 FY22 | 11/01/2022 | 10/05/2022 |

Post Deployment the following Accounting Periods will be created in the Target Tenant:

| Accounting Period Name | From | To |
| --- | --- | --- |
| Open Ended Date | 11/01/2023 |  |
| Quarter 4 FY22 | 11/10/2022 | 10/01/2023 |
| Quarter 3 FY22 | 11/08/2022 | 10/10/2022 |
| Quarter 2 FY22 | 11/05/2022 | 10/08/2022 |
| Quarter 1 FY22 | 11/01/2022 | 10/05/2022 |

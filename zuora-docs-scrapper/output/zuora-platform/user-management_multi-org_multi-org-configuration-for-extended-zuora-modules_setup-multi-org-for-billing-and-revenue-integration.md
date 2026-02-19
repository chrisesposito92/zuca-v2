---
title: "Setup Multi-Org for billing and revenue integration"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules/setup-multi-org-for-billing-and-revenue-integration"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:38.861Z"
---

# Setup Multi-Org for billing and revenue integration

This section focuses on configurations and impacts across Billing and Revenue.

Note: Zuora revenue supports Multi-org for all the org. units defined in Zuora billing. Depending on the business use case, the number of org units may also vary.

1.  Step 1: Sync Zuora Billing's Multi-org enabled tenants to Zuora Revenue.

    1.  Navigate to Zuora Revenue and complete the steps mentioned in and complete the steps mentioned in [Schedule Jobs](/zuora-revenue/month-end-process/reports/schedule-jobs).

    2.  In the Program name dropdown, select ‘RevPro 3.0 Billing Entity ID Sync process’ from the [Predefined Programs](/zuora-revenue/month-end-process/reports/predefined-programs) .

    3.  Navigate to the Program Parameters tab > In the Value field enter the Revenue Tenant ID and Billing Tenant ID to be synced.

2.  Step 2:Sync FXrate from Zuora Billing to Zuora Revenue

    1.  Navigate to Zuora Revenue and complete the steps given in [Schedule Jobs](/zuora-revenue/month-end-process/reports/schedule-jobs).

    2.  In the Program name dropdown, select ‘RevPro 3.0 Billing Fxrate Sync process’.

    3.  Navigate to the Program Parameters tab and enter the From date and To date to be synced.

3.  Step 3:Mapping between Zuora Billing org to Zuora Revenue org

    1.  Multi-org in Zuora Billing to Multi-org in Zuora Revenue ( 1:1 relationship) - For this use case, Multi-org should not be enabled in the system through the profile. All the org. data in Zuora Billing defaults to one org. in Zuora Revenue.

    2.  Multi-org in Zuora Billing to Single-org in Zuora Revenue (Many:1 relationship) - For this use case, Multi-org should be enabled in the system through the profile. All the org. data in Zuora Billing needs to be assigned to the corresponding org. in Zuora Revenue.


1.  Navigate to Setups > Application.
2.  From the right side menu ![Open side-menu](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/61122d92-0110-4141-9fa7-91af1db488f6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYxMTIyZDkyLTAxMTAtNDE0MS05ZmE3LTkxYWYxZGI0ODhmNiIsImV4cCI6MTc3MTU1NzkzNCwianRpIjoiYjAzMzQwYjRiM2YwNDBiMjllNDNmODJmM2Q2ZjMxOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.mQTqFdQvr7OaiYj2x3rgNMsGntaSQIMFYCgq_Npdems) select Organization .
3.  Disable the Organization/operating unit , if enabled.

Multiple Zuora Billing orgs are now mapped to Zuora Revenue org. ( Many :1 ). All the mapped organizations will now be available on the list screen.

-   A Revpro user can access the orgs. based on their role privileges. see [Manage User Access](/zuora-revenue/getting-started/user-management/user-access) to manage user roles.

-   Zuora Revenue supports all out-of-the-box reporting for the synced orgs. See [Zuora Revenue Reports](/zuora-revenue/month-end-process/reports/overview-of-zuora-revenue-reports) for more details.

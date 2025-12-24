---
title: "Usage: Import Usage"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/usage-import-usage"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:31.064Z"
---

# Usage: Import Usage

This reference describes the Usage: Import Usage task.

The import usage task uploads a usage data file to your Zuora tenant. A usage file can be in comma-separated value ( `.csv` ), Microsoft Excel ( `.xls` ), or ZIP format.

You need to download a template from Zuora UI and add your data into the file before uploading the file in an import usage task. To download a usage file template, see [Download the usage template](/zuora-billing/bill-your-customer/usage-billing/download-the-usage-template).

The usage file format for tenants that have Active Rating enabled is different from the usage file format for tenants that do not have Active Rating enabled.

Note:

This feature is no longer available for new users. If you are interested in our up-to-date billing consumption features, check [Prepaid with Drawdown](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/billing/usage_billing/prepaid_with_drawdown.ditamap) and [Unbilled Usage](/zuora-billing/bill-your-customer/usage-billing/unbilled-usage).

To learn about the usage data format, see [Import usage data](/zuora-billing/bill-your-customer/usage-billing/import-usage-data).

Click File to select an existing usage file or upload a new usage file. If Active Rating is enabled on your tenant, select Active Rating .

![Import Usage task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7e6bec77-853b-45a1-9109-29f03885ef14?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdlNmJlYzc3LTg1M2ItNDVhMS05MTA5LTI5ZjAzODg1ZWYxNCIsImV4cCI6MTc2NjY0MDk4OSwianRpIjoiNzcxODY1ODMwMzAxNDc1NThjOTkwY2ViYzhkN2I0ZjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.u6OGpql1gcvXb8pz6t5M1rSM-8oKNcR-YagXc0nY46w)

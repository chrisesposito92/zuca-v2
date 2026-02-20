---
title: "Deployment  icons and their status"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-icons-and-their-status"
product: "zuora-platform"
scraped_at: "2026-02-20T17:38:49.484Z"
---

# Deployment icons and their status

Use this reference topic to learn about deployment icons, their statuses, and descriptions.

| Compare result | UI Icon | Description |
| --- | --- | --- |
| No change |  | The source tenant values and the target tenant values are the same. |
| Different |  | The source tenant values and the target tenant values are different. |
| Only in target |  | The related feature is only enabled in the target tenant and cannot be disabled through deployment. You can contact Zuora Global Support to disable the feature in the target tenant. |
| Feature disabled |  | The related feature is only enabled in the source tenant. You can contact Zuora Global Support to enable the feature in the target tenant. |
| Cannot be reverted |  | The values in the target tenant cannot be reverted after the deployment. The following components cannot be reverted:CurrencyChart of AccountsThe name of the Chart of Accounts once it is in useThe Chart of Accounts under Accounts ReceivableThe parameters of custom fieldsGL Segments and Revenue Recognition Codes.Revenue Automation Date / Revenue Start Date.Custom fieldsHosted Payment Pages |
| Cannot be deployed |  | The values cannot be deployed functionally. The following components cannot be deployed:The Data Access Control HierarchyThe Outbound Entity Connections setting under Multi-entity Settings.The labels of custom fields. |
| Retry-able Error |  | scope="external" href="https://www.zuora.com/support-center/"> The parameter values are not retrieved from the backend. You can try after sometime and if the error persists, contact Zuora Global Support. |

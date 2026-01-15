---
title: "Configure multiple organizations"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules_1/multi-org-in-zuora-revenue/configure-multiple-organizations"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:26.058Z"
---

# Configure multiple organizations

Learn how to configure multiple organizations in Zuora Revenue, enabling organization-specific transaction processing and role-based access control.

In Zuora Revenue, you can define more than one organization or operating unit. Then, you can choose to open and close the accounting period based on the organization so that transaction data is to be uploaded and processed for a specific organization or operating unit. This configuration is useful especially when Zuora Revenue is integrated with Oracle ERP because you can define the operating unit in a similar way to Oracle ERP.

In addition, you can use role-based access control to assign different organizations to different user roles. So that each user role can process transaction data only for the organization that is assigned to the current role.

To configure multiple organizations in Zuora Revenue, the following outlined steps are involved.

1.  [Step 1:](/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules/multi-org-in-zuora-revenue/define-multiple-configurations) Define the organization in system organization.
2.  [Step 2](/zuora-platform/user-management/multi-org/multi-org-configuration-for-extended-zuora-modules/multi-org-in-zuora-revenue/enable-period-openclose-for-individual-organization): Enable period open/close based on the organization rather than revenue book .
3.  Disable the DEFAULT organization by toggling the Enabled switch to No, and save the change by clicking the Save button.

---
title: "Create a payment and status check"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-set-up/create-a-payment-and-status-check"
product: "zuora-platform"
scraped_at: "2025-12-24T05:19:47.186Z"
---

# Create a payment and status check

Learn how to create and manage payment runs, with permissions controlled by the organizational hierarchy.

The visibility and accessibility of the payments and refunds list view are permission-controlled by the org hierarchy. A user assigned to the root/ parent org will only be able to view and access the payments and refunds data of the root org unit. Similarly, a user assigned to a child org unit (whether branch-level or leaf-level org), can view only the data belonging to the respective org units. There will be no default inheritance of access.

You can create payment runs for single or multiple customer accounts. A user can access only those custom accounts that are associated with the org unit to which the user belongs.

Note: You must have the Manage Payment Runs permission to be able to create, edit, cancel, and delete payment runs. This permission is enabled by default. When disabled, you can only view and download payment runs. An error message is returned if you try to perform actions for which you do not have permission. You must contact your Zuora tenant administrator to request a change to your user permissions.

1.  Navigate to Payments > Payment Runs in the left navigation section.
2.  Click the New Payment Run and complete the following steps:
3.  In the Org Picker field, select the org unit for which you are creating the payment run.
4.  Specify the payment run information mentioned in Steps 3 - 10 in the Create payment run

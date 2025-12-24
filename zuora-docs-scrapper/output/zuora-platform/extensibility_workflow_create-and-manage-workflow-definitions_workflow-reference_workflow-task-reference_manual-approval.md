---
title: "Manual: Approval"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/manual-approval"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:49.006Z"
---

# Manual: Approval

This reference describes the Manual: Approval task.

The manual approval task forces human interaction into an automated Workflow process. For example, if you have a workflow that automatically finds and applies late fees to invoices that meet certain criteria, you can insert a manual approval task to require someone to approve the late fee before it is applied.

When you create a manual approval task, you need to enter the Zuora login username of the approver. Approvers need to go to the Workflow user interface to find out and approve or reject a request. To learn about how to process an approval request, see [Process approval requests in Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/approve-or-reject-approval-tasks-in-workflow). For the task pending on approval, if it is not approved/disapproved in 90 days, it will be marked as failed to approve/disapprove and the workflow will enter into the cleanup process.

For a manual approval task, you need to design two paths following this task to handle the two outcomes (approval or rejection). The two tasks after the manual approval task should use On Approval and On Rejection respectively as the triggers.

## Integration using approval tasks

If you also use the Configurable Payment Retry feature, you can populate all manual approval tasks in Workflow into the Collections tasks list in Configurable Payment Retry, so that collections agents can view the pending collections tasks that have been assigned to them.

To learn about the configurations on the Workflow side, see [Integrate Workflow with Configurable Payment Retry](/zuora-platform/extensibility/workflow/learn-workflow/integration-with-other-products/integrate-workflow-with-configurable-payment-retry).
